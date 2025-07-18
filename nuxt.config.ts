import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// PWA Config
const title = "Vuetify 3 + Nuxt 3 Starter";
const shortTitle = "Vuetify 3 + Nuxt 3 Starter";
const description = "Template to get you up and running with Nuxt 3 & Vuetify 3";
const image = "https://vuetify3nuxt3starter.behonbaker.com/starter.png";
const url = "https://vuetify3nuxt3starter.behonbaker.com/";
const author = "Behon Baker";
const themeColor = "#4f46e5";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // import styles
  css: ["@/assets/main.css"],

  devtools: { enabled: true },

  // enable takeover mode
  typescript: { shim: false },

  build: { transpile: ["vuetify"] },

  // Based on docs found here - https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  modules: ["nuxt-swiper", "@nuxt/image", "@nuxt/ui", "@vueuse/nuxt"],
  nitro: {
    preset: 'static', // Или другое, если необходимо
    routeRules: {
      '/api/**': {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    },
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    },
    experimental: {
      openAPI: true
    }
  },

  app: {
    head: {
      title: "Vuetify 3 + Nuxt 3 Starter",
      titleTemplate: "%s | Vuetify 3 + Nuxt 3 Starter",
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },

  compatibilityDate: "2024-07-15",
});



// import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// // PWA Config
// const title = "Vuetify 3 + Nuxt 3 Starter";
// const shortTitle = "Vuetify 3 + Nuxt 3 Starter";
// const description = "Template to get you up and running with Nuxt 3 & Vuetify 3";
// const image = "https://vuetify3nuxt3starter.behonbaker.com/starter.png";
// const url = "https://vuetify3nuxt3starter.behonbaker.com/";
// const author = "Behon Baker";
// const themeColor = "#4f46e5";

// // https://v3.nuxtjs.org/api/configuration/nuxt.config
// export default defineNuxtConfig({
//   // import styles
//   css: ["@/assets/main.css"],

//   devtools: { enabled: true },

//   // enable takeover mode
//   typescript: { shim: false },

//   build: { transpile: ["vuetify"] },

//   // Based on docs found here - https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
//   vite: {
//     vue: {
//       template: {
//         transformAssetUrls,
//       },
//     },
//   },

//   modules: [
//     "nuxt-swiper"
//   ],
//   nitro: {
//     preset: 'node-server', // Или другое, если необходимо
//     routeRules: {
//       '/api/**': {
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//           'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//         }
//       }
//     }
//   },

//   app: {
//     head: {
//       title: "Vuetify 3 + Nuxt 3 Starter",
//       titleTemplate: "%s | Vuetify 3 + Nuxt 3 Starter",
//       link: [
//         { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
//         { rel: "preconnect", href: "https://rsms.me/" },
//         { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
//         { rel: "canonical", href: url },
//       ],
//       meta: [
//         {
//           hid: "description",
//           name: "description",
//           content: description,
//         },
//         { property: "og:site_name", content: title },
//         { hid: "og:type", property: "og:type", content: "website" },
//         {
//           hid: "og:url",
//           property: "og:url",
//           content: url,
//         },
//         {
//           hid: "og:image:secure_url",
//           property: "og:image:secure_url",
//           content: image,
//         },
//         {
//           hid: "og:title",
//           property: "og:title",
//           content: title,
//         },
//         {
//           hid: "og:description",
//           property: "og:description",
//           content: description,
//         },
//         {
//           hid: "og:image",
//           property: "og:image",
//           content: image,
//         },
//         //Twitter
//         { name: "twitter:card", content: "summary_large_image" },
//         {
//           hid: "twitter:url",
//           name: "twitter:url",
//           content: url,
//         },
//         {
//           hid: "twitter:title",
//           name: "twitter:title",
//           content: title,
//         },
//         {
//           hid: "twitter:description",
//           name: "twitter:description",
//           content: description,
//         },
//         {
//           hid: "twitter:image",
//           name: "twitter:image",
//           content: image,
//         },
//       ],
//     },
//   },

//   compatibilityDate: "2024-07-15",
// });
