//API Telegraf
const Telegraf = require('telegraf');
//API dialogFlow
const dialogFlow = require('./dialogflow');

//Bot Object with my token.
const bot = new Telegraf('1313808778:AAGXdHfsYoQ2pNZ-2rwNfDVPuxTLOmxd5S0');
//What my bot will do when the user put the /start in the conversation
bot.start((ctx) =>{
  ctx.reply('Test');
});

bot.help((ctx) =>{
  ctx.reply('Helped!');
});



bot.on('message', async function(ctx) {
  const chatId = ctx.message.chat.id;

  const dfresponse = await dialogFlow.sendMessage(chatId.toString(), ctx.message);
  console.log(ctx.message);
  ctx.reply(dfresponse.text);

});

//Initialize the bot.
bot.launch();
