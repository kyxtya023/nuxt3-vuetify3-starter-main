import { defineEventHandler, readBody, sendError, createError } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';

const BOT_TOKEN = "8056475514:AAGyEDJqqy6IARz2qQ5CHD424mO3_5NaSqw";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
const chatId = 8180227527;
const sendMessage = defineEventHandler(async (event) => {
  const { contactInfo, answers } = await readBody(event);
  const formattedMessage = `
\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ${contactInfo.name}.
\u041C\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430: ${contactInfo.phone}.
\u0412\u043E\u0442 \u043C\u043E\u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u044F:

- \u041F\u043B\u043E\u0449\u0430\u0434\u044C: ${answers.area}
- \u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F: ${answers.configuration.name} (${answers.configuration.title})
- \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0435\u043C\u043E\u0432: ${answers.doorways.text}
- \u0422\u0438\u043F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438: ${answers.installation}
- \u0422\u0438\u043F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: ${answers.mount}
- \u0413\u0440\u0430\u0444\u0438\u043A: ${answers.schedule}

${contactInfo.message ? `\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: ${contactInfo.message}` : ""}
  `;
  if (!formattedMessage) {
    return sendError(event, createError({ statusCode: 400, message: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C chatId \u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435." }));
  }
  try {
    const response = await $fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: "POST",
      body: {
        chat_id: chatId,
        text: formattedMessage,
        parse_mode: "HTML"
      }
    });
    if (response) {
      return { success: true, message: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!" };
    } else {
      console.error("\u041E\u0442\u0432\u0435\u0442 \u043E\u0442 Telegram:", response);
      throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0432 Telegram");
    }
  } catch (error) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0432 Telegram:", error);
    return sendError(event, createError({ statusCode: 500, message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F." }));
  }
});

export { sendMessage as default };
//# sourceMappingURL=send-message.mjs.map
