import { test } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { parseForm, validateForm, buildMail, getSmtpOptions, createServer } from './server.js';

function makeForm(overrides = {}) {
  return {
    Leistungsbereich: 'Website',
    name: 'Max Mustermann',
    email: 'max@example.com',
    Telefonnummer: '',
    subject: 'Testanfrage',
    message: 'Hallo, das ist eine Testnachricht.',
    security_a: '4',
    security_b: '7',
    security_answer: '11',
    website: '',
    ...overrides
  };
}

function encode(form) {
  return new URLSearchParams(form).toString();
}

function sendRequest(server, method, url, body) {
  return new Promise((resolve, reject) => {
    server.listen(0, () => {
      const addr = server.address();
      const req = http.request(
        { host: '127.0.0.1', port: addr.port, method, path: url, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
        (res) => {
          const chunks = [];
          res.on('data', (c) => chunks.push(c));
          res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString() }));
        }
      );
      req.on('error', reject);
      if (body) req.write(body);
      req.end();
    });
  });
}

function makeCaptureTransport() {
  const calls = [];
  const transport = {
    async sendMail(opts) {
      calls.push(opts);
      return { messageId: 'test-id' };
    }
  };
  return { transport, calls };
}

test('parseForm parst urlencoded in ein Object', () => {
  const form = parseForm(Buffer.from('name=Max+Mustermann&email=max%40example.com'));
  assert.equal(form.name, 'Max Mustermann');
  assert.equal(form.email, 'max@example.com');
});

test('validateForm akzeptiert gueltige Eingaben', () => {
  assert.equal(validateForm(makeForm()).ok, true);
});

test('validateForm lehnt fehlende Pflichtfelder ab', () => {
  const form = makeForm({ name: '' });
  const res = validateForm(form);
  assert.equal(res.ok, false);
  assert.equal(res.reason, 'validation');
});

test('validateForm lehnt ungueltige E-Mail ab', () => {
  const res = validateForm(makeForm({ email: 'keine-email' }));
  assert.equal(res.ok, false);
  assert.equal(res.reason, 'validation');
});

test('validateForm lehnt falsche Sicherheitsantwort ab', () => {
  const res = validateForm(makeForm({ security_answer: '42' }));
  assert.equal(res.ok, false);
  assert.equal(res.reason, 'check');
});

test('validateForm lehnt manipulierte Zahlen ausserhalb 0-10 ab', () => {
  assert.equal(validateForm(makeForm({ security_a: '50', security_b: '7', security_answer: '57' })).ok, false);
});

test('validateForm lehnt nicht-ganzzahlige Eingaben ab', () => {
  assert.equal(validateForm(makeForm({ security_a: '4.5', security_b: '7', security_answer: '11.5' })).ok, false);
});

test('buildMail enthaelt alle relevanten Felder', () => {
  const text = buildMail(makeForm({ Telefonnummer: '123' }));
  assert.match(text, /Max Mustermann/);
  assert.match(text, /max@example.com/);
  assert.match(text, /Testanfrage/);
  assert.match(text, /Testnachricht/);
  assert.match(text, /Website/);
  assert.match(text, /123/);
});

test('getSmtpOptions nutzt implicit TLS nur fuer Port 465 als Default', () => {
  const options465 = getSmtpOptions({ SMTP_HOST: 'smtp.example.com', SMTP_PORT: '465', SMTP_USER: 'user', SMTP_PASS: 'pass' });
  const options587 = getSmtpOptions({ SMTP_HOST: 'smtp.example.com', SMTP_PORT: '587', SMTP_USER: 'user', SMTP_PASS: 'pass' });

  assert.equal(options465.secure, true);
  assert.equal(options587.secure, false);
});

test('getSmtpOptions erlaubt SMTP_SECURE Override', () => {
  const secure = getSmtpOptions({ SMTP_HOST: 'smtp.example.com', SMTP_PORT: '587', SMTP_USER: 'user', SMTP_PASS: 'pass', SMTP_SECURE: 'true' });
  const insecure = getSmtpOptions({ SMTP_HOST: 'smtp.example.com', SMTP_PORT: '465', SMTP_USER: 'user', SMTP_PASS: 'pass', SMTP_SECURE: 'false' });

  assert.equal(secure.secure, true);
  assert.equal(insecure.secure, false);
});

test('getSmtpOptions lehnt unvollstaendige SMTP-Konfiguration ab', () => {
  assert.throws(() => getSmtpOptions({ SMTP_HOST: 'smtp.example.com', SMTP_USER: 'user' }), /SMTP_HOST, SMTP_USER and SMTP_PASS/);
});

test('getSmtpOptions lehnt E-Mail-Adresse als SMTP_HOST ab', () => {
  assert.throws(
    () => getSmtpOptions({ SMTP_HOST: 'info@example.com', SMTP_USER: 'user', SMTP_PASS: 'pass' }),
    /SMTP_HOST must be a hostname/
  );
});

test('POST /contact mit gueltigem Formular sendet Mail und redirectet auf /danke/', async () => {
  const { transport, calls } = makeCaptureTransport();
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'POST', '/contact', encode(makeForm()));
    assert.equal(res.status, 303);
    assert.equal(res.headers.location, '/danke/');
    assert.equal(calls.length, 1);
    assert.equal(calls[0].replyTo, 'max@example.com');
  } finally {
    server.close();
  }
});

test('Honeypot sendet keine Mail, redirectet aber auf /danke/', async () => {
  const { transport, calls } = makeCaptureTransport();
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'POST', '/contact', encode(makeForm({ website: 'spam' })));
    assert.equal(res.status, 303);
    assert.equal(res.headers.location, '/danke/');
    assert.equal(calls.length, 0);
  } finally {
    server.close();
  }
});

test('Fehlende Pflichtfelder redirecten auf Fehlerseite reason=validation', async () => {
  const { transport, calls } = makeCaptureTransport();
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'POST', '/contact', encode(makeForm({ name: '' })));
    assert.equal(res.status, 303);
    assert.match(res.headers.location, /\/kontakt-fehler\/\?reason=validation/);
    assert.equal(calls.length, 0);
  } finally {
    server.close();
  }
});

test('Falsche Sicherheitsantwort redirectet auf reason=check', async () => {
  const { transport, calls } = makeCaptureTransport();
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'POST', '/contact', encode(makeForm({ security_answer: '99' })));
    assert.match(res.headers.location, /\/kontakt-fehler\/\?reason=check/);
    assert.equal(calls.length, 0);
  } finally {
    server.close();
  }
});

test('SMTP-Fehler redirectet auf reason=send', async () => {
  const transport = { async sendMail() { throw new Error('smtp down'); } };
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'POST', '/contact', encode(makeForm()));
    assert.match(res.headers.location, /\/kontakt-fehler\/\?reason=send/);
  } finally {
    server.close();
  }
});

test('GET /contact ergibt 405', async () => {
  const { transport } = makeCaptureTransport();
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'GET', '/contact');
    assert.equal(res.status, 405);
  } finally {
    server.close();
  }
});

test('GET /health antwortet 200 und JSON', async () => {
  const { transport } = makeCaptureTransport();
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'GET', '/health');
    assert.equal(res.status, 200);
    assert.equal(JSON.parse(res.body).ok, true);
  } finally {
    server.close();
  }
});

test('Unbekannte URL ergibt 404', async () => {
  const { transport } = makeCaptureTransport();
  const server = createServer(() => transport);
  try {
    const res = await sendRequest(server, 'GET', '/wrong');
    assert.equal(res.status, 404);
  } finally {
    server.close();
  }
});
