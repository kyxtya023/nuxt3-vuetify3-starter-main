// server/api/send-message.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  return { success: true, message: 'API работает!' };
});
