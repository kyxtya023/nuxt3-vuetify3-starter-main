import { ref, watchEffect, watch, getCurrentInstance, onBeforeUnmount, onDeactivated, onActivated } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/.pnpm/vue@3.5.13_typescript@5.7.2/node_modules/vue/index.mjs';
import { i as injectHead, d as resolveUnrefHeadInput } from '../build/server.mjs';
import { composableNames } from 'file://D:/nuxt3-vuetify3-starter-main/node_modules/@unhead/shared/dist/index.mjs';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}

const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

export { useHead as u };
//# sourceMappingURL=index.mjs.map
