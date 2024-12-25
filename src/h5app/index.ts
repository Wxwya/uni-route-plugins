// @ts-nocheck
import { getMetaOption, createNextControl, showLoading, getCurrentPage, replaceRouters } from "../utils";

// #ifdef H5 || APP-PLUS
let firstPage = true
let isUnload =  false
let currentRouterInstance:RouterPublicMixin&RouterMixin
let config:RouterConfig = {
  loading: true,
  loadingText: "加载中",
  startPage: "/",
  routerMeta: {},
  notFound:"/pages/notFound/index",
}
const routesList:RouterPage[] = [{ path: config.startPage, url: config.startPage, options: {}, type: 'switchTab' }]
let currentRoute: RouterPage = {
  path: '/',
  options: {},
  url: '/',
  type: 'switchTab',
}
// 存储上一个路由信息
let parentRoute: RouterPage = {
  options: {},
  path: '/',
  type: 'switchTab',
  url: '/',
}

// 重写路由方法
const nativeRoutersFunc ={
  navigateTo: uni.navigateTo,
  redirectTo: uni.redirectTo,
  switchTab: uni.switchTab,
  reLaunch: uni.reLaunch,
  navigateBack: uni.navigateBack,
}


function getQueryParams(url:string): { path: string; query: Record<string, string> } {
  const [path, queryString=""] = url.split("?") || [url, ""];
  const query = Object.fromEntries(
    queryString.split("&").map((pair) => pair.split("=").map(decodeURIComponent))
  );
  return { path, query };
}
replaceRouters.forEach((item:NavigatType) => {
  uni[item] = async (options:RouterMethod) => {
    let { next, isNext, navigat } = createNextControl()
    let to 
    let success = options.success || (() => { })
    let oddCurrentRoute 
    if (item != "navigateTo") { 
      isUnload=true
    }
    if (item != "navigateBack") {
      const { path, query } = getQueryParams(options.url)
      to = {
        path,
        options: query,
        url: options.url,
        type: item,
        meta: getMetaOption(config.routerMeta,path),
      }
      oddCurrentRoute=currentRoute 
      currentRoute = to
      parentRoute = oddCurrentRoute
      routesList.push(to)

    } else { 
      options = {delta:1,...options} 
      parentRoute = routesList[routesList.length - options.delta]
      routesList.splice(-options.delta)
      currentRoute = routesList[routesList.length - 1]
      to = currentRoute
    }
    config.loading && showLoading(config.loadingText)
    await currentRouterInstance.beforeEachFunc({ next, to, from:parentRoute })
    config.loading && uni.hideLoading()
    if (isNext()) {
      const navigatPage = navigat()
      if (navigatPage) {
        uni[navigatPage.type]({url: navigatPage.url})
        return
      }
     
      nativeRoutersFunc[to.type]({
        url: to.url,
        success: () => { 
          success()
          isUnload=false
          currentRouterInstance.afterEachFunc && currentRouterInstance.afterEachFunc({ to, from: parentRoute })
        },
        fail: () => {
          config.notFound && uni.navigateTo({ url: config.notFound })
        }
      })
    } else {
      uni[parentRoute.type]({url: parentRoute.url})
    }
  }
})
async function handleUnload() {
  let isNext = false
  let navigat
  parentRoute = routesList[routesList.length - 1]
  routesList.pop()
  currentRoute = routesList[routesList.length - 1]
  const next = (page) => {
    navigat = page
    isNext = true
  }
  config.loading && showLoading(config.loadingText)
  await currentRouterInstance.beforeEachFunc({ next, to:currentRoute, from: parentRoute })
  config.loading && uni.hideLoading()
  if (!isNext) {
    uni[parentRoute.type]({
      ...parentRoute,
    })
    return 
  }
  if (navigat) { 
    uni[navigat.type]({ url: navigat.url })
  }
}

let publicHooks:RouterPublicMixin ={
  async beforeCreate() { 
    if (firstPage && this.route) {
      const page = getCurrentPage()
      if (page) {
        currentRoute = {
          path: '/' + page.route,
          options: page.options || page.$page?.options || {},
          type: 'switchTab',
          url: page.$page?.fullPath || '',
          mate: getMetaOption(config.routerMeta,'/' + page.route),
        }
        routesList.push( currentRoute)
        const { next ,isNext,navigat } = createNextControl()
        config.loading && showLoading(config.loadingText)
        await currentRouterInstance.beforeEachFunc({ next, to:currentRoute,from:parentRoute })
        config.loading && uni.hideLoading()
        if (isNext()) {
        const  navigatPage=navigat()
          if (navigatPage) {
            uni[navigatPage.type]({ url: navigatPage.url })
            return
          } 
          currentRouterInstance.afterEachFunc && currentRouterInstance.afterEachFunc({to:currentRoute,from:parentRoute})
        } else { 
          uni[currentRoute.type]({ url: currentRoute.url })
        }
       
      }
      firstPage = false
    }
  },
  onUnload() {
    !isUnload && handleUnload()
  },
}

 const createPublicControl = (defaultConfig:RouterConfig, defaultHooks:RouterMixin):RouterPublicMixin&RouterMixin => { 
  Object.assign(config, defaultConfig);
  currentRouterInstance = {
    ...defaultHooks,
   ...publicHooks,
   }
  return currentRouterInstance
}
export default createPublicControl
// #endif
