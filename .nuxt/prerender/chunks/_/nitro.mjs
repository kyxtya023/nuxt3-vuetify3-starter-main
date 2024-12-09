import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { getRequestHeader, splitCookiesString, setResponseStatus, setResponseHeader, send, getRequestHeaders, eventHandler, appendResponseHeader, removeResponseHeader, createError, getResponseHeader, defineEventHandler, handleCacheHeaders, createEvent, fetchWithEvent, isEvent, setHeaders, sendRedirect, proxyRequest, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, setResponseHeaders } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
import destr from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/hookable/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unenv/runtime/fetch/index.mjs';
import { withQuery, joinURL, decodePath, withLeadingSlash, withoutTrailingSlash, parseURL, withoutBase, getQuery } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ufo/dist/index.mjs';
import { klona } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/scule/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/pathe/dist/index.mjs';
import { hash } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47D_58_47nuxt3_45vuetify3_45starter_45main_47node_modules_47_46pnpm_47nuxt_643_4614_461592__64parcel_43watcher_642_465_460__64types_43node_6422_4610_461_ioredis_645_464_461_magicast_640_463_465_rollup_64_wkb5vlqe3fydsakbajvypkvc54_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js from 'file:///D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.1_ioredis@5.4.1_magicast@0.3.5_rollup@_wkb5vlqe3fydsakbajvypkvc54/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
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

const plugins = [
  
];

