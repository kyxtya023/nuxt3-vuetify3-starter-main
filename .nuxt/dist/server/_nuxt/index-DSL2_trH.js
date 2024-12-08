import { defineComponent, createElementBlock, ref, provide, mergeProps, useSSRContext, withCtx, createVNode, createTextVNode, toDisplayString, watch, computed, unref } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BXxPlIRz.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
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
const _imports_1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "" + __buildAssetsURL("photo_2022-07-14_15-.CIBk-ypB.jpg");
const _imports_4 = "" + __buildAssetsURL("IMG_7449.mab56Xug.jfif");
const _imports_5 = "" + __buildAssetsURL("IMG_7823.CCTgAkut.jfif");
const _imports_6 = "" + __buildAssetsURL("_.D3P5tEjR.jfif");
const _imports_7 = "" + __buildAssetsURL("photo_2023-01-20_09-.tZ8Wh7D2.jpg");
const _imports_8 = "" + __buildAssetsURL("76636daefdd44b058addb6c6bd1ac107.CkryDl_V.jpg");
const _imports_0 = "" + __buildAssetsURL("logo.C0Kok8DY.svg");
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
      { name: "Цены", path: "#price" },
      { name: "Материалы", path: "#material" },
      { name: "Почему мы?", path: "#why" },
      { name: "Преимущества", path: "#advantages" },
      { name: "Частые вопросы", path: "#faq" }
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
      _push(`</div><div class="block-text" data-v-5e4154aa><p class="text" data-v-5e4154aa>Работаем ежедневно</p><p class="text" data-v-5e4154aa>с 10:00 до 19:00</p></div></div></div></div><div class="block" style="${ssrRenderStyle({ "width": "100%" })}" data-v-5e4154aa><div class="container" data-v-5e4154aa><div class="header__menu-block" data-v-5e4154aa><nav class="${ssrRenderClass([showMobileMenu.value ? "active" : "", "header__menu menu"])}" data-v-5e4154aa><ul class="menu__list" data-v-5e4154aa><!--[-->`);
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
      _push(`<!--]--></ul><div class="header__buttons" data-v-5e4154aa><div class="block-text" style="${ssrRenderStyle({ "display": "flex", "gap": "1.5rem" })}" data-v-5e4154aa><a class="header__button-link" href="#" data-v-5e4154aa>+7 (977) 263-40-00</a><a class="header__button-link" href="mailto:" data-v-5e4154aa>yt@ya.ru</a></div><div class="block-text" data-v-5e4154aa><p class="text" data-v-5e4154aa>Работаем ежедневно</p><p class="text" data-v-5e4154aa>с 10:00 до 19:00</p></div></div></nav><div class="header__logo" data-v-5e4154aa>`);
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
        title: "Быстрый заказ",
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
          _push(`<div class="content-block" data-v-ed650631>`);
          if (block.type === "image") {
            _push(`<div class="question__image" data-v-ed650631><img${ssrRenderAttr("src", block.src)}${ssrRenderAttr("alt", block.alt)} data-v-ed650631><p class="question__image-description" data-v-ed650631>${ssrInterpolate(block.description)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "highlighted-text") {
            _push(`<p class="highlighted-text" data-v-ed650631>${splitText(block.text) ?? ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (block.type === "text") {
            _push(`<p class="question__text" data-v-ed650631>${splitText(block.text) ?? ""}</p>`);
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
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-50d80e58><div class="container" data-v-50d80e58><div class="footer__inner" data-v-50d80e58><div class="footer__top" data-v-50d80e58><div class="footer__left-column" data-v-50d80e58><div class="footer__logo" data-v-50d80e58><a href="#" data-v-50d80e58><img${ssrRenderAttr("src", _imports_0)} alt="Logo" data-v-50d80e58></a></div><nav class="footer__list-wrapper" data-v-50d80e58><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>Услуги</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>Отзывы</a></li></ul><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>Как это работает</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>Преимущества</a></li></ul><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>SMMFlow vs Другие сайты</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>Частые вопросы</a></li></ul><ul class="footer__list" data-v-50d80e58><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>Правила сервиса</a></li><li class="footer__list-item" data-v-50d80e58><a class="footer__list-item-link" href="#" data-v-50d80e58>Контакты</a></li></ul></nav></div></div><div class="footer__bottom" data-v-50d80e58><p class="footer__text" data-v-50d80e58> Все права защищены © 2016 – 2024 Цены на сайте для ознакомления — не являются публичной офертой, определяемой положениями статьи 437 Гражданского кодекса Российской Федерации. Компания оставляет за собой права без уведомления пользователя изменять цены на сайте </p></div></div></div></footer>`);
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
        _push(`<div class="floating-btn-menu" data-v-3f79503a><a class="floating-btn-item whatsapp-btn" href="https://wa.me/+1234567890" target="_blank" aria-label="Написать в WhatsApp" data-v-3f79503a><i class="fa fa-phone" data-v-3f79503a><svg role="presentation" width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3f79503a><path d="M25 50a25 25 0 100-50 25 25 0 000 50z" fill="#fff" data-v-3f79503a></path><path d="M26.1 12a12.1 12.1 0 00-10.25 18.53l.29.46-1.22 4.46 4.57-1.2.45.27a12.1 12.1 0 106.16-22.51V12zm6.79 17.22c-.3.85-1.72 1.62-2.41 1.72-.62.1-1.4.14-2.25-.14-.7-.22-1.37-.47-2.03-.77-3.59-1.57-5.93-5.24-6.1-5.48-.19-.24-1.47-1.97-1.47-3.76 0-1.79.93-2.67 1.25-3.03.33-.37.72-.46.96-.46.23 0 .47 0 .68.02.22 0 .52-.09.8.62l1.1 2.7c.1.18.16.4.04.64s-.18.39-.36.6c-.18.21-.38.47-.54.64-.18.18-.36.38-.15.74.2.36.92 1.55 1.98 2.52 1.37 1.23 2.52 1.62 2.88 1.8.35.18.56.15.77-.1.2-.23.9-1.05 1.13-1.42.24-.36.48-.3.8-.18.33.12 2.09 1 2.44 1.18.36.19.6.28.69.43.09.15.09.88-.21 1.73z" fill="#27D061" data-v-3f79503a></path><path d="M25 0a25 25 0 100 50 25 25 0 000-50zm1.03 38.37c-2.42 0-4.8-.6-6.9-1.76l-7.67 2 2.05-7.45a14.3 14.3 0 01-1.93-7.2c0-7.92 6.49-14.38 14.45-14.38a14.4 14.4 0 110 28.79z" fill="#27D061" data-v-3f79503a></path></svg></i></a><a class="floating-btn-item phone-btn" href="tel:+1234567890" target="_blank" aria-label="Позвонить" data-v-3f79503a><i class="fa fa-whatsapp" data-v-3f79503a><svg class="t-sociallinks__svg" role="presentation" width="50px" height="50px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3f79503a><path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50.0089 29H51.618C56.4915 29.0061 61.1633 30.9461 64.6073 34.3938C68.0512 37.8415 69.9856 42.5151 69.9856 47.3879V48.9968C69.9338 49.5699 69.6689 50.1027 69.2433 50.49C68.8177 50.8772 68.2623 51.0908 67.6868 51.0884H67.5029C66.8966 51.0358 66.3359 50.745 65.9437 50.2796C65.5516 49.8143 65.36 49.2124 65.4109 48.6061V47.3879C65.4109 43.7303 63.9578 40.2225 61.3711 37.6362C58.7844 35.0499 55.2761 33.597 51.618 33.597H50.3997C49.79 33.6488 49.1847 33.4563 48.7169 33.0619C48.2492 32.6675 47.9573 32.1035 47.9054 31.4939C47.8536 30.8843 48.0461 30.279 48.4406 29.8114C48.835 29.3437 49.3992 29.0518 50.0089 29ZM56.889 49.0132C56.4579 48.5821 56.2157 47.9975 56.2157 47.3879C56.2157 46.1687 55.7313 44.9994 54.869 44.1373C54.0068 43.2752 52.8374 42.7909 51.618 42.7909C51.0083 42.7909 50.4236 42.5488 49.9925 42.1177C49.5614 41.6867 49.3192 41.102 49.3192 40.4924C49.3192 39.8828 49.5614 39.2982 49.9925 38.8672C50.4236 38.4361 51.0083 38.1939 51.618 38.1939C54.0568 38.1939 56.3956 39.1626 58.1201 40.8868C59.8445 42.611 60.8133 44.9495 60.8133 47.3879C60.8133 47.9975 60.5711 48.5821 60.14 49.0132C59.7089 49.4442 59.1242 49.6864 58.5145 49.6864C57.9048 49.6864 57.3201 49.4442 56.889 49.0132ZM66.4011 69.0663L66.401 69.0846C66.3999 69.5725 66.2967 70.0547 66.0981 70.5003C65.8998 70.9451 65.611 71.3435 65.2499 71.67C64.8674 72.0182 64.4123 72.2771 63.9176 72.428C63.4516 72.5702 62.9613 72.6132 62.4782 72.5546C58.2475 72.53 53.4102 70.5344 49.1802 68.1761C44.8871 65.7827 41.0444 62.915 38.8019 60.9903L38.7681 60.9613L38.7367 60.9299C32.3303 54.5198 28.2175 46.1735 27.0362 37.186C26.9623 36.6765 27.0018 36.157 27.1519 35.6645C27.3027 35.1695 27.5615 34.7142 27.9094 34.3314C28.2397 33.9658 28.6436 33.6742 29.0944 33.4757C29.5447 33.2775 30.0316 33.1766 30.5234 33.1796H37.4967C38.299 33.1636 39.0826 33.4244 39.7156 33.9184C40.3527 34.4156 40.7979 35.1184 40.9754 35.9071L41.0038 36.0335V36.1631C41.0038 36.4901 41.0787 36.795 41.1847 37.2268C41.2275 37.4012 41.2755 37.5965 41.3256 37.8221L41.326 37.8238C41.583 38.9896 41.925 40.1351 42.3491 41.251L42.7322 42.259L38.4899 44.26L38.4846 44.2625C38.204 44.3914 37.986 44.6263 37.8784 44.9157L37.8716 44.934L37.8642 44.952C37.7476 45.236 37.7476 45.5545 37.8642 45.8385L37.9144 45.9608L37.9359 46.0912C38.0802 46.9648 38.5603 48.0981 39.4062 49.4169C40.243 50.7215 41.3964 52.1437 42.808 53.5872C45.6206 56.4634 49.3981 59.3625 53.5798 61.5387C53.8533 61.6395 54.1552 61.6343 54.4257 61.5231L54.4437 61.5157L54.462 61.5089C54.7501 61.4016 54.9842 61.1848 55.1133 60.9057L55.1148 60.9023L57.0232 56.6591L58.0397 57.03C59.1934 57.4509 60.3737 57.7947 61.5729 58.0592L61.5785 58.0605L61.5841 58.0618C62.152 58.1929 62.7727 58.3042 63.3802 58.3942L63.4231 58.4006L63.4654 58.4101C64.2537 58.5877 64.956 59.0332 65.453 59.6706C65.9429 60.2991 66.2033 61.0758 66.1916 61.8721L66.4011 69.0663Z" fill="#000" data-v-3f79503a></path></svg></i></a></div>`);
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
    title: "Пленка ПВХ для мягких окон",
    description: [
      "Для производства изделий из ПВХ мы используем прозрачную пленку корейского производства. Качество и долговечность этого материала для мягких окон проверена нами на личном опыте.",
      "Данная пленка обладает повышенной стойкостью к всевозможным внешним воздействиям, таким как дождь, ветер, снег, механические нагрузки. В тоже время имеет свойства хорошо пропускать свет в помещение и сохранять в нем комфортную температуру.",
      "Выбрав нашу компанию для производства ПВХ штор для террас, веранд и навесов вы получите действительно качественный продукт на выходе, который будет служить вам долгие годы."
    ],
    items: [
      {
        img: "https://optim.tildacdn.com/tild3737-3032-4234-b233-646164643562/-/resize/560x430/-/format/webp/10.jpg",
        title: "Пленка для окон ПВХ 700 микрон Ю.Корея",
        details: [
          "Толщина пленки 700 мкм",
          "Повышенная прочность",
          "Количество пластификатора: 37-40%, 55PHR"
        ],
        description: ""
      },
      {
        img: "https://optim.tildacdn.com/tild6636-3435-4834-b235-656137366362/-/resize/560x430/-/format/webp/IMG_4801.JPG",
        title: "Пленка для окон ПВХ 700 микрон Китай",
        details: [
          "Толщина пленки 700 мкм",
          "Повышенная прочность",
          "Количество пластификатора: 37-40%, 55PHR"
        ],
        description: "Отличный выбор для средних и крупногабаритных строений. Повышенная прочность на разрыв. Возможность перекрывать широкие проемы."
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
  grid: {
    title: "Москитная сетка",
    description: [],
    items: [
      {
        img: "https://optim.tildacdn.com/tild6662-6230-4863-b638-323864383735/-/resize/560x280/-/format/webp/12.jpg",
        title: "Москитная сетка",
        description: "Приятным дополнением к мягким окнам станет москитная сетка, она поддерживает естественную вентиляцию и защищает от насекомых. Сетка может устанавливаться как самостоятельное изделие, так и в дополнение к гибким окнам. Сменить мягкие изделия на комплект москитной сетки получится даже у хрупкой девушки. Сетка не выцветает на солнце и эластична. Защита от комаров и прочей летающей живности особенно необходима владельцам загородных домов, коттеджей и дач. Москитная сетка может быть установлена в любую окантовку и на любой тип креплений.",
        details: []
      }
    ]
  },
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
        items: [
          "Заключение договора с монтажом",
          "Предварительная оплаты 40% от стоимости заказа",
          "Площадь остекления более 20 м2",
          "Нахождение объекта до 100 км от МКАД.",
          "(При нахождение объекта далее 100 км от МКАД, цена оговаривается с менеджером)"
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
          "При удаленности от МКАД на 0-75 км - 2500 руб."
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "При удаленности от МКАД на 75-100 км - 3000 руб."
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
    name: "Условия бесплатного замера",
    content: [
      {
        type: "list",
        items: [
          "Заключение договора с монтажом",
          "Предварительная оплаты 40% от стоимости заказа",
          "Площадь остекления более 20 м2",
          "Нахождение объекта до 100 км от МКАД.",
          "(При нахождение объекта далее 100 км от МКАД, цена оговаривается с менеджером)"
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
          "При удаленности от МКАД на 0-75 км - 2500 руб."
        ]
      },
      {
        type: "highlighted-text",
        text: [
          "При удаленности от МКАД на 75-100 км - 3000 руб."
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
  }
];
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
      { id: 1, image: "https://cdn.media.marquiz.ru/v1/image/upload/8h4UzM3MZQRtybk3Yeajrk.jpeg?format=webp&amp;func=auto&amp;fit=cover&amp;width=420&amp;height=420&amp;dpr=1", text: "1 проем" },
      { id: 2, image: "https://cdn.media.marquiz.ru/v1/image/upload/rNELhbWUUPdUgD4BHNkk94.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "2 проема" },
      { id: 3, image: "https://cdn.media.marquiz.ru/v1/image/upload/3g2EvKNttmT5oX5na5SRPq.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "3 проема" },
      { id: 4, image: "https://cdn.media.marquiz.ru/v1/image/upload/8vEA7fnjvSASoyFyA3WGBf.jpeg?format=webp&func=auto&fit=cover&width=420&height=420&dpr=1", text: "4 и более проемов" }
    ];
    const mosquitoOptions = [
      { value: "yes", text: "Да" },
      { value: "no", text: "Нет" },
      { value: "unknown", text: "Пока не знаю" }
    ];
    const mountOptions = ["Брус", "Сайдинг", "Оцилиндрованный брус", "Плитка", "Бетонное основание", "Конструкция из металла", "Кирпичное основание", "Другое"];
    const configurationOptions = [
      { id: 1, image: "https://cdn.media.marquiz.ru/v1/image/upload/hqfjcwjdgpvpnskasrdj.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Эконом", title: "Без фурнитуры. Пленка 0,7 микрон + окантовка ПВХ" },
      { id: 2, image: "https://cdn.media.marquiz.ru/v1/image/upload/mmtjr4bcfvtkaa4mr7s9.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Стандарт", title: "Пленка 0,7 микрон + окантовка ПВХ + крепления" },
      { id: 3, image: "https://cdn.media.marquiz.ru/v1/image/upload/cpzaow7heqm5xgcsw0v7.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Премиум", title: "Пленка 0,7 микрон + окантовка OXFORD + крепления" },
      { id: 4, image: "https://cdn.media.marquiz.ru/v1/image/upload/kuckrag3tnm7fhaht4sz.jpg?format=webp&func=auto&fit=cover&width=480&height=303&dpr=1", name: "Люкс", title: "Пленка 0,7 микрон + окантовка OXFORD LUX  + крепления" }
    ];
    const scheduleOptions = [
      { value: "soon", text: "В ближайшее время" },
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
        icon: "/img/icons8-безопасная-зона-для-детей-96.png"
        // Путь к изображению иконки
      },
      {
        title: "ДЕШЕВЛЕ ПЛАСТИКОВЫХ ОКОН В НЕСКОЛЬКО РАЗ",
        text: `Стоимость мягких окон минимум в 2 раза ниже`,
        icon: "/img/icons8-кошелек-96.png"
      },
      {
        title: "ЭСТЕТИЧНЫЕ И ПРИВЛЕКАТЕЛЬНЫЕ",
        text: `Прозрачная пленка ПВХ обладает идеальной светопропускаемостью`,
        icon: "/img/icons8-сердце-96.png"
      },
      {
        title: "НЕ ЖЕЛТЕЕТ НА СОЛНЦЕ",
        text: `Задерживает до 95% ультрафиолета`,
        icon: "/img/icons8-солнце-96.png"
      },
      {
        title: "СРОК СЛУЖБЫ БОЛЕЕ 10 ЛЕТ",
        text: `Реально проверенный срок эксплуатации`,
        icon: "/img/icons8-календарь-961.png"
      },
      {
        title: "НАДЕЖНАЯ ЗАВЕСА",
        text: `Не деформируется, прочные, эластичные и морозостойкие `,
        icon: "/img/icons8-защита-96.png"
      }
    ];
    const services = [
      {
        title: "Комплект «Эконом»",
        image: "/img/IMG_5912.jfif",
        // image: new URL("~/assets/img/IMG_5912.jfif", import.meta.url).href,
        description: "пленка Ю. Корея 700 мкм, морозостойкая до -30°C, окантовка ПВХ без фурнитуры",
        prices: ["от 800 руб.", "от 750 руб.", "от 700 руб."]
      },
      {
        title: "Комплект «Стандарт»",
        image: "/img/IMG_5910.jfif",
        description: "пленка Германия 900 мкм, устойчивость к ультрафиолету, окантовка ПВХ с фурнитурой",
        prices: ["от 1200 руб.", "от 1100 руб.", "от 1000 руб."]
      },
      {
        title: "Комплект «Премиум»",
        image: "/img/IMG_5909.jfif",
        description: "пленка Германия 1200 мкм, морозостойкая до -40°C, окантовка ПВХ с усиленной фурнитурой",
        prices: ["от 1500 руб.", "от 1400 руб.", "от 1300 руб."]
      },
      {
        title: "Комплект «Люкс»",
        image: "/img/IMG_5872.jfif",
        description: "пленка Франция 1500 мкм, устойчивая к механическим повреждениям, двойная окантовка ПВХ",
        prices: ["от 2000 руб.", "от 1800 руб.", "от 1600 руб."]
      },
      {
        title: "Комплект «Люкс»",
        image: "/img/IMG_5911.jfif",
        description: " пленка Франция 1500 мкм, устойчивая к механическим повреждениям, двойная окантовка ПВХ",
        prices: ["от 2000 руб.", "от 1800 руб.", "от 1600 руб."]
      }
    ];
    const tabs = [
      { name: "tape", label: "Пленка" },
      { name: "vue", label: "Окантовка" },
      { name: "grid", label: "Москитная сетка" },
      { name: "accessories", label: "Фурнитура" }
    ];
    const selectedTab = ref("tape");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<main class="main" data-v-85d5ac97><section class="hero" style="${ssrRenderStyle({ "position": "relative" })}" data-v-85d5ac97><div class="hero__image" data-v-85d5ac97></div><div class="container" data-v-85d5ac97><div class="hero__inner" data-v-85d5ac97><div class="hero__content" data-v-85d5ac97><h1 class="hero__title" data-v-85d5ac97> Мягкие окна из <span class="orange" data-v-85d5ac97>гибкого ПВХ</span></h1><h2 class="hero__subtitle" data-v-85d5ac97> Элегантное решение для вашего комфорта: мягкие окна из гибкого ПВХ от производителя — идеальный выбор для веранд, беседок и террас, защищающих от ветра, дождя и холода. </h2><div class="hero__buttons" data-v-85d5ac97>`);
      _push(ssrRenderComponent(vBtn, {
        class: "hero__button",
        title: "Расчет стоимости",
        disabled: false,
        success: true,
        orange: true
      }, null, _parent));
      _push(`</div></div></div></div></section><div class="feedback-customer" data-v-85d5ac97><div class="container" data-v-85d5ac97><div class="feedback-customer__inner" data-v-85d5ac97><div class="feedback-customer__items" data-v-85d5ac97><div class="feedback" data-v-85d5ac97><div class="feedback__item" data-v-85d5ac97><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_0$1)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-85d5ac97><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute" })}" class="rotating" data-v-85d5ac97><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-85d5ac97></circle><defs data-v-85d5ac97><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-85d5ac97><stop stop-color="#82dbf7" data-v-85d5ac97></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-85d5ac97></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-85d5ac97>Наши работы</h2></div></div><div class="feedback" data-v-85d5ac97><div class="feedback__item" data-v-85d5ac97><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-85d5ac97><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute", "transform": "rotate(125deg)" })}" class="rotating" data-v-85d5ac97><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-85d5ac97></circle><defs data-v-85d5ac97><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-85d5ac97><stop stop-color="#82dbf7" data-v-85d5ac97></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-85d5ac97></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-85d5ac97>Услуги</h2></div></div><div class="feedback" data-v-85d5ac97><div class="feedback__item" data-v-85d5ac97><div class="feedback__item-image" style="${ssrRenderStyle({ "position": "relative" })}" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "width": "60px", "height": "60px" })}" alt="" data-v-85d5ac97><svg width="90" height="90" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "position": "absolute", "transform": "rotate(220deg)" })}" class="rotating" data-v-85d5ac97><circle cx="85" cy="85" r="83" stroke="url(#paint0_linear_544_191)" stroke-width="6" data-v-85d5ac97></circle><defs data-v-85d5ac97><linearGradient id="paint0_linear_544_191" x1="0" y1="85" x2="165" y2="85" gradientUnits="userSpaceOnUse" data-v-85d5ac97><stop stop-color="#82dbf7" data-v-85d5ac97></stop><stop offset="1" stop-color="#82dbf7" stop-opacity="0" data-v-85d5ac97></stop></linearGradient></defs></svg></div><h2 class="feedback__item-title" data-v-85d5ac97>Наши Преимущества</h2></div></div></div></div></div></div><section class="recomendation" id="advantages" data-v-85d5ac97><div class="container" data-v-85d5ac97><div class="recomendation__inner" data-v-85d5ac97><h2 class="recomendation__title" data-v-85d5ac97> Преимущества мягких окон из <span class="orange" data-v-85d5ac97> ПВХ</span></h2><div class="recomendation__block-image" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_3)} class="recomendation__block-top-image" alt="" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_4)} class="recomendation__block-bottom-images" alt="" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_5)} class="recomendation__block-bottom-images" alt="" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_6)} class="recomendation__block-bottom-images" alt="" data-v-85d5ac97></div><div class="recomendation__block-text" data-v-85d5ac97><p data-v-85d5ac97> Мягкие окна – это изделие из плотной ПВХ пленки, окантованной по периметру армированной тентовой тканью особой прочности. Идеальная защита от любых погодных условий и насекомых! </p><p data-v-85d5ac97> В последнее время окна из ПВХ пользуются высоким спросом среди владельцев беседок, веранд и террас. Рулонные шторы многофункциональны и прекрасно вписываются в экстерьер – многие именно поэтому предпочитают устанавливать такие конструкции на своих верандах и беседках. </p></div><ul class="recomendation__list" data-v-85d5ac97><li class="recomendation__list-item" data-v-85d5ac97> Пленка ПВХ после монтажа на проем приобретает вид стекла и имеет светопропускаемость более 95% </li><li class="recomendation__list-item" data-v-85d5ac97> Тентовая окантовка предназначена для уменьшения воздействий сезонных температурных перепадов на прозрачное мягкое стекло, тем самым гарантируя долгую эксплуатацию изделий. </li><li class="recomendation__list-item" data-v-85d5ac97> Мягкие окна легко монтируются на любую поверхность и не требуют доработок проема под их установку. </li><li class="recomendation__list-item" data-v-85d5ac97> Легко скручиваются в рулон в хорошую погоду и открывают панорамный вид на участок. </li></ul><div class="recomendation__block-items" data-v-85d5ac97><!--[-->`);
      ssrRenderList(recomendationItem, (item, index2) => {
        _push(`<div class="recomendation__item" data-v-85d5ac97><div class="recomendation__item-icon" data-v-85d5ac97><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} data-v-85d5ac97></div><h3 class="recomendation__item-title" data-v-85d5ac97>${ssrInterpolate(item.title)}</h3><p class="recomendation__item-text" data-v-85d5ac97>${ssrInterpolate(item.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><div class="price" id="price" data-v-85d5ac97><div class="container" data-v-85d5ac97><div class="price__inner" data-v-85d5ac97><h2 class="price__title" data-v-85d5ac97> Стоимость <span class="orange" data-v-85d5ac97>Мягких Окон</span> в готовой комплектации </h2><div class="price-table" data-v-85d5ac97><div class="price-table__row price-table__header" data-v-85d5ac97><div class="header__cell" data-v-85d5ac97>Наименование</div><div class="header__cell" data-v-85d5ac97>До 15 м²</div><div class="header__cell" data-v-85d5ac97>От 15 м² до 50 м²</div><div class="header__cell" data-v-85d5ac97>Более 50 м²</div></div><!--[-->`);
      ssrRenderList(services, (item, index2) => {
        _push(`<div class="price-table__row" data-v-85d5ac97><div class="price-table__cell" data-v-85d5ac97><div class="service-info" data-v-85d5ac97><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.description)} class="service-info__image" data-v-85d5ac97><div class="service-info__block" data-v-85d5ac97><h3 class="service-info__title" data-v-85d5ac97>${ssrInterpolate(item.title)}</h3><p class="service-info__description" data-v-85d5ac97>${ssrInterpolate(item.description)}</p></div></div></div><div class="price-table__cell" data-v-85d5ac97>`);
        if (isMobile.value) {
          _push(`<span data-v-85d5ac97>${ssrInterpolate(item.prices[0])} <span class="price-table__cell-text-gray" data-v-85d5ac97>До 15 м²</span></span>`);
        } else {
          _push(`<span data-v-85d5ac97>${ssrInterpolate(item.prices[0])}</span>`);
        }
        _push(`</div><div class="price-table__cell" data-v-85d5ac97>`);
        if (isMobile.value) {
          _push(`<span data-v-85d5ac97>${ssrInterpolate(item.prices[1])} <span class="price-table__cell-text-gray" data-v-85d5ac97>От 15 м² до 50 м²</span></span>`);
        } else {
          _push(`<span data-v-85d5ac97>${ssrInterpolate(item.prices[1])}</span>`);
        }
        _push(`</div><div class="price-table__cell" data-v-85d5ac97>`);
        if (isMobile.value) {
          _push(`<span data-v-85d5ac97>${ssrInterpolate(item.prices[2])} <span class="price-table__cell-text-gray" data-v-85d5ac97>Более 50 м²</span></span>`);
        } else {
          _push(`<span data-v-85d5ac97>${ssrInterpolate(item.prices[2])}</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="mosquito-table" data-v-85d5ac97><div class="container" data-v-85d5ac97><div class="mosquito-table__inner" data-v-85d5ac97><h2 class="price__title" data-v-85d5ac97> Москитная <span class="orange" data-v-85d5ac97>Сетка</span></h2><div class="price-table" data-v-85d5ac97><div class="price-table__row price-table__header" data-v-85d5ac97><div class="header__cell" data-v-85d5ac97>Наименование</div><div class="header__cell" data-v-85d5ac97>До 15 м²</div><div class="header__cell" data-v-85d5ac97>От 15 м² до 50 м²</div><div class="header__cell" data-v-85d5ac97>Более 50 м²</div></div><div class="price-table__row" data-v-85d5ac97><div class="price-table__cell" data-v-85d5ac97><div class="service-info" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_7)} alt="Комплект «Москитная сетка»" class="service-info__image" data-v-85d5ac97><div class="service-info__content" data-v-85d5ac97><h3 class="service-info__title" data-v-85d5ac97> Комплект «Москитная сетка» </h3><p class="service-info__description" data-v-85d5ac97> Москитная Сетка Ю. Корея плотность 250 г.м с армированной нитью, морозостойкая до -35°C, окантовка ПВХ или Оксфорд, (без фурнитуры) </p></div></div></div><div class="price-table__cell" data-v-85d5ac97>`);
      if (isMobile.value) {
        _push(`<span data-v-85d5ac97> от 1200 руб. <span class="price-table__cell-text-gray" data-v-85d5ac97>До 15 м²</span></span>`);
      } else {
        _push(`<span data-v-85d5ac97>от 1200 руб.</span>`);
      }
      _push(`</div><div class="price-table__cell" data-v-85d5ac97>`);
      if (isMobile.value) {
        _push(`<span data-v-85d5ac97> от 1100 руб. <span class="price-table__cell-text-gray" data-v-85d5ac97>От 15 м² до 50 м²</span></span>`);
      } else {
        _push(`<span data-v-85d5ac97>от 1100 руб.</span>`);
      }
      _push(`</div><div class="price-table__cell" data-v-85d5ac97>`);
      if (isMobile.value) {
        _push(`<span data-v-85d5ac97> от 1000 руб. <span class="price-table__cell-text-gray" data-v-85d5ac97>Более 50 м²</span></span>`);
      } else {
        _push(`<span data-v-85d5ac97>от 1000 руб.</span>`);
      }
      _push(`</div></div></div></div></div></div><div class="estimates" data-v-85d5ac97><div class="estimates__inner" data-v-85d5ac97><div class="estimates-form-wrapper" data-v-85d5ac97><div class="estimates__image" data-v-85d5ac97></div><div class="div" data-v-85d5ac97><h2 class="price__title" style="${ssrRenderStyle({ "display": "flex", "justify-content": "center" })}" data-v-85d5ac97> Получить смету </h2><p class="estimates__subtitle" data-v-85d5ac97> Вы можете позвонить и все вопросы по телефону уточнить, либо составить смету и отправить нам, а мы уже вам перезвоним для ответа </p></div></div><div class="quiz" data-v-85d5ac97><div class="quiz__inner" data-v-85d5ac97><div class="quiz__progress-container" data-v-85d5ac97><div class="quiz__progress-percent" data-v-85d5ac97>${ssrInterpolate((currentStep.value / steps.length * 100).toFixed(0))}% </div><div class="quiz__progress-bar" data-v-85d5ac97><div class="quiz__progress-bar-fill" style="${ssrRenderStyle({ width: `${currentStep.value / steps.length * 100}%` })}" data-v-85d5ac97></div></div></div><div class="quiz__progress-question-step" data-v-85d5ac97><p data-v-85d5ac97>Вопрос ${ssrInterpolate(currentStep.value)}</p></div>`);
      if (currentStep.value === 1) {
        _push(`<div class="quiz__step" data-v-85d5ac97><h2 class="quiz__title" data-v-85d5ac97> Укажите примерную площадь мягкого остекления в м² </h2><div class="quiz__slider-container" data-v-85d5ac97><div class="quiz__slider-wrapper" style="${ssrRenderStyle(sliderProgressStyle.value)}" data-v-85d5ac97><input type="range" min="1" max="100"${ssrRenderAttr("value", answers.value.area)} class="quiz__slider" data-v-85d5ac97></div><p class="quiz__slider-value" data-v-85d5ac97>${ssrInterpolate(answers.value.area)} м²</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 2) {
        _push(`<div class="quiz__step" data-v-85d5ac97><h2 class="quiz__title" data-v-85d5ac97>Сколько будет дверных проемов?</h2><div class="quiz__options" data-v-85d5ac97><!--[-->`);
        ssrRenderList(doorOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass(["quiz__option", { "quiz__option--selected": ((_a = answers.value.doorways) == null ? void 0 : _a.id) === item.id }])}" data-v-85d5ac97><img class="quiz__option-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.text)} data-v-85d5ac97><p class="quiz__option-text" data-v-85d5ac97>${ssrInterpolate(item.text)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 3) {
        _push(`<div class="quiz__step" data-v-85d5ac97><h2 class="quiz__title" data-v-85d5ac97>Потребуется ли москитная сетка?</h2><div class="quiz__radio-group" data-v-85d5ac97><!--[-->`);
        ssrRenderList(mosquitoOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-85d5ac97><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.mosquito, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-85d5ac97><span class="quiz__radio-span" data-v-85d5ac97><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-85d5ac97><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-85d5ac97></path></svg></span><p class="text" data-v-85d5ac97>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 4) {
        _push(`<div class="quiz__step" data-v-85d5ac97><h2 class="quiz__title" data-v-85d5ac97> На что будут монтироваться мягкие окна? </h2><div class="quiz__radio-group" data-v-85d5ac97><!--[-->`);
        ssrRenderList(mountOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-85d5ac97><input type="radio"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.mount, option)) ? " checked" : ""} class="quiz__radio-input" data-v-85d5ac97><span class="quiz__radio-span" data-v-85d5ac97><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-85d5ac97><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-85d5ac97></path></svg></span><p data-v-85d5ac97>${ssrInterpolate(option)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 5) {
        _push(`<div class="quiz__step" data-v-85d5ac97><h2 class="quiz__title" data-v-85d5ac97>Какая комплектация необходима?</h2><div class="quiz__equipments" data-v-85d5ac97><!--[-->`);
        ssrRenderList(configurationOptions, (item, index2) => {
          var _a;
          _push(`<div class="${ssrRenderClass([
            "quiz__option quiz__equipment-item",
            {
              "quiz__option--selected": ((_a = answers.value.configuration) == null ? void 0 : _a.id) === item.id
            }
          ])}" data-v-85d5ac97><img class="quiz__equipment-image"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-85d5ac97><div class="quiz__equipment-block-text" data-v-85d5ac97><p class="quiz__equipment-text" data-v-85d5ac97>${ssrInterpolate(item.name)}</p><h4 class="quiz__equipment-title" data-v-85d5ac97>${ssrInterpolate(item.title)}</h4></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 6) {
        _push(`<div class="quiz__step" data-v-85d5ac97><h2 class="quiz__title" data-v-85d5ac97>Установите сами или нужен монтаж?</h2><div class="quiz__radio-group" data-v-85d5ac97><!--[-->`);
        ssrRenderList(installOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-85d5ac97><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.installation, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-85d5ac97><span class="quiz__radio-span" data-v-85d5ac97><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-85d5ac97><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-85d5ac97></path></svg></span><p class="text" data-v-85d5ac97>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 7) {
        _push(`<div class="quiz__step" data-v-85d5ac97><h2 class="quiz__title" data-v-85d5ac97> Когда планируете устанавливать мягкие окна? </h2><div class="quiz__radio-group" data-v-85d5ac97><!--[-->`);
        ssrRenderList(scheduleOptions, (option, index2) => {
          _push(`<label class="quiz__radio-label" data-v-85d5ac97><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.schedule, option.value)) ? " checked" : ""} class="quiz__radio-input" data-v-85d5ac97><span class="quiz__radio-span" data-v-85d5ac97><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-85d5ac97><path d="M1.5 5.4L4.14546 8.22183C4.54054 8.64324 5.20946 8.64324 5.60454 8.22183L10.5 3" stroke="#0C1132" stroke-width="2" stroke-linecap="round" data-v-85d5ac97></path></svg></span><p data-v-85d5ac97>${ssrInterpolate(option.text)}</p></label>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value === 8) {
        _push(`<div class="quiz__step" data-v-85d5ac97><p class="quiz__title" data-v-85d5ac97> Заполните контактную информацию и с вами обязательно свяжутся в ближайшее время </p><div class="contact-form" data-v-85d5ac97><form class="contact-form__form" data-v-85d5ac97><div class="contact-form__form-field-block" data-v-85d5ac97><div class="contact-form__field" data-v-85d5ac97><label class="contact-form__label" for="name" data-v-85d5ac97>Имя</label><input class="contact-form__input" type="text" id="name"${ssrRenderAttr("value", contactInfo.value.name)} required data-v-85d5ac97></div><div class="contact-form__field" data-v-85d5ac97><label class="contact-form__label" for="phone" data-v-85d5ac97>Телефон</label><input class="contact-form__input" type="text" id="phone"${ssrRenderAttr("value", contactInfo.value.phone)} placeholder="+7 (___) ___-__-__" required data-v-85d5ac97></div></div><div class="contact-form__field" data-v-85d5ac97><label class="contact-form__label" for="message" data-v-85d5ac97>Комментарий</label><textarea class="contact-form__input contact-form__input-textarea" id="message" style="${ssrRenderStyle({ "width": "100%" })}" data-v-85d5ac97>${ssrInterpolate(contactInfo.value.message)}</textarea></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="quiz__controls" data-v-85d5ac97><button class="quiz__button quiz__button--prev"${ssrIncludeBooleanAttr(currentStep.value === 1) ? " disabled" : ""} data-v-85d5ac97> Назад </button><button class="quiz__button quiz__button--next"${ssrIncludeBooleanAttr(!canProceed.value) ? " disabled" : ""} data-v-85d5ac97>${ssrInterpolate(currentStep.value < 8 ? "Далее" : "Отправить")}</button></div></div></div></div></div><section class="why" id="why" data-v-85d5ac97><h2 class="why__title" data-v-85d5ac97>Почему выбирают <span class="orange" data-v-85d5ac97>нас?</span></h2><div class="why__inner" data-v-85d5ac97>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section><section class="material" id="material" data-v-85d5ac97><div class="container" data-v-85d5ac97><div class="material__inner" data-v-85d5ac97><h2 class="material__title" data-v-85d5ac97><span class="orange" style="${ssrRenderStyle({ "margin-left": "0" })}" data-v-85d5ac97>Материалы,</span> крепления и фурнитура</h2><p class="material__block-text" data-v-85d5ac97>Компания Мягкие Окна России располагает собственными производственными мощностями для изготовления мягких окон. Поэтому все необходимые для производства материалы, всегда есть в наличии на нашем складе. Вам не придется дополнительно ждать поставки нужных комплектующих от посредника или изготовителя на стороне. Заказывая окна ПВХ в нашей компании, будьте уверены — выбранный вами материал мягких окон проверен нами на практике и отличается высоким качеством. Чтобы вы могли лучше разобраться в ассортименте и понять, какие материалы подобрать для своей постройки, предлагаем вам ознакомиться с описанием и характеристиками всех компонентов для окон ПВХ. </p><div class="material__wrapper-block-img-list" data-v-85d5ac97><ul class="material__list" data-v-85d5ac97><li class="material__list-title" data-v-85d5ac97> Виды материалов для мягких окон: </li><li class="material__list-item" data-v-85d5ac97> 1. <strong class="material__list-item-strong" data-v-85d5ac97>Пленка ПВХ</strong> — основной элемент в конструкции мягких окон. </li><li class="material__list-item" data-v-85d5ac97> 2. <strong class="material__list-item-strong" data-v-85d5ac97>Окантовка</strong> — материал обрамления периметра окон ПВХ. Именно в окантовку встраивается фурнитура для крепления к каркасу постройки. </li><li class="material__list-item" data-v-85d5ac97> 3. <strong class="material__list-item-strong" data-v-85d5ac97>Фурнитура (крепления)</strong> — вариации крепления окон к материалу постройки. Различаются по надежности посадки окна к месту монтажа и удобству. </li><li class="material__list-item" data-v-85d5ac97> 4. <strong class="material__list-item-strong" data-v-85d5ac97>Двусторонняя молния</strong> — применяется для дверных проемов. Упрощает вход и выход из помещения </li><li class="material__list-item" data-v-85d5ac97> 5. <strong class="material__list-item-strong" data-v-85d5ac97>Москитная сетка</strong> — дополнительный атрибут (приобретается отдельно либо в комплекте с окном). </li></ul><div class="material__images" data-v-85d5ac97><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-85d5ac97></div></div></div></div></section><section class="tabs" data-v-85d5ac97><div class="container" data-v-85d5ac97><div class="tabs__inner" data-v-85d5ac97><div class="tabs__buttons" data-v-85d5ac97><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<span class="${ssrRenderClass(["tabs__button", { selected: tab.name === selectedTab.value }])}" data-v-85d5ac97>${ssrInterpolate(tab.label)}</span>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(TabContent, {
        content: unref(tabContents)[selectedTab.value]
      }, null, _parent));
      _push(`</div></div></section><section class="faq" id="faq" data-v-85d5ac97><div class="container" data-v-85d5ac97><div class="faq__inner" data-v-85d5ac97><h2 class="faq__title" data-v-85d5ac97>Частые вопросы</h2><div class="faq__items" data-v-85d5ac97>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85d5ac97"]]);
export {
  index as default
};
//# sourceMappingURL=index-DSL2_trH.js.map
