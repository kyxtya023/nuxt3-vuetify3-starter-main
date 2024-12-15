import { _ as __nuxt_component_0$1 } from "./nuxt-link-CALMmd_g.js";
import { defineComponent, createElementBlock, ref, provide, useAttrs, computed, toValue, toRef, useSSRContext, createVNode, resolveDynamicComponent, mergeProps, unref, watch, withCtx, createTextVNode, toDisplayString, inject } from "vue";
import "hookable";
import { twMerge, twJoin } from "tailwind-merge";
import { u as useAppConfig, m as mergeConfig, g as get, o as omit, a as appConfig, _ as _export_sfc, b as useRequestEvent, c as useNuxtApp, d as useRuntimeConfig } from "../server.mjs";
import { ssrRenderVNode, ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { defu } from "defu";
import { hasProtocol, withLeadingSlash, joinURL, parseURL } from "ufo";
import { appendHeader } from "h3";
import "destr";
import "klona";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "@iconify/vue";
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
    const imageMeta2 = await import("image-meta").then((r) => r.imageMeta);
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
  if (!import.meta.prerender) {
    return;
  }
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
    if (import.meta.prerender) {
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
    if (import.meta.prerender) {
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
            alt: "Изображение с водяным знаком",
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
          alt: "Изображение в полноэкранном режиме"
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
const _imports_0$3 = "" + __buildAssetsURL("4db54979-24dc-4cb4-a0fa-54c3e03ab58d.Cvzm0oel.jpg");
const _imports_1$2 = "" + __buildAssetsURL("3cb75436-2636-4a15-98f2-01f5116a54b6.Drx2HuD_.jpg");
const _imports_2$1 = "" + __buildAssetsURL("8df28ea8-26c3-4e68-8248-ebbf33ff55a4.DfRfXUDS.jpg");
const _imports_3 = "" + __buildAssetsURL("e2e51fae-f4df-4a6b-ad8a-78d5f228a5ad.CYDhf-jS.jpg");
const _imports_4 = "" + __buildAssetsURL("76636daefdd44b058addb6c6bd1ac107.CkryDl_V.jpg");
const _imports_0$2 = "" + __buildAssetsURL("logo.C0Kok8DY.svg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const menuList = [
      { name: "Цены", path: "#price" },
      { name: "Материалы", path: "#material" },
      { name: "Почему мы?", path: "#why" },
      { name: "Преимущества", path: "#advantages" },
      { name: "Частые вопросы", path: "#faq" },
      { name: "Получить смету", path: "#smeta" }
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
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-da564523><div class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__inner"])}" data-v-da564523><div class="header__contacts" data-v-da564523><div class="container" data-v-da564523><div class="header__buttons" data-v-da564523><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "gap": "1.5rem" })}" data-v-da564523><a class="header__button-link" href="tel:+1234567890" target="_blank" aria-label="Позвонить" data-v-da564523>+7 (977) 263-40-00</a><a class="header__button-link" href="mailto:" data-v-da564523>yt@ya.ru</a></div><div class="header__logo" data-v-da564523>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" data-v-da564523${_scopeId}>`);
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
      _push(`</div><div class="block-text" data-v-da564523><p class="text" data-v-da564523>Работаем ежедневно</p><p class="text" data-v-da564523>с 10:00 до 19:00</p></div></div></div></div><div class="block" style="${ssrRenderStyle({ "width": "100%" })}" data-v-da564523><div class="container" data-v-da564523><div class="header__menu-block" data-v-da564523><nav class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__menu menu"])}" data-v-da564523><ul class="menu__list" data-v-da564523><!--[-->`);
      ssrRenderList(menuList, (item, index2) => {
        _push(`<li class="menu__list-item" data-v-da564523>`);
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
      _push(`<!--]--></ul><div class="header__buttons" data-v-da564523><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "gap": "1.5rem" })}" data-v-da564523><a class="header__button-link" href="#" data-v-da564523>+7 (977) 263-40-00</a><a class="header__button-link" href="mailto:" data-v-da564523>yt@ya.ru</a></div><div class="block-text" data-v-da564523><p class="text" data-v-da564523>Работаем ежедневно</p><p class="text" data-v-da564523>с 10:00 до 19:00</p></div></div></nav><div class="header__logo" data-v-da564523>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" data-v-da564523${_scopeId}>`);
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
        "aria-label": "Позвонить"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Быстрый заказ `);
          } else {
            return [
              createTextVNode(" Быстрый заказ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__burger"])}" data-v-da564523><span data-v-da564523></span></nav></div></div></div></div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-da564523"]]);
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
      text = text.replace(boldTextRegex, '<strong style="font-weight: 600; font-size: 1.8rem;line-height: 150%;font-family: Unbounded;font-weight: 500;color: #fff;">$1</strong>');
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
        _push(`<div class="${ssrRenderClass([{ active: activeIndex.value === index2 }, "question"])}" data-v-bdfba351><h3 class="question__title" data-v-bdfba351>${ssrInterpolate(item.name)}</h3><div class="question__content" style="${ssrRenderStyle({ maxHeight: activeIndex.value === index2 ? contentHeights.value[index2] : "0px" })}" data-v-bdfba351><!--[-->`);
        ssrRenderList(item.content, (block, blockIndex) => {
          _push(`<div class="content-block" data-v-bdfba351>`);
          if (block.type === "image") {
            _push(`<div class="question__image" data-v-bdfba351><img${ssrRenderAttr("src", block.src)}${ssrRenderAttr("alt", block.alt)} data-v-bdfba351><p class="question__image-description" data-v-bdfba351>${ssrInterpolate(block.description)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "highlighted-text") {
            _push(`<p class="highlighted-text" data-v-bdfba351>${splitText(block.text) ?? ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "highlighted-background-text") {
            _push(`<p class="highlighted-background-text" data-v-bdfba351>${splitText(block.text) ?? ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "text") {
            _push(`<p class="question__text" data-v-bdfba351>${splitText(block.text) ?? ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "list") {
            _push(`<div class="question__list-wrapper" data-v-bdfba351><div class="list-container" data-v-bdfba351><!--[-->`);
            ssrRenderList(block.lists, (list, listIndex) => {
              _push(`<div class="list-column" data-v-bdfba351>`);
              if (list.title) {
                _push(`<p class="question__list-title" data-v-bdfba351>${splitText(list.title) ?? ""}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<ul class="question__list" data-v-bdfba351><!--[-->`);
              ssrRenderList(list.items, (listItem, itemIndex) => {
                _push(`<li class="question__list-item" data-v-bdfba351><p data-v-bdfba351>${splitText(listItem) ?? ""}</p></li>`);
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
const Accordeon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-bdfba351"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-26538e98><div class="container" data-v-26538e98><div class="footer__inner" data-v-26538e98><div class="footer__top" data-v-26538e98><div class="footer__left-column" data-v-26538e98><div class="footer__logo" data-v-26538e98><a href="#" data-v-26538e98><img${ssrRenderAttr("src", _imports_0$2)} alt="Logo" data-v-26538e98></a></div></div><div class="footer__right-column" data-v-26538e98><p class="footer__list-title" data-v-26538e98>Контакты</p><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "0.5rem" })}" data-v-26538e98><a class="footer__button-link" href="tel:+1234567890" target="_blank" aria-label="Позвонить" data-v-26538e98>+7 (977) 263-40-00</a><a class="footer__button-link" href="mailto:" data-v-26538e98>yt@ya.ru</a></div></div></div><div class="footer__bottom" data-v-26538e98><p class="footer__text" data-v-26538e98> Все права защищены © 2016 – 2024 Цены на сайте для ознакомления — не являются публичной офертой, определяемой положениями статьи 437 Гражданского кодекса Российской Федерации. Компания оставляет за собой права без уведомления пользователя изменять цены на сайте </p></div></div></div></footer>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-26538e98"]]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs__content" }, _attrs))} data-v-fb1a3081><h2 class="tabs__title" data-v-fb1a3081>${ssrInterpolate(__props.content.title)}</h2>`);
      if (__props.content.description.length) {
        _push(`<div class="tabs__block-text" data-v-fb1a3081><!--[-->`);
        ssrRenderList(__props.content.description, (text, index2) => {
          _push(`<p class="tabs__text" data-v-fb1a3081>${ssrInterpolate(text)}</p>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="tabs__items" data-v-fb1a3081><!--[-->`);
      ssrRenderList(__props.content.items, (item, index2) => {
        _push(`<div class="tabs__item" data-v-fb1a3081><div class="tabs__item-img" data-v-fb1a3081><img${ssrRenderAttr("src", item.img)} alt="" data-v-fb1a3081></div><div class="tabs__item-block-text" data-v-fb1a3081><h3 class="tabs__item-title" data-v-fb1a3081>${ssrInterpolate(item.title)}</h3>`);
        if (item.details) {
          _push(`<ul class="tabs__item-list" data-v-fb1a3081><!--[-->`);
          ssrRenderList(item.details, (detail, idx) => {
            _push(`<li class="tabs__item-list-item" data-v-fb1a3081>${ssrInterpolate(detail)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        if (item.description) {
          _push(`<p class="tabs__item-descr" data-v-fb1a3081>${ssrInterpolate(item.description)}</p>`);
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
const TabContent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fb1a3081"]]);
const _imports_0$1 = "data:image/png;base64,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";
const _imports_1$1 = "data:image/png;base64,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";
const _sfc_main$2 = {
  __name: "btnFloating",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="floating-btn" data-v-8dc396c2><i class="phone" data-v-8dc396c2><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-8dc396c2></i></div>`);
      if (isMenuVisible.value) {
        _push(`<div class="floating-btn-menu" data-v-8dc396c2><a class="floating-btn-item whatsapp-btn" href="https://wa.me/+1234567890" target="_blank" aria-label="Написать в WhatsApp" data-v-8dc396c2><i class="fa fa-phone" data-v-8dc396c2><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-8dc396c2></i></a><a class="floating-btn-item phone-btn" href="tel:+1234567890" target="_blank" aria-label="Позвонить" data-v-8dc396c2><i class="fa fa-whatsapp" data-v-8dc396c2><img${ssrRenderAttr("src", _imports_1$1)} alt="" data-v-8dc396c2></i></a></div>`);
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
const btnFloating = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8dc396c2"]]);
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
        _push(`</div><div class="notification-block-text" data-v-627ad018><p class="title" data-v-627ad018>Уведомление</p><p class="message" data-v-627ad018>${ssrInterpolate(notification.message)}</p></div>`);
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
    title: "Пленка ПВХ для мягких окон",
    description: [
      "Для производства изделий из ПВХ мы используем прозрачную пленку корейского производства. Качество и долговечность этого материала для мягких окон проверена нами на личном опыте.",
      "Данная пленка обладает повышенной стойкостью к всевозможным внешним воздействиям, таким как дождь, ветер, снег, механические нагрузки. В тоже время имеет свойства хорошо пропускать свет в помещение и сохранять в нем комфортную температуру.",
      "Выбрав нашу компанию для производства ПВХ штор для террас, веранд и навесов вы получите действительно качественный продукт на выходе, который будет служить вам долгие годы."
    ],
    items: [
      {
        img: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        title: "Пленка для окон ПВХ 700 микрон",
        details: [
          "Толщина пленки 700 мкм",
          "Повышенная прочность",
          "Количество пластификатора: 37-40%, 55PHR"
        ],
        description: ""
      }
    ]
  },
  vue: {
    title: "ОКАНТОВКА ДЛЯ МЯГКИХ ОКОН",
    description: [
      "Окантовка обеспечивает усиление конструкции окон. Является местом установки люверсов для крепления ПВХ штор к поверхности строения. Придает окнам законченный внешний вид. Ширина окантовки 5 см. Соглашаясь на условия оказываемых нами услуг, вы гарантированно получаете качественную установку гибких окон и штор из ПВХ в установленные сроки с надежной окантовкой."
    ],
    items: [
      {
        img: "https://optim.tildacdn.com/tild3930-3266-4234-b335-393165376664/-/resize/432x336/-/format/webp/14.jpg",
        title: "ОКАНТОВКА ДЛЯ МЯГКИХ ОКОН «ЛЮКС» ИЗ ТКАНИ OXFORD 1680D",
        description: "Высококачественная окантовка усиленной прочности класса люкс. Изготавливается из специального материала Оксфорд плотностью 1680D. Имеет ярко выраженную тканевую текстуру. Прочно прошивается по периметру мягких окон. Благодаря ПВХ пропитке устойчива к любым внешним воздействиям, выдерживает резкие температурные перепады, влагостойкая, имеет презентабельный внешний вид. Подходит для любых типов жилых и придомовых строений.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3737-3032-4532-b132-616231616364/-/resize/432x336/-/format/webp/4.jpg",
        title: "ОКАНТОВКА ДЛЯ МЯГКИХ ОКОН «СТАНДАРТ» ИЗ ТКАНИ OXFORD 600D",
        description: "Высококачественная окантовка класса премиум на ПВХ подложке. Изготавливается из специального материала Оксфорд. Прочно прошивается по периметру мягких окон при помощи армированных лавсановых нитей. Устойчива к любым внешним воздействиям, влагостойкая, имеет презентабельный внешний вид. Подходит для любых типов строений и помещений.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3735-3632-4063-b937-323130643862/-/resize/432x336/-/format/webp/8.jpg",
        title: "ОКАНТОВКА ПВХ ДЛЯ МЯГКИХ ОКОН",
        description: "Этот вид окантовки, в большинстве случаев, используют для коммерческих, технических и бытовых помещений. Такая окантовка крепится к прозрачной пленке окна двумя типами, при помощи вулканизации или прошитого типа. Имеет глянцевую текстурную поверхность и самую широкую цветовую палитру. Отличается максимальной износостойкостью, прочностью, невосприимчивостью к солнечным лучам и осадкам. Легко мыть и ухаживать.",
        details: []
      }
    ]
  },
  // grid: {
  //   title: "Москитная сетка",
  //   description: [],
  //   items: [
  //     {
  //       img: "https://optim.tildacdn.com/tild6662-6230-4863-b638-323864383735/-/resize/560x280/-/format/webp/12.jpg",
  //       title: "Москитная сетка",
  //       description: "Приятным дополнением к мягким окнам станет москитная сетка, она поддерживает естественную вентиляцию и защищает от насекомых. Сетка может устанавливаться как самостоятельное изделие, так и в дополнение к гибким окнам. Сменить мягкие изделия на комплект москитной сетки получится даже у хрупкой девушки. Сетка не выцветает на солнце и эластична. Защита от комаров и прочей летающей живности особенно необходима владельцам загородных домов, коттеджей и дач. Москитная сетка может быть установлена в любую окантовку и на любой тип креплений.",
  //       details: []
  //     }
  //   ]
  // },
  accessories: {
    title: "ФУРНИТУРА ДЛЯ МЯГКИХ ОКОН",
    description: ["Качественный монтаж мягких окон ПВХ невозможен без использования надежной фурнитуры, обеспечивающей плотное крепление конструкции к поверхности строения и длительную эксплуатацию гибких окон."],
    items: [
      {
        img: "https://optim.tildacdn.com/tild3839-6432-4635-b065-646339333336/-/resize/432x336/-/format/webp/11.jpg",
        title: "СКОБА С СИЛИКОНОВЫМ РЕМЕШКОМ",
        description: "Самый распространенный и бюджетный вид фурнитуры для крепления гибких окон к необходимой поверхности. Скобы монтируются в материал несущей конструкции. Окно насаживается на скобы сквозь люверсы, посаженные по периметру окантовки. Натяжение шторы ПВХ осуществляется при помощи силиконовых ремешков, продеваемых через скобы.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild6536-6465-4436-a365-393861343936/-/resize/432x336/-/format/webp/photo_2023-01-27_16-.jpg",
        title: "ПОВОРОТНАЯ СКОБА",
        description: "Самый распространенный и бюджетный вид фурнитуры для крепления гибких окон к необходимой поверхности. Скобы монтируются в материал несущей конструкции. Окно насаживается на скобы сквозь люверсы, посаженные по периметру окантовки. Натяжение шторы ПВХ осуществляется при помощи силиконовых ремешков, продеваемых через скобы.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild6534-6235-4136-a266-306434626465/-/resize/432x336/-/format/webp/2.jpg",
        title: "ФРАНЦУЗСКИЙ ЗАМОК",
        description: "Самый распространенный и бюджетный вид фурнитуры для крепления гибких окон к необходимой поверхности. Скобы монтируются в материал несущей конструкции. Окно насаживается на скобы сквозь люверсы, посаженные по периметру окантовки. Натяжение шторы ПВХ осуществляется при помощи силиконовых ремешков, продеваемых через скобы.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3137-3766-4464-b065-636365346363/-/resize/432x336/-/format/webp/3.jpg",
        title: "ДВУСТОРОННЯЯ МОЛНИЯ",
        description: "Самый распространенный и бюджетный вид фурнитуры для крепления гибких окон к необходимой поверхности. Скобы монтируются в материал несущей конструкции. Окно насаживается на скобы сквозь люверсы, посаженные по периметру окантовки. Натяжение шторы ПВХ осуществляется при помощи силиконовых ремешков, продеваемых через скобы.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3032-6339-4564-a637-326535383837/-/resize/432x336/-/format/webp/13.jpg",
        title: "ЛЮВЕРСЫ",
        description: "Люверсы — составляющая часть конструкции мягких окон. Материал изготовления — металл. Устанавливаются люверсы в основание окантовки оконной рамы. Именно через отверстие люверсов происходит посадка каркаса окна на ту или иную поверхность. В зависимости от используемых видов крепления, люверсы могут быть прямоугольными, круглыми или овальными.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3234-3833-4365-b633-323237646435/-/resize/432x336/-/format/webp/6.jpg",
        title: "ПОЛИМЕРНАЯ СКОБА",
        description: "Полимерная скоба — это отличное продолжение больших стальных поворотных скоб. У нас представлены скобы различных цветов: коричневые, белые, бежевые, серые и черные.  Данный вид крепления используется вместе с люверсом 42х22, который отлично себя зарекомендовал на больших полотнах с площадью более 10 м2. Скобы выполнены из прочного полимера, не теряют своих свойств при сильных морозах и при попадании прямых солнечных лучей.",
        details: []
      },
      {
        img: "https://optim.tildacdn.com/tild3431-3731-4632-b431-326230333836/-/resize/432x336/-/format/webp/7.jpg",
        title: "Подвязочные ремешки",
        description: "Ремни необходимы для фиксации окон в поднятом положении (свернутыми в рулон). Мы производим ремни нескольких типов: прозрачные ремни из ПВХ и не прозрачные, под цвет окантовки с люверсом. Ремни устанавливаются через каждые 70 см и не входят в стоимость стандартных изделий. Так же в наличии имеются силиконовые ремни с пряжками. Ремни предназначены для всесезонного использования. Застёжки, материалы и фурнитура ремней подобраны с учётом эксплуатации в любую погоду и в любое время года. Гибкий материал не потрескается, металлические элементы устойчивы к коррозии.",
        details: []
      }
    ]
  }
};
const questions = [
  {
    name: "Условия бесплатного замера",
    content: [
      {
        type: "list",
        lists: [
          {
            title: "**Услуги монтажа нашими специалистами:**",
            items: [
              "Заключение договора с монтажом",
              "Предварительная оплаты 30% от стоимости заказа",
              "Площадь остекления более 20 м2"
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
          "При несоблюдении данных условий выезд замерщика оплачивается отдельно",
          "\n"
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "При удаленности от МКАД на 0-50 км - 2500 руб."
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "При удаленности от МКАД на 50-100 км - 3000 руб."
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "При удаленности от МКАД на 100-150 км - 3500 руб."
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "При удаленности от МКАД на 150-200 км - 4000 руб."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "Замер специалистом нашей компании осуществляется в течение 1-2 дней, после поступления заявки. В заранее обговоренное время, наш специалист приедет на Ваш объект для осуществления всех необходимых замеров и демонстрации вариантов окантовки и фурнитуры для мягких окон."
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
    name: "Сроки замера",
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
          "Сроки замера, производства и монтажа мягких окон. Основная задача нашей компании — сделать качественный продукт и выполнить все работы в установленные сроки. Мы не вводим в заблуждение своих клиентов, поэтому указываем только реальные временные затраты, в которые гарантированно можем уложиться. Бывают случаи, когда мы идем навстречу нетерпеливому заказчику и осуществляем замер и производство готовых окон без монтажа за 3-5 дней, но это, скорее, редкое исключение, чем правило. Максимальные сроки наших производственных процессов, следующие:"
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "\n+",
          "Для замера вашего объекта нам необходимо 1-3 дня"
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "Установка окон, обычно, занимает 1 день, но все зависит от общей площади перекрываемых проемов и количества монтируемых элементов."
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
    name: "Стоимость доставки",
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
        text: "При заказе монтажа доставка - **БЕСПЛАТНО**."
      },
      {
        type: "highlighted-text",
        text: [
          "**Доставка без заказа монтажа** - осуществляется по тарифам транспортных компаний-партнеров"
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
    name: "Монтаж",
    content: [
      {
        type: "list",
        lists: [
          {
            title: "**Услуги монтажа нашими специалистами:**",
            items: [
              "Установка гибких окон из ПВХ;",
              "Проверка конструкции на работоспособность;",
              "Предоставление информации о вариантах эксплуатации и уходе за мягкими окнами."
            ]
          },
          {
            title: "Минимальная сумма монтажа **15000 рублей.**",
            items: [
              "Стоимость монтажа в кирпичные, бетонные, керамические или бревенчатые поверхности **может быть увеличена** по согласованию с заказчиком.",
              "Обустройство дополнительных конструкций для крепления **оплачивается отдельно.**"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Срок изготовления",
    content: [
      {
        type: "text",
        text: [
          "Срок изготовления окон зависит от некоторых факторов, таких как сложность и объем заказываемых изделий. А также производственная загрузка на момент размещения заказа. В среднем срок изготовления мягких окон составляет **10-14 рабочих дней.**"
        ]
      }
    ]
  },
  {
    name: "Монтаж силами заказчика",
    content: [
      {
        type: "text",
        text: [
          "Вы можете осуществить установку окон самостоятельно.",
          "В этом случае **вся ответственность** за точность и правильный монтаж готовых окон **ложиться на Вас.**"
        ]
      }
    ]
  },
  {
    name: "Преимущество мягких окон",
    content: [
      {
        type: "text",
        text: [
          "Главное достоинство мягких окон в создании уютных мест отдыха при неблагоприятных погодных условиях. Одним из отличительных достоинств мягких окон для потребителя является сворачиваемость изделия. Если нет желания капитально обустраивать конструкцию беседки или веранды стеклопакетами, быстрая и недорогая установка мягких окон является прекрасной альтернативой. Причём быстрый монтаж и демонтаж производится своими руками и не понижают привлекательности строения. Гармоничность беседки или веранды с ландшафтом не нарушается. Невзыскательный к климатическим условиям материал для мягких окон сохраняет характеристики при солнечном воздействии и порывах ветра. В наших климатических условиях на территории Центрального округа России, где температура за год может меняется от +35 до -30 градусов по Цельсию, конструкция из мягких окон может применяться постоянно без потери качественных показателей."
        ]
      },
      {
        type: "list",
        lists: [
          {
            items: [
              "**Светопропускаемость.** В сравнении со стеклом гарантируется не худший обзор пространства за пределами строения и одновременно безопасность для детей, которые не разобьют мячом большое дорогое окно во время игры;",
              "**Технологичность материалов.** Повышенная прочность со стойкостью к деформациям на растяжение либо разрыв; Но, как и у любого изделия есть предел прочности, острый нож или топор, скорее всего, преодолеют эту преграду.",
              "**Упрощенная установка.** Упрощенной и краткой по времени установкой одним человеком. Для показательного монтажа не требуется специальных знаний и профессиональной помощи мастеров;",
              "**Адекватными ценами за 1 м²** пвх пленки (≈ 1100 руб.), синтетической или поливинилхлоридной окантовки и элементов крепежа (люверсы, простые или поворотно-натяжные скобы);",
              "**Улучшенными показателями экологической чистоты.** Исключается вредное выделение токсинов с альдегидами при солнечном воздействии. Материалы показательно противостоят грибкам и образованиям плесени;",
              "**Морозостойкостью.** Специальные модели материалов со специальной обработкой так же устойчивы к возгоранию."
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Свойства ПВХ пленки для мягких окон",
    content: [
      {
        type: "text",
        text: [
          "**В изготовлении гибких окон применяется пленка ПВХ и термополиуретановая пленка.**"
        ]
      },
      {
        type: "text",
        text: [
          "Для справки* Термополиуретан (TPU, ТПУ, термопластичный полиуретан, Thermoplastic polyurethane) — современный материал группы полимеров (полиуретанов), выполненный на основе сложных полиэфиров. Первоначальная его форма — бесцветные гранулы, цилиндрической или линзовидной формы. Этот уникальный материал объединяет в себе износостойкость, лёгкость и эластичность. Характерен своей прозрачностью и способностью не изменять свой цвет в процессе его использования.",
          "\n-"
        ]
      },
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "Вторая картинка"
      },
      {
        type: "list",
        lists: [
          {
            title: "**Свойства пленки ПВХ** более приемлемы для изготовления мягких окон и эксплуатации в нашем климате:",
            items: [
              "**Пленка ПВХ.** Изготовлена из соединений поливинилхлорида (нового материала, который был изобретён благодаря прогрессу в химической промышленности).",
              "**Толщина пленки.** Варьируется от 500, 650, 700 до 750 микрон (0,5 — 0,75 мм).",
              "**Однородность структуры.** Пленка ПВХ однородная в своей структуре. Ее прочность и устойчивость к ультрафиолетовому излучению достигается свойствами связей химического состава. Так же, как и стекло мягкие окна задерживают ультрафиолет.",
              "**Морозостойкость.** Мягкие окна из ПВХ не боятся морозов. Температурный разброс, в зависимости от качества плёнки, находится в диапазоне от -40 до +70 0С.",
              "**Износостойкость.** Идеальных материалов на данный момент не существует и поливинилхлорид теряет в прозрачности с каждым годом 2%.",
              "**Прозрачность.** Прозрачная пленка ПВХ тянется без необратимой деформации в пределах 1 см на каждые 1,5 метра длины.",
              "**Срок службы.** Срок службы пленки ПВХ, при должном уходе, достигает более 10 лет. Мягкие окна или шторы ПВХ из прозрачной пленки прослужат более 15 лет, при условии жесткого крепежа полотен по периметру и отсутствию критически высокого механического воздействия.",
              "**Метод сваривания.** Для изготовления гибких окон, превышающих стандартный рулон плёнки (1,4 метра) применяется метод сваривания, в результате образуется прозрачный, монолитный шов в пределах 1,5 – 2 см. Такого соединения вполне достаточно для выдерживания механических нагрузок (ветер до 15 м/с), без повреждений полотна."
            ]
          },
          {
            title: "**Рекомендации по эксплуатации пленки ПВХ:**",
            items: [
              "**Химические вещества.** Едкие химические вещества (щелочные, спиртовые) могут привести к помутнению полотен. Необходимо избегать применение таких средств для ухода за мягкими окнами из ПВХ.",
              "**Уход за ПВХ.** Для ухода и мытья гибких ПВХ подойдет чистая вода под напором, мягкая влаговпитывающая салфетка или ткань из микрофибры. Для придания блеска после мытья водой, шторы из пленки ПВХ можно натереть средством для ухода за пластиком для панелей автомобиля (силикон), предварительно опробовав его на тестовом полотне.",
              "**Температурные изменения.** При понижении температуры воздуха ниже 10 градусов по Цельсию пленка ПВХ начинает плохо переносить резкие заломы и загибы. Это может привести к образованию сколов и трещин в полотне.",
              "**Ремонт пленки.** Единственным методом ремонта прозрачных ПВХ окон является их замена, либо изготовление заплатки с потерей прозрачности до 20 % в месте её наложения. Если Вы заказывали изделия у нас – мы произведем замену с 10 % скидкой от стоимости изделия «под самостоятельный монтаж».",
              "**Повышенная влажность.** При затяжной повышенной влажности воздуха ПВХ пленка может «побелеть» из-за образовавшегося конденсата. Излишняя влага испарится или вымерзнет в солнечную теплую или морозную погоду. Процесс «выпаривания» может занять от 3-х до 7-ми дней. Ускорить процесс можно принудительным, направленным обогревом воздуха вокруг полотен с помощью тепловой пушки.",
              "**Конденсат.** Чтобы избежать накапливания конденсата, в свернутых валиком шторах над проемом, рекомендовано скрутить их на внутреннюю поверхность проема. Важно! Скручивать шторы необходимо сухими, чтобы вода не оставалась на долгое время между слоями ПВХ плёнки.",
              "**Сжатие пленки.** Пленка ПВХ имеет свойство сжиматься в расслабленном, не натянутом состоянии. Все лето гибкие окна, скрученными над проемом, оставлять нежелательно.",
              "**Рекомендации по хранению.** Мы рекомендуем периодически растягивать шторы по периметру на предусмотренные крепления, либо совсем снимать с проемов и сматывать на плотный вал (его можно заказать у нас при покупке мягких окон из ПВХ) и хранить ровно смотанные шторы ПВХ на бобине, в сухом помещении с ровной температурой. Соблюдение этих рекомендации продлит срок службы штор в хорошем состоянии дольше 10-12 лет после изготовления!"
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Мягкие окна для ресторанов",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "Вторая картинка"
      },
      {
        type: "highlighted-background-text",
        text: [
          "Мягкие окна по цене и удобству превосходят обычное остекление или стационарное ограждение от ветра и дождя. Можно выделить несколько плюсов в использовании такого вида ограждения от непогоды."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "**Первый плюс:** Если правильно подобрать цветовую гамму окантовки и фурнитуру для крепления, то внешний вид кафе приобретает определённый стиль. Мягкие окна не загораживают декоративные элементы, интуитивно чувствуется лёгкость конструкции, и не появляется ощущение закрытости помещения. Клиенты кафе или ресторана получают чувство открытости, такое же как на открытой веранде, только без сквозного ветра или надоедливых насекомых. Увеличивается состояние комфорта и открытости мира."
        ]
      },
      {
        type: "text",
        text: [
          "**Второй плюс:** Использования мягких окон: Светопропускамость снижается всего на 2-3% и экономия в установке и производстве по вашим заказам гораздо больше, чем традиционное остекление с широкими рамами (по сравнению с окантовкой). При правильном уходе и эксплуатации изделий из ПВХ, срок службы мягких окон составит до 10 лет."
        ]
      },
      {
        type: "text",
        text: [
          "**Третий плюс:** Большая безопасность для клиентов. Исключается варианты с разбитием окна, посетители в безопасности от разлетающихся острых стеклянных осколков, а заведение от крупных финансовых потерь на страховку и замену завесы."
        ]
      },
      {
        type: "text",
        text: [
          "**Четвёртый плюс:** Комфорт посетителей в самый пронизывающий ветер. Тепло остаётся в помещении, а следовательно, даже в непогоду можно использовать дополнительные площади для вашего бизнеса. Летняя веранда у кафе или ресторана будет приносить прибыль и в моросящий дождик, и в сильный ливень."
        ]
      },
      {
        type: "text",
        text: [
          "**Пятый плюс:** Практично с точки зрения эксплуатации. Мягкие окна легко мыть, они хорошо сохраняют свой внешний вид, и они легко демонтируются после летнего сезона."
        ]
      }
    ]
  },
  {
    name: "Особенности выбора мягких окон для кафе и ресторанов",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "Вторая картинка"
      },
      {
        type: "text",
        text: [
          "\n+",
          "Мягкие окна для кафе и ресторанов должны обладать повышенной прочностью и привлекательным дизайном. Поэтому при выборе обязательно обращают внимание на материал изготовления, цветовую гамму окантовки, способы крепления (фурнитуру)."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "Для помещений с высоким потолком желательно использовать прозрачную плёнку из полиуретана. Который по своим характеристикам имеет повышенную прочность и износостойкость. Очень хорошо переносит перепады температур и может выдержать сильный мороз. Цена на мягкие окна из такого материала выше, но качество и соответствует запросам для серьезного заведения. "
        ]
      },
      {
        type: "text",
        text: [
          "Мягкие окна из ПВХ пленки толщиной 700 мкм используются в кафе меньшего размера. Материал не такой прочный как полиуретан, но свои функции выполняет и плёнка более доступная в ценовой категории. К минусам данной плёнки можно отнести потерю эластичности при температурах ниже -35 градусов по Цельсию. В регионе, где температуры опускаются ниже прочностных характеристик материала такие мягкие окна желательно демонтировать в зимний период.",
          "\n-"
        ]
      },
      {
        type: "highlighted-background-text",
        text: [
          "Мягкие окна, изготовленные из пленки толщиной 500 мкм, не используют для коммерческих целей, так как такие изделия сильно проигрывают в характеристиках предыдущим вариантам."
        ]
      }
    ]
  },
  {
    name: "Советы по эксплуатации и уходу за мягкими окнами",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "Вторая картинка"
      },
      {
        type: "text",
        text: [
          "\n+",
          "Номинально гибкие стекла можно эксплуатировать 10 лет – такие технические характеристики указаны в паспорте плёнки ПВХ от производителя. Но при правильной эксплуатации этот срок явно будет выше. Чтобы выбрать для себя виды защиты от непогоды каждый ищет плюсы и минусы в различных характеристиках. Далее мы приведем некоторые факты, которые помогут определиться в Вашем выборе."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**1. Диапазон температур в вашем регионе**"
        ]
      },
      {
        type: "text",
        text: [
          "Мягкие окна способны легко перенести температуру в широком диапазоне от -30 до +70 градусов по шкале Цельсия. Но при температуре ниже замерзания воды материал из ПВХ становится более хрупким и есть вероятность, что изделие сломается при излишней механической нагрузке, такой как натяжение сверх прочностных характеристик и скручивании в рулон с минимальным диаметром. Изделия из полиуретанового материала проще переносят морозы и такие двери можно использовать без риска повреждения, но и они станут менее эластичными, чем при высоких температурах."
        ]
      },
      {
        type: "text",
        text: [
          "**Совет:** перед наступлением температур ниже нуля градусов по Цельсию рекомендуется установить гибкие окна на стандартные крепления по месту их монтажа и более не подвергать механическим воздействиям на сжатие, растяжение и кручение до теплой погоды. Если же вы не успели это сделать и мягкие окна потеряли сою эластичность на 50%, аккуратно произведите демонтаж и положите их в теплое помещение в развернутом виде, когда восстановятся характеристики можно снова повесить окна на крепления. Если вариант устанавливать окна на морозе вас не привлекает, можно плотно скрутить сухие эластичные окна пластиковую трубку и оставить до теплых дней."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**2. Непредвиденные скачки температуры окружающего воздуха**"
        ]
      },
      {
        type: "text",
        text: [
          "Резкие перепады температур не повредят окнам из ПВХ пленки. На открытом палящем солнце в жаркую безветренную погоду мягкие окна могут немного потерять натяжение на посадочных креплениях. Если в этот момент «натянуть» мягкие окна до прежнего состояния, это приведет к усилению натяжения, когда жара уменьшится. Законы физики о расширении и сжимании тел при изменении их температуры работают и для новейших материалов, которые появились благодаря развитию химической промышленности по всему миру."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**3. Солнечное излучение**"
        ]
      },
      {
        type: "text",
        text: [
          "Солнечное излучение, а конкретнее ультрафиолетовые электромагнитные волны приводят к старению любого материала, поэтому по истечению нескольких лет пленка из ПВХ может потерять до 5% прозрачности. Стоит отметить0, что полиуретан быстрее «стареет» под воздействием ультрафиолета по сравнению с обычной пленкой ПВХ."
        ]
      },
      {
        type: "text",
        text: [
          "**Совет:** для увеличения срока хорошей светопропускаемости, необходимо поддерживать мягкие окна в чистом состоянии, очищая их от излишней пыли и грязи. Мыть гибкие окна необходимо водой с небольшим напором, при этом не используя «агрессивную» химию. Используя губки и ветошь для протирания необходимо учитывать, что царапины оставляет мелкие частицы пыли, которые начинаю работать, как абразивный материал. Старайтесь смочить мягкие окна перед протиркой, очень хорошо себя в этом зарекомендовал обычный ручной пульверизатор для домашних растений."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**4. Стандартная «усадка» ПВХ плёнки**"
        ]
      },
      {
        type: "text",
        text: [
          "Если отсутствует натяжение плёнки, т.е. долгое время окно не находится на своих стандартных креплениях (постоянно скручены наверх) происходит сжимание, которое позволяет образовываться участкам с более плотной структурой и кажется, что мягкое окно «пошло» небольшими волнами (особенно на ярком солнце при появлении бликов)."
        ]
      },
      {
        type: "text",
        text: [
          "**Совет:** при нормальных температурах +5/+30 градусов по Цельсию желательно периодически разворачивать и натягивать на крепления."
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          // Отступ сверху
          "**5. Повышенная влажность окружающего воздуха снаружи или внутри помещения**"
        ]
      },
      {
        type: "text",
        text: [
          "При резком увеличении влажности и тумане молекулы воды попадают в большом количестве в микропоры материала и могут образовать конденсат. Ни чего страшного в этом нет, процесс самовосстановления прозрачности займет от 3 до 7 дней. Конденсат возникает и в скрученном рулоне (дверной проем), если был зафиксирован в таком положении при влажной плёнке ПВХ."
        ]
      },
      {
        type: "text",
        text: [
          "**Совет:** при образовании конденсата просто дождитесь повышения температуры и помутнение исчезнет. Если необходимо ускорить процесс, можно использовать тепловую пушку или иным способом прогреть помещение. Открытый огонь имеет температуру во много раз больше, чем предел прочности мягких окон!",
          "\n-"
        ]
      },
      {
        type: "list",
        lists: [
          {
            title: "**Правильный уход за мягкими окнами,** мягкие окна, в условиях уличной эксплуатации склонны к различного рода загрязнениям:",
            items: [
              "Рекомендуем регулярно мыть мягкие окна мыльным раствором воды, не запускать процесс образования грязи до максимума. Мойте мягкие окна чистой проточной водой, не используйте порошки, растворители, спиртосодержащие составы. Чаще меняйте воду. Можно применять мягкие тряпки и губки. **Не используйте при мойке мягких окон жесткие щетки, чистящие сухие порошки**, т.к. они могут поцарапать поверхность пленки.",
              "**Рекомендуем** мыть мягкие окна при температуре окружающей среды не ниже 5°C.",
              "**Запрещенные средства чистки мягких окон:** бензин, керосин, уайт-спирит, скипидар, толуол, чистый спирт, иные агрессивные растворители.",
              "**Наиболее популярной ошибкой** многих владельцев мягких окон на летних верандах, беседках, с выделенной зоной барбекю является то, что при появлении загрязнения его не очищают сразу, а откладывают это занятие на время выполнения генеральной уборки. На заметку: свежее пятно отмыть намного проще, чем засохшее застарелое загрязнение. Многие свежие жирные пятна можно отмыть обычной теплой водой, тогда как оттереть засохший жир без использования мыльного раствора и интенсивного трения не получится.",
              "А также, прежде чем использовать любое чистящее средство, рекомендуем опробовать его действие на малозаметном участке мягких окон. Если средство не вызывает негативной реакции пленки в виде изменения цвета, помутнения или деформации, то его можно использовать для очищения основной поверхности мягких окон.",
              "Ни в коем случае не скручивайте мягкие окна ПВХ при температуре воздуха ниже 0°C. Не мойте мягкие окна зимой. **Сворачивать в рулон мягкие окна можно при плюсовой температуре**, разворачивать также (дождитесь стабильного тепла, температура воздуха должна несколько дней быть положительной).",
              "При попадании на мягкие окна краски очищайте поверхность пленки при помощи парогенератора. Пленка ПВХ не боится высоких температур."
            ]
          }
        ]
      }
    ]
  },
  // {
  //   name: "Москитные сетки от насекомых",
  //   content: [ 
  //     {
  //       type: "image",
  //       src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
  //       alt: "Вторая картинка",
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "\n+",
  //         "Защита от надоедливых жужжащих насекомых при отдыхе летом в вечерние часы на даче или веранде один из важнейших пунктов хорошего отдыха. Примером использования современных химических и промышленных технологий для улучшения качества отдыха является использование синтетических ПВХ материалов. Необходимо отметить наличие набора положительных качеств антимоскитных сеток, среди которых можно отметить износоустойчивость, прочность, стойкость к внешним факторам среды.",
  //       ],
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "\n+", // Отступ сверху
  //         "**1. Диапазон температур в вашем регионе**",
  //       ],
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "Мягкие окна способны легко перенести температуру в широком диапазоне от -30 до +70 градусов по шкале Цельсия. Но при температуре ниже замерзания воды материал из ПВХ становится более хрупким и есть вероятность, что изделие сломается при излишней механической нагрузке, такой как натяжение сверх прочностных характеристик и скручивании в рулон с минимальным диаметром. Изделия из полиуретанового материала проще переносят морозы и такие двери можно использовать без риска повреждения, но и они станут менее эластичными, чем при высоких температурах.",
  //       ],
  //     },
  //     {
  //       type: "list",
  //       lists: [
  //         {
  //           title: "Мягкие окна и антимоскитные сетки позволяют решить множество практических задач, придают эстетичный вид постройке и обладают следующими преимуществами:",
  //           items: [
  //             "Обеспечивают надежную защиту от проникновения насекомых и мелких животных, но оставляют полный приток свежего воздуха в помещение.",
  //             "Создают комфортное времяпрепровождение при «плохих» погодных условиях: дождь, ветер, снег.",
  //             "Антимоскитные окна отлично переносят перепады температур и влажности воздуха. Имеют достаточный запас прочности на упругую деформацию (растяжение, сгибание и разрыв).",
  //             "Доступная цена готового изделия. Заказывая, мягкие (москитные) окна для беседок сразу у производителя, не будет лишних посреднических накруток.",
  //             "Различные варианты изготовления и способы крепления: рамочные, рулонные, раздвижные.",
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "\n+",
  //         "**Более подробно расскажем про виды исполнения:**",
  //       ],
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "**Рамочная:** Этот вариант знаком практически всем жителям стран СНГ из-за распространенности пластиковых окон. Помещение от насекомых защищается в открытом проеме натянутой мелкой металлической сеткой, которая имеет твёрдую прямоугольную форму и способность вытаскиваться из посадочных мест. Такая реализация установки позволяет устанавливать защиту на любой более или менее ровной поверхности.",
  //       ],
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "**Выдвижная рулонная:** устанавливается в проем на постоянной основе и при необходимости, возможно, опустить или поднять сетку. В сравнении с обыкновенной натянутой сеткой данный вариант более приятный глазу и удобный в плане быстрого занавешивания, но цена гораздо выше.",
  //       ],
  //     },
  //     {
  //       type: "text",
  //       text: [
  //         "**Рулонная система:** Вариант крепления, как у рамочного исполнения, только окантовка выполняется из ПВХ материала, которые спокойно выдерживает скручивание. Крепление происходит по внешней или внутренней стороне окна, с помощью люверсов, французских замков или магнитов, которые вшиваются в окантовку.",
  //       ],
  //     },
  //   ],
  // },
  {
    name: "Информация для заказа",
    content: [
      {
        type: "text",
        text: [
          "Купить антимоскитную сетку для беседки, веранды, террасы или кафе у нашей фирмы, которая предлагает широкий ассортимент продукции и бесплатную консультацию по основным этапами замеров и установки, можно по телефону или оставив заявку через обратную связь. Необходимой информацией для изготовления антимоскитных окон для Вас будут: размеры оконных или дверных проемов, индивидуальных особенностях строения (материал, из которого выполнены стены: дерево, кирпич, металл, бетон) и свои персональные пожелания к готовой продукции. Менеджеры подберут фурнитуру для крепления, цветовую гамму для сочетания с дизайном постройки и произведут расчет стоимости. Либо можно вызвать замерщика, который произведет все необходимые согласования и расчеты прямо на объекте и передаст данную информацию менеджерам."
        ]
      }
    ]
  },
  {
    name: "Хотите увеличить приток клиентов на базу отдыха?",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "Вторая картинка"
      },
      {
        type: "list",
        lists: [
          {
            title: "Привлечение клиентов на турбазу или базу отдыха — важная часть работы по рекламе, но прежде необходимо определиться с целевой аудиторией:",
            items: [
              "Городские жители близлежащих городов, планирующие семейный отдых",
              "Городские жители близлежащих городов, планирующие отдых в компании друзей",
              "Жители других городов, планирующие провести отпуск вдалеке от своего города",
              "Сотрудники одной организации решившие провести корпоратив на природе",
              "Молодые люди, планирующие провести свадьбу не в душном кафе или ресторане, а на открытой природе."
            ]
          }
        ]
      },
      {
        type: "text",
        text: [
          "\n+",
          "Конечно, список целевой аудитории более обширный, но и такое перечисление приводит к мысли, что основой массой отдыхающих являются городские жители, которые решили провести отдых на природе и чтобы этот промежуток времени не запомнился негативными нотками, необходимо обеспечить высокий уровень комфорта в течение суток."
        ]
      },
      {
        type: "text",
        text: [
          "Конкуренция среди организаций предоставляющих услуги по отдыху сейчас достаточно велика. Участники рынка говорят, что главная примета времени — смешение ценовых стандартов. Стоимость проживания, особенно в части корпоративных цен."
        ]
      },
      {
        type: "text",
        text: [
          "Поздняя осень и зима — это тот период, когда обычно появляются затруднения с заполняемостью. Номера пустуют, а клиенты становятся не таким частым явлением. Логичным решением становиться: получить максимально большой заработок в сезон и не тратиться в межсезонье, но есть и другие решения. Рассмотрим один из них."
        ]
      },
      {
        type: "text",
        text: [
          "Расширить межсезонный период хотя бы на пару месяцев. Для этого необходимо обеспечить клиентов, которые приехали на отдых, комфортом на природе. Т.е. создать условия, когда ни ветер, ни дождь, ни первый снег не помешают посидеть в уютной беседке, готовя шашлыки или купаты на открытых углях."
        ]
      },
      {
        type: "text",
        text: [
          "В этом деле могут очень сильно помочь установленные мягкие окна, которые закроют помещение от непогоды. Конечно, можно использовать и более дорогие варианты: пластиковые окна или остекление, но такой вариант достаточно дорог и не мобилен по сравнению с мягкими окнами. Так же статичное «на века» закрытие помещения не всегда сохраняет внешний вид беседки за «разумную» цену такого преобразования. Мягкие окна легко сворачиваются и при необходимости очень быстро демонтируются силами одного – двух человек."
        ]
      }
    ]
  },
  {
    name: "Заказать обустройство мест отдыха",
    content: [
      {
        type: "image",
        src: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        alt: "Вторая картинка"
      },
      {
        type: "text",
        text: [
          "\n+",
          "Если турбаза хочет получать хорошие деньги за свои услуги, то и услуги должны соответствовать их качеству. В наше время должна быть хорошо развита материально-техническая база, должен быть предоставлен необходимый сервис и создан комфорт при непогоде, что очень актуально для центральной России. Кризис, уменьшение доходов населения, уменьшение деловых мероприятий — это очень удобный момент для развития тех, кто готов вкладывать не столько капитал, сколько креативность и гибкость по отношению к клиенту."
        ]
      },
      {
        type: "text",
        text: [
          "Мы готовы проработать концепцию улучшения беседок, веранд и террас на вашей турбазе, наши дизайнеры подберут цветовую гамму окантовок окон, чтобы они соответствовали основному содержанию места отдыха. С нами можно связаться, отправив заявку на почту, или позвонив по телефону нашим менеджерам. Сроки выполнения зависят от объема и характеристик готового изделия."
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
    var _a;
    return ((_a = swiperContainerRef == null ? void 0 : swiperContainerRef.value) == null ? void 0 : _a.swiper) ?? null;
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
      { id: 1, image: "https://cdn.media.marquiz.ru/v1/image/upload/8h4UzM3MZQRtybk3Yeajrk.jpeg?format=webp&amp;func=auto&amp;fit=cover&amp;width=420&amp;height=420&amp;dpr=1", text: "1 проем" },
      { id: 2, image: "https://cdn.media.marquiz.ru/v1/image/upload/rNELhbWUUPdUgD4BHNkk94.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "2 проема" },
      { id: 3, image: "https://cdn.media.marquiz.ru/v1/image/upload/3g2EvKNttmT5oX5na5SRPq.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "3 проема" },
      { id: 4, image: "https://cdn.media.marquiz.ru/v1/image/upload/8vEA7fnjvSASoyFyA3WGBf.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "4 и более проемов" }
    ];
    const mountOptions = ["Брус", "Сайдинг", "Оцилиндрованный брус", "Плитка", "Бетонное основание", "Конструкция из металла", "Кирпичное основание", "Другое"];
    const configurationOptions = [
      { id: 1, image: "https://cdn.media.marquiz.ru/v1/image/upload/hqfjcwjdgpvpnskasrdj.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Эконом", title: "Без фурнитуры. Пленка 0,7 микрон + окантовка ПВХ" },
      { id: 2, image: "https://cdn.media.marquiz.ru/v1/image/upload/mmtjr4bcfvtkaa4mr7s9.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Стандарт", title: "Пленка 0,7 микрон + окантовка ПВХ + крепления" },
      { id: 3, image: "https://cdn.media.marquiz.ru/v1/image/upload/cpzaow7heqm5xgcsw0v7.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Под ключ", title: "Пленка 0,7 микрон + окантовка ПВХ + крепления и монтаж" },
      { id: 4, image: "https://cdn.media.marquiz.ru/v1/image/upload/kuckrag3tnm7fhaht4sz.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Премиум Под ключ", title: "Пленка 0,7 микрон + окантовка ПВХ + крепления и монтаж. Срок изготовления от 1 до 3-х дней. За срочность +30% от суммы заказа" }
    ];
    const scheduleOptions = [
      { value: "soon", text: "В ближайшее время (10-14 дней)" },
      { value: "express", text: "Кратчайшие сроки (1-3 дней)" },
      { value: "interest", text: "Пока просто интересуюсь" }
    ];
    const installOptions = [
      { value: "self", text: "Справлюсь сам" },
      { value: "need_install", text: "Требуется монтаж" },
      { value: "consult", text: "Проконсультируюсь с вами" }
    ];
    const recomendationItem = [
      {
        title: "АБСОЛЮТНО БЕЗОПАСНЫ ДЛЯ ДЕТЕЙ",
        text: "Мягкое окно нельзя разбить и пораниться, они не имеют запаха",
        icon: "/svg/icons8-zona-dlya-detei-96.png"
        // Путь к изображению иконки
      },
      {
        title: "ДЕШЕВЛЕ ПЛАСТИКОВЫХ ОКОН В НЕСКОЛЬКО РАЗ",
        text: `Стоимость мягких окон минимум в 2 раза ниже`,
        icon: "/svg/icons8-wallet-96.png"
      },
      {
        title: "ЭСТЕТИЧНЫЕ И ПРИВЛЕКАТЕЛЬНЫЕ",
        text: `Прозрачная пленка ПВХ обладает идеальной светопропускаемостью`,
        icon: "/svg/icons8-heart-961.png"
      },
      {
        title: "НЕ ЖЕЛТЕЕТ НА СОЛНЦЕ",
        text: `Задерживает до 95% ультрафиолета`,
        icon: "/svg/icons8-sun-96.png"
      },
      {
        title: "СРОК СЛУЖБЫ БОЛЕЕ 10 ЛЕТ",
        text: `Реально проверенный срок эксплуатации`,
        icon: "/svg/icons8-calendar-96.png"
      },
      {
        title: "НАДЕЖНАЯ ЗАВЕСА",
        text: `Не деформируется, прочные, эластичные и морозостойкие `,
        icon: "/svg/icons8-protect-96.png"
      }
    ];
    const services = [
      {
        title: "Комплект «Эконом»",
        image: "/img/IMG_5912.jfif",
        description: "Пленка 700 мкм, морозостойкая до -39°C, окантовка ПВХ без фурнитуры",
        prices: ["от 1090 руб.", "от 990 руб.", "от 890 руб."],
        size: ["до 15 м²", "от 15 м² до 50 м²", "более 50 м²"]
      },
      {
        title: "Комплект «Стандарт»",
        image: "/img/IMG_5910.jfif",
        description: "Пленка 700 мкм, устойчивость к ультрафиолету, окантовка ПВХ с фурнитурой.",
        prices: ["от 2190 руб.", "от 2090 руб.", "от 1990 руб."],
        size: ["до 15 м²", "от 15 м² до 30 м²", "более 30 м²"]
      },
      {
        title: "Под ключ",
        image: "/img/IMG_5872.jfif",
        description: "Пленка 700 мкм, морозостойкая до -39°C, окантовка ПВХ с фурнитурой и с монтажом",
        prices: ["29900 руб.", "45000 руб.", "от 2990 руб."],
        size: ["до 10 м²", "от 10 м² до 15 м²", "от 15 м² до 40 м²"]
      }
    ];
    const tabs = [
      { name: "tape", label: "Пленка" },
      { name: "vue", label: "Окантовка" },
      // { name: "grid", label: "Москитная сетка" },
      { name: "accessories", label: "Фурнитура" }
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
      _push(`<main class="main" data-v-729a1106><section class="hero" style="${ssrRenderStyle({ "position": "relative" })}" data-v-729a1106><div class="hero__image" data-v-729a1106></div><div class="container" data-v-729a1106><div class="hero__inner" data-v-729a1106><div class="hero__content" data-v-729a1106><h1 class="hero__title" data-v-729a1106> Мягкие окна из <span class="orange" data-v-729a1106>гибкого ПВХ</span></h1><h2 class="hero__subtitle" data-v-729a1106> Элегантное решение для вашего комфорта: мягкие окна из гибкого ПВХ от производителя — идеальный выбор для веранд, беседок и террас, защищающих от ветра, дождя и холода. </h2><div class="hero__buttons" data-v-729a1106>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "hero__btn",
        href: "https://wa.me/+1234567890",
        target: "_blank",
        "aria-label": "Написать в WhatsApp"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Расчет стоимости`);
          } else {
            return [
              createTextVNode("Расчет стоимости")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><div class="feedback-customer" data-v-729a1106><div class="container" data-v-729a1106><div class="feedback-customer__inner" data-v-729a1106><div class="feedback-customer__items" data-v-729a1106><div class="feedback" data-v-729a1106><div class="feedback__item" data-v-729a1106><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-729a1106><img${ssrRenderAttr("src", _imports_0$3)} style="${ssrRenderStyle({ "width": "80px", "height": "80px", "border-radius": "50%" })}" alt="" data-v-729a1106></div><h2 class="feedback__item-title" data-v-729a1106>Наши работы</h2></div></div><div class="feedback" data-v-729a1106><div class="feedback__item" data-v-729a1106><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-729a1106><img${ssrRenderAttr("src", _imports_1$2)} style="${ssrRenderStyle({ "width": "80px", "height": "80px", "border-radius": "50%" })}" alt="" data-v-729a1106></div><h2 class="feedback__item-title" data-v-729a1106>Услуги</h2></div></div><div class="feedback" data-v-729a1106><div class="feedback__item" data-v-729a1106><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-729a1106><img${ssrRenderAttr("src", _imports_2$1)} style="${ssrRenderStyle({ "width": "80px", "height": "80px", "border-radius": "50%" })}" alt="" data-v-729a1106></div><h2 class="feedback__item-title" data-v-729a1106>Наши Преимущества</h2></div></div></div></div></div></div><section class="recomendation" id="advantages" data-v-729a1106><div class="container" data-v-729a1106><div class="recomendation__inner" data-v-729a1106><h2 class="recomendation__title" data-v-729a1106> Преимущества мягких окон из <span class="orange" data-v-729a1106> ПВХ</span></h2><div class="recomendation__block-image" data-v-729a1106><img${ssrRenderAttr("src", _imports_3)} class="recomendation__block-top-image" alt="" data-v-729a1106></div><div class="recomendation__block-text" data-v-729a1106><p data-v-729a1106> Мягкие окна – это изделие из плотной ПВХ пленки, окантованной по периметру армированной тентовой тканью особой прочности. Идеальная защита от любых погодных условий и насекомых! </p><p data-v-729a1106> В последнее время окна из ПВХ пользуются высоким спросом среди владельцев беседок, веранд и террас. Рулонные шторы многофункциональны и прекрасно вписываются в экстерьер – многие именно поэтому предпочитают устанавливать такие конструкции на своих верандах и беседках. </p></div><ul class="recomendation__list" data-v-729a1106><li class="recomendation__list-item" data-v-729a1106> Пленка ПВХ после монтажа на проем приобретает вид стекла и имеет светопропускаемость более 95% </li><li class="recomendation__list-item" data-v-729a1106> Тентовая окантовка предназначена для уменьшения воздействий сезонных температурных перепадов на прозрачное мягкое стекло, тем самым гарантируя долгую эксплуатацию изделий. </li><li class="recomendation__list-item" data-v-729a1106> Мягкие окна легко монтируются на любую поверхность и не требуют доработок проема под их установку. </li><li class="recomendation__list-item" data-v-729a1106> Легко скручиваются в рулон в хорошую погоду и открывают панорамный вид на участок. </li></ul><div class="recomendation__block-items" data-v-729a1106><!--[-->`);
      ssrRenderList(recomendationItem, (item, index2) => {
        _push(`<div class="recomendation__item" data-v-729a1106><div class="recomendation__item-icon" data-v-729a1106><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} data-v-729a1106></div><h3 class="recomendation__item-title" data-v-729a1106>${ssrInterpolate(item.title)}</h3><p class="recomendation__item-text" data-v-729a1106>${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><div class="price" id="price" data-v-729a1106><div class="container" data-v-729a1106><div class="price__inner" data-v-729a1106><h2 class="price__title" data-v-729a1106> Стоимость <span class="orange" data-v-729a1106>Мягких Окон</span> в готовой комплектации </h2><div class="price-table" data-v-729a1106><!--[-->`);
      ssrRenderList(services, (item, index2) => {
        _push(`<div class="price-table__row" data-v-729a1106><div class="price-table__cell" data-v-729a1106><div class="service-info" data-v-729a1106><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.description)} class="service-info__image" data-v-729a1106><div class="service-info__block" data-v-729a1106><h3 class="service-info__title" data-v-729a1106>${ssrInterpolate(item.title)}</h3><p class="service-info__description" data-v-729a1106>${ssrInterpolate(item.description)}</p></div></div></div><div class="price-table__cell" data-v-729a1106><span data-v-729a1106>${ssrInterpolate(item.prices[0])}</span><span class="price-table__cell-text-gray" data-v-729a1106>${ssrInterpolate(item.size[0])}</span></div><div class="price-table__cell" data-v-729a1106><span data-v-729a1106>${ssrInterpolate(item.prices[1])}</span><span class="price-table__cell-text-gray" data-v-729a1106>${ssrInterpolate(item.size[1])}</span></div><div class="price-table__cell" data-v-729a1106><span data-v-729a1106>${ssrInterpolate(item.prices[2])}</span><span class="price-table__cell-text-gray" data-v-729a1106>${ssrInterpolate(item.size[2])}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="estimates" id="smeta" data-v-729a1106><div class="estimates__inner" data-v-729a1106><div class="estimates-form-wrapper" data-v-729a1106><div class="estimates__image" data-v-729a1106></div><div class="estimates__block" data-v-729a1106><h2 class="estimates__title" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-729a1106> Получить смету </h2><p class="estimates__subtitle" data-v-729a1106> Вы можете позвонить и все вопросы по телефону уточнить, либо составить смету и отправить нам, а мы уже вам перезвоним для ответа </p></div></div><div class="quiz" data-v-729a1106><div class="quiz__inner" data-v-729a1106><div class="quiz__progress-container" data-v-729a1106><div class="quiz__progress-percent" data-v-729a1106>${ssrInterpolate((currentStep.value / steps.length * 100).toFixed(0))}% </div><div class="quiz__progress-bar" data-v-729a1106><div class="quiz__progress-bar-fill" style="${ssrRenderStyle({ width: `${currentStep.value / steps.length * 100}%` })}" data-v-729a1106></div></div></div><div class="quiz__progress-question-step" data-v-729a1106><p data-v-729a1106>Вопрос ${ssrInterpolate(currentStep.value)}</p></div>`);
      if (currentStep.value === 1) {
        _push(`<div class="quiz__step" data-v-729a1106><h2 class="quiz__title" data-v-729a1106> Укажите примерную площадь мягкого остекления в м² </h2><div class="quiz__slider-container" data-v-729a1106><div class="quiz__slider-wrapper" style="${ssrRenderStyle(sliderProgressStyle.value)}" data-v-729a1106><input type="range" min="1" max="100"${ssrRenderAttr("value", answers.value.area)} class="quiz__slider" data-v-729a1106></div><p class="quiz__slider-value" data-v-729a1106>${ssrInterpolate(answers.value.area)} м²</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 2) {
        _push(`<div class="quiz__step" data-v-729a1106><h2 class="quiz__title" data-v-729a1106>Сколько будет дверных проемов?</h2><div class="quiz__options" data-v-729a1106><!--[-->`);
        ssrRenderList(doorOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass(["quiz__option", { "quiz__option--selected": ((_a = answers.value.doorways) == null ? void 0 : _a.id) === item.id }])}" data-v-729a1106><img class="quiz__option-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.text)} data-v-729a1106><p class="quiz__option-text" data-v-729a1106>${ssrInterpolate(item.text)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 3) {
        _push(`<div class="quiz__step" data-v-729a1106><h2 class="quiz__title" data-v-729a1106> На что будут монтироваться мягкие окна? </h2><div class="quiz__radio-group" data-v-729a1106><!--[-->`);
        ssrRenderList(mountOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-729a1106><input type="radio"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.mount, option)) ? " checked" : ""} class="quiz__radio-input" data-v-729a1106><span class="quiz__radio-span" data-v-729a1106><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-729a1106><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-729a1106></path></svg></span><p data-v-729a1106>${ssrInterpolate(option)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 4) {
        _push(`<div class="quiz__step" data-v-729a1106><h2 class="quiz__title" data-v-729a1106>Какая комплектация необходима?</h2><div class="quiz__equipments" data-v-729a1106><!--[-->`);
        ssrRenderList(configurationOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass([
            "quiz__option quiz__equipment-item",
            {
              "quiz__option--selected": ((_a = answers.value.configuration) == null ? void 0 : _a.id) === item.id
            }
          ])}" data-v-729a1106><img class="quiz__equipment-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-729a1106><div class="quiz__equipment-block-text" data-v-729a1106><p class="quiz__equipment-text" data-v-729a1106>${ssrInterpolate(item.name)}</p><h4 class="quiz__equipment-title" data-v-729a1106>${ssrInterpolate(item.title)}</h4></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 5) {
        _push(`<div class="quiz__step" data-v-729a1106><h2 class="quiz__title" data-v-729a1106>Установите сами или нужен монтаж?</h2><div class="quiz__radio-group" data-v-729a1106><!--[-->`);
        ssrRenderList(installOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-729a1106><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.installation, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-729a1106><span class="quiz__radio-span" data-v-729a1106><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-729a1106><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-729a1106></path></svg></span><p class="text" data-v-729a1106>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 6) {
        _push(`<div class="quiz__step" data-v-729a1106><h2 class="quiz__title" data-v-729a1106> Когда планируете устанавливать мягкие окна? </h2><div class="quiz__radio-group" data-v-729a1106><!--[-->`);
        ssrRenderList(scheduleOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-729a1106><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.schedule, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-729a1106><span class="quiz__radio-span" data-v-729a1106><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-729a1106><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-729a1106></path></svg></span><p data-v-729a1106>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 7) {
        _push(`<div class="quiz__step" data-v-729a1106><p class="quiz__title" data-v-729a1106> Заполните контактную информацию и с вами обязательно свяжутся в ближайшее время </p><div class="contact-form" data-v-729a1106><form class="contact-form__form" data-v-729a1106><div class="contact-form__form-field-block" data-v-729a1106><div class="contact-form__field" data-v-729a1106><label class="contact-form__label" for="name" data-v-729a1106>Имя</label><input class="contact-form__input" type="text" id="name"${ssrRenderAttr("value", contactInfo.value.name)} required data-v-729a1106></div><div class="contact-form__field" data-v-729a1106><label class="contact-form__label" for="phone" data-v-729a1106>Телефон</label><input class="contact-form__input" type="text" id="phone"${ssrRenderAttr("value", contactInfo.value.phone)} placeholder="+7 (___) ___-__-__" required data-v-729a1106></div></div><div class="contact-form__field" data-v-729a1106><label class="contact-form__label" for="message" data-v-729a1106>Комментарий</label><textarea class="contact-form__input contact-form__input-textarea" id="message" style="${ssrRenderStyle({ "width": "100%" })}" data-v-729a1106>${ssrInterpolate(contactInfo.value.message)}</textarea></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="quiz__controls" data-v-729a1106><button class="quiz__button quiz__button--prev"${ssrIncludeBooleanAttr(currentStep.value === 1) ? " disabled" : ""} data-v-729a1106> Назад </button><button class="quiz__button quiz__button--next"${ssrIncludeBooleanAttr(!canProceed.value) ? " disabled" : ""} data-v-729a1106>${ssrInterpolate(currentStep.value < 7 ? "Далее" : "Отправить")}</button></div></div></div></div></div><section class="why" id="why" data-v-729a1106><h2 class="why__title" data-v-729a1106>Почему выбирают <span class="orange" data-v-729a1106>нас?</span></h2><div class="why__inner" data-v-729a1106>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section><section class="material" id="material" data-v-729a1106><div class="container" data-v-729a1106><div class="material__inner" data-v-729a1106><h2 class="material__title" data-v-729a1106><span class="orange" style="${ssrRenderStyle({ "margin-left": "0" })}" data-v-729a1106>Материалы,</span> крепления и фурнитура</h2><p class="material__block-text" data-v-729a1106>Компания Мягкие Окна России располагает собственными производственными мощностями для изготовления мягких окон. Поэтому все необходимые для производства материалы, всегда есть в наличии на нашем складе. Вам не придется дополнительно ждать поставки нужных комплектующих от посредника или изготовителя на стороне. Заказывая окна ПВХ в нашей компании, будьте уверены — выбранный вами материал мягких окон проверен нами на практике и отличается высоким качеством. Чтобы вы могли лучше разобраться в ассортименте и понять, какие материалы подобрать для своей постройки, предлагаем вам ознакомиться с описанием и характеристиками всех компонентов для окон ПВХ. </p><div class="material__wrapper-block-img-list" data-v-729a1106><ul class="material__list" data-v-729a1106><li class="material__list-title" data-v-729a1106> Виды материалов для мягких окон: </li><li class="material__list-item" data-v-729a1106> 1. <strong class="material__list-item-strong" data-v-729a1106>Пленка ПВХ</strong> — основной элемент в конструкции мягких окон. </li><li class="material__list-item" data-v-729a1106> 2. <strong class="material__list-item-strong" data-v-729a1106>Окантовка</strong> — материал обрамления периметра окон ПВХ. Именно в окантовку встраивается фурнитура для крепления к каркасу постройки. </li><li class="material__list-item" data-v-729a1106> 3. <strong class="material__list-item-strong" data-v-729a1106>Фурнитура (крепления)</strong> — вариации крепления окон к материалу постройки. Различаются по надежности посадки окна к месту монтажа и удобству. </li><li class="material__list-item" data-v-729a1106> 4. <strong class="material__list-item-strong" data-v-729a1106>Двусторонняя молния</strong> — применяется для дверных проемов. Упрощает вход и выход из помещения </li><li class="material__list-item" data-v-729a1106> 5. <strong class="material__list-item-strong" data-v-729a1106>Москитная сетка</strong> — дополнительный атрибут (приобретается отдельно либо в комплекте с окном). </li></ul><div class="material__images" data-v-729a1106><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-729a1106></div></div></div></div></section><section class="tabs" data-v-729a1106><div class="container" data-v-729a1106><div class="tabs__inner" data-v-729a1106><div class="tabs__buttons" data-v-729a1106><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<span class="${ssrRenderClass(["tabs__button", { selected: tab.name === selectedTab.value }])}" data-v-729a1106>${ssrInterpolate(tab.label)}</span>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(TabContent, {
        content: unref(tabContents)[selectedTab.value]
      }, null, _parent));
      _push(`</div></div></section><section class="watermark" id="watermark" data-v-729a1106><div class="container" data-v-729a1106><div class="watermark__inner" data-v-729a1106><h2 class="watermark__title" data-v-729a1106>Наши <span class="orange" data-v-729a1106>работы</span></h2><div class="watermark__images" data-v-729a1106>`);
      _push(ssrRenderComponent(_component_WatermarkImg, { images: images.value }, null, _parent));
      _push(`</div></div></div></section><section class="faq" id="faq" data-v-729a1106><div class="container" data-v-729a1106><div class="faq__inner" data-v-729a1106><h2 class="faq__title" data-v-729a1106>Частые вопросы</h2><div class="faq__items" data-v-729a1106>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-729a1106"]]);
export {
  index as default
};
//# sourceMappingURL=index-C2Amgmvw.js.map
