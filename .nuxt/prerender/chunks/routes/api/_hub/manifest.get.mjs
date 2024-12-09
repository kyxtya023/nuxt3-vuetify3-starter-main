import { createError, sendNoContent, setHeader, assertMethod, readFormData, getValidatedRouterParams, getValidatedQuery, getHeader, getRequestWebStream, readValidatedBody, eventHandler } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/h3/dist/index.mjs';
import { ofetch } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ofetch/dist/node.mjs';
import { joinURL } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ufo/dist/index.mjs';
import { r as requireNuxtHubFeature } from '../../../_/features.mjs';
import { a as useRuntimeConfig } from '../../../_/nitro.mjs';
import { createStorage } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/dist/index.mjs';
import httpDriver from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/http.mjs';
import cloudflareKVBindingDriver from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs';
import mime from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/mime/dist/src/index.js';
import { z } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/zod/lib/index.mjs';
import { defu } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/defu/dist/defu.mjs';
import { randomUUID } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/uncrypto/dist/crypto.node.mjs';
import { parse } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/pathe/dist/index.mjs';
import { r as requireNuxtHubAuthorization } from '../../../_/auth.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/destr/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/hookable/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/klona/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/ohash/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.1_ioredis@5.4.1_magicast@0.3.5_rollup@_wkb5vlqe3fydsakbajvypkvc54/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:async_hooks';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/unctx/dist/index.mjs';
import 'file://D:/nuxt3-vuetify3-starter-main/node_modules/radix3/dist/index.mjs';

function getCloudflareAccessHeaders(access) {
  const isCloudflareAccessEnabled = !!(access?.clientId && access?.clientSecret);
  if (!isCloudflareAccessEnabled) return {};
  return {
    "CF-Access-Client-Id": access?.clientId,
    "CF-Access-Client-Secret": access?.clientSecret
  };
}

let _db;
function hubDatabase() {
  requireNuxtHubFeature("database");
  if (_db) {
    return _db;
  }
  const hub = useRuntimeConfig().hub;
  const binding = process.env.DB || globalThis.__env__?.DB || globalThis.DB;
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    _db = proxyHubDatabase(hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
    return _db;
  }
  if (binding) {
    _db = binding;
    return _db;
  }
  throw createError("Missing Cloudflare DB binding (D1)");
}
function proxyHubDatabase(projectUrl, secretKey, headers) {
  requireNuxtHubFeature("database");
  const d1API = ofetch.create({
    baseURL: joinURL(projectUrl, "/api/_hub/database"),
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...headers
    }
  });
  return {
    async exec(query) {
      return d1API("/exec", {
        body: { query }
      }).catch(handleProxyError$1);
    },
    prepare(query) {
      const stmt = {
        _body: {
          query,
          params: []
        },
        bind(...params) {
          return {
            ...stmt,
            _body: { query, params }
          };
        },
        async all() {
          return d1API("/all", { body: this._body }).catch(handleProxyError$1);
        },
        async raw(options) {
          return d1API("/raw", {
            body: {
              ...this._body,
              ...options
            }
          }).catch(handleProxyError$1);
        },
        async run() {
          return d1API("/run", { body: this._body }).catch(handleProxyError$1);
        },
        async first(colName) {
          return d1API("/first", {
            body: {
              ...this._body,
              colName
            }
          }).catch(handleProxyError$1).then((res) => res || null);
        }
      };
      return stmt;
    },
    batch(statements) {
      return d1API("/batch", {
        // @ts-expect-error _body is not recognized but internally used
        body: statements.map((smtm) => smtm._body)
      });
    }
  };
}
function handleProxyError$1(err) {
  throw createError({
    statusCode: err.statusCode,
    // @ts-expect-error not aware of data property
    message: err.data?.message || err.message
  });
}

