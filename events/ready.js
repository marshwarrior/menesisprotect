const {bot} = require('../index');
const botconfig = require("../botconfig.json");
const moment = require('moment');
const Discord = require("discord.js");
const chalk = require('chalk');
const ayarlar = require('../botconfig.json');

bot.on('ready', () => {
  bot.user.setGame("Gelişmiş Koruma Sistemi - Created by ζ'Marsh#9250 ", "https://www.twitch.tv/." );

  const channel = bot.channels.get("605127181647216680");
  if (!channel) return console.error("Kanal bulunamadı!");
  channel.join().then(connection => {
    console.log("Başarıyla bağlanıldı.");
     }).catch(e => {
   
    console.error(e);
  });
})
