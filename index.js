import 'dotenv/config'; // должен быть первым
import { app } from './server.js';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`HTTP server listening on ${PORT}`);
  console.log('Telegram bot is running (polling)');
});
