import 'dotenv/config';
import TgBotApi from 'node-telegram-bot-api';

import { commands } from './src/commands/index.js';

const TOKEN = process.env.TOKEN;
const STAT_CHAT_ID = process.env.STAT_CHAT_ID;
const MESSAGE_THREAD_ID = process.env.MESSAGE_THREAD_ID;

export const bot = new TgBotApi(TOKEN, { polling: true });
bot.setMyCommands(commands);

// messages
bot.on('message', async (msg) => {
  // const chatId = msg?.chat?.id;
  const text = msg?.text;

  if (!text) return;
});

// commands
bot.on('callback_query', async (msg) => {
  // const chatId = msg?.message?.chat?.id;
  const text = msg?.data;

  if (!text) return;
});

bot.on(
  'pre_checkout_query',
  async (query) =>
    await bot.answerPreCheckoutQuery(String(query.id), true).catch((error) =>
      bot.sendMessage(STAT_CHAT_ID, `Error: ${error}`, {
        message_thread_id: MESSAGE_THREAD_ID,
      }),
    ),
);
