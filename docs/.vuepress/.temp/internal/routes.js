export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/webrtc/", { loader: () => import(/* webpackChunkName: "webrtc_index.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/webrtc/index.html.js"), meta: {"title":"WebRTC系列"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
