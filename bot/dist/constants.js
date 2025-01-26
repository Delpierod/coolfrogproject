"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = exports.TELEGRAM_BOT_TOKEN = exports.APP_URL = exports.PORT = void 0;
require("dotenv").config();
exports.PORT = Number(process.env.PORT) || 3001;
exports.APP_URL = String(process.env.APP_URL);
exports.TELEGRAM_BOT_TOKEN = String(process.env.TELEGRAM_BOT_TOKEN);
exports.API_URL = String(process.env.API_URL);
//# sourceMappingURL=constants.js.map