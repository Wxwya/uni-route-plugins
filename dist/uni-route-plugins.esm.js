/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
        var ar = [];
        for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while (r = env.stack.pop()) {
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                else s |= 1;
            }
            catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
        });
    }
    return path;
}

var _tslib = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __esDecorate: __esDecorate,
    __runInitializers: __runInitializers,
    __propKey: __propKey,
    __setFunctionName: __setFunctionName,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
    __rewriteRelativeImportExtension: __rewriteRelativeImportExtension,
};

function createNextControl() {
    var isNext = false;
    var navigat = null;
    var next = function (options) {
        navigat = options || null;
        isNext = true;
    };
    return { isNext: function () { return isNext; }, navigat: function () { return navigat; }, next: next };
}
function getCurrentPage(index) {
    if (index === void 0) { index = 1; }
    var pages = getCurrentPages();
    return pages[pages.length - index];
}
function getMetaOption(routerMeta, path) {
    return routerMeta[path] || {};
}
function showLoading(title) {
    if (title === void 0) { title = "加载中"; }
    uni.showLoading({
        title: title,
        mask: true,
    });
}
var replaceRouters = ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'navigateBack'];

// #ifdef MP-WEIXIN
var currentRouterInstance$1;
var config$1 = {
    loading: true,
    loadingText: "加载中",
    startPage: "/",
    routerMeta: {},
    notFound: "/pages/notFound/index",
};
var currentRoute$1 = {
    path: '/',
    options: {},
    url: '/',
    type: 'switchTab',
};
// 存储上一个路由信息
var parentRoute$1 = {
    options: {},
    path: '/',
    type: 'switchTab',
    url: '/',
};
replaceRouters.forEach(function (item) {
    uni.addInterceptor(item, {
        fail: function () {
            config$1.notFound && uni.navigateTo({ url: config$1.notFound });
        }
    });
});
function onShow() {
    var _a;
    (_a = this === null || this === void 0 ? void 0 : this.$) === null || _a === void 0 ? void 0 : _a.onLoad[0]();
}
function onLoad(onLoads) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, next, isNext, navigat, navigatPage;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = createNextControl(), next = _a.next, isNext = _a.isNext, navigat = _a.navigat;
                    config$1.loading && showLoading(config$1.loadingText);
                    return [4 /*yield*/, currentRouterInstance$1.beforeEachFunc({ next: next, to: currentRoute$1, from: parentRoute$1 })];
                case 1:
                    _b.sent();
                    config$1.loading && uni.hideLoading();
                    if (!isNext()) {
                        uni[parentRoute$1.type]({ url: parentRoute$1.url });
                    }
                    else {
                        onLoads.forEach(function (func) {
                            func.call(_this, _this.$scope.options);
                        });
                        navigatPage = navigat();
                        if (navigatPage) {
                            uni[navigatPage.type]({ url: navigatPage.url });
                        }
                        else {
                            currentRouterInstance$1.afterEachFunc({ to: currentRoute$1, from: parentRoute$1 });
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var wxHooks = {
    onLaunch: function () {
        uni.onBeforeAppRoute(function (res) {
            var meta = getMetaOption(config$1.routerMeta, '/' + res.path);
            parentRoute$1 = currentRoute$1;
            currentRoute$1 = {
                path: '/' + res.path,
                options: res.query,
                url: '/' + res.path,
                type: res.openType === 'appLaunch' ? 'switchTab' : res.openType,
                meta: meta
            };
        });
    },
    beforeCreate: function () {
        return __awaiter(this, void 0, void 0, function () {
            var onFunc;
            return __generator(this, function (_a) {
                if (this.mpType == 'page') {
                    onFunc = this.$.onLoad ? __spreadArray([], this.$.onLoad, true) : [];
                    onFunc = this.$onShow ? __spreadArray(__spreadArray([], onFunc, true), this.$onShow, true) : onFunc;
                    this.$.onLoad = [onLoad.bind(this, onFunc)];
                    this.$.onShow = [];
                }
                return [2 /*return*/];
            });
        });
    },
    mounted: function () {
        var _this = this;
        nextTick(function () {
            if (_this.$mpType === "page") {
                _this.$.onShow.unshift(onShow.bind(_this));
            }
        });
    },
};
var createWxControl = function (defaultConfig, defaultHooks) {
    Object.assign(config$1, defaultConfig);
    if (defaultConfig.startPage) {
        parentRoute$1.path = defaultConfig.startPage;
        parentRoute$1.url = defaultConfig.startPage;
        currentRoute$1.path = defaultConfig.startPage;
        currentRoute$1.url = defaultConfig.startPage;
    }
    currentRouterInstance$1 = __assign(__assign({}, wxHooks), defaultHooks);
    return currentRouterInstance$1;
};
// #endif

// #ifdef H5 || APP-PLUS
var firstPage = true;
var isUnload = false;
var currentRouterInstance;
var config = {
    loading: true,
    loadingText: "加载中",
    startPage: "/",
    routerMeta: {},
    notFound: "/pages/notFound/index",
};
var routesList = [{ path: config.startPage, url: config.startPage, options: {}, type: 'switchTab' }];
var currentRoute = {
    path: '/',
    options: {},
    url: '/',
    type: 'switchTab',
};
// 存储上一个路由信息
var parentRoute = {
    options: {},
    path: '/',
    type: 'switchTab',
    url: '/',
};
// 重写路由方法
var nativeRoutersFunc = Object.fromEntries(replaceRouters.map(function (item) { return [item, uni[item]]; }));
function getQueryParams(url) {
    var _a = url.split("?") || [url, ""], path = _a[0], _b = _a[1], queryString = _b === void 0 ? "" : _b;
    var query = Object.fromEntries(queryString.split("&").map(function (pair) { return pair.split("=").map(decodeURIComponent); }));
    return { path: path, query: query };
}
replaceRouters.forEach(function (item) {
    uni[item] = function (options) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, next, isNext, navigat, to, success, oddCurrentRoute, _b, path, query, navigatPage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = createNextControl(), next = _a.next, isNext = _a.isNext, navigat = _a.navigat;
                    success = options.success || (function () { });
                    if (item != "navigateTo") {
                        isUnload = true;
                    }
                    if (item != "navigateBack") {
                        _b = getQueryParams(options.url), path = _b.path, query = _b.query;
                        to = {
                            path: path,
                            options: query,
                            url: options.url,
                            type: item,
                            meta: getMetaOption(config.routerMeta, path),
                        };
                        oddCurrentRoute = currentRoute;
                        currentRoute = to;
                        parentRoute = oddCurrentRoute;
                        routesList.push(to);
                    }
                    else {
                        options = __assign({ delta: 1 }, options);
                        parentRoute = routesList[routesList.length - options.delta];
                        routesList.splice(-options.delta);
                        currentRoute = routesList[routesList.length - 1];
                        to = currentRoute;
                    }
                    config.loading && showLoading(config.loadingText);
                    return [4 /*yield*/, currentRouterInstance.beforeEachFunc({ next: next, to: to, from: parentRoute })];
                case 1:
                    _c.sent();
                    config.loading && uni.hideLoading();
                    if (isNext()) {
                        navigatPage = navigat();
                        if (navigatPage) {
                            uni[navigatPage.type]({ url: navigatPage.url });
                            return [2 /*return*/];
                        }
                        nativeRoutersFunc[to.type]({
                            url: to.url,
                            success: function () {
                                success();
                                isUnload = false;
                                currentRouterInstance.afterEachFunc && currentRouterInstance.afterEachFunc({ to: to, from: parentRoute });
                            },
                            fail: function () {
                                config.notFound && uni.navigateTo({ url: config.notFound });
                            }
                        });
                    }
                    else {
                        uni[parentRoute.type]({ url: parentRoute.url });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
});
function handleUnload() {
    return __awaiter(this, void 0, void 0, function () {
        var isNext, navigat, next;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isNext = false;
                    parentRoute = routesList[routesList.length - 1];
                    routesList.pop();
                    currentRoute = routesList[routesList.length - 1];
                    next = function (page) {
                        navigat = page;
                        isNext = true;
                    };
                    config.loading && showLoading(config.loadingText);
                    return [4 /*yield*/, currentRouterInstance.beforeEachFunc({ next: next, to: currentRoute, from: parentRoute })];
                case 1:
                    _a.sent();
                    config.loading && uni.hideLoading();
                    if (!isNext) {
                        uni[parentRoute.type](__assign({}, parentRoute));
                        return [2 /*return*/];
                    }
                    if (navigat) {
                        uni[navigat.type]({ url: navigat.url });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var publicHooks = {
    beforeCreate: function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, _a, next, isNext, navigat, navigatPage;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(firstPage && this.route)) return [3 /*break*/, 3];
                        page = getCurrentPage();
                        if (!page) return [3 /*break*/, 2];
                        currentRoute = {
                            path: '/' + page.route,
                            options: page.options || ((_b = page.$page) === null || _b === void 0 ? void 0 : _b.options) || {},
                            type: 'switchTab',
                            url: ((_c = page.$page) === null || _c === void 0 ? void 0 : _c.fullPath) || '',
                            mate: getMetaOption(config.routerMeta, '/' + page.route),
                        };
                        routesList.push(currentRoute);
                        _a = createNextControl(), next = _a.next, isNext = _a.isNext, navigat = _a.navigat;
                        config.loading && showLoading(config.loadingText);
                        return [4 /*yield*/, currentRouterInstance.beforeEachFunc({ next: next, to: currentRoute, from: parentRoute })];
                    case 1:
                        _d.sent();
                        config.loading && uni.hideLoading();
                        if (isNext()) {
                            navigatPage = navigat();
                            if (navigatPage) {
                                uni[navigatPage.type]({ url: navigatPage.url });
                                return [2 /*return*/];
                            }
                            currentRouterInstance.afterEachFunc && currentRouterInstance.afterEachFunc({ to: currentRoute, from: parentRoute });
                        }
                        else {
                            uni[currentRoute.type]({ url: currentRoute.url });
                        }
                        _d.label = 2;
                    case 2:
                        firstPage = false;
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    onUnload: function () {
        !isUnload && handleUnload();
    },
};
var createPublicControl = function (defaultConfig, defaultHooks) {
    Object.assign(config, defaultConfig);
    currentRouterInstance = __assign(__assign({}, defaultHooks), publicHooks);
    return currentRouterInstance;
};
// #endif

var defaultHooks = {
    beforeEachFunc: function () { },
    afterEachFunc: function () { },
    beforeEach: function (callback) {
        if (typeof callback === 'function') {
            this.beforeEachFunc = callback;
            // that = this
        }
        else {
            throw new Error('beforeEach 必须是一个函数');
        }
    },
    afterEach: function (callback) {
        if (typeof callback === 'function') {
            this.afterEachFunc = callback;
        }
        else {
            throw new Error('afterEach 必须是一个函数');
        }
    },
    install: function (app) {
        app.mixin(this);
    },
};
var createRouter = function (config) {
    // #ifdef MP-WEIXIN
    return createWxControl(config, defaultHooks);
    // #endif
    // #ifdef H5 || APP-PLUS
    return createPublicControl(config, defaultHooks);
    // #endif
};

export { createRouter as default };
