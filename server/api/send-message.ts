import { defineEventHandler, sendError, createError, EventHandlerRequest, H3Event } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

// Токен бота и chatId
const BOT_TOKEN = '8141959117:AAEepDUMRWkLExLZOm5nN-kjxnWdjWVYvMM';
const bot = new TelegramBot(BOT_TOKEN, { polling: false });
const chatId = 6017439095;

interface ContactInfo {
  name: string;
  phone: string;
  message?: string;
}

interface Answers {
  area: string;
  configuration: {
    name: string;
    title: string;
  };
  doorways: {
    text: string;
  };
  mosquito: string;
  installation: string;
  mount: string;
  schedule: string;
}

// Основная функция для обработки POST-запроса
export default defineEventHandler(async (event) => {
  const { contactInfo, answers }: { contactInfo: ContactInfo; answers: Answers } = await readBody(event);
  console.log('contactInfo',contactInfo)
  console.log('answers',answers)
  // Формируем сообщение
  const formattedMessage = `
Здравствуйте! Меня зовут ${contactInfo.name}.
Мой номер телефона: ${contactInfo.phone}.
Вот мои предпочтения:

- Площадь: ${answers.area}
- Конфигурация: ${answers.configuration.name} (${answers.configuration.title})
- Количество проемов: ${answers.doorways.text}
- Москитные сетки: ${answers.mosquito === "yes" ? "Да" : "Нет"}
- Тип установки: ${answers.installation}
- Тип крепления: ${answers.mount}
- График: ${answers.schedule}

${contactInfo.message ? `Дополнительное сообщение: ${contactInfo.message}` : ''}
  `;

  if (!chatId || !formattedMessage) {
    return sendError(event, createError({ statusCode: 400, message: 'Необходимо указать chatId и сообщение.' }));
  }

  try {
    // Отправка сообщения через Telegram API
    await bot.sendMessage(chatId, formattedMessage);
    return { success: true, message: 'Сообщение успешно отправлено!' };
  } catch (error) {
    console.error('Ошибка отправки сообщения в Telegram:', error);
    return sendError(event, createError({ statusCode: 500, message: 'Ошибка при отправке сообщения.' }));
  }
});
function useBody(event: H3Event<EventHandlerRequest>): { contactInfo: ContactInfo; answers: Answers; } | PromiseLike<{ contactInfo: ContactInfo; answers: Answers; }> {
  throw new Error('Function not implemented.');
}

