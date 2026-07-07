import http from 'node:http';
import nodemailer from 'nodemailer';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const BODY_LIMIT = 32 * 1024;

const required = ['Leistungsbereich', 'name', 'email', 'subject', 'message', 'security_a', 'security_b', 'security_answer'];
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseBooleanEnv(value) {
  if (value === undefined || value === null || value === '') return undefined;
  return ['1', 'true', 'yes', 'on'].includes(String(value).trim().toLowerCase());
}

function maskValue(value) {
  if (!value) return '<unset>';
  if (value.length <= 4) return '****';
  return `${value.slice(0, 2)}***${value.slice(-2)}`;
}

function formatError(err) {
  return {
    name: err?.name,
    message: err?.message,
    code: err?.code,
    command: err?.command,
    responseCode: err?.responseCode,
    response: err?.response
  };
}

export function parseForm(buf) {
  const params = new URLSearchParams(buf.toString('utf8'));
  const out = {};
  for (const [k, v] of params.entries()) out[k] = v.trim();
  return out;
}

export function validateForm(form) {
  for (const key of required) {
    if (!form[key]) return { ok: false, reason: 'validation' };
  }
  if (!emailRe.test(form.email)) return { ok: false, reason: 'validation' };

  const a = Number(form.security_a);
  const b = Number(form.security_b);
  const ans = Number(form.security_answer);
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(ans)) return { ok: false, reason: 'check' };
  if (a < 0 || a > 10 || b < 0 || b > 10) return { ok: false, reason: 'check' };
  if (a + b !== ans) return { ok: false, reason: 'check' };

  return { ok: true };
}

export function buildMail(form) {
  const lines = [
    'Neue Anfrage über webCommits.info',
    '',
    `Leistungsbereich: ${form.Leistungsbereich}`,
    `Name: ${form.name}`,
    `E-Mail: ${form.email}`,
  ];
  if (form.Telefonnummer) lines.push(`Telefonnummer: ${form.Telefonnummer}`);
  if (form.subject) lines.push(`Betreff: ${form.subject}`);
  lines.push('');
  lines.push('Nachricht:');
  lines.push(form.message || '');
  return lines.join('\n');
}

export function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > BODY_LIMIT) {
        req.destroy();
        reject(new Error('too_large'));
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export function getSmtpOptions(env = process.env) {
  const host = env.SMTP_HOST;
  const port = env.SMTP_PORT ? Number(env.SMTP_PORT) : 465;
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASS must be set');
  }
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error('SMTP_PORT must be a valid port number');
  }

  const secureEnv = parseBooleanEnv(env.SMTP_SECURE);
  return {
    host,
    port,
    secure: secureEnv === undefined ? port === 465 : secureEnv,
    auth: { user, pass }
  };
}

export function createTransport() {
  return nodemailer.createTransport(getSmtpOptions());
}

export function createHandler(transportFactory) {
  const makeTransport = transportFactory || createTransport;
  return async (req, res) => {
    if (req.method !== 'POST') {
      res.statusCode = 405;
      res.setHeader('Allow', 'POST');
      res.end('Method Not Allowed');
      return;
    }

    let buf;
    try {
      buf = await readBody(req);
    } catch (err) {
      res.statusCode = 413;
      res.end('Payload Too Large');
      return;
    }

    const form = parseForm(buf);

    if (form.website) {
      res.statusCode = 303;
      res.setHeader('Location', '/danke/');
      res.end();
      return;
    }

    const result = validateForm(form);
    if (!result.ok) {
      res.statusCode = 303;
      res.setHeader('Location', `/kontakt-fehler/?reason=${result.reason}`);
      res.end();
      return;
    }

    try {
      const transport = makeTransport();
      await transport.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_RECIPIENT || process.env.SMTP_USER,
        replyTo: form.email,
        subject: `Neue Anfrage über webCommits.info: ${form.subject}`,
        text: buildMail(form)
      });
      res.statusCode = 303;
      res.setHeader('Location', '/danke/');
      res.end();
    } catch (err) {
      console.error('[mailer] send failed', JSON.stringify(formatError(err)));
      res.statusCode = 303;
      res.setHeader('Location', '/kontakt-fehler/?reason=send');
      res.end();
    }
  };
}

export function createServer(transportFactory) {
  const handler = createHandler(transportFactory);
  const server = http.createServer((req, res) => {
    if (req.url === '/health' && req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ok: true }));
      return;
    }
    if (req.url !== '/contact') {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    handler(req, res);
  });
  return server;
}

if (process.env.NODE_ENV !== 'test') {
  createServer().listen(PORT, () => {
    try {
      const options = getSmtpOptions();
      console.log(`[mailer] smtp host=${options.host} port=${options.port} secure=${options.secure} user=${maskValue(options.auth.user)} from=${maskValue(process.env.SMTP_FROM || process.env.SMTP_USER)} recipient=${maskValue(process.env.CONTACT_RECIPIENT || process.env.SMTP_USER)}`);
    } catch (err) {
      console.error('[mailer] smtp config invalid', JSON.stringify(formatError(err)));
    }
    console.log(`mailer listening on :${PORT}`);
  });
}
