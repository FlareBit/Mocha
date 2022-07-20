const { CommandInteraction } = require("discord.js");
const MOCHA = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "resume",
  description: `resume paused song in queue`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {MOCHA} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    if (queue.paused) {
      queue.resume();
      client.embed(
        interaction,
        `${client.config.emoji.SUCCESS} Queue Resumed !!`
      );
    } else {
      client.embed(
        interaction,
        `${client.config.emoji.ERROR} Queue already Resumed !!`
      );
    }
  },
};
