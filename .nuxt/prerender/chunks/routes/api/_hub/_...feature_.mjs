import { eventHandler, createError } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
import { r as requireNuxtHubFeature } from '../../../_/features.mjs';
import '../../../_/nitro.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ufo/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/destr/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/hookable/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ofetch/dist/node.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unenv/runtime/fetch/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/pathe/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@iconify/utils/lib/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ohash/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/klona/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/defu/dist/defu.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/scule/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/nuxt3-vuetify3-starter-main/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:async_hooks';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unctx/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/radix3/dist/index.mjs';

const ____feature_ = eventHandler((event) => {
  const [feature] = (event.context.params?.feature || "").split("/");
  requireNuxtHubFeature(feature);
  throw createError({
    statusCode: 404,
    message: `Not found`
  });
});

export { ____feature_ as default };
//# sourceMappingURL=_...feature_.mjs.map