const assets$1 = {
  "/base.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4fd-0uxo1+82O8zHxkgK0KzSeJJ9OSA\"",
    "mtime": "2023-04-21T15:14:12.000Z",
    "size": 1277,
    "path": "../../.output/public/base.css"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2024-11-20T16:44:22.000Z",
    "size": 4286,
    "path": "../../.output/public/favicon.ico"
  },
  "/fonts.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2023-04-23T10:17:54.000Z",
    "size": 0,
    "path": "../../.output/public/fonts.css"
  },
  "/main.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f1-xgHYIvSdvfvNuxF6PzjFIDrUOdI\"",
    "mtime": "2024-11-26T22:04:43.722Z",
    "size": 1265,
    "path": "../../.output/public/main.css"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1-rcg7GeeTSRscbqD9i0bNnzLlkvw\"",
    "mtime": "2024-11-20T16:44:22.000Z",
    "size": 1,
    "path": "../../.output/public/robots.txt"
  },
  "/svg/Arrow-spoiler.svg": {
    "type": "image/svg+xml",
    "etag": "\"1f2-4Ig0NVOMTwT/HzuMEIBbVke92Rc\"",
    "mtime": "2023-04-23T13:29:06.000Z",
    "size": 498,
    "path": "../../.output/public/svg/Arrow-spoiler.svg"
  },
  "/svg/Arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e9-/9qGZfBC0cTHs++TOLxzH+mkrwg\"",
    "mtime": "2023-04-23T08:42:18.000Z",
    "size": 489,
    "path": "../../.output/public/svg/Arrow.svg"
  },
  "/svg/Chat.svg": {
    "type": "image/svg+xml",
    "etag": "\"233-rmvh53fOo9iudCsfHBBBrmkg3Y4\"",
    "mtime": "2023-04-23T15:31:52.000Z",
    "size": 563,
    "path": "../../.output/public/svg/Chat.svg"
  },
  "/svg/check.svg": {
    "type": "image/svg+xml",
    "etag": "\"f8-jM9pZ2tNHMzQ8LmUMo6+F4XbmZA\"",
    "mtime": "2024-11-30T15:28:54.828Z",
    "size": 248,
    "path": "../../.output/public/svg/check.svg"
  },
  "/svg/E-mail.svg": {
    "type": "image/svg+xml",
    "etag": "\"2df-vm8NiMKOYDbNoTV3JyVEURFtur4\"",
    "mtime": "2023-04-23T15:31:40.000Z",
    "size": 735,
    "path": "../../.output/public/svg/E-mail.svg"
  },
  "/svg/icons8-done-16.png": {
    "type": "image/png",
    "etag": "\"a4-w7C88c9mGfI349kBO0NHwYr4VJ0\"",
    "mtime": "2024-11-30T15:31:49.055Z",
    "size": 164,
    "path": "../../.output/public/svg/icons8-done-16.png"
  },
  "/svg/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1423-SklCHPv2HNCA0QTg44Ych6CjgyY\"",
    "mtime": "2023-04-21T15:05:56.000Z",
    "size": 5155,
    "path": "../../.output/public/svg/logo.svg"
  },
  "/svg/plus.svg": {
    "type": "image/svg+xml",
    "etag": "\"d1-lCMiqKs2YSH9jnMZ/yiy6AZOfos\"",
    "mtime": "2024-12-02T21:28:47.946Z",
    "size": 209,
    "path": "../../.output/public/svg/plus.svg"
  },
  "/img/1000x1000.jpg": {
    "type": "image/jpeg",
    "etag": "\"40fa-PYPVP9kFOB4JlDcGor7XeY8/wyI\"",
    "mtime": "2024-11-26T21:22:30.145Z",
    "size": 16634,
    "path": "../../.output/public/img/1000x1000.jpg"
  },
  "/img/13.png": {
    "type": "image/png",
    "etag": "\"3c42e-XVHIcwa6IrdIzuUpslwelna+D7o\"",
    "mtime": "2024-11-30T21:20:01.988Z",
    "size": 246830,
    "path": "../../.output/public/img/13.png"
  },
  "/img/13647644.jpg": {
    "type": "image/jpeg",
    "etag": "\"58fc-QVpK3n2KQKvpeZelSFkF2lXdEMI\"",
    "mtime": "2024-11-30T21:18:17.878Z",
    "size": 22780,
    "path": "../../.output/public/img/13647644.jpg"
  },
  "/img/1687511931_en-idei-club-p-pink-gradient-background-dizain-74.jpg": {
    "type": "image/jpeg",
    "etag": "\"e90e-CBaU5r7EK1h8rOnLHgsAMokAmvI\"",
    "mtime": "2024-11-26T21:50:18.115Z",
    "size": 59662,
    "path": "../../.output/public/img/1687511931_en-idei-club-p-pink-gradient-background-dizain-74.jpg"
  },
  "/img/283e4840e0cd71f95599d1c67132e034.jpg": {
    "type": "image/jpeg",
    "etag": "\"1d085-j5tk23HrIzXe+dpaPKySxgaejhQ\"",
    "mtime": "2024-11-30T21:04:09.450Z",
    "size": 118917,
    "path": "../../.output/public/img/283e4840e0cd71f95599d1c67132e034.jpg"
  },
  "/img/541549a6-a184-4cab-8.jpg": {
    "type": "image/jpeg",
    "etag": "\"914d7-/l7V9cJSTGuri5k/eNf3XJysT6Y\"",
    "mtime": "2024-11-30T21:06:30.703Z",
    "size": 595159,
    "path": "../../.output/public/img/541549a6-a184-4cab-8.jpg"
  },
  "/img/6631983144.jpg": {
    "type": "image/jpeg",
    "etag": "\"382b1-Yz/iWCO/+uARU1TZ2AAzKVFjZGs\"",
    "mtime": "2024-11-30T21:02:25.105Z",
    "size": 230065,
    "path": "../../.output/public/img/6631983144.jpg"
  },
  "/img/76636daefdd44b058addb6c6bd1ac107.jpg": {
    "type": "image/jpeg",
    "etag": "\"36dc4-5eydGWUS1P4CT83wq9lnegOcuv8\"",
    "mtime": "2024-11-30T21:40:44.045Z",
    "size": 224708,
    "path": "../../.output/public/img/76636daefdd44b058addb6c6bd1ac107.jpg"
  },
  "/img/artistic-blurry-colorful-wallpaper-background_58702-8245.avif": {
    "type": "image/avif",
    "etag": "\"8a0-5jBzYHhcfFcNq+J0T3i2tboDpgg\"",
    "mtime": "2024-12-02T20:33:33.026Z",
    "size": 2208,
    "path": "../../.output/public/img/artistic-blurry-colorful-wallpaper-background_58702-8245.avif"
  },
  "/img/b7f82cb2bd75744ca9c2a9730cc26cc4.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1b222-o26/OC7G+YGfhZ+WY24UhLwB4dQ\"",
    "mtime": "2024-11-30T21:07:16.516Z",
    "size": 111138,
    "path": "../../.output/public/img/b7f82cb2bd75744ca9c2a9730cc26cc4.jpeg"
  },
  "/img/BannerBG.png": {
    "type": "image/png",
    "etag": "\"2ad9-zpjna5wIVOiK92lRw6N0cSAHuLU\"",
    "mtime": "2023-04-23T14:12:14.000Z",
    "size": 10969,
    "path": "../../.output/public/img/BannerBG.png"
  },
  "/img/diploma.webp": {
    "type": "image/webp",
    "etag": "\"2cae6-QthupjxkBxsl/DzTvo+kXK2qLT0\"",
    "mtime": "2024-11-30T20:55:00.196Z",
    "size": 183014,
    "path": "../../.output/public/img/diploma.webp"
  },
  "/img/e22dc2b399dbd7e7da4e88dc20c4f7c0.jpg": {
    "type": "image/jpeg",
    "etag": "\"57fde-hlUyNeDui+TrXisfl4EAGIdAUzE\"",
    "mtime": "2024-11-26T21:06:29.738Z",
    "size": 360414,
    "path": "../../.output/public/img/e22dc2b399dbd7e7da4e88dc20c4f7c0.jpg"
  },
  "/img/FeedbackPeople.png": {
    "type": "image/png",
    "etag": "\"5eb-AXuJajvh7GxRy/wnDixgKyEnEOw\"",
    "mtime": "2023-04-23T08:11:30.000Z",
    "size": 1515,
    "path": "../../.output/public/img/FeedbackPeople.png"
  },
  "/img/Frame.png": {
    "type": "image/png",
    "etag": "\"4bb9-dY1t1BVOdu0Dg0yFk+//R0YgqAo\"",
    "mtime": "2023-04-23T14:16:18.000Z",
    "size": 19385,
    "path": "../../.output/public/img/Frame.png"
  },
  "/img/gradations-of-red-and-yellow-free-vector.jpg": {
    "type": "image/jpeg",
    "etag": "\"bf0c-csSXjcngH8ZyCBf3D7pNXxQj6yU\"",
    "mtime": "2024-11-26T22:32:12.414Z",
    "size": 48908,
    "path": "../../.output/public/img/gradations-of-red-and-yellow-free-vector.jpg"
  },
  "/img/HomeHeroBg.png": {
    "type": "image/png",
    "etag": "\"1e1fc-qQAEZM6ocMeRNKI5/ajwkCVTSp4\"",
    "mtime": "2023-04-22T11:29:32.000Z",
    "size": 123388,
    "path": "../../.output/public/img/HomeHeroBg.png"
  },
  "/img/i.webp": {
    "type": "image/webp",
    "etag": "\"307a-sQqmf/y6RvO8jvMouP+pN3pw6fw\"",
    "mtime": "2024-11-26T21:33:08.664Z",
    "size": 12410,
    "path": "../../.output/public/img/i.webp"
  },
  "/img/IconQuickOrderComments.png": {
    "type": "image/png",
    "etag": "\"5b6-XAdBoT4CjY4DxjA51mLzp87efio\"",
    "mtime": "2023-04-23T09:27:40.000Z",
    "size": 1462,
    "path": "../../.output/public/img/IconQuickOrderComments.png"
  },
  "/img/IconQuickOrderFacebook.png": {
    "type": "image/png",
    "etag": "\"569-GsenRY3iITYz1yua02LVnpyQ05Q\"",
    "mtime": "2023-04-23T08:36:24.000Z",
    "size": 1385,
    "path": "../../.output/public/img/IconQuickOrderFacebook.png"
  },
  "/img/IconQuickOrderIGTV.png": {
    "type": "image/png",
    "etag": "\"6a7-/1A0LErRywbhI6MeEKIIoHHazzk\"",
    "mtime": "2023-04-23T09:27:24.000Z",
    "size": 1703,
    "path": "../../.output/public/img/IconQuickOrderIGTV.png"
  },
  "/img/IconQuickOrderInstagram.png": {
    "type": "image/png",
    "etag": "\"125e-NC8R05Utny+QgiEjLd8FGgVnmLs\"",
    "mtime": "2023-04-23T08:35:32.000Z",
    "size": 4702,
    "path": "../../.output/public/img/IconQuickOrderInstagram.png"
  },
  "/img/IconQuickOrderLikes.png": {
    "type": "image/png",
    "etag": "\"513-oz6dJMxTTFekTaaP9GL8YCEWfA8\"",
    "mtime": "2023-04-23T09:26:32.000Z",
    "size": 1299,
    "path": "../../.output/public/img/IconQuickOrderLikes.png"
  },
  "/img/IconQuickOrderReels.png": {
    "type": "image/png",
    "etag": "\"618-Qja+wGSkCrenmSgJRD9j9U0A2lI\"",
    "mtime": "2023-04-23T09:27:50.000Z",
    "size": 1560,
    "path": "../../.output/public/img/IconQuickOrderReels.png"
  },
  "/img/IconQuickOrderRutube.png": {
    "type": "image/png",
    "etag": "\"52d-agunr8v1FiV0S+o7NhdYydz4LM4\"",
    "mtime": "2023-04-23T08:36:46.000Z",
    "size": 1325,
    "path": "../../.output/public/img/IconQuickOrderRutube.png"
  },
  "/img/IconQuickOrderSpectator.png": {
    "type": "image/png",
    "etag": "\"6a4-Qrqg1AnmzMrRQXmSmK7W6rvOeyk\"",
    "mtime": "2023-04-23T09:26:08.000Z",
    "size": 1700,
    "path": "../../.output/public/img/IconQuickOrderSpectator.png"
  },
  "/img/IconQuickOrderStatistics.png": {
    "type": "image/png",
    "etag": "\"4f6-wpXObiZePT+esvuwipKv9yYQGnQ\"",
    "mtime": "2023-04-23T09:26:50.000Z",
    "size": 1270,
    "path": "../../.output/public/img/IconQuickOrderStatistics.png"
  },
  "/img/IconQuickOrderSubscribers.png": {
    "type": "image/png",
    "etag": "\"61c-I0Qqs/ptDP+RXRou72m9NskLHe0\"",
    "mtime": "2023-04-23T09:25:48.000Z",
    "size": 1564,
    "path": "../../.output/public/img/IconQuickOrderSubscribers.png"
  },
  "/img/IconQuickOrderTelegram.png": {
    "type": "image/png",
    "etag": "\"8ae-p38Fb3NP7i2VB9RGcuvtK1zBFxE\"",
    "mtime": "2023-04-23T08:36:18.000Z",
    "size": 2222,
    "path": "../../.output/public/img/IconQuickOrderTelegram.png"
  },
  "/img/IconQuickOrderTikTok.png": {
    "type": "image/png",
    "etag": "\"4a3-GC+QkOsp161LDJ+KnNpkGjgX+FA\"",
    "mtime": "2023-04-23T08:36:30.000Z",
    "size": 1187,
    "path": "../../.output/public/img/IconQuickOrderTikTok.png"
  },
  "/img/IconQuickOrderTwitch.png": {
    "type": "image/png",
    "etag": "\"3d6-/cjZNjTW41JQNOVlWg0RaMcHi4s\"",
    "mtime": "2023-04-23T08:36:36.000Z",
    "size": 982,
    "path": "../../.output/public/img/IconQuickOrderTwitch.png"
  },
  "/img/IconQuickOrderTwitter.png": {
    "type": "image/png",
    "etag": "\"529-yKrBEUZiBrboHAARiaWYR/R6xyM\"",
    "mtime": "2023-04-23T08:35:20.000Z",
    "size": 1321,
    "path": "../../.output/public/img/IconQuickOrderTwitter.png"
  },
  "/img/IconQuickOrderViews.png": {
    "type": "image/png",
    "etag": "\"672-Yoy6zUMZBixheepxoo1zKYXscP0\"",
    "mtime": "2023-04-23T09:27:08.000Z",
    "size": 1650,
    "path": "../../.output/public/img/IconQuickOrderViews.png"
  },
  "/img/IconQuickOrderVK.png": {
    "type": "image/png",
    "etag": "\"498-U6R2HagQ32kE/my1hSFDLLY09Xo\"",
    "mtime": "2023-04-23T08:35:48.000Z",
    "size": 1176,
    "path": "../../.output/public/img/IconQuickOrderVK.png"
  },
  "/img/IconQuickOrderYouTube.png": {
    "type": "image/png",
    "etag": "\"308-jcn4G1FPRudYnHf0Ef/IClqh7wE\"",
    "mtime": "2023-04-23T08:35:58.000Z",
    "size": 776,
    "path": "../../.output/public/img/IconQuickOrderYouTube.png"
  },
  "/img/icons8-handmade-96.png": {
    "type": "image/png",
    "etag": "\"bc4-2jbC38CPYKNnRKxe5Yh097oH6TU\"",
    "mtime": "2024-11-23T03:30:47.143Z",
    "size": 3012,
    "path": "../../.output/public/img/icons8-handmade-96.png"
  },
  "/img/icons8-sum-96.png": {
    "type": "image/png",
    "etag": "\"7a7-ytbvfvt8Woe/gcqItL2XFSjekPc\"",
    "mtime": "2024-11-23T04:03:53.519Z",
    "size": 1959,
    "path": "../../.output/public/img/icons8-sum-96.png"
  },
  "/img/icons8-tools-96.png": {
    "type": "image/png",
    "etag": "\"86d-cCul+i9+0yGTLKaLNYJCUeUDzRU\"",
    "mtime": "2024-11-23T03:43:03.023Z",
    "size": 2157,
    "path": "../../.output/public/img/icons8-tools-96.png"
  },
  "/img/icons8-безопасная-зона-для-детей-96 (1).png": {
    "type": "image/png",
    "etag": "\"fd0-GOYSOCZ0/WZN/5/0bpfFP80WG9Q\"",
    "mtime": "2024-11-24T17:35:28.307Z",
    "size": 4048,
    "path": "../../.output/public/img/icons8-безопасная-зона-для-детей-96 (1).png"
  },
  "/img/icons8-безопасная-зона-для-детей-96.png": {
    "type": "image/png",
    "etag": "\"d00-WL/oEDcLRzNYO5Z9Kyb51pAfKgo\"",
    "mtime": "2024-11-24T17:30:17.789Z",
    "size": 3328,
    "path": "../../.output/public/img/icons8-безопасная-зона-для-детей-96.png"
  },
  "/img/icons8-защита-96.png": {
    "type": "image/png",
    "etag": "\"671-JgROGKcpw1QTpDU76z8dYoIAQqs\"",
    "mtime": "2024-11-24T17:23:35.530Z",
    "size": 1649,
    "path": "../../.output/public/img/icons8-защита-96.png"
  },
  "/img/icons8-календарь-96.png": {
    "type": "image/png",
    "etag": "\"58e-D+btEgleDtvYFgCNct06kH+mJuU\"",
    "mtime": "2024-11-24T17:22:59.053Z",
    "size": 1422,
    "path": "../../.output/public/img/icons8-календарь-96.png"
  },
  "/img/icons8-календарь-961.png": {
    "type": "image/png",
    "etag": "\"1c8-4qqbXli7Pekls+jkXZGbXXbthwM\"",
    "mtime": "2024-11-24T17:23:08.279Z",
    "size": 456,
    "path": "../../.output/public/img/icons8-календарь-961.png"
  },
  "/img/icons8-кошелек-96.png": {
    "type": "image/png",
    "etag": "\"353-tO8DjYIX9OUn60KmpWpfuMhKmqk\"",
    "mtime": "2024-11-24T17:29:06.501Z",
    "size": 851,
    "path": "../../.output/public/img/icons8-кошелек-96.png"
  },
  "/img/icons8-сердце-96.png": {
    "type": "image/png",
    "etag": "\"55b-hDBKcw4C8hNPyHU53hBIAmX3KlY\"",
    "mtime": "2024-11-24T17:21:25.810Z",
    "size": 1371,
    "path": "../../.output/public/img/icons8-сердце-96.png"
  },
  "/img/icons8-солнце-96.png": {
    "type": "image/png",
    "etag": "\"50e-+RIQxV8G8mR1TrxCDSBfkFLQvos\"",
    "mtime": "2024-11-24T17:22:18.642Z",
    "size": 1294,
    "path": "../../.output/public/img/icons8-солнце-96.png"
  },
  "/img/IMG_5872.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"8285b-hkQi+LdlVJAdxRM0iz/L5+VDfmY\"",
    "mtime": "2024-11-24T18:00:21.085Z",
    "size": 534619,
    "path": "../../.output/public/img/IMG_5872.jfif"
  },
  "/img/IMG_5909.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"6c37d-zhb1cARdCLUe7/WT4jufkG+Znlo\"",
    "mtime": "2024-11-24T18:00:16.625Z",
    "size": 443261,
    "path": "../../.output/public/img/IMG_5909.jfif"
  },
  "/img/IMG_5910.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"75d49-4fmcTregotSe7rLjojlawGnefMk\"",
    "mtime": "2024-11-24T17:59:39.576Z",
    "size": 482633,
    "path": "../../.output/public/img/IMG_5910.jfif"
  },
  "/img/IMG_5911.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"452d6-ge4uqbWkWW7/LJ6vKFA/SUZt/nw\"",
    "mtime": "2024-11-24T18:00:34.523Z",
    "size": 283350,
    "path": "../../.output/public/img/IMG_5911.jfif"
  },
  "/img/IMG_5912.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"7c34e-zbnKrr/OcHkM+hn3g3aePppw0X8\"",
    "mtime": "2024-11-24T17:58:35.858Z",
    "size": 508750,
    "path": "../../.output/public/img/IMG_5912.jfif"
  },
  "/img/IMG_7449.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"c398f-G3inH64eoaKzpp/NPJU6jjvbR/E\"",
    "mtime": "2024-11-24T15:55:44.674Z",
    "size": 801167,
    "path": "../../.output/public/img/IMG_7449.jfif"
  },
  "/img/IMG_7823.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"51a65-V9aHwGpswvbo47i/zfSwQOryUbE\"",
    "mtime": "2024-11-24T15:55:29.087Z",
    "size": 334437,
    "path": "../../.output/public/img/IMG_7823.jfif"
  },
  "/img/istock-187398417.jpg": {
    "type": "image/jpeg",
    "etag": "\"612877-IHvrxP2uDihl1tHb81/3Wd7zY7s\"",
    "mtime": "2024-11-30T19:36:37.389Z",
    "size": 6367351,
    "path": "../../.output/public/img/istock-187398417.jpg"
  },
  "/img/light-red-gradient-blur-template-vector.jpg": {
    "type": "image/jpeg",
    "etag": "\"ae6d-n3yUGoqH3RDvUETgHoxxayA/uYY\"",
    "mtime": "2024-11-26T21:14:29.410Z",
    "size": 44653,
    "path": "../../.output/public/img/light-red-gradient-blur-template-vector.jpg"
  },
  "/img/MIRLogotype.png": {
    "type": "image/png",
    "etag": "\"26f-7Ih3yXsLC+oMxznhv/yQdG7qVd4\"",
    "mtime": "2023-04-23T15:17:54.000Z",
    "size": 623,
    "path": "../../.output/public/img/MIRLogotype.png"
  },
  "/img/photo_2022-07-14_15-.jpg": {
    "type": "image/jpeg",
    "etag": "\"38ead-O32+aKsBD8hwCRU8MRDSp4L0iQk\"",
    "mtime": "2024-11-24T15:55:37.004Z",
    "size": 233133,
    "path": "../../.output/public/img/photo_2022-07-14_15-.jpg"
  },
  "/img/photo_2023-01-20_09-.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e91a-LRSSCotmO98RjNYFU3TW8uFNoBo\"",
    "mtime": "2024-11-24T18:38:32.072Z",
    "size": 190746,
    "path": "../../.output/public/img/photo_2023-01-20_09-.jpg"
  },
  "/img/PVC-Flexible-Plastic-Sheet.avif": {
    "type": "image/avif",
    "etag": "\"adf5-yCBdBF1oic34JpkTafqHJJXk/M4\"",
    "mtime": "2024-11-30T21:00:29.307Z",
    "size": 44533,
    "path": "../../.output/public/img/PVC-Flexible-Plastic-Sheet.avif"
  },
  "/img/remeshok-dlya-fiksacii-shtory.jpg": {
    "type": "image/jpeg",
    "etag": "\"22788a-k8Xyt8EShi7CuW0JqA7twdDJffc\"",
    "mtime": "2024-11-30T21:23:28.163Z",
    "size": 2259082,
    "path": "../../.output/public/img/remeshok-dlya-fiksacii-shtory.jpg"
  },
  "/img/VISALogotype.png": {
    "type": "image/png",
    "etag": "\"341-v486uwfmbTLhlbymcpbArx5Deuc\"",
    "mtime": "2023-04-23T15:18:12.000Z",
    "size": 833,
    "path": "../../.output/public/img/VISALogotype.png"
  },
  "/img/XXL_height.webp": {
    "type": "image/webp",
    "etag": "\"1736c-UhwB6Fp835i0K/a592MnMECHTSg\"",
    "mtime": "2024-11-30T20:51:26.737Z",
    "size": 95084,
    "path": "../../.output/public/img/XXL_height.webp"
  },
  "/img/XXL_height1.webp": {
    "type": "image/webp",
    "etag": "\"24860-IU0fx5QMgDalctvnt+p6kxpYIBs\"",
    "mtime": "2024-11-30T21:22:16.388Z",
    "size": 149600,
    "path": "../../.output/public/img/XXL_height1.webp"
  },
  "/img/_.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"47c4c-SStAMux0jjw/kVTVzTLSFiEVkDk\"",
    "mtime": "2024-11-24T15:55:15.343Z",
    "size": 293964,
    "path": "../../.output/public/img/_.jfif"
  },
  "/_nuxt/76636daefdd44b058addb6c6bd1ac107.CkryDl_V.jpg": {
    "type": "image/jpeg",
    "etag": "\"36dc4-5eydGWUS1P4CT83wq9lnegOcuv8\"",
    "mtime": "2024-12-09T22:11:02.980Z",
    "size": 224708,
    "path": "../../.output/public/_nuxt/76636daefdd44b058addb6c6bd1ac107.CkryDl_V.jpg"
  },
  "/_nuxt/BNRwoZOI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15e0-iQdGj7Xl2/1W/tXok79lHmD40fg\"",
    "mtime": "2024-12-09T22:11:02.982Z",
    "size": 5600,
    "path": "../../.output/public/_nuxt/BNRwoZOI.js"
  },
  "/_nuxt/BxTacili.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"180-uZ7n89kwc8dbEgftT6hGf9ZLa50\"",
    "mtime": "2024-12-09T22:11:02.976Z",
    "size": 384,
    "path": "../../.output/public/_nuxt/BxTacili.js"
  },
  "/_nuxt/C-MttyxE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d52-7zy64AisfkNkiluM10UoLwL5epk\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 3410,
    "path": "../../.output/public/_nuxt/C-MttyxE.js"
  },
  "/_nuxt/C9TT5QfX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a613-SOZHuLDyQ6QF3GnkbRWmqZLiGQM\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 173587,
    "path": "../../.output/public/_nuxt/C9TT5QfX.js"
  },
  "/_nuxt/CpYWBUaW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ac6-/TkxyoNm14aQV/n64eIBZH+89dA\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 10950,
    "path": "../../.output/public/_nuxt/CpYWBUaW.js"
  },
  "/_nuxt/CvTjs3FE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ec4-OwQiQBfsj+Mu+do5O5yf1Rm3M6Q\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 3780,
    "path": "../../.output/public/_nuxt/CvTjs3FE.js"
  },
  "/_nuxt/CxZrXy87.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12873-dUBp2ieMfKehF5nqR40fUnXO1+s\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 75891,
    "path": "../../.output/public/_nuxt/CxZrXy87.js"
  },
  "/_nuxt/D2D9KHN_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19beb-5ODVViLmPXRLM6ar3VS3mDMy2OI\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 105451,
    "path": "../../.output/public/_nuxt/D2D9KHN_.js"
  },
  "/_nuxt/DoOONX9U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b1-lDM83XlcIRR0idT7k9NQjX5Ncqg\"",
    "mtime": "2024-12-09T22:11:02.982Z",
    "size": 177,
    "path": "../../.output/public/_nuxt/DoOONX9U.js"
  },
  "/_nuxt/entry.DcxLIIR3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"421-9B+VSxZ5asKkV2jLWVDOZIZosi0\"",
    "mtime": "2024-12-09T22:11:02.980Z",
    "size": 1057,
    "path": "../../.output/public/_nuxt/entry.DcxLIIR3.css"
  },
  "/_nuxt/error-404.CH_uCZw2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"de4-jD4XVxebsw8cdweejQ0dqIfhsWo\"",
    "mtime": "2024-12-09T22:11:02.980Z",
    "size": 3556,
    "path": "../../.output/public/_nuxt/error-404.CH_uCZw2.css"
  },
  "/_nuxt/error-500.CglkGuaW.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-Gg9aaTxSzn6yMCWvPiF0uTtTMiM\"",
    "mtime": "2024-12-09T22:11:02.980Z",
    "size": 1884,
    "path": "../../.output/public/_nuxt/error-500.CglkGuaW.css"
  },
  "/_nuxt/Frame.B4Do8DPS.png": {
    "type": "image/png",
    "etag": "\"4bb9-dY1t1BVOdu0Dg0yFk+//R0YgqAo\"",
    "mtime": "2024-12-09T22:11:02.978Z",
    "size": 19385,
    "path": "../../.output/public/_nuxt/Frame.B4Do8DPS.png"
  },
  "/_nuxt/IconQuickOrderInstagram.CzdbabZm.png": {
    "type": "image/png",
    "etag": "\"125e-NC8R05Utny+QgiEjLd8FGgVnmLs\"",
    "mtime": "2024-12-09T22:11:02.978Z",
    "size": 4702,
    "path": "../../.output/public/_nuxt/IconQuickOrderInstagram.CzdbabZm.png"
  },
  "/_nuxt/IMG_7449.mab56Xug.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"c398f-G3inH64eoaKzpp/NPJU6jjvbR/E\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 801167,
    "path": "../../.output/public/_nuxt/IMG_7449.mab56Xug.jfif"
  },
  "/_nuxt/IMG_7823.CCTgAkut.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"51a65-V9aHwGpswvbo47i/zfSwQOryUbE\"",
    "mtime": "2024-12-09T22:11:02.978Z",
    "size": 334437,
    "path": "../../.output/public/_nuxt/IMG_7823.CCTgAkut.jfif"
  },
  "/_nuxt/index.Cty3Bu89.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"147aa-Gql+g3g1IJEak5H88ALIYm8o2p0\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 83882,
    "path": "../../.output/public/_nuxt/index.Cty3Bu89.css"
  },
  "/_nuxt/logo.C0Kok8DY.svg": {
    "type": "image/svg+xml",
    "etag": "\"1423-SklCHPv2HNCA0QTg44Ych6CjgyY\"",
    "mtime": "2024-12-09T22:11:02.980Z",
    "size": 5155,
    "path": "../../.output/public/_nuxt/logo.C0Kok8DY.svg"
  },
  "/_nuxt/LPfATR2w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15a1e-cRdChjh1u+iwMpegOQcgT1ZFKlc\"",
    "mtime": "2024-12-09T22:11:02.981Z",
    "size": 88606,
    "path": "../../.output/public/_nuxt/LPfATR2w.js"
  },
  "/_nuxt/photo_2022-07-14_15-.CIBk-ypB.jpg": {
    "type": "image/jpeg",
    "etag": "\"38ead-O32+aKsBD8hwCRU8MRDSp4L0iQk\"",
    "mtime": "2024-12-09T22:11:02.978Z",
    "size": 233133,
    "path": "../../.output/public/_nuxt/photo_2022-07-14_15-.CIBk-ypB.jpg"
  },
  "/_nuxt/photo_2023-01-20_09-.tZ8Wh7D2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e91a-LRSSCotmO98RjNYFU3TW8uFNoBo\"",
    "mtime": "2024-12-09T22:11:02.980Z",
    "size": 190746,
    "path": "../../.output/public/_nuxt/photo_2023-01-20_09-.tZ8Wh7D2.jpg"
  },
  "/_nuxt/_.D3P5tEjR.jfif": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"47c4c-SStAMux0jjw/kVTVzTLSFiEVkDk\"",
    "mtime": "2024-12-09T22:11:02.980Z",
    "size": 293964,
    "path": "../../.output/public/_nuxt/_.D3P5tEjR.jfif"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-Vu37Nehh5qu0+F+4uRrBbHlhoHE\"",
    "mtime": "2024-12-09T22:11:04.675Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/f6e87b22-829f-4431-a89e-8234b48b368f.json": {
    "type": "application/json",
    "etag": "\"8b-2aSl4BNE/CXLeFuMnk2U5PWvHqU\"",
    "mtime": "2024-12-09T22:11:04.675Z",
    "size": 139,
    "path": "../../.output/public/_nuxt/builds/meta/f6e87b22-829f-4431-a89e-8234b48b368f.json"
  }
};

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
const _vHBGKU = eventHandler((event) => {
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

const _b7yeCe = eventHandler((event) => {
  const env = event.context.cloudflare?.env || {};
  for (const key in env) {
    if (typeof process.env[key] === "undefined" && typeof env[key] === "string") {
      process.env[key] = env[key];
    }
  }
});

const _lazy_9MoWCY = () => import('../routes/api/send-message.mjs');
const _lazy_sIH8OQ = () => import('../routes/api/_hub/_...feature_.mjs');
const _lazy_2aIpJQ = () => import('../routes/api/index.head.mjs');
const _lazy_IKJYpc = () => import('../routes/api/_hub/manifest.get.mjs');
const _lazy_Su5swv = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _vHBGKU, lazy: false, middleware: true, method: undefined },
  { route: '/api/send-message', handler: _lazy_9MoWCY, lazy: true, middleware: false, method: undefined },
  { route: '/api/_hub/**:feature', handler: _lazy_sIH8OQ, lazy: true, middleware: false, method: undefined },
  { route: '/api/_hub', handler: _lazy_2aIpJQ, lazy: true, middleware: false, method: "head" },
  { route: '/api/_hub/manifest', handler: _lazy_IKJYpc, lazy: true, middleware: false, method: "get" },
  { route: '', handler: _b7yeCe, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_Su5swv, lazy: true, middleware: false, method: undefined }
];

