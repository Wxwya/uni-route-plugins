import createWxControl from "./wx";
import createPublicControl from "./h5app";


const defaultHooks:RouterMixin = {
  beforeEachFunc: () => { },
  afterEachFunc: () => { },
  beforeEach(callback: RouterBeforeEach) {
    if (typeof callback === 'function') {
      this.beforeEachFunc = callback
      // that = this
    } else {
      throw new Error('beforeEach 必须是一个函数')
    }
  },

  afterEach(callback: RouterAfterEach) {
    if (typeof callback === 'function') {
      this.afterEachFunc = callback
    } else {
      throw new Error('afterEach 必须是一个函数')
    }
  },
  install(app: any) {
    app.mixin(this)
  },
}

const createRouter = (config:RouterConfig) => { 
  
  // #ifdef MP-WEIXIN
  return createWxControl(config, defaultHooks)
  // #endif

  // #ifdef H5 || APP-PLUS
  return createPublicControl(config, defaultHooks)
  // #endif
}
export default createRouter