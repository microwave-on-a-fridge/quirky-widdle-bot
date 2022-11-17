//woah this exists no way
const { Client, GatewayIntentBits } = require("discord.js")
require("dotenv/config")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.on("ready", () => {
    console.log("Bot is ready.")
})

client.on("messageCreate", message => {
    if (message.content === "test") {
        message.reply("fighting games, amirite?")
    }
})

client.login(process.env.TOKEN)