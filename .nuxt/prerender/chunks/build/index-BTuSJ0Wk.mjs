import { b as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CALMmd_g.mjs';
import { defineComponent, createElementBlock, ref, provide, toRef, computed, useSSRContext, useAttrs, toValue, mergeProps, unref, watch, withCtx, createVNode, createTextVNode, toDisplayString, inject, resolveDynamicComponent } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/vue/index.mjs';
import { twMerge, twJoin } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import { m as mergeConfig, a as appConfig, _ as _export_sfc, u as useAppConfig, g as get, o as omit, b as useHead, c as useNuxtApp, d as useRequestEvent, e as useRuntimeConfig } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderVNode } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/vue/server-renderer/index.mjs';
import { defu } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/defu/dist/defu.mjs';
import { hasProtocol, withLeadingSlash, joinURL, parseURL } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ufo/dist/index.mjs';
import { appendHeader } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
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
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/scule/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/nuxt3-vuetify3-starter-main/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:async_hooks';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unctx/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/radix3/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unhead/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/devalue/index.js';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@unhead/ssr/dist/index.mjs';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useUI = (key, $ui, $config, $wrapperClass, withAppConfig = false) => {
  const $attrs = useAttrs();
  const appConfig2 = useAppConfig();
  const ui = computed(() => {
    var _a;
    const _ui = toValue($ui);
    const _config = toValue($config);
    const _wrapperClass = toValue($wrapperClass);
    return mergeConfig(
      (_ui == null ? void 0 : _ui.strategy) || ((_a = appConfig2.ui) == null ? void 0 : _a.strategy),
      _wrapperClass ? { wrapper: _wrapperClass } : {},
      _ui || {},
      withAppConfig ? get(appConfig2.ui, key, {}) : {},
      _config || {}
    );
  });
  const attrs = computed(() => omit($attrs, ["class"]));
  return {
    ui,
    attrs
  };
};
const arrow = {
  base: "invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",
  ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",
  rounded: "before:rounded-sm",
  background: "before:bg-gray-200 dark:before:bg-gray-800",
  shadow: "before:shadow",
  placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};
