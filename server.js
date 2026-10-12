import express from 'express';
import { bot } from './bot.js';
import { createMessage } from './src/utils/createMessage/index.js';

const app = express();
app.use(express.json());

const STAT_CHAT_ID = process.env.STAT_CHAT_ID;
const MESSAGE_THREAD_ID = process.env.MESSAGE_THREAD_ID;

app.post('/send', async (req, res) => {
  const { name, email, phone, message, checkbox, href } = req.body;

  const text = createMessage({ name, email, phone, message, checkbox, href });

  try {
    await bot.sendMessage(STAT_CHAT_ID, text, {
      message_thread_id: MESSAGE_THREAD_ID,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    });

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

export { app };
