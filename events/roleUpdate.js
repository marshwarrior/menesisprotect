const Discord = require('discord.js')
const {bot} = require('../index');
const botconfig = require("../botconfig.json");

bot.on('roleUpdate', async(oldRole, newRole, guild) => {
    const logChannel = newRole.guild.channels.find('name', 'güvenlik-log');
    if (!logChannel) return console.log('Log kanalı bulunamadı.');
    const eskiyetkiler = oldRole.permissions
    const entry = await newRole.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first())
    const yetkili = entry.executor

    if (newRole.hasPermission('MANAGE_ROLES')) {
        if (oldRole.hasPermission('MANAGE_ROLES')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Rolleri Yönet*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }

    if (newRole.hasPermission('ADMINISTRATOR')) {
        if (oldRole.hasPermission('ADMINISTRATOR')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Yönetici*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }

    if (newRole.hasPermission('KICK_MEMBERS')) {
        if (oldRole.hasPermission('KICK_MEMBERS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Üyeleri At*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }


    if (newRole.hasPermission('BAN_MEMBERS')) {
        if (oldRole.hasPermission('BAN_MEMBERS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Üyeleri Yasakla*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }

    if (newRole.hasPermission('MANAGE_CHANNELS')) {
        if (oldRole.hasPermission('MANAGE_CHANNELS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Kanalları Yönet*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }

    if (newRole.hasPermission('MANAGE_GUILD')) {
        if (oldRole.hasPermission('MANAGE_GUILD')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Sunucuyu Yönet*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }

    if (newRole.hasPermission('VIEW_AUDIT_LOG')) {
        if (oldRole.hasPermission('VIEW_AUDIT_LOG')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Denetim Kaydını Görüntüle*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }
    if (newRole.hasPermission('MUTE_MEMBERS')) {
        if (oldRole.hasPermission('MUTE_MEMBERS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Üyeleri Sustur*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }

    if (newRole.hasPermission('DEAFEN_MEMBERS')) {
        if (oldRole.hasPermission('DEAFEN_MEMBERS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Üyeleri Sağırlaştır*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }

    if (newRole.hasPermission('MOVE_MEMBERS')) {
        if (oldRole.hasPermission('MOVE_MEMBERS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Üyeleri Taşı*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }        

    if (newRole.hasPermission('MANAGE_NICKNAMES')) {
        if (oldRole.hasPermission('MANAGE_NICKNAMES')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Kullanıcı Adlarını Yönet*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }     

    if (newRole.hasPermission('MANAGE_WEBHOOKS')) {
        if (oldRole.hasPermission('MANAGE_WEBHOOKS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Webhookları Yönet*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }  

    if (newRole.hasPermission('MANAGE_EMOJIS')) {
        if (oldRole.hasPermission('MANAGE_EMOJIS')) return;
        newRole.setPermissions(eskiyetkiler);
        const embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle('• Rol Koruması')
            .setDescription(`**${yetkili}** **${newRole}** rolüne ***Emojileri Yönet*** yetkisi vermeye çalıştı.`);
            logChannel.send(embed);
    }      

});