import 'dotenv/config';
import TgBotApi from 'node-telegram-bot-api';

import { commands } from './src/commands/index.js';

const token = process.env.TOKEN;
const statChatId = process.env.STAT_CHAT_ID;

export const bot = new TgBotApi(token, { polling: true });
bot.setMyCommands(commands);

// messages
bot.on('message', async (msg) => {
  const chatId = msg?.chat?.id;
  const text = msg?.text;

  if (chatId) {
    await bot.sendMessage(chatId, `Test message: ${text}`);
  }
});

// commands
bot.on('callback_query', async (msg) => {
  const chatId = msg?.message?.chat?.id;
  const text = msg?.data;

  if (chatId) {
    await bot.sendMessage(chatId, `Test callback_query: ${text}`);
  }
});

bot.on(
  'pre_checkout_query',
  async (query) =>
    await bot
      .answerPreCheckoutQuery(String(query.id), true)
      .catch((error) => bot.sendMessage(statChatId, `Error: ${error}`)),
);
