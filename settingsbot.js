/*
 * YannAjah AI — settingsbot.js
 * Edit file ini untuk mengatur bot: nama bot, owner, prefix, pairing, limit, harga, link, gambar, pesan.
 * Cukup ganti nilai di sebelah kanan tanda "=" lalu restart bot.
 *
 * Yang TIDAK diatur di sini: password bot & nomor bot (diatur Developer di web database),
 * dan API key APIZ2Z (isi di file .env: APIZ2Z_API_KEY=...).
 */

// ==================== INFO BOT ====================
global.owner = '6285282426298'            // nomor owner (awali 62, tanpa + dan spasi)
global.namaOwner = 'YannDoangJir'
global.ownerTambahan = []                  // owner lain, contoh: ['628111', '628222']
global.botname = 'ꜱᴇɪʜᴀ - ᴍᴅ'
global.botname2 = 'ₛₑᵢₕₐ ₋ ₘd'
global.packname = 'ꜱᴇɪʜᴀ - ᴍᴅ'             // nama pack stiker
global.author = '© Yann Ai Md'             // author stiker
global.timezone = 'Asia/Jakarta'

// ==================== PREFIX & MODE ====================
global.prefix = ['.', '!', '#', '/']       // bisa juga diubah dari chat: .setprefix / .addprefix
global.tanpaPrefix = false                 // true = command tanpa prefix ikut jalan (mis. "menu")
global.public = true                       // false = self mode (hanya owner)
global.onlyGrup = false                    // true = bot hanya merespon di grup
global.onlyPrivate = false                 // true = bot hanya merespon di chat pribadi
global.autoRead = false
global.autoTyping = false
global.wajibDaftar = false                 // true = user harus .daftar dulu

// ==================== PAIRING ====================
global.pairing = 'ask'                     // 'ask' = ditanya (1 QR / 2 kode), 'qr', atau 'pairing'
global.custompairing = 'YANNAJAH'          // kode pairing custom, tepat 8 huruf/angka
global.followSaluran = false               // true = bot otomatis follow saluran di bawah saat terhubung

// ==================== LIMIT & PREMIUM ====================
global.limitHarian = 10                    // limit harian user biasa
global.warnGrup = 3                        // batas peringatan sebelum di-kick
global.cooldown = 3                        // jeda antar command (detik)

// ==================== HARGA & SEWA ====================
global.harga = { prem: '5000', sewa: '10000' }
global.sewa = { bulan1: 10000, bulan3: 25000, bulan6: 45000, bulan12: 80000 }

// ==================== LINK & SALURAN ====================
global.linkOwner = 'https://wa.me/6281249703469'
global.linkGrup = 'https://chat.whatsapp.com/BqJAqcdEjijJHrIWHNr1la'
global.linkSaluran = 'https://whatsapp.com/channel/0029VbCBj0N3LdQTosP3Hj0T'
global.idSaluran = '120363409375529920@newsletter'
global.namaSaluran = '# cenel inpo ꜱᴇɪʜᴀ - ᴍᴅ'

// ==================== PAYMENT ====================
global.dana = ''                           // nomor DANA
global.gopay = ''                          // nomor GoPay
global.qris = 'https://files.catbox.moe/o77sec.png'

// ==================== GAMBAR ====================
global.image = {
  menu: 'https://cdn-alip.clutch.web.id/api/u/mtmyjmca.jpg',     // gambar menu
  menuv3: 'https://cdn-alip.clutch.web.id/api/u/mr8s2q9m.jpg',
  welcome: 'https://files.catbox.moe/3fh8c6.jpg',               // banner welcome
  left: 'https://files.catbox.moe/3fh8c6.jpg',                  // banner left
  reply: 'https://cdn-alip.clutch.web.id/api/u/mtmyi1fe.jpg',   // logo saat bot reply
  qris: 'https://files.catbox.moe/o77sec.png'
}

