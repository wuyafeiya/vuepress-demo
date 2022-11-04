import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Volumes/项目/vuepress-them-hope/docs/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/Volumes/项目/vuepress-them-hope/docs/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
