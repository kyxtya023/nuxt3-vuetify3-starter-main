import { getHeader, createError } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
import { $fetch } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ofetch/dist/node.mjs';

const localCache = /* @__PURE__ */ new Map();
async function requireNuxtHubAuthorization(event) {
  const secretKeyOrUserToken = (getHeader(event, "authorization") || "").split(" ")[1];
  if (!secretKeyOrUserToken) {
    throw createError({
      statusCode: 403,
      message: "Missing Authorization header"
    });
  }
  const env = event.context.cloudflare?.env || process.env || {};
  const projectKey = env.NUXT_HUB_PROJECT_KEY;
  const projectSecretKey = env.NUXT_HUB_PROJECT_SECRET_KEY;
  if (projectSecretKey && secretKeyOrUserToken === projectSecretKey) {
    return;
  } else if (projectSecretKey && !projectKey) {
    throw createError({
      statusCode: 401,
      message: "Invalid secret key"
    });
  }
  if (projectKey) {
    if (localCache.has(secretKeyOrUserToken)) {
      return;
    }
    await $fetch(`/api/projects/${projectKey}`, {
      baseURL: env.NUXT_HUB_URL || "https://admin.hub.nuxt.com",
      method: "HEAD",
      headers: {
        authorization: `Bearer ${secretKeyOrUserToken}`
      }
    }).catch(() => {
      throw createError({
        statusCode: 401,
        message: "Could not connect to project"
      });
    });
    localCache.set(secretKeyOrUserToken, true);
    return;
  }
  throw createError({
    statusCode: 401,
    message: "Missing NUXT_HUB_PROJECT_SECRET_KEY environment variable or NUXT_HUB_PROJECT_KEY environment variable"
  });
}

export { requireNuxtHubAuthorization as r };
//# sourceMappingURL=auth.mjs.map
