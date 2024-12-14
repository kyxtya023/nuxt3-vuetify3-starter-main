import { t as trapUnhandledNodeErrors, e as useNitroApp } from '../../_/nitro.mjs';

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

const images = /*#__PURE__*/Object.freeze({
	__proto__: null
});

export { closePrerenderer as c, images as i, localFetch as l };
//# sourceMappingURL=images.mjs.map
