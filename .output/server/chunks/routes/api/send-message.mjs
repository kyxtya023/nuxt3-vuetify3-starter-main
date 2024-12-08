import { d as defineEventHandler } from '../../_/index.mjs';

const sendMessage = defineEventHandler((event) => {
  return { success: true, message: "API \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442!" };
});

export { sendMessage as default };
//# sourceMappingURL=send-message.mjs.map
