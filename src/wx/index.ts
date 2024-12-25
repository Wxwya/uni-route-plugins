
// @ts-nocheck
import { createNextControl, getMetaOption, showLoading, replaceRouters } from "../utils"
  // #ifdef MP-WEIXIN
let currentRouterInstance:RouterWxMixin&RouterMixin
let config:RouterConfig = {
  loading: true,
  loadingText: "加载中",
  startPage: "/",
  routerMeta: {},
  notFound:"/pages/notFound/index",
}

let currentRoute:RouterPage = {
  path: '/',
  options: {},
  url: '/',
  type: 'switchTab',
}
// 存储上一个路由信息
let parentRoute:RouterPage = {
  options: {},
  path: '/',
  type: 'switchTab',
  url: '/',
}
replaceRouters.forEach((item: NavigatType) => { 
  uni.addInterceptor(item, {
    fail() { 
      config.notFound && uni.navigateTo({ url: config.notFound })
    }
  })
}) 
function onShow() {
  this?.$?.onLoad[0]()
}
async function onLoad(onLoads: Function[]) {
  let { next, isNext,navigat } = createNextControl()
  config.loading && showLoading(config.loadingText)
     await currentRouterInstance.beforeEachFunc({ next, to:currentRoute,from:parentRoute })
     config.loading && uni.hideLoading()
  if (!isNext()) {
    uni[parentRoute.type]({ url: parentRoute.url })
  } else { 
    onLoads.forEach(func => { 
      func.call(this,this.$scope.options)
    })
    const navigatPage = navigat()
    if (navigatPage) {
      uni[navigatPage.type]({ url: navigatPage.url })
    } else { 
      currentRouterInstance.afterEachFunc({ to:currentRoute,from:parentRoute })
    }
  }
}
const wxHooks: RouterWxMixin = {
  onLaunch() {
    uni.onBeforeAppRoute((res: {path:string,query:Record<string,string>,openType:string}) => {
      const meta = getMetaOption(config.routerMeta, '/' + res.path)
      parentRoute = currentRoute
      currentRoute = {
        path: '/' + res.path,
        options: res.query,
        url: '/' + res.path,
        type: res.openType === 'appLaunch' ? 'switchTab' : res.openType,
        meta
      }
    })
  },
  async beforeCreate() {
    if (this.mpType == 'page') {
      let onFunc = this.$.onLoad ? [...this.$.onLoad] : []
      onFunc =  this.$onShow ? [...onFunc,...this.$onShow] : onFunc;
      this.$.onLoad = [onLoad.bind(this, onFunc)]
      this.$.onShow = [];
    }
  },
  mounted() {
    nextTick(() => {
      if (this.$mpType === "page") { 
        this.$.onShow.unshift(onShow.bind(this))
      }
    })
  },
}
const createWxControl = (defaultConfig:RouterConfig, defaultHooks:RouterMixin):RouterWxMixin&RouterMixin => { 
  Object.assign(config, defaultConfig);
  if (defaultConfig.startPage) { 
    parentRoute.path = defaultConfig.startPage
    parentRoute.url = defaultConfig.startPage
    currentRoute.path = defaultConfig.startPage
    currentRoute.url = defaultConfig.startPage
  }
  currentRouterInstance= {
    ...wxHooks,
   ...defaultHooks,
  }
  return currentRouterInstance

}
export default createWxControl
// #endif
