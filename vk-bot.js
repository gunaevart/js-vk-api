const VkBot = require('node-vk-bot-api');
let TOKEN = "6334a5aaab239d621ed6032573cda00c99e524717255f27027c183ec708e405aa23e7ebb104e321f8159c"

const bot = new VkBot(TOKEN);



bot.command('Hi', (ctx) => { // На какое слово бот реагирует
    ctx.reply('hi') // Что отвечает бот
})

bot.command('Привет', (ctx) => {
    ctx.reply('hi111')
})
bot.startPolling(() => { // Это запускает нашего бота
    console.log('[BOT] Бот успешно запущен!'); // Сделал себе для понятности запустился или нет
});
