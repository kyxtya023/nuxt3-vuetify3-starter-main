import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { getRequestHeader, splitCookiesString, setResponseStatus, setResponseHeader, send, getRequestHeaders, eventHandler, appendResponseHeader, removeResponseHeader, createError, getResponseHeader, defineEventHandler, handleCacheHeaders, createEvent, fetchWithEvent, isEvent, getResponseStatus, setResponseHeaders, setHeaders, sendRedirect, proxyRequest, getQuery as getQuery$1, getRequestURL, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
import { withQuery, joinURL, decodePath, withLeadingSlash, withoutTrailingSlash, parseURL, withoutBase, getQuery, joinRelativeURL } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ufo/dist/index.mjs';
import destr from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/hookable/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unenv/runtime/fetch/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/pathe/dist/index.mjs';
import { getIcons } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@iconify/utils/lib/index.mjs';
import { hash } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ohash/dist/index.mjs';
import { consola } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unenv/runtime/npm/consola.mjs';
import { klona } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/scule/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47D_58_47nuxt3_45vuetify3_45starter_45main_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js from 'file:///D:/nuxt3-vuetify3-starter-main/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import unstorage_47drivers_47fs_45lite from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs-lite.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/radix3/dist/index.mjs';

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const script = "\"use strict\";(()=>{const t=window,e=document.documentElement,c=[\"dark\",\"light\"],n=getStorageValue(\"localStorage\",\"nuxt-color-mode\")||\"system\";let i=n===\"system\"?u():n;const r=e.getAttribute(\"data-color-mode-forced\");r&&(i=r),l(i),t[\"__NUXT_COLOR_MODE__\"]={preference:n,value:i,getColorScheme:u,addColorScheme:l,removeColorScheme:d};function l(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.add(s):e.className+=\" \"+s,a&&e.setAttribute(\"data-\"+a,o)}function d(o){const s=\"\"+o+\"\",a=\"\";e.classList?e.classList.remove(s):e.className=e.className.replace(new RegExp(s,\"g\"),\"\"),a&&e.removeAttribute(\"data-\"+a)}function f(o){return t.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function u(){if(t.matchMedia&&f(\"\").media!==\"not all\"){for(const o of c)if(f(\":\"+o).matches)return o}return\"light\"}})();function getStorageValue(t,e){switch(t){case\"localStorage\":return window.localStorage.getItem(e);case\"sessionStorage\":return window.sessionStorage.getItem(e);case\"cookie\":return getCookie(e);default:return null}}function getCookie(t){const c=(\"; \"+window.document.cookie).split(\"; \"+t+\"=\");if(c.length===2)return c.pop()?.split(\";\").shift()}";

const _P9nGilXUOF = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _P9nGilXUOF
];

const assets$1 = {};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _r28OL2 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _Qrbp2G = eventHandler((event) => {
  const env = event.context.cloudflare?.env || {};
  for (const key in env) {
    if (typeof process.env[key] === "undefined" && typeof env[key] === "string") {
      process.env[key] = env[key];
    }
  }
});

