import express from 'express';
import { bot } from './bot.js';

const app = express();
app.use(express.json());

const STAT_CHAT_ID = process.env.STAT_CHAT_ID;

app.post('/send', async (req, res) => {
  const { text } = req.body;
  try {
    await bot.sendMessage(STAT_CHAT_ID, text);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

export { app };
