import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, createElementBlock, ref, provide, useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, computed, unref, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BXxPlIRz.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../_/index.mjs';
import 'vue-router';

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
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
const _imports_0$1 = "data:image/png;base64,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";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIH0lEQVR4nO1deahVRRj/PXu5K2j3ZYVL5IJiipaE9PTZTma+MpcyUyPzZZH+URlYRK5JK9HyR/2hbeQrDNEWisRSKCwqn2lpq2aLtJmmZprPEwPfwMdw7zkz98yc5d75wYH37j0zZ87vm/nmW2bmAh4eHh4eHh4eHh4eHh4eCaIGQF8AFwCYCqAJwI0AxgEYBKBdko2pFvQFMB/AegB/AwhCrhMAWgA8AOB8AG3Sbnxe0QbABAAbidSgzGs3gMvTfpm84SIA2xQijwP4EMAyAJMAnA2gB4BudA0AMBHAU4rAXgfQFhnBSAD9kF10AfC8Qvx3AO4gsqNwEoCXs0p+A4CDAP4BsADAycgWBgH4ipH3M4AZAGo1y+eCfN6zttKIyALOA/AHa9uzNBpQaeQfpElNNrQVwJMAuqbYviEA/qL2HAUwzbB8rshvIDtaDO3fWaN/BHBVCu0r0LNFG44AuCwm+euyRL7Q8b+ynj6myMu/oKil1wCckWAb17D2XV1J5EvcyRp4c4l7LgHwLbtvP4DbEnBgxrJnLimD/FWWyG/r0k8QFsSn1Mh9IaZcBwDLARxjL/UB2dqu8Ak9Z4ehRWab/HXkrDnrcOeSExNQw8MwFMBm9nJCIEsBtHfQpoCuKSmTL+uqh0M8xh4khn4YRE+Yq8RchK61iaVU728Gvd8l+QF52M7QmYaZeNAuAJ00yvQEsJ3KvGW5PRup3maDMisdkS/DFlvgGFewhz6iWeZVuv9dy235ieq916BMMzMSbJHfzCzB1iRC2fIl/gNwjsb9L9H971tux79U7xyDMpMYccMtkV9LcSb52UA4xmlkDQVkhQi9qjPshUVkE0eoXjHX6EKozcNUTswhcchfxWJMjexzkdRxjtnsgUL6YXiG7jsEYLTFNuymeh8yLLeayu20RD4osya/uxYJoIZNgoLYPiH3jlJCGaMtteFtqnOTYbmpjCwRQ4pLvgwEyu8nIyEMZHr4TZbUKDYJjXYghPksyXKKQbkuTH0ttEC+TP7Ie65BgrhfsYP59b0yMmwLYSh7lggMmmAt8yEWlhgJuuSDer28T4z4xCB6+5cpCmEL1dVCalEX04u0dSdNzMMNyRe4m917KhLGmTTsJtM1gzzCEwkIYXqZurc9lV3L1BG/9huQD+Zdi5xEZtCUgBBOJ38koJFYjhPUhSbm1cxENSEf9H4ykYO8CqHBsO4CqR5O2KMx29uRnLVm8l+ifByBYez5tyKDcCGEgkL+DywUIHITSWIZiwf1RkYRJoQGQyGo5Asrpo5WQIj/99K8lAQ6kiUVkF+SadgQQqEI+RJjWM5iJ93rGvNYW0xz0bkTQiGEfIm57PvNmiHzclHHFiV8ZmgGp4pZpKul7j6LfVfPkjjCIrmQPu/G0o8BOYBRiRpxfUxEuYBM5rfSAt5coYmNhF0hI+EQLa6N6vkcoic+ze7f4WBOmMPqF+tIc4mmCCEcKuIgRZHPsYSV+wXAxZbaPZb5Hp8brr7LlRCmxSBf4nY2MbdSFi9Oxmoi85z3ZtnsjCuEPvR3HPL5aJLpS+kxTzZcQiJiQw+yuUskpEaggtCkCMEW+RJ1LIHDFxbPiAhlt6OR+I3i9A1GBaKpyC4WXfJraF1qqXzsQlanVEn8/02UWRMq6xayslYrq60D+qw7KhQFpZea9PxGppfDyG+hAN4NZLsHmtdHeXG0ykXB0NRUMZDIfyWCfNU7FomYuwC8Q47hPjKB9wDYAGBRmasncoVuBk6WCaLI90C8nn8f5aJ7RJD/tSffjdo5UGIZCCdf7pgZb1h3xaMQk3yQ1bNIWXXNyRdrUv/0QrBL/oCQFGExnS8mUC8ES+TPpTIrNcmX8EKwQD7ISRLlVsDc2ql6IdjQ+QL9FRVkYmpWrRDikD+Per4tO7/qhBCH/P6sXD+LTlbVCCGu2qmlCXdFDLVTtULIQ3hhGIt2Hk1pl38mwwsHSpChhpSFT6BuItxOacJO1ToS4qqdN0qUU8MLAYWTeWy+FwnmOP2NahOCDVOzB8V2SoUXWiivW0oI9WVuls69EMolv8Ygk8V1/uIQIfCjE67TPCWrmBCuRBX0/EaDTJY64UYJQX4v1BoqVQhpZbJ0hNBIE/o9MENuhJAVU3MRu3+L4Ya93JqoSWSyWgzsfJ05Iey5uRoJSWSyWspwsqKEUOq5uRJCEpmslhgebpgQij03V0JIMpMVBzrqCLT8sVNehNA1hUyWSyGMonWeImyBMoVwKRJCDW2/TCOT5UoI9RSyEM9FmULYl9QRzhPZizyeQibLlRB6l7mFaSRboi42ejuHtPW/MDiD2XYmy/WcMIJiTLrnnS5gdTpdKd2TrVi+KeVMlkshbKDvHtasrzMdYB6QMJxhHGt4rwxkslwJYQoJQecINon1VJcaRrGKmazRuuqnGNIm39RE1YE8qO89OMQE1uDuFjJZWVilvDhCCLqZNXnmkDi72hmGaB5Gp5PJygL5OkLQyay1YYeam55ZZ+wD7NE4ikUnk5UV8nX9hHrN4y/lZnJn4KdB6Qaysk5+nDmhjp3OsjWJn7jqSJscAjK9woQgJuonckJ+MSFsU45OUNGbHZPWmmQ4YhD7iZCA4urjidxaathsOhYgT+QXE8Jh8gdGUOfrQObpcuU3dJza/6WEIEdC1LUmh1v4Z7FjOMOuY2mejNWBdhWqm54D8pg3ZzF9ZwChfp4rcU6FGBkvkqefCQymxPdMOlVdnCldKWhHIWtxmN/19LftH6Dw8PDw8PDw8PDw8PDwQIL4Hy9rc4a7FUYUAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "" + buildAssetsURL("photo_2022-07-14_15-.CIBk-ypB.jpg");
const _imports_4 = "" + buildAssetsURL("IMG_7449.mab56Xug.jfif");
const _imports_5 = "" + buildAssetsURL("IMG_7823.CCTgAkut.jfif");
const _imports_6 = "" + buildAssetsURL("_.D3P5tEjR.jfif");
const _imports_7 = "" + buildAssetsURL("photo_2023-01-20_09-.tZ8Wh7D2.jpg");
const _imports_8 = "" + buildAssetsURL("76636daefdd44b058addb6c6bd1ac107.CkryDl_V.jpg");
const _imports_0 = "" + buildAssetsURL("logo.C0Kok8DY.svg");
const _sfc_main$6 = {
  name: "v-btn",
  props: {
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    prependIcon: {
      type: String,
      default: ""
    },
    orange: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    grey: {
      type: Boolean,
      default: false
    },
    arrowLeft: {
      type: Boolean,
      default: false
    },
    arrowRight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        "v-btn__disabled": this.disabled,
        "v-btn__error": this.error,
        "v-btn__success": this.success,
        "v-btn__white": this.white,
        "v-btn__orange": this.orange,
        "v-btn__grey": this.grey,
        "v-btn__arrow-left": this.arrowLeft,
        "v-btn__arrow-right": this.arrowRight
      };
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["v-btn", $options.className]
  }, _attrs))}>${ssrInterpolate($props.title)}</button>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const vBtn = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      const element = (void 0).querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-5e4154aa><div class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__inner"])}" data-v-5e4154aa><div class="header__contacts" data-v-5e4154aa><div class="container" data-v-5e4154aa><div class="header__buttons" data-v-5e4154aa><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "gap": "1.5rem" })}" data-v-5e4154aa><a class="header__button-link" href="#" data-v-5e4154aa>+7 (977) 263-40-00</a><a class="header__button-link" href="mailto:" data-v-5e4154aa>yt@ya.ru</a></div><div class="header__logo" data-v-5e4154aa>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-5e4154aa${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="block-text" data-v-5e4154aa><p class="text" data-v-5e4154aa>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E</p><p class="text" data-v-5e4154aa>\u0441 10:00 \u0434\u043E 19:00</p></div></div></div></div><div class="block" style="${ssrRenderStyle({ "width": "100%" })}" data-v-5e4154aa><div class="container" data-v-5e4154aa><div class="header__menu-block" data-v-5e4154aa><nav class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__menu menu"])}" data-v-5e4154aa><ul class="menu__list" data-v-5e4154aa><!--[-->`);
      ssrRenderList(menuList, (item, index2) => {
        _push(`<li class="menu__list-item" data-v-5e4154aa>`);
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
      _push(`<!--]--></ul><div class="header__buttons" data-v-5e4154aa><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "gap": "1.5rem" })}" data-v-5e4154aa><a class="header__button-link" href="#" data-v-5e4154aa>+7 (977) 263-40-00</a><a class="header__button-link" href="mailto:" data-v-5e4154aa>yt@ya.ru</a></div><div class="block-text" data-v-5e4154aa><p class="text" data-v-5e4154aa>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E</p><p class="text" data-v-5e4154aa>\u0441 10:00 \u0434\u043E 19:00</p></div></div></nav><div class="header__logo" data-v-5e4154aa>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-5e4154aa${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(vBtn, {
        class: "header__button",
        title: "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0437\u0430\u043A\u0430\u0437",
        headerButton: true,
        orange: true
      }, null, _parent));
      _push(`<nav class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__burger"])}" data-v-5e4154aa><span data-v-5e4154aa></span></nav></div></div></div></div></header>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5e4154aa"]]);
const _sfc_main$4 = {
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
      text = text.replace(boldTextRegex, '<strong style="font-size: 2rem;">$1</strong>');
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
        _push(`<div class="${ssrRenderClass([{ active: activeIndex.value === index2 }, "question"])}" data-v-ed650631><h3 class="question__title" data-v-ed650631>${ssrInterpolate(item.name)}</h3><div class="question__content" style="${ssrRenderStyle({ maxHeight: activeIndex.value === index2 ? contentHeights.value[index2] : "0px" })}" data-v-ed650631><!--[-->`);
        ssrRenderList(item.content, (block, blockIndex) => {
          var _a, _b;
          _push(`<div class="content-block" data-v-ed650631>`);
          if (block.type === "image") {
            _push(`<div class="question__image" data-v-ed650631><img${ssrRenderAttr("src", block.src)}${ssrRenderAttr("alt", block.alt)} data-v-ed650631><p class="question__image-description" data-v-ed650631>${ssrInterpolate(block.description)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "highlighted-text") {
            _push(`<p class="highlighted-text" data-v-ed650631>${(_a = splitText(block.text)) != null ? _a : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "text") {
            _push(`<p class="question__text" data-v-ed650631>${(_b = splitText(block.text)) != null ? _b : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "list") {
            _push(`<ul class="question__list" data-v-ed650631><!--[-->`);
            ssrRenderList(block.items, (listItem, listIndex) => {
              _push(`<li class="question__list-item" data-v-ed650631>${ssrInterpolate(listItem)}</li>`);
            });
            _push(`<!--]--></ul>`);
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accordeon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Accordeon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-ed650631"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-50d80e58><div class="container" data-v-50d80e58><div class="footer__inner" data-v-50d80e58><div class="footer__top" data-v-50d80e58><div class="footer__left-column" data-v-50d80e58><div class="footer__logo" data-v-50d80e58><a href="#" data-v-50d80e58><img${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-50d80e58></a></div><nav class="footer__list-wrapper" data-v-50d80e58><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>\u0423\u0441\u043B\u0443\u0433\u0438</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>\u041E\u0442\u0437\u044B\u0432\u044B</a></li></ul><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</a></li></ul><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>SMMFlow vs \u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0430\u0439\u0442\u044B</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</a></li></ul><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a></li></ul></nav></div></div><div class="footer__bottom" data-v-50d80e58><p class="footer__text" data-v-50d80e58> \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \xA9 2016 \u2013 2024 \u0426\u0435\u043D\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u2014 \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u043E\u0439, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C\u043E\u0439 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 \u0441\u0442\u0430\u0442\u044C\u0438 437 \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u0434\u0435\u043A\u0441\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0430\u0432\u0430 \u0431\u0435\u0437 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0446\u0435\u043D\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 </p></div></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-50d80e58"]]);
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TabContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TabContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7daec7f0"]]);
const _sfc_main$1 = {
  __name: "btnFloating",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="floating-btn" data-v-3f79503a><i class="phone" data-v-3f79503a><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3f79503a><path d="M12 5V12M12 12V19M12 12H19M12 12H5" stroke="#222222" stroke-width="1.5" stroke-linecap="round" data-v-3f79503a></path></svg></i></div>`);
      if (isMenuVisible.value) {
        _push(`<div class="floating-btn-menu" data-v-3f79503a><a class="floating-btn-item whatsapp-btn" href="https://wa.me/+1234567890" target="_blank" aria-label="\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 WhatsApp" data-v-3f79503a><i class="fa fa-phone" data-v-3f79503a><svg role="presentation" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3f79503a><path d="M25 50a25 25 0 100-50 25 25 0 000 50z" fill="#fff" data-v-3f79503a></path><path d="M26.1 12a12.1 12.1 0 00-10.25 18.53l.29.46-1.22 4.46 4.57-1.2.45.27a12.1 12.1 0 106.16-22.51V12zm6.79 17.22c-.3.85-1.72 1.62-2.41 1.72-.62.1-1.4.14-2.25-.14-.7-.22-1.37-.47-2.03-.77-3.59-1.57-5.93-5.24-6.1-5.48-.19-.24-1.47-1.97-1.47-3.76 0-1.79.93-2.67 1.25-3.03.33-.37.72-.46.96-.46.23 0 .47 0 .68.02.22 0 .52-.09.8.62l1.1 2.7c.1.18.16.4.04.64s-.18.39-.36.6c-.18.21-.38.47-.54.64-.18.18-.36.38-.15.74.2.36.92 1.55 1.98 2.52 1.37 1.23 2.52 1.62 2.88 1.8.35.18.56.15.77-.1.2-.23.9-1.05 1.13-1.42.24-.36.48-.3.8-.18.33.12 2.09 1 2.44 1.18.36.19.6.28.69.43.09.15.09.88-.21 1.73z" fill="#27D061" data-v-3f79503a></path><path d="M25 0a25 25 0 100 50 25 25 0 000-50zm1.03 38.37c-2.42 0-4.8-.6-6.9-1.76l-7.67 2 2.05-7.45a14.3 14.3 0 01-1.93-7.2c0-7.92 6.49-14.38 14.45-14.38a14.4 14.4 0 110 28.79z" fill="#27D061" data-v-3f79503a></path></svg></i></a><a class="floating-btn-item phone-btn" href="tel:+1234567890" target="_blank" aria-label="\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C" data-v-3f79503a><i class="fa fa-whatsapp" data-v-3f79503a><svg class="t-sociallinks__svg" role="presentation" width="50px" height="50px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3f79503a><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50.0089 29H51.618C56.4915 29.0061 61.1633 30.9461 64.6073 34.3938C68.0512 37.8415 69.9856 42.5151 69.9856 47.3879V48.9968C69.9338 49.5699 69.6689 50.1027 69.2433 50.49C68.8177 50.8772 68.2623 51.0908 67.6868 51.0884H67.5029C66.8966 51.0358 66.3359 50.745 65.9437 50.2796C65.5516 49.8143 65.36 49.2124 65.4109 48.6061V47.3879C65.4109 43.7303 63.9578 40.2225 61.3711 37.6362C58.7844 35.0499 55.2761 33.597 51.618 33.597H50.3997C49.79 33.6488 49.1847 33.4563 48.7169 33.0619C48.2492 32.6675 47.9573 32.1035 47.9054 31.4939C47.8536 30.8843 48.0461 30.279 48.4406 29.8114C48.835 29.3437 49.3992 29.0518 50.0089 29ZM56.889 49.0132C56.4579 48.5821 56.2157 47.9975 56.2157 47.3879C56.2157 46.1687 55.7313 44.9994 54.869 44.1373C54.0068 43.2752 52.8374 42.7909 51.618 42.7909C51.0083 42.7909 50.4236 42.5488 49.9925 42.1177C49.5614 41.6867 49.3192 41.102 49.3192 40.4924C49.3192 39.8828 49.5614 39.2982 49.9925 38.8672C50.4236 38.4361 51.0083 38.1939 51.618 38.1939C54.0568 38.1939 56.3956 39.1626 58.1201 40.8868C59.8445 42.611 60.8133 44.9495 60.8133 47.3879C60.8133 47.9975 60.5711 48.5821 60.14 49.0132C59.7089 49.4442 59.1242 49.6864 58.5145 49.6864C57.9048 49.6864 57.3201 49.4442 56.889 49.0132ZM66.4011 69.0663L66.401 69.0846C66.3999 69.5725 66.2967 70.0547 66.0981 70.5003C65.8998 70.9451 65.611 71.3435 65.2499 71.67C64.8674 72.0182 64.4123 72.2771 63.9176 72.428C63.4516 72.5702 62.9613 72.6132 62.4782 72.5546C58.2475 72.53 53.4102 70.5344 49.1802 68.1761C44.8871 65.7827 41.0444 62.915 38.8019 60.9903L38.7681 60.9613L38.7367 60.9299C32.3303 54.5198 28.2175 46.1735 27.0362 37.186C26.9623 36.6765 27.0018 36.157 27.1519 35.6645C27.3027 35.1695 27.5615 34.7142 27.9094 34.3314C28.2397 33.9658 28.6436 33.6742 29.0944 33.4757C29.5447 33.2775 30.0316 33.1766 30.5234 33.1796H37.4967C38.299 33.1636 39.0826 33.4244 39.7156 33.9184C40.3527 34.4156 40.7979 35.1184 40.9754 35.9071L41.0038 36.0335V36.1631C41.0038 36.4901 41.0787 36.795 41.1847 37.2268C41.2275 37.4012 41.2755 37.5965 41.3256 37.8221L41.326 37.8238C41.583 38.9896 41.925 40.1351 42.3491 41.251L42.7322 42.259L38.4899 44.26L38.4846 44.2625C38.204 44.3914 37.986 44.6263 37.8784 44.9157L37.8716 44.934L37.8642 44.952C37.7476 45.236 37.7476 45.5545 37.8642 45.8385L37.9144 45.9608L37.9359 46.0912C38.0802 46.9648 38.5603 48.0981 39.4062 49.4169C40.243 50.7215 41.3964 52.1437 42.808 53.5872C45.6206 56.4634 49.3981 59.3625 53.5798 61.5387C53.8533 61.6395 54.1552 61.6343 54.4257 61.5231L54.4437 61.5157L54.462 61.5089C54.7501 61.4016 54.9842 61.1848 55.1133 60.9057L55.1148 60.9023L57.0232 56.6591L58.0397 57.03C59.1934 57.4509 60.3737 57.7947 61.5729 58.0592L61.5785 58.0605L61.5841 58.0618C62.152 58.1929 62.7727 58.3042 63.3802 58.3942L63.4231 58.4006L63.4654 58.4101C64.2537 58.5877 64.956 59.0332 65.453 59.6706C65.9429 60.2991 66.2033 61.0758 66.1916 61.8721L66.4011 69.0663Z" fill="#000" data-v-3f79503a></path></svg></i></a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btnFloating.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const btnFloating = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3f79503a"]]);
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
        title: "\u041F\u043B\u0435\u043D\u043A\u0430 \u0434\u043B\u044F \u043E\u043A\u043E\u043D \u041F\u0412\u0425 700 \u043C\u0438\u043A\u0440\u043E\u043D \u042E.\u041A\u043E\u0440\u0435\u044F",
        details: [
          "\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0438 700 \u043C\u043A\u043C",
          "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C",
          "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043B\u0430\u0441\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430: 37-40%, 55PHR"
        ],
        description: ""
      },
      {
        img: "https://optim.tildacdn.com/tild6636-3435-4834-b235-656137366362/-/resize/560x430/-/format/webp/IMG_4801.JPG",
        title: "\u041F\u043B\u0435\u043D\u043A\u0430 \u0434\u043B\u044F \u043E\u043A\u043E\u043D \u041F\u0412\u0425 700 \u043C\u0438\u043A\u0440\u043E\u043D \u041A\u0438\u0442\u0430\u0439",
        details: [
          "\u0422\u043E\u043B\u0449\u0438\u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0438 700 \u043C\u043A\u043C",
          "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C",
          "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043B\u0430\u0441\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430: 37-40%, 55PHR"
        ],
        description: "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0434\u043B\u044F \u0441\u0440\u0435\u0434\u043D\u0438\u0445 \u0438 \u043A\u0440\u0443\u043F\u043D\u043E\u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0439. \u041F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u0430\u044F \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u0440\u0430\u0437\u0440\u044B\u0432. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0448\u0438\u0440\u043E\u043A\u0438\u0435 \u043F\u0440\u043E\u0435\u043C\u044B."
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
        items: [
          "\u0417\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u043C\u043E\u043D\u0442\u0430\u0436\u043E\u043C",
          "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u044B 40% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0437\u0430\u043A\u0430\u0437\u0430",
          "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 20 \u043C2",
          "\u041D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0434\u043E 100 \u043A\u043C \u043E\u0442 \u041C\u041A\u0410\u0414.",
          "(\u041F\u0440\u0438 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0434\u0430\u043B\u0435\u0435 100 \u043A\u043C \u043E\u0442 \u041C\u041A\u0410\u0414, \u0446\u0435\u043D\u0430 \u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C)"
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
    name: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0437\u0430\u043C\u0435\u0440\u0430",
    content: [
      {
        type: "list",
        items: [
          "\u0417\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0441 \u043C\u043E\u043D\u0442\u0430\u0436\u043E\u043C",
          "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u044B 40% \u043E\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0437\u0430\u043A\u0430\u0437\u0430",
          "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 20 \u043C2",
          "\u041D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0434\u043E 100 \u043A\u043C \u043E\u0442 \u041C\u041A\u0410\u0414.",
          "(\u041F\u0440\u0438 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0434\u0430\u043B\u0435\u0435 100 \u043A\u043C \u043E\u0442 \u041C\u041A\u0410\u0414, \u0446\u0435\u043D\u0430 \u043E\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C)"
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
  }
];
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
    const isMobile = ref(false);
    const currentStep = ref(1);
    const answers = ref({
      area: 1,
      doorways: null,
      mosquito: null,
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
      "mosquito",
      "mount",
      "configuration",
      "installation",
      "schedule",
      "contact"
    ];
    const sliderProgressStyle = computed(() => ({
      "--slider-progress": answers.value.area || 0
    }));
    const canProceed = computed(() => {
      if (currentStep.value < 8) {
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
    const mosquitoOptions = [
      { value: "yes", text: "\u0414\u0430" },
      { value: "no", text: "\u041D\u0435\u0442" },
      { value: "unknown", text: "\u041F\u043E\u043A\u0430 \u043D\u0435 \u0437\u043D\u0430\u044E" }
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
        icon: "/img/icons8-\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F-\u0437\u043E\u043D\u0430-\u0434\u043B\u044F-\u0434\u0435\u0442\u0435\u0439-96.png"
        // Путь к изображению иконки
      },
      {
        title: "\u0414\u0415\u0428\u0415\u0412\u041B\u0415 \u041F\u041B\u0410\u0421\u0422\u0418\u041A\u041E\u0412\u042B\u0425 \u041E\u041A\u041E\u041D \u0412 \u041D\u0415\u0421\u041A\u041E\u041B\u042C\u041A\u041E \u0420\u0410\u0417",
        text: `\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0432 2 \u0440\u0430\u0437\u0430 \u043D\u0438\u0436\u0435`,
        icon: "/img/icons8-\u043A\u043E\u0448\u0435\u043B\u0435\u043A-96.png"
      },
      {
        title: "\u042D\u0421\u0422\u0415\u0422\u0418\u0427\u041D\u042B\u0415 \u0418 \u041F\u0420\u0418\u0412\u041B\u0415\u041A\u0410\u0422\u0415\u041B\u042C\u041D\u042B\u0415",
        text: `\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u043E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C\u043E\u0441\u0442\u044C\u044E`,
        icon: "/img/icons8-\u0441\u0435\u0440\u0434\u0446\u0435-96.png"
      },
      {
        title: "\u041D\u0415 \u0416\u0415\u041B\u0422\u0415\u0415\u0422 \u041D\u0410 \u0421\u041E\u041B\u041D\u0426\u0415",
        text: `\u0417\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0434\u043E 95% \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u0430`,
        icon: "/img/icons8-\u0441\u043E\u043B\u043D\u0446\u0435-96.png"
      },
      {
        title: "\u0421\u0420\u041E\u041A \u0421\u041B\u0423\u0416\u0411\u042B \u0411\u041E\u041B\u0415\u0415 10 \u041B\u0415\u0422",
        text: `\u0420\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u0438`,
        icon: "/img/icons8-\u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C-961.png"
      },
      {
        title: "\u041D\u0410\u0414\u0415\u0416\u041D\u0410\u042F \u0417\u0410\u0412\u0415\u0421\u0410",
        text: `\u041D\u0435 \u0434\u0435\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u043F\u0440\u043E\u0447\u043D\u044B\u0435, \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u0438 \u043C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u0438\u0435 `,
        icon: "/img/icons8-\u0437\u0430\u0449\u0438\u0442\u0430-96.png"
      }
    ];
    const services = [
      {
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u042D\u043A\u043E\u043D\u043E\u043C\xBB",
        image: "/img/IMG_5912.jfif",
        // image: new URL("~/assets/img/IMG_5912.jfif", globalThis._importMeta_.url).href,
        description: "\u043F\u043B\u0435\u043D\u043A\u0430 \u042E. \u041A\u043E\u0440\u0435\u044F 700 \u043C\u043A\u043C, \u043C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F \u0434\u043E -30\xB0C, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 \u0431\u0435\u0437 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B",
        prices: ["\u043E\u0442 800 \u0440\u0443\u0431.", "\u043E\u0442 750 \u0440\u0443\u0431.", "\u043E\u0442 700 \u0440\u0443\u0431."]
      },
      {
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\xBB",
        image: "/img/IMG_5910.jfif",
        description: "\u043F\u043B\u0435\u043D\u043A\u0430 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F 900 \u043C\u043A\u043C, \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u043E\u0441\u0442\u044C \u043A \u0443\u043B\u044C\u0442\u0440\u0430\u0444\u0438\u043E\u043B\u0435\u0442\u0443, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 \u0441 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u043E\u0439",
        prices: ["\u043E\u0442 1200 \u0440\u0443\u0431.", "\u043E\u0442 1100 \u0440\u0443\u0431.", "\u043E\u0442 1000 \u0440\u0443\u0431."]
      },
      {
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u041F\u0440\u0435\u043C\u0438\u0443\u043C\xBB",
        image: "/img/IMG_5909.jfif",
        description: "\u043F\u043B\u0435\u043D\u043A\u0430 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F 1200 \u043C\u043A\u043C, \u043C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F \u0434\u043E -40\xB0C, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 \u0441 \u0443\u0441\u0438\u043B\u0435\u043D\u043D\u043E\u0439 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u043E\u0439",
        prices: ["\u043E\u0442 1500 \u0440\u0443\u0431.", "\u043E\u0442 1400 \u0440\u0443\u0431.", "\u043E\u0442 1300 \u0440\u0443\u0431."]
      },
      {
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u041B\u044E\u043A\u0441\xBB",
        image: "/img/IMG_5872.jfif",
        description: "\u043F\u043B\u0435\u043D\u043A\u0430 \u0424\u0440\u0430\u043D\u0446\u0438\u044F 1500 \u043C\u043A\u043C, \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0430\u044F \u043A \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F\u043C, \u0434\u0432\u043E\u0439\u043D\u0430\u044F \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425",
        prices: ["\u043E\u0442 2000 \u0440\u0443\u0431.", "\u043E\u0442 1800 \u0440\u0443\u0431.", "\u043E\u0442 1600 \u0440\u0443\u0431."]
      },
      {
        title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u041B\u044E\u043A\u0441\xBB",
        image: "/img/IMG_5911.jfif",
        description: " \u043F\u043B\u0435\u043D\u043A\u0430 \u0424\u0440\u0430\u043D\u0446\u0438\u044F 1500 \u043C\u043A\u043C, \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u0430\u044F \u043A \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F\u043C, \u0434\u0432\u043E\u0439\u043D\u0430\u044F \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425",
        prices: ["\u043E\u0442 2000 \u0440\u0443\u0431.", "\u043E\u0442 1800 \u0440\u0443\u0431.", "\u043E\u0442 1600 \u0440\u0443\u0431."]
      }
    ];
    const tabs = [
      { name: "tape", label: "\u041F\u043B\u0435\u043D\u043A\u0430" },
      { name: "vue", label: "\u041E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430" },
      { name: "grid", label: "\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430" },
      { name: "accessories", label: "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430" }
    ];
    const selectedTab = ref("tape");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<main class="main" data-v-d20a0538><section class="hero" style="${ssrRenderStyle({ "position": "relative" })}" data-v-d20a0538><div class="hero__image" data-v-d20a0538></div><div class="container" data-v-d20a0538><div class="hero__inner" data-v-d20a0538><div class="hero__content" data-v-d20a0538><h1 class="hero__title" data-v-d20a0538> \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u0437 <span class="orange" data-v-d20a0538>\u0433\u0438\u0431\u043A\u043E\u0433\u043E \u041F\u0412\u0425</span></h1><h2 class="hero__subtitle" data-v-d20a0538> \u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0430: \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u0438\u0437 \u0433\u0438\u0431\u043A\u043E\u0433\u043E \u041F\u0412\u0425 \u043E\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u2014 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0434\u043B\u044F \u0432\u0435\u0440\u0430\u043D\u0434, \u0431\u0435\u0441\u0435\u0434\u043E\u043A \u0438 \u0442\u0435\u0440\u0440\u0430\u0441, \u0437\u0430\u0449\u0438\u0449\u0430\u044E\u0449\u0438\u0445 \u043E\u0442 \u0432\u0435\u0442\u0440\u0430, \u0434\u043E\u0436\u0434\u044F \u0438 \u0445\u043E\u043B\u043E\u0434\u0430. </h2><div class="hero__buttons" data-v-d20a0538>`);
      _push(ssrRenderComponent(vBtn, {
        class: "hero__button",
        title: "\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438",
        disabled: false,
        success: true,
        orange: true
      }, null, _parent));
      _push(`</div></div></div></div></section><div class="feedback-customer" data-v-d20a0538><div class="container" data-v-d20a0538><div class="feedback-customer__inner" data-v-d20a0538><div class="feedback-customer__items" data-v-d20a0538><div class="feedback" data-v-d20a0538><div class="feedback__item" data-v-d20a0538><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-d20a0538><img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-d20a0538><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute" })}" class="rotating" data-v-d20a0538><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-d20a0538></circle><defs data-v-d20a0538><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-d20a0538><stop stop-color="#82dbf7" data-v-d20a0538></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-d20a0538></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-d20a0538>\u041D\u0430\u0448\u0438 \u0440\u0430\u0431\u043E\u0442\u044B</h2></div></div><div class="feedback" data-v-d20a0538><div class="feedback__item" data-v-d20a0538><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-d20a0538><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-d20a0538><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute", "transform": "rotate(125deg)" })}" class="rotating" data-v-d20a0538><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-d20a0538></circle><defs data-v-d20a0538><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-d20a0538><stop stop-color="#82dbf7" data-v-d20a0538></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-d20a0538></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-d20a0538>\u0423\u0441\u043B\u0443\u0433\u0438</h2></div></div><div class="feedback" data-v-d20a0538><div class="feedback__item" data-v-d20a0538><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-d20a0538><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-d20a0538><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute", "transform": "rotate(220deg)" })}" class="rotating" data-v-d20a0538><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-d20a0538></circle><defs data-v-d20a0538><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-d20a0538><stop stop-color="#82dbf7" data-v-d20a0538></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-d20a0538></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-d20a0538>\u041D\u0430\u0448\u0438 \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</h2></div></div></div></div></div></div><section class="recomendation" id="advantages" data-v-d20a0538><div class="container" data-v-d20a0538><div class="recomendation__inner" data-v-d20a0538><h2 class="recomendation__title" data-v-d20a0538> \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u0438\u0437 <span class="orange" data-v-d20a0538> \u041F\u0412\u0425</span></h2><div class="recomendation__block-image" data-v-d20a0538><img${ssrRenderAttr("src", _imports_3)} class="recomendation__block-top-image" alt="" data-v-d20a0538><img${ssrRenderAttr("src", _imports_4)} class="recomendation__block-bottom-images" alt="" data-v-d20a0538><img${ssrRenderAttr("src", _imports_5)} class="recomendation__block-bottom-images" alt="" data-v-d20a0538><img${ssrRenderAttr("src", _imports_6)} class="recomendation__block-bottom-images" alt="" data-v-d20a0538></div><div class="recomendation__block-text" data-v-d20a0538><p data-v-d20a0538> \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u2013 \u044D\u0442\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u0435 \u0438\u0437 \u043F\u043B\u043E\u0442\u043D\u043E\u0439 \u041F\u0412\u0425 \u043F\u043B\u0435\u043D\u043A\u0438, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043F\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0443 \u0430\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043D\u0442\u043E\u0432\u043E\u0439 \u0442\u043A\u0430\u043D\u044C\u044E \u043E\u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u043E\u0447\u043D\u043E\u0441\u0442\u0438. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043B\u044E\u0431\u044B\u0445 \u043F\u043E\u0433\u043E\u0434\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0438 \u043D\u0430\u0441\u0435\u043A\u043E\u043C\u044B\u0445! </p><p data-v-d20a0538> \u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u043A\u043D\u0430 \u0438\u0437 \u041F\u0412\u0425 \u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0441\u043F\u0440\u043E\u0441\u043E\u043C \u0441\u0440\u0435\u0434\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0431\u0435\u0441\u0435\u0434\u043E\u043A, \u0432\u0435\u0440\u0430\u043D\u0434 \u0438 \u0442\u0435\u0440\u0440\u0430\u0441. \u0420\u0443\u043B\u043E\u043D\u043D\u044B\u0435 \u0448\u0442\u043E\u0440\u044B \u043C\u043D\u043E\u0433\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B \u0438 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E \u0432\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u044D\u043A\u0441\u0442\u0435\u0440\u044C\u0435\u0440 \u2013 \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u044E\u0442 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u0438\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u0432\u0435\u0440\u0430\u043D\u0434\u0430\u0445 \u0438 \u0431\u0435\u0441\u0435\u0434\u043A\u0430\u0445. </p></div><ul class="recomendation__list" data-v-d20a0538><li class="recomendation__list-item" data-v-d20a0538> \u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425 \u043F\u043E\u0441\u043B\u0435 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043D\u0430 \u043F\u0440\u043E\u0435\u043C \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0435\u0442 \u0432\u0438\u0434 \u0441\u0442\u0435\u043A\u043B\u0430 \u0438 \u0438\u043C\u0435\u0435\u0442 \u0441\u0432\u0435\u0442\u043E\u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u0431\u043E\u043B\u0435\u0435 95% </li><li class="recomendation__list-item" data-v-d20a0538> \u0422\u0435\u043D\u0442\u043E\u0432\u0430\u044F \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u0432\u043E\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0441\u0435\u0437\u043E\u043D\u043D\u044B\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u043E\u0432 \u043D\u0430 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0435 \u043C\u044F\u0433\u043A\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E, \u0442\u0435\u043C \u0441\u0430\u043C\u044B\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u044F \u0434\u043E\u043B\u0433\u0443\u044E \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u0438\u0437\u0434\u0435\u043B\u0438\u0439. </li><li class="recomendation__list-item" data-v-d20a0538> \u041C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430 \u043B\u0435\u0433\u043A\u043E \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C \u0438 \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043E\u043A \u043F\u0440\u043E\u0435\u043C\u0430 \u043F\u043E\u0434 \u0438\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443. </li><li class="recomendation__list-item" data-v-d20a0538> \u041B\u0435\u0433\u043A\u043E \u0441\u043A\u0440\u0443\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0440\u0443\u043B\u043E\u043D \u0432 \u0445\u043E\u0440\u043E\u0448\u0443\u044E \u043F\u043E\u0433\u043E\u0434\u0443 \u0438 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u0439 \u0432\u0438\u0434 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043E\u043A. </li></ul><div class="recomendation__block-items" data-v-d20a0538><!--[-->`);
      ssrRenderList(recomendationItem, (item, index2) => {
        _push(`<div class="recomendation__item" data-v-d20a0538><div class="recomendation__item-icon" data-v-d20a0538><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} data-v-d20a0538></div><h3 class="recomendation__item-title" data-v-d20a0538>${ssrInterpolate(item.title)}</h3><p class="recomendation__item-text" data-v-d20a0538>${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><div class="price" id="price" data-v-d20a0538><div class="container" data-v-d20a0538><div class="price__inner" data-v-d20a0538><h2 class="price__title" data-v-d20a0538> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C <span class="orange" data-v-d20a0538>\u041C\u044F\u0433\u043A\u0438\u0445 \u041E\u043A\u043E\u043D</span> \u0432 \u0433\u043E\u0442\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438 </h2><div class="price-table" data-v-d20a0538><div class="price-table__row price-table__header" data-v-d20a0538><div class="header__cell" data-v-d20a0538>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</div><div class="header__cell" data-v-d20a0538>\u0414\u043E 15 \u043C\xB2</div><div class="header__cell" data-v-d20a0538>\u041E\u0442 15 \u043C\xB2 \u0434\u043E 50 \u043C\xB2</div><div class="header__cell" data-v-d20a0538>\u0411\u043E\u043B\u0435\u0435 50 \u043C\xB2</div></div><!--[-->`);
      ssrRenderList(services, (item, index2) => {
        _push(`<div class="price-table__row" data-v-d20a0538><div class="price-table__cell" data-v-d20a0538><div class="service-info" data-v-d20a0538><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.description)} class="service-info__image" data-v-d20a0538><div class="service-info__block" data-v-d20a0538><h3 class="service-info__title" data-v-d20a0538>${ssrInterpolate(item.title)}</h3><p class="service-info__description" data-v-d20a0538>${ssrInterpolate(item.description)}</p></div></div></div><div class="price-table__cell" data-v-d20a0538>`);
        if (isMobile.value) {
          _push(`<span data-v-d20a0538>${ssrInterpolate(item.prices[0])} <span class="price-table__cell-text-gray" data-v-d20a0538>\u0414\u043E 15 \u043C\xB2</span></span>`);
        } else {
          _push(`<span data-v-d20a0538>${ssrInterpolate(item.prices[0])}</span>`);
        }
        _push(`</div><div class="price-table__cell" data-v-d20a0538>`);
        if (isMobile.value) {
          _push(`<span data-v-d20a0538>${ssrInterpolate(item.prices[1])} <span class="price-table__cell-text-gray" data-v-d20a0538>\u041E\u0442 15 \u043C\xB2 \u0434\u043E 50 \u043C\xB2</span></span>`);
        } else {
          _push(`<span data-v-d20a0538>${ssrInterpolate(item.prices[1])}</span>`);
        }
        _push(`</div><div class="price-table__cell" data-v-d20a0538>`);
        if (isMobile.value) {
          _push(`<span data-v-d20a0538>${ssrInterpolate(item.prices[2])} <span class="price-table__cell-text-gray" data-v-d20a0538>\u0411\u043E\u043B\u0435\u0435 50 \u043C\xB2</span></span>`);
        } else {
          _push(`<span data-v-d20a0538>${ssrInterpolate(item.prices[2])}</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mosquito-table" data-v-d20a0538><div class="container" data-v-d20a0538><div class="mosquito-table__inner" data-v-d20a0538><h2 class="price__title" data-v-d20a0538> \u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F <span class="orange" data-v-d20a0538>\u0421\u0435\u0442\u043A\u0430</span></h2><div class="price-table" data-v-d20a0538><div class="price-table__row price-table__header" data-v-d20a0538><div class="header__cell" data-v-d20a0538>\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</div><div class="header__cell" data-v-d20a0538>\u0414\u043E 15 \u043C\xB2</div><div class="header__cell" data-v-d20a0538>\u041E\u0442 15 \u043C\xB2 \u0434\u043E 50 \u043C\xB2</div><div class="header__cell" data-v-d20a0538>\u0411\u043E\u043B\u0435\u0435 50 \u043C\xB2</div></div><div class="price-table__row" data-v-d20a0538><div class="price-table__cell" data-v-d20a0538><div class="service-info" data-v-d20a0538><img${ssrRenderAttr("src", _imports_7)} alt="\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430\xBB" class="service-info__image" data-v-d20a0538><div class="service-info__content" data-v-d20a0538><h3 class="service-info__title" data-v-d20a0538> \u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \xAB\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430\xBB </h3><p class="service-info__description" data-v-d20a0538> \u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0421\u0435\u0442\u043A\u0430 \u042E. \u041A\u043E\u0440\u0435\u044F \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C 250 \u0433.\u043C \u0441 \u0430\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043D\u0438\u0442\u044C\u044E, \u043C\u043E\u0440\u043E\u0437\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F \u0434\u043E -35\xB0C, \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430 \u041F\u0412\u0425 \u0438\u043B\u0438 \u041E\u043A\u0441\u0444\u043E\u0440\u0434, (\u0431\u0435\u0437 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u044B) </p></div></div></div><div class="price-table__cell" data-v-d20a0538>`);
      if (isMobile.value) {
        _push(`<span data-v-d20a0538> \u043E\u0442 1200 \u0440\u0443\u0431. <span class="price-table__cell-text-gray" data-v-d20a0538>\u0414\u043E 15 \u043C\xB2</span></span>`);
      } else {
        _push(`<span data-v-d20a0538>\u043E\u0442 1200 \u0440\u0443\u0431.</span>`);
      }
      _push(`</div><div class="price-table__cell" data-v-d20a0538>`);
      if (isMobile.value) {
        _push(`<span data-v-d20a0538> \u043E\u0442 1100 \u0440\u0443\u0431. <span class="price-table__cell-text-gray" data-v-d20a0538>\u041E\u0442 15 \u043C\xB2 \u0434\u043E 50 \u043C\xB2</span></span>`);
      } else {
        _push(`<span data-v-d20a0538>\u043E\u0442 1100 \u0440\u0443\u0431.</span>`);
      }
      _push(`</div><div class="price-table__cell" data-v-d20a0538>`);
      if (isMobile.value) {
        _push(`<span data-v-d20a0538> \u043E\u0442 1000 \u0440\u0443\u0431. <span class="price-table__cell-text-gray" data-v-d20a0538>\u0411\u043E\u043B\u0435\u0435 50 \u043C\xB2</span></span>`);
      } else {
        _push(`<span data-v-d20a0538>\u043E\u0442 1000 \u0440\u0443\u0431.</span>`);
      }
      _push(`</div></div></div></div></div></div><div class="estimates" data-v-d20a0538><div class="estimates__inner" data-v-d20a0538><div class="estimates-form-wrapper" data-v-d20a0538><div class="estimates__image" data-v-d20a0538></div><div class="div" data-v-d20a0538><h2 class="price__title" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-d20a0538> \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043C\u0435\u0442\u0443 </h2><p class="estimates__subtitle" data-v-d20a0538> \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0438 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u044C, \u043B\u0438\u0431\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u043C\u0435\u0442\u0443 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u043C, \u0430 \u043C\u044B \u0443\u0436\u0435 \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430 </p></div></div><div class="quiz" data-v-d20a0538><div class="quiz__inner" data-v-d20a0538><div class="quiz__progress-container" data-v-d20a0538><div class="quiz__progress-percent" data-v-d20a0538>${ssrInterpolate((currentStep.value / steps.length * 100).toFixed(0))}% </div><div class="quiz__progress-bar" data-v-d20a0538><div class="quiz__progress-bar-fill" style="${ssrRenderStyle({ width: `${currentStep.value / steps.length * 100}%` })}" data-v-d20a0538></div></div></div><div class="quiz__progress-question-step" data-v-d20a0538><p data-v-d20a0538>\u0412\u043E\u043F\u0440\u043E\u0441 ${ssrInterpolate(currentStep.value)}</p></div>`);
      if (currentStep.value === 1) {
        _push(`<div class="quiz__step" data-v-d20a0538><h2 class="quiz__title" data-v-d20a0538> \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u0443\u044E \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u043C\u044F\u0433\u043A\u043E\u0433\u043E \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F \u0432 \u043C\xB2 </h2><div class="quiz__slider-container" data-v-d20a0538><div class="quiz__slider-wrapper" style="${ssrRenderStyle(sliderProgressStyle.value)}" data-v-d20a0538><input type="range" min="1" max="100"${ssrRenderAttr("value", answers.value.area)} class="quiz__slider" data-v-d20a0538></div><p class="quiz__slider-value" data-v-d20a0538>${ssrInterpolate(answers.value.area)} \u043C\xB2</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 2) {
        _push(`<div class="quiz__step" data-v-d20a0538><h2 class="quiz__title" data-v-d20a0538>\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043C\u043E\u0432?</h2><div class="quiz__options" data-v-d20a0538><!--[-->`);
        ssrRenderList(doorOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass(["quiz__option", { "quiz__option--selected": ((_a = answers.value.doorways) == null ? void 0 : _a.id) === item.id }])}" data-v-d20a0538><img class="quiz__option-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.text)} data-v-d20a0538><p class="quiz__option-text" data-v-d20a0538>${ssrInterpolate(item.text)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 3) {
        _push(`<div class="quiz__step" data-v-d20a0538><h2 class="quiz__title" data-v-d20a0538>\u041F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043B\u0438 \u043C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430?</h2><div class="quiz__radio-group" data-v-d20a0538><!--[-->`);
        ssrRenderList(mosquitoOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-d20a0538><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.mosquito, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-d20a0538><span class="quiz__radio-span" data-v-d20a0538><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d20a0538><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-d20a0538></path></svg></span><p class="text" data-v-d20a0538>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 4) {
        _push(`<div class="quiz__step" data-v-d20a0538><h2 class="quiz__title" data-v-d20a0538> \u041D\u0430 \u0447\u0442\u043E \u0431\u0443\u0434\u0443\u0442 \u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430? </h2><div class="quiz__radio-group" data-v-d20a0538><!--[-->`);
        ssrRenderList(mountOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-d20a0538><input type="radio"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.mount, option)) ? " checked" : ""} class="quiz__radio-input" data-v-d20a0538><span class="quiz__radio-span" data-v-d20a0538><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d20a0538><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-d20a0538></path></svg></span><p data-v-d20a0538>${ssrInterpolate(option)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 5) {
        _push(`<div class="quiz__step" data-v-d20a0538><h2 class="quiz__title" data-v-d20a0538>\u041A\u0430\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430?</h2><div class="quiz__equipments" data-v-d20a0538><!--[-->`);
        ssrRenderList(configurationOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass([
            "quiz__option quiz__equipment-item",
            {
              "quiz__option--selected": ((_a = answers.value.configuration) == null ? void 0 : _a.id) === item.id
            }
          ])}" data-v-d20a0538><img class="quiz__equipment-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-d20a0538><div class="quiz__equipment-block-text" data-v-d20a0538><p class="quiz__equipment-text" data-v-d20a0538>${ssrInterpolate(item.name)}</p><h4 class="quiz__equipment-title" data-v-d20a0538>${ssrInterpolate(item.title)}</h4></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 6) {
        _push(`<div class="quiz__step" data-v-d20a0538><h2 class="quiz__title" data-v-d20a0538>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0430\u043C\u0438 \u0438\u043B\u0438 \u043D\u0443\u0436\u0435\u043D \u043C\u043E\u043D\u0442\u0430\u0436?</h2><div class="quiz__radio-group" data-v-d20a0538><!--[-->`);
        ssrRenderList(installOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-d20a0538><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.installation, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-d20a0538><span class="quiz__radio-span" data-v-d20a0538><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d20a0538><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-d20a0538></path></svg></span><p class="text" data-v-d20a0538>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 7) {
        _push(`<div class="quiz__step" data-v-d20a0538><h2 class="quiz__title" data-v-d20a0538> \u041A\u043E\u0433\u0434\u0430 \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u043C\u044F\u0433\u043A\u0438\u0435 \u043E\u043A\u043D\u0430? </h2><div class="quiz__radio-group" data-v-d20a0538><!--[-->`);
        ssrRenderList(scheduleOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-d20a0538><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.schedule, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-d20a0538><span class="quiz__radio-span" data-v-d20a0538><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d20a0538><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-d20a0538></path></svg></span><p data-v-d20a0538>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 8) {
        _push(`<div class="quiz__step" data-v-d20a0538><p class="quiz__title" data-v-d20a0538> \u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u0441 \u0432\u0430\u043C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F </p><div class="contact-form" data-v-d20a0538><form class="contact-form__form" data-v-d20a0538><div class="contact-form__form-field-block" data-v-d20a0538><div class="contact-form__field" data-v-d20a0538><label class="contact-form__label" for="name" data-v-d20a0538>\u0418\u043C\u044F</label><input class="contact-form__input" type="text" id="name"${ssrRenderAttr("value", contactInfo.value.name)} required data-v-d20a0538></div><div class="contact-form__field" data-v-d20a0538><label class="contact-form__label" for="phone" data-v-d20a0538>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label><input class="contact-form__input" type="text" id="phone"${ssrRenderAttr("value", contactInfo.value.phone)} placeholder="+7 (___) ___-__-__" required data-v-d20a0538></div></div><div class="contact-form__field" data-v-d20a0538><label class="contact-form__label" for="message" data-v-d20a0538>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439</label><textarea class="contact-form__input contact-form__input-textarea" id="message" style="${ssrRenderStyle({ "width": "100%" })}" data-v-d20a0538>${ssrInterpolate(contactInfo.value.message)}</textarea></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="quiz__controls" data-v-d20a0538><button class="quiz__button quiz__button--prev"${ssrIncludeBooleanAttr(currentStep.value === 1) ? " disabled" : ""} data-v-d20a0538> \u041D\u0430\u0437\u0430\u0434 </button><button class="quiz__button quiz__button--next"${ssrIncludeBooleanAttr(!canProceed.value) ? " disabled" : ""} data-v-d20a0538>${ssrInterpolate(currentStep.value < 8 ? "\u0414\u0430\u043B\u0435\u0435" : "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")}</button></div></div></div></div></div><section class="why" id="why" data-v-d20a0538><h2 class="why__title" data-v-d20a0538>\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 <span class="orange" data-v-d20a0538>\u043D\u0430\u0441?</span></h2><div class="why__inner" data-v-d20a0538>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section><section class="material" id="material" data-v-d20a0538><div class="container" data-v-d20a0538><div class="material__inner" data-v-d20a0538><h2 class="material__title" data-v-d20a0538><span class="orange" style="${ssrRenderStyle({ "margin-left": "0" })}" data-v-d20a0538>\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B,</span> \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0438 \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430</h2><p class="material__block-text" data-v-d20a0538>\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u041C\u044F\u0433\u043A\u0438\u0435 \u041E\u043A\u043D\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u0434\u043B\u044F \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u0432\u0441\u0435\u0433\u0434\u0430 \u0435\u0441\u0442\u044C \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u043A\u043B\u0430\u0434\u0435. \u0412\u0430\u043C \u043D\u0435 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0436\u0434\u0430\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043D\u0443\u0436\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u043E\u0442 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u0430 \u0438\u043B\u0438 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0435\u043B\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435. \u0417\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u043E\u043A\u043D\u0430 \u041F\u0412\u0425 \u0432 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0431\u0443\u0434\u044C\u0442\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u2014 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u043C\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D \u043D\u0430\u043C\u0438 \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435 \u0438 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E\u043C. \u0427\u0442\u043E\u0431\u044B \u0432\u044B \u043C\u043E\u0433\u043B\u0438 \u043B\u0443\u0447\u0448\u0435 \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0432 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0435 \u0438 \u043F\u043E\u043D\u044F\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0439 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C\u0438 \u0432\u0441\u0435\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u043E\u043A\u043E\u043D \u041F\u0412\u0425. </p><div class="material__wrapper-block-img-list" data-v-d20a0538><ul class="material__list" data-v-d20a0538><li class="material__list-title" data-v-d20a0538> \u0412\u0438\u0434\u044B \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D: </li><li class="material__list-item" data-v-d20a0538> 1. <strong class="material__list-item-strong" data-v-d20a0538>\u041F\u043B\u0435\u043D\u043A\u0430 \u041F\u0412\u0425</strong> \u2014 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043C\u044F\u0433\u043A\u0438\u0445 \u043E\u043A\u043E\u043D. </li><li class="material__list-item" data-v-d20a0538> 2. <strong class="material__list-item-strong" data-v-d20a0538>\u041E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0430</strong> \u2014 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043E\u0431\u0440\u0430\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440\u0430 \u043E\u043A\u043E\u043D \u041F\u0412\u0425. \u0418\u043C\u0435\u043D\u043D\u043E \u0432 \u043E\u043A\u0430\u043D\u0442\u043E\u0432\u043A\u0443 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 \u0434\u043B\u044F \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u043A \u043A\u0430\u0440\u043A\u0430\u0441\u0443 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438. </li><li class="material__list-item" data-v-d20a0538> 3. <strong class="material__list-item-strong" data-v-d20a0538>\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 (\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F)</strong> \u2014 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438 \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u043A\u043E\u043D \u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0443 \u043F\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0420\u0430\u0437\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0441\u0430\u0434\u043A\u0438 \u043E\u043A\u043D\u0430 \u043A \u043C\u0435\u0441\u0442\u0443 \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0443. </li><li class="material__list-item" data-v-d20a0538> 4. <strong class="material__list-item-strong" data-v-d20a0538>\u0414\u0432\u0443\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u044F\u044F \u043C\u043E\u043B\u043D\u0438\u044F</strong> \u2014 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0434\u0432\u0435\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043C\u043E\u0432. \u0423\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u0432\u0445\u043E\u0434 \u0438 \u0432\u044B\u0445\u043E\u0434 \u0438\u0437 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F </li><li class="material__list-item" data-v-d20a0538> 5. <strong class="material__list-item-strong" data-v-d20a0538>\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0442\u043A\u0430</strong> \u2014 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 (\u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043B\u0438\u0431\u043E \u0432 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 \u0441 \u043E\u043A\u043D\u043E\u043C). </li></ul><div class="material__images" data-v-d20a0538><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-d20a0538></div></div></div></div></section><section class="tabs" data-v-d20a0538><div class="container" data-v-d20a0538><div class="tabs__inner" data-v-d20a0538><div class="tabs__buttons" data-v-d20a0538><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<span class="${ssrRenderClass(["tabs__button", { selected: tab.name === selectedTab.value }])}" data-v-d20a0538>${ssrInterpolate(tab.label)}</span>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(TabContent, {
        content: unref(tabContents)[selectedTab.value]
      }, null, _parent));
      _push(`</div></div></section><section class="faq" id="faq" data-v-d20a0538><div class="container" data-v-d20a0538><div class="faq__inner" data-v-d20a0538><h2 class="faq__title" data-v-d20a0538>\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><div class="faq__items" data-v-d20a0538>`);
      _push(ssrRenderComponent(Accordeon, { questions: unref(questions) }, null, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(btnFloating, null, null, _parent));
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d20a0538"]]);

export { index as default };
//# sourceMappingURL=index-BJ8el8Kr.mjs.map
