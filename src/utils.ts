
export function createNextControl():NextResponse { 
  let isNext = false
  let navigat: Pick<RouterPage, "url" | "type"> | null = null;  
  const next = (options?:Pick<RouterPage,"url"|"type">) => { 
    navigat = options || null
    isNext = true
  }
  return {isNext:()=>isNext,navigat:()=>navigat,next}
}

export function getCurrentPage(index:number = 1): any {
  const pages = getCurrentPages()
  return pages[pages.length - index]
}
export function getMetaOption(routerMeta:Record<string, any>,path: string) { 
 return routerMeta[path] || {};
}
export function showLoading( title:string = "加载中") {
  uni.showLoading({
    title,
    mask: true,
  })
}
export const replaceRouters = ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'navigateBack']