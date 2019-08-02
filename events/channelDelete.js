const Discord = require('discord.js')
const {bot} = require('../index');
const botconfig = require("../botconfig.json");

bot.on('channelDelete', async(channel) => {
    const logChannel = channel.guild.channels.find('name', 'güvenlik-log');
    if (!logChannel) return console.log('Log kanalı bulunamadı.');
    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first())
    const yetkili = entry.executor

    //if (yetkili.id === "551834002596560896") return;

    channel.clone(channel.name, true, true, "Silinen kanal bot tarafından geri açıldı.")
    .then( async clone => {
    	clone.setParent(channel.parent);
    	clone.setPosition(channel.position);
    	clone.replacePermissionOverwrites(channel.overwrites);
    	const embed = new Discord.RichEmbed()
    	.setColor('RED')
    	.setTitle('• Oda Koruması')
    	.setDescription(`**${yetkili}** **${channel.name}** odasını silmeye çalıştı.`);
    	logChannel.send(embed);
    })    






});