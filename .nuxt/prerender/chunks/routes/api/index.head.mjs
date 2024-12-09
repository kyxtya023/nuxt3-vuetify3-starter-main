import { eventHandler, sendNoContent } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
import { r as requireNuxtHubAuthorization } from '../../_/auth.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ofetch/dist/node.mjs';

const index_head = eventHandler(async (event) => {
  await requireNuxtHubAuthorization(event);
  return sendNoContent(event);
});

export { index_head as default };
//# sourceMappingURL=index.head.mjs.map