const inlineAppConfig = {
  "nuxt": {},
  "__swiper": {
    "bundled": true
  },
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "0f6bf1a3-1cc5-4109-9d5b-c0649d1eac61",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "openAPI": {
      "production": "runtime",
      "route": "/api/_hub/openapi.json",
      "ui": {
        "scalar": false,
        "swagger": false
      }
    },
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/**": {
        "headers": {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      },
      "/api/_hub/**": {
        "csurf": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "hub": {}
  },
  "hub": {
    "projectUrl": "",
    "projectSecretKey": "",
    "url": "https://admin.hub.nuxt.com",
    "projectKey": "nuxt3-smm-7tm1",
    "userToken": "user_p8dsPGWVVhEtxjGTWwx7TtWm43ARvp",
    "remote": "",
    "remoteManifest": "",
    "dir": ".data/hub",
    "ai": false,
    "analytics": false,
    "blob": false,
    "browser": false,
    "cache": false,
    "database": false,
    "kv": false,
    "vectorize": {},
    "version": "0.8.7",
    "env": "production",
    "openapi": true,
    "bindings": {
      "hyperdrive": {},
      "compatibilityFlags": ""
    },
    "cloudflareAccess": {
      "clientId": "",
      "clientSecret": ""
    },
    "openAPIRoute": "/api/_hub/openapi.json"
  },
  "icon": {
    "serverKnownCssClasses": []
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/nuxt3-vuetify3-starter-main/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('internal:nuxt:prerender', file_58_47_47_47D_58_47nuxt3_45vuetify3_45starter_45main_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"file:///D:/nuxt3-vuetify3-starter-main/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"D:/nuxt3-vuetify3-starter-main/.nuxt/cache/nitro/prerender"}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"D:\\nuxt3-vuetify3-starter-main\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\nuxt3-vuetify3-starter-main","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\nuxt3-vuetify3-starter-main\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\nuxt3-vuetify3-starter-main\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\nuxt3-vuetify3-starter-main\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

function baseURL() {
  return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function createRemoteCollection(fetchEndpoint) {
  let _cache;
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json());
    _cache = res;
    return res
  }
}

const collections = {
  'academicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/academicons/icons.json"),
  'akar-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/akar-icons/icons.json"),
  'ant-design': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ant-design/icons.json"),
  'arcticons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/arcticons/icons.json"),
  'basil': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/basil/icons.json"),
  'bi': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/bi/icons.json"),
  'bitcoin-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/bitcoin-icons/icons.json"),
  'bpmn': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/bpmn/icons.json"),
  'brandico': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/brandico/icons.json"),
  'bx': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/bx/icons.json"),
  'bxl': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/bxl/icons.json"),
  'bxs': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/bxs/icons.json"),
  'bytesize': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/bytesize/icons.json"),
  'carbon': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/carbon/icons.json"),
  'catppuccin': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/catppuccin/icons.json"),
  'cbi': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/cbi/icons.json"),
  'charm': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/charm/icons.json"),
  'ci': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ci/icons.json"),
  'cib': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/cib/icons.json"),
  'cif': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/cif/icons.json"),
  'cil': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/cil/icons.json"),
  'circle-flags': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/circle-flags/icons.json"),
  'circum': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/circum/icons.json"),
  'clarity': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/clarity/icons.json"),
  'codicon': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/codicon/icons.json"),
  'covid': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/covid/icons.json"),
  'cryptocurrency': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/cryptocurrency/icons.json"),
  'cryptocurrency-color': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/cryptocurrency-color/icons.json"),
  'dashicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/dashicons/icons.json"),
  'devicon': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/devicon/icons.json"),
  'devicon-plain': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/devicon-plain/icons.json"),
  'ei': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ei/icons.json"),
  'el': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/el/icons.json"),
  'emojione': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/emojione/icons.json"),
  'emojione-monotone': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/emojione-monotone/icons.json"),
  'emojione-v1': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/emojione-v1/icons.json"),
  'entypo': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/entypo/icons.json"),
  'entypo-social': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/entypo-social/icons.json"),
  'eos-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/eos-icons/icons.json"),
  'ep': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ep/icons.json"),
  'et': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/et/icons.json"),
  'eva': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/eva/icons.json"),
  'f7': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/f7/icons.json"),
  'fa': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fa/icons.json"),
  'fa-brands': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fa-brands/icons.json"),
  'fa-regular': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fa-regular/icons.json"),
  'fa-solid': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fa-solid/icons.json"),
  'fa6-brands': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fa6-brands/icons.json"),
  'fa6-regular': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fa6-regular/icons.json"),
  'fa6-solid': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fa6-solid/icons.json"),
  'fad': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fad/icons.json"),
  'fe': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fe/icons.json"),
  'feather': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/feather/icons.json"),
  'file-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/file-icons/icons.json"),
  'flag': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/flag/icons.json"),
  'flagpack': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/flagpack/icons.json"),
  'flat-color-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/flat-color-icons/icons.json"),
  'flat-ui': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/flat-ui/icons.json"),
  'flowbite': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/flowbite/icons.json"),
  'fluent': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fluent/icons.json"),
  'fluent-emoji': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fluent-emoji/icons.json"),
  'fluent-emoji-flat': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fluent-emoji-flat/icons.json"),
  'fluent-emoji-high-contrast': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fluent-emoji-high-contrast/icons.json"),
  'fluent-mdl2': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fluent-mdl2/icons.json"),
  'fontelico': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fontelico/icons.json"),
  'fontisto': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fontisto/icons.json"),
  'formkit': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/formkit/icons.json"),
  'foundation': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/foundation/icons.json"),
  'fxemoji': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/fxemoji/icons.json"),
  'gala': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/gala/icons.json"),
  'game-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/game-icons/icons.json"),
  'geo': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/geo/icons.json"),
  'gg': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/gg/icons.json"),
  'gis': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/gis/icons.json"),
  'gravity-ui': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/gravity-ui/icons.json"),
  'gridicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/gridicons/icons.json"),
  'grommet-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/grommet-icons/icons.json"),
  'guidance': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/guidance/icons.json"),
  'healthicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/healthicons/icons.json"),
  'heroicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/heroicons/icons.json"),
  'heroicons-outline': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/heroicons-outline/icons.json"),
  'heroicons-solid': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/heroicons-solid/icons.json"),
  'hugeicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/hugeicons/icons.json"),
  'humbleicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/humbleicons/icons.json"),
  'ic': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ic/icons.json"),
  'icomoon-free': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/icomoon-free/icons.json"),
  'icon-park': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/icon-park/icons.json"),
  'icon-park-outline': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/icon-park-outline/icons.json"),
  'icon-park-solid': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/icon-park-solid/icons.json"),
  'icon-park-twotone': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/icon-park-twotone/icons.json"),
  'iconamoon': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/iconamoon/icons.json"),
  'iconoir': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/iconoir/icons.json"),
  'icons8': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/icons8/icons.json"),
  'il': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/il/icons.json"),
  'ion': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ion/icons.json"),
  'iwwa': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/iwwa/icons.json"),
  'jam': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/jam/icons.json"),
  'la': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/la/icons.json"),
  'lets-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/lets-icons/icons.json"),
  'line-md': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/line-md/icons.json"),
  'logos': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/logos/icons.json"),
  'ls': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ls/icons.json"),
  'lucide': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/lucide/icons.json"),
  'lucide-lab': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/lucide-lab/icons.json"),
  'mage': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/mage/icons.json"),
  'majesticons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/majesticons/icons.json"),
  'maki': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/maki/icons.json"),
  'map': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/map/icons.json"),
  'marketeq': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/marketeq/icons.json"),
  'material-symbols': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/material-symbols/icons.json"),
  'material-symbols-light': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/material-symbols-light/icons.json"),
  'mdi': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/mdi/icons.json"),
  'mdi-light': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/mdi-light/icons.json"),
  'medical-icon': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/medical-icon/icons.json"),
  'memory': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/memory/icons.json"),
  'meteocons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/meteocons/icons.json"),
  'mi': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/mi/icons.json"),
  'mingcute': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/mingcute/icons.json"),
  'mono-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/mono-icons/icons.json"),
  'mynaui': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/mynaui/icons.json"),
  'nimbus': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/nimbus/icons.json"),
  'nonicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/nonicons/icons.json"),
  'noto': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/noto/icons.json"),
  'noto-v1': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/noto-v1/icons.json"),
  'octicon': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/octicon/icons.json"),
  'oi': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/oi/icons.json"),
  'ooui': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ooui/icons.json"),
  'openmoji': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/openmoji/icons.json"),
  'oui': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/oui/icons.json"),
  'pajamas': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/pajamas/icons.json"),
  'pepicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/pepicons/icons.json"),
  'pepicons-pencil': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/pepicons-pencil/icons.json"),
  'pepicons-pop': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/pepicons-pop/icons.json"),
  'pepicons-print': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/pepicons-print/icons.json"),
  'ph': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ph/icons.json"),
  'pixelarticons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/pixelarticons/icons.json"),
  'prime': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/prime/icons.json"),
  'ps': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ps/icons.json"),
  'quill': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/quill/icons.json"),
  'radix-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/radix-icons/icons.json"),
  'raphael': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/raphael/icons.json"),
  'ri': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/ri/icons.json"),
  'rivet-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/rivet-icons/icons.json"),
  'si-glyph': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/si-glyph/icons.json"),
  'simple-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/simple-icons/icons.json"),
  'simple-line-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/simple-line-icons/icons.json"),
  'skill-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/skill-icons/icons.json"),
  'solar': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/solar/icons.json"),
  'streamline': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/streamline/icons.json"),
  'streamline-emojis': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/streamline-emojis/icons.json"),
  'subway': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/subway/icons.json"),
  'svg-spinners': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/svg-spinners/icons.json"),
  'system-uicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/system-uicons/icons.json"),
  'tabler': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/tabler/icons.json"),
  'tdesign': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/tdesign/icons.json"),
  'teenyicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/teenyicons/icons.json"),
  'token': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/token/icons.json"),
  'token-branded': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/token-branded/icons.json"),
  'topcoat': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/topcoat/icons.json"),
  'twemoji': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/twemoji/icons.json"),
  'typcn': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/typcn/icons.json"),
  'uil': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/uil/icons.json"),
  'uim': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/uim/icons.json"),
  'uis': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/uis/icons.json"),
  'uit': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/uit/icons.json"),
  'uiw': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/uiw/icons.json"),
  'unjs': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/unjs/icons.json"),
  'vaadin': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/vaadin/icons.json"),
  'vs': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/vs/icons.json"),
  'vscode-icons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/vscode-icons/icons.json"),
  'websymbol': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/websymbol/icons.json"),
  'weui': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/weui/icons.json"),
  'whh': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/whh/icons.json"),
  'wi': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/wi/icons.json"),
  'wpf': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/wpf/icons.json"),
  'zmdi': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/zmdi/icons.json"),
  'zondicons': createRemoteCollection("https://cdn.jsdelivr.net/npm/@iconify-json/zondicons/icons.json"),
};

const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _gZjzYp = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola.error(e);
      if (e.status === 404)
        return createError({ status: 404 });
      else
        return createError({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery$1(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _qiZF3KMeta = null;

const _9MoWCYMeta = null;

const _u3VhjpMeta = null;

const _ykpnxAMeta = null;

const _7bOdWNMeta = null;

const _4Dg8j5Meta = null;

const _Qrbp2GMeta = null;

const _gZjzYpMeta = null;

const _vVMWEvMeta = null;

const handlersMeta = [
  { route: "/api/images", method: undefined, meta: _qiZF3KMeta },
{ route: "/api/send-message", method: undefined, meta: _9MoWCYMeta },
{ route: "/api/_hub/**:feature", method: undefined, meta: _u3VhjpMeta },
{ route: "/api/_hub", method: "head", meta: _ykpnxAMeta },
{ route: "/api/_hub/manifest", method: "get", meta: _7bOdWNMeta },
{ route: "/api/_hub/openapi", method: "get", meta: _4Dg8j5Meta },
{ route: undefined, method: undefined, meta: _Qrbp2GMeta },
{ route: "/api/_nuxt_icon/:collection", method: undefined, meta: _gZjzYpMeta },
{ route: "/api/_hub/openapi.json", method: undefined, meta: _vVMWEvMeta }
  ];

const _vVMWEv = eventHandler((event) => {
  const runtimeConfig = useRuntimeConfig(event);
  const base = runtimeConfig.app?.baseURL;
  const url = joinURL(getRequestURL(event).origin, base);
  const meta = {
    title: "Nitro Server Routes",
    ...runtimeConfig.nitro?.openAPI?.meta
  };
  return {
    openapi: "3.1.0",
    info: {
      title: meta?.title,
      version: meta?.version,
      description: meta?.description
    },
    servers: [
      {
        url,
        description: "Local Development Server",
        variables: {}
      }
    ],
    paths: getPaths()
  };
});
function getPaths() {
  const paths = {};
  for (const h of handlersMeta) {
    const { route, parameters } = normalizeRoute(h.route || "");
    const tags = defaultTags(h.route || "");
    const method = (h.method || "get").toLowerCase();
    const item = {
      [method]: {
        tags,
        parameters,
        responses: {
          200: { description: "OK" }
        },
        ...h.meta?.openAPI
      }
    };
    if (paths[route] === void 0) {
      paths[route] = item;
    } else {
      Object.assign(paths[route], item);
    }
  }
  return paths;
}
function normalizeRoute(_route) {
  const parameters = [];
  let anonymousCtr = 0;
  const route = _route.replace(/:(\w+)/g, (_, name) => `{${name}}`).replace(/\/(\*)\//g, () => `/{param${++anonymousCtr}}/`).replace(/\*\*{/, "{").replace(/\/(\*\*)$/g, () => `/{*param${++anonymousCtr}}`);
  const paramMatches = route.matchAll(/{(\*?\w+)}/g);
  for (const match of paramMatches) {
    const name = match[1];
    if (!parameters.some((p) => p.name === name)) {
      parameters.push({
        name,
        in: "path",
        required: true,
        schema: { type: "string" }
      });
    }
  }
  return {
    route,
    parameters
  };
}
function defaultTags(route) {
  const tags = [];
  if (route.startsWith("/api/")) {
    tags.push("API Routes");
  } else if (route.startsWith("/_")) {
    tags.push("Internal");
  } else {
    tags.push("App Routes");
  }
  return tags;
}

const _lazy_qiZF3K = () => import('../routes/api/images.mjs').then(function (n) { return n.i; });
const _lazy_9MoWCY = () => import('../routes/api/send-message.mjs');
const _lazy_u3Vhjp = () => import('../routes/api/_hub/_...feature_.mjs');
const _lazy_ykpnxA = () => import('../routes/api/index.head.mjs');
const _lazy_7bOdWN = () => import('../routes/api/_hub/manifest.get.mjs');
const _lazy_4Dg8j5 = () => import('../routes/api/_hub/openapi.get.mjs');
const _lazy_dfOaj4 = () => import('./renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _r28OL2, lazy: false, middleware: true, method: undefined },
  { route: '/api/images', handler: _lazy_qiZF3K, lazy: true, middleware: false, method: undefined },
  { route: '/api/send-message', handler: _lazy_9MoWCY, lazy: true, middleware: false, method: undefined },
  { route: '/api/_hub/**:feature', handler: _lazy_u3Vhjp, lazy: true, middleware: false, method: undefined },
  { route: '/api/_hub', handler: _lazy_ykpnxA, lazy: true, middleware: false, method: "head" },
  { route: '/api/_hub/manifest', handler: _lazy_7bOdWN, lazy: true, middleware: false, method: "get" },
  { route: '/api/_hub/openapi', handler: _lazy_4Dg8j5, lazy: true, middleware: false, method: "get" },
  { route: '', handler: _Qrbp2G, lazy: false, middleware: true, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _gZjzYp, lazy: false, middleware: false, method: undefined },
  { route: '/api/_hub/openapi.json', handler: _vVMWEv, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_dfOaj4, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

export { baseURL as a, buildAssetsURL as b, useStorage as c, defineRenderHandler as d, useNitroApp as e, getRouteRules as g, publicAssetsURL as p, trapUnhandledNodeErrors as t, useRuntimeConfig as u };
//# sourceMappingURL=nitro.mjs.map
