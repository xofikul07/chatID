const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.5875390440:AAE2WSrQ1p9FzR4Qkd5k45kzq-bXnVgyFqQ)

bot.start((ctx) => {
  ctx.reply('Welcome to the chat ID bot! Send me any message and I will tell you the chat ID.')
})

bot.on('text', (ctx) => {
  const chatId = ctx.chat.id
  const message = `The chat ID for this conversation is ${chatId}.`
  ctx.reply(message)
})

bot.command('developer', (ctx) => {
  const message = 'This bot was developed by [YOUR NAME] using Node.js and the Telegraf library. You can find the source code at [YOUR GITHUB REPOSITORY].'
  ctx.reply(message)
})

bot.launch()