function hubKV() {
  requireNuxtHubFeature("kv");
  const hub = useRuntimeConfig().hub;
  const binding = process.env.KV || globalThis.__env__?.KV || globalThis.KV;
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    return proxyHubKV(hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
  }
  if (binding) {
    const storage = createStorage({
      driver: cloudflareKVBindingDriver({
        binding
      })
    });
    return storage;
  }
  throw createError("Missing Cloudflare KV binding (KV)");
}
function proxyHubKV(projectUrl, secretKey, headers) {
  requireNuxtHubFeature("kv");
  const storage = createStorage({
    driver: httpDriver({
      base: joinURL(projectUrl, "/api/_hub/kv/"),
      headers: {
        Authorization: `Bearer ${secretKey}`,
        ...headers
      }
    })
  });
  return storage;
}

async function streamToArrayBuffer(stream, streamSize) {
  const result = new Uint8Array(streamSize);
  let bytesRead = 0;
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result.set(value, bytesRead);
    bytesRead += value.length;
  }
  return result;
}

const _r2_buckets = {};
function getBlobBinding(name = "BLOB") {
  return process.env[name] || globalThis.__env__?.[name] || globalThis[name];
}
function _useBucket(name = "BLOB") {
  if (_r2_buckets[name]) {
    return _r2_buckets[name];
  }
  const binding = getBlobBinding(name);
  if (binding) {
    _r2_buckets[name] = binding;
    return _r2_buckets[name];
  }
  throw createError(`Missing Cloudflare ${name} binding (R2)`);
}
function hubBlob() {
  requireNuxtHubFeature("blob");
  const hub = useRuntimeConfig().hub;
  const binding = getBlobBinding();
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    return proxyHubBlob(hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
  }
  const bucket = _useBucket();
  const blob = {
    async list(options) {
      const resolvedOptions = defu(options, {
        limit: 1e3,
        include: ["httpMetadata", "customMetadata"],
        delimiter: options?.folded ? "/" : void 0
      });
      const listed = await bucket.list(resolvedOptions);
      const hasMore = listed.truncated;
      const cursor = listed.truncated ? listed.cursor : void 0;
      return {
        blobs: listed.objects.map(mapR2ObjectToBlob),
        hasMore,
        cursor,
        folders: resolvedOptions.delimiter ? listed.delimitedPrefixes : void 0
      };
    },
    async serve(event, pathname) {
      pathname = decodeURIComponent(pathname);
      const object = await bucket.get(pathname);
      if (!object) {
        throw createError({ message: "File not found", statusCode: 404 });
      }
      setHeader(event, "Content-Type", object.httpMetadata?.contentType || getContentType(pathname));
      setHeader(event, "Content-Length", object.size);
      setHeader(event, "etag", object.httpEtag);
      return object.body;
    },
    async get(pathname) {
      const object = await bucket.get(decodeURIComponent(pathname));
      if (!object) {
        return null;
      }
      return object.blob();
    },
    async put(pathname, body, options = {}) {
      pathname = decodeURIComponent(pathname);
      const { contentType: optionsContentType, contentLength, addRandomSuffix, prefix, customMetadata } = options;
      const contentType = optionsContentType || body.type || getContentType(pathname);
      const { dir, ext, name: filename } = parse(pathname);
      if (addRandomSuffix) {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}-${randomUUID().split("-")[0]}${ext}`);
      } else {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}${ext}`);
      }
      if (prefix) {
        pathname = joinURL(prefix, pathname).replace(/\/+/g, "/").replace(/^\/+/, "");
      }
      const httpMetadata = { contentType };
      if (contentLength) {
        httpMetadata.contentLength = contentLength;
      }
      const object = await bucket.put(pathname, body, { httpMetadata, customMetadata });
      return mapR2ObjectToBlob(object);
    },
    async head(pathname) {
      const object = await bucket.head(decodeURIComponent(pathname));
      if (!object) {
        throw createError({ message: "Blob not found", statusCode: 404 });
      }
      return mapR2ObjectToBlob(object);
    },
    async del(pathnames) {
      if (Array.isArray(pathnames)) {
        return await bucket.delete(pathnames.map((p) => decodeURIComponent(p)));
      } else {
        return await bucket.delete(decodeURIComponent(pathnames));
      }
    },
    async createMultipartUpload(pathname, options = {}) {
      pathname = decodeURIComponent(pathname);
      const { contentType: optionsContentType, contentLength, addRandomSuffix, prefix, customMetadata } = options;
      const contentType = optionsContentType || getContentType(pathname);
      const { dir, ext, name: filename } = parse(pathname);
      if (addRandomSuffix) {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}-${randomUUID().split("-")[0]}${ext}`);
      } else {
        pathname = joinURL(dir === "." ? "" : dir, `${filename}${ext}`);
      }
      if (prefix) {
        pathname = joinURL(prefix, pathname).replace(/\/+/g, "/").replace(/^\/+/, "");
      }
      const httpMetadata = { contentType };
      if (contentLength) {
        httpMetadata.contentLength = contentLength;
      }
      const mpu = await bucket.createMultipartUpload(pathname, { httpMetadata, customMetadata });
      return mapR2MpuToBlobMpu(mpu);
    },
    resumeMultipartUpload(pathname, uploadId) {
      const mpu = bucket.resumeMultipartUpload(decodeURIComponent(pathname), uploadId);
      return mapR2MpuToBlobMpu(mpu);
    },
    async handleUpload(event, options = {}) {
      assertMethod(event, ["POST", "PUT", "PATCH"]);
      options = defu(options, {
        formKey: "files",
        multiple: true
      });
      const form = await readFormData(event);
      const files = form.getAll(options.formKey);
      if (!files) {
        throw createError({ statusCode: 400, message: "Missing files" });
      }
      if (!options.multiple && files.length > 1) {
        throw createError({ statusCode: 400, message: "Multiple files are not allowed" });
      }
      const objects = [];
      try {
        if (options.ensure) {
          for (const file of files) {
            ensureBlob(file, options.ensure);
          }
        }
        for (const file of files) {
          const object = await blob.put(file.name, file, options.put);
          objects.push(object);
        }
      } catch (e) {
        throw createError({
          statusCode: 500,
          message: `Storage error: ${e.message}`
        });
      }
      return objects;
    },
    async createCredentials(options = {}) {
      if (!process.env.NUXT_HUB_PROJECT_DEPLOY_TOKEN) {
        throw createError("Missing `NUXT_HUB_PROJECT_DEPLOY_TOKEN` environment variable, make sure to deploy with `npx nuxthub deploy` or with the NuxtHub Admin.");
      }
      const env = process.env.NUXT_HUB_ENV || hub.env || "production";
      return await $fetch(`/api/projects/${hub.projectKey}/blob/${env}/credentials`, {
        baseURL: hub.url,
        method: "POST",
        body: options,
        headers: {
          authorization: `Bearer ${process.env.NUXT_HUB_PROJECT_DEPLOY_TOKEN}`
        }
      });
    }
  };
  return {
    ...blob,
    delete: blob.del,
    handleMultipartUpload: createMultipartUploadHandler(blob)
  };
}
function proxyHubBlob(projectUrl, secretKey, headers) {
  requireNuxtHubFeature("blob");
  const blobAPI = ofetch.create({
    baseURL: joinURL(projectUrl, "/api/_hub/blob"),
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...headers
    }
  });
  const blob = {
    async list(options = { limit: 1e3 }) {
      return blobAPI("/", {
        method: "GET",
        query: options
      });
    },
    async serve(_event, pathname) {
      return blobAPI(encodeURIComponent(pathname), {
        method: "GET"
      });
    },
    async put(pathname, body, options = {}) {
      const { contentType, contentLength, ...query } = options;
      const headers2 = {};
      if (contentType) {
        headers2["content-type"] = contentType;
      }
      if (contentLength) {
        headers2["content-length"] = contentLength;
      }
      if (body instanceof Uint8Array) {
        body = new Blob([body]);
      }
      return await blobAPI(encodeURIComponent(pathname), {
        method: "PUT",
        headers: headers2,
        body,
        query
      });
    },
    async head(pathname) {
      return await blobAPI(`/head/${encodeURIComponent(pathname)}`, {
        method: "GET"
      });
    },
    async get(pathname) {
      return await blobAPI(`/${encodeURIComponent(pathname)}`, {
        method: "GET",
        responseType: "blob"
      });
    },
    async del(pathnames) {
      if (Array.isArray(pathnames)) {
        await blobAPI("/delete", {
          method: "POST",
          body: {
            pathnames: pathnames.map((p) => encodeURIComponent(p))
          }
        });
      } else {
        await blobAPI(encodeURIComponent(pathnames), {
          method: "DELETE"
        });
      }
      return;
    },
    async createMultipartUpload(pathname, options = {}) {
      return await blobAPI(`/multipart/create/${encodeURIComponent(pathname)}`, {
        method: "POST",
        query: options
      });
    },
    resumeMultipartUpload(pathname, uploadId) {
      return {
        pathname,
        uploadId,
        async uploadPart(partNumber, body) {
          return await blobAPI(`/multipart/upload/${encodeURIComponent(pathname)}`, {
            method: "PUT",
            query: {
              uploadId,
              partNumber
            },
            body
          });
        },
        async abort() {
          await blobAPI(`/multipart/abort/${encodeURIComponent(pathname)}`, {
            method: "DELETE",
            query: {
              uploadId
            }
          });
        },
        async complete(parts) {
          return await blobAPI(`/multipart/complete/${encodeURIComponent(pathname)}`, {
            method: "POST",
            query: {
              uploadId
            },
            body: {
              parts
            }
          });
        }
      };
    },
    async handleUpload(event, options = {}) {
      return await blobAPI("/", {
        method: "POST",
        body: await readFormData(event),
        query: options
      });
    },
    async createCredentials(options = {}) {
      return await blobAPI("/credentials", {
        method: "POST",
        body: options
      });
    }
  };
  return {
    ...blob,
    delete: blob.del,
    handleMultipartUpload: createMultipartUploadHandler(blob)
  };
}
function createMultipartUploadHandler(hub) {
  const { createMultipartUpload, resumeMultipartUpload } = hub;
  const createHandler = async (event, options) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    try {
      const object = await createMultipartUpload(pathname, options);
      return {
        uploadId: object.uploadId,
        pathname: object.pathname
      };
    } catch (e) {
      throw createError({
        statusCode: 400,
        message: e.message
      });
    }
  };
  const uploadHandler = async (event) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    const { uploadId, partNumber } = await getValidatedQuery(event, z.object({
      uploadId: z.string(),
      partNumber: z.coerce.number()
    }).parse);
    const contentLength = Number(getHeader(event, "content-length") || "0");
    const stream = getRequestWebStream(event);
    const body = await streamToArrayBuffer(stream, contentLength);
    const mpu = resumeMultipartUpload(pathname, uploadId);
    try {
      return await mpu.uploadPart(partNumber, body);
    } catch (e) {
      throw createError({ status: 400, message: e.message });
    }
  };
  const completeHandler = async (event) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    const { uploadId } = await getValidatedQuery(event, z.object({
      uploadId: z.string().min(1)
    }).parse);
    const { parts } = await readValidatedBody(event, z.object({
      parts: z.array(z.object({
        partNumber: z.number(),
        etag: z.string()
      }))
    }).parse);
    const mpu = resumeMultipartUpload(pathname, uploadId);
    try {
      const object = await mpu.complete(parts);
      return object;
    } catch (e) {
      throw createError({ status: 400, message: e.message });
    }
  };
  const abortHandler = async (event) => {
    const { pathname } = await getValidatedRouterParams(event, z.object({
      pathname: z.string().min(1)
    }).parse);
    const { uploadId } = await getValidatedQuery(event, z.object({
      uploadId: z.string().min(1)
    }).parse);
    const mpu = resumeMultipartUpload(pathname, uploadId);
    try {
      await mpu.abort();
    } catch (e) {
      throw createError({ status: 400, message: e.message });
    }
  };
  const handler = async (event, options) => {
    const method = event.method;
    const { action } = await getValidatedRouterParams(event, z.object({
      action: z.enum(["create", "upload", "complete", "abort"])
    }).parse);
    if (action === "create" && method === "POST") {
      return {
        action,
        data: await createHandler(event, options)
      };
    }
    if (action === "upload" && method === "PUT") {
      return {
        action,
        data: await uploadHandler(event)
      };
    }
    if (action === "complete" && method === "POST") {
      return {
        action,
        data: await completeHandler(event)
      };
    }
    if (action === "abort" && method === "DELETE") {
      return {
        action,
        data: await abortHandler(event)
      };
    }
    throw createError({ status: 405 });
  };
  return async (event, options) => {
    const result = await handler(event, options);
    if (result.data) {
      event.respondWith(Response.json(result.data));
    } else {
      sendNoContent(event);
    }
    return result;
  };
}
function getContentType(pathOrExtension) {
  return pathOrExtension && mime.getType(pathOrExtension) || "application/octet-stream";
}
function mapR2ObjectToBlob(object) {
  return {
    pathname: object.key,
    contentType: object.httpMetadata?.contentType,
    size: object.size,
    httpEtag: object.httpEtag,
    uploadedAt: object.uploaded,
    httpMetadata: object.httpMetadata || {},
    customMetadata: object.customMetadata || {}
  };
}
function mapR2MpuToBlobMpu(mpu) {
  return {
    pathname: mpu.key,
    uploadId: mpu.uploadId,
    async uploadPart(partNumber, value) {
      return await mpu.uploadPart(partNumber, value);
    },
    abort: mpu.abort,
    async complete(uploadedParts) {
      const object = await mpu.complete(uploadedParts);
      return mapR2ObjectToBlob(object);
    }
  };
}
const FILESIZE_UNITS = ["B", "KB", "MB", "GB"];
function fileSizeToBytes(input) {
  const regex = new RegExp(
    `^(\\d+)(\\.\\d+)?\\s*(${FILESIZE_UNITS.join("|")})$`,
    "i"
  );
  const match = input.match(regex);
  if (!match) {
    throw createError({ statusCode: 400, message: `Invalid file size format: ${input}` });
  }
  const sizeValue = Number.parseFloat(match[1]);
  const sizeUnit = match[3].toUpperCase();
  if (!FILESIZE_UNITS.includes(sizeUnit)) {
    throw createError({ statusCode: 400, message: `Invalid file size unit: ${sizeUnit}` });
  }
  const bytes = sizeValue * Math.pow(1024, FILESIZE_UNITS.indexOf(sizeUnit));
  return Math.floor(bytes);
}
function ensureBlob(blob, options = {}) {
  requireNuxtHubFeature("blob");
  if (!options.maxSize && !options.types?.length) {
    throw createError({
      statusCode: 400,
      message: "ensureBlob() requires at least one of maxSize or types to be set."
    });
  }
  if (options.maxSize) {
    const maxFileSizeBytes = fileSizeToBytes(options.maxSize);
    if (blob.size > maxFileSizeBytes) {
      throw createError({
        statusCode: 400,
        message: `File size must be less than ${options.maxSize}`
      });
    }
  }
  const blobShortType = blob.type.split("/")[0];
  if (options.types?.length && !options.types.includes(blob.type) && !options.types.includes(blobShortType)) {
    throw createError({
      statusCode: 400,
      message: `File type is invalid, must be: ${options.types.join(", ")}`
    });
  }
}

const _vectorize = {};
function hubVectorize(index) {
  requireNuxtHubFeature("vectorize");
  if (_vectorize[index]) {
    return _vectorize[index];
  }
  const hub = useRuntimeConfig().hub;
  const bindingName = `VECTORIZE_${index.toUpperCase()}`;
  const binding = process.env[bindingName] || globalThis.__env__?.[bindingName] || globalThis[bindingName];
  if (hub.remote && hub.projectUrl && !binding) {
    const cfAccessHeaders = getCloudflareAccessHeaders(hub.cloudflareAccess);
    _vectorize[index] = proxyHubVectorize(index, hub.projectUrl, hub.projectSecretKey || hub.userToken, cfAccessHeaders);
    return _vectorize[index];
  }
  if (binding) {
    _vectorize[index] = binding;
    return _vectorize[index];
  }
  throw createError(`Missing Cloudflare Vectorize binding (${bindingName})`);
}
function proxyHubVectorize(index, projectUrl, secretKey, headers) {
  requireNuxtHubFeature("vectorize");
  const vectorizeAPI = ofetch.create({
    baseURL: joinURL(projectUrl, `/api/_hub/vectorize/${index}`),
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      ...headers
    }
  });
  return {
    async insert(vectors) {
      return vectorizeAPI("/insert", { body: { vectors } }).catch(handleProxyError);
    },
    async upsert(vectors) {
      return vectorizeAPI("/upsert", { body: { vectors } }).catch(handleProxyError);
    },
    async query(query, params) {
      return vectorizeAPI("/query", { body: { query, params } }).catch(handleProxyError);
    },
    async getByIds(ids) {
      return vectorizeAPI("/getByIds", { body: { ids } }).catch(handleProxyError);
    },
    async deleteByIds(ids) {
      return vectorizeAPI("/deleteByIds", { body: { ids } }).catch(handleProxyError);
    },
    async describe() {
      return vectorizeAPI("/describe").catch(handleProxyError);
    }
  };
}
function handleProxyError(err) {
  throw createError({
    statusCode: err.statusCode,
    // @ts-expect-error not aware of data property
    message: err.data?.message || err.message
  });
}

const manifest_get = eventHandler(async (event) => {
  await requireNuxtHubAuthorization(event);
  const { version, cache, ai, analytics, browser, blob, kv, database, vectorize } = useRuntimeConfig().hub;
  const [dbCheck, kvCheck, blobCheck, vectorizeCheck] = await Promise.all([
    falseIfFail(() => database && hubDatabase().exec("PRAGMA table_list")),
    falseIfFail(() => kv && hubKV().getKeys("__check__")),
    falseIfFail(() => blob && hubBlob().list({ prefix: "__check__" })),
    // vectorize check should verify all indexes. return the index name
    Promise.all(Object.keys(vectorize).map(async (index) => {
      const vectorizeIndex = hubVectorize(index);
      const describe = await falseIfFail(() => vectorizeIndex.describe());
      return [index, Boolean(describe)];
    }))
  ]);
  const enabledVectorizeIndexes = Object.fromEntries(Object.entries(vectorize).filter(([index]) => vectorizeCheck.find(([name, enabled]) => name === index && enabled)));
  return {
    version,
    storage: {
      database: Boolean(dbCheck),
      kv: Array.isArray(kvCheck),
      blob: Array.isArray(blobCheck?.blobs),
      vectorize: enabledVectorizeIndexes
    },
    features: {
      ai,
      analytics,
      browser,
      cache
    }
  };
});
async function falseIfFail(fn) {
  try {
    const res = fn();
    if (res instanceof Promise) {
      return res.catch(() => false);
    }
    return res;
  } catch (e) {
    return false;
  }
}

export { manifest_get as default };
//# sourceMappingURL=manifest.get.mjs.map