const inputMenu = {
  container: "z-20 group",
  trigger: "flex items-center w-full",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-white dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-1.5 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-1.5 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-5 w-5",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },
    selectedIcon: {
      wrapper: "absolute inset-y-0 end-0 flex items-center",
      padding: "pe-2",
      base: "h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"
    },
    avatar: {
      base: "flex-shrink-0",
      size: "2xs"
    },
    chip: {
      base: "flex-shrink-0 w-2 h-2 mx-1 rounded-full"
    }
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    trailingIcon: "i-heroicons-chevron-down-20-solid",
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
};
({
  ...inputMenu,
  select: "inline-flex items-center text-left cursor-default",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  required: "absolute inset-0 w-px opacity-0 cursor-default",
  label: "block truncate",
  option: {
    ...inputMenu.option,
    create: "block truncate"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  popper: {
    placement: "bottom-end"
  },
  default: {
    selectedIcon: "i-heroicons-check-20-solid",
    clearSearchOnClose: false,
    showCreateOptionWhen: "empty",
    searchablePlaceholder: {
      label: "Search..."
    },
    empty: {
      label: "No options."
    },
    optionEmpty: {
      label: 'No results for "{query}".'
    }
  },
  arrow: {
    ...arrow,
    ring: "before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",
    background: "before:bg-white dark:before:bg-gray-700"
  }
});
const skeleton = {
  base: "animate-pulse",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-md"
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.skeleton, skeleton);
const _sfc_main$9 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("skeleton", toRef(props, "ui"), config);
    const skeletonClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.background,
        ui.value.rounded
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      skeletonClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.skeletonClass }, _ctx.attrs, _attrs), null), _parent);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Skeleton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file://D:/nuxt3-vuetify3-starter-main/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "") {
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const getImage = (url) => ({ url });
const noneRuntime$fMYyJORy45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "none",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["none"]: { provider: noneRuntime$fMYyJORy45, defaults: {} }
};
const useImage = () => {
  const config2 = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config2.app.baseURL
    },
    runtimeConfig: config2
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false }
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        ref_key: "imgEl",
        ref: imgEl,
        class: props.placeholder && !placeholderLoaded.value ? props.placeholderClass : void 0
      }, {
        ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
        ...imgAttrs.value,
        ...unref(attrs)
      }, { src: src.value }, _attrs))}>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const skeletonCount = 16;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "WatermarkImg",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const processedImages = ref([]);
    const isModalOpen = ref(false);
    const currentImage = ref("");
    const loading = ref(true);
    const processImages = async () => {
      {
        return;
      }
    };
    const openModal = (image) => {
      currentImage.value = image;
      isModalOpen.value = true;
    };
    watch(() => props.images, processImages, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USkeleton = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$8;
      _push(`<!--[-->`);
      if (loading.value) {
        _push(`<div class="watermark-else" data-v-c2175326><!--[-->`);
        ssrRenderList(skeletonCount, (index2) => {
          _push(`<div data-v-c2175326>`);
          _push(ssrRenderComponent(_component_USkeleton, { class: "w-[100%] h-[22rem] rounded-xl" }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="watermark-else" data-v-c2175326><!--[-->`);
        ssrRenderList(processedImages.value, (image, index2) => {
          _push(`<div data-v-c2175326>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: image,
            alt: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441 \u0432\u043E\u0434\u044F\u043D\u044B\u043C \u0437\u043D\u0430\u043A\u043E\u043C",
            width: "100%",
            height: "auto",
            class: "watermark-img",
            quality: "80",
            format: "webp",
            loading: "lazy",
            onClick: ($event) => openModal(image)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (isModalOpen.value) {
        _push(`<div class="modal" data-v-c2175326>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: currentImage.value,
          alt: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WatermarkImg.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-c2175326"]]);
const _imports_0$3 = "data:image/png;base64,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";
const _imports_1$2 = "data:image/png;base64,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";
const _imports_2$1 = "data:image/png;base64,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";
const _imports_3 = "" + buildAssetsURL("photo_2022-07-14_15-.CIBk-ypB.jpg");
const _imports_4 = "" + buildAssetsURL("IMG_7449.mab56Xug.jfif");
const _imports_5 = "" + buildAssetsURL("IMG_7823.CCTgAkut.jfif");
const _imports_6 = "" + buildAssetsURL("_.D3P5tEjR.jfif");
const _imports_7 = "" + buildAssetsURL("76636daefdd44b058addb6c6bd1ac107.CkryDl_V.jpg");
const _imports_0$2 = "" + buildAssetsURL("logo.C0Kok8DY.svg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const menuList = [
      { name: "\u0426\u0435\u043D\u044B", path: "#price" },
      { name: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B", path: "#material" },
      { name: "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?", path: "#why" },
      { name: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430", path: "#advantages" },
      { name: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B", path: "#faq" }
    ];
    const showMobileMenu = ref(false);
    const scrollToElement = (target) => {
      var _a;
      const element = (void 0).querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      showMobileMenu.value = false;
      (_a = (void 0).querySelector("body")) == null ? void 0 : _a.classList.remove("_lock");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-2603e027><div class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__inner"])}" data-v-2603e027><div class="header__contacts" data-v-2603e027><div class="container" data-v-2603e027><div class="header__buttons" data-v-2603e027><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "gap": "1.5rem" })}" data-v-2603e027><a class="header__button-link" href="tel:+1234567890" target="_blank" aria-label="\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C" data-v-2603e027>+7 (977) 263-40-00</a><a class="header__button-link" href="mailto:" data-v-2603e027>yt@ya.ru</a></div><div class="header__logo" data-v-2603e027>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" data-v-2603e027${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="block-text" data-v-2603e027><p class="text" data-v-2603e027>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E</p><p class="text" data-v-2603e027>\u0441 10:00 \u0434\u043E 19:00</p></div></div></div></div><div class="block" style="${ssrRenderStyle({ "width": "100%" })}" data-v-2603e027><div class="container" data-v-2603e027><div class="header__menu-block" data-v-2603e027><nav class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__menu menu"])}" data-v-2603e027><ul class="menu__list" data-v-2603e027><!--[-->`);
      ssrRenderList(menuList, (item, index2) => {
        _push(`<li class="menu__list-item" data-v-2603e027>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "menu__list-item-link",
          to: item.path,
          onClick: ($event) => scrollToElement(item.path)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="header__buttons" data-v-2603e027><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "gap": "1.5rem" })}" data-v-2603e027><a class="header__button-link" href="#" data-v-2603e027>+7 (977) 263-40-00</a><a class="header__button-link" href="mailto:" data-v-2603e027>yt@ya.ru</a></div><div class="block-text" data-v-2603e027><p class="text" data-v-2603e027>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E</p><p class="text" data-v-2603e027>\u0441 10:00 \u0434\u043E 19:00</p></div></div></nav><div class="header__logo" data-v-2603e027>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" data-v-2603e027${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$2,
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header__button",
        href: "tel:+1234567890",
        target: "_blank",
        "aria-label": "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 `);
          } else {
            return [
              createTextVNode(" \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__burger"])}" data-v-2603e027><span data-v-2603e027></span></nav></div></div></div></div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2603e027"]]);
const _sfc_main$5 = {
  __name: "Accordeon",
  __ssrInlineRender: true,
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const activeIndex = ref(null);
    const contentHeights = ref([]);
    const contents = ref([]);
    const splitText = (text) => {
      if (typeof text !== "string") {
        text = String(text);
      }
      const boldTextRegex = /\*\*(.*?)\*\*/g;
      text = text.replace(boldTextRegex, '<strong style="font-weight: 600; font-size: 1.8rem;line-height: 150%;font-family: Unbounded;font-weight: 500;color: #212121;">$1</strong>');
      text = text.replace(/\n\+/g, "<span style='display:block; margin-top: 2rem;'></span>");
      text = text.replace(/\n\-/g, "<span style='display:block; margin-bottom: 2rem;'></span>");
      text = text.replace(/\n/g, "<span style='display:block; margin-bottom: 1rem;'></span>");
      text = text.replace(/<\/span>,/g, "</span>");
      return text;
    };
    watch(activeIndex, () => {
      contentHeights.value = contents.value.map(
        (el) => el ? `${el.scrollHeight}px` : "0px"
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.questions, (item, index2) => {
        _push(`<div class="${ssrRenderClass([{ active: activeIndex.value === index2 }, "question"])}" data-v-0fd979cf><h3 class="question__title" data-v-0fd979cf>${ssrInterpolate(item.name)}</h3><div class="question__content" style="${ssrRenderStyle({ maxHeight: activeIndex.value === index2 ? contentHeights.value[index2] : "0px" })}" data-v-0fd979cf><!--[-->`);
        ssrRenderList(item.content, (block, blockIndex) => {
          var _a, _b, _c;
          _push(`<div class="content-block" data-v-0fd979cf>`);
          if (block.type === "image") {
            _push(`<div class="question__image" data-v-0fd979cf><img${ssrRenderAttr("src", block.src)}${ssrRenderAttr("alt", block.alt)} data-v-0fd979cf><p class="question__image-description" data-v-0fd979cf>${ssrInterpolate(block.description)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "highlighted-text") {
            _push(`<p class="highlighted-text" data-v-0fd979cf>${(_a = splitText(block.text)) != null ? _a : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "highlighted-background-text") {
            _push(`<p class="highlighted-background-text" data-v-0fd979cf>${(_b = splitText(block.text)) != null ? _b : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "text") {
            _push(`<p class="question__text" data-v-0fd979cf>${(_c = splitText(block.text)) != null ? _c : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "list") {
            _push(`<div class="question__list-wrapper" data-v-0fd979cf><div class="list-container" data-v-0fd979cf><!--[-->`);
            ssrRenderList(block.lists, (list, listIndex) => {
              var _a2;
              _push(`<div class="list-column" data-v-0fd979cf>`);
              if (list.title) {
                _push(`<p class="question__list-title" data-v-0fd979cf>${(_a2 = splitText(list.title)) != null ? _a2 : ""}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<ul class="question__list" data-v-0fd979cf><!--[-->`);
              ssrRenderList(list.items, (listItem, itemIndex) => {
                var _a3;
                _push(`<li class="question__list-item" data-v-0fd979cf><p data-v-0fd979cf>${(_a3 = splitText(listItem)) != null ? _a3 : ""}</p></li>`);
              });
              _push(`<!--]--></ul></div>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accordeon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Accordeon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0fd979cf"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-ea5ac0fb><div class="container" data-v-ea5ac0fb><div class="footer__inner" data-v-ea5ac0fb><div class="footer__top" data-v-ea5ac0fb><div class="footer__left-column" data-v-ea5ac0fb><div class="footer__logo" data-v-ea5ac0fb><a href="#" data-v-ea5ac0fb><img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" data-v-ea5ac0fb></a></div></div></div><div class="footer__bottom" data-v-ea5ac0fb><p class="footer__text" data-v-ea5ac0fb> \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \xA9 2016 \u2013 2024 \u0426\u0435\u043D\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u2014 \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u043E\u0439, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C\u043E\u0439 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u0441\u0442\u0430\u0442\u044C\u0438 437 \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u0434\u0435\u043A\u0441\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0430\u0432\u0430 \u0431\u0435\u0437 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0446\u0435\u043D\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 </p></div></div></div></footer>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ea5ac0fb"]]);
const _sfc_main$3 = {
  __name: "TabContent",
  __ssrInlineRender: true,
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs__content" }, _attrs))} data-v-7daec7f0><h2 class="tabs__title" data-v-7daec7f0>${ssrInterpolate(__props.content.title)}</h2>`);
      if (__props.content.description.length) {
        _push(`<div class="tabs__block-text" data-v-7daec7f0><!--[-->`);
        ssrRenderList(__props.content.description, (text, index2) => {
          _push(`<p class="tabs__text" data-v-7daec7f0>${ssrInterpolate(text)}</p>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="tabs__items" data-v-7daec7f0><!--[-->`);
      ssrRenderList(__props.content.items, (item, index2) => {
        _push(`<div class="tabs__item" data-v-7daec7f0><div class="tabs__item-img" data-v-7daec7f0><img${ssrRenderAttr("src", item.img)} alt="" data-v-7daec7f0></div><div class="tabs__item-block-text" data-v-7daec7f0><h3 class="tabs__item-title" data-v-7daec7f0>${ssrInterpolate(item.title)}</h3>`);
        if (item.details) {
          _push(`<ul class="tabs__item-list" data-v-7daec7f0><!--[-->`);
          ssrRenderList(item.details, (detail, idx) => {
            _push(`<li class="tabs__item-list-item" data-v-7daec7f0>${ssrInterpolate(detail)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        if (item.description) {
          _push(`<p class="tabs__item-descr" data-v-7daec7f0>${ssrInterpolate(item.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TabContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TabContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7daec7f0"]]);
const _imports_0$1 = "data:image/png;base64,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";
const _imports_1$1 = "data:image/png;base64,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";
const _sfc_main$2 = {
  __name: "btnFloating",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="floating-btn" data-v-1f685cd9><i class="phone" data-v-1f685cd9><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1f685cd9><path d="M12 5V12M12 12V19M12 12H19M12 12H5" stroke="#222222" stroke-width="1.5" stroke-linecap="round" data-v-1f685cd9></path></svg></i></div>`);
      if (isMenuVisible.value) {
        _push(`<div class="floating-btn-menu" data-v-1f685cd9><a class="floating-btn-item whatsapp-btn" href="https://wa.me/+1234567890" target="_blank" aria-label="\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 WhatsApp" data-v-1f685cd9><i class="fa fa-phone" data-v-1f685cd9><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-1f685cd9></i></a><a class="floating-btn-item phone-btn" href="tel:+1234567890" target="_blank" aria-label="\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C" data-v-1f685cd9><i class="fa fa-whatsapp" data-v-1f685cd9><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-1f685cd9></i></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btnFloating.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const btnFloating = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1f685cd9"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.99979%2012L10.2927%2014.2929C10.6832%2014.6834%2011.3164%2014.6834%2011.7069%2014.2929L15.9998%2010M4.20557%209.23206V14.768C4.20557%2015.8398%204.77736%2016.8301%205.70557%2017.366L10.4998%2020.134C11.428%2020.6699%2012.5716%2020.6699%2013.4998%2020.134L18.294%2017.366C19.2222%2016.8301%2019.794%2015.8398%2019.794%2014.768V9.23206C19.794%208.16026%2019.2222%207.16988%2018.294%206.63398L13.4998%203.86604C12.5716%203.33014%2011.428%203.33014%2010.4998%203.86604L5.70557%206.63398C4.77736%207.16988%204.20557%208.16026%204.20557%209.23206Z'%20stroke='%2382DBF7'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.9998%2013L11.9998%2015M11.9998%2015L13.9998%2017M11.9998%2015L13.9998%2013M11.9998%2015L9.9998%2017M17.926%2021H6.07361C3.7918%2021%202.34531%2018.5536%203.44496%2016.5543L10.2474%204.18625C11.0072%202.8047%2012.9924%202.8047%2013.7522%204.18625L20.5546%2016.5543C21.6543%2018.5536%2020.2078%2021%2017.926%2021Z'%20stroke='%23D0302F'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgB7ZRRCoAgEER3owN7g+oI3bQbTFv4IWSyo3744YAgMjsPdFBkajgBCLZ2IRXngtcIBvJ448zmHdi8EDqcgVSHeyDN4SVIt/AcpHt4BkKFL+KX/uzblV4LiArT4clZH0jpQZshcLSlGgKiijQEFT1PIJ/fdM34L1tBVU9xyryHhb8smRpON/K3KhkLZPyyAAAAAElFTkSuQmCC";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Notification",
  __ssrInlineRender: true,
  setup(__props) {
    const notifications = inject("notifications");
    const closeNotification = inject("closeNotification");
    if (!notifications || !closeNotification) {
      throw new Error("Notification context is missing. Make sure to provide data.");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "notification-container" }, _attrs))} data-v-627ad018><!--[-->`);
      ssrRenderList(unref(notifications), (notification, index2) => {
        _push(`<div class="${ssrRenderClass([notification.type, "notification"])}" data-v-627ad018><div class="notification-content" data-v-627ad018><div class="icon-container" data-v-627ad018>`);
        if (notification.type === "success") {
          _push(`<img${ssrRenderAttr("src", _imports_0)} class="icon" alt="check-hexagon" data-v-627ad018>`);
        } else {
          _push(`<!---->`);
        }
        if (notification.type === "error") {
          _push(`<img${ssrRenderAttr("src", _imports_1)} class="icon" alt="cross-triangle" data-v-627ad018>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="notification-block-text" data-v-627ad018><p class="title" data-v-627ad018>\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435</p><p class="message" data-v-627ad018>${ssrInterpolate(notification.message)}</p></div>`);
        if (notification.autoClose) {
          _push(`<div class="progress-bar" style="${ssrRenderStyle({ animationDuration: notification.autoCloseDuration + "ms" })}" data-v-627ad018></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (!notification.autoClose) {
          _push(`<button class="close-button" data-v-627ad018><img${ssrRenderAttr("src", _imports_2)} alt="cross" data-v-627ad018></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Notification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Notification = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-627ad018"]]);
const tabContents = {
  tape: {
    title: "\u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D",
    description: [
      "\u0414\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0438\u0437 \u041F\u0412\u0425 \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0443\u044E \u043F\u043B\u0435\u043D\u043A\u0443 \u043A\u043E\u0440\u0435\u0439\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430. \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0435\u0447\u043D\u043E\u0441\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u0430 \u043D\u0430\u043C\u0438 \u043D\u0430 \u043B\u0438\u0447\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435.",
      "\u0414\u0430\u043D\u043D\u0430\u044F \u043F\u043B\u0435\u043D\u043A\u0430 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439 \u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C\u044E \u043A \u0432\u0441\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u043C \u0432\u043D\u0435\u0448\u043D\u0438\u043C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C, \u0442\u0430\u043A\u0438\u043C \u043A\u0430\u043A \u0434\u043E\u0436\u0434\u044C, \u0432\u0435\u0442\u0435\u0440, \u0441\u043D\u0435\u0433, \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438. \u0412 \u0442\u043E\u0436\u0435 \u0432\u0440\u0435\u043C\u044F \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u0441\u0432\u0435\u0442 \u0432 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u0432 \u043D\u0435\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443.",
      "\u0412\u044B\u0431\u0440\u0430\u0432 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u041F\u0412\u0425 \u0448\u0442\u043E\u0440 \u0434\u043B\u044F \u0442\u0435\u0440\u0440\u0430\u0441, \u0432\u0435\u0440\u0430\u043D\u0434 \u0438 \u043D\u0430\u0432\u0435\u0441\u043E\u0432 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043B\u0443\u0436\u0438\u0442\u044C \u0432\u0430\u043C \u0434\u043E\u043B\u0433\u0438\u0435 \u0433\u043E\u0434\u044B."
    ],
    items: [
      {
        img: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        title: "\u041F\u043B\u0435\u043D\u043A\u0430 \u0434\u043B\u044F \u043E\u043A\u043E\u043D \u041F\u0412\u0425 700 \u043C\u0438\u043A\u0440\u043E\u043D",
        details: [
          "\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0438 700 \u043C\u043A\u043C",
          "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C",
          "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043B\u0430\u0441\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430: 37-40%, 55PHR"
        ],
        description: ""
      }
    ]
  },
  vue: {
    title: "\u041E\u041A\u0410\u041D\u0422\u041E\u0412\u041A\u0410 \u0414\u041B\u042F \u041C\u042F\u0413\u041A\u0418\u0425 \u041E\u041A\u041E\u041D",
    description: [
      "\u041E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u0441\u0438\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043E\u043A\u043E\u043D. \u042F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043C\u0435\u0441\u0442\u043E\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043B\u044E\u0432\u0435\u0440\u0441\u043E\u0432 \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u041F\u0412\u0425 \u0448\u0442\u043E\u0440 \u043A \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F. \u041F\u0440\u0438\u0434\u0430\u0435\u0442 \u043E\u043A\u043D\u0430\u043C \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043D\u044B\u0439 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434. \u0428\u0438\u0440\u0438\u043D\u0430 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438 5 \u0441\u043C. \u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044F\u0441\u044C \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u043D\u0430\u043C\u0438 \u0443\u0441\u043B\u0443\u0433, \u0432\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0438 \u0448\u0442\u043E\u0440 \u0438\u0437 \u041F\u0412\u0425 \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0441 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u043E\u0439."
    ],
    items: [
      {
        img: "https://optim.tildacdn.com/tild3930-3266-4234-b335-393165376664/-/resize/432x336/-/format/webp/14.jpg",
        title: "\u041E\u041A\u0410\u041D\u0422\u041E\u0412\u041A\u0410 \u0414\u041B\u042F \u041C\u042F\u0413\u041A\u0418\u0425 \u041E\u041A\u041E\u041D \xAB\u041B\u042E\u041A\u0421\xBB \u0418\u0417 \u0422\u041A\u0410\u041D\u0418 OXFORD 1680D",
        description: "\u0412\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u0443\u0441\u0438\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043A\u043B\u0430\u0441\u0441\u0430 \u043B\u044E\u043A\u0441. \u0418\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0438\u0437 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u041E\u043A\u0441\u0444\u043E\u0440\u0434 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C\u044E 1680D. \u0418\u043C\u0435\u0435\u0442 \u044F\u0440\u043A\u043E \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u043D\u0443\u044E \u0442\u043A\u0430\u043D\u0435\u0432\u0443\u044E \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u0443. \u041F\u0440\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u041F\u0412\u0425 \u043F\u0440\u043E\u043F\u0438\u0442\u043A\u0435 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0430 \u043A \u043B\u044E\u0431\u044B\u043C \u0432\u043D\u0435\u0448\u043D\u0438\u043C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C, \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0437\u043A\u0438\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u044B, \u0432\u043B\u0430\u0433\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F, \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434. \u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u0436\u0438\u043B\u044B\u0445 \u0438 \u043F\u0440\u0438\u0434\u043E\u043C\u043E\u0432\u044B\u0445 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0439.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3737-3032-4532-b132-616231616364/-/resize/432x336/-/format/webp/4.jpg",
        title: "\u041E\u041A\u0410\u041D\u0422\u041E\u0412\u041A\u0410 \u0414\u041B\u042F \u041C\u042F\u0413\u041A\u0418\u0425 \u041E\u041A\u041E\u041D \xAB\u0421\u0422\u0410\u041D\u0414\u0410\u0420\u0422\xBB \u0418\u0417 \u0422\u041A\u0410\u041D\u0418 OXFORD 600D",
        description: "\u0412\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u043A\u043B\u0430\u0441\u0441\u0430 \u043F\u0440\u0435\u043C\u0438\u0443\u043C \u043D\u0430 \u041F\u0412\u0425 \u043F\u043E\u0434\u043B\u043E\u0436\u043A\u0435. \u0418\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0438\u0437 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u041E\u043A\u0441\u0444\u043E\u0440\u0434. \u041F\u0440\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0430\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043B\u0430\u0432\u0441\u0430\u043D\u043E\u0432\u044B\u0445 \u043D\u0438\u0442\u0435\u0439. \u0423\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0430 \u043A \u043B\u044E\u0431\u044B\u043C \u0432\u043D\u0435\u0448\u043D\u0438\u043C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C, \u0432\u043B\u0430\u0433\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F, \u0438\u043C\u0435\u0435\u0442 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434. \u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0442\u0438\u043F\u043E\u0432 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0439 \u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3735-3632-4063-b937-323130643862/-/resize/432x336/-/format/webp/8.jpg",
        title: "\u041E\u041A\u0410\u041D\u0422\u041E\u0412\u041A\u0410 \u041F\u0412\u0425 \u0414\u041B\u042F \u041C\u042F\u0413\u041A\u0418\u0425 \u041E\u041A\u041E\u041D",
        description: "\u042D\u0442\u043E\u0442 \u0432\u0438\u0434 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438, \u0432 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0434\u043B\u044F \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445, \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u0431\u044B\u0442\u043E\u0432\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439. \u0422\u0430\u043A\u0430\u044F \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u043A\u0440\u0435\u043F\u0438\u0442\u0441\u044F \u043A \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0439 \u043F\u043B\u0435\u043D\u043A\u0435 \u043E\u043A\u043D\u0430 \u0434\u0432\u0443\u043C\u044F \u0442\u0438\u043F\u0430\u043C\u0438, \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0432\u0443\u043B\u043A\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u043F\u0440\u043E\u0448\u0438\u0442\u043E\u0433\u043E \u0442\u0438\u043F\u0430. \u0418\u043C\u0435\u0435\u0442 \u0433\u043B\u044F\u043D\u0446\u0435\u0432\u0443\u044E \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u043D\u0443\u044E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0438 \u0441\u0430\u043C\u0443\u044E \u0448\u0438\u0440\u043E\u043A\u0443\u044E \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u043F\u0430\u043B\u0438\u0442\u0440\u0443. \u041E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u0437\u043D\u043E\u0441\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C\u044E, \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C\u044E, \u043D\u0435\u0432\u043E\u0441\u043F\u0440\u0438\u0438\u043C\u0447\u0438\u0432\u043E\u0441\u0442\u044C\u044E \u043A \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u043C \u043B\u0443\u0447\u0430\u043C \u0438 \u043E\u0441\u0430\u0434\u043A\u0430\u043C. \u041B\u0435\u0433\u043A\u043E \u043C\u044B\u0442\u044C \u0438 \u0443\u0445\u0430\u0436\u0438\u0432\u0430\u0442\u044C.",
        details: []
      }
    ]
  },
  grid: {
    title: "\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430",
    description: [],
    items: [
      {
        img: "https://optim.tildacdn.com/tild6662-6230-4863-b638-323864383735/-/resize/560x280/-/format/webp/12.jpg",
        title: "\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430",
        description: "\u041F\u0440\u0438\u044F\u0442\u043D\u044B\u043C \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435\u043C \u043A \u043C\u044F\u0433\u043A\u0438\u043C \u043E\u043A\u043D\u0430\u043C \u0441\u0442\u0430\u043D\u0435\u0442 \u043C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430, \u043E\u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044E \u0438 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043E\u0442 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445. \u0421\u0435\u0442\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u0435, \u0442\u0430\u043A \u0438 \u0432 \u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A \u0433\u0438\u0431\u043A\u0438\u043C \u043E\u043A\u043D\u0430\u043C. \u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u043D\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u043C\u043E\u0441\u043A\u0438\u0442\u043D\u043E\u0439 \u0441\u0435\u0442\u043A\u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F \u0434\u0430\u0436\u0435 \u0443 \u0445\u0440\u0443\u043F\u043A\u043E\u0439 \u0434\u0435\u0432\u0443\u0448\u043A\u0438. \u0421\u0435\u0442\u043A\u0430 \u043D\u0435 \u0432\u044B\u0446\u0432\u0435\u0442\u0430\u0435\u0442 \u043D\u0430 \u0441\u043E\u043B\u043D\u0446\u0435 \u0438 \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u0430. \u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043A\u043E\u043C\u0430\u0440\u043E\u0432 \u0438 \u043F\u0440\u043E\u0447\u0435\u0439 \u043B\u0435\u0442\u0430\u044E\u0449\u0435\u0439 \u0436\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0445 \u0434\u043E\u043C\u043E\u0432, \u043A\u043E\u0442\u0442\u0435\u0434\u0436\u0435\u0439 \u0438 \u0434\u0430\u0447. \u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u0432 \u043B\u044E\u0431\u0443\u044E \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0443 \u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0442\u0438\u043F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0439.",
        details: []
      }
    ]
  },
  accessories: {
    title: "\u0424\u0423\u0420\u041D\u0418\u0422\u0423\u0420\u0410 \u0414\u041B\u042F \u041C\u042F\u0413\u041A\u0418\u0425 \u041E\u041A\u041E\u041D",
    description: ["\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043C\u043E\u043D\u0442\u0430\u0436 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u041F\u0412\u0425 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0435 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043A \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0438 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D."],
    items: [
      {
        img: "https://optim.tildacdn.com/tild3839-6432-4635-b065-646339333336/-/resize/432x336/-/format/webp/11.jpg",
        title: "\u0421\u041A\u041E\u0411\u0410 \u0421 \u0421\u0418\u041B\u0418\u041A\u041E\u041D\u041E\u0412\u042B\u041C \u0420\u0415\u041C\u0415\u0428\u041A\u041E\u041C",
        description: "\u0421\u0430\u043C\u044B\u0439 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u044B\u0439 \u0432\u0438\u0434 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438. \u0421\u043A\u043E\u0431\u044B \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043D\u0435\u0441\u0443\u0449\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438. \u041E\u043A\u043D\u043E \u043D\u0430\u0441\u0430\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u043A\u043E\u0431\u044B \u0441\u043A\u0432\u043E\u0437\u044C \u043B\u044E\u0432\u0435\u0440\u0441\u044B, \u043F\u043E\u0441\u0430\u0436\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438. \u041D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u0448\u0442\u043E\u0440\u044B \u041F\u0412\u0425 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u0445 \u0440\u0435\u043C\u0435\u0448\u043A\u043E\u0432, \u043F\u0440\u043E\u0434\u0435\u0432\u0430\u0435\u043C\u044B\u0445 \u0447\u0435\u0440\u0435\u0437 \u0441\u043A\u043E\u0431\u044B.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild6536-6465-4436-a365-393861343936/-/resize/432x336/-/format/webp/photo_2023-01-27_16-.jpg",
        title: "\u041F\u041E\u0412\u041E\u0420\u041E\u0422\u041D\u0410\u042F \u0421\u041A\u041E\u0411\u0410",
        description: "\u0421\u0430\u043C\u044B\u0439 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u044B\u0439 \u0432\u0438\u0434 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438. \u0421\u043A\u043E\u0431\u044B \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043D\u0435\u0441\u0443\u0449\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438. \u041E\u043A\u043D\u043E \u043D\u0430\u0441\u0430\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u043A\u043E\u0431\u044B \u0441\u043A\u0432\u043E\u0437\u044C \u043B\u044E\u0432\u0435\u0440\u0441\u044B, \u043F\u043E\u0441\u0430\u0436\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438. \u041D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u0448\u0442\u043E\u0440\u044B \u041F\u0412\u0425 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u0445 \u0440\u0435\u043C\u0435\u0448\u043A\u043E\u0432, \u043F\u0440\u043E\u0434\u0435\u0432\u0430\u0435\u043C\u044B\u0445 \u0447\u0435\u0440\u0435\u0437 \u0441\u043A\u043E\u0431\u044B.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild6534-6235-4136-a266-306434626465/-/resize/432x336/-/format/webp/2.jpg",
        title: "\u0424\u0420\u0410\u041D\u0426\u0423\u0417\u0421\u041A\u0418\u0419 \u0417\u0410\u041C\u041E\u041A",
        description: "\u0421\u0430\u043C\u044B\u0439 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u044B\u0439 \u0432\u0438\u0434 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438. \u0421\u043A\u043E\u0431\u044B \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043D\u0435\u0441\u0443\u0449\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438. \u041E\u043A\u043D\u043E \u043D\u0430\u0441\u0430\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u043A\u043E\u0431\u044B \u0441\u043A\u0432\u043E\u0437\u044C \u043B\u044E\u0432\u0435\u0440\u0441\u044B, \u043F\u043E\u0441\u0430\u0436\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438. \u041D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u0448\u0442\u043E\u0440\u044B \u041F\u0412\u0425 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u0445 \u0440\u0435\u043C\u0435\u0448\u043A\u043E\u0432, \u043F\u0440\u043E\u0434\u0435\u0432\u0430\u0435\u043C\u044B\u0445 \u0447\u0435\u0440\u0435\u0437 \u0441\u043A\u043E\u0431\u044B.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3137-3766-4464-b065-636365346363/-/resize/432x336/-/format/webp/3.jpg",
        title: "\u0414\u0412\u0423\u0421\u0422\u041E\u0420\u041E\u041D\u041D\u042F\u042F \u041C\u041E\u041B\u041D\u0418\u042F",
        description: "\u0421\u0430\u043C\u044B\u0439 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0439 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442\u043D\u044B\u0439 \u0432\u0438\u0434 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438. \u0421\u043A\u043E\u0431\u044B \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043D\u0435\u0441\u0443\u0449\u0435\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438. \u041E\u043A\u043D\u043E \u043D\u0430\u0441\u0430\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u043A\u043E\u0431\u044B \u0441\u043A\u0432\u043E\u0437\u044C \u043B\u044E\u0432\u0435\u0440\u0441\u044B, \u043F\u043E\u0441\u0430\u0436\u0435\u043D\u043D\u044B\u0435 \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438. \u041D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u0448\u0442\u043E\u0440\u044B \u041F\u0412\u0425 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u0445 \u0440\u0435\u043C\u0435\u0448\u043A\u043E\u0432, \u043F\u0440\u043E\u0434\u0435\u0432\u0430\u0435\u043C\u044B\u0445 \u0447\u0435\u0440\u0435\u0437 \u0441\u043A\u043E\u0431\u044B.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3032-6339-4564-a637-326535383837/-/resize/432x336/-/format/webp/13.jpg",
        title: "\u041B\u042E\u0412\u0415\u0420\u0421\u042B",
        description: "\u041B\u044E\u0432\u0435\u0440\u0441\u044B \u2014 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u2014 \u043C\u0435\u0442\u0430\u043B\u043B. \u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043B\u044E\u0432\u0435\u0440\u0441\u044B \u0432 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438 \u043E\u043A\u043E\u043D\u043D\u043E\u0439 \u0440\u0430\u043C\u044B. \u0418\u043C\u0435\u043D\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u043E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435 \u043B\u044E\u0432\u0435\u0440\u0441\u043E\u0432 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u0441\u0430\u0434\u043A\u0430 \u043A\u0430\u0440\u043A\u0430\u0441\u0430 \u043E\u043A\u043D\u0430 \u043D\u0430 \u0442\u0443 \u0438\u043B\u0438 \u0438\u043D\u0443\u044E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C. \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0432\u0438\u0434\u043E\u0432 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F, \u043B\u044E\u0432\u0435\u0440\u0441\u044B \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u044B\u043C\u0438, \u043A\u0440\u0443\u0433\u043B\u044B\u043C\u0438 \u0438\u043B\u0438 \u043E\u0432\u0430\u043B\u044C\u043D\u044B\u043C\u0438.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3234-3833-4365-b633-323237646435/-/resize/432x336/-/format/webp/6.jpg",
        title: "\u041F\u041E\u041B\u0418\u041C\u0415\u0420\u041D\u0410\u042F \u0421\u041A\u041E\u0411\u0410",
        description: "\u041F\u043E\u043B\u0438\u043C\u0435\u0440\u043D\u0430\u044F \u0441\u043A\u043E\u0431\u0430 \u2014 \u044D\u0442\u043E \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043D\u044B\u0445 \u0441\u043A\u043E\u0431. \u0423 \u043D\u0430\u0441 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0441\u043A\u043E\u0431\u044B \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432: \u043A\u043E\u0440\u0438\u0447\u043D\u0435\u0432\u044B\u0435, \u0431\u0435\u043B\u044B\u0435, \u0431\u0435\u0436\u0435\u0432\u044B\u0435, \u0441\u0435\u0440\u044B\u0435 \u0438 \u0447\u0435\u0440\u043D\u044B\u0435.  \u0414\u0430\u043D\u043D\u044B\u0439 \u0432\u0438\u0434 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043B\u044E\u0432\u0435\u0440\u0441\u043E\u043C 42\u044522, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u0441\u0435\u0431\u044F \u0437\u0430\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043B \u043D\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043F\u043E\u043B\u043E\u0442\u043D\u0430\u0445 \u0441 \u043F\u043B\u043E\u0449\u0430\u0434\u044C\u044E \u0431\u043E\u043B\u0435\u0435 10 \u043C2. \u0421\u043A\u043E\u0431\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0438\u0437 \u043F\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u0430, \u043D\u0435 \u0442\u0435\u0440\u044F\u044E\u0442 \u0441\u0432\u043E\u0438\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u043F\u0440\u0438 \u0441\u0438\u043B\u044C\u043D\u044B\u0445 \u043C\u043E\u0440\u043E\u0437\u0430\u0445 \u0438 \u043F\u0440\u0438 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0438 \u043F\u0440\u044F\u043C\u044B\u0445 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0445 \u043B\u0443\u0447\u0435\u0439.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3431-3731-4632-b431-326230333836/-/resize/432x336/-/format/webp/7.jpg",
        title: "\u041F\u043E\u0434\u0432\u044F\u0437\u043E\u0447\u043D\u044B\u0435 \u0440\u0435\u043C\u0435\u0448\u043A\u0438",
        description: "\u0420\u0435\u043C\u043D\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0434\u043B\u044F \u0444\u0438\u043A\u0441\u0430\u0446\u0438\u0438 \u043E\u043A\u043E\u043D \u0432 \u043F\u043E\u0434\u043D\u044F\u0442\u043E\u043C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 (\u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044B\u043C\u0438 \u0432 \u0440\u0443\u043B\u043E\u043D). \u041C\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C \u0440\u0435\u043C\u043D\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0442\u0438\u043F\u043E\u0432: \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435 \u0440\u0435\u043C\u043D\u0438 \u0438\u0437 \u041F\u0412\u0425 \u0438 \u043D\u0435 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0435, \u043F\u043E\u0434 \u0446\u0432\u0435\u0442 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438 \u0441 \u043B\u044E\u0432\u0435\u0440\u0441\u043E\u043C. \u0420\u0435\u043C\u043D\u0438 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043A\u0430\u0436\u0434\u044B\u0435 70 \u0441\u043C \u0438 \u043D\u0435 \u0432\u0445\u043E\u0434\u044F\u0442 \u0432 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439. \u0422\u0430\u043A \u0436\u0435 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0441\u0438\u043B\u0438\u043A\u043E\u043D\u043E\u0432\u044B\u0435 \u0440\u0435\u043C\u043D\u0438 \u0441 \u043F\u0440\u044F\u0436\u043A\u0430\u043C\u0438. \u0420\u0435\u043C\u043D\u0438 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u044B \u0434\u043B\u044F \u0432\u0441\u0435\u0441\u0435\u0437\u043E\u043D\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F. \u0417\u0430\u0441\u0442\u0451\u0436\u043A\u0438, \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 \u0440\u0435\u043C\u043D\u0435\u0439 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043D\u044B \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0432 \u043B\u044E\u0431\u0443\u044E \u043F\u043E\u0433\u043E\u0434\u0443 \u0438 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u0434\u0430. \u0413\u0438\u0431\u043A\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043D\u0435 \u043F\u043E\u0442\u0440\u0435\u0441\u043A\u0430\u0435\u0442\u0441\u044F, \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B \u043A \u043A\u043E\u0440\u0440\u043E\u0437\u0438\u0438.",
        details: []
      }
    ]
  }
};
const questions = [
  {
    name: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0437\u0430\u043C\u0435\u0440\u0430",
    content: [
      {
        type: "list",
        lists: [
          {
            title: "**\u0423\u0441\u043B\u0443\u0433\u0438 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438:**",
            items: [
              "\u0417\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u043C\u043E\u043D\u0442\u0430\u0436\u043E\u043C",
              "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u044B 40% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0437\u0430\u043A\u0430\u0437\u0430",
              "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 20 \u043C2",
              "\u041D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0434\u043E 100 \u043A\u043C \u043E\u0442 \u041C\u041A\u0410\u0414.",
              "(\u041F\u0440\u0438 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0434\u0430\u043B\u0435\u0435 100 \u043A\u043C \u043E\u0442 \u041C\u041A\u0410\u0414, \u0446\u0435\u043D\u0430 \u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C)"
            ]
          }
        ]
      },
      // {
      //   type: "highlighted-text",
      //   text: [
      //     "При несоблюдении данных условий выезд замерщика оплачивается отдельно",
      //     "\n",
      //     "Пример дополнительной строки с отступом."
      //   ],
      // },
      // {
      //   type: "highlighted-text",
      //   text: "Еще один **жирный текст**.",
      // },          
      {
        type: "highlighted-text",
        text: [
          "\n+",
          // Отступ сверху
          "\u041F\u0440\u0438 \u043D\u0435\u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0432\u044B\u0435\u0437\u0434 \u0437\u0430\u043C\u0435\u0440\u0449\u0438\u043A\u0430 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E",
          "\n"
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "\u041F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043E\u0442 \u041C\u041A\u0410\u0414 \u043D\u0430 0-75 \u043A\u043C - 2500 \u0440\u0443\u0431."
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "\u041F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043E\u0442 \u041C\u041A\u0410\u0414 \u043D\u0430 75-100 \u043A\u043C - 3000 \u0440\u0443\u0431."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "\u0417\u0430\u043C\u0435\u0440 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u043C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 1-2 \u0434\u043D\u0435\u0439, \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u044F\u0432\u043A\u0438. \u0412 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043D\u0430\u0448 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u043D\u0430 \u0412\u0430\u0448 \u043E\u0431\u044A\u0435\u043A\u0442 \u0434\u043B\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0437\u0430\u043C\u0435\u0440\u043E\u0432 \u0438 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438 \u0438 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D."
        ]
      }
      // {
      //   type: "image",
      //   src: "https://optim.tildacdn.com/tild6662-6230-4863-b638-323864383735/-/resize/560x280/-/format/webp/12.jpg",
      //   alt: "Первая картинка",
      //   description: "Описание первой картинки.",
      // },
      // {
      //   type: "text",
      //   text: [
      //     "Текст перед отступами.",
      //     "\n+", // Отступ сверху
      //     "Текст после отступа сверху.",
      //     "\n-", // Отступ снизу
      //     "Текст после отступа снизу."
      //   ],
      // },
      // {
      //   type: "image",
      //   src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
      //   alt: "Вторая картинка",
      //   description: "Описание второй картинки, которая идет после большого текста.",
      // },
    ]
  },
  {
    name: "\u0421\u0440\u043E\u043A\u0438 \u0437\u0430\u043C\u0435\u0440\u0430",
    content: [
      // {
      //   type: "highlighted-text",
      //   text: [
      //     "При несоблюдении данных условий выезд замерщика оплачивается отдельно",
      //     "\n",
      //     "Пример дополнительной строки с отступом."
      //   ],
      // },
      // {
      //   type: "highlighted-text",
      //   text: "Еще один **жирный текст**.",
      // },          
      {
        type: "text",
        text: [
          "\u0421\u0440\u043E\u043A\u0438 \u0437\u0430\u043C\u0435\u0440\u0430, \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u2014 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u0440\u043E\u043A\u0438. \u041C\u044B \u043D\u0435 \u0432\u0432\u043E\u0434\u0438\u043C \u0432 \u0437\u0430\u0431\u043B\u0443\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E \u043C\u043E\u0436\u0435\u043C \u0443\u043B\u043E\u0436\u0438\u0442\u044C\u0441\u044F. \u0411\u044B\u0432\u0430\u044E\u0442 \u0441\u043B\u0443\u0447\u0430\u0438, \u043A\u043E\u0433\u0434\u0430 \u043C\u044B \u0438\u0434\u0435\u043C \u043D\u0430\u0432\u0441\u0442\u0440\u0435\u0447\u0443 \u043D\u0435\u0442\u0435\u0440\u043F\u0435\u043B\u0438\u0432\u043E\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443 \u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u043C \u0437\u0430\u043C\u0435\u0440 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043E\u043A\u043E\u043D \u0431\u0435\u0437 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0437\u0430 3-5 \u0434\u043D\u0435\u0439, \u043D\u043E \u044D\u0442\u043E, \u0441\u043A\u043E\u0440\u0435\u0435, \u0440\u0435\u0434\u043A\u043E\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435, \u0447\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u043E. \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435:"
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "\n+",
          "\u0414\u043B\u044F \u0437\u0430\u043C\u0435\u0440\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u043D\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E 1-3 \u0434\u043D\u044F"
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u043A\u043E\u043D, \u043E\u0431\u044B\u0447\u043D\u043E, \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 1 \u0434\u0435\u043D\u044C, \u043D\u043E \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043E\u0431\u0449\u0435\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u0438 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u043F\u0440\u043E\u0435\u043C\u043E\u0432 \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432."
        ]
      }
      // {
      //   type: "image",
      //   src: "https://optim.tildacdn.com/tild6662-6230-4863-b638-323864383735/-/resize/560x280/-/format/webp/12.jpg",
      //   alt: "Первая картинка",
      //   description: "Описание первой картинки.",
      // },
      // {
      //   type: "text",
      //   text: [
      //     "Текст перед отступами.",
      //     "\n+", // Отступ сверху
      //     "Текст после отступа сверху.",
      //     "\n-", // Отступ снизу
      //     "Текст после отступа снизу."
      //   ],
      // },
      // {
      //   type: "image",
      //   src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
      //   alt: "Вторая картинка",
      //   description: "Описание второй картинки, которая идет после большого текста.",
      // },
    ]
  },
  {
    name: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",
    content: [
      // {
      //   type: "highlighted-text",
      //   text: [
      //     "При несоблюдении данных условий выезд замерщика оплачивается отдельно",
      //     "\n",
      //     "Пример дополнительной строки с отступом."
      //   ],
      // },
      {
        type: "highlighted-text",
        text: "\u041F\u0440\u0438 \u0437\u0430\u043A\u0430\u0437\u0435 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 - **\u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E**."
      },
      {
        type: "highlighted-text",
        text: [
          "**\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0431\u0435\u0437 \u0437\u0430\u043A\u0430\u0437\u0430 \u043C\u043E\u043D\u0442\u0430\u0436\u0430** - \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0442\u0430\u0440\u0438\u0444\u0430\u043C \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439-\u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432"
        ]
      }
      // {
      //   type: "image",
      //   src: "https://optim.tildacdn.com/tild6662-6230-4863-b638-323864383735/-/resize/560x280/-/format/webp/12.jpg",
      //   alt: "Первая картинка",
      //   description: "Описание первой картинки.",
      // },
      // {
      //   type: "text",
      //   text: [
      //     "Текст перед отступами.",
      //     "\n+", // Отступ сверху
      //     "Текст после отступа сверху.",
      //     "\n-", // Отступ снизу
      //     "Текст после отступа снизу."
      //   ],
      // },
      // {
      //   type: "image",
      //   src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
      //   alt: "Вторая картинка",
      //   description: "Описание второй картинки, которая идет после большого текста.",
      // },
    ]
  },
  // {
  //   name: "Самовывоз",
  //   content: [
  //     // {
  //     //   type: "highlighted-text",
  //     //   text: [
  //     //     "При несоблюдении данных условий выезд замерщика оплачивается отдельно",
  //     //     "\n",
  //     //     "Пример дополнительной строки с отступом."
  //     //   ],
  //     // },
  //     {
  //       type: "highlighted-text",
  //       text: "Вы можете самостоятельно забрать заказ с нашего производства:"
  //     },
  //     {
  //       type: "highlighted-text",
  //       text: "**г. Москва, Илимская улица дом 1**"
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "\n+",
  //         "О Вашем приезде нужно заранее предупредить нас по телефону **+7 (495) 018-70-20**",
  //       ],
  //     },
  //     // {
  //     //   type: "image",
  //     //   src: "https://optim.tildacdn.com/tild6662-6230-4863-b638-323864383735/-/resize/560x280/-/format/webp/12.jpg",
  //     //   alt: "Первая картинка",
  //     //   description: "Описание первой картинки.",
  //     // },
  //     // {
  //     //   type: "text",
  //     //   text: [
  //     //     "Текст перед отступами.",
  //     //     "\n+", // Отступ сверху
  //     //     "Текст после отступа сверху.",
  //     //     "\n-", // Отступ снизу
  //     //     "Текст после отступа снизу."
  //     //   ],
  //     // },
  //     // {
  //     //   type: "image",
  //     //   src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
  //     //   alt: "Вторая картинка",
  //     //   description: "Описание второй картинки, которая идет после большого текста.",
  //     // },
  //   ],
  // },
  {
    name: "\u041C\u043E\u043D\u0442\u0430\u0436",
    content: [
      {
        type: "list",
        lists: [
          {
            title: "**\u0423\u0441\u043B\u0443\u0433\u0438 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438:**",
            items: [
              "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0438\u0437 \u041F\u0412\u0425;",
              "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C;",
              "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u0445 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0438 \u0443\u0445\u043E\u0434\u0435 \u0437\u0430 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438."
            ]
          },
          {
            title: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 **9000 \u0440\u0443\u0431\u043B\u0435\u0439.**",
            items: [
              "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0432 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0435, \u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0435, \u043A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043B\u0438 \u0431\u0440\u0435\u0432\u0435\u043D\u0447\u0430\u0442\u044B\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 **\u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0430** \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E \u0441 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C.",
              "\u041E\u0431\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439 \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F **\u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.**"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "\u0421\u0440\u043E\u043A \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F",
    content: [
      {
        type: "text",
        text: [
          "\u0421\u0440\u043E\u043A \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u043A\u043E\u043D \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432, \u0442\u0430\u043A\u0438\u0445 \u043A\u0430\u043A \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u043E\u0431\u044A\u0435\u043C \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0445 \u0438\u0437\u0434\u0435\u043B\u0438\u0439. \u0410 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430. \u0412 \u0441\u0440\u0435\u0434\u043D\u0435\u043C \u0441\u0440\u043E\u043A \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 **5-7 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439.**"
        ]
      }
    ]
  },
  {
    name: "\u041C\u043E\u043D\u0442\u0430\u0436 \u0441\u0438\u043B\u0430\u043C\u0438 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430",
    content: [
      {
        type: "text",
        text: [
          "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u043E\u043A\u043E\u043D \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E.",
          "\u0412 \u044D\u0442\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 **\u0432\u0441\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C** \u0437\u0430 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u043D\u0442\u0430\u0436 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043E\u043A\u043E\u043D **\u043B\u043E\u0436\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0412\u0430\u0441.**"
        ]
      }
    ]
  },
  {
    name: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D",
    content: [
      {
        type: "text",
        text: [
          "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u0434\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u043E \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0432 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0443\u044E\u0442\u043D\u044B\u0445 \u043C\u0435\u0441\u0442 \u043E\u0442\u0434\u044B\u0445\u0430 \u043F\u0440\u0438 \u043D\u0435\u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445. \u041E\u0434\u043D\u0438\u043C \u0438\u0437 \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0434\u043B\u044F \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u0438\u0437\u0434\u0435\u043B\u0438\u044F. \u0415\u0441\u043B\u0438 \u043D\u0435\u0442 \u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043A\u0430\u043F\u0438\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u0431\u0443\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u0438\u043B\u0438 \u0432\u0435\u0440\u0430\u043D\u0434\u044B \u0441\u0442\u0435\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u0430\u043C\u0438, \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438 \u043D\u0435\u0434\u043E\u0440\u043E\u0433\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0439 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439. \u041F\u0440\u0438\u0447\u0451\u043C \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043C\u043E\u043D\u0442\u0430\u0436 \u0438 \u0434\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0441\u0432\u043E\u0438\u043C\u0438 \u0440\u0443\u043A\u0430\u043C\u0438 \u0438 \u043D\u0435 \u043F\u043E\u043D\u0438\u0436\u0430\u044E\u0442 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F. \u0413\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u0438\u043B\u0438 \u0432\u0435\u0440\u0430\u043D\u0434\u044B \u0441 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043E\u043C \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442\u0441\u044F. \u041D\u0435\u0432\u0437\u044B\u0441\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043F\u0440\u0438 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u043C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u0438 \u043F\u043E\u0440\u044B\u0432\u0430\u0445 \u0432\u0435\u0442\u0440\u0430. \u0412 \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0433\u0430 \u0420\u043E\u0441\u0441\u0438\u0438, \u0433\u0434\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0437\u0430 \u0433\u043E\u0434 \u043C\u043E\u0436\u0435\u0442 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043E\u0442 +35 \u0434\u043E -30 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0426\u0435\u043B\u044C\u0441\u0438\u044E, \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u0438\u0437 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439."
        ]
      },
      {
        type: "list",
        lists: [
          {
            items: [
              "**\u0421\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C\u043E\u0441\u0442\u044C.** \u0412 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441\u043E \u0441\u0442\u0435\u043A\u043B\u043E\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043D\u0435 \u0445\u0443\u0434\u0448\u0438\u0439 \u043E\u0431\u0437\u043E\u0440 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u0438 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0434\u0435\u0442\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0440\u0430\u0437\u043E\u0431\u044C\u044E\u0442 \u043C\u044F\u0447\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0434\u043E\u0440\u043E\u0433\u043E\u0435 \u043E\u043A\u043D\u043E \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u0433\u0440\u044B;",
              "**\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432.** \u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0441\u043E \u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C\u044E \u043A \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F\u043C \u043D\u0430 \u0440\u0430\u0441\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u043B\u0438\u0431\u043E \u0440\u0430\u0437\u0440\u044B\u0432; \u041D\u043E, \u043A\u0430\u043A \u0438 \u0443 \u043B\u044E\u0431\u043E\u0433\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u0435\u043B \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u0438, \u043E\u0441\u0442\u0440\u044B\u0439 \u043D\u043E\u0436 \u0438\u043B\u0438 \u0442\u043E\u043F\u043E\u0440, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u044E\u0442 \u044D\u0442\u0443 \u043F\u0440\u0435\u0433\u0440\u0430\u0434\u0443.",
              "**\u0423\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430.** \u0423\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u043E\u0439 \u0438 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u043F\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439 \u043E\u0434\u043D\u0438\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043C. \u0414\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u043C\u043E\u0449\u0438 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432;",
              "**\u0410\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u044B\u043C\u0438 \u0446\u0435\u043D\u0430\u043C\u0438 \u0437\u0430 1 \u043C\xB2** \u043F\u0432\u0445 \u043F\u043B\u0435\u043D\u043A\u0438 (\u2248 1100 \u0440\u0443\u0431.), \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043B\u0438 \u043F\u043E\u043B\u0438\u0432\u0438\u043D\u0438\u043B\u0445\u043B\u043E\u0440\u0438\u0434\u043D\u043E\u0439 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438 \u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043A\u0440\u0435\u043F\u0435\u0436\u0430 (\u043B\u044E\u0432\u0435\u0440\u0441\u044B, \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0438\u043B\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043D\u043E-\u043D\u0430\u0442\u044F\u0436\u043D\u044B\u0435 \u0441\u043A\u043E\u0431\u044B);",
              "**\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044F\u043C\u0438 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0447\u0438\u0441\u0442\u043E\u0442\u044B.** \u0418\u0441\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u0440\u0435\u0434\u043D\u043E\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u043A\u0441\u0438\u043D\u043E\u0432 \u0441 \u0430\u043B\u044C\u0434\u0435\u0433\u0438\u0434\u0430\u043C\u0438 \u043F\u0440\u0438 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u043C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438. \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0441\u0442\u043E\u044F\u0442 \u0433\u0440\u0438\u0431\u043A\u0430\u043C \u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F\u043C \u043F\u043B\u0435\u0441\u0435\u043D\u0438;",
              "**\u041C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C\u044E.** \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0442\u0430\u043A \u0436\u0435 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B \u043A \u0432\u043E\u0437\u0433\u043E\u0440\u0430\u043D\u0438\u044E."
            ]
          }
        ]
      }
    ]
  },
  {
    name: "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u041F\u0412\u0425 \u043F\u043B\u0435\u043D\u043A\u0438 \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D",
    content: [
      {
        type: "text",
        text: [
          "**\u0412 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u0438 \u0442\u0435\u0440\u043C\u043E\u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D\u043E\u0432\u0430\u044F \u043F\u043B\u0435\u043D\u043A\u0430.**"
        ]
      },
      {
        type: "text",
        text: [
          "\u0414\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0438* \u0422\u0435\u0440\u043C\u043E\u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D (TPU, \u0422\u041F\u0423, \u0442\u0435\u0440\u043C\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D, Thermoplastic polyurethane) \u2014 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0433\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u043E\u0432 (\u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D\u043E\u0432), \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u043F\u043E\u043B\u0438\u044D\u0444\u0438\u0440\u043E\u0432. \u041F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0435\u0433\u043E \u0444\u043E\u0440\u043C\u0430 \u2014 \u0431\u0435\u0441\u0446\u0432\u0435\u0442\u043D\u044B\u0435 \u0433\u0440\u0430\u043D\u0443\u043B\u044B, \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043B\u0438 \u043B\u0438\u043D\u0437\u043E\u0432\u0438\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B. \u042D\u0442\u043E\u0442 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0438\u0437\u043D\u043E\u0441\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C, \u043B\u0451\u0433\u043A\u043E\u0441\u0442\u044C \u0438 \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u044C. \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0435\u043D \u0441\u0432\u043E\u0435\u0439 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u0439 \u0446\u0432\u0435\u0442 \u0432 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F.",
          "\n-"
        ]
      },
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "\u0412\u0442\u043E\u0440\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
      },
      {
        type: "list",
        lists: [
          {
            title: "**\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u043F\u043B\u0435\u043D\u043A\u0438 \u041F\u0412\u0425** \u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u0438\u0435\u043C\u043B\u0435\u043C\u044B \u0434\u043B\u044F \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0432 \u043D\u0430\u0448\u0435\u043C \u043A\u043B\u0438\u043C\u0430\u0442\u0435:",
            items: [
              "**\u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425.** \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0430 \u0438\u0437 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0439 \u043F\u043E\u043B\u0438\u0432\u0438\u043D\u0438\u043B\u0445\u043B\u043E\u0440\u0438\u0434\u0430 (\u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u044B\u043B \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0451\u043D \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0443 \u0432 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438).",
              "**\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0438.** \u0412\u0430\u0440\u044C\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043E\u0442 500, 650, 700 \u0434\u043E 750 \u043C\u0438\u043A\u0440\u043E\u043D (0,5 \u2014 0,75 \u043C\u043C).",
              "**\u041E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B.** \u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u043E\u0434\u043D\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0432 \u0441\u0432\u043E\u0435\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0435. \u0415\u0435 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C \u043A \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u043E\u043C\u0443 \u0438\u0437\u043B\u0443\u0447\u0435\u043D\u0438\u044E \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0437\u0435\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0430. \u0422\u0430\u043A \u0436\u0435, \u043A\u0430\u043A \u0438 \u0441\u0442\u0435\u043A\u043B\u043E \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442.",
              "**\u041C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C.** \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u0437 \u041F\u0412\u0425 \u043D\u0435 \u0431\u043E\u044F\u0442\u0441\u044F \u043C\u043E\u0440\u043E\u0437\u043E\u0432. \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0440\u0430\u0437\u0431\u0440\u043E\u0441, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u043B\u0451\u043D\u043A\u0438, \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435 \u043E\u0442 -40 \u0434\u043E +70 0\u0421.",
              "**\u0418\u0437\u043D\u043E\u0441\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C.** \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u043D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438 \u043F\u043E\u043B\u0438\u0432\u0438\u043D\u0438\u043B\u0445\u043B\u043E\u0440\u0438\u0434 \u0442\u0435\u0440\u044F\u0435\u0442 \u0432 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u0438 \u0441 \u043A\u0430\u0436\u0434\u044B\u043C \u0433\u043E\u0434\u043E\u043C 2%.",
              "**\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C.** \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u0442\u044F\u043D\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E\u0439 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 1 \u0441\u043C \u043D\u0430 \u043A\u0430\u0436\u0434\u044B\u0435 1,5 \u043C\u0435\u0442\u0440\u0430 \u0434\u043B\u0438\u043D\u044B.",
              "**\u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B.** \u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u043F\u043B\u0435\u043D\u043A\u0438 \u041F\u0412\u0425, \u043F\u0440\u0438 \u0434\u043E\u043B\u0436\u043D\u043E\u043C \u0443\u0445\u043E\u0434\u0435, \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442 \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442. \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u043B\u0438 \u0448\u0442\u043E\u0440\u044B \u041F\u0412\u0425 \u0438\u0437 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0439 \u043F\u043B\u0435\u043D\u043A\u0438 \u043F\u0440\u043E\u0441\u043B\u0443\u0436\u0430\u0442 \u0431\u043E\u043B\u0435\u0435 15 \u043B\u0435\u0442, \u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0436\u0435\u0441\u0442\u043A\u043E\u0433\u043E \u043A\u0440\u0435\u043F\u0435\u0436\u0430 \u043F\u043E\u043B\u043E\u0442\u0435\u043D \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044E \u043A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.",
              "**\u041C\u0435\u0442\u043E\u0434 \u0441\u0432\u0430\u0440\u0438\u0432\u0430\u043D\u0438\u044F.** \u0414\u043B\u044F \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0438\u0431\u043A\u0438\u0445 \u043E\u043A\u043E\u043D, \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0440\u0443\u043B\u043E\u043D \u043F\u043B\u0451\u043D\u043A\u0438 (1,4 \u043C\u0435\u0442\u0440\u0430) \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043C\u0435\u0442\u043E\u0434 \u0441\u0432\u0430\u0440\u0438\u0432\u0430\u043D\u0438\u044F, \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439, \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u044B\u0439 \u0448\u043E\u0432 \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 1,5 \u2013 2 \u0441\u043C. \u0422\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0432\u043F\u043E\u043B\u043D\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u043B\u044F \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u0433\u0440\u0443\u0437\u043E\u043A (\u0432\u0435\u0442\u0435\u0440 \u0434\u043E 15 \u043C/\u0441), \u0431\u0435\u0437 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0439 \u043F\u043E\u043B\u043E\u0442\u043D\u0430."
            ]
          },
          {
            title: "**\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u043F\u043B\u0435\u043D\u043A\u0438 \u041F\u0412\u0425:**",
            items: [
              "**\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430.** \u0415\u0434\u043A\u0438\u0435 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430 (\u0449\u0435\u043B\u043E\u0447\u043D\u044B\u0435, \u0441\u043F\u0438\u0440\u0442\u043E\u0432\u044B\u0435) \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043F\u043E\u043C\u0443\u0442\u043D\u0435\u043D\u0438\u044E \u043F\u043E\u043B\u043E\u0442\u0435\u043D. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0442\u0430\u043A\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043B\u044F \u0443\u0445\u043E\u0434\u0430 \u0437\u0430 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438 \u0438\u0437 \u041F\u0412\u0425.",
              "**\u0423\u0445\u043E\u0434 \u0437\u0430 \u041F\u0412\u0425.** \u0414\u043B\u044F \u0443\u0445\u043E\u0434\u0430 \u0438 \u043C\u044B\u0442\u044C\u044F \u0433\u0438\u0431\u043A\u0438\u0445 \u041F\u0412\u0425 \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u0447\u0438\u0441\u0442\u0430\u044F \u0432\u043E\u0434\u0430 \u043F\u043E\u0434 \u043D\u0430\u043F\u043E\u0440\u043E\u043C, \u043C\u044F\u0433\u043A\u0430\u044F \u0432\u043B\u0430\u0433\u043E\u0432\u043F\u0438\u0442\u044B\u0432\u0430\u044E\u0449\u0430\u044F \u0441\u0430\u043B\u0444\u0435\u0442\u043A\u0430 \u0438\u043B\u0438 \u0442\u043A\u0430\u043D\u044C \u0438\u0437 \u043C\u0438\u043A\u0440\u043E\u0444\u0438\u0431\u0440\u044B. \u0414\u043B\u044F \u043F\u0440\u0438\u0434\u0430\u043D\u0438\u044F \u0431\u043B\u0435\u0441\u043A\u0430 \u043F\u043E\u0441\u043B\u0435 \u043C\u044B\u0442\u044C\u044F \u0432\u043E\u0434\u043E\u0439, \u0448\u0442\u043E\u0440\u044B \u0438\u0437 \u043F\u043B\u0435\u043D\u043A\u0438 \u041F\u0412\u0425 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0442\u0435\u0440\u0435\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u0434\u043B\u044F \u0443\u0445\u043E\u0434\u0430 \u0437\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u043C \u0434\u043B\u044F \u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F (\u0441\u0438\u043B\u0438\u043A\u043E\u043D), \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0432 \u0435\u0433\u043E \u043D\u0430 \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u043C \u043F\u043E\u043B\u043E\u0442\u043D\u0435.",
              "**\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F.** \u041F\u0440\u0438 \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0438\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u043D\u0438\u0436\u0435 10 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0426\u0435\u043B\u044C\u0441\u0438\u044E \u043F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u043F\u043B\u043E\u0445\u043E \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0440\u0435\u0437\u043A\u0438\u0435 \u0437\u0430\u043B\u043E\u043C\u044B \u0438 \u0437\u0430\u0433\u0438\u0431\u044B. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0441\u043A\u043E\u043B\u043E\u0432 \u0438 \u0442\u0440\u0435\u0449\u0438\u043D \u0432 \u043F\u043E\u043B\u043E\u0442\u043D\u0435.",
              "**\u0420\u0435\u043C\u043E\u043D\u0442 \u043F\u043B\u0435\u043D\u043A\u0438.** \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0445 \u041F\u0412\u0425 \u043E\u043A\u043E\u043D \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0445 \u0437\u0430\u043C\u0435\u043D\u0430, \u043B\u0438\u0431\u043E \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u043B\u0430\u0442\u043A\u0438 \u0441 \u043F\u043E\u0442\u0435\u0440\u0435\u0439 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u0438 \u0434\u043E 20 % \u0432 \u043C\u0435\u0441\u0442\u0435 \u0435\u0451 \u043D\u0430\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u0412\u044B \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u043B\u0438 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0443 \u043D\u0430\u0441 \u2013 \u043C\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043C \u0437\u0430\u043C\u0435\u043D\u0443 \u0441 10 % \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \xAB\u043F\u043E\u0434 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u043D\u0442\u0430\u0436\xBB.",
              "**\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C.** \u041F\u0440\u0438 \u0437\u0430\u0442\u044F\u0436\u043D\u043E\u0439 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u041F\u0412\u0425 \u043F\u043B\u0435\u043D\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \xAB\u043F\u043E\u0431\u0435\u043B\u0435\u0442\u044C\xBB \u0438\u0437-\u0437\u0430 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0432\u0448\u0435\u0433\u043E\u0441\u044F \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u0430. \u0418\u0437\u043B\u0438\u0448\u043D\u044F\u044F \u0432\u043B\u0430\u0433\u0430 \u0438\u0441\u043F\u0430\u0440\u0438\u0442\u0441\u044F \u0438\u043B\u0438 \u0432\u044B\u043C\u0435\u0440\u0437\u043D\u0435\u0442 \u0432 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0443\u044E \u0442\u0435\u043F\u043B\u0443\u044E \u0438\u043B\u0438 \u043C\u043E\u0440\u043E\u0437\u043D\u0443\u044E \u043F\u043E\u0433\u043E\u0434\u0443. \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \xAB\u0432\u044B\u043F\u0430\u0440\u0438\u0432\u0430\u043D\u0438\u044F\xBB \u043C\u043E\u0436\u0435\u0442 \u0437\u0430\u043D\u044F\u0442\u044C \u043E\u0442 3-\u0445 \u0434\u043E 7-\u043C\u0438 \u0434\u043D\u0435\u0439. \u0423\u0441\u043A\u043E\u0440\u0438\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C, \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u043E\u043C \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u043F\u043E\u043B\u043E\u0442\u0435\u043D \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u043F\u0443\u0448\u043A\u0438.",
              "**\u041A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442.** \u0427\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u043D\u0430\u043A\u0430\u043F\u043B\u0438\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u0430, \u0432 \u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044B\u0445 \u0432\u0430\u043B\u0438\u043A\u043E\u043C \u0448\u0442\u043E\u0440\u0430\u0445 \u043D\u0430\u0434 \u043F\u0440\u043E\u0435\u043C\u043E\u043C, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043E \u0441\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0438\u0445 \u043D\u0430 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044E\u044E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0435\u043C\u0430. \u0412\u0430\u0436\u043D\u043E! \u0421\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0442\u044C \u0448\u0442\u043E\u0440\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u0443\u0445\u0438\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0434\u0430 \u043D\u0435 \u043E\u0441\u0442\u0430\u0432\u0430\u043B\u0430\u0441\u044C \u043D\u0430 \u0434\u043E\u043B\u0433\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u043B\u043E\u044F\u043C\u0438 \u041F\u0412\u0425 \u043F\u043B\u0451\u043D\u043A\u0438.",
              "**\u0421\u0436\u0430\u0442\u0438\u0435 \u043F\u043B\u0435\u043D\u043A\u0438.** \u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E \u0441\u0436\u0438\u043C\u0430\u0442\u044C\u0441\u044F \u0432 \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u043D\u043E\u043C, \u043D\u0435 \u043D\u0430\u0442\u044F\u043D\u0443\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438. \u0412\u0441\u0435 \u043B\u0435\u0442\u043E \u0433\u0438\u0431\u043A\u0438\u0435 \u043E\u043A\u043D\u0430, \u0441\u043A\u0440\u0443\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u043D\u0430\u0434 \u043F\u0440\u043E\u0435\u043C\u043E\u043C, \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0435\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E.",
              "**\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044E.** \u041C\u044B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0441\u0442\u044F\u0433\u0438\u0432\u0430\u0442\u044C \u0448\u0442\u043E\u0440\u044B \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u043D\u0430 \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0435 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F, \u043B\u0438\u0431\u043E \u0441\u043E\u0432\u0441\u0435\u043C \u0441\u043D\u0438\u043C\u0430\u0442\u044C \u0441 \u043F\u0440\u043E\u0435\u043C\u043E\u0432 \u0438 \u0441\u043C\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u043F\u043B\u043E\u0442\u043D\u044B\u0439 \u0432\u0430\u043B (\u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0443 \u043D\u0430\u0441 \u043F\u0440\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0438\u0437 \u041F\u0412\u0425) \u0438 \u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u043E\u0432\u043D\u043E \u0441\u043C\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u0448\u0442\u043E\u0440\u044B \u041F\u0412\u0425 \u043D\u0430 \u0431\u043E\u0431\u0438\u043D\u0435, \u0432 \u0441\u0443\u0445\u043E\u043C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u0441 \u0440\u043E\u0432\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u0439. \u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u044D\u0442\u0438\u0445 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0434\u043B\u0438\u0442 \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0448\u0442\u043E\u0440 \u0432 \u0445\u043E\u0440\u043E\u0448\u0435\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0434\u043E\u043B\u044C\u0448\u0435 10-12 \u043B\u0435\u0442 \u043F\u043E\u0441\u043B\u0435 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F!"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0434\u043B\u044F \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "\u0412\u0442\u043E\u0440\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
      },
      {
        type: "highlighted-background-text",
        text: [
          "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043F\u043E \u0446\u0435\u043D\u0435 \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0443 \u043F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u044F\u0442 \u043E\u0431\u044B\u0447\u043D\u043E\u0435 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0442\u0430\u0446\u0438\u043E\u043D\u0430\u0440\u043D\u043E\u0435 \u043E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0442 \u0432\u0435\u0442\u0440\u0430 \u0438 \u0434\u043E\u0436\u0434\u044F. \u041C\u043E\u0436\u043D\u043E \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043B\u044E\u0441\u043E\u0432 \u0432 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0442\u0430\u043A\u043E\u0433\u043E \u0432\u0438\u0434\u0430 \u043E\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u0442 \u043D\u0435\u043F\u043E\u0433\u043E\u0434\u044B."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "**\u041F\u0435\u0440\u0432\u044B\u0439 \u043F\u043B\u044E\u0441:** \u0415\u0441\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u0433\u0430\u043C\u043C\u0443 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438 \u0438 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0443 \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F, \u0442\u043E \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u043A\u0430\u0444\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C. \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043D\u0435 \u0437\u0430\u0433\u043E\u0440\u0430\u0436\u0438\u0432\u0430\u044E\u0442 \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B, \u0438\u043D\u0442\u0443\u0438\u0442\u0438\u0432\u043D\u043E \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044F \u043B\u0451\u0433\u043A\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438, \u0438 \u043D\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F. \u041A\u043B\u0438\u0435\u043D\u0442\u044B \u043A\u0430\u0444\u0435 \u0438\u043B\u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u0447\u0443\u0432\u0441\u0442\u0432\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u0438, \u0442\u0430\u043A\u043E\u0435 \u0436\u0435 \u043A\u0430\u043A \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u0432\u0435\u0440\u0430\u043D\u0434\u0435, \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437 \u0441\u043A\u0432\u043E\u0437\u043D\u043E\u0433\u043E \u0432\u0435\u0442\u0440\u0430 \u0438\u043B\u0438 \u043D\u0430\u0434\u043E\u0435\u0434\u043B\u0438\u0432\u044B\u0445 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445. \u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u0438 \u043C\u0438\u0440\u0430."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0412\u0442\u043E\u0440\u043E\u0439 \u043F\u043B\u044E\u0441:** \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D: \u0421\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u043C\u043E\u0441\u0442\u044C \u0441\u043D\u0438\u0436\u0430\u0435\u0442\u0441\u044F \u0432\u0441\u0435\u0433\u043E \u043D\u0430 2-3% \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u043F\u043E \u0432\u0430\u0448\u0438\u043C \u0437\u0430\u043A\u0430\u0437\u0430\u043C \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435 \u0441 \u0448\u0438\u0440\u043E\u043A\u0438\u043C\u0438 \u0440\u0430\u043C\u0430\u043C\u0438 (\u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u043E\u0439). \u041F\u0440\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C \u0443\u0445\u043E\u0434\u0435 \u0438 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0438\u0437 \u041F\u0412\u0425, \u0441\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u0434\u043E 10 \u043B\u0435\u0442."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0422\u0440\u0435\u0442\u0438\u0439 \u043F\u043B\u044E\u0441:** \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u0418\u0441\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441 \u0440\u0430\u0437\u0431\u0438\u0442\u0438\u0435\u043C \u043E\u043A\u043D\u0430, \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438 \u0432 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043E\u0442 \u0440\u0430\u0437\u043B\u0435\u0442\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u043E\u0441\u0442\u0440\u044B\u0445 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u044B\u0445 \u043E\u0441\u043A\u043E\u043B\u043A\u043E\u0432, \u0430 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043E\u0442 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u043F\u043E\u0442\u0435\u0440\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0443 \u0438 \u0437\u0430\u043C\u0435\u043D\u0443 \u0437\u0430\u0432\u0435\u0441\u044B."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0427\u0435\u0442\u0432\u0451\u0440\u0442\u044B\u0439 \u043F\u043B\u044E\u0441:** \u041A\u043E\u043C\u0444\u043E\u0440\u0442 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u0441\u0430\u043C\u044B\u0439 \u043F\u0440\u043E\u043D\u0438\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0432\u0435\u0442\u0435\u0440. \u0422\u0435\u043F\u043B\u043E \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0432 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438, \u0430 \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u0434\u0430\u0436\u0435 \u0432 \u043D\u0435\u043F\u043E\u0433\u043E\u0434\u0443 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u043E\u0449\u0430\u0434\u0438 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u041B\u0435\u0442\u043D\u044F\u044F \u0432\u0435\u0440\u0430\u043D\u0434\u0430 \u0443 \u043A\u0430\u0444\u0435 \u0438\u043B\u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u0438\u0431\u044B\u043B\u044C \u0438 \u0432 \u043C\u043E\u0440\u043E\u0441\u044F\u0449\u0438\u0439 \u0434\u043E\u0436\u0434\u0438\u043A, \u0438 \u0432 \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0432\u0435\u043D\u044C."
        ]
      },
      {
        type: "text",
        text: [
          "**\u041F\u044F\u0442\u044B\u0439 \u043F\u043B\u044E\u0441:** \u041F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u043E \u0441 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043B\u0435\u0433\u043A\u043E \u043C\u044B\u0442\u044C, \u043E\u043D\u0438 \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 \u0441\u0432\u043E\u0439 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434, \u0438 \u043E\u043D\u0438 \u043B\u0435\u0433\u043A\u043E \u0434\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043B\u0435\u0442\u043D\u0435\u0433\u043E \u0441\u0435\u0437\u043E\u043D\u0430."
        ]
      }
    ]
  },
  {
    name: "\u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0432\u044B\u0431\u043E\u0440\u0430 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0434\u043B\u044F \u043A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "\u0412\u0442\u043E\u0440\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
      },
      {
        type: "text",
        text: [
          "\n+",
          "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0434\u043B\u044F \u043A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432 \u0434\u043E\u043B\u0436\u043D\u044B \u043E\u0431\u043B\u0430\u0434\u0430\u0442\u044C \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u0440\u0430\u0449\u0430\u044E\u0442 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F, \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u0433\u0430\u043C\u043C\u0443 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0438, \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F (\u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0443)."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "\u0414\u043B\u044F \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439 \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u043F\u043E\u0442\u043E\u043B\u043A\u043E\u043C \u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0443\u044E \u043F\u043B\u0451\u043D\u043A\u0443 \u0438\u0437 \u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D\u0430. \u041A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E \u0441\u0432\u043E\u0438\u043C \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C \u0438\u043C\u0435\u0435\u0442 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0443\u044E \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u0438\u0437\u043D\u043E\u0441\u043E\u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C. \u041E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u044B \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 \u0438 \u043C\u043E\u0436\u0435\u0442 \u0432\u044B\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0441\u0438\u043B\u044C\u043D\u044B\u0439 \u043C\u043E\u0440\u043E\u0437. \u0426\u0435\u043D\u0430 \u043D\u0430 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u0437 \u0442\u0430\u043A\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0432\u044B\u0448\u0435, \u043D\u043E \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u043F\u0440\u043E\u0441\u0430\u043C \u0434\u043B\u044F \u0441\u0435\u0440\u044C\u0435\u0437\u043D\u043E\u0433\u043E \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F. "
        ]
      },
      {
        type: "text",
        text: [
          "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u0437 \u041F\u0412\u0425 \u043F\u043B\u0435\u043D\u043A\u0438 \u0442\u043E\u043B\u0449\u0438\u043D\u043E\u0439 700 \u043C\u043A\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432 \u043A\u0430\u0444\u0435 \u043C\u0435\u043D\u044C\u0448\u0435\u0433\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430. \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043D\u0435 \u0442\u0430\u043A\u043E\u0439 \u043F\u0440\u043E\u0447\u043D\u044B\u0439 \u043A\u0430\u043A \u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D, \u043D\u043E \u0441\u0432\u043E\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0438 \u043F\u043B\u0451\u043D\u043A\u0430 \u0431\u043E\u043B\u0435\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F \u0432 \u0446\u0435\u043D\u043E\u0432\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438. \u041A \u043C\u0438\u043D\u0443\u0441\u0430\u043C \u0434\u0430\u043D\u043D\u043E\u0439 \u043F\u043B\u0451\u043D\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043D\u0435\u0441\u0442\u0438 \u043F\u043E\u0442\u0435\u0440\u044E \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430\u0445 \u043D\u0438\u0436\u0435 -35 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0426\u0435\u043B\u044C\u0441\u0438\u044E. \u0412 \u0440\u0435\u0433\u0438\u043E\u043D\u0435, \u0433\u0434\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u043D\u0438\u0436\u0435 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u043D\u044B\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0442\u0430\u043A\u0438\u0435 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0437\u0438\u043C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043E\u0434.",
          "\n-"
        ]
      },
      {
        type: "highlighted-background-text",
        text: [
          "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430, \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0438\u0437 \u043F\u043B\u0435\u043D\u043A\u0438 \u0442\u043E\u043B\u0449\u0438\u043D\u043E\u0439 500 \u043C\u043A\u043C, \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0434\u043B\u044F \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0446\u0435\u043B\u0435\u0439, \u0442\u0430\u043A \u043A\u0430\u043A \u0442\u0430\u043A\u0438\u0435 \u0438\u0437\u0434\u0435\u043B\u0438\u044F \u0441\u0438\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u044E\u0442 \u0432 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u0445 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C."
        ]
      }
    ]
  },
  {
    name: "\u0421\u043E\u0432\u0435\u0442\u044B \u043F\u043E \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0438 \u0443\u0445\u043E\u0434\u0443 \u0437\u0430 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "\u0412\u0442\u043E\u0440\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
      },
      {
        type: "text",
        text: [
          "\n+",
          "\u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E \u0433\u0438\u0431\u043A\u0438\u0435 \u0441\u0442\u0435\u043A\u043B\u0430 \u043C\u043E\u0436\u043D\u043E \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C 10 \u043B\u0435\u0442 \u2013 \u0442\u0430\u043A\u0438\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0432 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0435 \u043F\u043B\u0451\u043D\u043A\u0438 \u041F\u0412\u0425 \u043E\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F. \u041D\u043E \u043F\u0440\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u044D\u0442\u043E\u0442 \u0441\u0440\u043E\u043A \u044F\u0432\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0448\u0435. \u0427\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u0432\u0438\u0434\u044B \u0437\u0430\u0449\u0438\u0442\u044B \u043E\u0442 \u043D\u0435\u043F\u043E\u0433\u043E\u0434\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0449\u0435\u0442 \u043F\u043B\u044E\u0441\u044B \u0438 \u043C\u0438\u043D\u0443\u0441\u044B \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u0445. \u0414\u0430\u043B\u0435\u0435 \u043C\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u0430\u043A\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0432 \u0412\u0430\u0448\u0435\u043C \u0432\u044B\u0431\u043E\u0440\u0435."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**1. \u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 \u0432 \u0432\u0430\u0448\u0435\u043C \u0440\u0435\u0433\u0438\u043E\u043D\u0435**"
        ]
      },
      {
        type: "text",
        text: [
          "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B \u043B\u0435\u0433\u043A\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432 \u0448\u0438\u0440\u043E\u043A\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435 \u043E\u0442 -30 \u0434\u043E +70 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0448\u043A\u0430\u043B\u0435 \u0426\u0435\u043B\u044C\u0441\u0438\u044F. \u041D\u043E \u043F\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u043D\u0438\u0436\u0435 \u0437\u0430\u043C\u0435\u0440\u0437\u0430\u043D\u0438\u044F \u0432\u043E\u0434\u044B \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0438\u0437 \u041F\u0412\u0425 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u0445\u0440\u0443\u043F\u043A\u0438\u043C \u0438 \u0435\u0441\u0442\u044C \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u0435 \u0441\u043B\u043E\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0438\u0437\u043B\u0438\u0448\u043D\u0435\u0439 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0435, \u0442\u0430\u043A\u043E\u0439 \u043A\u0430\u043A \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u0441\u0432\u0435\u0440\u0445 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u043D\u044B\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u0438 \u0441\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u0438 \u0432 \u0440\u0443\u043B\u043E\u043D \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0438\u0430\u043C\u0435\u0442\u0440\u043E\u043C. \u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0438\u0437 \u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u043F\u0440\u043E\u0449\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442 \u043C\u043E\u0440\u043E\u0437\u044B \u0438 \u0442\u0430\u043A\u0438\u0435 \u0434\u0432\u0435\u0440\u0438 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0437 \u0440\u0438\u0441\u043A\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F, \u043D\u043E \u0438 \u043E\u043D\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u043C\u0435\u043D\u0435\u0435 \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u043C\u0438, \u0447\u0435\u043C \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430\u0445."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0421\u043E\u0432\u0435\u0442:** \u043F\u0435\u0440\u0435\u0434 \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 \u043D\u0438\u0436\u0435 \u043D\u0443\u043B\u044F \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0426\u0435\u043B\u044C\u0441\u0438\u044E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0433\u0438\u0431\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043D\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u043C\u0435\u0441\u0442\u0443 \u0438\u0445 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043D\u0435 \u043F\u043E\u0434\u0432\u0435\u0440\u0433\u0430\u0442\u044C \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C \u043D\u0430 \u0441\u0436\u0430\u0442\u0438\u0435, \u0440\u0430\u0441\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u0438 \u043A\u0440\u0443\u0447\u0435\u043D\u0438\u0435 \u0434\u043E \u0442\u0435\u043F\u043B\u043E\u0439 \u043F\u043E\u0433\u043E\u0434\u044B. \u0415\u0441\u043B\u0438 \u0436\u0435 \u0432\u044B \u043D\u0435 \u0443\u0441\u043F\u0435\u043B\u0438 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0438 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043F\u043E\u0442\u0435\u0440\u044F\u043B\u0438 \u0441\u043E\u044E \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u043D\u0430 50%, \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0438 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435 \u0438\u0445 \u0432 \u0442\u0435\u043F\u043B\u043E\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u043E\u043C \u0432\u0438\u0434\u0435, \u043A\u043E\u0433\u0434\u0430 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u0441\u043D\u043E\u0432\u0430 \u043F\u043E\u0432\u0435\u0441\u0438\u0442\u044C \u043E\u043A\u043D\u0430 \u043D\u0430 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u043E\u043A\u043D\u0430 \u043D\u0430 \u043C\u043E\u0440\u043E\u0437\u0435 \u0432\u0430\u0441 \u043D\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0435\u0442, \u043C\u043E\u0436\u043D\u043E \u043F\u043B\u043E\u0442\u043D\u043E \u0441\u043A\u0440\u0443\u0442\u0438\u0442\u044C \u0441\u0443\u0445\u0438\u0435 \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u0443\u044E \u0442\u0440\u0443\u0431\u043A\u0443 \u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u043E \u0442\u0435\u043F\u043B\u044B\u0445 \u0434\u043D\u0435\u0439."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**2. \u041D\u0435\u043F\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043D\u043D\u044B\u0435 \u0441\u043A\u0430\u0447\u043A\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430**"
        ]
      },
      {
        type: "text",
        text: [
          "\u0420\u0435\u0437\u043A\u0438\u0435 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u044B \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 \u043D\u0435 \u043F\u043E\u0432\u0440\u0435\u0434\u044F\u0442 \u043E\u043A\u043D\u0430\u043C \u0438\u0437 \u041F\u0412\u0425 \u043F\u043B\u0435\u043D\u043A\u0438. \u041D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043C \u043F\u0430\u043B\u044F\u0449\u0435\u043C \u0441\u043E\u043B\u043D\u0446\u0435 \u0432 \u0436\u0430\u0440\u043A\u0443\u044E \u0431\u0435\u0437\u0432\u0435\u0442\u0440\u0435\u043D\u043D\u0443\u044E \u043F\u043E\u0433\u043E\u0434\u0443 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043C\u043E\u0433\u0443\u0442 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0445 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F\u0445. \u0415\u0441\u043B\u0438 \u0432 \u044D\u0442\u043E\u0442 \u043C\u043E\u043C\u0435\u043D\u0442 \xAB\u043D\u0430\u0442\u044F\u043D\u0443\u0442\u044C\xBB \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0434\u043E \u043F\u0440\u0435\u0436\u043D\u0435\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F, \u044D\u0442\u043E \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0443\u0441\u0438\u043B\u0435\u043D\u0438\u044E \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u044F, \u043A\u043E\u0433\u0434\u0430 \u0436\u0430\u0440\u0430 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u0441\u044F. \u0417\u0430\u043A\u043E\u043D\u044B \u0444\u0438\u0437\u0438\u043A\u0438 \u043E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0438 \u0438 \u0441\u0436\u0438\u043C\u0430\u043D\u0438\u0438 \u0442\u0435\u043B \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0438 \u0434\u043B\u044F \u043D\u043E\u0432\u0435\u0439\u0448\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**3. \u0421\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435 \u0438\u0437\u043B\u0443\u0447\u0435\u043D\u0438\u0435**"
        ]
      },
      {
        type: "text",
        text: [
          "\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435 \u0438\u0437\u043B\u0443\u0447\u0435\u043D\u0438\u0435, \u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0435\u0435 \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0435 \u0432\u043E\u043B\u043D\u044B \u043F\u0440\u0438\u0432\u043E\u0434\u044F\u0442 \u043A \u0441\u0442\u0430\u0440\u0435\u043D\u0438\u044E \u043B\u044E\u0431\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043B\u0435\u0442 \u043F\u043B\u0435\u043D\u043A\u0430 \u0438\u0437 \u041F\u0412\u0425 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u0434\u043E 5% \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u0438. \u0421\u0442\u043E\u0438\u0442 \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C0, \u0447\u0442\u043E \u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \xAB\u0441\u0442\u0430\u0440\u0435\u0435\u0442\xBB \u043F\u043E\u0434 \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043C \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u0430 \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u043F\u043B\u0435\u043D\u043A\u043E\u0439 \u041F\u0412\u0425."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0421\u043E\u0432\u0435\u0442:** \u0434\u043B\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u0430 \u0445\u043E\u0440\u043E\u0448\u0435\u0439 \u0441\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C\u043E\u0441\u0442\u0438, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0432 \u0447\u0438\u0441\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438, \u043E\u0447\u0438\u0449\u0430\u044F \u0438\u0445 \u043E\u0442 \u0438\u0437\u043B\u0438\u0448\u043D\u0435\u0439 \u043F\u044B\u043B\u0438 \u0438 \u0433\u0440\u044F\u0437\u0438. \u041C\u044B\u0442\u044C \u0433\u0438\u0431\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u043E\u0434\u043E\u0439 \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043D\u0430\u043F\u043E\u0440\u043E\u043C, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \xAB\u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u0443\u044E\xBB \u0445\u0438\u043C\u0438\u044E. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0433\u0443\u0431\u043A\u0438 \u0438 \u0432\u0435\u0442\u043E\u0448\u044C \u0434\u043B\u044F \u043F\u0440\u043E\u0442\u0438\u0440\u0430\u043D\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u0446\u0430\u0440\u0430\u043F\u0438\u043D\u044B \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u0435\u043B\u043A\u0438\u0435 \u0447\u0430\u0441\u0442\u0438\u0446\u044B \u043F\u044B\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C, \u043A\u0430\u043A \u0430\u0431\u0440\u0430\u0437\u0438\u0432\u043D\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B. \u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044C \u0441\u043C\u043E\u0447\u0438\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043F\u0435\u0440\u0435\u0434 \u043F\u0440\u043E\u0442\u0438\u0440\u043A\u043E\u0439, \u043E\u0447\u0435\u043D\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u0441\u0435\u0431\u044F \u0432 \u044D\u0442\u043E\u043C \u0437\u0430\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043B \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0443\u0447\u043D\u043E\u0439 \u043F\u0443\u043B\u044C\u0432\u0435\u0440\u0438\u0437\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0439."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**4. \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \xAB\u0443\u0441\u0430\u0434\u043A\u0430\xBB \u041F\u0412\u0425 \u043F\u043B\u0451\u043D\u043A\u0438**"
        ]
      },
      {
        type: "text",
        text: [
          "\u0415\u0441\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u043B\u0451\u043D\u043A\u0438, \u0442.\u0435. \u0434\u043E\u043B\u0433\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u043A\u043D\u043E \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F\u0445 (\u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0441\u043A\u0440\u0443\u0447\u0435\u043D\u044B \u043D\u0430\u0432\u0435\u0440\u0445) \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0441\u0436\u0438\u043C\u0430\u043D\u0438\u0435, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u043C \u0441 \u0431\u043E\u043B\u0435\u0435 \u043F\u043B\u043E\u0442\u043D\u043E\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0439 \u0438 \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043C\u044F\u0433\u043A\u043E\u0435 \u043E\u043A\u043D\u043E \xAB\u043F\u043E\u0448\u043B\u043E\xBB \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u0432\u043E\u043B\u043D\u0430\u043C\u0438 (\u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043D\u0430 \u044F\u0440\u043A\u043E\u043C \u0441\u043E\u043B\u043D\u0446\u0435 \u043F\u0440\u0438 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u0431\u043B\u0438\u043A\u043E\u0432)."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0421\u043E\u0432\u0435\u0442:** \u043F\u0440\u0438 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430\u0445 +5/+30 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0426\u0435\u043B\u044C\u0441\u0438\u044E \u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0438 \u043D\u0430\u0442\u044F\u0433\u0438\u0432\u0430\u0442\u044C \u043D\u0430 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**5. \u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0441\u043D\u0430\u0440\u0443\u0436\u0438 \u0438\u043B\u0438 \u0432\u043D\u0443\u0442\u0440\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F**"
        ]
      },
      {
        type: "text",
        text: [
          "\u041F\u0440\u0438 \u0440\u0435\u0437\u043A\u043E\u043C \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u0438 \u0442\u0443\u043C\u0430\u043D\u0435 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044B \u0432\u043E\u0434\u044B \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0432 \u043C\u0438\u043A\u0440\u043E\u043F\u043E\u0440\u044B \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043C\u043E\u0433\u0443\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442. \u041D\u0438 \u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E \u0432 \u044D\u0442\u043E\u043C \u043D\u0435\u0442, \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0441\u0430\u043C\u043E\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u0438 \u0437\u0430\u0439\u043C\u0435\u0442 \u043E\u0442 3 \u0434\u043E 7 \u0434\u043D\u0435\u0439. \u041A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u0435\u0442 \u0438 \u0432 \u0441\u043A\u0440\u0443\u0447\u0435\u043D\u043D\u043E\u043C \u0440\u0443\u043B\u043E\u043D\u0435 (\u0434\u0432\u0435\u0440\u043D\u043E\u0439 \u043F\u0440\u043E\u0435\u043C), \u0435\u0441\u043B\u0438 \u0431\u044B\u043B \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D \u0432 \u0442\u0430\u043A\u043E\u043C \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043F\u0440\u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0439 \u043F\u043B\u0451\u043D\u043A\u0435 \u041F\u0412\u0425."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0421\u043E\u0432\u0435\u0442:** \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u0430 \u043F\u0440\u043E\u0441\u0442\u043E \u0434\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u043F\u043E\u043C\u0443\u0442\u043D\u0435\u043D\u0438\u0435 \u0438\u0441\u0447\u0435\u0437\u043D\u0435\u0442. \u0415\u0441\u043B\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441, \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043F\u043B\u043E\u0432\u0443\u044E \u043F\u0443\u0448\u043A\u0443 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u043F\u0440\u043E\u0433\u0440\u0435\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435. \u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043E\u0433\u043E\u043D\u044C \u0438\u043C\u0435\u0435\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432\u043E \u043C\u043D\u043E\u0433\u043E \u0440\u0430\u0437 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u043F\u0440\u0435\u0434\u0435\u043B \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D!",
          "\n-"
        ]
      },
      {
        type: "list",
        lists: [
          {
            title: "**\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0443\u0445\u043E\u0434 \u0437\u0430 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438,** \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430, \u0432 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0443\u043B\u0438\u0447\u043D\u043E\u0439 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0441\u043A\u043B\u043E\u043D\u043D\u044B \u043A \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0440\u043E\u0434\u0430 \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0435\u043D\u0438\u044F\u043C:",
            items: [
              "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043C\u044B\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043C\u044B\u043B\u044C\u043D\u044B\u043C \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u043E\u043C \u0432\u043E\u0434\u044B, \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u0440\u044F\u0437\u0438 \u0434\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C\u0430. \u041C\u043E\u0439\u0442\u0435 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0447\u0438\u0441\u0442\u043E\u0439 \u043F\u0440\u043E\u0442\u043E\u0447\u043D\u043E\u0439 \u0432\u043E\u0434\u043E\u0439, \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u043E\u0440\u043E\u0448\u043A\u0438, \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u0438, \u0441\u043F\u0438\u0440\u0442\u043E\u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 \u0441\u043E\u0441\u0442\u0430\u0432\u044B. \u0427\u0430\u0449\u0435 \u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0432\u043E\u0434\u0443. \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u0442\u0440\u044F\u043F\u043A\u0438 \u0438 \u0433\u0443\u0431\u043A\u0438. **\u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043F\u0440\u0438 \u043C\u043E\u0439\u043A\u0435 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0436\u0435\u0441\u0442\u043A\u0438\u0435 \u0449\u0435\u0442\u043A\u0438, \u0447\u0438\u0441\u0442\u044F\u0449\u0438\u0435 \u0441\u0443\u0445\u0438\u0435 \u043F\u043E\u0440\u043E\u0448\u043A\u0438**, \u0442.\u043A. \u043E\u043D\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u0446\u0430\u0440\u0430\u043F\u0430\u0442\u044C \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u043F\u043B\u0435\u043D\u043A\u0438.",
              "**\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C** \u043C\u044B\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043F\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B \u043D\u0435 \u043D\u0438\u0436\u0435 5\xB0C.",
              "**\u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0447\u0438\u0441\u0442\u043A\u0438 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D:** \u0431\u0435\u043D\u0437\u0438\u043D, \u043A\u0435\u0440\u043E\u0441\u0438\u043D, \u0443\u0430\u0439\u0442-\u0441\u043F\u0438\u0440\u0438\u0442, \u0441\u043A\u0438\u043F\u0438\u0434\u0430\u0440, \u0442\u043E\u043B\u0443\u043E\u043B, \u0447\u0438\u0441\u0442\u044B\u0439 \u0441\u043F\u0438\u0440\u0442, \u0438\u043D\u044B\u0435 \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u0438.",
              "**\u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u043E\u0439** \u043C\u043D\u043E\u0433\u0438\u0445 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043D\u0430 \u043B\u0435\u0442\u043D\u0438\u0445 \u0432\u0435\u0440\u0430\u043D\u0434\u0430\u0445, \u0431\u0435\u0441\u0435\u0434\u043A\u0430\u0445, \u0441 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0437\u043E\u043D\u043E\u0439 \u0431\u0430\u0440\u0431\u0435\u043A\u044E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0435\u043D\u0438\u044F \u0435\u0433\u043E \u043D\u0435 \u043E\u0447\u0438\u0449\u0430\u044E\u0442 \u0441\u0440\u0430\u0437\u0443, \u0430 \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442 \u044D\u0442\u043E \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u043D\u0430 \u0432\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0443\u0431\u043E\u0440\u043A\u0438. \u041D\u0430 \u0437\u0430\u043C\u0435\u0442\u043A\u0443: \u0441\u0432\u0435\u0436\u0435\u0435 \u043F\u044F\u0442\u043D\u043E \u043E\u0442\u043C\u044B\u0442\u044C \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0449\u0435, \u0447\u0435\u043C \u0437\u0430\u0441\u043E\u0445\u0448\u0435\u0435 \u0437\u0430\u0441\u0442\u0430\u0440\u0435\u043B\u043E\u0435 \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0435\u043D\u0438\u0435. \u041C\u043D\u043E\u0433\u0438\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0436\u0438\u0440\u043D\u044B\u0435 \u043F\u044F\u0442\u043D\u0430 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u044B\u0442\u044C \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u0439 \u0432\u043E\u0434\u043E\u0439, \u0442\u043E\u0433\u0434\u0430 \u043A\u0430\u043A \u043E\u0442\u0442\u0435\u0440\u0435\u0442\u044C \u0437\u0430\u0441\u043E\u0445\u0448\u0438\u0439 \u0436\u0438\u0440 \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043C\u044B\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0430 \u0438 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0440\u0435\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0441\u044F.",
              "\u0410 \u0442\u0430\u043A\u0436\u0435, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043B\u044E\u0431\u043E\u0435 \u0447\u0438\u0441\u0442\u044F\u0449\u0435\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0430 \u043C\u0430\u043B\u043E\u0437\u0430\u043C\u0435\u0442\u043D\u043E\u043C \u0443\u0447\u0430\u0441\u0442\u043A\u0435 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. \u0415\u0441\u043B\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u043D\u0435 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u043F\u043B\u0435\u043D\u043A\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0446\u0432\u0435\u0442\u0430, \u043F\u043E\u043C\u0443\u0442\u043D\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u0442\u043E \u0435\u0433\u043E \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u043E\u0447\u0438\u0449\u0435\u043D\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D.",
              "\u041D\u0438 \u0432 \u043A\u043E\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u0441\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u041F\u0412\u0425 \u043F\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u043D\u0438\u0436\u0435 0\xB0C. \u041D\u0435 \u043C\u043E\u0439\u0442\u0435 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0437\u0438\u043C\u043E\u0439. **\u0421\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0432 \u0440\u0443\u043B\u043E\u043D \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438 \u043F\u043B\u044E\u0441\u043E\u0432\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435**, \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u0436\u0435 (\u0434\u043E\u0436\u0434\u0438\u0442\u0435\u0441\u044C \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u0430, \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043D\u0435\u0439 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439).",
              "\u041F\u0440\u0438 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0438 \u043D\u0430 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043A\u0440\u0430\u0441\u043A\u0438 \u043E\u0447\u0438\u0449\u0430\u0439\u0442\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u043F\u043B\u0435\u043D\u043A\u0438 \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043F\u0430\u0440\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430. \u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u043D\u0435 \u0431\u043E\u0438\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440."
            ]
          }
        ]
      }
    ]
  },
  {
    name: "\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0435 \u0441\u0435\u0442\u043A\u0438 \u043E\u0442 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "\u0412\u0442\u043E\u0440\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
      },
      {
        type: "text",
        text: [
          "\n+",
          "\u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043D\u0430\u0434\u043E\u0435\u0434\u043B\u0438\u0432\u044B\u0445 \u0436\u0443\u0436\u0436\u0430\u0449\u0438\u0445 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445 \u043F\u0440\u0438 \u043E\u0442\u0434\u044B\u0445\u0435 \u043B\u0435\u0442\u043E\u043C \u0432 \u0432\u0435\u0447\u0435\u0440\u043D\u0438\u0435 \u0447\u0430\u0441\u044B \u043D\u0430 \u0434\u0430\u0447\u0435 \u0438\u043B\u0438 \u0432\u0435\u0440\u0430\u043D\u0434\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0432\u0430\u0436\u043D\u0435\u0439\u0448\u0438\u0445 \u043F\u0443\u043D\u043A\u0442\u043E\u0432 \u0445\u043E\u0440\u043E\u0448\u0435\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430. \u041F\u0440\u0438\u043C\u0435\u0440\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u0442\u0434\u044B\u0445\u0430 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u041F\u0412\u0425 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430\u0431\u043E\u0440\u0430 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u0430\u0447\u0435\u0441\u0442\u0432 \u0430\u043D\u0442\u0438\u043C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0445 \u0441\u0435\u0442\u043E\u043A, \u0441\u0440\u0435\u0434\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u0438\u0437\u043D\u043E\u0441\u043E\u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C, \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C, \u0441\u0442\u043E\u0439\u043A\u043E\u0441\u0442\u044C \u043A \u0432\u043D\u0435\u0448\u043D\u0438\u043C \u0444\u0430\u043A\u0442\u043E\u0440\u0430\u043C \u0441\u0440\u0435\u0434\u044B."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**1. \u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 \u0432 \u0432\u0430\u0448\u0435\u043C \u0440\u0435\u0433\u0438\u043E\u043D\u0435**"
        ]
      },
      {
        type: "text",
        text: [
          "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B \u043B\u0435\u0433\u043A\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432 \u0448\u0438\u0440\u043E\u043A\u043E\u043C \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435 \u043E\u0442 -30 \u0434\u043E +70 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u043F\u043E \u0448\u043A\u0430\u043B\u0435 \u0426\u0435\u043B\u044C\u0441\u0438\u044F. \u041D\u043E \u043F\u0440\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0435 \u043D\u0438\u0436\u0435 \u0437\u0430\u043C\u0435\u0440\u0437\u0430\u043D\u0438\u044F \u0432\u043E\u0434\u044B \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0438\u0437 \u041F\u0412\u0425 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u0445\u0440\u0443\u043F\u043A\u0438\u043C \u0438 \u0435\u0441\u0442\u044C \u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C, \u0447\u0442\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u0435 \u0441\u043B\u043E\u043C\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0438\u0437\u043B\u0438\u0448\u043D\u0435\u0439 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0435, \u0442\u0430\u043A\u043E\u0439 \u043A\u0430\u043A \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u0441\u0432\u0435\u0440\u0445 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u043D\u044B\u0445 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u0438 \u0441\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u0438 \u0432 \u0440\u0443\u043B\u043E\u043D \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0438\u0430\u043C\u0435\u0442\u0440\u043E\u043C. \u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0438\u0437 \u043F\u043E\u043B\u0438\u0443\u0440\u0435\u0442\u0430\u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u043F\u0440\u043E\u0449\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442 \u043C\u043E\u0440\u043E\u0437\u044B \u0438 \u0442\u0430\u043A\u0438\u0435 \u0434\u0432\u0435\u0440\u0438 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0437 \u0440\u0438\u0441\u043A\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F, \u043D\u043E \u0438 \u043E\u043D\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u043C\u0435\u043D\u0435\u0435 \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u043C\u0438, \u0447\u0435\u043C \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430\u0445."
        ]
      },
      {
        type: "list",
        lists: [
          {
            title: "\u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438 \u0430\u043D\u0442\u0438\u043C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0435 \u0441\u0435\u0442\u043A\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0440\u0435\u0448\u0438\u0442\u044C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447, \u043F\u0440\u0438\u0434\u0430\u044E\u0442 \u044D\u0441\u0442\u0435\u0442\u0438\u0447\u043D\u044B\u0439 \u0432\u0438\u0434 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u0438 \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438:",
            items: [
              "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u043D\u0430\u0434\u0435\u0436\u043D\u0443\u044E \u0437\u0430\u0449\u0438\u0442\u0443 \u043E\u0442 \u043F\u0440\u043E\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445 \u0438 \u043C\u0435\u043B\u043A\u0438\u0445 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445, \u043D\u043E \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u0440\u0438\u0442\u043E\u043A \u0441\u0432\u0435\u0436\u0435\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0432 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435.",
              "\u0421\u043E\u0437\u0434\u0430\u044E\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F\u043F\u0440\u0435\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \xAB\u043F\u043B\u043E\u0445\u0438\u0445\xBB \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445: \u0434\u043E\u0436\u0434\u044C, \u0432\u0435\u0442\u0435\u0440, \u0441\u043D\u0435\u0433.",
              "\u0410\u043D\u0442\u0438\u043C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u044F\u0442 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u044B \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0437\u0434\u0443\u0445\u0430. \u0418\u043C\u0435\u044E\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0437\u0430\u043F\u0430\u0441 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043D\u0430 \u0443\u043F\u0440\u0443\u0433\u0443\u044E \u0434\u0435\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E (\u0440\u0430\u0441\u0442\u044F\u0436\u0435\u043D\u0438\u0435, \u0441\u0433\u0438\u0431\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0440\u044B\u0432).",
              "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430\u044F \u0446\u0435\u043D\u0430 \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u044F. \u0417\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u044F, \u043C\u044F\u0433\u043A\u0438\u0435 (\u043C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0435) \u043E\u043A\u043D\u0430 \u0434\u043B\u044F \u0431\u0435\u0441\u0435\u0434\u043E\u043A \u0441\u0440\u0430\u0437\u0443 \u0443 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F, \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043B\u0438\u0448\u043D\u0438\u0445 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043D\u0430\u043A\u0440\u0443\u0442\u043E\u043A.",
              "\u0420\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: \u0440\u0430\u043C\u043E\u0447\u043D\u044B\u0435, \u0440\u0443\u043B\u043E\u043D\u043D\u044B\u0435, \u0440\u0430\u0437\u0434\u0432\u0438\u0436\u043D\u044B\u0435."
            ]
          }
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "**\u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0435\u043C \u043F\u0440\u043E \u0432\u0438\u0434\u044B \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F:**"
        ]
      },
      {
        type: "text",
        text: [
          "**\u0420\u0430\u043C\u043E\u0447\u043D\u0430\u044F:** \u042D\u0442\u043E\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0437\u043D\u0430\u043A\u043E\u043C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435\u043C \u0436\u0438\u0442\u0435\u043B\u044F\u043C \u0441\u0442\u0440\u0430\u043D \u0421\u041D\u0413 \u0438\u0437-\u0437\u0430 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0445 \u043E\u043A\u043E\u043D. \u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0442 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043C \u043F\u0440\u043E\u0435\u043C\u0435 \u043D\u0430\u0442\u044F\u043D\u0443\u0442\u043E\u0439 \u043C\u0435\u043B\u043A\u043E\u0439 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0435\u0442\u043A\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0438\u043C\u0435\u0435\u0442 \u0442\u0432\u0451\u0440\u0434\u0443\u044E \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0443\u044E \u0444\u043E\u0440\u043C\u0443 \u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u0437 \u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0445 \u043C\u0435\u0441\u0442. \u0422\u0430\u043A\u0430\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0437\u0430\u0449\u0438\u0442\u0443 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0431\u043E\u043B\u0435\u0435 \u0438\u043B\u0438 \u043C\u0435\u043D\u0435\u0435 \u0440\u043E\u0432\u043D\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0412\u044B\u0434\u0432\u0438\u0436\u043D\u0430\u044F \u0440\u0443\u043B\u043E\u043D\u043D\u0430\u044F:** \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u0440\u043E\u0435\u043C \u043D\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435 \u0438 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u043B\u0438 \u043F\u043E\u0434\u043D\u044F\u0442\u044C \u0441\u0435\u0442\u043A\u0443. \u0412 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441 \u043E\u0431\u044B\u043A\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0442\u044F\u043D\u0443\u0442\u043E\u0439 \u0441\u0435\u0442\u043A\u043E\u0439 \u0434\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0433\u043B\u0430\u0437\u0443 \u0438 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0432 \u043F\u043B\u0430\u043D\u0435 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u0437\u0430\u043D\u0430\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F, \u043D\u043E \u0446\u0435\u043D\u0430 \u0433\u043E\u0440\u0430\u0437\u0434\u043E \u0432\u044B\u0448\u0435."
        ]
      },
      {
        type: "text",
        text: [
          "**\u0420\u0443\u043B\u043E\u043D\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430:** \u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F, \u043A\u0430\u043A \u0443 \u0440\u0430\u043C\u043E\u0447\u043D\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F, \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0438\u0437 \u041F\u0412\u0425 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u043D\u0438\u0435. \u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u0438\u043B\u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043E\u043A\u043D\u0430, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043B\u044E\u0432\u0435\u0440\u0441\u043E\u0432, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0445 \u0437\u0430\u043C\u043A\u043E\u0432 \u0438\u043B\u0438 \u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0448\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0443."
        ]
      }
    ]
  },
  {
    name: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430",
    content: [
      {
        type: "text",
        text: [
          "\u041A\u0443\u043F\u0438\u0442\u044C \u0430\u043D\u0442\u0438\u043C\u043E\u0441\u043A\u0438\u0442\u043D\u0443\u044E \u0441\u0435\u0442\u043A\u0443 \u0434\u043B\u044F \u0431\u0435\u0441\u0435\u0434\u043A\u0438, \u0432\u0435\u0440\u0430\u043D\u0434\u044B, \u0442\u0435\u0440\u0440\u0430\u0441\u044B \u0438\u043B\u0438 \u043A\u0430\u0444\u0435 \u0443 \u043D\u0430\u0448\u0435\u0439 \u0444\u0438\u0440\u043C\u044B, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0448\u0438\u0440\u043E\u043A\u0438\u0439 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u043F\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u044D\u0442\u0430\u043F\u0430\u043C\u0438 \u0437\u0430\u043C\u0435\u0440\u043E\u0432 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438, \u043C\u043E\u0436\u043D\u043E \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0438\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0437\u0430\u044F\u0432\u043A\u0443 \u0447\u0435\u0440\u0435\u0437 \u043E\u0431\u0440\u0430\u0442\u043D\u0443\u044E \u0441\u0432\u044F\u0437\u044C. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0434\u043B\u044F \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0430\u043D\u0442\u0438\u043C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0445 \u043E\u043A\u043E\u043D \u0434\u043B\u044F \u0412\u0430\u0441 \u0431\u0443\u0434\u0443\u0442: \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u043E\u043A\u043E\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u0434\u0432\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043C\u043E\u0432, \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u044F\u0445 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F (\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B, \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0441\u0442\u0435\u043D\u044B: \u0434\u0435\u0440\u0435\u0432\u043E, \u043A\u0438\u0440\u043F\u0438\u0447, \u043C\u0435\u0442\u0430\u043B\u043B, \u0431\u0435\u0442\u043E\u043D) \u0438 \u0441\u0432\u043E\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u043A \u0433\u043E\u0442\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u043F\u043E\u0434\u0431\u0435\u0440\u0443\u0442 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0443 \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F, \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u0433\u0430\u043C\u043C\u0443 \u0434\u043B\u044F \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u0441 \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0443\u0442 \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438. \u041B\u0438\u0431\u043E \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0437\u0432\u0430\u0442\u044C \u0437\u0430\u043C\u0435\u0440\u0449\u0438\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u0442 \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u044B \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0441\u0442 \u0434\u0430\u043D\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C."
        ]
      }
    ]
  },
  {
    name: "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u0442\u043E\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u0431\u0430\u0437\u0443 \u043E\u0442\u0434\u044B\u0445\u0430?",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "\u0412\u0442\u043E\u0440\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
      },
      {
        type: "list",
        lists: [
          {
            title: "\u041F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u0442\u0443\u0440\u0431\u0430\u0437\u0443 \u0438\u043B\u0438 \u0431\u0430\u0437\u0443 \u043E\u0442\u0434\u044B\u0445\u0430 \u2014 \u0432\u0430\u0436\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0440\u0435\u043A\u043B\u0430\u043C\u0435, \u043D\u043E \u043F\u0440\u0435\u0436\u0434\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0435\u0439:",
            items: [
              "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u0436\u0438\u0442\u0435\u043B\u0438 \u0431\u043B\u0438\u0437\u043B\u0435\u0436\u0430\u0449\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432, \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u043E\u0442\u0434\u044B\u0445",
              "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u0436\u0438\u0442\u0435\u043B\u0438 \u0431\u043B\u0438\u0437\u043B\u0435\u0436\u0430\u0449\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432, \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u043E\u0442\u0434\u044B\u0445 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0434\u0440\u0443\u0437\u0435\u0439",
              "\u0416\u0438\u0442\u0435\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432, \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u043E\u0442\u043F\u0443\u0441\u043A \u0432\u0434\u0430\u043B\u0435\u043A\u0435 \u043E\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430",
              "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043E\u0434\u043D\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0435\u0448\u0438\u0432\u0448\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432 \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0435",
              "\u041C\u043E\u043B\u043E\u0434\u044B\u0435 \u043B\u044E\u0434\u0438, \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u0430\u0434\u044C\u0431\u0443 \u043D\u0435 \u0432 \u0434\u0443\u0448\u043D\u043E\u043C \u043A\u0430\u0444\u0435 \u0438\u043B\u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0435, \u0430 \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0439 \u043F\u0440\u0438\u0440\u043E\u0434\u0435."
            ]
          }
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "\u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u0441\u043F\u0438\u0441\u043E\u043A \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0431\u043E\u043B\u0435\u0435 \u043E\u0431\u0448\u0438\u0440\u043D\u044B\u0439, \u043D\u043E \u0438 \u0442\u0430\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043A \u043C\u044B\u0441\u043B\u0438, \u0447\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u043E\u0439 \u043C\u0430\u0441\u0441\u043E\u0439 \u043E\u0442\u0434\u044B\u0445\u0430\u044E\u0449\u0438\u0445 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0435 \u0436\u0438\u0442\u0435\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0435\u0448\u0438\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u043E\u0442\u0434\u044B\u0445 \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0435 \u0438 \u0447\u0442\u043E\u0431\u044B \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u043A \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0435 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u043B\u0441\u044F \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u044B\u043C\u0438 \u043D\u043E\u0442\u043A\u0430\u043C\u0438, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0441\u0443\u0442\u043E\u043A."
        ]
      },
      {
        type: "text",
        text: [
          "\u041A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u044F \u0441\u0440\u0435\u0434\u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0445 \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u043E\u0442\u0434\u044B\u0445\u0443 \u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0432\u0435\u043B\u0438\u043A\u0430. \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0440\u044B\u043D\u043A\u0430 \u0433\u043E\u0432\u043E\u0440\u044F\u0442, \u0447\u0442\u043E \u0433\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u0440\u0438\u043C\u0435\u0442\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u2014 \u0441\u043C\u0435\u0448\u0435\u043D\u0438\u0435 \u0446\u0435\u043D\u043E\u0432\u044B\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043E\u0432. \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u044F, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0432 \u0447\u0430\u0441\u0442\u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0446\u0435\u043D."
        ]
      },
      {
        type: "text",
        text: [
          "\u041F\u043E\u0437\u0434\u043D\u044F\u044F \u043E\u0441\u0435\u043D\u044C \u0438 \u0437\u0438\u043C\u0430 \u2014 \u044D\u0442\u043E \u0442\u043E\u0442 \u043F\u0435\u0440\u0438\u043E\u0434, \u043A\u043E\u0433\u0434\u0430 \u043E\u0431\u044B\u0447\u043D\u043E \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0437\u0430\u0442\u0440\u0443\u0434\u043D\u0435\u043D\u0438\u044F \u0441 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u0441\u0442\u044C\u044E. \u041D\u043E\u043C\u0435\u0440\u0430 \u043F\u0443\u0441\u0442\u0443\u044E\u0442, \u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u043D\u0435 \u0442\u0430\u043A\u0438\u043C \u0447\u0430\u0441\u0442\u044B\u043C \u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C. \u041B\u043E\u0433\u0438\u0447\u043D\u044B\u043C \u0440\u0435\u0448\u0435\u043D\u0438\u0435\u043C \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F: \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u0432 \u0441\u0435\u0437\u043E\u043D \u0438 \u043D\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043C\u0435\u0436\u0441\u0435\u0437\u043E\u043D\u044C\u0435, \u043D\u043E \u0435\u0441\u0442\u044C \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F. \u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043E\u0434\u0438\u043D \u0438\u0437 \u043D\u0438\u0445."
        ]
      },
      {
        type: "text",
        text: [
          "\u0420\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044C \u043C\u0435\u0436\u0441\u0435\u0437\u043E\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u0445\u043E\u0442\u044F \u0431\u044B \u043D\u0430 \u043F\u0430\u0440\u0443 \u043C\u0435\u0441\u044F\u0446\u0435\u0432. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u0435\u0445\u0430\u043B\u0438 \u043D\u0430 \u043E\u0442\u0434\u044B\u0445, \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043E\u043C \u043D\u0430 \u043F\u0440\u0438\u0440\u043E\u0434\u0435. \u0422.\u0435. \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F, \u043A\u043E\u0433\u0434\u0430 \u043D\u0438 \u0432\u0435\u0442\u0435\u0440, \u043D\u0438 \u0434\u043E\u0436\u0434\u044C, \u043D\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u043D\u0435\u0433 \u043D\u0435 \u043F\u043E\u043C\u0435\u0448\u0430\u044E\u0442 \u043F\u043E\u0441\u0438\u0434\u0435\u0442\u044C \u0432 \u0443\u044E\u0442\u043D\u043E\u0439 \u0431\u0435\u0441\u0435\u0434\u043A\u0435, \u0433\u043E\u0442\u043E\u0432\u044F \u0448\u0430\u0448\u043B\u044B\u043A\u0438 \u0438\u043B\u0438 \u043A\u0443\u043F\u0430\u0442\u044B \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0443\u0433\u043B\u044F\u0445."
        ]
      },
      {
        type: "text",
        text: [
          "\u0412 \u044D\u0442\u043E\u043C \u0434\u0435\u043B\u0435 \u043C\u043E\u0433\u0443\u0442 \u043E\u0447\u0435\u043D\u044C \u0441\u0438\u043B\u044C\u043D\u043E \u043F\u043E\u043C\u043E\u0447\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u043A\u0440\u043E\u044E\u0442 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0442 \u043D\u0435\u043F\u043E\u0433\u043E\u0434\u044B. \u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438 \u0431\u043E\u043B\u0435\u0435 \u0434\u043E\u0440\u043E\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B: \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0435 \u043E\u043A\u043D\u0430 \u0438\u043B\u0438 \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u0435, \u043D\u043E \u0442\u0430\u043A\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u043E\u0440\u043E\u0433 \u0438 \u043D\u0435 \u043C\u043E\u0431\u0438\u043B\u0435\u043D \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044E \u0441 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438. \u0422\u0430\u043A \u0436\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u043D\u043E\u0435 \xAB\u043D\u0430 \u0432\u0435\u043A\u0430\xBB \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u0431\u0435\u0441\u0435\u0434\u043A\u0438 \u0437\u0430 \xAB\u0440\u0430\u0437\u0443\u043C\u043D\u0443\u044E\xBB \u0446\u0435\u043D\u0443 \u0442\u0430\u043A\u043E\u0433\u043E \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F. \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043B\u0435\u0433\u043A\u043E \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0438 \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0447\u0435\u043D\u044C \u0431\u044B\u0441\u0442\u0440\u043E \u0434\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0441\u0438\u043B\u0430\u043C\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u2013 \u0434\u0432\u0443\u0445 \u0447\u0435\u043B\u043E\u0432\u0435\u043A."
        ]
      }
    ]
  },
  {
    name: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043C\u0435\u0441\u0442 \u043E\u0442\u0434\u044B\u0445\u0430",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "\u0412\u0442\u043E\u0440\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430"
      },
      {
        type: "text",
        text: [
          "\n+",
          "\u0415\u0441\u043B\u0438 \u0442\u0443\u0440\u0431\u0430\u0437\u0430 \u0445\u043E\u0447\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u0438\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u0437\u0430 \u0441\u0432\u043E\u0438 \u0443\u0441\u043B\u0443\u0433\u0438, \u0442\u043E \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0443. \u0412 \u043D\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u0430\u0437\u0430, \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u0441\u043E\u0437\u0434\u0430\u043D \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u043F\u0440\u0438 \u043D\u0435\u043F\u043E\u0433\u043E\u0434\u0435, \u0447\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0420\u043E\u0441\u0441\u0438\u0438. \u041A\u0440\u0438\u0437\u0438\u0441, \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u0434\u043E\u0445\u043E\u0434\u043E\u0432 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F, \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u0435 \u0434\u0435\u043B\u043E\u0432\u044B\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u2014 \u044D\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0433\u043E\u0442\u043E\u0432 \u0432\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0442\u044C \u043D\u0435 \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u043F\u0438\u0442\u0430\u043B, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C \u043F\u043E \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044E \u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0443."
        ]
      },
      {
        type: "text",
        text: [
          "\u041C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044E \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0431\u0435\u0441\u0435\u0434\u043E\u043A, \u0432\u0435\u0440\u0430\u043D\u0434 \u0438 \u0442\u0435\u0440\u0440\u0430\u0441 \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0442\u0443\u0440\u0431\u0430\u0437\u0435, \u043D\u0430\u0448\u0438 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B \u043F\u043E\u0434\u0431\u0435\u0440\u0443\u0442 \u0446\u0432\u0435\u0442\u043E\u0432\u0443\u044E \u0433\u0430\u043C\u043C\u0443 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043E\u043A \u043E\u043A\u043E\u043D, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044E \u043C\u0435\u0441\u0442\u0430 \u043E\u0442\u0434\u044B\u0445\u0430. \u0421 \u043D\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F, \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0432 \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443, \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0432 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u043D\u0430\u0448\u0438\u043C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C. \u0421\u0440\u043E\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0432\u0438\u0441\u044F\u0442 \u043E\u0442 \u043E\u0431\u044A\u0435\u043C\u0430 \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u044F."
        ]
      }
    ]
  }
];
const useNotifications = (options = {}) => {
  const notifications = ref([]);
  const addNotification = (message, type = "info", autoClose = false, autoCloseDuration = 15e3) => {
    const notification = { message, type, autoClose, autoCloseDuration };
    notifications.value.push(notification);
    if (autoClose) {
      setTimeout(() => {
        const index2 = notifications.value.indexOf(notification);
        if (index2 !== -1) closeNotification(index2);
      }, autoCloseDuration);
    }
    if (options.updatePageTitle) options.updatePageTitle();
    if (options.playNotificationSound) options.playNotificationSound();
  };
  const closeNotification = (index2) => {
    notifications.value.splice(index2, 1);
  };
  return {
    notifications,
    // Текущее состояние уведомлений
    addNotification,
    // Метод для добавления уведомлений
    closeNotification
    // Метод для удаления уведомлений
  };
};
function useSwiper(swiperContainerRef, options) {
  const swiper = computed(() => {
    var _a2;
    var _a;
    return (_a2 = (_a = swiperContainerRef == null ? void 0 : swiperContainerRef.value) == null ? void 0 : _a.swiper) != null ? _a2 : null;
  });
  const next = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideNext();
    else
      swiper.value.slideNext(...params);
  };
  const to = (...params) => {
    if (!swiper.value)
      return;
    swiper.value.slideTo(...params);
  };
  const reset = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideReset();
    else
      swiper.value.slideReset(...params);
  };
  const prev = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slidePrev();
    else
      swiper.value.slidePrev(...params);
  };
  const checkSwiperRef = () => {
    var _a;
    const isSwiperContainer = ((_a = swiperContainerRef.value) == null ? void 0 : _a.nodeName) === "SWIPER-CONTAINER";
    if (!isSwiperContainer && swiper.value !== null && !options) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        "font-weight: bold;"
      );
    }
  };
  watch(swiper, () => checkSwiperRef());
  return {
    instance: swiper,
    next,
    prev,
    to,
    reset
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const containerRef = ref(null);
    useSwiper(containerRef);
    const currentStep = ref(1);
    const answers = ref({
      area: 1,
      doorways: null,
      // mosquito: null,
      mount: null,
      configuration: null,
      installation: null,
      schedule: null
    });
    const contactInfo = ref({
      name: "",
      phone: "",
      message: ""
    });
    const steps = [
      "area",
      "doorways",
      // "mosquito",
      "mount",
      "configuration",
      "installation",
      "schedule",
      "contact"
    ];
    const { notifications, addNotification, closeNotification } = useNotifications({
      playNotificationSound: () => {
      }
    });
    provide("notifications", notifications);
    provide("addNotification", addNotification);
    provide("closeNotification", closeNotification);
    const sliderProgressStyle = computed(() => ({
      "--slider-progress": answers.value.area || 0
    }));
    const canProceed = computed(() => {
      if (currentStep.value < 7) {
        return !!answers.value[steps[currentStep.value - 1]];
      } else {
        const isPhoneValid = contactInfo.value.phone.replace(/\D/g, "").length === 11;
        return contactInfo.value.name && isPhoneValid;
      }
    });
    const doorOptions = [
      { id: 1, image: "https://cdn.media.marquiz.ru/v1/image/upload/8h4UzM3MZQRtybk3Yeajrk.jpeg?format=webp&amp;func=auto&amp;fit=cover&amp;width=420&amp;height=420&amp;dpr=1", text: "1 \u043F\u0440\u043E\u0435\u043C" },
      { id: 2, image: "https://cdn.media.marquiz.ru/v1/image/upload/rNELhbWUUPdUgD4BHNkk94.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "2 \u043F\u0440\u043E\u0435\u043C\u0430" },
      { id: 3, image: "https://cdn.media.marquiz.ru/v1/image/upload/3g2EvKNttmT5oX5na5SRPq.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "3 \u043F\u0440\u043E\u0435\u043C\u0430" },
      { id: 4, image: "https://cdn.media.marquiz.ru/v1/image/upload/8vEA7fnjvSASoyFyA3WGBf.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "4 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u043E\u0435\u043C\u043E\u0432" }
    ];
    const mountOptions = ["\u0411\u0440\u0443\u0441", "\u0421\u0430\u0439\u0434\u0438\u043D\u0433", "\u041E\u0446\u0438\u043B\u0438\u043D\u0434\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u0440\u0443\u0441", "\u041F\u043B\u0438\u0442\u043A\u0430", "\u0411\u0435\u0442\u043E\u043D\u043D\u043E\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435", "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u0438\u0437 \u043C\u0435\u0442\u0430\u043B\u043B\u0430", "\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u043E\u0435 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435", "\u0414\u0440\u0443\u0433\u043E\u0435"];
    const configurationOptions = [
      { id: 1, image: "https://cdn.media.marquiz.ru/v1/image/upload/hqfjcwjdgpvpnskasrdj.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "\u042D\u043A\u043E\u043D\u043E\u043C", title: "\u0411\u0435\u0437 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B. \u041F\u043B\u0435\u043D\u043A\u0430 0,7 \u043C\u0438\u043A\u0440\u043E\u043D + \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425" },
      { id: 2, image: "https://cdn.media.marquiz.ru/v1/image/upload/mmtjr4bcfvtkaa4mr7s9.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442", title: "\u041F\u043B\u0435\u043D\u043A\u0430 0,7 \u043C\u0438\u043A\u0440\u043E\u043D + \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 + \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F" },
      { id: 3, image: "https://cdn.media.marquiz.ru/v1/image/upload/cpzaow7heqm5xgcsw0v7.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "\u041F\u0440\u0435\u043C\u0438\u0443\u043C", title: "\u041F\u043B\u0435\u043D\u043A\u0430 0,7 \u043C\u0438\u043A\u0440\u043E\u043D + \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 OXFORD + \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F" },
      { id: 4, image: "https://cdn.media.marquiz.ru/v1/image/upload/kuckrag3tnm7fhaht4sz.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "\u041B\u044E\u043A\u0441", title: "\u041F\u043B\u0435\u043D\u043A\u0430 0,7 \u043C\u0438\u043A\u0440\u043E\u043D + \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 OXFORD LUX  + \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F" }
    ];
    const scheduleOptions = [
      { value: "soon", text: "\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F" },
      { value: "interest", text: "\u041F\u043E\u043A\u0430 \u043F\u0440\u043E\u0441\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u044E\u0441\u044C" }
    ];
    const installOptions = [
      { value: "self", text: "\u0421\u043F\u0440\u0430\u0432\u043B\u044E\u0441\u044C \u0441\u0430\u043C" },
      { value: "need_install", text: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043C\u043E\u043D\u0442\u0430\u0436" },
      { value: "consult", text: "\u041F\u0440\u043E\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u0443\u044E\u0441\u044C \u0441 \u0432\u0430\u043C\u0438" }
    ];
    const recomendationItem = [
      {
        title: "\u0410\u0411\u0421\u041E\u041B\u042E\u0422\u041D\u041E \u0411\u0415\u0417\u041E\u041F\u0410\u0421\u041D\u042B \u0414\u041B\u042F \u0414\u0415\u0422\u0415\u0419",
        text: "\u041C\u044F\u0433\u043A\u043E\u0435 \u043E\u043A\u043D\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0440\u0430\u0437\u0431\u0438\u0442\u044C \u0438 \u043F\u043E\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F, \u043E\u043D\u0438 \u043D\u0435 \u0438\u043C\u0435\u044E\u0442 \u0437\u0430\u043F\u0430\u0445\u0430",
        icon: "/img/icons8-zona-dlya-detei-96.png"
        // Путь к изображению иконки
      },
      {
        title: "\u0414\u0415\u0428\u0415\u0412\u041B\u0415 \u041F\u041B\u0410\u0421\u0422\u0418\u041A\u041E\u0412\u042B\u0425 \u041E\u041A\u041E\u041D \u0412 \u041D\u0415\u0421\u041A\u041E\u041B\u042C\u041A\u041E \u0420\u0410\u0417",
        text: `\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0432 2 \u0440\u0430\u0437\u0430 \u043D\u0438\u0436\u0435`,
        icon: "/img/icons8-koshelek-96.png"
      },
      {
        title: "\u042D\u0421\u0422\u0415\u0422\u0418\u0427\u041D\u042B\u0415 \u0418 \u041F\u0420\u0418\u0412\u041B\u0415\u041A\u0410\u0422\u0415\u041B\u042C\u041D\u042B\u0415",
        text: `\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C\u043E\u0441\u0442\u044C\u044E`,
        icon: "/img/icons8-serdce-96.png"
      },
      {
        title: "\u041D\u0415 \u0416\u0415\u041B\u0422\u0415\u0415\u0422 \u041D\u0410 \u0421\u041E\u041B\u041D\u0426\u0415",
        text: `\u0417\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0434\u043E 95% \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u0430`,
        icon: "/img/icons8-solnce-96.png"
      },
      {
        title: "\u0421\u0420\u041E\u041A \u0421\u041B\u0423\u0416\u0411\u042B \u0411\u041E\u041B\u0415\u0415 10 \u041B\u0415\u0422",
        text: `\u0420\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438`,
        icon: "/img/icons8-kalendar-961.png"
      },
      {
        title: "\u041D\u0410\u0414\u0415\u0416\u041D\u0410\u042F \u0417\u0410\u0412\u0415\u0421\u0410",
        text: `\u041D\u0435 \u0434\u0435\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u043F\u0440\u043E\u0447\u043D\u044B\u0435, \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u0438 \u043C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u0438\u0435 `,
        icon: "/img/icons8-defence-96.png"
      }
    ];
    const services = [
      {
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u042D\u043A\u043E\u043D\u043E\u043C\xBB",
        image: "/img/IMG_5912.jfif",
        description: "\u041F\u043B\u0435\u043D\u043A\u0430 700 \u043C\u043A\u043C, \u043C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F \u0434\u043E -39\xB0C, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 \u0431\u0435\u0437 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B",
        prices: ["\u043E\u0442 1090 \u0440\u0443\u0431.", "\u043E\u0442 990 \u0440\u0443\u0431.", "\u043E\u0442 890 \u0440\u0443\u0431."],
        size: ["\u0434\u043E 15 \u043C\xB2", "\u043E\u0442 15 \u043C\xB2 \u0434\u043E 50 \u043C\xB2", "\u0431\u043E\u043B\u0435\u0435 50 \u043C\xB2"]
      },
      {
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\xBB",
        image: "/img/IMG_5910.jfif",
        description: "\u041F\u043B\u0435\u043D\u043A\u0430 700 \u043C\u043A\u043C, \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C \u043A \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u0443, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 \u0441 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u043E\u0439.",
        prices: ["\u043E\u0442 2190 \u0440\u0443\u0431.", "\u043E\u0442 2090 \u0440\u0443\u0431.", "\u043E\u0442 1990 \u0440\u0443\u0431."],
        size: ["\u0434\u043E 15 \u043C\xB2", "\u043E\u0442 15 \u043C\xB2 \u0434\u043E 30 \u043C\xB2", "\u0431\u043E\u043B\u0435\u0435 30 \u043C\xB2"]
      },
      {
        title: "\u041F\u043E\u0434 \u043A\u043B\u044E\u0447",
        image: "/img/IMG_5872.jfif",
        description: "\u041F\u043B\u0435\u043D\u043A\u0430 700 \u043C\u043A\u043C, \u043C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F \u0434\u043E -39\xB0C, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 \u0441 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u043E\u0439 \u0438 \u0441 \u043C\u043E\u043D\u0442\u0430\u0436\u043E\u043C",
        prices: ["29900 \u0440\u0443\u0431.", "45000 \u0440\u0443\u0431.", "\u043E\u0442 2990 \u0440\u0443\u0431."],
        size: ["\u0434\u043E 10 \u043C\xB2", "\u043E\u0442 10 \u043C\xB2 \u0434\u043E 15 \u043C\xB2", "\u043E\u0442 15 \u043C\xB2 \u0434\u043E 40 \u043C\xB2"]
      }
    ];
    const tabs = [
      { name: "tape", label: "\u041F\u043B\u0435\u043D\u043A\u0430" },
      { name: "vue", label: "\u041E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430" },
      { name: "grid", label: "\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430" },
      { name: "accessories", label: "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430" }
    ];
    const selectedTab = ref("tape");
    const images = ref([
      { src: "/img/gallery/gallery1.jpeg", watermark: "/img/watermarks/watermark1.png" },
      { src: "/img/gallery/gallery2.jpeg", watermark: "/img/watermarks/watermark2.png" },
      { src: "/img/gallery/gallery3.jpeg", watermark: "/img/watermarks/watermark3.png" },
      { src: "/img/gallery/gallery4.jpeg", watermark: "/img/watermarks/watermark4.png" },
      { src: "/img/gallery/gallery5.jpeg", watermark: "/img/watermarks/watermark5.png" },
      { src: "/img/gallery/gallery6.jpeg", watermark: "/img/watermarks/watermark6.png" },
      { src: "/img/gallery/gallery7.jpeg", watermark: "/img/watermarks/watermark7.png" },
      { src: "/img/gallery/gallery8.jpeg", watermark: "/img/watermarks/watermark8.png" },
      { src: "/img/gallery/gallery9.jpeg", watermark: "/img/watermarks/watermark9.png" },
      { src: "/img/gallery/gallery10.jpeg", watermark: "/img/watermarks/watermark10.png" },
      { src: "/img/gallery/gallery11.jpeg", watermark: "/img/watermarks/watermark11.png" },
      { src: "/img/gallery/gallery12.jpeg", watermark: "/img/watermarks/watermark12.png" },
      { src: "/img/gallery/gallery13.jpeg", watermark: "/img/watermarks/watermark13.png" },
      { src: "/img/gallery/gallery14.jpeg", watermark: "/img/watermarks/watermark14.png" },
      { src: "/img/gallery/gallery15.jpeg", watermark: "/img/watermarks/watermark15.png" },
      { src: "/img/gallery/gallery16.jpeg", watermark: "/img/watermarks/watermark16.png" },
      { src: "/img/gallery/gallery17.jpeg", watermark: "/img/watermarks/watermark17.png" },
      { src: "/img/gallery/gallery18.jpeg", watermark: "/img/watermarks/watermark18.png" },
      { src: "/img/gallery/gallery19.jpeg", watermark: "/img/watermarks/watermark19.png" },
      { src: "/img/gallery/gallery20.jpeg", watermark: "/img/watermarks/watermark20.png" },
      { src: "/img/gallery/gallery21.jpeg", watermark: "/img/watermarks/watermark21.png" },
      { src: "/img/gallery/gallery22.jpeg", watermark: "/img/watermarks/watermark22.png" },
      { src: "/img/gallery/gallery23.jpeg", watermark: "/img/watermarks/watermark23.png" },
      { src: "/img/gallery/gallery24.jpeg", watermark: "/img/watermarks/watermark24.png" },
      { src: "/img/gallery/gallery25.jpeg", watermark: "/img/watermarks/watermark25.png" },
      { src: "/img/gallery/gallery26.jpeg", watermark: "/img/watermarks/watermark26.png" },
      { src: "/img/gallery/gallery27.jpeg", watermark: "/img/watermarks/watermark27.png" },
      { src: "/img/gallery/gallery28.jpeg", watermark: "/img/watermarks/watermark28.png" },
      { src: "/img/gallery/gallery29.jpeg", watermark: "/img/watermarks/watermark29.png" },
      { src: "/img/gallery/gallery30.jpeg", watermark: "/img/watermarks/watermark30.png" },
      { src: "/img/gallery/gallery31.jpeg", watermark: "/img/watermarks/watermark31.png" },
      { src: "/img/gallery/gallery32.jpeg", watermark: "/img/watermarks/watermark32.png" },
      { src: "/img/gallery/gallery33.jpeg", watermark: "/img/watermarks/watermark33.png" },
      { src: "/img/gallery/gallery34.jpeg", watermark: "/img/watermarks/watermark34.png" },
      { src: "/img/gallery/gallery35.jpeg", watermark: "/img/watermarks/watermark35.png" },
      { src: "/img/gallery/gallery36.jpeg", watermark: "/img/watermarks/watermark36.png" },
      { src: "/img/gallery/gallery37.jpeg", watermark: "/img/watermarks/watermark37.png" },
      { src: "/img/gallery/gallery38.jpeg", watermark: "/img/watermarks/watermark38.png" },
      { src: "/img/gallery/gallery39.jpeg", watermark: "/img/watermarks/watermark39.png" },
      { src: "/img/gallery/gallery40.jpeg", watermark: "/img/watermarks/watermark40.png" },
      { src: "/img/gallery/gallery41.jpeg", watermark: "/img/watermarks/watermark41.png" },
      { src: "/img/gallery/gallery42.jpeg", watermark: "/img/watermarks/watermark42.png" },
      { src: "/img/gallery/gallery43.jpeg", watermark: "/img/watermarks/watermark43.png" },
      { src: "/img/gallery/gallery44.jpeg", watermark: "/img/watermarks/watermark44.png" },
      { src: "/img/gallery/gallery45.jpeg", watermark: "/img/watermarks/watermark45.png" },
      { src: "/img/gallery/gallery46.jpeg", watermark: "/img/watermarks/watermark46.png" },
      { src: "/img/gallery/gallery47.jpeg", watermark: "/img/watermarks/watermark47.png" },
      { src: "/img/gallery/gallery48.jpeg", watermark: "/img/watermarks/watermark48.png" },
      { src: "/img/gallery/gallery49.jpeg", watermark: "/img/watermarks/watermark49.png" },
      { src: "/img/gallery/gallery50.jpeg", watermark: "/img/watermarks/watermark50.png" },
      { src: "/img/gallery/gallery51.jpeg", watermark: "/img/watermarks/watermark51.png" },
      { src: "/img/gallery/gallery52.jpeg", watermark: "/img/watermarks/watermark51.png" }
    ]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_WatermarkImg = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<main class="main" data-v-6eb13c1d><section class="hero" style="${ssrRenderStyle({ "position": "relative" })}" data-v-6eb13c1d><div class="hero__image" data-v-6eb13c1d></div><div class="container" data-v-6eb13c1d><div class="hero__inner" data-v-6eb13c1d><div class="hero__content" data-v-6eb13c1d><h1 class="hero__title" data-v-6eb13c1d> \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u0437 <span class="orange" data-v-6eb13c1d>\u0433\u0438\u0431\u043A\u043E\u0433\u043E \u041F\u0412\u0425</span></h1><h2 class="hero__subtitle" data-v-6eb13c1d> \u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430: \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u0437 \u0433\u0438\u0431\u043A\u043E\u0433\u043E \u041F\u0412\u0425 \u043E\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u2014 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0434\u043B\u044F \u0432\u0435\u0440\u0430\u043D\u0434, \u0431\u0435\u0441\u0435\u0434\u043E\u043A \u0438 \u0442\u0435\u0440\u0440\u0430\u0441, \u0437\u0430\u0449\u0438\u0449\u0430\u044E\u0449\u0438\u0445 \u043E\u0442 \u0432\u0435\u0442\u0440\u0430, \u0434\u043E\u0436\u0434\u044F \u0438 \u0445\u043E\u043B\u043E\u0434\u0430. </h2><div class="hero__buttons" data-v-6eb13c1d>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "hero__btn",
        href: "https://wa.me/+1234567890",
        target: "_blank",
        "aria-label": "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 WhatsApp"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><div class="feedback-customer" data-v-6eb13c1d><div class="container" data-v-6eb13c1d><div class="feedback-customer__inner" data-v-6eb13c1d><div class="feedback-customer__items" data-v-6eb13c1d><div class="feedback" data-v-6eb13c1d><div class="feedback__item" data-v-6eb13c1d><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_0$3)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-6eb13c1d><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute" })}" class="rotating" data-v-6eb13c1d><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-6eb13c1d></circle><defs data-v-6eb13c1d><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-6eb13c1d><stop stop-color="#82dbf7" data-v-6eb13c1d></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-6eb13c1d></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-6eb13c1d>\u041D\u0430\u0448\u0438 \u0440\u0430\u0431\u043E\u0442\u044B</h2></div></div><div class="feedback" data-v-6eb13c1d><div class="feedback__item" data-v-6eb13c1d><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_1$2)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-6eb13c1d><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute", "transform": "rotate(125deg)" })}" class="rotating" data-v-6eb13c1d><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-6eb13c1d></circle><defs data-v-6eb13c1d><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-6eb13c1d><stop stop-color="#82dbf7" data-v-6eb13c1d></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-6eb13c1d></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-6eb13c1d>\u0423\u0441\u043B\u0443\u0433\u0438</h2></div></div><div class="feedback" data-v-6eb13c1d><div class="feedback__item" data-v-6eb13c1d><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_2$1)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-6eb13c1d><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute", "transform": "rotate(220deg)" })}" class="rotating" data-v-6eb13c1d><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-6eb13c1d></circle><defs data-v-6eb13c1d><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-6eb13c1d><stop stop-color="#82dbf7" data-v-6eb13c1d></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-6eb13c1d></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-6eb13c1d>\u041D\u0430\u0448\u0438 \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</h2></div></div></div></div></div></div><section class="recomendation" id="advantages" data-v-6eb13c1d><div class="container" data-v-6eb13c1d><div class="recomendation__inner" data-v-6eb13c1d><h2 class="recomendation__title" data-v-6eb13c1d> \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0438\u0437 <span class="orange" data-v-6eb13c1d> \u041F\u0412\u0425</span></h2><div class="recomendation__block-image" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_3)} class="recomendation__block-top-image" alt="" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_4)} class="recomendation__block-bottom-images" alt="" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_5)} class="recomendation__block-bottom-images" alt="" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_6)} class="recomendation__block-bottom-images" alt="" data-v-6eb13c1d></div><div class="recomendation__block-text" data-v-6eb13c1d><p data-v-6eb13c1d> \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u2013 \u044D\u0442\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u0435 \u0438\u0437 \u043F\u043B\u043E\u0442\u043D\u043E\u0439 \u041F\u0412\u0425 \u043F\u043B\u0435\u043D\u043A\u0438, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u0430\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043D\u0442\u043E\u0432\u043E\u0439 \u0442\u043A\u0430\u043D\u044C\u044E \u043E\u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u0438. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043B\u044E\u0431\u044B\u0445 \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0438 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445! </p><p data-v-6eb13c1d> \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u043A\u043D\u0430 \u0438\u0437 \u041F\u0412\u0425 \u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0441\u043F\u0440\u043E\u0441\u043E\u043C \u0441\u0440\u0435\u0434\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0431\u0435\u0441\u0435\u0434\u043E\u043A, \u0432\u0435\u0440\u0430\u043D\u0434 \u0438 \u0442\u0435\u0440\u0440\u0430\u0441. \u0420\u0443\u043B\u043E\u043D\u043D\u044B\u0435 \u0448\u0442\u043E\u0440\u044B \u043C\u043D\u043E\u0433\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B \u0438 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E \u0432\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u044D\u043A\u0441\u0442\u0435\u0440\u044C\u0435\u0440 \u2013 \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u044E\u0442 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u0432\u0435\u0440\u0430\u043D\u0434\u0430\u0445 \u0438 \u0431\u0435\u0441\u0435\u0434\u043A\u0430\u0445. </p></div><ul class="recomendation__list" data-v-6eb13c1d><li class="recomendation__list-item" data-v-6eb13c1d> \u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u043F\u043E\u0441\u043B\u0435 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043D\u0430 \u043F\u0440\u043E\u0435\u043C \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0435\u0442 \u0432\u0438\u0434 \u0441\u0442\u0435\u043A\u043B\u0430 \u0438 \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u0431\u043E\u043B\u0435\u0435 95% </li><li class="recomendation__list-item" data-v-6eb13c1d> \u0422\u0435\u043D\u0442\u043E\u0432\u0430\u044F \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441\u0435\u0437\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u043E\u0432 \u043D\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u043C\u044F\u0433\u043A\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E, \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044F \u0434\u043E\u043B\u0433\u0443\u044E \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u0438\u0437\u0434\u0435\u043B\u0438\u0439. </li><li class="recomendation__list-item" data-v-6eb13c1d> \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043B\u0435\u0433\u043A\u043E \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0438 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u043F\u0440\u043E\u0435\u043C\u0430 \u043F\u043E\u0434 \u0438\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443. </li><li class="recomendation__list-item" data-v-6eb13c1d> \u041B\u0435\u0433\u043A\u043E \u0441\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0440\u0443\u043B\u043E\u043D \u0432 \u0445\u043E\u0440\u043E\u0448\u0443\u044E \u043F\u043E\u0433\u043E\u0434\u0443 \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u0439 \u0432\u0438\u0434 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043E\u043A. </li></ul><div class="recomendation__block-items" data-v-6eb13c1d><!--[-->`);
      ssrRenderList(recomendationItem, (item, index2) => {
        _push(`<div class="recomendation__item" data-v-6eb13c1d><div class="recomendation__item-icon" data-v-6eb13c1d><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} data-v-6eb13c1d></div><h3 class="recomendation__item-title" data-v-6eb13c1d>${ssrInterpolate(item.title)}</h3><p class="recomendation__item-text" data-v-6eb13c1d>${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><div class="price" id="price" data-v-6eb13c1d><div class="container" data-v-6eb13c1d><div class="price__inner" data-v-6eb13c1d><h2 class="price__title" data-v-6eb13c1d> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C <span class="orange" data-v-6eb13c1d>\u041C\u044F\u0433\u043A\u0438\u0445 \u041E\u043A\u043E\u043D</span> \u0432 \u0433\u043E\u0442\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438 </h2><div class="price-table" data-v-6eb13c1d><!--[-->`);
      ssrRenderList(services, (item, index2) => {
        _push(`<div class="price-table__row" data-v-6eb13c1d><div class="price-table__cell" data-v-6eb13c1d><div class="service-info" data-v-6eb13c1d><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.description)} class="service-info__image" data-v-6eb13c1d><div class="service-info__block" data-v-6eb13c1d><h3 class="service-info__title" data-v-6eb13c1d>${ssrInterpolate(item.title)}</h3><p class="service-info__description" data-v-6eb13c1d>${ssrInterpolate(item.description)}</p></div></div></div><div class="price-table__cell" data-v-6eb13c1d><span data-v-6eb13c1d>${ssrInterpolate(item.prices[0])}</span><span class="price-table__cell-text-gray" data-v-6eb13c1d>${ssrInterpolate(item.size[0])}</span></div><div class="price-table__cell" data-v-6eb13c1d><span data-v-6eb13c1d>${ssrInterpolate(item.prices[1])}</span><span class="price-table__cell-text-gray" data-v-6eb13c1d>${ssrInterpolate(item.size[1])}</span></div><div class="price-table__cell" data-v-6eb13c1d><span data-v-6eb13c1d>${ssrInterpolate(item.prices[2])}</span><span class="price-table__cell-text-gray" data-v-6eb13c1d>${ssrInterpolate(item.size[2])}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="estimates" data-v-6eb13c1d><div class="estimates__inner" data-v-6eb13c1d><div class="estimates-form-wrapper" data-v-6eb13c1d><div class="estimates__image" data-v-6eb13c1d></div><div class="div" data-v-6eb13c1d><h2 class="price__title" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-6eb13c1d> \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043C\u0435\u0442\u0443 </h2><p class="estimates__subtitle" data-v-6eb13c1d> \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0438 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u043B\u0438\u0431\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u043C\u0435\u0442\u0443 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u043C, \u0430 \u043C\u044B \u0443\u0436\u0435 \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430 </p></div></div><div class="quiz" data-v-6eb13c1d><div class="quiz__inner" data-v-6eb13c1d><div class="quiz__progress-container" data-v-6eb13c1d><div class="quiz__progress-percent" data-v-6eb13c1d>${ssrInterpolate((currentStep.value / steps.length * 100).toFixed(0))}% </div><div class="quiz__progress-bar" data-v-6eb13c1d><div class="quiz__progress-bar-fill" style="${ssrRenderStyle({ width: `${currentStep.value / steps.length * 100}%` })}" data-v-6eb13c1d></div></div></div><div class="quiz__progress-question-step" data-v-6eb13c1d><p data-v-6eb13c1d>\u0412\u043E\u043F\u0440\u043E\u0441 ${ssrInterpolate(currentStep.value)}</p></div>`);
      if (currentStep.value === 1) {
        _push(`<div class="quiz__step" data-v-6eb13c1d><h2 class="quiz__title" data-v-6eb13c1d> \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u0443\u044E \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u043C\u044F\u0433\u043A\u043E\u0433\u043E \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F \u0432 \u043C\xB2 </h2><div class="quiz__slider-container" data-v-6eb13c1d><div class="quiz__slider-wrapper" style="${ssrRenderStyle(sliderProgressStyle.value)}" data-v-6eb13c1d><input type="range" min="1" max="100"${ssrRenderAttr("value", answers.value.area)} class="quiz__slider" data-v-6eb13c1d></div><p class="quiz__slider-value" data-v-6eb13c1d>${ssrInterpolate(answers.value.area)} \u043C\xB2</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 2) {
        _push(`<div class="quiz__step" data-v-6eb13c1d><h2 class="quiz__title" data-v-6eb13c1d>\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043C\u043E\u0432?</h2><div class="quiz__options" data-v-6eb13c1d><!--[-->`);
        ssrRenderList(doorOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass(["quiz__option", { "quiz__option--selected": ((_a = answers.value.doorways) == null ? void 0 : _a.id) === item.id }])}" data-v-6eb13c1d><img class="quiz__option-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.text)} data-v-6eb13c1d><p class="quiz__option-text" data-v-6eb13c1d>${ssrInterpolate(item.text)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 3) {
        _push(`<div class="quiz__step" data-v-6eb13c1d><h2 class="quiz__title" data-v-6eb13c1d> \u041D\u0430 \u0447\u0442\u043E \u0431\u0443\u0434\u0443\u0442 \u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430? </h2><div class="quiz__radio-group" data-v-6eb13c1d><!--[-->`);
        ssrRenderList(mountOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-6eb13c1d><input type="radio"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.mount, option)) ? " checked" : ""} class="quiz__radio-input" data-v-6eb13c1d><span class="quiz__radio-span" data-v-6eb13c1d><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6eb13c1d><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-6eb13c1d></path></svg></span><p data-v-6eb13c1d>${ssrInterpolate(option)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 4) {
        _push(`<div class="quiz__step" data-v-6eb13c1d><h2 class="quiz__title" data-v-6eb13c1d>\u041A\u0430\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430?</h2><div class="quiz__equipments" data-v-6eb13c1d><!--[-->`);
        ssrRenderList(configurationOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass([
            "quiz__option quiz__equipment-item",
            {
              "quiz__option--selected": ((_a = answers.value.configuration) == null ? void 0 : _a.id) === item.id
            }
          ])}" data-v-6eb13c1d><img class="quiz__equipment-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-6eb13c1d><div class="quiz__equipment-block-text" data-v-6eb13c1d><p class="quiz__equipment-text" data-v-6eb13c1d>${ssrInterpolate(item.name)}</p><h4 class="quiz__equipment-title" data-v-6eb13c1d>${ssrInterpolate(item.title)}</h4></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 5) {
        _push(`<div class="quiz__step" data-v-6eb13c1d><h2 class="quiz__title" data-v-6eb13c1d>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0430\u043C\u0438 \u0438\u043B\u0438 \u043D\u0443\u0436\u0435\u043D \u043C\u043E\u043D\u0442\u0430\u0436?</h2><div class="quiz__radio-group" data-v-6eb13c1d><!--[-->`);
        ssrRenderList(installOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-6eb13c1d><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.installation, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-6eb13c1d><span class="quiz__radio-span" data-v-6eb13c1d><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6eb13c1d><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-6eb13c1d></path></svg></span><p class="text" data-v-6eb13c1d>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 6) {
        _push(`<div class="quiz__step" data-v-6eb13c1d><h2 class="quiz__title" data-v-6eb13c1d> \u041A\u043E\u0433\u0434\u0430 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430? </h2><div class="quiz__radio-group" data-v-6eb13c1d><!--[-->`);
        ssrRenderList(scheduleOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-6eb13c1d><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.schedule, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-6eb13c1d><span class="quiz__radio-span" data-v-6eb13c1d><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-6eb13c1d><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-6eb13c1d></path></svg></span><p data-v-6eb13c1d>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 7) {
        _push(`<div class="quiz__step" data-v-6eb13c1d><p class="quiz__title" data-v-6eb13c1d> \u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u0441 \u0432\u0430\u043C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F </p><div class="contact-form" data-v-6eb13c1d><form class="contact-form__form" data-v-6eb13c1d><div class="contact-form__form-field-block" data-v-6eb13c1d><div class="contact-form__field" data-v-6eb13c1d><label class="contact-form__label" for="name" data-v-6eb13c1d>\u0418\u043C\u044F</label><input class="contact-form__input" type="text" id="name"${ssrRenderAttr("value", contactInfo.value.name)} required data-v-6eb13c1d></div><div class="contact-form__field" data-v-6eb13c1d><label class="contact-form__label" for="phone" data-v-6eb13c1d>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label><input class="contact-form__input" type="text" id="phone"${ssrRenderAttr("value", contactInfo.value.phone)} placeholder="+7 (___) ___-__-__" required data-v-6eb13c1d></div></div><div class="contact-form__field" data-v-6eb13c1d><label class="contact-form__label" for="message" data-v-6eb13c1d>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</label><textarea class="contact-form__input contact-form__input-textarea" id="message" style="${ssrRenderStyle({ "width": "100%" })}" data-v-6eb13c1d>${ssrInterpolate(contactInfo.value.message)}</textarea></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="quiz__controls" data-v-6eb13c1d><button class="quiz__button quiz__button--prev"${ssrIncludeBooleanAttr(currentStep.value === 1) ? " disabled" : ""} data-v-6eb13c1d> \u041D\u0430\u0437\u0430\u0434 </button><button class="quiz__button quiz__button--next"${ssrIncludeBooleanAttr(!canProceed.value) ? " disabled" : ""} data-v-6eb13c1d>${ssrInterpolate(currentStep.value < 7 ? "\u0414\u0430\u043B\u0435\u0435" : "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")}</button></div></div></div></div></div><section class="why" data-v-6eb13c1d><h2 class="why__title" data-v-6eb13c1d>\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 <span class="orange" data-v-6eb13c1d>\u043D\u0430\u0441?</span></h2><div class="why__inner" data-v-6eb13c1d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section><section class="material" id="material" data-v-6eb13c1d><div class="container" data-v-6eb13c1d><div class="material__inner" data-v-6eb13c1d><h2 class="material__title" data-v-6eb13c1d><span class="orange" style="${ssrRenderStyle({ "margin-left": "0" })}" data-v-6eb13c1d>\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B,</span> \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0438 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430</h2><p class="material__block-text" data-v-6eb13c1d>\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u041C\u044F\u0433\u043A\u0438\u0435 \u041E\u043A\u043D\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u0434\u043B\u044F \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u0432\u0441\u0435\u0433\u0434\u0430 \u0435\u0441\u0442\u044C \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u043A\u043B\u0430\u0434\u0435. \u0412\u0430\u043C \u043D\u0435 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0436\u0434\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043D\u0443\u0436\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u043E\u0442 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u0430 \u0438\u043B\u0438 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0435\u043B\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435. \u0417\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u043E\u043A\u043D\u0430 \u041F\u0412\u0425 \u0432 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0431\u0443\u0434\u044C\u0442\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u2014 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u043C\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D \u043D\u0430\u043C\u0438 \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435 \u0438 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\u043C. \u0427\u0442\u043E\u0431\u044B \u0432\u044B \u043C\u043E\u0433\u043B\u0438 \u043B\u0443\u0447\u0448\u0435 \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0435 \u0438 \u043F\u043E\u043D\u044F\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0439 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u0432\u0441\u0435\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u043E\u043A\u043E\u043D \u041F\u0412\u0425. </p><div class="material__wrapper-block-img-list" data-v-6eb13c1d><ul class="material__list" data-v-6eb13c1d><li class="material__list-title" data-v-6eb13c1d> \u0412\u0438\u0434\u044B \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D: </li><li class="material__list-item" data-v-6eb13c1d> 1. <strong class="material__list-item-strong" data-v-6eb13c1d>\u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425</strong> \u2014 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. </li><li class="material__list-item" data-v-6eb13c1d> 2. <strong class="material__list-item-strong" data-v-6eb13c1d>\u041E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430</strong> \u2014 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043E\u0431\u0440\u0430\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0430 \u043E\u043A\u043E\u043D \u041F\u0412\u0425. \u0418\u043C\u0435\u043D\u043D\u043E \u0432 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0443 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u043A \u043A\u0430\u0440\u043A\u0430\u0441\u0443 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438. </li><li class="material__list-item" data-v-6eb13c1d> 3. <strong class="material__list-item-strong" data-v-6eb13c1d>\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 (\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F)</strong> \u2014 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u043A\u043E\u043D \u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0443 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0420\u0430\u0437\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0441\u0430\u0434\u043A\u0438 \u043E\u043A\u043D\u0430 \u043A \u043C\u0435\u0441\u0442\u0443 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0443. </li><li class="material__list-item" data-v-6eb13c1d> 4. <strong class="material__list-item-strong" data-v-6eb13c1d>\u0414\u0432\u0443\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u044F\u044F \u043C\u043E\u043B\u043D\u0438\u044F</strong> \u2014 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0434\u0432\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043C\u043E\u0432. \u0423\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u0432\u0445\u043E\u0434 \u0438 \u0432\u044B\u0445\u043E\u0434 \u0438\u0437 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F </li><li class="material__list-item" data-v-6eb13c1d> 5. <strong class="material__list-item-strong" data-v-6eb13c1d>\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430</strong> \u2014 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 (\u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043B\u0438\u0431\u043E \u0432 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 \u0441 \u043E\u043A\u043D\u043E\u043C). </li></ul><div class="material__images" data-v-6eb13c1d><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-6eb13c1d></div></div></div></div></section><section class="tabs" data-v-6eb13c1d><div class="container" data-v-6eb13c1d><div class="tabs__inner" data-v-6eb13c1d><div class="tabs__buttons" data-v-6eb13c1d><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<span class="${ssrRenderClass(["tabs__button", { selected: tab.name === selectedTab.value }])}" data-v-6eb13c1d>${ssrInterpolate(tab.label)}</span>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(TabContent, {
        content: unref(tabContents)[selectedTab.value]
      }, null, _parent));
      _push(`</div></div></section><section class="watermark" id="watermark" data-v-6eb13c1d><div class="container" data-v-6eb13c1d><div class="watermark__inner" data-v-6eb13c1d><h2 class="watermark__title" data-v-6eb13c1d>\u041D\u0430\u0448\u0438 <span class="orange" data-v-6eb13c1d>\u0440\u0430\u0431\u043E\u0442\u044B</span></h2><div class="watermark__images" data-v-6eb13c1d>`);
      _push(ssrRenderComponent(_component_WatermarkImg, { images: images.value }, null, _parent));
      _push(`</div></div></div></section><section class="faq" id="faq" data-v-6eb13c1d><div class="container" data-v-6eb13c1d><div class="faq__inner" data-v-6eb13c1d><h2 class="faq__title" data-v-6eb13c1d>\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><div class="faq__items" data-v-6eb13c1d>`);
      _push(ssrRenderComponent(Accordeon, { questions: unref(questions) }, null, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(btnFloating, null, null, _parent));
      _push(ssrRenderComponent(Notification, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(TheFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6eb13c1d"]]);

export { index as default };
//# sourceMappingURL=index-BTuSJ0Wk.mjs.map
