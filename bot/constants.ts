require("dotenv").config();

export const PORT = Number(process.env.PORT) || 3001;
export const APP_URL = String(process.env.APP_URL);
export const TELEGRAM_BOT_TOKEN = String(process.env.TELEGRAM_BOT_TOKEN);
export const API_URL = String(process.env.API_URL);
