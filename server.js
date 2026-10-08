import express from 'express';
import { bot } from './bot.js';

const app = express();
app.use(express.json());

const STAT_CHAT_ID = process.env.STAT_CHAT_ID;
const MESSAGE_THREAD_ID = process.env.MESSAGE_THREAD_ID;

app.post('/send', async (req, res) => {
  const { text } = req.body;
  try {
    await bot.sendMessage(STAT_CHAT_ID, text, {
      message_thread_id: MESSAGE_THREAD_ID,
    });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

export { app };