// ==================== PESAN BOT ====================
global.mess = {
  limit: '🔔 𝗟𝗶𝗺𝗶𝘁 𝗛𝗮𝗯𝗶𝘀\nSilakan ketik *.claim* untuk klaim bonus limit harian\nAtau hubungi owner untuk upgrade ke Premium.',
  owner: '🚫 𝗔𝗸𝘀𝗲𝘀 𝗗𝗶𝘁𝗼𝗹𝗮𝗸\nFitur ini hanya tersedia untuk *Owner Bot*.',
  verifikasi: '🚫 𝗔𝗸𝘀𝗲𝘀 𝗗𝗶𝘁𝗼𝗹𝗮𝗸\nDaftar dulu dengan *.daftar nama,umur* untuk mengakses fitur bot.',
  admin: '🚫 𝗔𝗸𝘀𝗲𝘀 𝗗𝗶𝘁𝗼𝗹𝗮𝗸\nFitur ini khusus untuk *Admin Grup*.',
  botAdmin: '🚫 𝗔𝗸𝘀𝗲𝘀 𝗗𝗶𝘁𝗼𝗹𝗮𝗸\nBot harus menjadi *Admin Grup* untuk menjalankan fitur ini.',
  group: '🚫 𝗔𝗸𝘀𝗲𝘀 𝗗𝗶𝘁𝗼𝗹𝗮𝗸\nFitur ini hanya dapat digunakan di dalam *Grup*.',
  private: '🚫 𝗔𝗸𝘀𝗲𝘀 𝗗𝗶𝘁𝗼𝗹𝗮𝗸\nFitur ini hanya dapat digunakan di *Chat Pribadi*.',
  prem: '🚫 𝗔𝗸𝘀𝗲𝘀 𝗗𝗶𝘁𝗼𝗹𝗮𝗸\nFitur ini hanya tersedia untuk *User Premium*.',
  wait: '⏳ 𝗖𝗼𝘁𝘁𝗼 𝗠𝗮𝘁𝘁𝗲...\nPermintaan sedang diproses.',
  error: '❌ 𝗧𝗲𝗿𝗷𝗮𝗱𝗶 𝗸𝗲𝘀𝗮𝗹𝗮𝗵𝗮𝗻\nSilakan coba kembali beberapa saat lagi.',
  done: '✅ 𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹\nProses telah diselesaikan.',
  cooldown: '⏱️ Tunggu {s} detik sebelum memakai command lagi.',
  disabled: '⛔ Fitur ini sedang dinonaktifkan.',
  needApiKey: '🔑 Fitur ini butuh API key APIZ2Z. Owner perlu mengisi APIZ2Z_API_KEY di file .env.',
  unlicensed: '🔒 Bot belum terverifikasi oleh web database. Hubungi owner.'
}

// ==================== FITUR ====================
global.fiturMati = []                      // matikan command tertentu, contoh: ['tiktok', 'ai']
global.folderPlugin = 'plugins'            // plugin dimuat otomatis dari folder ini (1 file = 1 command)


/* ======================================================================================
 * Di bawah ini pengaturan teknis (session, log, batas media, API). Biasanya tidak perlu diubah.
 * Nilai .env (kalau diisi) menimpa nilai di atas, berguna untuk panel/VPS.
 * ====================================================================================== */
const env = (name, fallback = undefined) => { const v = process.env[name]; return v === undefined || v === '' ? fallback : v; };
const envInt = (name, fallback) => { const v = parseInt(env(name, ''), 10); return Number.isFinite(v) ? v : fallback; };
const envBool = (name, fallback) => { const v = env(name); return v === undefined ? fallback : /^(1|true|yes|on)$/i.test(String(v)); };
const envList = (name, fallback = []) => { const v = env(name); return v ? String(v).split(',').map(s => s.trim()).filter(Boolean) : fallback; };

