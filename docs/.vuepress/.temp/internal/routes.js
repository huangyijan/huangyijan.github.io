export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/webrtc/", { loader: () => import(/* webpackChunkName: "webrtc_index.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/webrtc/index.html.js"), meta: {"title":"WebRTC系列"} }],
  ["/yapi/test.html", { loader: () => import(/* webpackChunkName: "yapi_test.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/yapi/test.html.js"), meta: {"title":""} }],
  ["/webrtc/code/", { loader: () => import(/* webpackChunkName: "webrtc_code_index.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/webrtc/code/index.html.js"), meta: {"title":"入口源码分析"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yijian/Desktop/personal/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
