# 项目介绍
 > uni-app路由插件，支持路由守卫功能,直接微信小程序，h5，安卓，ios ，亲测有效




# 插件使用
- 安装插件
  ```sh
  pnpm add uni-route-plugins

- 插件使用
``` ts
 import createRouter from "uni-route-plugins";

/** 
 *  notFound 可填可不填 跳转到404页面使用
*/
const routerMeta = {
    "/pages/index/index": { name: "index" },
    "/pages/about/index": { name: "about" },
    "/pages/test/index": { name: "test" },
    "/pages/user/index": { name: "user" },
    "/pages/home/index": { name: "home" },
}
const router = createRouter({startPage: "/pages/index/index", routerMeta,});
router.beforeEach(async ({ to, from, next }) => {
  
  const token = cache.get(TOKEN_KEY)
  const systemStore = useSystemStore();
  const { userInfo } = storeToRefs(systemStore) 
  if (token) {
    if (!userInfo.value.name) {
      await systemStore.getUserInfo();
    } 
    if (to.path === "/pages/login/index") { 
      next({ type: "switchTab", url: "/pages/index/index" })
      return
    }
  } else { 
    if (to.path != "/pages/login/index") {
      next({ type: "reLaunch", url: "/pages/login/index" })
      return
    } 
  }
  next()
});
router.afterEach(({to,from}) => {
  console.log("afterEach钩子", to,from);
});
export default router;
```

# 插件配置

## beforeEach 路由前置守卫
- to：目标路由对象，包含目标路径、参数等信息。
- from：当前路由对象，包含当前路径、参数等信息。
- next：控制是否放行。