module.exports = {
  bot: {
    projectName: 'YannAjahNew',
    name: env('BOT_NAME', global.botname),
    name2: env('BOT_NAME2', global.botname2),
    version: require('./package.json').version,
    packname: env('BOT_PACKNAME', global.packname),
    author: env('BOT_AUTHOR', global.author),
    timezone: env('BOT_TIMEZONE', global.timezone),
    locale: 'id-ID'
  },
  owner: { number: env('OWNER_NUMBER', global.owner), name: env('OWNER_NAME', global.namaOwner), extra: envList('OWNER_EXTRA', global.ownerTambahan) },
  prefix: { list: envList('BOT_PREFIX', global.prefix), allowNoPrefix: envBool('BOT_NO_PREFIX', global.tanpaPrefix) },
  chat: {
    public: envBool('BOT_PUBLIC', global.public), groupOnly: envBool('BOT_GROUP_ONLY', global.onlyGrup), privateOnly: envBool('BOT_PRIVATE_ONLY', global.onlyPrivate),
    autoRead: envBool('BOT_AUTOREAD', global.autoRead), autoTyping: envBool('BOT_AUTOTYPING', global.autoTyping), readStatus: false,
    logMessageContent: envBool('BOT_LOG_CONTENT', false)   // isi pesan pribadi tidak dicatat ke log (privasi)
  },
  logger: { level: env('LOG_LEVEL', 'info'), file: env('LOG_FILE', 'library/database/logs/yannajah.log'), baileysLevel: env('BAILEYS_LOG_LEVEL', 'silent') },
  pairing: {
    method: env('PAIRING_METHOD', global.pairing),   // flag --qr / --pairing-code menimpa nilai ini
    phoneNumber: env('PAIRING_NUMBER', ''),
    customCode: env('PAIRING_CUSTOM_CODE', global.custompairing),
    sessionDir: env('SESSION_DIR', 'session'),
    qrMaxRefresh: envInt('PAIRING_QR_MAX_REFRESH', 6),
    pairingTimeoutMs: envInt('PAIRING_TIMEOUT_MS', 180000),
    browser: ['Ubuntu', 'Chrome', '22.04.4'],
    reconnect: { maxAttempts: envInt('RECONNECT_MAX', 12), baseDelayMs: 3000, maxDelayMs: 60000 },
    followChannelOnConnect: envBool('FOLLOW_CHANNEL', global.followSaluran)
  },
  license: {
    // Alamat web database. Di paket bot (build) alamatnya tertanam di yannajah.js dan selalu dipakai.
    serverUrl: (e => (e.locked && e.url ? e.url : env('LICENSE_SERVER_URL', 'http://127.0.0.1:8787')))(require('./library/license-endpoint')),
    instanceName: env('BOT_INSTANCE_NAME', 'yannajah-main'),
    tokenFile: env('LICENSE_TOKEN_FILE', 'library/database/license-session.json'),
    heartbeatMinutes: envInt('LICENSE_HEARTBEAT_MINUTES', 2),
    requestTimeoutMs: envInt('LICENSE_TIMEOUT_MS', 15000),
    offlineGraceMinutes: envInt('LICENSE_OFFLINE_GRACE_MINUTES', 0),   // 0 = web database mati -> bot berhenti
    maxPasswordAttempts: 3
  },
  database: { file: env('BOT_DB_FILE', 'database.json'), dir: 'library/database', saveIntervalMs: envInt('BOT_DB_SAVE_MS', 30000) },
  api: {
    apiz2z: {
      baseUrl: env('APIZ2Z_BASE_URL', 'https://apiz2z.web.id'),
      apiKey: env('APIZ2Z_API_KEY', ''),   // isi di .env, jangan di file ini
      allowedHosts: envList('APIZ2Z_ALLOWED_HOSTS', ['apiz2z.web.id', 'cdn.apiz2z.web.id', 'apiz2z.vercel.app']),
      timeoutMs: envInt('APIZ2Z_TIMEOUT_MS', 60000),
      retries: envInt('APIZ2Z_RETRIES', 2),
      perMinute: envInt('APIZ2Z_PER_MINUTE', 60),
      concurrency: envInt('APIZ2Z_CONCURRENCY', 4),
      maxResponseBytes: envInt('APIZ2Z_MAX_RESPONSE_BYTES', 16 * 1024 * 1024),
      cacheTtlMs: envInt('APIZ2Z_CACHE_TTL_MS', 5 * 60 * 1000)
    }
  },
  plugin: { dir: global.folderPlugin, enableLegacy: true, hotReload: envBool('PLUGIN_HOT_RELOAD', false), disabled: envList('DISABLED_FEATURES', global.fiturMati), trustedExternal: {} },
  media: {
    tmpDir: 'library/database/sampah',
    maxDownloadBytes: envInt('MEDIA_MAX_BYTES', 50 * 1024 * 1024),
    maxUploadBytes: 8 * 1024 * 1024,
    downloadTimeoutMs: 45000,
    ffmpegPath: env('FFMPEG_PATH', 'ffmpeg'),
    maxConcurrent: envInt('MEDIA_MAX_CONCURRENT', 1),
    ffmpegThreads: envInt('FFMPEG_THREADS', 1)
  },
  limit: { daily: envInt('LIMIT_HARIAN', global.limitHarian), premiumUnlimited: true, warnBeforeKick: envInt('WARN_GRUP', global.warnGrup), cooldownSeconds: global.cooldown, spamWindowMs: 8000, spamMaxCommands: 6 },
  permission: { registerRequired: envBool('REGISTER_REQUIRED', global.wajibDaftar), allowEvalForOwner: false },
  cache: { groupMetadataTtlMs: 5 * 60 * 1000, messageCacheSize: 500 },
  concurrency: { commandsPerUser: 2, globalCommands: 24 },
  retry: { sendMessage: 2 },
  timeout: { commandMs: 120000 },
  harga: global.harga,
  sewa: global.sewa,
  links: { owner: global.linkOwner, group: global.linkGrup, channel: global.linkSaluran, channelId: global.idSaluran, channelName: global.namaSaluran },
  payment: { dana: env('PAY_DANA', global.dana), gopay: env('PAY_GOPAY', global.gopay), qris: global.qris },
  delay: { jpm: 3000 },
  image: global.image,
  mess: global.mess
};