const serverAssets = [{"baseName":"server","dir":"D:/nuxt3-vuetify3-starter-main/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('internal:nuxt:prerender', file_58_47_47_47D_58_47nuxt3_45vuetify3_45starter_45main_47node_modules_47_46pnpm_47nuxt_643_4614_461592__64parcel_43watcher_642_465_460__64types_43node_6422_4610_461_ioredis_645_464_461_magicast_640_463_465_rollup_64_wkb5vlqe3fydsakbajvypkvc54_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"file:///D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.1_ioredis@5.4.1_magicast@0.3.5_rollup@_wkb5vlqe3fydsakbajvypkvc54/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"D:/nuxt3-vuetify3-starter-main/.nuxt/cache/nitro/prerender"}));
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

const inlineAppConfig = {
  "nuxt": {},
  "__swiper": {
    "bundled": true
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
    "buildId": "d2b77914-31f5-4129-8bf4-6270c27e6188",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
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
    "openapi": false,
    "bindings": {
      "hyperdrive": {},
      "compatibilityFlags": ""
    },
    "cloudflareAccess": {
      "clientId": "",
      "clientSecret": ""
    }
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
_deepFreeze(klona(appConfig));
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

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

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

export { useRuntimeConfig as a, useStorage as b, defineRenderHandler as d, getRouteRules as g, trapUnhandledNodeErrors as t, useNitroApp as u };
//# sourceMappingURL=nitro.mjs.map
