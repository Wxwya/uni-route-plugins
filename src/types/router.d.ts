
type NavigatType = "navigateTo" | "redirectTo" | "switchTab" | "reLaunch" | "navigateBack";
 type RouterEvent = {
  to: RouterPage;
  from: RouterPage;
  next: (options?: Pick<RouterPage, "url" | "type">) => void;
};
type RouterBeforeEach = (e: RouterEvent) => void ;
type RouterAfterEach = (e: Omit<RouterEvent, "next">) => void;
type RouterMixin = {
  beforeEachFunc: RouterBeforeEach;
  afterEachFunc: RouterAfterEach;
  beforeEach: (callback: RouterBeforeEach) => void;
  afterEach: (callback: RouterAfterEach) => void;
  install: (app:any) => void;
};
type RouterPublicMixin = {
  beforeCreate: () => void;
  onUnload: () => void;
};
type RouterMethod = (options: UniNamespace.NavigateToOptions | UniNamespace.RedirectToOptions | UniNamespace.SwitchTabOptions | UniNamespace.ReLaunchOptions | UniNamespace.NavigateBackOptions) => void;

type RouterWxMixin = {
  onLaunch: () => void;
  mounted: () => void;
  beforeCreate: () => void;
}
 interface RouterConfig { 
  loading?: boolean,
  loadingText?: string,
  startPage?: string,
   routerMeta: Record<string, any>,
   notFound:string
}
 interface RouterPage { 
  meta?: Record<string, any>,
  url: string,
  path: string,
  options: any,
  type:NavigatType,
}
interface NextResponse { 
  isNext: ()=>boolean,
  navigat: ()=>Pick<RouterPage, "url" | "type"> | null,
  next: (options?: Pick<RouterPage, "url" | "type">) => void,
}