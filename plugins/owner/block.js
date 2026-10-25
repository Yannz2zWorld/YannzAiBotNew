'use strict';
const { toJid } = require('../../library/function');
const { O, sock, targetNumber } = require('../../lib/owner');

module.exports = O({ id: 'owner.block', name: 'block', description: 'Blokir kontak di WhatsApp', usage: '<nomor/@tag>', async run(ctx) { await sock(ctx).updateBlockStatus(toJid(targetNumber(ctx)), 'block'); await ctx.reply('✅ Diblokir.'); } });
