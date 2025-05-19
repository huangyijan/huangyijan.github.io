import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '文档记录',
  description: 'YJ的系统文档记录',

  theme: defaultTheme({
    // logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/webrtc/'],
  }),

  bundler: viteBundler(),
})
