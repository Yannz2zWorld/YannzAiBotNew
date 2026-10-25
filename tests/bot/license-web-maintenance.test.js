'use strict';
// LicenseClient: selama maintenance web database, status dicek ulang tiap 30 detik (bot lanjut jalan
// begitu Developer mematikannya); timer cepat berhenti saat maintenance web selesai / heartbeat dihentikan.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { LicenseClient } = require('../../library/license');

test('maintenance web: timer cek-ulang aktif selama scope web, berhenti saat selesai', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lic-'));
  try {
    const lic = new LicenseClient({ serverUrl: 'http://127.0.0.1:9', instanceName: 'test-instance', heartbeatMinutes: 10, offlineGraceMinutes: 0, tokenFile: path.join(dir, 's.json'), timeoutMs: 1000 }, { rootDir: dir });
    lic.session.token = 'yab_' + 'x'.repeat(43);
    lic._apply({ allowed: true, maintenance: { active: true, scope: 'web', message: 'm' } });
    assert.ok(lic.webTimer, 'timer cek-ulang dibuat');
    assert.equal(lic.maintenance().scope, 'web');
    lic._apply({ allowed: true, maintenance: { active: false, scope: null, message: null } });
    assert.equal(lic.webTimer, null, 'timer berhenti setelah maintenance web mati');
    lic._apply({ allowed: true, maintenance: { active: true, scope: 'web', message: 'm' } });
    lic.stopHeartbeat();
    assert.equal(lic.webTimer, null);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
