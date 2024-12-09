import { ssrRenderAttrs, ssrRenderSlot } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/vue@3.5.13_typescript@5.7.2/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/vue@3.5.13_typescript@5.7.2/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/devalue/index.js';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ufo/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unhead/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/destr/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/hookable/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/klona/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/defu/dist/defu.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/pathe/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ohash/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.1_ioredis@5.4.1_magicast@0.3.5_rollup@_wkb5vlqe3fydsakbajvypkvc54/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:async_hooks';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unctx/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/radix3/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/vue-router@4.5.0_vue@3.5.13_typescript@5.7.2_/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BFdpeQd6.mjs.map
