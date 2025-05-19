import { CodeTabs } from "/Users/yijian/Desktop/personal/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_ae3ea4c6c6b04e13a5966a8b8c22a9c5/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/yijian/Desktop/personal/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_ae3ea4c6c6b04e13a5966a8b8c22a9c5/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/yijian/Desktop/personal/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_ae3ea4c6c6b04e13a5966a8b8c22a9c5/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
