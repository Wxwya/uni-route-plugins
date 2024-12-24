declare const createRouter: (config: RouterConfig) => (RouterWxMixin & RouterMixin) | (RouterPublicMixin & RouterMixin);
export default createRouter;
