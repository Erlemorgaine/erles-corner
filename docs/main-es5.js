function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sunset/sunset.component */
    "./src/app/sunset/sunset.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _charts_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./charts/charts.component */
    "./src/app/charts/charts.component.ts");
    /* harmony import */


    var _charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./charts/lego/lego-charts.component */
    "./src/app/charts/lego/lego-charts.component.ts");
    /* harmony import */


    var _charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./charts/default/default-charts.component */
    "./src/app/charts/default/default-charts.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'sunset',
      component: _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_2__["SunsetComponent"]
    }, {
      path: 'charts',
      component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"],
      children: [{
        path: 'default',
        component: _charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_6__["DefaultChartsComponent"]
      }, {
        path: 'lego',
        component: _charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_5__["LegoChartsComponent"]
      }]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.links = [{
        link: 'sunset',
        text: 'Naar de zonsondergang'
      }];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sunset/sunset.component */
    "./src/app/sunset/sunset.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _charts_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./charts/charts.component */
    "./src/app/charts/charts.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./charts/bar-chart/bar-chart.component */
    "./src/app/charts/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _charts_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./charts/radar-chart/radar-chart.component */
    "./src/app/charts/radar-chart/radar-chart.component.ts");
    /* harmony import */


    var _charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./charts/pie-chart/pie-chart.component */
    "./src/app/charts/pie-chart/pie-chart.component.ts");
    /* harmony import */


    var _charts_lego_theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./charts/lego/theme-per-decade/theme-decade.component */
    "./src/app/charts/lego/theme-per-decade/theme-decade.component.ts");
    /* harmony import */


    var _charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./charts/lego/lego-charts.component */
    "./src/app/charts/lego/lego-charts.component.ts");
    /* harmony import */


    var _charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./charts/default/default-charts.component */
    "./src/app/charts/default/default-charts.component.ts");
    /* harmony import */


    var _charts_lego_colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./charts/lego/colors-per-theme/colors-theme.component */
    "./src/app/charts/lego/colors-per-theme/colors-theme.component.ts");
    /* harmony import */


    var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives/focus.directive */
    "./src/app/directives/focus.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__["SunsetComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"], _charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_13__["DefaultChartsComponent"], _charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"], _charts_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__["RadarChartComponent"], _charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__["PieChartComponent"], _charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_12__["LegoChartsComponent"], _charts_lego_theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_11__["ThemeDecadeComponent"], _charts_lego_colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_14__["ColorsThemeComponent"], _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__["FocusDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__["SunsetComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"], _charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_13__["DefaultChartsComponent"], _charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"], _charts_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__["RadarChartComponent"], _charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__["PieChartComponent"], _charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_12__["LegoChartsComponent"], _charts_lego_theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_11__["ThemeDecadeComponent"], _charts_lego_colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_14__["ColorsThemeComponent"], _directives_focus_directive__WEBPACK_IMPORTED_MODULE_15__["FocusDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/bar-chart/bar-chart.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/charts/bar-chart/bar-chart.component.ts ***!
    \*********************************************************/

  /*! exports provided: BarChartComponent */

  /***/
  function srcAppChartsBarChartBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
      return BarChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var patternomaly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! patternomaly */
    "./node_modules/patternomaly/dist/patternomaly.js");
    /* harmony import */


    var patternomaly__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _chart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chart-data */
    "./src/app/charts/chart-data.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var BarChartComponent = /*#__PURE__*/function () {
      function BarChartComponent() {
        _classCallCheck(this, BarChartComponent);

        this.barChartOptions = {
          responsive: true,
          animation: {
            duration: 2000
          },
          title: Object.assign(Object.assign({}, _chart_data__WEBPACK_IMPORTED_MODULE_2__["titleOptions"]), {
            text: 'A Bar Chart'
          })
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010'];
        this.barChartData = [];
      }

      _createClass(BarChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ctx = document.getElementById('bar').getContext('2d');
          var gradient1 = ctx.createLinearGradient(20, 0, 1500, 500);
          var colors1 = ['rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)'];
          colors1.forEach(function (c, i) {
            return gradient1.addColorStop(i / colors1.length, c);
          });
          this.barChartData = [{
            data: [65, 59, 80, 81, 56],
            label: 'Series A',
            backgroundColor: gradient1,
            borderColor: 'rgb(167,12,255)',
            borderWidth: 1
          }, {
            data: [28, 48, 40, 69, 86],
            label: 'Series B',
            backgroundColor: [Object(patternomaly__WEBPACK_IMPORTED_MODULE_1__["draw"])('square', 'rgba(235,48,77,0.51)'), Object(patternomaly__WEBPACK_IMPORTED_MODULE_1__["draw"])('ring', 'rgba(54,162,235,0.53)'), Object(patternomaly__WEBPACK_IMPORTED_MODULE_1__["draw"])('diamond', 'rgba(204,101,254,0.5)'), Object(patternomaly__WEBPACK_IMPORTED_MODULE_1__["draw"])('triangle', 'rgba(255,206,86,0.5)'), Object(patternomaly__WEBPACK_IMPORTED_MODULE_1__["draw"])('weave', 'rgba(31,255,99,0.51)')],
            borderColor: 'rgba(235,141,9,0.5)',
            borderWidth: 1
          }];
        }
      }]);

      return BarChartComponent;
    }();

    BarChartComponent.ɵfac = function BarChartComponent_Factory(t) {
      return new (t || BarChartComponent)();
    };

    BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarChartComponent,
      selectors: [["app-bar-chart"]],
      decls: 2,
      vars: 5,
      consts: [["baseChart", "", "id", "bar", 3, "datasets", "labels", "options", "legend", "chartType"]],
      template: function BarChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", true)("chartType", "bar");
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bar-chart',
          templateUrl: './bar-chart.component.html',
          styleUrls: ['./bar-chart.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/chart-data.ts":
  /*!**************************************!*\
    !*** ./src/app/charts/chart-data.ts ***!
    \**************************************/

  /*! exports provided: titleOptions, chartFontColor */

  /***/
  function srcAppChartsChartDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "titleOptions", function () {
      return titleOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chartFontColor", function () {
      return chartFontColor;
    });

    var titleOptions = {
      display: true,
      fontSize: 24,
      fontFamily: 'Do Hyeon'
    };

    function chartFontColor(title) {
      var withScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var positionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';
      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        fontColor: 'black'
      };
      var scale = {
        scale: {
          pointLabels: Object.assign(Object.assign({}, color), {
            fontSize: 16
          }),
          ticks: Object.assign({}, color)
        }
      };
      return Object.assign({
        title: Object.assign(Object.assign(Object.assign({}, titleOptions), color), {
          text: title
        }),
        legend: {
          position: positionType,
          labels: Object.assign({}, color)
        }
      }, withScale ? scale : {});
    }
    /***/

  },

  /***/
  "./src/app/charts/charts.component.ts":
  /*!********************************************!*\
    !*** ./src/app/charts/charts.component.ts ***!
    \********************************************/

  /*! exports provided: ChartsComponent */

  /***/
  function srcAppChartsChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsComponent", function () {
      return ChartsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_color_blind_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/color-blind.service */
    "./src/app/services/color-blind.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "mode-off": a0
      };
    };

    function ChartsComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.toggleColorBlindMode(!ctx_r6.colorBlindModeOn);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.colorBlindModeOn));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Turn colorblind mode " + (ctx_r4.colorBlindModeOn ? "off" : "on"), " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "current": a0
      };
    };

    function ChartsComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsComponent_a_7_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var link_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.setUrl(link_r8.link);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r8 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r5.url === link_r8.link))("routerLink", "/charts/" + link_r8.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r8.text, " ");
      }
    }

    var ChartsComponent = /*#__PURE__*/function () {
      function ChartsComponent(route, router, colorBlindService) {
        _classCallCheck(this, ChartsComponent);

        this.route = route;
        this.router = router;
        this.colorBlindService = colorBlindService;
        this.colorBlindModeOn = false;
        this.chartLinks = [{
          link: 'default',
          text: 'Try-and-see'
        }, {
          link: 'lego',
          text: 'Lego land'
        }];
        chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.defaultFontColor = 'white';
        chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.defaultFontSize = 16;
        chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.defaultFontFamily = 'Raleway';
        chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.elements.line.borderColor = 'white';

        chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.legend.onHover = function (e) {
          return e.target.style.cursor = 'pointer';
        };

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
      }

      _createClass(ChartsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.url = this.route.snapshot.firstChild.url[0].path;
        }
      }, {
        key: "setUrl",
        value: function setUrl(val) {
          this.url = val;
        }
      }, {
        key: "toggleColorBlindMode",
        value: function toggleColorBlindMode(val) {
          this.colorBlindModeOn = val;
          this.colorBlindService.colorBlindModeOn$.next(val);
        }
      }]);

      return ChartsComponent;
    }();

    ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
      return new (t || ChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_blind_service__WEBPACK_IMPORTED_MODULE_3__["ColorBlindService"]));
    };

    ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartsComponent,
      selectors: [["app-charts"]],
      decls: 9,
      vars: 3,
      consts: [[1, "container-black"], [1, "back-wrapper"], [1, "page-link", 3, "routerLink"], [3, "ngClass", "click", 4, "ngIf"], ["class", "page-link", 3, "ngClass", "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "page-link", 3, "ngClass", "routerLink", "click"]],
      template: function ChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go back home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChartsComponent_button_5_Template, 2, 4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChartsComponent_a_7_Template, 2, 5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url === "lego");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chartLinks);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: ["@-webkit-keyframes pulsingButton {\n  from {\n    box-shadow: none;\n  }\n  to {\n    box-shadow: 3px 3px 4px 4px white, -3px -3px 4px 4px white;\n  }\n}\n@keyframes pulsingButton {\n  from {\n    box-shadow: none;\n  }\n  to {\n    box-shadow: 3px 3px 4px 4px white, -3px -3px 4px 4px white;\n  }\n}\n  .container-black .chart {\n  padding: 2rem 0;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-family: \"Reenie Beanie\", cursive;\n  font-size: 1.5rem;\n  background-color: white;\n  border: 2px solid black;\n  padding: 0.25rem 0.75rem;\n  align-self: flex-end;\n}\nbutton.mode-off[_ngcontent-%COMP%] {\n  color: white;\n  background-color: black;\n  border: 2px solid white;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  -webkit-animation: pulsingButton 0.5s alternate infinite;\n          animation: pulsingButton 0.5s alternate infinite;\n}\n.back-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  border-bottom: 4px solid white;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFBTyxnQkFBQTtFQ0FQO0VEQ0E7SUFBSywwREFBQTtFQ0VMO0FBQ0Y7QURMQTtFQUNFO0lBQU8sZ0JBQUE7RUNBUDtFRENBO0lBQUssMERBQUE7RUNFTDtBQUNGO0FEQUE7RUFDRSxlQUFBO0FDRUY7QURDQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FDRUY7QURBRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDRUo7QURDRTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUNDSjtBREdBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5cbkBrZXlmcmFtZXMgcHVsc2luZ0J1dHRvbiB7XG4gIGZyb20geyBib3gtc2hhZG93OiBub25lIH1cbiAgdG8geyBib3gtc2hhZG93OiAzcHggM3B4ICA0cHggNHB4IHdoaXRlLCAtM3B4IC0zcHggNHB4IDRweCB3aGl0ZSB9XG59XG5cbjo6bmctZGVlcCAuY29udGFpbmVyLWJsYWNrIC5jaGFydCB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdSZWVuaWUgQmVhbmllJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cbiAgJi5tb2RlLW9mZiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBwdWxzaW5nQnV0dG9uIC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIH1cbn1cblxuLmJhY2std3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiIsIkBrZXlmcmFtZXMgcHVsc2luZ0J1dHRvbiB7XG4gIGZyb20ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDRweCB3aGl0ZSwgLTNweCAtM3B4IDRweCA0cHggd2hpdGU7XG4gIH1cbn1cbjo6bmctZGVlcCAuY29udGFpbmVyLWJsYWNrIC5jaGFydCB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUmVlbmllIEJlYW5pZVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuYnV0dG9uLm1vZGUtb2ZmIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5idXR0b246aG92ZXIge1xuICBhbmltYXRpb246IHB1bHNpbmdCdXR0b24gMC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XG59XG5cbi5iYWNrLXdyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-charts',
          templateUrl: './charts.component.html',
          styleUrls: ['./charts.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_color_blind_service__WEBPACK_IMPORTED_MODULE_3__["ColorBlindService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/default/default-charts.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/charts/default/default-charts.component.ts ***!
    \************************************************************/

  /*! exports provided: DefaultChartsComponent */

  /***/
  function srcAppChartsDefaultDefaultChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultChartsComponent", function () {
      return DefaultChartsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../bar-chart/bar-chart.component */
    "./src/app/charts/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../radar-chart/radar-chart.component */
    "./src/app/charts/radar-chart/radar-chart.component.ts");
    /* harmony import */


    var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pie-chart/pie-chart.component */
    "./src/app/charts/pie-chart/pie-chart.component.ts");

    var DefaultChartsComponent = function DefaultChartsComponent() {
      _classCallCheck(this, DefaultChartsComponent);
    };

    DefaultChartsComponent.ɵfac = function DefaultChartsComponent_Factory(t) {
      return new (t || DefaultChartsComponent)();
    };

    DefaultChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefaultChartsComponent,
      selectors: [["app-default-charts"]],
      decls: 6,
      vars: 0,
      consts: [[1, "chart"]],
      template: function DefaultChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bar-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-radar-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-pie-chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"], _radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_2__["RadarChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"]],
      styles: [".chart[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: \"black\";\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #efdab3;\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #090047;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9jaGFydHMvZGVmYXVsdC9kZWZhdWx0LWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRzL2RlZmF1bHQvZGVmYXVsdC1jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSx5QkFORjtBQ0RGOztBRE1FO0VBQ0UseUJBTkY7QUNHRjs7QURFRTtFQUNFLHlCQU5GO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9jaGFydHMvZGVmYXVsdC9kZWZhdWx0LWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5cbiRjaGFydENvbG9yczpcbiAgMSAnYmxhY2snLFxuICAyICRob21lLTUtbGlnaHQsXG4gIDMgJGhvbWUtMi1kYXJrO1xuXG5AZWFjaCAkaSwgJGJnQ29sb3IgaW4gJGNoYXJ0Q29sb3JzIHtcbiAgLmNoYXJ0Om50aC1jaGlsZCgjeyRpfSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xuICB9XG59XG4iLCIuY2hhcnQ6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogXCJibGFja1wiO1xufVxuXG4uY2hhcnQ6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZGFiMztcbn1cblxuLmNoYXJ0Om50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTAwNDc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-default-charts',
          templateUrl: './default-charts.component.html',
          styleUrls: ['./default-charts.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/lego/colors-per-theme/colors-theme.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/charts/lego/colors-per-theme/colors-theme.component.ts ***!
    \************************************************************************/

  /*! exports provided: ColorsThemeComponent */

  /***/
  function srcAppChartsLegoColorsPerThemeColorsThemeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorsThemeComponent", function () {
      return ColorsThemeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../chart-data */
    "./src/app/charts/chart-data.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _lego_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lego-chart.component */
    "./src/app/charts/lego/lego-chart.component.ts");
    /* harmony import */


    var _services_color_blind_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/color-blind.service */
    "./src/app/services/color-blind.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../directives/focus.directive */
    "./src/app/directives/focus.directive.ts");

    var _c0 = function _c0(a0) {
      return {
        "focus": a0
      };
    };

    function ColorsThemeComponent_div_0_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsThemeComponent_div_0_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var theme_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.setTheme(theme_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var theme_r20 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, theme_r20 === ctx_r17.currentTheme));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", theme_r20, " ");
      }
    }

    function ColorsThemeComponent_div_0_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsThemeComponent_div_0_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var decade_r23 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.setOtherDecade(decade_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var decade_r23 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, decade_r23 === ctx_r18.currentDecade));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](decade_r23);
      }
    }

    function ColorsThemeComponent_div_0_h2_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Theme: " + ctx_r19.currentTheme);
      }
    }

    function ColorsThemeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Total amount of colored parts in Lego sets in a theme");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColorsThemeComponent_div_0_button_4_Template, 2, 4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColorsThemeComponent_div_0_button_7_Template, 4, 4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ColorsThemeComponent_div_0_h2_9_Template, 2, 1, "h2", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "canvas", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.themes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.decades);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.typingAnimation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r16.barChartData)("labels", ctx_r16.barChartLabels)("options", ctx_r16.barChartOptions)("legend", true)("chartType", "pie");
      }
    }

    var ColorsThemeComponent = /*#__PURE__*/function (_lego_chart_component) {
      _inherits(ColorsThemeComponent, _lego_chart_component);

      var _super = _createSuper(ColorsThemeComponent);

      function ColorsThemeComponent(colorBlindService) {
        var _this;

        _classCallCheck(this, ColorsThemeComponent);

        _this = _super.call(this);
        _this.colorBlindService = colorBlindService;
        _this.currentTheme = 'Pirates';
        _this.currentDecade = '1990s';
        _this.typingAnimation = true;
        _this.barChartOptions = Object.assign({
          responsive: true,
          animation: {
            duration: 2000
          }
        }, Object(_chart_data__WEBPACK_IMPORTED_MODULE_1__["chartFontColor"])('', false, 'left'));
        return _this;
      }

      _createClass(ColorsThemeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          d3__WEBPACK_IMPORTED_MODULE_2__["csv"]('assets/reduced_color_data.csv').then(function (data) {
            // Group data by parent theme, group data from each parent theme by decade
            var dataByTheme = _this2.setInitialDataByTheme(data);

            var themes = Object.keys(dataByTheme);
            _this2.themes = themes;
            themes.forEach(function (k) {
              return dataByTheme[k] = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](dataByTheme[k], function (d) {
                return d['decade'];
              });
            });
            _this2.data = dataByTheme;

            _this2.colorBlindService.colorBlindModeOn$.subscribe(function (res) {
              var dataOfTheme = _this2.sortTheme(dataByTheme[_this2.currentTheme]);

              _this2.dataOfTheme = dataOfTheme;
              _this2.decades = _this2.setDecades(Object.keys(dataOfTheme));
              _this2.barChartLabels = _this2.setLabels(dataOfTheme, _this2.currentDecade);
              _this2.colorBlindMode = res;

              _this2.setData(dataOfTheme, _this2.currentDecade, res);
            });
          });
        } // Sorts each decade by quantity of (colored) parts

      }, {
        key: "sortTheme",
        value: function sortTheme(data) {
          Object.keys(data).map(function (k) {
            return data[k] = data[k] // reverse sort so that labels are more clearly ordered (large -> small)
            .sort(function (a, b) {
              return -(a['part_quantity'] - b['part_quantity']);
            });
          });
          return data;
        }
      }, {
        key: "setLabels",
        value: function setLabels(data, decade) {
          return data[decade].map(function (d) {
            return d['color_name'];
          });
        }
      }, {
        key: "setTheme",
        value: function setTheme(theme) {
          var _this3 = this;

          // hacky way to re-fire the typing animation
          this.typingAnimation = false;
          setTimeout(function () {
            _this3.typingAnimation = true;
          }, 1);
          this.currentTheme = theme;
          var newData = this.sortTheme(this.data[theme]);
          this.dataOfTheme = newData;
          var decades = this.setDecades(Object.keys(newData));
          this.decades = decades;
          this.setOtherDecade(decades[0]);
        }
      }, {
        key: "setOtherDecade",
        value: function setOtherDecade(decade) {
          this.currentDecade = decade;
          this.setData(this.dataOfTheme, decade, this.colorBlindMode);
          this.barChartLabels = this.setLabels(this.dataOfTheme, decade);
        }
      }, {
        key: "setData",
        value: function setData(data, decade, colorBlindMode) {
          var _this4 = this;

          this.barChartData = [{
            data: data[decade].map(function (d) {
              return d['part_quantity'];
            }),
            backgroundColor: data[decade].map(function (d, i) {
              return _this4.setColorBlindMode('#' + d['rgb'], i, ['White', 'Trans-Clear'].includes(d['color_name']), colorBlindMode);
            }),
            borderWidth: 0
          }];
        }
      }]);

      return ColorsThemeComponent;
    }(_lego_chart_component__WEBPACK_IMPORTED_MODULE_4__["LegoChartComponent"]);

    ColorsThemeComponent.ɵfac = function ColorsThemeComponent_Factory(t) {
      return new (t || ColorsThemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_blind_service__WEBPACK_IMPORTED_MODULE_5__["ColorBlindService"]));
    };

    ColorsThemeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorsThemeComponent,
      selectors: [["app-colors-theme"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "chart-header"], [1, "theme-buttons"], ["class", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pie-container"], [1, "decade-buttons"], ["inputFocus", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "type-effect"], ["class", "chart-header", 4, "ngIf"], ["baseChart", "", "id", "colors-theme", 3, "datasets", "labels", "options", "legend", "chartType"], [1, "", 3, "ngClass", "click"], ["inputFocus", "", 3, "ngClass", "click"], ["src", "assets/img/lego_figure.png", "alt", ""]],
      template: function ColorsThemeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColorsThemeComponent_div_0_Template, 11, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barChartLabels.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _directives_focus_directive__WEBPACK_IMPORTED_MODULE_8__["FocusDirective"]],
      styles: ["@-webkit-keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@-webkit-keyframes blinkCaret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: black;\n  }\n}\n@keyframes blinkCaret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: black;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%] {\n  color: black;\n  margin-top: 1rem;\n}\n.container[_ngcontent-%COMP%]   .type-effect[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.container[_ngcontent-%COMP%]   .type-effect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-right: 3px solid transparent;\n  white-space: nowrap;\n  -webkit-animation: typing 3s steps(40, end), blinkCaret 0.4s step-end 9;\n          animation: typing 3s steps(40, end), blinkCaret 0.4s step-end 9;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 1rem 0 1.5rem 0;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"Raleway\", sans-serif;\n  margin: 1rem 0.5rem 0 0.5rem;\n  padding: 0.25rem 0.75rem;\n  color: white;\n  width: 7rem;\n  font-weight: bold;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #0055BF;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #0055BF 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #0055BF calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #0055BF calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #0055BF;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus {\n  background-image: linear-gradient(to left, rgba(0, 85, 191, 0.6), rgba(0, 85, 191, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #00121F;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #00121F 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #00121F calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #00121F calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #00121F;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus {\n  background-image: linear-gradient(to left, rgba(0, 18, 31, 0.6), rgba(0, 18, 31, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #C31504;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #C31504 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #C31504 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #C31504 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #C31504;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus {\n  background-image: linear-gradient(to left, rgba(195, 21, 4, 0.6), rgba(195, 21, 4, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #237841;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #237841 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #237841 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #237841 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #237841;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus {\n  background-image: linear-gradient(to left, rgba(35, 120, 65, 0.6), rgba(35, 120, 65, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #583927;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #583927 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #583927 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #583927 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #583927;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus {\n  background-image: linear-gradient(to left, rgba(88, 57, 39, 0.6), rgba(88, 57, 39, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6) {\n  background-color: #0055BF;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #0055BF 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #0055BF calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #0055BF calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #0055BF;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus {\n  background-image: linear-gradient(to left, rgba(0, 85, 191, 0.6), rgba(0, 85, 191, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7) {\n  background-color: #00121F;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #00121F 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #00121F calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #00121F calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #00121F;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus {\n  background-image: linear-gradient(to left, rgba(0, 18, 31, 0.6), rgba(0, 18, 31, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8) {\n  background-color: #C31504;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #C31504 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #C31504 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #C31504 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #C31504;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus {\n  background-image: linear-gradient(to left, rgba(195, 21, 4, 0.6), rgba(195, 21, 4, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9) {\n  background-color: #237841;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #237841 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #237841 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #237841 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #237841;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus {\n  background-image: linear-gradient(to left, rgba(35, 120, 65, 0.6), rgba(35, 120, 65, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus:after {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  padding: 0 2rem 1rem 2rem;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n  border-bottom: 3px solid black;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  font-family: \"Raleway\", sans-serif;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  font-weight: bold;\n  width: 100%;\n  padding-top: 0.5rem;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #f2cd37;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #5c8ef0;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #ff6466;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #64a573;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #9c7759;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  margin-right: 0.5rem;\n  z-index: 1;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 3px;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 3px;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: url('lego.png');\n  background-size: cover;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before, .container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%]:after {\n  transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9jaGFydHMvbGVnby9jb2xvcnMtcGVyLXRoZW1lL2NvbG9ycy10aGVtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRzL2xlZ28vY29sb3JzLXBlci10aGVtZS9jb2xvcnMtdGhlbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNBO0VBQ0U7SUFBTyxRQUFBO0VDL0JQO0VEZ0NBO0lBQUssV0FBQTtFQzdCTDtBQUNGO0FEMEJBO0VBQ0U7SUFBTyxRQUFBO0VDL0JQO0VEZ0NBO0lBQUssV0FBQTtFQzdCTDtBQUNGO0FEK0JBO0VBQ0U7SUFBVyx5QkFBQTtFQzVCWDtFRDZCQTtJQUFNLG1CQUFBO0VDMUJOO0FBQ0Y7QUR1QkE7RUFDRTtJQUFXLHlCQUFBO0VDNUJYO0VENkJBO0lBQU0sbUJBQUE7RUMxQk47QUFDRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDMUJGO0FENEJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDMUJKO0FENkJFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDM0JKO0FENkJJO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUVBQ0U7VUFERiwrREFDRTtBQzVCUjtBRGlDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQy9CSjtBRGlDSTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQy9CTjtBRGtDUTtFQUNFLHlCQTdEUjtBQzZCRjtBRGtDVTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpU0FBQTtBQ2xDWjtBRDZDVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkExRlY7RUEyRlUsVUFBQTtFQUNBLHdCQUFBO0FDM0NaO0FEOENVO0VBQ0UsZ0hBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDNUNaO0FEZ0RZO0VBQ0UsVUFBQTtBQzlDZDtBREdRO0VBQ0UseUJBN0RSO0FDNERGO0FER1U7RUFHRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaVNBQUE7QUNIWjtBRGNVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQTFGVjtFQTJGVSxVQUFBO0VBQ0Esd0JBQUE7QUNaWjtBRGVVO0VBQ0UsOEdBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDYlo7QURpQlk7RUFDRSxVQUFBO0FDZmQ7QUQ1QlE7RUFDRSx5QkE3RFI7QUMyRkY7QUQ1QlU7RUFHRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaVNBQUE7QUM0Qlo7QURqQlU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EseUJBMUZWO0VBMkZVLFVBQUE7RUFDQSx3QkFBQTtBQ21CWjtBRGhCVTtFQUNFLGdIQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ2tCWjtBRGRZO0VBQ0UsVUFBQTtBQ2dCZDtBRDNEUTtFQUNFLHlCQTdEUjtBQzBIRjtBRDNEVTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpU0FBQTtBQzJEWjtBRGhEVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkExRlY7RUEyRlUsVUFBQTtFQUNBLHdCQUFBO0FDa0RaO0FEL0NVO0VBQ0Usa0hBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDaURaO0FEN0NZO0VBQ0UsVUFBQTtBQytDZDtBRDFGUTtFQUNFLHlCQTdEUjtBQ3lKRjtBRDFGVTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpU0FBQTtBQzBGWjtBRC9FVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkExRlY7RUEyRlUsVUFBQTtFQUNBLHdCQUFBO0FDaUZaO0FEOUVVO0VBQ0UsZ0hBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDZ0ZaO0FENUVZO0VBQ0UsVUFBQTtBQzhFZDtBRHpIUTtFQUNFLHlCQTdEUjtBQ3dMRjtBRHpIVTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpU0FBQTtBQ3lIWjtBRDlHVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkExRlY7RUEyRlUsVUFBQTtFQUNBLHdCQUFBO0FDZ0haO0FEN0dVO0VBQ0UsZ0hBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDK0daO0FEM0dZO0VBQ0UsVUFBQTtBQzZHZDtBRHhKUTtFQUNFLHlCQTdEUjtBQ3VORjtBRHhKVTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpU0FBQTtBQ3dKWjtBRDdJVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkExRlY7RUEyRlUsVUFBQTtFQUNBLHdCQUFBO0FDK0laO0FENUlVO0VBQ0UsOEdBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDOElaO0FEMUlZO0VBQ0UsVUFBQTtBQzRJZDtBRHZMUTtFQUNFLHlCQTdEUjtBQ3NQRjtBRHZMVTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpU0FBQTtBQ3VMWjtBRDVLVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkExRlY7RUEyRlUsVUFBQTtFQUNBLHdCQUFBO0FDOEtaO0FEM0tVO0VBQ0UsZ0hBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDNktaO0FEektZO0VBQ0UsVUFBQTtBQzJLZDtBRHROUTtFQUNFLHlCQTdEUjtBQ3FSRjtBRHROVTtFQUdFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpU0FBQTtBQ3NOWjtBRDNNVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx5QkExRlY7RUEyRlUsVUFBQTtFQUNBLHdCQUFBO0FDNk1aO0FEMU1VO0VBQ0Usa0hBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDNE1aO0FEeE1ZO0VBQ0UsVUFBQTtBQzBNZDtBRGxNRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ29NSjtBRGxNSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUNvTU47QURsTU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNvTVI7QURqTVU7RUFDRSx5QkFoSlY7QUNtVkY7QURwTVU7RUFDRSx5QkFoSlY7QUNzVkY7QUR2TVU7RUFDRSx5QkFoSlY7QUN5VkY7QUQxTVU7RUFDRSx5QkFoSlY7QUM0VkY7QUQ3TVU7RUFDRSx5QkFoSlY7QUMrVkY7QUQzTVE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FDNk1WO0FEMU1RO0VBQ0UsVUFBQTtBQzRNVjtBRHpNUTtFQUNFLDJCQUFBO0FDMk1WO0FEeE1RO0VBQ0UsNEJBQUE7QUMwTVY7QUR2TVE7RUFDRSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QUN5TVY7QUR2TVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtFQUNSLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUMwTVo7QUR0TVE7RUFDRSxpQkFBQTtBQ3dNVjtBRHRNVTtFQUNFLHdCQUFBO0FDd01aIiwiZmlsZSI6InNyYy9hcHAvY2hhcnRzL2xlZ28vY29sb3JzLXBlci10aGVtZS9jb2xvcnMtdGhlbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuXG4kbGVnby15ZWxsb3c6ICNmMmNkMzc7XG4kbGVnby15ZWxsb3ctZGFyazogI2YyY2QzNztcbiRsZWdvLWJsdWU6ICM1YzhlZjA7XG4kbGVnby1ibHVlLWRhcms6ICMwMDU1QkY7XG4kbGVnby1yZWQ6ICNmZjY0NjY7XG4kbGVnby1yZWQtZGFyazogI0MzMTUwNDtcbiRsZWdvLWdyZWVuOiAjNjRhNTczO1xuJGxlZ28tZ3JlZW4tZGFyazogIzIzNzg0MTtcbiRsZWdvLWJyb3duOiAjOWM3NzU5O1xuJGxlZ28tYnJvd24tZGFyazogIzU4MzkyNztcbiRsZWdvLWJsYWNrOiAjMDAxMjFGO1xuXG4kbGVnby1jb2xvcnM6XG4gIDEgJGxlZ28teWVsbG93LFxuICAyICRsZWdvLWJsdWUsXG4gIDMgJGxlZ28tcmVkLFxuICA0ICRsZWdvLWdyZWVuLFxuICA1ICRsZWdvLWJyb3duO1xuXG4kbGVnby1jb2xvcnMtZGFyazpcbiAgMSAkbGVnby1ibHVlLWRhcmssXG4gIDIgJGxlZ28tYmxhY2ssXG4gIDMgJGxlZ28tcmVkLWRhcmssXG4gIDQgJGxlZ28tZ3JlZW4tZGFyayxcbiAgNSAkbGVnby1icm93bi1kYXJrLFxuICA2ICRsZWdvLWJsdWUtZGFyayxcbiAgNyAkbGVnby1ibGFjayxcbiAgOCAkbGVnby1yZWQtZGFyayxcbiAgOSAkbGVnby1ncmVlbi1kYXJrO1xuXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XG4gIGZyb20geyB3aWR0aDogMCB9XG4gIHRvIHsgd2lkdGg6IDEwMCUgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rQ2FyZXQge1xuICBmcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxuICA1MCUgeyBib3JkZXItY29sb3I6IGJsYWNrOyB9XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcblxuICAuY2hhcnQtaGVhZGVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gIC50eXBlLWVmZmVjdCB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgaDIge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgdHlwaW5nIDNzIHN0ZXBzKDQwLCBlbmQpLFxuICAgICAgICBibGlua0NhcmV0IC40cyBzdGVwLWVuZCA5O1xuICAgIH1cbiAgfVxuXG4gIC50aGVtZS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW0gMDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgICAgbWFyZ2luOiAxcmVtIC41cmVtIDAgLjVyZW07XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gLjc1cmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDdyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgQGVhY2ggJGksICRjb2xvciBpbiAkbGVnby1jb2xvcnMtZGFyayB7XG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgJGxlZ28td2lkdGg6IDFyZW07XG5cbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDAgJGxlZ28td2lkdGgsXG4gICAgICAgICAgICAgICRjb2xvciAkbGVnby13aWR0aCBjYWxjKDIgKiAjeyRsZWdvLXdpZHRofSksXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IGNhbGMoMiAqICN7JGxlZ28td2lkdGh9KSBjYWxjKDMgKiAjeyRsZWdvLXdpZHRofSksXG4gICAgICAgICAgICAgICRjb2xvciBjYWxjKDMgKiAjeyRsZWdvLXdpZHRofSkgY2FsYyg0ICogI3skbGVnby13aWR0aH0pLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCBjYWxjKDQgKiAjeyRsZWdvLXdpZHRofSkgY2FsYyg1ICogI3skbGVnby13aWR0aH0pLFxuICAgICAgICAgICAgICAkY29sb3IgY2FsYyg1ICogI3skbGVnby13aWR0aH0pIGNhbGMoNiAqICN7JGxlZ28td2lkdGh9KSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgY2FsYyg2ICogI3skbGVnby13aWR0aH0pIDEwMCVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIsICYuZm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoJGNvbG9yLCAwLjYpLCByZ2JhKCRjb2xvciwgMC40OSkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5mb2N1cyB7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGllLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbSAycmVtO1xuXG4gICAgLmRlY2FkZS1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcblxuICAgICAgICBAZWFjaCAkaSwgJGNvbG9yIGluICRsZWdvLWNvbG9ycyB7XG4gICAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyLCAmLmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2xlZ28ucG5nXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDsgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuZm9jdXMge1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cbiIsIkBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsaW5rQ2FyZXQge1xuICBmcm9tLCB0byB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250YWluZXIgLmNoYXJ0LWhlYWRlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jb250YWluZXIgLnR5cGUtZWZmZWN0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmNvbnRhaW5lciAudHlwZS1lZmZlY3QgaDIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYW5pbWF0aW9uOiB0eXBpbmcgM3Mgc3RlcHMoNDAsIGVuZCksIGJsaW5rQ2FyZXQgMC40cyBzdGVwLWVuZCA5O1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbjogMXJlbSAwIDEuNXJlbSAwO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbSAwIDAuNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA3cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU1QkY7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwIDFyZW0sICMwMDU1QkYgMXJlbSBjYWxjKDIgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYygyICogMXJlbSkgY2FsYygzICogMXJlbSksICMwMDU1QkYgY2FsYygzICogMXJlbSkgY2FsYyg0ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNCAqIDFyZW0pIGNhbGMoNSAqIDFyZW0pLCAjMDA1NUJGIGNhbGMoNSAqIDFyZW0pIGNhbGMoNiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDYgKiAxcmVtKSAxMDAlKTtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU1QkY7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciwgLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDEpLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgODUsIDE5MSwgMC42KSwgcmdiYSgwLCA4NSwgMTkxLCAwLjQ5KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy9sZWdvLWhlYWRzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkuZm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTIxRjtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgIzAwMTIxRiAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgIzAwMTIxRiBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICMwMDEyMUYgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTIxRjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyLCAuY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMikuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAxOCwgMzEsIDAuNiksIHJnYmEoMCwgMTgsIDMxLCAwLjQ5KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy9sZWdvLWhlYWRzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMikuZm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MzMTUwNDtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgI0MzMTUwNCAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgI0MzMTUwNCBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICNDMzE1MDQgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MzMTUwNDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyLCAuY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMykuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxOTUsIDIxLCA0LCAwLjYpLCByZ2JhKDE5NSwgMjEsIDQsIDAuNDkpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKS5mb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM3ODQxO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDQpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNnB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IC04cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCAxcmVtLCAjMjM3ODQxIDFyZW0gY2FsYygyICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoMiAqIDFyZW0pIGNhbGMoMyAqIDFyZW0pLCAjMjM3ODQxIGNhbGMoMyAqIDFyZW0pIGNhbGMoNCAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDQgKiAxcmVtKSBjYWxjKDUgKiAxcmVtKSwgIzIzNzg0MSBjYWxjKDUgKiAxcmVtKSBjYWxjKDYgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg2ICogMXJlbSkgMTAwJSk7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM3ODQxO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCk6aG92ZXIsIC5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KS5mb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDM1LCAxMjAsIDY1LCAwLjYpLCByZ2JhKDM1LCAxMjAsIDY1LCAwLjQ5KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy9sZWdvLWhlYWRzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkuZm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4MzkyNztcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgIzU4MzkyNyAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgIzU4MzkyNyBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICM1ODM5MjcgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4MzkyNztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpOmhvdmVyLCAuY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSkuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg4OCwgNTcsIDM5LCAwLjYpLCByZ2JhKDg4LCA1NywgMzksIDAuNDkpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KS5mb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NUJGO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNnB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IC04cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCAxcmVtLCAjMDA1NUJGIDFyZW0gY2FsYygyICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoMiAqIDFyZW0pIGNhbGMoMyAqIDFyZW0pLCAjMDA1NUJGIGNhbGMoMyAqIDFyZW0pIGNhbGMoNCAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDQgKiAxcmVtKSBjYWxjKDUgKiAxcmVtKSwgIzAwNTVCRiBjYWxjKDUgKiAxcmVtKSBjYWxjKDYgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg2ICogMXJlbSkgMTAwJSk7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NUJGO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNik6aG92ZXIsIC5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg2KS5mb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDg1LCAxOTEsIDAuNiksIHJnYmEoMCwgODUsIDE5MSwgMC40OSkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzByZW0gYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpLmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMUY7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNyk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwIDFyZW0sICMwMDEyMUYgMXJlbSBjYWxjKDIgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYygyICogMXJlbSkgY2FsYygzICogMXJlbSksICMwMDEyMUYgY2FsYygzICogMXJlbSkgY2FsYyg0ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNCAqIDFyZW0pIGNhbGMoNSAqIDFyZW0pLCAjMDAxMjFGIGNhbGMoNSAqIDFyZW0pIGNhbGMoNiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDYgKiAxcmVtKSAxMDAlKTtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMUY7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3ZlciwgLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDcpLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMTgsIDMxLCAwLjYpLCByZ2JhKDAsIDE4LCAzMSwgMC40OSkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzByZW0gYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDcpLmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMzE1MDQ7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwIDFyZW0sICNDMzE1MDQgMXJlbSBjYWxjKDIgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYygyICogMXJlbSkgY2FsYygzICogMXJlbSksICNDMzE1MDQgY2FsYygzICogMXJlbSkgY2FsYyg0ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNCAqIDFyZW0pIGNhbGMoNSAqIDFyZW0pLCAjQzMxNTA0IGNhbGMoNSAqIDFyZW0pIGNhbGMoNiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDYgKiAxcmVtKSAxMDAlKTtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMzE1MDQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KTpob3ZlciwgLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk1LCAyMSwgNCwgMC42KSwgcmdiYSgxOTUsIDIxLCA0LCAwLjQ5KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy9sZWdvLWhlYWRzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCkuZm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNzg0MTtcbn1cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg5KTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgIzIzNzg0MSAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgIzIzNzg0MSBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICMyMzc4NDEgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNzg0MTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpOmhvdmVyLCAuY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSkuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgzNSwgMTIwLCA2NSwgMC42KSwgcmdiYSgzNSwgMTIwLCA2NSwgMC40OSkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzByZW0gYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpLmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMCAycmVtIDFyZW0gMnJlbTtcbn1cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG59XG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJjZDM3O1xufVxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzhlZjA7XG59XG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2Njtcbn1cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRhNTczO1xufVxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5Yzc3NTk7XG59XG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24gaW1nIHtcbiAgd2lkdGg6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uIHNwYW4ge1xuICB6LWluZGV4OiAxO1xufVxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xufVxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xufVxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLCAuY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24uZm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9sZWdvLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbjpob3ZlcjpiZWZvcmUsIC5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbi5mb2N1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uLmZvY3VzIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24uZm9jdXM6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsThemeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-colors-theme',
          templateUrl: './colors-theme.component.html',
          styleUrls: ['./colors-theme.component.scss']
        }]
      }], function () {
        return [{
          type: _services_color_blind_service__WEBPACK_IMPORTED_MODULE_5__["ColorBlindService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/lego/lego-chart.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/charts/lego/lego-chart.component.ts ***!
    \*****************************************************/

  /*! exports provided: LegoChartComponent */

  /***/
  function srcAppChartsLegoLegoChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegoChartComponent", function () {
      return LegoChartComponent;
    });
    /* harmony import */


    var patternomaly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! patternomaly */
    "./node_modules/patternomaly/dist/patternomaly.js");
    /* harmony import */


    var patternomaly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(patternomaly__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);

    var LegoChartComponent = /*#__PURE__*/function () {
      function LegoChartComponent() {
        _classCallCheck(this, LegoChartComponent);

        this.barChartLabels = [];
        this.barChartData = [];
        this.patterns = ['plus', 'cross', 'dash', 'cross-dash', 'dot', 'dot-dash', 'disc', 'ring', 'line', 'line-vertical', 'weave', 'zigzag', 'zigzag-vertical', 'diagonal', 'diagonal-right-left', 'square', 'box', 'triangle', 'triangle-inverted', 'diamond', 'diamond-box'];
      }

      _createClass(LegoChartComponent, [{
        key: "setInitialDataByTheme",
        value: function setInitialDataByTheme(data) {
          return lodash__WEBPACK_IMPORTED_MODULE_1__["groupBy"](data.filter(function (d) {
            return !['Universal Building Set', 'Classic Town', 'Racers'].includes(d['parent_theme_name']);
          }), function (d) {
            return d['parent_theme_name'];
          });
        }
      }, {
        key: "setDecades",
        value: function setDecades(decades) {
          return decades.filter(function (y, i) {
            return decades.indexOf(y) === i;
          }).sort(function (a, b) {
            return Number(a.slice(0, -1)) - Number(b.slice(0, -1));
          });
        }
      }, {
        key: "setColorBlindMode",
        value: function setColorBlindMode(color, i, isWhite, colorBlindMode) {
          if (colorBlindMode) {
            var factorIndexPatterns = i / (this.patterns.length - 1);
            var patternColor = isWhite ? 'black' : 'white';

            if (factorIndexPatterns > 1) {
              return Object(patternomaly__WEBPACK_IMPORTED_MODULE_0__["draw"])(this.patterns[i - this.patterns.length * Math.floor(factorIndexPatterns)], color, patternColor);
            }

            return Object(patternomaly__WEBPACK_IMPORTED_MODULE_0__["draw"])(this.patterns[i], color, patternColor);
          }

          return color;
        }
      }]);

      return LegoChartComponent;
    }();
    /***/

  },

  /***/
  "./src/app/charts/lego/lego-charts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/charts/lego/lego-charts.component.ts ***!
    \******************************************************/

  /*! exports provided: LegoChartsComponent */

  /***/
  function srcAppChartsLegoLegoChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LegoChartsComponent", function () {
      return LegoChartsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme-per-decade/theme-decade.component */
    "./src/app/charts/lego/theme-per-decade/theme-decade.component.ts");
    /* harmony import */


    var _colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./colors-per-theme/colors-theme.component */
    "./src/app/charts/lego/colors-per-theme/colors-theme.component.ts");

    var LegoChartsComponent = function LegoChartsComponent() {
      _classCallCheck(this, LegoChartsComponent);
    };

    LegoChartsComponent.ɵfac = function LegoChartsComponent_Factory(t) {
      return new (t || LegoChartsComponent)();
    };

    LegoChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LegoChartsComponent,
      selectors: [["app-lego-charts"]],
      decls: 4,
      vars: 0,
      consts: [[1, "chart"]],
      template: function LegoChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-theme-decade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-colors-theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_1__["ThemeDecadeComponent"], _colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_2__["ColorsThemeComponent"]],
      styles: [".chart[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: \"black\";\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #efdab3;\n  background-image: linear-gradient(to bottom, #efdab3, rgba(239, 218, 179, 0.6)), url('lego-heads.png');\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #090047;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9jaGFydHMvbGVnby9sZWdvLWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRzL2xlZ28vbGVnby1jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSx5QkFORjtBQ0RGOztBRE1FO0VBQ0UseUJBTkY7RUFTSSxzR0FBQTtBQ0xOOztBRENFO0VBQ0UseUJBTkY7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWdvL2xlZ28tY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuJGNoYXJ0Q29sb3JzOlxuICAxICdibGFjaycsXG4gIDIgJGhvbWUtNS1saWdodCxcbiAgMyAkaG9tZS0yLWRhcms7XG5cbkBlYWNoICRpLCAkYmdDb2xvciBpbiAkY2hhcnRDb2xvcnMge1xuICAuY2hhcnQ6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3I7XG5cbiAgICBAaWYgKCRpID09IDIpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRiZ0NvbG9yLCByZ2JhKCRiZ0NvbG9yLCAuNikpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gICAgfVxuICB9XG59XG4iLCIuY2hhcnQ6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogXCJibGFja1wiO1xufVxuXG4uY2hhcnQ6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZGFiMztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VmZGFiMywgcmdiYSgyMzksIDIxOCwgMTc5LCAwLjYpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xufVxuXG4uY2hhcnQ6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDA0Nztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LegoChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lego-charts',
          templateUrl: './lego-charts.component.html',
          styleUrls: ['./lego-charts.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/lego/theme-per-decade/theme-decade.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/charts/lego/theme-per-decade/theme-decade.component.ts ***!
    \************************************************************************/

  /*! exports provided: ThemeDecadeComponent */

  /***/
  function srcAppChartsLegoThemePerDecadeThemeDecadeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeDecadeComponent", function () {
      return ThemeDecadeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var _lego_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../lego-chart.component */
    "./src/app/charts/lego/lego-chart.component.ts");
    /* harmony import */


    var _services_color_blind_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/color-blind.service */
    "./src/app/services/color-blind.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var _c0 = function _c0(a0) {
      return {
        "focus": a0
      };
    };

    function ThemeDecadeComponent_div_0_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeDecadeComponent_div_0_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var theme_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.setTheme(theme_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var theme_r13 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", theme_r13 + "Button")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r12.currentThemes.includes(theme_r13)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", theme_r13 + "Button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](theme_r13);
      }
    }

    function ThemeDecadeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amount of different Lego sets per theme");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ThemeDecadeComponent_div_0_button_4_Template, 12, 6, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.themes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r11.barChartData)("labels", ctx_r11.barChartLabels)("options", ctx_r11.barChartOptions)("legend", true)("chartType", "line");
      }
    }

    var ThemeDecadeComponent = /*#__PURE__*/function (_lego_chart_component2) {
      _inherits(ThemeDecadeComponent, _lego_chart_component2);

      var _super2 = _createSuper(ThemeDecadeComponent);

      function ThemeDecadeComponent(colorBlindService) {
        var _this5;

        _classCallCheck(this, ThemeDecadeComponent);

        _this5 = _super2.call(this);
        _this5.colorBlindService = colorBlindService;
        _this5.colors = [{
          name: '',
          color: 'rgba(54,166,255, .5)',
          borderColor: 'rgb(54,166,255)'
        }, {
          name: '',
          color: 'rgba(255,35,196, .5)',
          borderColor: 'rgb(255,35,196)'
        }, {
          name: '',
          color: 'rgba(255,171,38, .5)',
          borderColor: 'rgb(255,171,38)'
        }, {
          name: '',
          color: 'rgba(59,255,64, .5)',
          borderColor: 'rgb(40,176,48)'
        }, {
          name: '',
          color: 'rgba(255,58,114, .5)',
          borderColor: 'rgb(255,58,114)'
        }, {
          name: '',
          color: 'rgba(94,52,255, .5)',
          borderColor: 'rgb(94,52,255)'
        }, {
          name: '',
          color: 'rgba(161,255,217, .5)',
          borderColor: 'rgb(161,255,217)'
        }, {
          name: '',
          color: 'rgba(255, 227, 251, .5)',
          borderColor: 'rgb(255, 227, 251)'
        }, {
          name: '',
          color: 'rgba(162,49,255, .5)',
          borderColor: 'rgb(162,49,255)'
        }];
        _this5.barChartOptions = {
          responsive: true,
          legend: false,
          animation: {
            duration: 2000
          }
        };
        return _this5;
      }

      _createClass(ThemeDecadeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          d3__WEBPACK_IMPORTED_MODULE_1__["csv"]('assets/reduced_theme_decade.csv').then(function (data) {
            // Group data by parent theme, take some random themes
            var dataByTheme = _this6.setInitialDataByTheme(data);

            _this6.data = dataByTheme;
            _this6.themes = Object.keys(dataByTheme);
            _this6.currentThemes = ['Train', 'Space', 'Pirates', 'Castle'];

            _this6.colorBlindService.colorBlindModeOn$.subscribe(function (res) {
              _this6.colorBlindMode = res;

              var testData = _this6.currentThemes.map(function (t) {
                return dataByTheme[t];
              }); // set labels as years


              _this6.barChartLabels = _this6.setDecades(data.map(function (d) {
                return d['decade'];
              })); // Make sure that the data corresponds with the correct decade, and that decades with no data have null values
              // todo: activate cbm again when its clear which pattern fits with which button

              _this6.barChartData = testData.map(function (d, i) {
                return _this6.setData(d, _this6.themes.indexOf(d[0]['parent_theme_name']),
                /*res*/
                false);
              });
            });
          });
        }
      }, {
        key: "setTheme",
        value: function setTheme(theme) {
          if (this.barChartData.map(function (d) {
            return d['label'];
          }).includes(theme)) {
            this.currentThemes = this.currentThemes.filter(function (t) {
              return t !== theme;
            });
            this.barChartData = this.barChartData.filter(function (d) {
              return d['label'] !== theme;
            });
          } else {
            this.dataOfTheme = this.data[theme];
            this.currentThemes.push(theme); // todo: activate cbm again when its clear which pattern fits with which button

            this.barChartData.push(this.setData(this.data[theme], this.themes.indexOf(theme),
            /*this.colorBlindMode*/
            false));
          }
        }
      }, {
        key: "setData",
        value: function setData(data, colorIndex, colorBlindMode) {
          var newData = this.barChartLabels.map(function (y) {
            var val = data.find(function (decadeData) {
              return decadeData['decade'] === y;
            });
            return !!val ? val['set_num'] : null;
          });
          return {
            data: newData,
            label: data[0]['parent_theme_name'],
            backgroundColor: this.setColorBlindMode(this.colors[colorIndex]['color'], colorIndex, false, colorBlindMode),
            borderColor: this.colors[colorIndex]['borderColor'],
            pointBackgroundColor: this.colors[colorIndex]['borderColor'],
            lineTension: 0
          };
        }
      }]);

      return ThemeDecadeComponent;
    }(_lego_chart_component__WEBPACK_IMPORTED_MODULE_2__["LegoChartComponent"]);

    ThemeDecadeComponent.ɵfac = function ThemeDecadeComponent_Factory(t) {
      return new (t || ThemeDecadeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_blind_service__WEBPACK_IMPORTED_MODULE_3__["ColorBlindService"]));
    };

    ThemeDecadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThemeDecadeComponent,
      selectors: [["app-theme-decade"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "chart-header"], [1, "theme-buttons"], [3, "id", "ngClass", "click", 4, "ngFor", "ngForOf"], ["baseChart", "", "id", "theme-decade", 3, "datasets", "labels", "options", "legend", "chartType"], [3, "id", "ngClass", "click"], [1, "head"], [1, "head-top"], [1, "eyes"], [1, "brow"], [1, "eye"], [1, "mouth"], [1, "neck"], [3, "for"]],
      template: function ThemeDecadeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ThemeDecadeComponent_div_0_Template, 6, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barChartLabels.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.theme-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 2rem 0;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-filter: drop-shadow(2px 4px 6px #36a6ff) drop-shadow(-2px -4px 6px #36a6ff);\n          filter: drop-shadow(2px 4px 6px #36a6ff) drop-shadow(-2px -4px 6px #36a6ff);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #69bdff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #9cd3ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #36a6ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-filter: drop-shadow(2px 4px 6px #ff23c4) drop-shadow(-2px -4px 6px #ff23c4);\n          filter: drop-shadow(2px 4px 6px #ff23c4) drop-shadow(-2px -4px 6px #ff23c4);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ff56d2;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ff89df;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #ff23c4;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-filter: drop-shadow(2px 4px 6px #ffab26) drop-shadow(-2px -4px 6px #ffab26);\n          filter: drop-shadow(2px 4px 6px #ffab26) drop-shadow(-2px -4px 6px #ffab26);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ffbf59;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ffd28c;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #ffab26;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-filter: drop-shadow(2px 4px 6px #28b030) drop-shadow(-2px -4px 6px #28b030);\n          filter: drop-shadow(2px 4px 6px #28b030) drop-shadow(-2px -4px 6px #28b030);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #39d242;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #63db6a;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #28b030;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-filter: drop-shadow(2px 4px 6px #ff3a72) drop-shadow(-2px -4px 6px #ff3a72);\n          filter: drop-shadow(2px 4px 6px #ff3a72) drop-shadow(-2px -4px 6px #ff3a72);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ff6d97;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ffa0bb;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #ff3a72;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-filter: drop-shadow(2px 4px 6px #5e34ff) drop-shadow(-2px -4px 6px #5e34ff);\n          filter: drop-shadow(2px 4px 6px #5e34ff) drop-shadow(-2px -4px 6px #5e34ff);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #8667ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #af9aff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #5e34ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-filter: drop-shadow(2px 4px 6px #a1ffd9) drop-shadow(-2px -4px 6px #a1ffd9);\n          filter: drop-shadow(2px 4px 6px #a1ffd9) drop-shadow(-2px -4px 6px #a1ffd9);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #d4ffee;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #a1ffd9;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-filter: drop-shadow(2px 4px 6px #e4c5d1) drop-shadow(-2px -4px 6px #e4c5d1);\n          filter: drop-shadow(2px 4px 6px #e4c5d1) drop-shadow(-2px -4px 6px #e4c5d1);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #f4e8ed;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #e4c5d1;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9) {\n  -webkit-filter: drop-shadow(2px 4px 6px #a231ff) drop-shadow(-2px -4px 6px #a231ff);\n          filter: drop-shadow(2px 4px 6px #a231ff) drop-shadow(-2px -4px 6px #a231ff);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #b964ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #d097ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #a231ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  width: calc(10.2rem / 3);\n  height: calc(8.5rem / 3);\n  border-radius: 10px;\n  margin-bottom: 0.5rem;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: calc(4.9rem / 3);\n  height: calc(1.6rem / 3);\n  top: calc(1.6rem / -3);\n  right: calc((100% - 4.9rem / 3) / 2);\n  border-top-right-radius: 40%;\n  border-top-left-radius: 40%;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: calc((4.9rem - (1.25rem / 3)) / 3);\n  left: calc((100% - ((4.9rem - (1.25rem / 3)) / 3)) / 2);\n  top: calc(3.4rem / 3);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: black;\n  border-radius: 50%;\n  width: calc(1.25rem / 3);\n  height: calc(1.25rem / 3);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:last-child {\n  right: 0;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .mouth[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(2rem / 3);\n  left: calc((100% - .78rem) / 2);\n  width: 0.5rem;\n  height: 0.1rem;\n  border: solid 2px black;\n  border-top: none;\n  border-radius: 0 0 160px 160px/0 0 120px 120px;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9jaGFydHMvbGVnby90aGVtZS1wZXItZGVjYWRlL3RoZW1lLWRlY2FkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRzL2xlZ28vdGhlbWUtcGVyLWRlY2FkZS90aGVtZS1kZWNhZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRHlDTTtFQUNFLG1GQUFBO1VBQUEsMkVBQUE7QUN2Q1I7O0FEMENVO0VBQ0UseUJBQUE7QUN4Q1o7O0FENkNVO0VBQ0UseUJBQUE7QUMzQ1o7O0FEZ0RVO0VBQ0UsZ0NBQUE7QUM5Q1o7O0FENkJNO0VBQ0UsbUZBQUE7VUFBQSwyRUFBQTtBQzNCUjs7QUQ4QlU7RUFDRSx5QkFBQTtBQzVCWjs7QURpQ1U7RUFDRSx5QkFBQTtBQy9CWjs7QURvQ1U7RUFDRSxnQ0FBQTtBQ2xDWjs7QURpQk07RUFDRSxtRkFBQTtVQUFBLDJFQUFBO0FDZlI7O0FEa0JVO0VBQ0UseUJBQUE7QUNoQlo7O0FEcUJVO0VBQ0UseUJBQUE7QUNuQlo7O0FEd0JVO0VBQ0UsZ0NBQUE7QUN0Qlo7O0FES007RUFDRSxtRkFBQTtVQUFBLDJFQUFBO0FDSFI7O0FETVU7RUFDRSx5QkFBQTtBQ0paOztBRFNVO0VBQ0UseUJBQUE7QUNQWjs7QURZVTtFQUNFLGdDQUFBO0FDVlo7O0FEUE07RUFDRSxtRkFBQTtVQUFBLDJFQUFBO0FDU1I7O0FETlU7RUFDRSx5QkFBQTtBQ1FaOztBREhVO0VBQ0UseUJBQUE7QUNLWjs7QURBVTtFQUNFLGdDQUFBO0FDRVo7O0FEbkJNO0VBQ0UsbUZBQUE7VUFBQSwyRUFBQTtBQ3FCUjs7QURsQlU7RUFDRSx5QkFBQTtBQ29CWjs7QURmVTtFQUNFLHlCQUFBO0FDaUJaOztBRFpVO0VBQ0UsZ0NBQUE7QUNjWjs7QUQvQk07RUFDRSxtRkFBQTtVQUFBLDJFQUFBO0FDaUNSOztBRDlCVTtFQUNFLHlCQUFBO0FDZ0NaOztBRDNCVTtFQUNFLHVCQUFBO0FDNkJaOztBRHhCVTtFQUNFLGdDQUFBO0FDMEJaOztBRDNDTTtFQUNFLG1GQUFBO1VBQUEsMkVBQUE7QUM2Q1I7O0FEMUNVO0VBQ0UseUJBQUE7QUM0Q1o7O0FEdkNVO0VBQ0UsdUJBQUE7QUN5Q1o7O0FEcENVO0VBQ0UsZ0NBQUE7QUNzQ1o7O0FEdkRNO0VBQ0UsbUZBQUE7VUFBQSwyRUFBQTtBQ3lEUjs7QUR0RFU7RUFDRSx5QkFBQTtBQ3dEWjs7QURuRFU7RUFDRSx5QkFBQTtBQ3FEWjs7QURoRFU7RUFDRSxnQ0FBQTtBQ2tEWjs7QUQ1Q0k7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUM4Q047O0FENUNNO0VBcENBLGtCQUFBO0VBQ0EsdUJBQUE7RUFzQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFuRGE7RUFvRGIsMkJBcERhO0FDa0dyQjs7QUQzQ007RUEvQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQWlERSx5Q0FBQTtFQUNBLHVEQUFBO0VBQ0EscUJBQUE7QUM2Q1I7O0FEM0NRO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQzZDVjs7QUQzQ1U7RUFDRSxRQUFBO0FDNkNaOztBRHhDTTtFQUlFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBTlU7RUFPVixjQU5VO0VBT1YsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FDdUNSOztBRG5DSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNxQ04iLCJmaWxlIjoic3JjL2FwcC9jaGFydHMvbGVnby90aGVtZS1wZXItZGVjYWRlL3RoZW1lLWRlY2FkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRoZW1lLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMnJlbSAwO1xuXG4gIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC8vIEJ1dHRvbiBjb2xvcnNcbiAgICAkY29sb3ItMTogcmdiKDU0LDE2NiwyNTUpO1xuICAgICRjb2xvci0yOiByZ2IoMjU1LDM1LDE5Nik7XG4gICAgJGNvbG9yLTM6IHJnYigyNTUsMTcxLDM4KTtcbiAgICAkY29sb3ItNDogcmdiKDQwLDE3Niw0OCk7XG4gICAgJGNvbG9yLTU6IHJnYigyNTUsNTgsMTE0KTtcbiAgICAkY29sb3ItNjogcmdiKDk0LDUyLDI1NSk7XG4gICAgJGNvbG9yLTc6IHJnYigxNjEsMjU1LDIxNyk7XG4gICAgJGNvbG9yLTg6IHJnYigyMjgsIDE5NywgMjA5KTtcbiAgICAkY29sb3ItOTogcmdiKDE2Miw0OSwyNTUpO1xuXG4gICAgJGxlZ28tY29sb3JzOlxuICAgICAgMSAkY29sb3ItMSxcbiAgICAgIDIgJGNvbG9yLTIsXG4gICAgICAzICRjb2xvci0zLFxuICAgICAgNCAkY29sb3ItNCxcbiAgICAgIDUgJGNvbG9yLTUsXG4gICAgICA2ICRjb2xvci02LFxuICAgICAgNyAkY29sb3ItNyxcbiAgICAgIDggJGNvbG9yLTgsXG4gICAgICA5ICRjb2xvci05O1xuXG4gICAgLy8gTGVnbyBoZWFkIHNpemUgdmFyaWFibGVzXG4gICAgJGhlYWQtdzogMTAuMnJlbTtcbiAgICAkaGVhZC1oOiA4LjVyZW07XG4gICAgJGhlYWQtdG9wLXc6IDQuOXJlbTtcbiAgICAkaGVhZC10b3AtaDogMS42cmVtO1xuICAgICRoZWFkLXRvcC1jdXJ2ZTogNDAlO1xuICAgICRleWVzLWZyb20tdG9wOiAzLjRyZW07XG4gICAgJG1vdXRoLWZyb20tYm90dG9tOiAycmVtO1xuICAgICRleWUtc2l6ZTogMS4yNXJlbTtcblxuICAgICRmYWN0b3I6IDM7XG5cbiAgICBAbWl4aW4gbGVnb0NvbW1vblZhcnMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgQGVhY2ggJGksICRjb2xvciBpbiAkbGVnby1jb2xvcnMge1xuICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAkY29sb3IpIGRyb3Atc2hhZG93KC0ycHggLTRweCA2cHggJGNvbG9yKTtcblxuICAgICAgICAmOmhvdmVyLCAmLmZvY3VzIHtcbiAgICAgICAgICAuaGVhZCwgLmhlYWQgLmhlYWQtdG9wIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLCAxMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIuZm9jdXMge1xuICAgICAgICAgIC5oZWFkLCAuaGVhZCAuaGVhZC10b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3IsIDIwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5mb2N1cyB7XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRjb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiBjYWxjKCN7JGhlYWQtd30gLyAjeyRmYWN0b3J9KTtcbiAgICAgIGhlaWdodDogY2FsYygjeyRoZWFkLWh9IC8gI3skZmFjdG9yfSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG5cbiAgICAgIC5oZWFkLXRvcCB7XG4gICAgICAgIEBpbmNsdWRlIGxlZ29Db21tb25WYXJzO1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKCN7JGhlYWQtdG9wLXd9IC8gI3skZmFjdG9yfSk7XG4gICAgICAgIGhlaWdodDogY2FsYygjeyRoZWFkLXRvcC1ofSAvICN7JGZhY3Rvcn0pO1xuICAgICAgICB0b3A6IGNhbGMoI3skaGVhZC10b3AtaH0gLyAtI3skZmFjdG9yfSk7XG4gICAgICAgIHJpZ2h0OiBjYWxjKCgxMDAlIC0gI3skaGVhZC10b3Atd30gLyAjeyRmYWN0b3J9KSAvIDIpO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGhlYWQtdG9wLWN1cnZlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkaGVhZC10b3AtY3VydmU7XG4gICAgICB9XG5cbiAgICAgIC5leWVzIHtcbiAgICAgICAgQGluY2x1ZGUgbGVnb0NvbW1vblZhcnM7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoKCN7JGhlYWQtdG9wLXd9IC0gKCN7JGV5ZS1zaXplfSAvICN7JGZhY3Rvcn0pKSAvICN7JGZhY3Rvcn0pO1xuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gKCgjeyRoZWFkLXRvcC13fSAtICgjeyRleWUtc2l6ZX0gLyAjeyRmYWN0b3J9KSkgLyAjeyRmYWN0b3J9KSkgLyAyKTtcbiAgICAgICAgdG9wOiBjYWxjKCN7JGV5ZXMtZnJvbS10b3B9IC8gI3skZmFjdG9yfSk7XG5cbiAgICAgICAgLmV5ZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB3aWR0aDogY2FsYygjeyRleWUtc2l6ZX0gLyAjeyRmYWN0b3J9KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoI3skZXllLXNpemV9IC8gI3skZmFjdG9yfSk7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tb3V0aCB7XG4gICAgICAgICRtb3V0aC13OiAuNXJlbTtcbiAgICAgICAgJG1vdXRoLWg6IC4xcmVtO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiBjYWxjKCN7JG1vdXRoLWZyb20tYm90dG9tfSAvICN7JGZhY3Rvcn0pO1xuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gLjc4cmVtKSAvIDIpOztcbiAgICAgICAgd2lkdGg6ICRtb3V0aC13O1xuICAgICAgICBoZWlnaHQ6ICRtb3V0aC1oO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE2MHB4IDE2MHB4IC8gMCAwIDEyMHB4IDEyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGhlbWUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDEpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjMzZhNmZmKSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICMzNmE2ZmYpO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5YmRmZjtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSk6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljZDNmZjtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkuZm9jdXMgbGFiZWwge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzM2YTZmZjtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4ICNmZjIzYzQpIGRyb3Atc2hhZG93KC0ycHggLTRweCA2cHggI2ZmMjNjNCk7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpOmhvdmVyIC5oZWFkIC5oZWFkLXRvcCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKS5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKS5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NmQyO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKTpob3Zlci5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKTpob3Zlci5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4OWRmO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKS5mb2N1cyBsYWJlbCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmYyM2M0O1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKSB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggI2ZmYWIyNikgZHJvcC1zaGFkb3coLTJweCAtNHB4IDZweCAjZmZhYjI2KTtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMyk6aG92ZXIgLmhlYWQgLmhlYWQtdG9wLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmNTk7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQyOGM7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpLmZvY3VzIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmFiMjY7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDQpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjMjhiMDMwKSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICMyOGIwMzApO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZDI0Mjtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCk6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCk6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzZGI2YTtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkuZm9jdXMgbGFiZWwge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzI4YjAzMDtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSkge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4ICNmZjNhNzIpIGRyb3Atc2hhZG93KC0ycHggLTRweCA2cHggI2ZmM2E3Mik7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpOmhvdmVyIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpOmhvdmVyIC5oZWFkIC5oZWFkLXRvcCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KS5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KS5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZDk3O1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KTpob3Zlci5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KTpob3Zlci5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhMGJiO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KS5mb2N1cyBsYWJlbCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmYzYTcyO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg2KSB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggIzVlMzRmZikgZHJvcC1zaGFkb3coLTJweCAtNHB4IDZweCAjNWUzNGZmKTtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNik6aG92ZXIgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNik6aG92ZXIgLmhlYWQgLmhlYWQtdG9wLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NjY3ZmY7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmhvdmVyLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmhvdmVyLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjlhZmY7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpLmZvY3VzIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1ZTM0ZmY7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDcpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjYTFmZmQ5KSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICNhMWZmZDkpO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNykuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNykuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZmZlZTtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNyk6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNyk6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDcpLmZvY3VzIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNhMWZmZDk7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjZTRjNWQxKSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICNlNGM1ZDEpO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCkuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCkuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZThlZDtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCk6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCk6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpLmZvY3VzIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlNGM1ZDE7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjYTIzMWZmKSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICNhMjMxZmYpO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg5KTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg5KTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSkuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSkuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5NjRmZjtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSk6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSk6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwOTdmZjtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSkuZm9jdXMgbGFiZWwge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2EyMzFmZjtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbiAuaGVhZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBjYWxjKDEwLjJyZW0gLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKDguNXJlbSAvIDMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b24gLmhlYWQgLmhlYWQtdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGNhbGMoNC45cmVtIC8gMyk7XG4gIGhlaWdodDogY2FsYygxLjZyZW0gLyAzKTtcbiAgdG9wOiBjYWxjKDEuNnJlbSAvIC0zKTtcbiAgcmlnaHQ6IGNhbGMoKDEwMCUgLSA0LjlyZW0gLyAzKSAvIDIpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MCU7XG59XG4udGhlbWUtYnV0dG9ucyBidXR0b24gLmhlYWQgLmV5ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogY2FsYygoNC45cmVtIC0gKDEuMjVyZW0gLyAzKSkgLyAzKTtcbiAgbGVmdDogY2FsYygoMTAwJSAtICgoNC45cmVtIC0gKDEuMjVyZW0gLyAzKSkgLyAzKSkgLyAyKTtcbiAgdG9wOiBjYWxjKDMuNHJlbSAvIDMpO1xufVxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uIC5oZWFkIC5leWVzIC5leWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBjYWxjKDEuMjVyZW0gLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKDEuMjVyZW0gLyAzKTtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbiAuaGVhZCAuZXllcyAuZXllOmxhc3QtY2hpbGQge1xuICByaWdodDogMDtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbiAuaGVhZCAubW91dGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygycmVtIC8gMyk7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAuNzhyZW0pIC8gMik7XG4gIHdpZHRoOiAwLjVyZW07XG4gIGhlaWdodDogMC4xcmVtO1xuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE2MHB4IDE2MHB4LzAgMCAxMjBweCAxMjBweDtcbn1cbi50aGVtZS1idXR0b25zIGJ1dHRvbiBsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeDecadeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-theme-decade',
          templateUrl: './theme-decade.component.html',
          styleUrls: ['./theme-decade.component.scss']
        }]
      }], function () {
        return [{
          type: _services_color_blind_service__WEBPACK_IMPORTED_MODULE_3__["ColorBlindService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/pie-chart/pie-chart.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/charts/pie-chart/pie-chart.component.ts ***!
    \*********************************************************/

  /*! exports provided: PieChartComponent */

  /***/
  function srcAppChartsPieChartPieChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () {
      return PieChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../chart-data */
    "./src/app/charts/chart-data.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var PieChartComponent = /*#__PURE__*/function () {
      function PieChartComponent() {
        _classCallCheck(this, PieChartComponent);

        this.barChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
        this.barChartData = [];
        this.barChartOptions = {
          scaleShowVerticalLines: true,
          responsive: true,
          animation: {
            duration: 2000
          },
          title: Object.assign(Object.assign({}, _chart_data__WEBPACK_IMPORTED_MODULE_1__["titleOptions"]), {
            text: 'A Pie Chart'
          })
        };
      }

      _createClass(PieChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ctx = document.getElementById('bar').getContext('2d');
          var gradient1 = ctx.createRadialGradient(75, 50, 345, 90, 60, 1000);
          var gradient2 = ctx.createRadialGradient(75, 50, 5, 90, 60, 1000);
          var gradient3 = ctx.createRadialGradient(75, 50, 5, 90, 60, 1000);
          var gradient4 = ctx.createRadialGradient(75, 50, 5, 90, 60, 1000);
          var colors1 = ['transparent', 'rgba(54,162,235,0.53)', 'transparent', 'rgba(54,162,235,0.53)'];
          var colors3 = ['rgba(235,202,25,0.51)', 'transparent', 'rgba(235,202,25,0.51)', 'transparent'];
          var colors2 = ['rgba(235,133,36,0.51)', 'transparent', 'rgba(235,133,36,0.51)', 'transparent'];
          var colors4 = ['rgba(235,14,0,0.51)', 'transparent', 'rgba(235,14,0,0.51)', 'transparent'];
          colors1.forEach(function (c, i) {
            return gradient1.addColorStop(i / colors1.length, c);
          });
          colors2.forEach(function (c, i) {
            return gradient2.addColorStop(i / colors2.length, c);
          });
          colors3.forEach(function (c, i) {
            return gradient3.addColorStop(i / colors3.length, c);
          });
          colors4.forEach(function (c, i) {
            return gradient4.addColorStop(i / colors4.length, c);
          });
          this.barChartData = [{
            data: [120, 150, 180, 90],
            backgroundColor: [gradient1, gradient2, gradient3, gradient4],
            borderWidth: 0
          }];
        }
      }]);

      return PieChartComponent;
    }();

    PieChartComponent.ɵfac = function PieChartComponent_Factory(t) {
      return new (t || PieChartComponent)();
    };

    PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PieChartComponent,
      selectors: [["app-pie-chart"]],
      decls: 2,
      vars: 5,
      consts: [["baseChart", "", "id", "bar", 3, "datasets", "options", "labels", "legend", "chartType"]],
      template: function PieChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("options", ctx.barChartOptions)("labels", ctx.barChartLabels)("legend", true)("chartType", "pie");
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9waWUtY2hhcnQvcGllLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pie-chart',
          templateUrl: './pie-chart.component.html',
          styleUrls: ['./pie-chart.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/charts/radar-chart/radar-chart.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/charts/radar-chart/radar-chart.component.ts ***!
    \*************************************************************/

  /*! exports provided: RadarChartComponent */

  /***/
  function srcAppChartsRadarChartRadarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadarChartComponent", function () {
      return RadarChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../chart-data */
    "./src/app/charts/chart-data.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var RadarChartComponent = /*#__PURE__*/function () {
      function RadarChartComponent() {
        _classCallCheck(this, RadarChartComponent);

        this.radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
        this.radarChartData = [];
        this.radarChartOptions = Object.assign({
          responsive: true,
          animation: {
            duration: 2000
          }
        }, Object(_chart_data__WEBPACK_IMPORTED_MODULE_1__["chartFontColor"])('A radar chart', true));
      }

      _createClass(RadarChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ctx = document.getElementById('radar').getContext('2d');
          var gradient1 = ctx.createLinearGradient(20, 0, 1500, 500);
          var gradient2 = ctx.createLinearGradient(40, 0, 2000, 1000);
          var colors1 = ['rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)', 'rgba(54,162,235,0.53)', 'rgba(235,54,190,0.51)'];
          var colors2 = ['rgba(235,14,0,0.51)', 'rgba(235,202,14,0.53)', 'rgba(235,19,8,0.51)', 'rgba(235,224,21,0.53)', 'rgba(235,19,8,0.51)'];
          colors1.forEach(function (c, i) {
            return gradient1.addColorStop(i / colors1.length, c);
          });
          colors2.forEach(function (c, i) {
            return gradient2.addColorStop(i / colors1.length, c);
          });
          this.radarChartData = [{
            data: [120, 130, 180, 70],
            label: '2017',
            backgroundColor: gradient1,
            borderColor: 'rgb(167,12,255)',
            borderWidth: 1
          }, {
            data: [90, 150, 80, 200],
            label: '2018',
            backgroundColor: gradient2,
            borderColor: 'rgb(235,141,9)',
            borderWidth: 1
          }];
        }
      }]);

      return RadarChartComponent;
    }();

    RadarChartComponent.ɵfac = function RadarChartComponent_Factory(t) {
      return new (t || RadarChartComponent)();
    };

    RadarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RadarChartComponent,
      selectors: [["app-radar-chart"]],
      decls: 2,
      vars: 5,
      consts: [["baseChart", "", "id", "radar", 3, "datasets", "labels", "options", "legend", "chartType"]],
      template: function RadarChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.radarChartData)("labels", ctx.radarChartLabels)("options", ctx.radarChartOptions)("legend", true)("chartType", "radar");
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yYWRhci1jaGFydC9yYWRhci1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-radar-chart',
          templateUrl: './radar-chart.component.html',
          styleUrls: ['./radar-chart.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/focus.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/directives/focus.directive.ts ***!
    \***********************************************/

  /*! exports provided: FocusDirective */

  /***/
  function srcAppDirectivesFocusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusDirective", function () {
      return FocusDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FocusDirective = /*#__PURE__*/function () {
      function FocusDirective(element) {
        _classCallCheck(this, FocusDirective);

        this.element = element;
        this.focused = false;
      }

      _createClass(FocusDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          if (this.focused) {
            setTimeout(function () {
              return _this7.element.nativeElement.focus();
            }, 0);
          }
        }
      }]);

      return FocusDirective;
    }();

    FocusDirective.ɵfac = function FocusDirective_Factory(t) {
      return new (t || FocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FocusDirective,
      selectors: [["", "inputFocus", ""]],
      inputs: {
        focused: "focused"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[inputFocus]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        focused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HomeComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r2.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.text);
      }
    }

    function HomeComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r3.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.text);
      }
    }

    var HomeComponent = function HomeComponent() {
      _classCallCheck(this, HomeComponent);

      this.links = [{
        link: '/charts/default',
        text: 'DATA VISUALS'
      }, {
        link: '/sunset',
        text: 'SUNSET'
      }, {
        link: '/starry-night',
        text: 'CSS SECRETS'
      }, {
        link: '/css-secrets',
        text: 'STARRY NIGHT'
      }, {
        link: '/tbc',
        text: 'HOLD YOUR BREATH'
      }];
    };

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 13,
      vars: 2,
      consts: [[1, "container"], [1, "title-wrap"], [1, "menu-holder-wrap"], [1, "menu-holder"], [1, "button-slide-wrap"], [1, "button-slide-1"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "button-slide-2"], [3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Erle's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Corner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_a_10_Template, 2, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_a_12_Template, 2, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["@-webkit-keyframes colorTransition {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 100%;\n  }\n}\n@keyframes colorTransition {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 100%;\n  }\n}\n@-webkit-keyframes slideButtons1 {\n  to {\n    transform: translate3d(-100%, -10%, 0);\n  }\n}\n@keyframes slideButtons1 {\n  to {\n    transform: translate3d(-100%, -10%, 0);\n  }\n}\n@-webkit-keyframes slideButtons2 {\n  45% {\n    opacity: 1;\n  }\n  50% {\n    transform: translate3d(calc(-150% - (1% / 2)), -10%, 0);\n  }\n  51% {\n    transform: translate3d(calc(50% + 1%), -10%, 0);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(1%, -10%, 0);\n  }\n}\n@keyframes slideButtons2 {\n  45% {\n    opacity: 1;\n  }\n  50% {\n    transform: translate3d(calc(-150% - (1% / 2)), -10%, 0);\n  }\n  51% {\n    transform: translate3d(calc(50% + 1%), -10%, 0);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(1%, -10%, 0);\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: linear-gradient(20deg, #1e7f24, transparent 70%), linear-gradient(60deg, #2600ff, transparent 60%), linear-gradient(90deg, #7000ff, transparent 80%), linear-gradient(180deg, #ef154b, transparent 70%), linear-gradient(240deg, #ef651e, transparent 70%), linear-gradient(300deg, #ffc000, transparent 70%);\n  background-size: 200% 100%;\n  -webkit-animation: colorTransition 4s linear infinite alternate;\n          animation: colorTransition 4s linear infinite alternate;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50vh - 30rem / 2);\n  color: rgba(255, 255, 255, 0.7);\n  -webkit-filter: drop-shadow(1px 1px 0.75px rgba(255, 255, 255, 0.7)) drop-shadow(-1px -1px 0.75px rgba(255, 255, 255, 0.7));\n          filter: drop-shadow(1px 1px 0.75px rgba(255, 255, 255, 0.7)) drop-shadow(-1px -1px 0.75px rgba(255, 255, 255, 0.7));\n  transition: top 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n  left: calc(50vw - 30rem / 2);\n  transform: rotate(-45deg);\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:not(:first-child) {\n  right: calc(50vw - 30rem / 2);\n  transform: rotate(45deg);\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black);\n          filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black);\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%] {\n  width: 30rem;\n  height: 30rem;\n  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n  background-color: black;\n  transition: width 0.5s, height 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n  transform: translate3d(1%, -10%, 0);\n  -webkit-animation: slideButtons1 15s linear infinite;\n          animation: slideButtons1 15s linear infinite;\n  display: flex;\n  align-items: flex-start;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #9ed59f;\n  color: #0a2d0c;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):hover {\n  background-color: #0a2d0c;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #b7cbff;\n  color: #090047;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):hover {\n  background-color: #090047;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #f2d4ff;\n  color: #220048;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):hover {\n  background-color: #220048;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #efbcba;\n  color: #58061d;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):hover {\n  background-color: #58061d;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #efdab3;\n  color: #371507;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):hover {\n  background-color: #371507;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n  transform: translate3d(-100%, -10%, 0);\n  -webkit-animation: slideButtons2 15s linear infinite;\n          animation: slideButtons2 15s linear infinite;\n  display: flex;\n  align-items: flex-start;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #9ed59f;\n  color: #0a2d0c;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):hover {\n  background-color: #0a2d0c;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #b7cbff;\n  color: #090047;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):hover {\n  background-color: #090047;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #f2d4ff;\n  color: #220048;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):hover {\n  background-color: #220048;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #efbcba;\n  color: #58061d;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):hover {\n  background-color: #58061d;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #efdab3;\n  color: #371507;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):hover {\n  background-color: #371507;\n  color: white;\n}\n@media screen and (max-width: 768px) {\n  @-webkit-keyframes pulsingButtons {\n    to {\n      transform: scale(1.05);\n    }\n  }\n  @keyframes pulsingButtons {\n    to {\n      transform: scale(1.05);\n    }\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: calc(50vh - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    left: calc(50vw - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:not(:first-child) {\n    right: calc(50vw - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%] {\n    width: 20rem;\n    height: 20rem;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    top: 20%;\n    left: 22%;\n    flex-direction: column;\n    align-items: initial;\n    -webkit-animation: none;\n            animation: none;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    -webkit-animation: pulsingButtons 1s alternate infinite;\n            animation: pulsingButtons 1s alternate infinite;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0U7SUFBTSxzQkFBQTtFQ1BOO0VEUUE7SUFBSSx5QkFBQTtFQ0xKO0FBQ0Y7QURFQTtFQUNFO0lBQU0sc0JBQUE7RUNQTjtFRFFBO0lBQUkseUJBQUE7RUNMSjtBQUNGO0FET0E7RUFDRTtJQUFLLHNDQUFBO0VDSkw7QUFDRjtBREVBO0VBQ0U7SUFBSyxzQ0FBQTtFQ0pMO0FBQ0Y7QURNQTtFQUNFO0lBQU0sVUFBQTtFQ0hOO0VESUE7SUFBTSx1REFBQTtFQ0ROO0VERUE7SUFBTSwrQ0FBQTtJQUE4RSxVQUFBO0VDRXBGO0VEREE7SUFBSyxtQ0FBQTtFQ0lMO0FBQ0Y7QURUQTtFQUNFO0lBQU0sVUFBQTtFQ0hOO0VESUE7SUFBTSx1REFBQTtFQ0ROO0VERUE7SUFBTSwrQ0FBQTtJQUE4RSxVQUFBO0VDRXBGO0VEREE7SUFBSyxtQ0FBQTtFQ0lMO0FBQ0Y7QUQ2QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtUQUFBO0VBTUEsMEJBQUE7RUFDQSwrREFBQTtVQUFBLHVEQUFBO0FDaENGO0FEa0NFO0VBQ0Usa0JBQUE7QUNoQ0o7QURrQ0k7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBdkVRO0VBd0VSLDJIQUFBO1VBQUEsbUhBQUE7RUFDQSxvQkFBQTtBQ2hDTjtBRGtDTTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUNoQ1I7QURtQ007RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0FDakNSO0FEcUNJO0VFeEZGLGVBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUNWLGdDQUFBO0VGeUZJLCtFQUFBO1VBQUEsdUVBQUE7QUNqQ047QURtQ007RUFDRSxZQTFGVTtFQTJGVixhQTNGVTtFQTRGVixrR0FBQTtVQUFBLDBGQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtBQ2pDUjtBRG1DUTtFQUNFLGtCQUFBO0FDakNWO0FEbUNVO0VFdkdSLGVBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUNWLGdDQUFBO0VGeUJBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDZ0RGO0FEdENJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUN3Q047QUR0Q007RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUN3Q1I7QUQvQ0k7RUFDRSx5QkFSRjtFQVNFLGNBVEY7RUFVRSxvQkFBQTtBQ2lETjtBRC9DTTtFQUNFLHlCQWJKO0VBY0ksWUFBQTtBQ2lEUjtBRHhESTtFQUNFLHlCQVJGO0VBU0UsY0FURjtFQVVFLG9CQUFBO0FDMEROO0FEeERNO0VBQ0UseUJBYko7RUFjSSxZQUFBO0FDMERSO0FEakVJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUNtRU47QURqRU07RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUNtRVI7QUQxRUk7RUFDRSx5QkFSRjtFQVNFLGNBVEY7RUFVRSxvQkFBQTtBQzRFTjtBRDFFTTtFQUNFLHlCQWJKO0VBY0ksWUFBQTtBQzRFUjtBRGxCVTtFRTNHUixlQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFDVixnQ0FBQTtFRnlCQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ3lHRjtBRC9GSTtFQUNFLHlCQVJGO0VBU0UsY0FURjtFQVVFLG9CQUFBO0FDaUdOO0FEL0ZNO0VBQ0UseUJBYko7RUFjSSxZQUFBO0FDaUdSO0FEeEdJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUMwR047QUR4R007RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUMwR1I7QURqSEk7RUFDRSx5QkFSRjtFQVNFLGNBVEY7RUFVRSxvQkFBQTtBQ21ITjtBRGpITTtFQUNFLHlCQWJKO0VBY0ksWUFBQTtBQ21IUjtBRDFISTtFQUNFLHlCQVJGO0VBU0UsY0FURjtFQVVFLG9CQUFBO0FDNEhOO0FEMUhNO0VBQ0UseUJBYko7RUFjSSxZQUFBO0FDNEhSO0FEbklJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUNxSU47QURuSU07RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUNxSVI7QURwRUk7RUFDRTtJQUNFO01BQUssc0JBQUE7SUN1RVQ7RUFDRjtFRHpFSTtJQUNFO01BQUssc0JBQUE7SUN1RVQ7RUFDRjtFRGxFSTtJQUNFLDhCQUFBO0VDb0VOO0VEbEVNO0lBQ0UsK0JBQUE7RUNvRVI7RURqRU07SUFDRSxnQ0FBQTtFQ21FUjtFRDlESTtJQUNFLFlBakJrQjtJQWtCbEIsYUFsQmtCO0VDa0Z4QjtFRDdEUTtJQUNFLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSxvQkFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFQytEVjtFRDdEVTtJQUNFLHVEQUFBO1lBQUEsK0NBQUE7RUMrRFo7RUQzRFE7SUFDRSxrQkFBQTtFQzZEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuJHRpdGxlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG5cbiRtZW51LWhvbGRlci13LWg6IDMwcmVtO1xuJHNsaWRlLW9mZnNldC10b3A6IC0xMCU7XG4kc2xpZGUtb2Zmc2V0LXg6IDElO1xuXG5Aa2V5ZnJhbWVzIGNvbG9yVHJhbnNpdGlvbiB7XG4gIGZyb20ge2JhY2tncm91bmQtcG9zaXRpb246IDB9XG4gIHRvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQnV0dG9uczEge1xuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsICRzbGlkZS1vZmZzZXQtdG9wLCAwKSB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCdXR0b25zMiB7XG4gIDQ1JSB7IG9wYWNpdHk6IDEgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoLTE1MCUgLSAoI3skc2xpZGUtb2Zmc2V0LXh9IC8gMikpLCAkc2xpZGUtb2Zmc2V0LXRvcCwgMCkgfVxuICA1MSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoNTAlICsgI3skc2xpZGUtb2Zmc2V0LXh9KSwgJHNsaWRlLW9mZnNldC10b3AsIDApOyBvcGFjaXR5OiAwIH1cbiAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCRzbGlkZS1vZmZzZXQteCwgJHNsaWRlLW9mZnNldC10b3AsIDApIH1cbn1cblxuQG1peGluIHNsaWRlU2hvdygkc3RhcnQsICRhbmltYXRpb24pIHtcbiAgQGluY2x1ZGUgY2VudGVyO1xuXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHN0YXJ0LCAkc2xpZGUtb2Zmc2V0LXRvcCwgMCk7XG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAxNXMgbGluZWFyIGluZmluaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAkYnRuLWNvbG9yczpcbiAgICAxICRob21lLTEtZGFyayAkaG9tZS0xLWxpZ2h0LFxuICAgIDIgJGhvbWUtMi1kYXJrICRob21lLTItbGlnaHQsXG4gICAgMyAkaG9tZS0zLWRhcmsgJGhvbWUtMy1saWdodCxcbiAgICA0ICRob21lLTQtZGFyayAkaG9tZS00LWxpZ2h0LFxuICAgIDUgJGhvbWUtNS1kYXJrICRob21lLTUtbGlnaHQ7XG5cbiAgQGVhY2ggJGksICRjb2xvciwgJGJnQ29sb3IgaW4gJGJ0bi1jb2xvcnMge1xuICAgIGE6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMGRlZywgJGhvbWUtMSwgdHJhbnNwYXJlbnQgNzAlKSxcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDYwZGVnLCAkaG9tZS0yLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRob21lLTMsIHRyYW5zcGFyZW50IDgwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRob21lLTQsIHRyYW5zcGFyZW50IDcwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICRob21lLTUsIHRyYW5zcGFyZW50IDcwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgzMDBkZWcsICRob21lLTYsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IGNvbG9yVHJhbnNpdGlvbiA0cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG4gIC50aXRsZS13cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBoMSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGNhbGMoNTB2aCAtICN7JG1lbnUtaG9sZGVyLXctaH0gLyAyKTtcbiAgICAgIGNvbG9yOiAkdGl0bGUtY29sb3I7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggLjc1cHggJHRpdGxlLWNvbG9yKSBkcm9wLXNoYWRvdygtMXB4IC0xcHggLjc1cHggJHRpdGxlLWNvbG9yKTtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAuNXM7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci13LWh9IC8gMik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICByaWdodDogY2FsYyg1MHZ3IC0gI3skbWVudS1ob2xkZXItdy1ofSAvIDIpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lbnUtaG9sZGVyLXdyYXAge1xuICAgICAgQGluY2x1ZGUgY2VudGVyO1xuXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNXB4IGJsYWNrKSBkcm9wLXNoYWRvdygtMnB4IC0ycHggNXB4IGJsYWNrKTtcblxuICAgICAgLm1lbnUtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6ICRtZW51LWhvbGRlci13LWg7XG4gICAgICAgIGhlaWdodDogJG1lbnUtaG9sZGVyLXctaDtcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgNzAlIDAlLCAxMDAlIDMwJSwgMTAwJSA3MCUsIDcwJSAxMDAlLCAzMCUgMTAwJSwgMCUgNzAlLCAwJSAzMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMsIGhlaWdodCAuNXM7XG5cbiAgICAgICAgLmJ1dHRvbi1zbGlkZS13cmFwIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAuYnV0dG9uLXNsaWRlLTEge1xuICAgICAgICAgICAgQGluY2x1ZGUgc2xpZGVTaG93KCRzbGlkZS1vZmZzZXQteCwgc2xpZGVCdXR0b25zMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ1dHRvbi1zbGlkZS0yIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHNsaWRlU2hvdygtMTAwJSwgc2xpZGVCdXR0b25zMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2luZ0J1dHRvbnMge1xuICAgICAgICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgfVxuICAgICAgfVxuXG4gICAgICAkbWVudS1ob2xkZXItcy13LWg6IDIwcmVtO1xuICAgICAgJHNsaWRlLW9mZnNldC1zLXg6IC01MCU7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwdmggLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0b2RvOiBhbHNvIHNsaWRlc2hvd1xuICAgICAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6ICRtZW51LWhvbGRlci1zLXctaDtcbiAgICAgICAgaGVpZ2h0OiAkbWVudS1ob2xkZXItcy13LWg7XG5cbiAgICAgICAgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUge1xuICAgICAgICAgICYtMSB7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICAgIGxlZnQ6IDIyJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2luZ0J1dHRvbnMgMXMgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYtMiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIkBrZXlmcmFtZXMgY29sb3JUcmFuc2l0aW9uIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUJ1dHRvbnMxIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlQnV0dG9uczIge1xuICA0NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoLTE1MCUgLSAoMSUgLyAyKSksIC0xMCUsIDApO1xuICB9XG4gIDUxJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDUwJSArIDElKSwgLTEwJSwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxJSwgLTEwJSwgMCk7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMGRlZywgIzFlN2YyNCwgdHJhbnNwYXJlbnQgNzAlKSwgbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMjYwMGZmLCB0cmFuc3BhcmVudCA2MCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3MDAwZmYsIHRyYW5zcGFyZW50IDgwJSksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNlZjE1NGIsIHRyYW5zcGFyZW50IDcwJSksIGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICNlZjY1MWUsIHRyYW5zcGFyZW50IDcwJSksIGxpbmVhci1ncmFkaWVudCgzMDBkZWcsICNmZmMwMDAsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IGNvbG9yVHJhbnNpdGlvbiA0cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MHZoIC0gMzByZW0gLyAyKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDAuNzVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpIGRyb3Atc2hhZG93KC0xcHggLTFweCAwLjc1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpKTtcbiAgdHJhbnNpdGlvbjogdG9wIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIGgxOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogY2FsYyg1MHZ3IC0gMzByZW0gLyAyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgaDE6bm90KDpmaXJzdC1jaGlsZCkge1xuICByaWdodDogY2FsYyg1MHZ3IC0gMzByZW0gLyAyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA1cHggYmxhY2spIGRyb3Atc2hhZG93KC0ycHggLTJweCA1cHggYmxhY2spO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIge1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMzByZW07XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDcwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzAlLCA3MCUgMTAwJSwgMzAlIDEwMCUsIDAlIDcwJSwgMCUgMzAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGhlaWdodCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMSUsIC0xMCUsIDApO1xuICBhbmltYXRpb246IHNsaWRlQnV0dG9uczEgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZDU5ZjtcbiAgY29sb3I6ICMwYTJkMGM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCgxKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTJkMGM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjYmZmO1xuICBjb2xvcjogIzA5MDA0NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDA0NztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmQ0ZmY7XG4gIGNvbG9yOiAjMjIwMDQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoMyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIwMDQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYmNiYTtcbiAgY29sb3I6ICM1ODA2MWQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCg0KTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODA2MWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZkYWIzO1xuICBjb2xvcjogIzM3MTUwNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MTUwNztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMCUsIDApO1xuICBhbmltYXRpb246IHNsaWRlQnV0dG9uczIgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZDU5ZjtcbiAgY29sb3I6ICMwYTJkMGM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCgxKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTJkMGM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjYmZmO1xuICBjb2xvcjogIzA5MDA0NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDA0NztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmQ0ZmY7XG4gIGNvbG9yOiAjMjIwMDQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoMyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIwMDQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYmNiYTtcbiAgY29sb3I6ICM1ODA2MWQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCg0KTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODA2MWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZkYWIzO1xuICBjb2xvcjogIzM3MTUwNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MTUwNztcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgQGtleWZyYW1lcyBwdWxzaW5nQnV0dG9ucyB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMSB7XG4gICAgdG9wOiBjYWxjKDUwdmggLSAyMHJlbSAvIDEuNzUpO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlLXdyYXAgaDE6Zmlyc3QtY2hpbGQge1xuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDIwcmVtIC8gMS43NSk7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgcmlnaHQ6IGNhbGMoNTB2dyAtIDIwcmVtIC8gMS43NSk7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiAyMiU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhIHtcbiAgICBhbmltYXRpb246IHB1bHNpbmdCdXR0b25zIDFzIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgfVxuICAuY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn0iLCJAbWl4aW4gY2VudGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTsgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/color-blind.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/color-blind.service.ts ***!
    \*************************************************/

  /*! exports provided: ColorBlindService */

  /***/
  function srcAppServicesColorBlindServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorBlindService", function () {
      return ColorBlindService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);

    var ColorBlindService = function ColorBlindService() {
      _classCallCheck(this, ColorBlindService);

      this.colorBlindModeOn$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    };

    ColorBlindService.ɵfac = function ColorBlindService_Factory(t) {
      return new (t || ColorBlindService)();
    };

    ColorBlindService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ColorBlindService,
      factory: ColorBlindService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorBlindService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/sunset/sunset.component.ts":
  /*!********************************************!*\
    !*** ./src/app/sunset/sunset.component.ts ***!
    \********************************************/

  /*! exports provided: SunsetComponent */

  /***/
  function srcAppSunsetSunsetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SunsetComponent", function () {
      return SunsetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SunsetComponent = function SunsetComponent() {
      _classCallCheck(this, SunsetComponent);
    };

    SunsetComponent.ɵfac = function SunsetComponent_Factory(t) {
      return new (t || SunsetComponent)();
    };

    SunsetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SunsetComponent,
      selectors: [["app-sunset"]],
      decls: 19,
      vars: 1,
      consts: [[1, "container-black"], [1, "page-link", 3, "routerLink"], [1, "box"], [1, "cloud-box"], [1, "cloud-4"], [1, "cloud-3"], [1, "cloud-2"], [1, "cloud-1"], [1, "sun3"], [1, "sun2"], [1, "sun1"], [1, "ground"], [1, "cloud-shadow-box"], [1, "cloud-shadow-flip"], [1, "cloud-shadow-4"], [1, "cloud-shadow-3"], [1, "cloud-shadow-2"], [1, "cloud-shadow-1"]],
      template: function SunsetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go back home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".container-black[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\na[_ngcontent-%COMP%] {\n  margin-left: 0;\n  position: absolute;\n  top: calc(100vh - 420px - (100vh - 420px) / 2 - 3rem);\n  left: calc(100vw - 600px - (100vw - 600px) / 2);\n}\n@media screen and (max-width: 600px) {\n  a[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n  width: 600px;\n  height: 420px;\n  background-image: linear-gradient(to bottom right, #1c035e, #ce2801, #ce2801);\n  overflow: hidden;\n}\n\n.ground[_ngcontent-%COMP%] {\n  width: 120%;\n  height: 40%;\n  position: absolute;\n  left: -10%;\n  bottom: -10%;\n  background-image: linear-gradient(to bottom, #6FB23E, #257b21 30%, #10340f);\n  z-index: 5;\n  border-top-left-radius: 50%;\n  transform: skew(-5deg, -2deg);\n  overflow: hidden;\n}\n.ground[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: linear-gradient(-90deg, rgba(206, 107, 47, 0.37), transparent, rgba(28, 3, 94, 0.27));\n  border-top-left-radius: 50%;\n}\n\n@-webkit-keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.sun1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60%;\n  height: calc(60% * 1.2);\n  top: 12%;\n  left: calc((100% - 60%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 174, 36, 0.76), #cec894);\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80%;\n  height: calc(80% * 1.2);\n  top: 12%;\n  left: calc((100% - 80%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 83, 29, 0.76), rgba(206, 146, 50, 0.76));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun3[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% * 1.2);\n  top: 12%;\n  left: calc((100% - 100%) / 2);\n  background-image: linear-gradient(90deg, rgba(168, 10, 36, 0.75) 10%, rgba(206, 76, 9, 0.75));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n  left: 25%;\n}\n\n@-webkit-keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n@keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n.cloud-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: 30%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-shadow-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: -10%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-shadow-flip[_ngcontent-%COMP%] {\n  transform: scaleY(-1);\n}\n.cloud-shadow-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsV0FBQTtBQVdBLHFCQUFBO0FBVUEsV0FBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUN0QkY7QUR5QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLCtDQUFBO0FDdEJGO0FEd0JFO0VBTkY7SUFPSSxPQUFBO0VDckJGO0FBQ0Y7QUR3QkE7RUV6Q0UsZUFBQTtFQUNBLFFBQUE7RUFBVSxTQUFBO0VBQ1YsZ0NBQUE7RUYwQ0EsY0FBQTtFQUNBLFlBOUJNO0VBK0JOLGFBOUJNO0VBK0JOLDZFQUFBO0VBQ0EsZ0JBQUE7QUNuQkY7QURzQkEsV0FBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkVBeERhO0VBeURiLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7QUR1QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVHQW5Fa0I7RUFvRWxCLDJCQUFBO0FDcEJGO0FEdUJBLFFBQUE7QUFjQTtFQUNFO0lBQU8sbUJBQUE7RUNoQ1A7RURpQ0E7SUFBTSxzQkFBQTtFQzlCTjtFRCtCQTtJQUFLLG1CQUFBO0VDNUJMO0FBQ0Y7QUR3QkE7RUFDRTtJQUFPLG1CQUFBO0VDaENQO0VEaUNBO0lBQU0sc0JBQUE7RUM5Qk47RUQrQkE7SUFBSyxtQkFBQTtFQzVCTDtBQUNGO0FEOEJBO0VBakJFLGtCQUFBO0VBQ0EsVUFpQmE7RUFoQmIsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSwyRUE3RVc7RUE4RVgsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ1ZGO0FEdUJBO0VBckJFLGtCQUFBO0VBQ0EsVUFxQmE7RUFwQmIsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSwyRkE1RVc7RUE2RVgsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtBQ0VGO0FEZUE7RUF6QkUsa0JBQUE7RUFDQSxXQXlCYTtFQXhCYix3QkFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLDZGQTNFVztFQTRFWCxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBb0JBLFNBQUE7QUNMRjtBRFFBLFdBQUE7QUFzQkE7RUFDRTtJQUFPLDRCQUFBO0VDekJQO0VEMEJBO0lBQUssMkJBQUE7RUN2Qkw7QUFDRjtBRG9CQTtFQUNFO0lBQU8sNEJBQUE7RUN6QlA7RUQwQkE7SUFBSywyQkFBQTtFQ3ZCTDtBQUNGO0FEeUJBO0VBZEUsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBWW1CO0VBWG5CLFNBV3dCO0VBVnhCLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSxVQUFBO0FDUkY7QURvQkE7RUE1QkUsV0E5RmdCO0VBK0ZoQixZQS9GZ0I7RUFnR2hCLGtCQUFBO0VBQ0EsVUEwQm1EO0VBekJuRCxTQXlCd0Q7RUF4QnhELHFHQTNHWTtFQTRHWixrQkFBQTtBQ1lGO0FEY0E7RUFoQ0UsV0E3RmlCO0VBOEZqQixZQTlGaUI7RUErRmpCLGtCQUFBO0VBQ0EsVUE4QnFEO0VBN0JyRCxZQTZCMEQ7RUE1QjFELHFHQTNHWTtFQTRHWixrQkFBQTtBQ3NCRjtBRFFBO0VBcENFLFlBNUZZO0VBNkZaLGFBNUZZO0VBNkZaLGtCQUFBO0VBQ0EsV0FrQzJDO0VBakMzQyxZQWlDaUQ7RUFoQ2pELHFHQTNHWTtFQTRHWixrQkFBQTtBQ2dDRjtBREVBO0VBeENFLFdBOUZnQjtFQStGaEIsWUEvRmdCO0VBZ0doQixrQkFBQTtFQUNBLFdBc0NtRDtFQXJDbkQsU0FxQ3lEO0VBcEN6RCxxR0EzR1k7RUE0R1osa0JBQUE7QUMwQ0Y7QURKQTtFQWxDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FnQ21CO0VBL0JuQixTQStCeUI7RUE5QnpCLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSxVQUFBO0FDMENGO0FEVkE7RUFDRSxxQkFBQTtBQ2FGO0FEVkE7RUFwREUsV0E5RmdCO0VBK0ZoQixZQS9GZ0I7RUFnR2hCLGtCQUFBO0VBQ0EsVUFrRG1EO0VBakRuRCxTQWlEd0Q7RUFoRHhELHFHQTNHWTtFQTRHWixrQkFBQTtFQWlEQSx3RUE1SmE7QUM4S2Y7QURmQTtFQTFERSxXQTdGaUI7RUE4RmpCLFlBOUZpQjtFQStGakIsa0JBQUE7RUFDQSxVQXdEcUQ7RUF2RHJELFlBdUQwRDtFQXREMUQscUdBM0dZO0VBNEdaLGtCQUFBO0VBdURBLHdFQWxLYTtBQ3lMZjtBRHBCQTtFQWhFRSxZQTVGWTtFQTZGWixhQTVGWTtFQTZGWixrQkFBQTtFQUNBLFdBOEQyQztFQTdEM0MsWUE2RGlEO0VBNURqRCxxR0EzR1k7RUE0R1osa0JBQUE7RUE2REEsd0VBeEthO0FDb01mO0FEekJBO0VBdEVFLFdBOUZnQjtFQStGaEIsWUEvRmdCO0VBZ0doQixrQkFBQTtFQUNBLFdBb0VtRDtFQW5FbkQsU0FtRXlEO0VBbEV6RCxxR0EzR1k7RUE0R1osa0JBQUE7RUFtRUEsd0VBOUthO0FDK01mIiwiZmlsZSI6InNyYy9hcHAvc3Vuc2V0L3N1bnNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zdHlsZXMvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5cbi8qIENvbG9ycyAqL1xuJGdyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZGQjIzRSwgIzI1N2IyMSAzMCUsICMxMDM0MGYpO1xuJGdyb3VuZC1yZWZsZWN0aW9uOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCByZ2JhKDIwNiwgMTA3LCA0NywgMC4zNyksIHRyYW5zcGFyZW50LCByZ2JhKDI4LCAzLCA5NCwgMC4yNykpO1xuXG4kc3VuMS1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNiwgMTc0LCAzNiwgMC43NiksICNjZWM4OTQpO1xuJHN1bjItY29sb3I6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMDYsIDgzLCAyOSwgMC43NiksIHJnYmEoMjA2LCAxNDYsIDUwLCAwLjc2KSk7XG4kc3VuMy1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE2OCwgMTAsIDM2LCAwLjc1KSAxMCUsIHJnYmEoMjA2LCA3NiwgOSwgMC43NSkpO1xuXG4kY2xvdWQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuJGNsb3VkLXNoYWRvdzogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMTksIDAsIDAuMzEpIDMwJSwgdHJhbnNwYXJlbnQpO1xuXG4vKiBOdW1lcmljYWwgdmFsdWVzICovXG5cbiRib3gteDogNjAwcHg7XG4kYm94LXk6IDQyMHB4O1xuXG4kc21hbGwtY2xvdWQtdy1oOiA1MHB4O1xuJG1pZGRsZS1jbG91ZC13LWg6IDgwcHg7XG4kYmlnLWNsb3VkLXc6IDExMHB4O1xuJGJpZy1jbG91ZC1oOiAxMDBweDtcblxuLyogTGF5b3V0ICovXG5cbi5jb250YWluZXItYmxhY2sge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwdmggLSAjeyRib3gteX0gLSAoMTAwdmggLSAjeyRib3gteX0pIC8gMiAtIDNyZW0pO1xuICBsZWZ0OiBjYWxjKDEwMHZ3IC0gI3skYm94LXh9IC0gKDEwMHZ3IC0gI3skYm94LXh9KSAvIDIpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRib3gteCkge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuLmJveCB7XG4gIEBpbmNsdWRlIGNlbnRlcjtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICRib3gteDtcbiAgaGVpZ2h0OiAkYm94LXk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxYzAzNWUsICNjZTI4MDEsICNjZTI4MDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91bmQgKi9cblxuLmdyb3VuZCB7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAlO1xuICBib3R0b206IC0xMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRncm91bmQtY29sb3I7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtMmRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncm91bmQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogJGdyb3VuZC1yZWZsZWN0aW9uO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN1biAqL1xuXG5AbWl4aW4gc3VuKCR3aWR0aCwgJHpJbmRleCwgJGNvbG9yLCAkYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6IGNhbGMoI3skd2lkdGh9ICogMS4yKTtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAjeyR3aWR0aH0pIC8gMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNpbmctc3VuIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMSkgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIH1cbiAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpIH1cbn1cblxuLnN1bjEge1xuICBAaW5jbHVkZSBzdW4oNjAlLCAzLCAkc3VuMS1jb2xvciwgNXMpO1xufVxuXG4uc3VuMiB7XG4gIEBpbmNsdWRlIHN1big4MCUsIDQsICRzdW4yLWNvbG9yLCA0cyk7XG59XG5cbi5zdW4zIHtcbiAgQGluY2x1ZGUgc3VuKDEwMCUsIDUsICRzdW4zLWNvbG9yLCAzcyk7XG5cbiAgbGVmdDogMjUlO1xufVxuXG4vKiBDbG91ZHMgKi9cblxuQG1peGluIGNsb3VkKCR3aWR0aCwgJGhlaWdodCwgJHJpZ2h0LCAkYm90dG9tKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjbG91ZC1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5AbWl4aW4gY2xvdWQtYm94KCR0b3AsICRsZWZ0KSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHRvcDtcbiAgbGVmdDogJGxlZnQ7XG4gIGFuaW1hdGlvbjogbW92aW5nLWNsb3VkIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gIHotaW5kZXg6IDc7XG59XG5cbkBrZXlmcmFtZXMgbW92aW5nLWNsb3VkIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1JSkgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMjAlKSB9XG59XG5cbi5jbG91ZC1ib3gge1xuICBAaW5jbHVkZSBjbG91ZC1ib3goMzAlLCAyMCUpO1xufVxuXG4uY2xvdWQtMSB7XG4gIEBpbmNsdWRlIGNsb3VkKCRzbWFsbC1jbG91ZC13LWgsICRzbWFsbC1jbG91ZC13LWgsIDY1JSwgMCk7XG59XG5cbi5jbG91ZC0yIHtcbiAgQGluY2x1ZGUgY2xvdWQoJG1pZGRsZS1jbG91ZC13LWgsICRtaWRkbGUtY2xvdWQtdy1oLCAyMCUsIC0yMCUpO1xufVxuXG4uY2xvdWQtMyB7XG4gIEBpbmNsdWRlIGNsb3VkKCRiaWctY2xvdWQtdywgJGJpZy1jbG91ZC1oLCAtMzAlLCAtMzAlKTtcbn1cblxuLmNsb3VkLTQge1xuICBAaW5jbHVkZSBjbG91ZCgkc21hbGwtY2xvdWQtdy1oLCAkc21hbGwtY2xvdWQtdy1oLCAtNTAlLCAwKTtcbn1cblxuLmNsb3VkLXNoYWRvdy1ib3gge1xuICBAaW5jbHVkZSBjbG91ZC1ib3goLTEwJSwgMjAlKTtcbn1cblxuLmNsb3VkLXNoYWRvdy1mbGlwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xufVxuXG4uY2xvdWQtc2hhZG93LTEge1xuICBAaW5jbHVkZSBjbG91ZCgkc21hbGwtY2xvdWQtdy1oLCAkc21hbGwtY2xvdWQtdy1oLCA2NSUsIDApO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjbG91ZC1zaGFkb3c7XG59XG5cbi5jbG91ZC1zaGFkb3ctMiB7XG4gIEBpbmNsdWRlIGNsb3VkKCRtaWRkbGUtY2xvdWQtdy1oLCAkbWlkZGxlLWNsb3VkLXctaCwgMjAlLCAtMjAlKTtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiAkY2xvdWQtc2hhZG93O1xufVxuXG4uY2xvdWQtc2hhZG93LTMge1xuICBAaW5jbHVkZSBjbG91ZCgkYmlnLWNsb3VkLXcsICRiaWctY2xvdWQtaCwgLTMwJSwgLTMwJSk7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLXNoYWRvdztcbn1cblxuLmNsb3VkLXNoYWRvdy00IHtcbiAgQGluY2x1ZGUgY2xvdWQoJHNtYWxsLWNsb3VkLXctaCwgJHNtYWxsLWNsb3VkLXctaCwgLTUwJSwgMCk7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLXNoYWRvdztcbn1cbiIsIi8qIENvbG9ycyAqL1xuLyogTnVtZXJpY2FsIHZhbHVlcyAqL1xuLyogTGF5b3V0ICovXG4uY29udGFpbmVyLWJsYWNrIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMHZoIC0gNDIwcHggLSAoMTAwdmggLSA0MjBweCkgLyAyIC0gM3JlbSk7XG4gIGxlZnQ6IGNhbGMoMTAwdncgLSA2MDBweCAtICgxMDB2dyAtIDYwMHB4KSAvIDIpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uYm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzFjMDM1ZSwgI2NlMjgwMSwgI2NlMjgwMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEdyb3VuZCAqL1xuLmdyb3VuZCB7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAlO1xuICBib3R0b206IC0xMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2RkIyM0UsICMyNTdiMjEgMzAlLCAjMTAzNDBmKTtcbiAgei1pbmRleDogNTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcsIC0yZGVnKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdyb3VuZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMjA2LCAxMDcsIDQ3LCAwLjM3KSwgdHJhbnNwYXJlbnQsIHJnYmEoMjgsIDMsIDk0LCAwLjI3KSk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbn1cblxuLyogU3VuICovXG5Aa2V5ZnJhbWVzIHB1bHNpbmctc3VuIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5zdW4xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGNhbGMoNjAlICogMS4yKTtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSA2MCUpIC8gMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMDYsIDE3NCwgMzYsIDAuNzYpLCAjY2VjODk0KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xufVxuXG4uc3VuMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBjYWxjKDgwJSAqIDEuMik7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiBjYWxjKCgxMDAlIC0gODAlKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA2LCA4MywgMjksIDAuNzYpLCByZ2JhKDIwNiwgMTQ2LCA1MCwgMC43NikpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDQ7XG4gIGFuaW1hdGlvbjogcHVsc2luZy1zdW4gNXMgaW5maW5pdGU7XG59XG5cbi5zdW4zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKiAxLjIpO1xuICB0b3A6IDEyJTtcbiAgbGVmdDogY2FsYygoMTAwJSAtIDEwMCUpIC8gMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNjgsIDEwLCAzNiwgMC43NSkgMTAlLCByZ2JhKDIwNiwgNzYsIDksIDAuNzUpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xuICBsZWZ0OiAyNSU7XG59XG5cbi8qIENsb3VkcyAqL1xuQGtleWZyYW1lcyBtb3ZpbmctY2xvdWQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIyNSUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzIwJSk7XG4gIH1cbn1cbi5jbG91ZC1ib3gge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogMjAlO1xuICBhbmltYXRpb246IG1vdmluZy1jbG91ZCA0MHMgbGluZWFyIGluZmluaXRlO1xuICB6LWluZGV4OiA3O1xufVxuXG4uY2xvdWQtMSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDY1JTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2xvdWQtMiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwJTtcbiAgYm90dG9tOiAtMjAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2xvdWQtMyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTMwJTtcbiAgYm90dG9tOiAtMzAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2xvdWQtNCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLXNoYWRvdy1ib3gge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDIwJTtcbiAgYW5pbWF0aW9uOiBtb3ZpbmctY2xvdWQgNDBzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogNztcbn1cblxuLmNsb3VkLXNoYWRvdy1mbGlwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xufVxuXG4uY2xvdWQtc2hhZG93LTEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2NSU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMTksIDAsIDAuMzEpIDMwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uY2xvdWQtc2hhZG93LTIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMCU7XG4gIGJvdHRvbTogLTIwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMTksIDAsIDAuMzEpIDMwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uY2xvdWQtc2hhZG93LTMge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMCU7XG4gIGJvdHRvbTogLTMwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMTksIDAsIDAuMzEpIDMwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uY2xvdWQtc2hhZG93LTQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn0iLCJAbWl4aW4gY2VudGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTsgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIGNsZWFyZml4IHtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SunsetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sunset',
          templateUrl: './sunset.component.html',
          styleUrls: ['./sunset.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      assetsFolder: 'assets'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/erlemorgaine/Documents/CodePractice/erles-corner/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map