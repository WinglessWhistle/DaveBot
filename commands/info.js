const { exec } = require("child_process");
const { MessageEmbed } = require("discord.js");
const { hostname } = require("os");
gitDetails = null;
    module.exports = {
        name: 'info',
        description: "displays info for this bot.",
        execute(message, args) {
            const embed = new MessageEmbed()
                .setColor("GREEN")
                .setTitle("info")
                .setDescription(`Current Server: ${hostname}`);
            message.channel.send({ embeds: [embed] });
        },
    }