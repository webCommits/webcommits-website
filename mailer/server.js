import http from 'node:http';
import nodemailer from 'nodemailer';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const BODY_LIMIT = 32 * 1024;

const required = ['Leistungsbereich', 'name', 'email', 'subject', 'message', 'security_a', 'security_b', 'security_answer'];
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASS must be set');
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === undefined ? port === 465 : process.env.SMTP_SECURE === 'true',
    auth: { user, pass }
  });
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
    console.log(`mailer listening on :${PORT}`);
  });
}