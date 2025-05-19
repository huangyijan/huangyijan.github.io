import comp from "/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/webrtc/index.html.vue"
const data = JSON.parse("{\"path\":\"/webrtc/\",\"title\":\"WebRTC系列\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"webrtc/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
