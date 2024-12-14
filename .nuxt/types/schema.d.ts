import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     */
    ["hub"]: typeof import("@nuxthub/core").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `nuxt-swiper`
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     */
    ["hub"]?: typeof import("@nuxthub/core").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxthub/core", Exclude<NuxtConfig["hub"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     * @see https://hub.nuxt.com
     */
    ["hub"]: typeof import("@nuxthub/core").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `nuxt-swiper`
     * @see https://www.npmjs.com/package/nuxt-swiper
     */
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxthub/core`
     * @see https://hub.nuxt.com
     */
    ["hub"]?: typeof import("@nuxthub/core").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@nuxthub/core", Exclude<NuxtConfig["hub"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   hub: {
      projectUrl: string,

      projectSecretKey: string,

      url: string,

      projectKey: string,

      userToken: string,

      remote: any,

      remoteManifest: any,

      dir: string,

      ai: boolean,

      analytics: boolean,

      blob: boolean,

      browser: boolean,

      cache: boolean,

      database: boolean,

      kv: boolean,

      vectorize: any,

      version: string,

      env: string,

      openapi: boolean,

      bindings: {
         hyperdrive: any,

         compatibilityFlags: any,
      },

      cloudflareAccess: {
         clientId: any,

         clientSecret: any,
      },

      openAPIRoute: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },
  }
  interface PublicRuntimeConfig {
   hub: any,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }