function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


    var _pages_sunset_sunset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/sunset/sunset.component */
    "./src/app/pages/sunset/sunset.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/charts/charts.component */
    "./src/app/pages/charts/charts.component.ts");
    /* harmony import */


    var _pages_charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/charts/lego/lego-charts.component */
    "./src/app/pages/charts/lego/lego-charts.component.ts");
    /* harmony import */


    var _pages_charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/charts/default/default-charts.component */
    "./src/app/pages/charts/default/default-charts.component.ts");
    /* harmony import */


    var _pages_image_detection_image_detection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/image-detection/image-detection.component */
    "./src/app/pages/image-detection/image-detection.component.ts");
    /* harmony import */


    var _pages_charts_d3_d3_charts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/charts/d3/d3-charts.component */
    "./src/app/pages/charts/d3/d3-charts.component.ts");

    var routes = [{
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'sunset',
      component: _pages_sunset_sunset_component__WEBPACK_IMPORTED_MODULE_2__["SunsetComponent"]
    }, {
      path: 'image-detection',
      component: _pages_image_detection_image_detection_component__WEBPACK_IMPORTED_MODULE_7__["ImageDetectionComponent"]
    }, {
      path: 'charts',
      component: _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"],
      children: [{
        path: 'default',
        component: _pages_charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_6__["DefaultChartsComponent"]
      }, {
        path: 'lego',
        component: _pages_charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_5__["LegoChartsComponent"]
      }, {
        path: 'd3',
        component: _pages_charts_d3_d3_charts_component__WEBPACK_IMPORTED_MODULE_8__["D3ChartsComponent"]
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


    var _pages_sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/sunset/sunset.component */
    "./src/app/pages/sunset/sunset.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/charts/charts.component */
    "./src/app/pages/charts/charts.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _pages_charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/charts/bar-chart/bar-chart.component */
    "./src/app/pages/charts/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _pages_charts_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/charts/radar-chart/radar-chart.component */
    "./src/app/pages/charts/radar-chart/radar-chart.component.ts");
    /* harmony import */


    var _pages_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/charts/pie-chart/pie-chart.component */
    "./src/app/pages/charts/pie-chart/pie-chart.component.ts");
    /* harmony import */


    var _pages_charts_lego_theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/charts/lego/theme-per-decade/theme-decade.component */
    "./src/app/pages/charts/lego/theme-per-decade/theme-decade.component.ts");
    /* harmony import */


    var _pages_charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/charts/lego/lego-charts.component */
    "./src/app/pages/charts/lego/lego-charts.component.ts");
    /* harmony import */


    var _pages_charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/charts/default/default-charts.component */
    "./src/app/pages/charts/default/default-charts.component.ts");
    /* harmony import */


    var _pages_charts_lego_colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/charts/lego/colors-per-theme/colors-theme.component */
    "./src/app/pages/charts/lego/colors-per-theme/colors-theme.component.ts");
    /* harmony import */


    var _pages_image_detection_image_detection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/image-detection/image-detection.component */
    "./src/app/pages/image-detection/image-detection.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _pages_charts_d3_force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/charts/d3/force-directed-graph/force-directed-graph.component */
    "./src/app/pages/charts/d3/force-directed-graph/force-directed-graph.component.ts");
    /* harmony import */


    var _components_visuals_node_visual__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/visuals/node-visual */
    "./src/app/components/visuals/node-visual.ts");
    /* harmony import */


    var _components_visuals_link_visual__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/visuals/link-visual */
    "./src/app/components/visuals/link-visual.ts");
    /* harmony import */


    var _directives_zoomable_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./directives/zoomable.directive */
    "./src/app/directives/zoomable.directive.ts");
    /* harmony import */


    var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./directives/draggable.directive */
    "./src/app/directives/draggable.directive.ts");
    /* harmony import */


    var _pages_charts_d3_d3_charts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/charts/d3/d3-charts.component */
    "./src/app/pages/charts/d3/d3-charts.component.ts");
    /* harmony import */


    var _pages_charts_d3_ufo_loom_graph_ufo_loom_graph_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/charts/d3/ufo-loom-graph/ufo-loom-graph.component */
    "./src/app/pages/charts/d3/ufo-loom-graph/ufo-loom-graph.component.ts");
    /* harmony import */


    var _directives_mouseover_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./directives/mouseover.directive */
    "./src/app/directives/mouseover.directive.ts");

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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__["SunsetComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"], _pages_charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_13__["DefaultChartsComponent"], _pages_charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"], _pages_charts_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__["RadarChartComponent"], _pages_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__["PieChartComponent"], _pages_charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_12__["LegoChartsComponent"], _pages_charts_lego_theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_11__["ThemeDecadeComponent"], _pages_charts_lego_colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_14__["ColorsThemeComponent"], _pages_charts_d3_force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_17__["ForceDirectedGraphComponent"], _pages_image_detection_image_detection_component__WEBPACK_IMPORTED_MODULE_15__["ImageDetectionComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"], _components_visuals_node_visual__WEBPACK_IMPORTED_MODULE_18__["NodeVisualComponent"], _components_visuals_link_visual__WEBPACK_IMPORTED_MODULE_19__["LinkVisualComponent"], _directives_zoomable_directive__WEBPACK_IMPORTED_MODULE_20__["ZoomableDirective"], _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_21__["DraggableDirective"], _directives_mouseover_directive__WEBPACK_IMPORTED_MODULE_24__["MouseOverDirective"], _pages_charts_d3_d3_charts_component__WEBPACK_IMPORTED_MODULE_22__["D3ChartsComponent"], _pages_charts_d3_ufo_loom_graph_ufo_loom_graph_component__WEBPACK_IMPORTED_MODULE_23__["UfoLoomGraphComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__["SunsetComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _pages_charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"], _pages_charts_default_default_charts_component__WEBPACK_IMPORTED_MODULE_13__["DefaultChartsComponent"], _pages_charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"], _pages_charts_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_9__["RadarChartComponent"], _pages_charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__["PieChartComponent"], _pages_charts_lego_lego_charts_component__WEBPACK_IMPORTED_MODULE_12__["LegoChartsComponent"], _pages_charts_lego_theme_per_decade_theme_decade_component__WEBPACK_IMPORTED_MODULE_11__["ThemeDecadeComponent"], _pages_charts_lego_colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_14__["ColorsThemeComponent"], _pages_charts_d3_force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_17__["ForceDirectedGraphComponent"], _pages_image_detection_image_detection_component__WEBPACK_IMPORTED_MODULE_15__["ImageDetectionComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"], _components_visuals_node_visual__WEBPACK_IMPORTED_MODULE_18__["NodeVisualComponent"], _components_visuals_link_visual__WEBPACK_IMPORTED_MODULE_19__["LinkVisualComponent"], _directives_zoomable_directive__WEBPACK_IMPORTED_MODULE_20__["ZoomableDirective"], _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_21__["DraggableDirective"], _directives_mouseover_directive__WEBPACK_IMPORTED_MODULE_24__["MouseOverDirective"], _pages_charts_d3_d3_charts_component__WEBPACK_IMPORTED_MODULE_22__["D3ChartsComponent"], _pages_charts_d3_ufo_loom_graph_ufo_loom_graph_component__WEBPACK_IMPORTED_MODULE_23__["UfoLoomGraphComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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


    var _services_color_blind_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/color-blind.service */
    "./src/app/services/color-blind.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "mode-off": a0
      };
    };

    function MenuComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.toggleColorBlindMode(!ctx_r6.cbmOn);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.cbmOn));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Turn colorblind mode " + (ctx_r4.cbmOn ? "off" : "on"), " ");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "current": a0
      };
    };

    function MenuComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_a_6_Template_a_click_0_listener() {
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

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(route, router, colorBlindService) {
        _classCallCheck(this, MenuComponent);

        this.route = route;
        this.router = router;
        this.colorBlindService = colorBlindService;
        this.withCbm = false;
        this.cbmOn = false;

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _a;

          this.url = (_a = this.route.snapshot.firstChild) === null || _a === void 0 ? void 0 : _a.url[0].path;
        }
      }, {
        key: "setUrl",
        value: function setUrl(val) {
          this.url = val;
        }
      }, {
        key: "toggleColorBlindMode",
        value: function toggleColorBlindMode(val) {
          this.cbmOn = val;
          this.colorBlindService.colorBlindModeOn$.next(val);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_blind_service__WEBPACK_IMPORTED_MODULE_2__["ColorBlindService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      inputs: {
        url: "url",
        links: "links",
        withCbm: "withCbm",
        cbmOn: "cbmOn",
        cbmLink: "cbmLink",
        wrapperStyle: "wrapperStyle",
        linkStyle: "linkStyle"
      },
      decls: 8,
      vars: 5,
      consts: [[1, "back-wrapper", 3, "ngStyle"], [1, "page-link", 3, "ngStyle", "routerLink"], [3, "ngClass", "click", 4, "ngIf"], ["class", "page-link", 3, "ngClass", "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "page-link", 3, "ngClass", "routerLink", "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go back home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_button_4_Template, 2, 4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_a_6_Template, 2, 5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.wrapperStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.linkStyle)("routerLink", "/home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url === "lego");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["@-webkit-keyframes pulsingButton {\n  from {\n    box-shadow: none;\n  }\n  to {\n    box-shadow: 3px 3px  4px 4px white, -3px -3px 4px 4px white;\n  }\n}\n\n@keyframes pulsingButton {\n  from {\n    box-shadow: none;\n  }\n  to {\n    box-shadow: 3px 3px  4px 4px white, -3px -3px 4px 4px white;\n  }\n}\n\n  .container-black .chart {\n  padding: 2rem 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-family: 'Reenie Beanie', cursive;\n  font-size: 1.5rem;\n  background-color: white;\n  border: 2px solid black;\n  padding: .25rem .75rem;\n  align-self: flex-end;\n}\n\nbutton.mode-off[_ngcontent-%COMP%] {\n  color: white;\n  background-color: black;\n  border: 2px solid white;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  -webkit-animation: pulsingButton .5s alternate infinite;\n          animation: pulsingButton .5s alternate infinite;\n}\n\n.back-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  border-bottom: 4px solid white;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUFPLGdCQUFpQjtFQ0F4QjtFRENBO0lBQUssMkRBQTREO0VDRWpFO0FBQ0Y7O0FETEE7RUFDRTtJQUFPLGdCQUFpQjtFQ0F4QjtFRENBO0lBQUssMkRBQTREO0VDRWpFO0FBQ0Y7O0FEQUE7RUFDRSxlQUFlO0FDR2pCOztBREFBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsb0JBQW9CO0FDR3RCOztBRFZBO0VBVUksWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUNJM0I7O0FEaEJBO0VBZ0JJLHVEQUErQztVQUEvQywrQ0FBK0M7QUNJbkQ7O0FEQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsOEJBQThCO0FDR2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5Aa2V5ZnJhbWVzIHB1bHNpbmdCdXR0b24ge1xuICBmcm9tIHsgYm94LXNoYWRvdzogbm9uZSB9XG4gIHRvIHsgYm94LXNoYWRvdzogM3B4IDNweCAgNHB4IDRweCB3aGl0ZSwgLTNweCAtM3B4IDRweCA0cHggd2hpdGUgfVxufVxuXG46Om5nLWRlZXAgLmNvbnRhaW5lci1ibGFjayAuY2hhcnQge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICYubW9kZS1vZmYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGFuaW1hdGlvbjogcHVsc2luZ0J1dHRvbiAuNXMgYWx0ZXJuYXRlIGluZmluaXRlO1xuICB9XG59XG5cbi5iYWNrLXdyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iLCJAa2V5ZnJhbWVzIHB1bHNpbmdCdXR0b24ge1xuICBmcm9tIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4ICA0cHggNHB4IHdoaXRlLCAtM3B4IC0zcHggNHB4IDRweCB3aGl0ZTtcbiAgfVxufVxuXG46Om5nLWRlZXAgLmNvbnRhaW5lci1ibGFjayAuY2hhcnQge1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG5idXR0b24ubW9kZS1vZmYge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBwdWxzaW5nQnV0dG9uIC41cyBhbHRlcm5hdGUgaW5maW5pdGU7XG59XG5cbi5iYWNrLXdyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_color_blind_service__WEBPACK_IMPORTED_MODULE_2__["ColorBlindService"]
        }];
      }, {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        links: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        withCbm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cbmOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cbmLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wrapperStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/visuals/link-visual.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/visuals/link-visual.ts ***!
    \***************************************************/

  /*! exports provided: LinkVisualComponent */

  /***/
  function srcAppComponentsVisualsLinkVisualTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkVisualComponent", function () {
      return LinkVisualComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["linkVisual", ""];

    var LinkVisualComponent = function LinkVisualComponent() {
      _classCallCheck(this, LinkVisualComponent);
    };

    LinkVisualComponent.ɵfac = function LinkVisualComponent_Factory(t) {
      return new (t || LinkVisualComponent)();
    };

    LinkVisualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinkVisualComponent,
      selectors: [["", "linkVisual", ""]],
      inputs: {
        link: ["linkVisual", "link"]
      },
      attrs: _c0,
      decls: 8,
      vars: 20,
      consts: [["gradientUnits", "userSpaceOnUse", 3, "id"], ["offset", "0"], ["offset", "1"], [3, "id"], ["result", "matrixOut", "in", "offOut", "type", "matrix", "values", "20 0 0 0 0\n                               0 10 0 0 0\n                               0 0 10 0 0\n                               0 0 0 1 0"]],
      template: function LinkVisualComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "linearGradient", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "stop", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "feColorMatrix", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "line");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "color-" + ctx.link.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.link.source.x)("y1", ctx.link.source.y)("x2", ctx.link.target.x)("y2", ctx.link.target.y);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx.link.colors[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx.link.colors[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "hover_" + ctx.link.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.link.source.x)("y1", ctx.link.source.y)("x2", ctx.link.target.x)("y2", ctx.link.target.y);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("filter", ctx.link.hover && ctx.link.connecting ? "url(#hover_" + ctx.link.index + ")" : "")("stroke", "url(#color-" + ctx.link.index + ")")("stroke-width", ctx.link.amountForLink / 10)("stroke-opacity", ctx.link.hover && !ctx.link.connecting ? 0.3 : 0.8)("x1", ctx.link.source.x)("y1", ctx.link.source.y)("x2", ctx.link.target.x)("y2", ctx.link.target.y);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkVisualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[linkVisual]',
          templateUrl: "./link-visual.svg"
        }]
      }], null, {
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['linkVisual']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/visuals/node-visual.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/visuals/node-visual.ts ***!
    \***************************************************/

  /*! exports provided: NodeVisualComponent */

  /***/
  function srcAppComponentsVisualsNodeVisualTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeVisualComponent", function () {
      return NodeVisualComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_d3_force_directed_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/d3/force-directed-graph */
    "./src/app/models/d3/force-directed-graph.ts");

    var _c0 = ["nodeVisual", ""];

    var NodeVisualComponent = /*#__PURE__*/function () {
      function NodeVisualComponent() {
        _classCallCheck(this, NodeVisualComponent);
      }

      _createClass(NodeVisualComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.percentage = Math.round(this.node.amountAnswered / _models_d3_force_directed_graph__WEBPACK_IMPORTED_MODULE_1__["respondents"] * 100);
        }
      }]);

      return NodeVisualComponent;
    }();

    NodeVisualComponent.ɵfac = function NodeVisualComponent_Factory(t) {
      return new (t || NodeVisualComponent)();
    };

    NodeVisualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NodeVisualComponent,
      selectors: [["", "nodeVisual", ""]],
      inputs: {
        node: ["nodeVisual", "node"]
      },
      attrs: _c0,
      decls: 12,
      vars: 11,
      consts: [[1, "node"], ["x", "-50%", "y", "-50%", "width", "200%", "height", "200%", 3, "id"], ["result", "offOut", "in", "SourceGraphic", "dx", "0", "dy", "0"], ["result", "matrixOut", "in", "offOut", "type", "matrix", "values", "40 0 0 0 0\n                               0 40 0 0 0\n                               0 0 40 0 0\n                               0 0 0 1 0"], ["result", "blurOut", "in", "matrixOut", "stdDeviation", "10"], ["in", "SourceGraphic", "in2", "blurOut", "mode", "normal"], ["cx", "0", "cy", "0"], ["text-anchor", "middle"]],
      template: function NodeVisualComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "filter", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "feOffset", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "feColorMatrix", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "feGaussianBlur", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "feBlend", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "text", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("transform", "translate(" + ctx.node.x + "," + ctx.node.y + ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.node.group + "_" + ctx.node.radius);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx.node.radius)("fill", ctx.node.hover && ctx.node.connected ? ctx.node.hoverColor : ctx.node.color)("opacity", ctx.node.hover && !ctx.node.connected ? 0.5 : 1)("cursor", "move")("filter", "url(#" + ctx.node.group + "_" + ctx.node.radius + ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", "#ffffff")("opacity", ctx.node.hover && !ctx.node.connected ? 0.5 : 1)("cursor", "move");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.node.id, " ");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeVisualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[nodeVisual]',
          templateUrl: "./node-visual.svg"
        }]
      }], null, {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['nodeVisual']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/draggable.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/directives/draggable.directive.ts ***!
    \***************************************************/

  /*! exports provided: DraggableDirective */

  /***/
  function srcAppDirectivesDraggableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DraggableDirective", function () {
      return DraggableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/d3.service */
    "./src/app/services/d3.service.ts");

    var DraggableDirective = /*#__PURE__*/function () {
      function DraggableDirective(d3Service, _element) {
        _classCallCheck(this, DraggableDirective);

        this.d3Service = d3Service;
        this._element = _element;
      }

      _createClass(DraggableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
        }
      }]);

      return DraggableDirective;
    }();

    DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
      return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DraggableDirective,
      selectors: [["", "draggableNode", ""]],
      inputs: {
        draggableNode: "draggableNode",
        draggableInGraph: "draggableInGraph"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[draggableNode]'
        }]
      }], function () {
        return [{
          type: _services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        draggableNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['draggableNode']
        }],
        draggableInGraph: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['draggableInGraph']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/mouseover.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/directives/mouseover.directive.ts ***!
    \***************************************************/

  /*! exports provided: MouseOverDirective */

  /***/
  function srcAppDirectivesMouseoverDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MouseOverDirective", function () {
      return MouseOverDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/d3.service */
    "./src/app/services/d3.service.ts");

    var MouseOverDirective = /*#__PURE__*/function () {
      function MouseOverDirective(d3Service, _element) {
        _classCallCheck(this, MouseOverDirective);

        this.d3Service = d3Service;
        this._element = _element;
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MouseOverDirective, [{
        key: "onMouseOver",
        value: function onMouseOver() {
          if (!!this.mouseOverNode) {
            this.mouseOver.emit(this.mouseOverNode.group);
          }
        }
      }, {
        key: "onMouseOut",
        value: function onMouseOut() {
          this.mouseOver.emit(null); // if (!!this.mouseOverQuestion) {
          //   this.mouseOverInGraph.nodes = this.mouseOverInGraph.nodes.map((n) => {
          //     n.hover = false;
          //     n.connected = false;
          //     return n;
          //   })
          // }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!!this.mouseOverNode) {
            this.d3Service.applyMouseOverBehaviour(this._element.nativeElement, this.mouseOverInGraph, this.mouseOverNode);
          }
        }
      }]);

      return MouseOverDirective;
    }();

    MouseOverDirective.ɵfac = function MouseOverDirective_Factory(t) {
      return new (t || MouseOverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MouseOverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MouseOverDirective,
      selectors: [["", "mouseOverInGraph", ""]],
      hostBindings: function MouseOverDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MouseOverDirective_mouseover_HostBindingHandler() {
            return ctx.onMouseOver();
          })("mouseout", function MouseOverDirective_mouseout_HostBindingHandler() {
            return ctx.onMouseOut();
          });
        }
      },
      inputs: {
        mouseOverNode: "mouseOverNode",
        mouseOverQuestion: "mouseOverQuestion",
        mouseOverInGraph: "mouseOverInGraph"
      },
      outputs: {
        mouseOver: "mouseOver"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MouseOverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mouseOverInGraph]'
        }]
      }], function () {
        return [{
          type: _services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        mouseOverNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mouseOverNode']
        }],
        mouseOverQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mouseOverQuestion']
        }],
        mouseOverInGraph: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['mouseOverInGraph']
        }],
        mouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['mouseOver']
        }],
        onMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseover']
        }],
        onMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseout']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/zoomable.directive.ts":
  /*!**************************************************!*\
    !*** ./src/app/directives/zoomable.directive.ts ***!
    \**************************************************/

  /*! exports provided: ZoomableDirective */

  /***/
  function srcAppDirectivesZoomableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZoomableDirective", function () {
      return ZoomableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/d3.service */
    "./src/app/services/d3.service.ts");

    var ZoomableDirective = /*#__PURE__*/function () {
      function ZoomableDirective(d3Service, _element) {
        _classCallCheck(this, ZoomableDirective);

        this.d3Service = d3Service;
        this._element = _element;
      }

      _createClass(ZoomableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
        }
      }]);

      return ZoomableDirective;
    }();

    ZoomableDirective.ɵfac = function ZoomableDirective_Factory(t) {
      return new (t || ZoomableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ZoomableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ZoomableDirective,
      selectors: [["", "zoomableOf", ""]],
      inputs: {
        zoomableOf: "zoomableOf"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[zoomableOf]'
        }]
      }], function () {
        return [{
          type: _services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        zoomableOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['zoomableOf']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/loom-package/compare-value.js":
  /*!***********************************************!*\
    !*** ./src/app/loom-package/compare-value.js ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoomPackageCompareValueJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return compareValue;
    });

    function compareValue(compare) {
      return function (a, b) {
        return compare(a.outer.value, b.outer.value);
      };
    }
    /***/

  },

  /***/
  "./src/app/loom-package/constant.js":
  /*!******************************************!*\
    !*** ./src/app/loom-package/constant.js ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoomPackageConstantJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return constant;
    });

    function constant(x) {
      return function () {
        return x;
      };
    }
    /***/

  },

  /***/
  "./src/app/loom-package/loom.js":
  /*!**************************************!*\
    !*** ./src/app/loom-package/loom.js ***!
    \**************************************/

  /*! exports provided: loom */

  /***/
  function srcAppLoomPackageLoomJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loom", function () {
      return loom;
    });
    /* harmony import */


    var _compare_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./compare-value */
    "./src/app/loom-package/compare-value.js");
    /* harmony import */


    var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constant */
    "./src/app/loom-package/constant.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* Based on the d3v4 d3.chord() function by Mike Bostock
    ** Adjusted by Nadieh Bremer - July 2016 */

    /* global d3 */


    function loom() {
      var tau = Math.PI * 2;
      var padAngle = 0;
      var sortGroups = null;
      var sortSubgroups = null;
      var sortLooms = null;
      var emptyPerc = 0.2;
      var heightInner = 20;

      var widthInner = function widthInner() {
        return 30;
      };

      var value = function value(d) {
        return d.value;
      };

      var inner = function inner(d) {
        return d.inner;
      };

      var outer = function outer(d) {
        return d.outer;
      };

      function loomLayout(layoutData) {
        // Nest the data on the outer variable
        var data = d3__WEBPACK_IMPORTED_MODULE_2__["nest"]().key(outer).entries(layoutData);
        var n = data.length; // Loop over the outer groups and sum the values

        var groupSums = [];
        var groupIndex = d3__WEBPACK_IMPORTED_MODULE_2__["range"](n);
        var subgroupIndex = [];
        var looms = [];
        looms.groups = new Array(n);
        var groups = looms.groups;
        var numSubGroups;
        looms.innergroups = [];
        var uniqueInner = looms.innergroups;
        var uniqueCheck = [];
        var k;
        var x;
        var x0;
        var j;
        var l;
        var s;
        var v;
        var sum;
        var section;
        var remain;
        var counter;
        var reverseOrder = false;
        var approxCenter;
        k = 0;
        numSubGroups = 0;

        for (var i = 0; i < n; i += 1) {
          v = data[i].values.length;
          sum = 0;

          for (j = 0; j < v; j += 1) {
            sum += value(data[i].values[j]);
          } // for j


          groupSums.push(sum);
          subgroupIndex.push(d3__WEBPACK_IMPORTED_MODULE_2__["range"](v));
          numSubGroups += v;
          k += sum;
        } // for i
        // Sort the groups…


        if (sortGroups) {
          groupIndex.sort(function (a, b) {
            return sortGroups(groupSums[a], groupSums[b]);
          });
        } // Sort subgroups…


        if (sortSubgroups) {
          subgroupIndex.forEach(function (d, i) {
            d.sort(function (a, b) {
              return sortSubgroups(inner(data[i].values[a]), inner(data[i].values[b]));
            });
          });
        } // After which group are we past the center, taking into account the padding
        // TODO: make something for if there is no "nice" split in two...


        var padk = k * (padAngle / tau);
        l = 0;

        for (var _i = 0; _i < n; _i += 1) {
          section = groupSums[groupIndex[_i]] + padk;
          l += section;

          if (l > (k + n * padk) / 2) {
            // Check if the group should be added to left or right
            remain = k + n * padk - (l - section);
            approxCenter = remain / section < 0.5 ? groupIndex[_i] : groupIndex[_i - 1];
            break;
          } // if

        } // for i
        // How much should be added to k to make the empty part emptyPerc big of the total


        var emptyk = k * emptyPerc / (1 - emptyPerc);
        k += emptyk; // Convert the sum to scaling factor for [0, 2pi].

        k = Math.max(0, tau - padAngle * n) / k;
        var dx = k ? padAngle : tau / n; // Compute the start and end angle for each group and subgroup.
        // Note: Opera has a bug reordering object literal properties!

        var subgroups = new Array(numSubGroups);
        x = emptyk * 0.25 * k; // starting with quarter of the empty part to the side;

        counter = 0;

        for (var _i2 = 0; _i2 < n; _i2 += 1) {
          var di = groupIndex[_i2];
          var outername = data[di].key;
          x0 = x;
          s = subgroupIndex[di].length;

          for (j = 0; j < s; j += 1) {
            var dj = reverseOrder ? subgroupIndex[di][s - 1 - j] : subgroupIndex[di][j];
            v = value(data[di].values[dj]);
            var innername = inner(data[di].values[dj]);
            var a0 = x;
            x += v * k;
            var a1 = x;
            subgroups[counter] = {
              index: di,
              subindex: dj,
              startAngle: a0,
              endAngle: a1,
              value: v,
              outername: outername,
              innername: innername,
              groupStartAngle: x0
            }; // Check and save the unique inner names

            if (!uniqueCheck[innername]) {
              uniqueCheck[innername] = true;
              uniqueInner.push({
                name: innername
              });
            } // if


            counter += 1;
          } // for j


          groups[di] = {
            index: di,
            startAngle: x0,
            endAngle: x,
            value: groupSums[di],
            outername: outername
          };
          x += dx; // If this is the approximate center, add half of the empty piece for the bottom

          if (approxCenter === di) x += emptyk * 0.5 * k; // If you've crossed the bottom, reverse the order of the inner strings

          if (x > Math.PI) reverseOrder = true;
        } // for i
        // Sort the inner groups in the same way as the strings


        if (sortSubgroups) {
          uniqueInner.sort(function (a, b) {
            return sortSubgroups(a.name, b.name);
          });
        } // Find x and y locations of the inner categories


        var m = uniqueInner.length;

        for (var _i3 = 0; _i3 < m; _i3 += 1) {
          uniqueInner[_i3].x = 0;
          uniqueInner[_i3].y = -m * heightInner / 2 + _i3 * heightInner;
          uniqueInner[_i3].offset = widthInner(uniqueInner[_i3].name, _i3);
        } // for i
        // Generate bands for each (non-empty) subgroup-subgroup link


        counter = 0;

        for (var _i4 = 0; _i4 < n; _i4 += 1) {
          var _di = groupIndex[_i4];
          s = subgroupIndex[_di].length;

          for (j = 0; j < s; j += 1) {
            var outerGroup = subgroups[counter];
            var innerTerm = outerGroup.innername; // Find the correct inner object based on the name

            var innerGroup = searchTerm(innerTerm, 'name', uniqueInner);

            if (outerGroup.value) {
              looms.push({
                inner: innerGroup,
                outer: outerGroup
              });
            } // if


            counter += 1;
          } // for j

        } // for i


        return sortLooms ? looms.sort(sortLooms) : looms;
      } // loomLayout


      function searchTerm(term, property, arrayToSearch) {
        for (var i = 0; i < arrayToSearch.length; i += 1) {
          if (arrayToSearch[i][property] === term) {
            return arrayToSearch[i];
          } // if

        } // for i


        return null;
      } // searchTerm


      loomLayout.padAngle = function (_) {
        return arguments.length ? (padAngle = Math.max(0, _), loomLayout) : padAngle;
      };

      loomLayout.inner = function (_) {
        return arguments.length ? (inner = _, loomLayout) : inner;
      };

      loomLayout.outer = function (_) {
        return arguments.length ? (outer = _, loomLayout) : outer;
      };

      loomLayout.value = function (_) {
        return arguments.length ? (value = _, loomLayout) : value;
      };

      loomLayout.heightInner = function (_) {
        return arguments.length ? (heightInner = _, loomLayout) : heightInner;
      };

      loomLayout.widthInner = function (_) {
        return arguments.length ? (widthInner = typeof _ === 'function' ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), loomLayout) : widthInner;
      };

      loomLayout.emptyPerc = function (_) {
        return arguments.length ? (emptyPerc = _ < 1 ? Math.max(0, _) : Math.max(0, _ * 0.01), loomLayout) : emptyPerc;
      };

      loomLayout.sortGroups = function (_) {
        return arguments.length ? (sortGroups = _, loomLayout) : sortGroups;
      };

      loomLayout.sortSubgroups = function (_) {
        return arguments.length ? (sortSubgroups = _, loomLayout) : sortSubgroups;
      };

      loomLayout.sortLooms = function (_) {
        return arguments.length ? (_ == null ? sortLooms = null : (sortLooms = Object(_compare_value__WEBPACK_IMPORTED_MODULE_0__["default"])(_))._ = _, loomLayout) : sortLooms && sortLooms._;
      };

      return loomLayout;
    } // loom

    /***/

  },

  /***/
  "./src/app/loom-package/string.js":
  /*!****************************************!*\
    !*** ./src/app/loom-package/string.js ***!
    \****************************************/

  /*! exports provided: string */

  /***/
  function srcAppLoomPackageStringJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "string", function () {
      return string;
    });
    /* harmony import */


    var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./constant */
    "./src/app/loom-package/constant.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* global d3 */


    function string() {
      var slice = Array.prototype.slice;
      var cos = Math.cos;
      var sin = Math.sin;
      var halfPi = Math.PI / 2;
      var tau = Math.PI * 2;

      var inner = function inner(d) {
        return d.inner;
      };

      var outer = function outer(d) {
        return d.outer;
      };

      var radius = function radius() {
        return 100;
      };

      var groupStartAngle = function groupStartAngle(d) {
        return d.groupStartAngle;
      };

      var startAngle = function startAngle(d) {
        return d.startAngle;
      };

      var endAngle = function endAngle(d) {
        return d.endAngle;
      };

      var x = function x(d) {
        return d.x;
      };

      var y = function y(d) {
        return d.y;
      };

      var offset = function offset(d) {
        return d.offset;
      };

      var pullout = 50;
      var thicknessInner = 0;
      var context = null;

      function stringLayout() {
        var buffer;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var argv = slice.call(args);
        var out = outer.apply(this, argv);
        var inn = inner.apply(this, argv);
        argv[0] = out;
        var sr = +radius.apply(this, argv);
        var sa0 = startAngle.apply(this, argv) - halfPi;
        var sga0 = groupStartAngle.apply(this, argv) - halfPi;
        var sa1 = endAngle.apply(this, argv) - halfPi;
        var sx0 = sr * cos(sa0);
        var sy0 = sr * sin(sa0);
        var sx1 = sr * cos(sa1);
        var sy1 = sr * sin(sa1);
        argv[0] = inn; // 'tr' is assigned a value but never used
        // const tr = +radius.apply(this, (argv));

        var tx = x.apply(this, argv);
        var ty = y.apply(this, argv);
        var toffset = offset.apply(this, argv);
        var xco;
        var yco;
        var xci;
        var yci; // Does the group lie on the left side;

        var leftHalf = sga0 + halfPi > Math.PI && sga0 + halfPi < tau; // If the group lies on the other side, switch the inner point offset

        if (leftHalf) toffset = -toffset;
        tx += toffset; // And the height of the end point

        var theight = leftHalf ? -thicknessInner : thicknessInner;

        if (!context) {
          buffer = d3__WEBPACK_IMPORTED_MODULE_1__["path"]();
          context = buffer;
        } // Change the pullout based on where the stringLayout is


        var pulloutContext = (leftHalf ? -1 : 1) * pullout;
        sx0 += pulloutContext;
        sx1 += pulloutContext; // Start at smallest angle of outer arc

        context.moveTo(sx0, sy0); // Circular part along the outer arc

        context.arc(pulloutContext, 0, sr, sa0, sa1); // From end outer arc to center (taking into account the pullout)

        xco = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](pulloutContext, sx1)(0.5);
        yco = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](0, sy1)(0.5);

        if (!leftHalf && sx1 < tx || leftHalf && sx1 > tx) {
          // If the outer point lies closer to the center than the inner point
          xci = tx + (tx - sx1) / 2;
          yci = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](ty + theight / 2, sy1)(0.5);
        } else {
          xci = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](tx, sx1)(0.25);
          yci = ty + theight / 2;
        } // else


        context.bezierCurveTo(xco, yco, xci, yci, tx, ty + theight / 2); // Draw a straight line up/down (depending on the side of the circle)

        context.lineTo(tx, ty - theight / 2); // From center (taking into account the pullout) to start of outer arc

        xco = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](pulloutContext, sx0)(0.5);
        yco = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](0, sy0)(0.5);

        if (!leftHalf && sx0 < tx || leftHalf && sx0 > tx) {
          // If the outer point lies closer to the center than the inner point
          xci = tx + (tx - sx0) / 2;
          yci = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](ty - theight / 2, sy0)(0.5);
        } else {
          xci = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"](tx, sx0)(0.25);
          yci = ty - theight / 2;
        } // else


        context.bezierCurveTo(xci, yci, xco, yco, sx0, sy0); // Close path

        context.closePath();

        if (buffer) {
          context = null;
          return "".concat(buffer) || null;
        }

        return null;
      }

      stringLayout.radius = function (_) {
        return arguments.length ? (radius = typeof _ === 'function' ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), stringLayout) : radius;
      };

      stringLayout.groupStartAngle = function (_) {
        return arguments.length ? (groupStartAngle = typeof _ === 'function' ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), stringLayout) : groupStartAngle;
      };

      stringLayout.startAngle = function (_) {
        return arguments.length ? (startAngle = typeof _ === 'function' ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), stringLayout) : startAngle;
      };

      stringLayout.endAngle = function (_) {
        return arguments.length ? (endAngle = typeof _ === 'function' ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), stringLayout) : endAngle;
      };

      stringLayout.x = function (_) {
        return arguments.length ? (x = _, stringLayout) : x;
      };

      stringLayout.y = function (_) {
        return arguments.length ? (y = _, stringLayout) : y;
      };

      stringLayout.offset = function (_) {
        return arguments.length ? (offset = _, stringLayout) : offset;
      };

      stringLayout.thicknessInner = function (_) {
        return arguments.length ? (thicknessInner = _, stringLayout) : thicknessInner;
      };

      stringLayout.inner = function (_) {
        return arguments.length ? (inner = _, stringLayout) : inner;
      };

      stringLayout.outer = function (_) {
        return arguments.length ? (outer = _, stringLayout) : outer;
      };

      stringLayout.pullout = function (_) {
        return arguments.length ? (pullout = _, stringLayout) : pullout;
      };

      stringLayout.context = function (_) {
        return arguments.length ? (context = _ == null ? null : _, stringLayout) : context;
      };

      return stringLayout;
    }
    /***/

  },

  /***/
  "./src/app/models/d3/force-directed-graph.ts":
  /*!***************************************************!*\
    !*** ./src/app/models/d3/force-directed-graph.ts ***!
    \***************************************************/

  /*! exports provided: respondents, ForceDirectedGraph */

  /***/
  function srcAppModelsD3ForceDirectedGraphTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "respondents", function () {
      return respondents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForceDirectedGraph", function () {
      return ForceDirectedGraph;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var FORCES = {
      LINKS: 1 / 1500,
      COLLISION: 1,
      CHARGE: 0
    };
    var respondents = 973;

    var ForceDirectedGraph = /*#__PURE__*/function () {
      function ForceDirectedGraph(nodes, links, options) {
        _classCallCheck(this, ForceDirectedGraph);

        this.ticker = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
      }

      _createClass(ForceDirectedGraph, [{
        key: "initNodes",
        value: function initNodes() {
          var _a;

          if (!this.simulation) {
            throw new Error("Simulation not initialized yet");
          }

          (_a = this.simulation) === null || _a === void 0 ? void 0 : _a.nodes(this.nodes);
        }
      }, {
        key: "initLinks",
        value: function initLinks() {
          if (!this.simulation) {
            throw new Error("Simulation not initialized yet");
          }

          this.simulation.force('links', d3__WEBPACK_IMPORTED_MODULE_1__["forceLink"](this.links).strength(FORCES.LINKS));
        }
      }, {
        key: "initSimulation",
        value: function initSimulation(options) {
          var _this = this;

          if (!options || !options.width || !options.height) {
            throw new Error("Missing options");
          }

          if (!this.simulation) {
            var ticker = this.ticker;
            this.simulation = d3__WEBPACK_IMPORTED_MODULE_1__["forceSimulation"]().force("charge", d3__WEBPACK_IMPORTED_MODULE_1__["forceManyBody"]().strength(FORCES.CHARGE));
            this.simulation.on('tick', function () {
              return ticker.emit(_this.simulation);
            });
            this.initNodes();
            this.initLinks();
          }

          this.simulation.force("centers", d3__WEBPACK_IMPORTED_MODULE_1__["forceCenter"](options.width / 2, options.height / 2.25));
          this.simulation.restart();
        }
      }]);

      return ForceDirectedGraph;
    }();
    /***/

  },

  /***/
  "./src/app/models/d3/link.ts":
  /*!***********************************!*\
    !*** ./src/app/models/d3/link.ts ***!
    \***********************************/

  /*! exports provided: Link */

  /***/
  function srcAppModelsD3LinkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Link", function () {
      return Link;
    });

    var Link = /*#__PURE__*/function () {
      function Link(index, source, target, colors) {
        var amountForLink = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

        _classCallCheck(this, Link);

        this.hover = false;
        this.connecting = false;
        this.index = index;
        this.source = source;
        this.target = target;
        this.colors = colors;
        this.amountForLink = amountForLink;
      }

      _createClass(Link, [{
        key: "setHoverEffect",
        value: function setHoverEffect(node) {
          this.hover = true;

          if (this.source === node || this.target === node) {
            this.connecting = true;
          }

          return this;
        }
      }, {
        key: "restoreAfterHover",
        value: function restoreAfterHover() {
          this.hover = false;
          this.connecting = false;
          return this;
        }
      }]);

      return Link;
    }();
    /***/

  },

  /***/
  "./src/app/models/d3/node.ts":
  /*!***********************************!*\
    !*** ./src/app/models/d3/node.ts ***!
    \***********************************/

  /*! exports provided: Node */

  /***/
  function srcAppModelsD3NodeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Node", function () {
      return Node;
    });

    var Node = /*#__PURE__*/function () {
      function Node(id, group, amountAnswered, color, hoverColor) {
        _classCallCheck(this, Node);

        this.id = id;
        this.group = group;
        this.amountAnswered = amountAnswered;
        this.color = color;
        this.hoverColor = hoverColor;
        this.calculateRadius(amountAnswered);
      }

      _createClass(Node, [{
        key: "calculateRadius",
        value: function calculateRadius(amountAnswered) {
          this.radius = (amountAnswered / 9 + (10 - amountAnswered / 300)).toString();
        }
      }, {
        key: "setHoverEffect",
        value: function setHoverEffect(connected) {
          this.hover = true;
          this.connected = connected;
          return this;
        }
      }, {
        key: "restoreAfterHover",
        value: function restoreAfterHover() {
          this.hover = false;
          this.connected = false;
          return this;
        }
      }]);

      return Node;
    }();
    /***/

  },

  /***/
  "./src/app/pages/charts/bar-chart/bar-chart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/charts/bar-chart/bar-chart.component.ts ***!
    \***************************************************************/

  /*! exports provided: BarChartComponent */

  /***/
  function srcAppPagesChartsBarChartBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/charts/chart-data.ts");
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
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
  "./src/app/pages/charts/chart-data.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/charts/chart-data.ts ***!
    \********************************************/

  /*! exports provided: titleOptions, chartFontColor */

  /***/
  function srcAppPagesChartsChartDataTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/app/pages/charts/charts.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/charts/charts.component.ts ***!
    \**************************************************/

  /*! exports provided: ChartsComponent */

  /***/
  function srcAppPagesChartsChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");

    var ChartsComponent = function ChartsComponent() {
      _classCallCheck(this, ChartsComponent);

      this.chartLinks = [{
        link: 'default',
        text: 'Try-and-see'
      }, {
        link: 'lego',
        text: 'Lego land'
      }, {
        link: 'd3',
        text: 'D3 Visuals'
      }];
      chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.defaultFontColor = 'white';
      chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.defaultFontSize = 16;
      chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.defaultFontFamily = 'Raleway';
      chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.elements.line.borderColor = 'white';

      chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"].defaults.global.legend.onHover = function (e) {
        return e.target.style.cursor = 'pointer';
      };
    };

    ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
      return new (t || ChartsComponent)();
    };

    ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartsComponent,
      selectors: [["app-charts"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container-black"], [3, "links"]],
      template: function ChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("links", ctx.chartLinks);
        }
      },
      directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */"]
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
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/charts/d3/d3-charts.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/charts/d3/d3-charts.component.ts ***!
    \********************************************************/

  /*! exports provided: D3ChartsComponent */

  /***/
  function srcAppPagesChartsD3D3ChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D3ChartsComponent", function () {
      return D3ChartsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./force-directed-graph/force-directed-graph.component */
    "./src/app/pages/charts/d3/force-directed-graph/force-directed-graph.component.ts");
    /* harmony import */


    var _ufo_loom_graph_ufo_loom_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ufo-loom-graph/ufo-loom-graph.component */
    "./src/app/pages/charts/d3/ufo-loom-graph/ufo-loom-graph.component.ts");

    var D3ChartsComponent = /*#__PURE__*/function () {
      function D3ChartsComponent() {
        _classCallCheck(this, D3ChartsComponent);
      }

      _createClass(D3ChartsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return D3ChartsComponent;
    }();

    D3ChartsComponent.ɵfac = function D3ChartsComponent_Factory(t) {
      return new (t || D3ChartsComponent)();
    };

    D3ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: D3ChartsComponent,
      selectors: [["app-d3-charts"]],
      decls: 3,
      vars: 0,
      template: function D3ChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-force-directed-graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ufo-loom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_1__["ForceDirectedGraphComponent"], _ufo_loom_graph_ufo_loom_graph_component__WEBPACK_IMPORTED_MODULE_2__["UfoLoomGraphComponent"]],
      styles: ["div[_ngcontent-%COMP%] {\n  font-family: 'Roboto Condensed', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9jaGFydHMvZDMvZDMtY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFydHMvZDMvZDMtY2hhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0FDQzdDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcnRzL2QzL2QzLWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG59XG4iLCJkaXYge1xuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-d3-charts',
          templateUrl: './d3-charts.component.html',
          styleUrls: ['./d3-charts.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/charts/d3/force-directed-graph/force-directed-graph.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/charts/d3/force-directed-graph/force-directed-graph.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ForceDirectedGraphComponent */

  /***/
  function srcAppPagesChartsD3ForceDirectedGraphForceDirectedGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForceDirectedGraphComponent", function () {
      return ForceDirectedGraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_d3_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../models/d3/link */
    "./src/app/models/d3/link.ts");
    /* harmony import */


    var _models_d3_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../models/d3/node */
    "./src/app/models/d3/node.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_d3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/d3.service */
    "./src/app/services/d3.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_zoomable_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../directives/zoomable.directive */
    "./src/app/directives/zoomable.directive.ts");
    /* harmony import */


    var _directives_mouseover_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../directives/mouseover.directive */
    "./src/app/directives/mouseover.directive.ts");
    /* harmony import */


    var _components_visuals_link_visual__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../components/visuals/link-visual */
    "./src/app/components/visuals/link-visual.ts");
    /* harmony import */


    var _components_visuals_node_visual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../components/visuals/node-visual */
    "./src/app/components/visuals/node-visual.ts");
    /* harmony import */


    var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../directives/draggable.directive */
    "./src/app/directives/draggable.directive.ts");

    var _c0 = function _c0(a0) {
      return {
        backgroundColor: a0
      };
    };

    function ForceDirectedGraphComponent_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var q_r37 = ctx.$implicit;

        var graph_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mouseOverQuestion", q_r37[0])("mouseOverInGraph", graph_r32)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !!ctx_r33.hoverGroup && ctx_r33.hoverGroup === q_r37[0] ? ctx_r33.colors[q_r37[0]][1] : ctx_r33.colors[q_r37[0]][0]));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r37[1], " ");
      }
    }

    function ForceDirectedGraphComponent_div_0__svg_g_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "g", 12);
      }

      if (rf & 2) {
        var link_r39 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linkVisual", link_r39);
      }
    }

    function ForceDirectedGraphComponent_div_0__svg_g_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseOver", function ForceDirectedGraphComponent_div_0__svg_g_12_Template__svg_g_mouseOver_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.highlightQuestion($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r40 = ctx.$implicit;

        var graph_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodeVisual", node_r40)("draggableNode", node_r40)("draggableInGraph", graph_r32)("mouseOverNode", node_r40)("mouseOverInGraph", graph_r32);
      }
    }

    function ForceDirectedGraphComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Questions from a mental health survey for tech industry personnel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(Respondents: 973)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForceDirectedGraphComponent_div_0_div_7_Template, 2, 6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", null, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForceDirectedGraphComponent_div_0__svg_g_11_Template, 1, 1, "g", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForceDirectedGraphComponent_div_0__svg_g_12_Template, 1, 5, "g", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TEST");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.questions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoomableOf", _r34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.links);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.nodes);
      }
    }

    var ForceDirectedGraphComponent = /*#__PURE__*/function () {
      function ForceDirectedGraphComponent(d3Service, changeDetectorRef) {
        var _this$colors;

        _classCallCheck(this, ForceDirectedGraphComponent);

        this.d3Service = d3Service;
        this.changeDetectorRef = changeDetectorRef;
        this.nodes = [];
        this.links = [];
        this.questions = [['taking_serious_mh_ph', 'Do you feel that your employer takes mental health as seriously as physical health?'], ['having_mhi_hurts_career', 'Do you feel that being identified as a person with a mental health issue would hurt your career?'], ['discussing_mhd_neg_cons', 'Do you think that discussing a mental health disorder with your employer would have negative consequences?'], ['discussing_phi_neg_cons', 'Do you think that discussing a physical health issue with your employer would have negative consequences?']];
        this.colors = (_this$colors = {}, _defineProperty(_this$colors, this.questions[0][0], ['#8b2020', '#e42e2d']), _defineProperty(_this$colors, this.questions[1][0], ['#0a4a76', '#2f76ce']), _defineProperty(_this$colors, this.questions[2][0], ['#1c067b', '#5B00FE']), _defineProperty(_this$colors, this.questions[3][0], ['#9a3f08', '#e77008']), _this$colors);
        this.graph$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.options = {
          width: 800,
          height: 600
        };
      }

      _createClass(ForceDirectedGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var questions = Object.keys(this.colors);
          Promise.all(questions.map(function (q) {
            return d3__WEBPACK_IMPORTED_MODULE_3__["csv"]("assets/mental-health/".concat(q, ".csv"));
          }).concat(d3__WEBPACK_IMPORTED_MODULE_3__["csv"]("assets/mental-health/all_questions.csv"))).then(function (dataSets) {
            dataSets.forEach(function (data, i1) {
              if (!!questions[i1]) {
                var dataByAnswer = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](data, function (d) {
                  return d[questions[i1]];
                });
                var nodes = Object.keys(dataByAnswer).map(function (d, i2) {
                  var amountAnswered = dataByAnswer[d].reduce(function (a, b) {
                    return a + Number(b['amount']);
                  }, 0);
                  return Object.assign(new _models_d3_node__WEBPACK_IMPORTED_MODULE_2__["Node"](d, questions[i1], amountAnswered, _this2.colors[questions[i1]][0], _this2.colors[questions[i1]][1]), {
                    x: 200 * (i2 + 1),
                    y: 180 * (i1 + 1) - 50,
                    vx: 0,
                    vy: 0
                  });
                });
                _this2.nodes = _this2.nodes.concat(nodes); // else condition is only entered when all nodes are made
              } else {
                var nodesToSearch = _this2.nodes; // for each node, find all rows that contain group & answer of node

                _this2.nodes.forEach(function (node) {
                  var dataForNode = data.filter(function (d) {
                    return d[node.group] === node.id;
                  }); // for each question that is not the group of the current node, count amount of answer x

                  questions.filter(function (q) {
                    return q !== node.group;
                  }).forEach(function (q) {
                    var answerCounts = {};
                    dataForNode.map(function (d) {
                      return d[q];
                    }).forEach(function (a) {
                      return answerCounts[a] = (answerCounts[a] || 0) + 1;
                    }); // for each answer, find the corresponding node and link the current node to the found node

                    Object.keys(answerCounts).forEach(function (a) {
                      var secondNode = nodesToSearch.find(function (n2) {
                        return n2.group === q && n2.id === a;
                      }); // todo: when hovering over a node, highlight connections

                      if (secondNode) {
                        _this2.links.push(new _models_d3_link__WEBPACK_IMPORTED_MODULE_1__["Link"](_this2.links.length, node, secondNode, [_this2.colors[node.group][0], _this2.colors[secondNode.group][0]], answerCounts[a]));
                      }
                    });
                  }); // filter out nodes that already have all connections

                  nodesToSearch = nodesToSearch.filter(function (n) {
                    return n !== node;
                  });
                });
              }
            });

            _this2.graph$.next(_this2.d3Service.getForceDirectedGraph(_this2.nodes, _this2.links, _this2.options));
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.graph$.subscribe(function (g) {
            if (g) {
              g.initSimulation(_this3.options);

              _this3.changeDetectorRef.detectChanges();
            }
          });
        }
      }, {
        key: "highlightQuestion",
        value: function highlightQuestion(group) {
          this.hoverGroup = group;
        }
      }]);

      return ForceDirectedGraphComponent;
    }();

    ForceDirectedGraphComponent.ɵfac = function ForceDirectedGraphComponent_Factory(t) {
      return new (t || ForceDirectedGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_d3_service__WEBPACK_IMPORTED_MODULE_6__["D3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    ForceDirectedGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForceDirectedGraphComponent,
      selectors: [["app-force-directed-graph"]],
      decls: 2,
      vars: 3,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "chart-header"], [1, "graph-wrapper"], [1, "questions"], [3, "mouseOverQuestion", "mouseOverInGraph", "ngStyle", 4, "ngFor", "ngForOf"], ["svg", ""], [3, "zoomableOf"], [3, "linkVisual", 4, "ngFor", "ngForOf"], [3, "nodeVisual", "draggableNode", "draggableInGraph", "mouseOverNode", "mouseOverInGraph", "mouseOver", 4, "ngFor", "ngForOf"], [1, "fdg-node-tooltip"], [3, "mouseOverQuestion", "mouseOverInGraph", "ngStyle"], [3, "linkVisual"], [3, "nodeVisual", "draggableNode", "draggableInGraph", "mouseOverNode", "mouseOverInGraph", "mouseOver"]],
      template: function ForceDirectedGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForceDirectedGraphComponent_div_0_Template, 15, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.graph$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _directives_zoomable_directive__WEBPACK_IMPORTED_MODULE_8__["ZoomableDirective"], _directives_mouseover_directive__WEBPACK_IMPORTED_MODULE_9__["MouseOverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _components_visuals_link_visual__WEBPACK_IMPORTED_MODULE_10__["LinkVisualComponent"], _components_visuals_node_visual__WEBPACK_IMPORTED_MODULE_11__["NodeVisualComponent"], _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_12__["DraggableDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 2rem auto 0 auto;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  display: inline-block;\n}\n\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: 'Roboto Condensed', sans-serif;\n  margin-bottom: 2rem;\n}\n\n.container[_ngcontent-%COMP%]   .graph-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  height: 80%;\n  overflow: scroll;\n}\n\n.container[_ngcontent-%COMP%]   .graph-wrapper[_ngcontent-%COMP%]   .questions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n}\n\n.container[_ngcontent-%COMP%]   .graph-wrapper[_ngcontent-%COMP%]   .questions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding: .5rem;\n  margin: 1.5rem .5rem 0 0;\n}\n\n.container[_ngcontent-%COMP%]   .graph-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 2s;\n          animation: fadeIn 2s;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .graph-wrapper[_ngcontent-%COMP%]   .fdg-node-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  background-color: #1d1d1d;\n  padding: .15rem .45rem;\n  border-radius: 3px;\n  pointer-events: none;\n  font-family: 'Do Hyeon', sans-serif;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2QzL2ZvcmNlLWRpcmVjdGVkLWdyYXBoL2ZvcmNlLWRpcmVjdGVkLWdyYXBoLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3BhZ2VzL2NoYXJ0cy9kMy9mb3JjZS1kaXJlY3RlZC1ncmFwaC9mb3JjZS1kaXJlY3RlZC1ncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQU8sVUFBVztFQ0VsQjtFRERBO0lBQUssVUFBVztFQ0loQjtBQUNGOztBRFBBO0VBQ0U7SUFBTyxVQUFXO0VDRWxCO0VEREE7SUFBSyxVQUFXO0VDSWhCO0FBQ0Y7O0FDT0E7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0FESjFCOztBQ0VBO0VBS0ksU0FBUztFQUNULHFCQUFxQjtBREh6Qjs7QUNIQTtFQVVJLDJDQUEyQztFQUMzQyxtQkFBbUI7QURIdkI7O0FDUkE7RUFlSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QURIcEI7O0FDZkE7RUFxQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FERmhCOztBQ3JCQTtFQTBCUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHdCQUF3QjtBRERoQzs7QUMzQkE7RUFpQ00sNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixXQUFXO0FERmpCOztBQ2hDQTtFQXdDTSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUx3QjtFQU14QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsZUFBZTtBREpyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9kMy9mb3JjZS1kaXJlY3RlZC1ncmFwaC9mb3JjZS1kaXJlY3RlZC1ncmFwaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDAgfVxuICB0byB7IG9wYWNpdHk6IDEgfVxufVxuIiwiQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XG59XG5cbi5jb250YWluZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhaW5lciBoMiB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250YWluZXIgLmdyYXBoLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogODAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uY29udGFpbmVyIC5ncmFwaC13cmFwcGVyIC5xdWVzdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjAlO1xufVxuXG4uY29udGFpbmVyIC5ncmFwaC13cmFwcGVyIC5xdWVzdGlvbnMgPiBkaXYge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBtYXJnaW46IDEuNXJlbSAuNXJlbSAwIDA7XG59XG5cbi5jb250YWluZXIgLmdyYXBoLXdyYXBwZXIgc3ZnIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIC5ncmFwaC13cmFwcGVyIC5mZGctbm9kZS10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xuICBwYWRkaW5nOiAuMTVyZW0gLjQ1cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuIiwiQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2FuaW1hdGlvbnNcIjtcblxuJGNvbG9yLTE6ICM4YjIwMjA7XG4kY29sb3ItMjogIzBhNGE3NjtcbiRjb2xvci0zOiAjMWMwNjdiO1xuJGNvbG9yLTQ6ICM5YTNmMDg7XG5cbiRjb2xvcnM6XG4gIDEgJGNvbG9yLTEsXG4gIDIgJGNvbG9yLTIsXG4gIDMgJGNvbG9yLTMsXG4gIDQgJGNvbG9yLTQ7XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLmdyYXBoLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogODAlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICAucXVlc3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDIwJTtcblxuICAgICAgPiBkaXYge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICBtYXJnaW46IDEuNXJlbSAuNXJlbSAwIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDJzO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJHBlcmMtbGFiZWwtY29sb3I6ICMxZDFkMWQ7XG5cbiAgICAuZmRnLW5vZGUtdG9vbHRpcCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlcmMtbGFiZWwtY29sb3I7XG4gICAgICBwYWRkaW5nOiAuMTVyZW0gLjQ1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForceDirectedGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-force-directed-graph',
          templateUrl: './force-directed-graph.component.html',
          styleUrls: ['./force-directed-graph.component.scss']
        }]
      }], function () {
        return [{
          type: _services_d3_service__WEBPACK_IMPORTED_MODULE_6__["D3Service"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/charts/d3/ufo-loom-graph/ufo-loom-graph.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/charts/d3/ufo-loom-graph/ufo-loom-graph.component.ts ***!
    \****************************************************************************/

  /*! exports provided: UfoLoomGraphComponent */

  /***/
  function srcAppPagesChartsD3UfoLoomGraphUfoLoomGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UfoLoomGraphComponent", function () {
      return UfoLoomGraphComponent;
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


    var _loom_package_loom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../loom-package/loom.js */
    "./src/app/loom-package/loom.js");
    /* harmony import */


    var _loom_package_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../loom-package/string.js */
    "./src/app/loom-package/string.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "focus": a0
      };
    };

    var UfoLoomGraphComponent = /*#__PURE__*/function () {
      function UfoLoomGraphComponent() {
        _classCallCheck(this, UfoLoomGraphComponent);

        this.data = {};
        this.states = [];
        this.abbrToState = {
          'AL': 'Alabama',
          'AK': 'Alaska',
          'AZ': 'Arizona',
          'AR': 'Arkansas',
          'CA': 'California',
          'CO': 'Colorado',
          'CT': 'Connecticut',
          'DE': 'Delaware',
          'FL': 'Florida',
          'GA': 'Georgia',
          'HI': 'Hawaii',
          'ID': 'Idaho',
          'IL': 'Illinois',
          'IN': 'Indiana',
          'IA': 'Iowa',
          'KS': 'Kansas',
          'KY': 'Kentucky',
          'LA': 'Louisiana',
          'ME': 'Maine',
          'MD': 'Maryland',
          'MA': 'Massachusetts',
          'MI': 'Michigan',
          'MN': 'Minnesota',
          'MS': 'Mississippi',
          'MO': 'Missouri',
          'MT': 'Montana',
          'NE': 'Nebraska',
          'NV': 'Nevada',
          'NH': 'New Hampshire',
          'NJ': 'New Jersey',
          'NM': 'New Mexico',
          'NY': 'New York',
          'NC': 'North Carolina',
          'ND': 'North Dakota',
          'OH': 'Ohio',
          'OK': 'Oklahoma',
          'OR': 'Oregon',
          'PA': 'Pennsylvania',
          'RI': 'Rhode Island',
          'SC': 'South Carolina',
          'SD': 'South Dakota',
          'TN': 'Tennessee',
          'TX': 'Texas',
          'UT': 'Utah',
          'VT': 'Vermont',
          'VA': 'Virginia',
          'WA': 'Washington',
          'WV': 'West Virginia',
          'WI': 'Wisconsin',
          'WY': 'Wyoming'
        };
      }

      _createClass(UfoLoomGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          d3__WEBPACK_IMPORTED_MODULE_1__["csv"]("assets/ufo-data.csv").then(function (data) {
            var dataByState = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](data.map(function (d) {
              d['state'] = !!_this4.abbrToState[d['state'].toUpperCase()] ? _this4.abbrToState[d['state'].toUpperCase()] : 'Canada';
              return d;
            }), function (d) {
              return d['state'];
            });
            _this4.states = Object.keys(dataByState).sort(function (a, b) {
              return dataByState[a].length - dataByState[b].length;
            });

            _this4.states.forEach(function (s) {
              return dataByState[s] = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](dataByState[s], function (d) {
                return d['shape'];
              });
            });

            var division = Math.floor(_this4.states.length / 3);
            var formattedData = lodash__WEBPACK_IMPORTED_MODULE_4__["flatten"](_this4.states.map(function (st, i) {
              var dataByShape = dataByState[st];
              return Object.keys(dataByShape).map(function (sh) {
                return {
                  state: st,
                  shape: sh,
                  amountSightings: dataByShape[sh].length
                };
              });
            }));
            var dataBySize = {
              small: formattedData.filter(function (d) {
                return _this4.states.slice(0, division).includes(d["state"]);
              }),
              medium: formattedData.filter(function (d) {
                return _this4.states.slice(division, division * 2).includes(d["state"]);
              }),
              large: formattedData.filter(function (d) {
                return _this4.states.slice(division * 2, _this4.states.length).includes(d["state"]);
              })
            };
            _this4.data = dataBySize;

            _this4.createSVG("large", dataBySize["large"]);
          });
        }
      }, {
        key: "createSVG",
        value: function createSVG(id, data) {
          d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.ufo-graph-' + this.prevSize).remove();
          this.prevSize = id;
          var shapeByAmount = ['light', 'triangle', 'circle', 'fireball', 'unknown', 'other', 'sphere', 'disk', 'oval', 'formation', 'cigar', 'changing', 'flash', 'rectangle', 'cylinder', 'diamond', 'chevron', 'teardrop', 'egg', 'cone', 'cross', 'delta', 'round', 'crescent', 'pyramid', 'hexagon', 'changed', 'flare'];
          var colors = {};
          this.states.forEach(function (s, i) {
            var amount = data.filter(function (d) {
              return d.state === s;
            }).reduce(function (a, b) {
              return a + b['amountSightings'];
            }, 0);
            colors[s] = "rgb(".concat(Math.round(90000 / amount), ", ").concat(Math.round(s.length * 15), ", ").concat(Math.round(amount / 20), ")");
          });
          var innerRadius = 230;
          var loomGraph = Object(_loom_package_loom_js__WEBPACK_IMPORTED_MODULE_2__["loom"])().value(function (d) {
            return d.amountSightings;
          }).inner(function (d) {
            return d.shape;
          }).outer(function (d) {
            return d.state;
          }).padAngle(0.07) // distance between two outer labels
          // these 3 are defaults
          .widthInner(function (d, i) {
            return i + 20;
          }) // distance between inner labels and strings
          .heightInner(25) // distance between inner labels
          .emptyPerc(.5).sortSubgroups(function (a, b) {
            return shapeByAmount.indexOf(a) - shapeByAmount.indexOf(b);
          }).sortLooms(d3__WEBPACK_IMPORTED_MODULE_1__["descending"]);
          var pullOutSize = 150;
          var loomString = Object(_loom_package_string_js__WEBPACK_IMPORTED_MODULE_3__["string"])().radius(innerRadius) // default values
          .pullout(pullOutSize).thicknessInner(0.1);
          var arc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(innerRadius * 1.1).outerRadius(240);
          var width = 1000;
          var height = 650;
          var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.ufo-graph').append('svg').attr("class", "ufo-graph-" + id).attr("width", width).attr("height", height);
          var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")").datum(loomGraph(data));
          var arcGroup = g.append("g").attr("class", "arc-outer-wrapper");
          var arcs = arcGroup.selectAll('.arc-wrapper').data(function (d) {
            return d.groups;
          }).enter().append("g").attr("class", "arc-wrapper").each(function (d) {
            return d['pullOutSize'] = pullOutSize * (d["startAngle"] > Math.PI + 1e-2 ? -1 : 1);
          });
          arcs.append("path").attr("class", "arc").style("fill", function (d) {
            return colors[d["outername"]];
          }).attr("d", arc).attr("transform", function (d, i) {
            return "translate(" + d["pullOutSize"] + ',' + 0 + ")";
          });
          var outerLabels = arcs.append("g").each(function (d) {
            return d["angle"] = (d["startAngle"] + d["endAngle"]) / 2;
          }).attr("class", "outer-labels").attr("text-anchor", function (d) {
            return d["angle"] > Math.PI ? "end" : null;
          }).attr("transform", function (d, i) {
            var c = arc.centroid(d);
            return "translate(" + (c[0] + d["pullOutSize"]) + "," + c[1] + ")" + "rotate(" + (d["angle"] * 180 / Math.PI - 90) + ")" + "translate(" + 26 + ",0)" + (d["angle"] > Math.PI ? "rotate(180)" : "");
          });
          outerLabels.append("text").attr("class", "outer-label").attr("dy", ".35em").style("fill", function (d) {
            var brighterColor = d3__WEBPACK_IMPORTED_MODULE_1__["color"](colors[d["outername"]]).brighter(1.2);
            return "rgb(".concat(brighterColor['r'], ", ").concat(brighterColor['g'], ", ").concat(brighterColor['b'], ")");
          }).style("font-family", "Do Hyeon").text(function (d) {
            return d["outername"];
          }).on("mouseover.highlight", highlight("outer")).on('mouseout', hightlightOff(.85));
          outerLabels.append("text").attr("class", "outer-label-value").attr("dy", "1.5em").style("fill", "#ffffff").text(function (d) {
            return d["value"];
          });
          var stringGroup = g.append("g").attr("class", "string-wrapper");
          var strings = stringGroup.selectAll("path").data(function (strings) {
            return strings;
          }).enter().append("path").attr("class", "string").style("fill", function (d) {
            return colors[d["outer"]["outername"]];
          }).style("opacity", 0.85).attr("d", loomString);
          var innerLabelGroup = g.append("g").attr("class", "inner-label-wrapper"); //Place the inner text labels in the middle

          innerLabelGroup.selectAll("text").data(function (s) {
            return s.innergroups;
          }).enter().append("text").attr("class", "inner-label").attr("x", function (d) {
            return d["x"];
          }).attr("y", function (d) {
            return d["y"];
          }).attr("dy", ".35em").attr("text-anchor", 'middle').style("fill", "#ffffff").style("font-family", "Do Hyeon").text(function (d) {
            return d["name"];
          }).on('mouseout', hightlightOff()).on('mouseover.highlight', highlight("inner"));

          function highlight(labelType) {
            return function (label) {
              strings.style("opacity", function (s) {
                var name = (labelType === "inner" ? "" : labelType) + "name";
                return s[labelType][name] === label[name] ? 1 : 0;
              }).style("stroke", function (d) {
                return colors[d["outer"]["outername"]];
              }).style("stroke-width", '.02em');
            };
          }

          function hightlightOff() {
            var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            return function (d) {
              strings.style("opacity", opacity).style("stroke", 'none').style("stroke-width", 0);
            };
          }
        }
      }]);

      return UfoLoomGraphComponent;
    }();

    UfoLoomGraphComponent.ɵfac = function UfoLoomGraphComponent_Factory(t) {
      return new (t || UfoLoomGraphComponent)();
    };

    UfoLoomGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UfoLoomGraphComponent,
      selectors: [["app-ufo-loom"]],
      decls: 10,
      vars: 9,
      consts: [[1, "chart-header"], [1, "size-btns"], [3, "ngClass", "click"], [1, "ufo-graph"]],
      template: function UfoLoomGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UFO sightings in de United States and Canada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UfoLoomGraphComponent_Template_button_click_3_listener() {
            return ctx.createSVG("large", ctx.data["large"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Most sightings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UfoLoomGraphComponent_Template_button_click_5_listener() {
            return ctx.createSVG("medium", ctx.data["medium"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Medium sightings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UfoLoomGraphComponent_Template_button_click_7_listener() {
            return ctx.createSVG("small", ctx.data["small"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Least sightings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.prevSize !== "large"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.prevSize !== "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.prevSize !== "small"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: ["@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.size-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  -webkit-animation: fadeIn 3s;\n          animation: fadeIn 3s;\n}\n\n.size-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  color: white;\n  padding: .75rem 1rem;\n  border-radius: 10px;\n  font-family: 'Reenie Beanie', cursive;\n  font-size: 1.3rem;\n}\n\n.size-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  box-shadow: 2px 2px 2px 2px #194AAA, -2px -2px 2px 2px #194AAA;\n  background-color: #194AAA;\n}\n\n.size-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover {\n  box-shadow: 2px 2px 2px 2px #205dd6, -2px -2px 2px 2px #205dd6;\n  background-color: #205dd6;\n}\n\n.size-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  box-shadow: 2px 2px 2px 2px #48693e, -2px -2px 2px 2px #48693e;\n  background-color: #48693e;\n}\n\n.size-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover {\n  box-shadow: 2px 2px 2px 2px #5e8951, -2px -2px 2px 2px #5e8951;\n  background-color: #5e8951;\n}\n\n.size-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  box-shadow: 2px 2px 2px 2px #b14b18, -2px -2px 2px 2px #b14b18;\n  background-color: #b14b18;\n}\n\n.size-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover {\n  box-shadow: 2px 2px 2px 2px #de5e1e, -2px -2px 2px 2px #de5e1e;\n  background-color: #de5e1e;\n}\n\n.size-btns[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 2px 2px #363131, -2px -2px 2px 2px #363131;\n  background-color: #363131;\n}\n\n.ufo-graph[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .ufo-graph-small,   .ufo-graph-medium,   .ufo-graph-large {\n  -webkit-animation: fadeIn 2s;\n          animation: fadeIn 2s;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2QzL3Vmby1sb29tLWdyYXBoL3Vmby1sb29tLWdyYXBoLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3BhZ2VzL2NoYXJ0cy9kMy91Zm8tbG9vbS1ncmFwaC91Zm8tbG9vbS1ncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQU8sVUFBVztFQ0VsQjtFRERBO0lBQUssVUFBVztFQ0loQjtBQUNGOztBRFBBO0VBQ0U7SUFBTyxVQUFXO0VDRWxCO0VEREE7SUFBSyxVQUFXO0VDSWhCO0FBQ0Y7O0FDSUE7RUFDRSxtQkFBbUI7QUREckI7O0FDSUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDRCQUFvQjtVQUFwQixvQkFBb0I7QUREdEI7O0FDRkE7RUFNSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGlCQUFpQjtBREFyQjs7QUNYQTtFQVBFLDhEQUxTO0VBNEJILHlCQTVCRztBRDRCWDs7QUNoQkE7RUFQRSw4REEwQjJDO0VBQ25DLHlCQUFxQztBREMvQzs7QUNyQkE7RUFQRSw4REFKUztFQTJCSCx5QkEzQkc7QURxQ1g7O0FDMUJBO0VBUEUsOERBMEIyQztFQUNuQyx5QkFBcUM7QURXL0M7O0FDL0JBO0VBUEUsOERBSFM7RUEwQkgseUJBMUJHO0FEOENYOztBQ3BDQTtFQVBFLDhEQTBCMkM7RUFDbkMseUJBQXFDO0FEcUIvQzs7QUN6Q0E7RUFQRSw4REFpQzJCO0VBQ3ZCLHlCQUF5QjtBRG1CL0I7O0FDZEE7RUFDRSxXQUFXO0FEaUJiOztBQ2ZFO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsY0FBYztBRGtCbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFydHMvZDMvdWZvLWxvb20tZ3JhcGgvdWZvLWxvb20tZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwIH1cbiAgdG8geyBvcGFjaXR5OiAxIH1cbn1cbiIsIkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5zaXplLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gM3M7XG59XG5cbi5zaXplLWJ0bnMgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uc2l6ZS1idG5zIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzE5NEFBQSwgLTJweCAtMnB4IDJweCAycHggIzE5NEFBQTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NEFBQTtcbn1cblxuLnNpemUtYnRucyBidXR0b246bnRoLWNoaWxkKDEpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICMyMDVkZDYsIC0ycHggLTJweCAycHggMnB4ICMyMDVkZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDVkZDY7XG59XG5cbi5zaXplLWJ0bnMgYnV0dG9uOm50aC1jaGlsZCgyKSB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjNDg2OTNlLCAtMnB4IC0ycHggMnB4IDJweCAjNDg2OTNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg2OTNlO1xufVxuXG4uc2l6ZS1idG5zIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzVlODk1MSwgLTJweCAtMnB4IDJweCAycHggIzVlODk1MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlODk1MTtcbn1cblxuLnNpemUtYnRucyBidXR0b246bnRoLWNoaWxkKDMpIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNiMTRiMTgsIC0ycHggLTJweCAycHggMnB4ICNiMTRiMTg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMTRiMTg7XG59XG5cbi5zaXplLWJ0bnMgYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjZGU1ZTFlLCAtMnB4IC0ycHggMnB4IDJweCAjZGU1ZTFlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU1ZTFlO1xufVxuXG4uc2l6ZS1idG5zIGJ1dHRvbi5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjMzYzMTMxLCAtMnB4IC0ycHggMnB4IDJweCAjMzYzMTMxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzMTMxO1xufVxuXG4udWZvLWdyYXBoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAudWZvLWdyYXBoLXNtYWxsLCA6Om5nLWRlZXAgLnVmby1ncmFwaC1tZWRpdW0sIDo6bmctZGVlcCAudWZvLWdyYXBoLWxhcmdlIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiIsIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9hbmltYXRpb25zXCI7XG5cbiRidG4tY29sb3JzOlxuICAxICMxOTRBQUEsXG4gIDIgIzQ4NjkzZSxcbiAgMyAjYjE0YjE4O1xuXG5AbWl4aW4gc2hhZG93KCRjb2xvcikge1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggJGNvbG9yLCAtMnB4IC0ycHggMnB4IDJweCAkY29sb3I7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnNpemUtYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbmltYXRpb246IGZhZGVJbiAzcztcblxuICBidXR0b24ge1xuICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICBAZWFjaCAkaSwgJGNvbG9yIGluICRidG4tY29sb3JzIHtcbiAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdygkY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgQGluY2x1ZGUgc2hhZG93KGxpZ2h0ZW4oJGNvbG9yLCAxMCkpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLCAxMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmZvY3VzIHtcbiAgICAgIEBpbmNsdWRlIHNoYWRvdygjMzYzMTMxKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjMxMzE7XG4gICAgfVxuICB9XG59XG5cbi51Zm8tZ3JhcGgge1xuICB3aWR0aDogMTAwJTtcblxuICA6Om5nLWRlZXAgJi1zbWFsbCwgOjpuZy1kZWVwICYtbWVkaXVtLCA6Om5nLWRlZXAgJi1sYXJnZSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UfoLoomGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ufo-loom',
          templateUrl: './ufo-loom-graph.component.svg',
          styleUrls: ['./ufo-loom-graph.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/charts/default/default-charts.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/charts/default/default-charts.component.ts ***!
    \******************************************************************/

  /*! exports provided: DefaultChartsComponent */

  /***/
  function srcAppPagesChartsDefaultDefaultChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/charts/bar-chart/bar-chart.component.ts");
    /* harmony import */


    var _radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../radar-chart/radar-chart.component */
    "./src/app/pages/charts/radar-chart/radar-chart.component.ts");
    /* harmony import */


    var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pie-chart/pie-chart.component */
    "./src/app/pages/charts/pie-chart/pie-chart.component.ts");

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
      styles: [".chart[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: \"black\";\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #efdab3;\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #090047;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9jaGFydHMvZGVmYXVsdC9kZWZhdWx0LWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2RlZmF1bHQvZGVmYXVsdC1jaGFydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZXJsZW1vcmdhaW5lL0RvY3VtZW50cy9Db2RlUHJhY3RpY2UvZXJsZXMtY29ybmVyL3NyYy9hcHAvc3R5bGVzL19nbG9iYWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSx5QkFOTztBQ0RYOztBRE1FO0VBQ0UseUJFTWtCO0FEVHRCOztBREVFO0VBQ0UseUJFTmlCO0FET3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcnRzL2RlZmF1bHQvZGVmYXVsdC1jaGFydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvZ2xvYmFsc1wiO1xuXG4kY2hhcnRDb2xvcnM6XG4gIDEgJ2JsYWNrJyxcbiAgMiAkaG9tZS01LWxpZ2h0LFxuICAzICRob21lLTItZGFyaztcblxuQGVhY2ggJGksICRiZ0NvbG9yIGluICRjaGFydENvbG9ycyB7XG4gIC5jaGFydDpudGgtY2hpbGQoI3skaX0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcbiAgfVxufVxuIiwiLmNoYXJ0Om50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFwiYmxhY2tcIjtcbn1cblxuLmNoYXJ0Om50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmRhYjM7XG59XG5cbi5jaGFydDpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwMDQ3O1xufVxuIiwiJGhvbWUtMS1kYXJrOiAjMGEyZDBjO1xuJGhvbWUtMTogIzFlN2YyNDtcbiRob21lLTEtbGlnaHQ6ICM5ZWQ1OWY7XG4kaG9tZS0yLWRhcms6ICMwOTAwNDc7XG4kaG9tZS0yOiAjMjYwMGZmO1xuJGhvbWUtMi1saWdodDogI2I3Y2JmZjtcbiRob21lLTMtZGFyazogIzIyMDA0ODtcbiRob21lLTM6ICM3MDAwZmY7XG4kaG9tZS0zLWxpZ2h0OiAjZjJkNGZmO1xuJGhvbWUtNC1kYXJrOiAjNTgwNjFkO1xuJGhvbWUtNDogI2VmMTU0YjtcbiRob21lLTQtbGlnaHQ6ICNlZmJjYmE7XG4kaG9tZS01LWRhcms6ICMzNzE1MDc7XG4kaG9tZS01LXNlbWktZGFyazogIzkwM2IxMjtcbiRob21lLTU6ICNlZjY1MWU7XG4kaG9tZS01LWxpZ2h0OiAjZWZkYWIzO1xuJGhvbWUtNi1kYXJrOiAjNDY0MjBhO1xuJGhvbWUtNjogI2ZmYzAwMDtcbiRob21lLTYtbGlnaHQ6ICNmOWZmZDc7XG5cbiRsaWdodC1ncmV5OiAjYWNhY2FjO1xuIl19 */"]
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
  "./src/app/pages/charts/lego/colors-per-theme/colors-theme.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/charts/lego/colors-per-theme/colors-theme.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ColorsThemeComponent */

  /***/
  function srcAppPagesChartsLegoColorsPerThemeColorsThemeComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/charts/chart-data.ts");
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
    "./src/app/pages/charts/lego/lego-chart.component.ts");
    /* harmony import */


    var _services_color_blind_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/color-blind.service */
    "./src/app/services/color-blind.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var _c0 = function _c0(a0) {
      return {
        "focus": a0
      };
    };

    function ColorsThemeComponent_div_0_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsThemeComponent_div_0_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var theme_r25 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.setTheme(theme_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var theme_r25 = ctx.$implicit;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, theme_r25 === ctx_r22.currentTheme));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", theme_r25, " ");
      }
    }

    function ColorsThemeComponent_div_0_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsThemeComponent_div_0_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var decade_r28 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.setOtherDecade(decade_r28);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var decade_r28 = ctx.$implicit;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, decade_r28 === ctx_r23.currentDecade));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](decade_r28);
      }
    }

    function ColorsThemeComponent_div_0_h2_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Theme: " + ctx_r24.currentTheme);
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
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.themes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.decades);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.typingAnimation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r21.barChartData)("labels", ctx_r21.barChartLabels)("options", ctx_r21.barChartOptions)("legend", true)("chartType", "pie");
      }
    }

    var ColorsThemeComponent = /*#__PURE__*/function (_lego_chart_component) {
      _inherits(ColorsThemeComponent, _lego_chart_component);

      var _super = _createSuper(ColorsThemeComponent);

      function ColorsThemeComponent(colorBlindService) {
        var _this5;

        _classCallCheck(this, ColorsThemeComponent);

        _this5 = _super.call(this);
        _this5.colorBlindService = colorBlindService;
        _this5.currentTheme = 'Pirates';
        _this5.currentDecade = '1990s';
        _this5.typingAnimation = true;
        _this5.barChartOptions = Object.assign({
          responsive: true,
          animation: {
            duration: 2000
          }
        }, Object(_chart_data__WEBPACK_IMPORTED_MODULE_1__["chartFontColor"])('', false, 'left'));
        return _this5;
      }

      _createClass(ColorsThemeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          d3__WEBPACK_IMPORTED_MODULE_2__["csv"]('assets/reduced_color_data.csv').then(function (data) {
            // Group data by parent theme, group data from each parent theme by decade
            var dataByTheme = _this6.setInitialDataByTheme(data);

            var themes = Object.keys(dataByTheme);
            _this6.themes = themes;
            themes.forEach(function (k) {
              return dataByTheme[k] = lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"](dataByTheme[k], function (d) {
                return d['decade'];
              });
            });
            _this6.data = dataByTheme;

            _this6.colorBlindService.colorBlindModeOn$.subscribe(function (res) {
              var dataOfTheme = _this6.sortTheme(dataByTheme[_this6.currentTheme]);

              _this6.dataOfTheme = dataOfTheme;
              _this6.decades = _this6.setDecades(Object.keys(dataOfTheme));
              _this6.barChartLabels = _this6.setLabels(dataOfTheme, _this6.currentDecade);
              _this6.colorBlindMode = res;

              _this6.setData(dataOfTheme, _this6.currentDecade, res);
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
          var _this7 = this;

          // hacky way to re-fire the typing animation
          this.typingAnimation = false;
          setTimeout(function () {
            _this7.typingAnimation = true;
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
          var _this8 = this;

          this.barChartData = [{
            data: data[decade].map(function (d) {
              return d['part_quantity'];
            }),
            backgroundColor: data[decade].map(function (d, i) {
              return _this8.setColorBlindMode('#' + d['rgb'], i, ['White', 'Trans-Clear'].includes(d['color_name']), colorBlindMode);
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
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "chart-header"], [1, "theme-buttons"], ["class", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pie-container"], [1, "decade-buttons"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "type-effect"], ["class", "chart-header", 4, "ngIf"], ["baseChart", "", "id", "colors-theme", 3, "datasets", "labels", "options", "legend", "chartType"], [1, "", 3, "ngClass", "click"], [3, "ngClass", "click"], ["src", "assets/img/lego_figure.png", "alt", ""]],
      template: function ColorsThemeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColorsThemeComponent_div_0_Template, 11, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barChartLabels.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      styles: ["@-webkit-keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@-webkit-keyframes blinkCaret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: black;\n  }\n}\n\n@keyframes blinkCaret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: black;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%]   .chart-header[_ngcontent-%COMP%] {\n  color: black;\n  margin-top: 1rem;\n}\n\n.container[_ngcontent-%COMP%]   .type-effect[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.container[_ngcontent-%COMP%]   .type-effect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-right: 3px solid transparent;\n  white-space: nowrap;\n  -webkit-animation: typing 3s steps(40, end), blinkCaret 0.4s step-end 9;\n          animation: typing 3s steps(40, end), blinkCaret 0.4s step-end 9;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 1rem 0 1.5rem 0;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: 'Raleway', sans-serif;\n  margin: 1rem .5rem 0 .5rem;\n  padding: .25rem .75rem;\n  color: white;\n  width: 7rem;\n  font-weight: bold;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #0055BF;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #0055BF 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #0055BF calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #0055BF calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #0055BF;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus {\n  background-image: linear-gradient(to left, rgba(0, 85, 191, 0.6), rgba(0, 85, 191, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #00121F;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #00121F 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #00121F calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #00121F calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #00121F;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus {\n  background-image: linear-gradient(to left, rgba(0, 18, 31, 0.6), rgba(0, 18, 31, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #C31504;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #C31504 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #C31504 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #C31504 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #C31504;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus {\n  background-image: linear-gradient(to left, rgba(195, 21, 4, 0.6), rgba(195, 21, 4, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #237841;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #237841 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #237841 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #237841 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #237841;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus {\n  background-image: linear-gradient(to left, rgba(35, 120, 65, 0.6), rgba(35, 120, 65, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #583927;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #583927 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #583927 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #583927 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #583927;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus {\n  background-image: linear-gradient(to left, rgba(88, 57, 39, 0.6), rgba(88, 57, 39, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6) {\n  background-color: #0055BF;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #0055BF 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #0055BF calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #0055BF calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #0055BF;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus {\n  background-image: linear-gradient(to left, rgba(0, 85, 191, 0.6), rgba(0, 85, 191, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7) {\n  background-color: #00121F;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #00121F 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #00121F calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #00121F calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #00121F;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus {\n  background-image: linear-gradient(to left, rgba(0, 18, 31, 0.6), rgba(0, 18, 31, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8) {\n  background-color: #C31504;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #C31504 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #C31504 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #C31504 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #C31504;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus {\n  background-image: linear-gradient(to left, rgba(195, 21, 4, 0.6), rgba(195, 21, 4, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9) {\n  background-color: #237841;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  left: 0;\n  top: -8px;\n  background-image: linear-gradient(to right, transparent 0 1rem, #237841 1rem calc(2 * 1rem), transparent calc(2 * 1rem) calc(3 * 1rem), #237841 calc(3 * 1rem) calc(4 * 1rem), transparent calc(4 * 1rem) calc(5 * 1rem), #237841 calc(5 * 1rem) calc(6 * 1rem), transparent calc(6 * 1rem) 100%);\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  left: 0;\n  bottom: -6px;\n  background-color: #237841;\n  opacity: 0;\n  transition: opacity .5s;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover, .container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus {\n  background-image: linear-gradient(to left, rgba(35, 120, 65, 0.6), rgba(35, 120, 65, 0.49)), url('lego-heads.png');\n  background-size: 30rem auto;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus:after {\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  padding: 0 2rem 1rem 2rem;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n  border-bottom: 3px solid black;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  font-family: 'Raleway', sans-serif;\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  font-weight: bold;\n  width: 100%;\n  padding-top: .5rem;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #f2cd37;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #5c8ef0;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #ff6466;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #64a573;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #9c7759;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  margin-right: .5rem;\n  z-index: 1;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 3px;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 3px;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: url('lego.png');\n  background-size: cover;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before, .container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.container[_ngcontent-%COMP%]   .pie-container[_ngcontent-%COMP%]   .decade-buttons[_ngcontent-%COMP%]   button.focus[_ngcontent-%COMP%]:after {\n  transform: translateX(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9jaGFydHMvbGVnby9jb2xvcnMtcGVyLXRoZW1lL2NvbG9ycy10aGVtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2xlZ28vY29sb3JzLXBlci10aGVtZS9jb2xvcnMtdGhlbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNBO0VBQ0U7SUFBTyxRQUFTO0VDL0JoQjtFRGdDQTtJQUFLLFdBQVk7RUM3QmpCO0FBQ0Y7O0FEMEJBO0VBQ0U7SUFBTyxRQUFTO0VDL0JoQjtFRGdDQTtJQUFLLFdBQVk7RUM3QmpCO0FBQ0Y7O0FEK0JBO0VBQ0U7SUFBVyx5QkFBMEI7RUMzQnJDO0VENEJBO0lBQU0sbUJBQW1CO0VDekJ6QjtBQUNGOztBRHNCQTtFQUNFO0lBQVcseUJBQTBCO0VDM0JyQztFRDRCQTtJQUFNLG1CQUFtQjtFQ3pCekI7QUFDRjs7QUQyQkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixjQUFjO0FDeEJoQjs7QURvQkE7RUFPSSxZQUFZO0VBQ1osZ0JBQWdCO0FDdkJwQjs7QURlQTtFQVlJLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FDdkJ0Qjs7QURXQTtFQWVNLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHVFQUUyQjtVQUYzQiwrREFFMkI7QUN4QmpDOztBRElBO0VBeUJJLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHVCQUF1QjtBQ3pCM0I7O0FESEE7RUErQk0sa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FDeEJ2Qjs7QURiQTtFQXlDVSx5QkE5RWM7QUNzRHhCOztBRGpCQTtFQThDWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxpU0FRQztBQ2pDYjs7QUQzQkE7RUFnRVksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxZQUFZO0VBQ1oseUJBM0dZO0VBNEdaLFVBQVU7RUFDVix1QkFBdUI7QUNqQ25DOztBRHZDQTtFQTRFWSxnSEFBd0g7RUFDeEgsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQ2pDdkM7O0FEN0NBO0VBbUZjLFVBQVU7QUNsQ3hCOztBRGpEQTtFQXlDVSx5QkF2RVU7QUNtRnBCOztBRHJEQTtFQThDWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxpU0FRQztBQ0diOztBRC9EQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkFwR1E7RUFxR1IsVUFBVTtFQUNWLHVCQUF1QjtBQ0duQzs7QUQzRUE7RUE0RVksOEdBQXdIO0VBQ3hILDJCQUEyQjtFQUMzQiwyQkFBMkI7QUNHdkM7O0FEakZBO0VBbUZjLFVBQVU7QUNFeEI7O0FEckZBO0VBeUNVLHlCQTVFYTtBQzRIdkI7O0FEekZBO0VBOENZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlTQVFDO0FDdUNiOztBRG5HQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkF6R1c7RUEwR1gsVUFBVTtFQUNWLHVCQUF1QjtBQ3VDbkM7O0FEL0dBO0VBNEVZLGdIQUF3SDtFQUN4SCwyQkFBMkI7RUFDM0IsMkJBQTJCO0FDdUN2Qzs7QURySEE7RUFtRmMsVUFBVTtBQ3NDeEI7O0FEekhBO0VBeUNVLHlCQTFFZTtBQzhKekI7O0FEN0hBO0VBOENZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlTQVFDO0FDMkViOztBRHZJQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkF2R2E7RUF3R2IsVUFBVTtFQUNWLHVCQUF1QjtBQzJFbkM7O0FEbkpBO0VBNEVZLGtIQUF3SDtFQUN4SCwyQkFBMkI7RUFDM0IsMkJBQTJCO0FDMkV2Qzs7QUR6SkE7RUFtRmMsVUFBVTtBQzBFeEI7O0FEN0pBO0VBeUNVLHlCQXhFZTtBQ2dNekI7O0FEaktBO0VBOENZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlTQVFDO0FDK0diOztBRDNLQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkFyR2E7RUFzR2IsVUFBVTtFQUNWLHVCQUF1QjtBQytHbkM7O0FEdkxBO0VBNEVZLGdIQUF3SDtFQUN4SCwyQkFBMkI7RUFDM0IsMkJBQTJCO0FDK0d2Qzs7QUQ3TEE7RUFtRmMsVUFBVTtBQzhHeEI7O0FEak1BO0VBeUNVLHlCQTlFYztBQzBPeEI7O0FEck1BO0VBOENZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlTQVFDO0FDbUpiOztBRC9NQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkEzR1k7RUE0R1osVUFBVTtFQUNWLHVCQUF1QjtBQ21KbkM7O0FEM05BO0VBNEVZLGdIQUF3SDtFQUN4SCwyQkFBMkI7RUFDM0IsMkJBQTJCO0FDbUp2Qzs7QURqT0E7RUFtRmMsVUFBVTtBQ2tKeEI7O0FEck9BO0VBeUNVLHlCQXZFVTtBQ3VRcEI7O0FEek9BO0VBOENZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlTQVFDO0FDdUxiOztBRG5QQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkFwR1E7RUFxR1IsVUFBVTtFQUNWLHVCQUF1QjtBQ3VMbkM7O0FEL1BBO0VBNEVZLDhHQUF3SDtFQUN4SCwyQkFBMkI7RUFDM0IsMkJBQTJCO0FDdUx2Qzs7QURyUUE7RUFtRmMsVUFBVTtBQ3NMeEI7O0FEelFBO0VBeUNVLHlCQTVFYTtBQ2dUdkI7O0FEN1FBO0VBOENZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlTQVFDO0FDMk5iOztBRHZSQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkF6R1c7RUEwR1gsVUFBVTtFQUNWLHVCQUF1QjtBQzJObkM7O0FEblNBO0VBNEVZLGdIQUF3SDtFQUN4SCwyQkFBMkI7RUFDM0IsMkJBQTJCO0FDMk52Qzs7QUR6U0E7RUFtRmMsVUFBVTtBQzBOeEI7O0FEN1NBO0VBeUNVLHlCQTFFZTtBQ2tWekI7O0FEalRBO0VBOENZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlTQVFDO0FDK1BiOztBRDNUQTtFQWdFWSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7RUFDWix5QkF2R2E7RUF3R2IsVUFBVTtFQUNWLHVCQUF1QjtBQytQbkM7O0FEdlVBO0VBNEVZLGtIQUF3SDtFQUN4SCwyQkFBMkI7RUFDM0IsMkJBQTJCO0FDK1B2Qzs7QUQ3VUE7RUFtRmMsVUFBVTtBQzhQeEI7O0FEalZBO0VBNEZJLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIseUJBQXlCO0FDeVA3Qjs7QUR2VkE7RUFpR00sYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsOEJBQThCO0FDMFBwQzs7QUQ5VkE7RUF1R1Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQzJQMUI7O0FENVdBO0VBcUhZLHlCQTdKUztBQ3dackI7O0FEaFhBO0VBcUhZLHlCQTNKTztBQzBabkI7O0FEcFhBO0VBcUhZLHlCQXpKTTtBQzRabEI7O0FEeFhBO0VBcUhZLHlCQXZKUTtBQzhacEI7O0FENVhBO0VBcUhZLHlCQXJKUTtBQ2dhcEI7O0FEaFlBO0VBMEhVLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsVUFBVTtBQzBRcEI7O0FEdFlBO0VBZ0lVLFVBQVU7QUMwUXBCOztBRDFZQTtFQW9JVSwyQkFBMkI7QUMwUXJDOztBRDlZQTtFQXdJVSw0QkFBNEI7QUMwUXRDOztBRGxaQTtFQTRJVSw2QkFBNkI7RUFDN0IsaUNBQWdEO0VBQ2hELHNCQUFzQjtBQzBRaEM7O0FEeFpBO0VBaUpZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUFFLE9BQU87RUFDZixXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLFlBQVk7QUM0UXhCOztBRGxhQTtFQTJKVSxpQkFBaUI7QUMyUTNCOztBRHRhQTtFQThKWSx3QkFBd0I7QUM0UXBDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcnRzL2xlZ28vY29sb3JzLXBlci10aGVtZS9jb2xvcnMtdGhlbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvZ2xvYmFsc1wiO1xuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL21peGluc1wiO1xuXG4kbGVnby15ZWxsb3c6ICNmMmNkMzc7XG4kbGVnby15ZWxsb3ctZGFyazogI2YyY2QzNztcbiRsZWdvLWJsdWU6ICM1YzhlZjA7XG4kbGVnby1ibHVlLWRhcms6ICMwMDU1QkY7XG4kbGVnby1yZWQ6ICNmZjY0NjY7XG4kbGVnby1yZWQtZGFyazogI0MzMTUwNDtcbiRsZWdvLWdyZWVuOiAjNjRhNTczO1xuJGxlZ28tZ3JlZW4tZGFyazogIzIzNzg0MTtcbiRsZWdvLWJyb3duOiAjOWM3NzU5O1xuJGxlZ28tYnJvd24tZGFyazogIzU4MzkyNztcbiRsZWdvLWJsYWNrOiAjMDAxMjFGO1xuXG4kbGVnby1jb2xvcnM6XG4gIDEgJGxlZ28teWVsbG93LFxuICAyICRsZWdvLWJsdWUsXG4gIDMgJGxlZ28tcmVkLFxuICA0ICRsZWdvLWdyZWVuLFxuICA1ICRsZWdvLWJyb3duO1xuXG4kbGVnby1jb2xvcnMtZGFyazpcbiAgMSAkbGVnby1ibHVlLWRhcmssXG4gIDIgJGxlZ28tYmxhY2ssXG4gIDMgJGxlZ28tcmVkLWRhcmssXG4gIDQgJGxlZ28tZ3JlZW4tZGFyayxcbiAgNSAkbGVnby1icm93bi1kYXJrLFxuICA2ICRsZWdvLWJsdWUtZGFyayxcbiAgNyAkbGVnby1ibGFjayxcbiAgOCAkbGVnby1yZWQtZGFyayxcbiAgOSAkbGVnby1ncmVlbi1kYXJrO1xuXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XG4gIGZyb20geyB3aWR0aDogMCB9XG4gIHRvIHsgd2lkdGg6IDEwMCUgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rQ2FyZXQge1xuICBmcm9tLCB0byB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxuICA1MCUgeyBib3JkZXItY29sb3I6IGJsYWNrOyB9XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcblxuICAuY2hhcnQtaGVhZGVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuXG4gIC50eXBlLWVmZmVjdCB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgaDIge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgdHlwaW5nIDNzIHN0ZXBzKDQwLCBlbmQpLFxuICAgICAgICBibGlua0NhcmV0IC40cyBzdGVwLWVuZCA5O1xuICAgIH1cbiAgfVxuXG4gIC50aGVtZS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW0gMDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgICAgbWFyZ2luOiAxcmVtIC41cmVtIDAgLjVyZW07XG4gICAgICBwYWRkaW5nOiAuMjVyZW0gLjc1cmVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDdyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgQGVhY2ggJGksICRjb2xvciBpbiAkbGVnby1jb2xvcnMtZGFyayB7XG4gICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgJGxlZ28td2lkdGg6IDFyZW07XG5cbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDAgJGxlZ28td2lkdGgsXG4gICAgICAgICAgICAgICRjb2xvciAkbGVnby13aWR0aCBjYWxjKDIgKiAjeyRsZWdvLXdpZHRofSksXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IGNhbGMoMiAqICN7JGxlZ28td2lkdGh9KSBjYWxjKDMgKiAjeyRsZWdvLXdpZHRofSksXG4gICAgICAgICAgICAgICRjb2xvciBjYWxjKDMgKiAjeyRsZWdvLXdpZHRofSkgY2FsYyg0ICogI3skbGVnby13aWR0aH0pLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCBjYWxjKDQgKiAjeyRsZWdvLXdpZHRofSkgY2FsYyg1ICogI3skbGVnby13aWR0aH0pLFxuICAgICAgICAgICAgICAkY29sb3IgY2FsYyg1ICogI3skbGVnby13aWR0aH0pIGNhbGMoNiAqICN7JGxlZ28td2lkdGh9KSxcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgY2FsYyg2ICogI3skbGVnby13aWR0aH0pIDEwMCVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6aG92ZXIsICYuZm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoJGNvbG9yLCAwLjYpLCByZ2JhKCRjb2xvciwgMC40OSkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5mb2N1cyB7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGllLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbSAycmVtO1xuXG4gICAgLmRlY2FkZS1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcblxuICAgICAgICBAZWFjaCAkaSwgJGNvbG9yIGluICRsZWdvLWNvbG9ycyB7XG4gICAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyLCAmLmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9sZWdvLnBuZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7IGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmZvY3VzIHtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG4iLCJAa2V5ZnJhbWVzIHR5cGluZyB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rQ2FyZXQge1xuICBmcm9tLCB0byB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGFpbmVyIC5jaGFydC1oZWFkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb250YWluZXIgLnR5cGUtZWZmZWN0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uY29udGFpbmVyIC50eXBlLWVmZmVjdCBoMiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBhbmltYXRpb246IHR5cGluZyAzcyBzdGVwcyg0MCwgZW5kKSwgYmxpbmtDYXJldCAwLjRzIHN0ZXAtZW5kIDk7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW46IDFyZW0gMCAxLjVyZW0gMDtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMXJlbSAuNXJlbSAwIC41cmVtO1xuICBwYWRkaW5nOiAuMjVyZW0gLjc1cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA3cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTVCRjtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDEpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgIzAwNTVCRiAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgIzAwNTVCRiBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICMwMDU1QkYgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTVCRjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciwgLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDEpLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgODUsIDE5MSwgMC42KSwgcmdiYSgwLCA4NSwgMTkxLCAwLjQ5KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy9sZWdvLWhlYWRzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKS5mb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMUY7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwIDFyZW0sICMwMDEyMUYgMXJlbSBjYWxjKDIgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYygyICogMXJlbSkgY2FsYygzICogMXJlbSksICMwMDEyMUYgY2FsYygzICogMXJlbSkgY2FsYyg0ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNCAqIDFyZW0pIGNhbGMoNSAqIDFyZW0pLCAjMDAxMjFGIGNhbGMoNSAqIDFyZW0pIGNhbGMoNiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDYgKiAxcmVtKSAxMDAlKTtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMUY7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIsIC5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKS5mb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDE4LCAzMSwgMC42KSwgcmdiYSgwLCAxOCwgMzEsIDAuNDkpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpLmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MzMTUwNDtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgI0MzMTUwNCAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgI0MzMTUwNCBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICNDMzE1MDQgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MzMTUwNDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKTpob3ZlciwgLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk1LCAyMSwgNCwgMC42KSwgcmdiYSgxOTUsIDIxLCA0LCAwLjQ5KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy9sZWdvLWhlYWRzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKS5mb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzc4NDE7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwIDFyZW0sICMyMzc4NDEgMXJlbSBjYWxjKDIgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYygyICogMXJlbSkgY2FsYygzICogMXJlbSksICMyMzc4NDEgY2FsYygzICogMXJlbSkgY2FsYyg0ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNCAqIDFyZW0pIGNhbGMoNSAqIDFyZW0pLCAjMjM3ODQxIGNhbGMoNSAqIDFyZW0pIGNhbGMoNiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDYgKiAxcmVtKSAxMDAlKTtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzc4NDE7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCk6aG92ZXIsIC5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KS5mb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDM1LCAxMjAsIDY1LCAwLjYpLCByZ2JhKDM1LCAxMjAsIDY1LCAwLjQ5KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy9sZWdvLWhlYWRzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KS5mb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODM5Mjc7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwIDFyZW0sICM1ODM5MjcgMXJlbSBjYWxjKDIgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYygyICogMXJlbSkgY2FsYygzICogMXJlbSksICM1ODM5MjcgY2FsYygzICogMXJlbSkgY2FsYyg0ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNCAqIDFyZW0pIGNhbGMoNSAqIDFyZW0pLCAjNTgzOTI3IGNhbGMoNSAqIDFyZW0pIGNhbGMoNiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDYgKiAxcmVtKSAxMDAlKTtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODM5Mjc7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIsIC5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KS5mb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDg4LCA1NywgMzksIDAuNiksIHJnYmEoODgsIDU3LCAzOSwgMC40OSkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzByZW0gYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSkuZm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NUJGO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNik6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNnB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IC04cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCAxcmVtLCAjMDA1NUJGIDFyZW0gY2FsYygyICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoMiAqIDFyZW0pIGNhbGMoMyAqIDFyZW0pLCAjMDA1NUJGIGNhbGMoMyAqIDFyZW0pIGNhbGMoNCAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDQgKiAxcmVtKSBjYWxjKDUgKiAxcmVtKSwgIzAwNTVCRiBjYWxjKDUgKiAxcmVtKSBjYWxjKDYgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg2ICogMXJlbSkgMTAwJSk7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg2KTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NUJGO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmhvdmVyLCAuY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNikuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCA4NSwgMTkxLCAwLjYpLCByZ2JhKDAsIDg1LCAxOTEsIDAuNDkpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpLmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDcpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTIxRjtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDcpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgIzAwMTIxRiAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgIzAwMTIxRiBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICMwMDEyMUYgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTIxRjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3ZlciwgLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDcpLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMTgsIDMxLCAwLjYpLCByZ2JhKDAsIDE4LCAzMSwgMC40OSkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzByZW0gYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNykuZm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzMxNTA0O1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCk6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNnB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IC04cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCAxcmVtLCAjQzMxNTA0IDFyZW0gY2FsYygyICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoMiAqIDFyZW0pIGNhbGMoMyAqIDFyZW0pLCAjQzMxNTA0IGNhbGMoMyAqIDFyZW0pIGNhbGMoNCAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDQgKiAxcmVtKSBjYWxjKDUgKiAxcmVtKSwgI0MzMTUwNCBjYWxjKDUgKiAxcmVtKSBjYWxjKDYgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg2ICogMXJlbSkgMTAwJSk7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzMxNTA0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpOmhvdmVyLCAuY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOCkuZm9jdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxOTUsIDIxLCA0LCAwLjYpLCByZ2JhKDE5NSwgMjEsIDQsIDAuNDkpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpLmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNzg0MTtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAgMXJlbSwgIzIzNzg0MSAxcmVtIGNhbGMoMiAqIDFyZW0pLCB0cmFuc3BhcmVudCBjYWxjKDIgKiAxcmVtKSBjYWxjKDMgKiAxcmVtKSwgIzIzNzg0MSBjYWxjKDMgKiAxcmVtKSBjYWxjKDQgKiAxcmVtKSwgdHJhbnNwYXJlbnQgY2FsYyg0ICogMXJlbSkgY2FsYyg1ICogMXJlbSksICMyMzc4NDEgY2FsYyg1ICogMXJlbSkgY2FsYyg2ICogMXJlbSksIHRyYW5zcGFyZW50IGNhbGMoNiAqIDFyZW0pIDEwMCUpO1xufVxuXG4uY29udGFpbmVyIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNzg0MTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG59XG5cbi5jb250YWluZXIgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg5KTpob3ZlciwgLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMzUsIDEyMCwgNjUsIDAuNiksIHJnYmEoMzUsIDEyMCwgNjUsIDAuNDkpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcmVtIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpLmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDJyZW0gMXJlbSAycmVtO1xufVxuXG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAuNXJlbTtcbn1cblxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmNkMzc7XG59XG5cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM4ZWYwO1xufVxuXG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2Njtcbn1cblxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGE1NzM7XG59XG5cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWM3NzU5O1xufVxuXG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24gaW1nIHtcbiAgd2lkdGg6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogLjVyZW07XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbiBzcGFuIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xufVxuXG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG59XG5cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbjpob3ZlciwgLmNvbnRhaW5lciAucGllLWNvbnRhaW5lciAuZGVjYWRlLWJ1dHRvbnMgYnV0dG9uLmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2xlZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b246aG92ZXI6YmVmb3JlLCAuY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24uZm9jdXM6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIgLnBpZS1jb250YWluZXIgLmRlY2FkZS1idXR0b25zIGJ1dHRvbi5mb2N1cyB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uY29udGFpbmVyIC5waWUtY29udGFpbmVyIC5kZWNhZGUtYnV0dG9ucyBidXR0b24uZm9jdXM6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4iXX0= */"]
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
  "./src/app/pages/charts/lego/lego-chart.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/charts/lego/lego-chart.component.ts ***!
    \***********************************************************/

  /*! exports provided: LegoChartComponent */

  /***/
  function srcAppPagesChartsLegoLegoChartComponentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/app/pages/charts/lego/lego-charts.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/charts/lego/lego-charts.component.ts ***!
    \************************************************************/

  /*! exports provided: LegoChartsComponent */

  /***/
  function srcAppPagesChartsLegoLegoChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/charts/lego/theme-per-decade/theme-decade.component.ts");
    /* harmony import */


    var _colors_per_theme_colors_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./colors-per-theme/colors-theme.component */
    "./src/app/pages/charts/lego/colors-per-theme/colors-theme.component.ts");

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
      styles: [".chart[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: \"black\";\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #efdab3;\n  background-image: linear-gradient(to bottom, #efdab3, rgba(239, 218, 179, 0.6)), url('lego-heads.png');\n}\n\n.chart[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #090047;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9jaGFydHMvbGVnby9sZWdvLWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2xlZ28vbGVnby1jaGFydHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZXJsZW1vcmdhaW5lL0RvY3VtZW50cy9Db2RlUHJhY3RpY2UvZXJsZXMtY29ybmVyL3NyYy9hcHAvc3R5bGVzL19nbG9iYWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSx5QkFOTztBQ0RYOztBRE1FO0VBQ0UseUJFTWtCO0VGSGhCLHNHQUFpSDtBQ0x2SDs7QURDRTtFQUNFLHlCRU5pQjtBRFFyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9sZWdvL2xlZ28tY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2dsb2JhbHNcIjtcblxuJGNoYXJ0Q29sb3JzOlxuICAxICdibGFjaycsXG4gIDIgJGhvbWUtNS1saWdodCxcbiAgMyAkaG9tZS0yLWRhcms7XG5cbkBlYWNoICRpLCAkYmdDb2xvciBpbiAkY2hhcnRDb2xvcnMge1xuICAuY2hhcnQ6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3I7XG5cbiAgICBAaWYgKCRpID09IDIpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRiZ0NvbG9yLCByZ2JhKCRiZ0NvbG9yLCAuNikpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvbGVnby1oZWFkcy5wbmdcIik7XG4gICAgfVxuICB9XG59XG4iLCIuY2hhcnQ6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogXCJibGFja1wiO1xufVxuXG4uY2hhcnQ6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZGFiMztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VmZGFiMywgcmdiYSgyMzksIDIxOCwgMTc5LCAwLjYpKSwgdXJsKFwifnNyYy9hc3NldHMvaW1nL2xlZ28taGVhZHMucG5nXCIpO1xufVxuXG4uY2hhcnQ6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDA0Nztcbn1cbiIsIiRob21lLTEtZGFyazogIzBhMmQwYztcbiRob21lLTE6ICMxZTdmMjQ7XG4kaG9tZS0xLWxpZ2h0OiAjOWVkNTlmO1xuJGhvbWUtMi1kYXJrOiAjMDkwMDQ3O1xuJGhvbWUtMjogIzI2MDBmZjtcbiRob21lLTItbGlnaHQ6ICNiN2NiZmY7XG4kaG9tZS0zLWRhcms6ICMyMjAwNDg7XG4kaG9tZS0zOiAjNzAwMGZmO1xuJGhvbWUtMy1saWdodDogI2YyZDRmZjtcbiRob21lLTQtZGFyazogIzU4MDYxZDtcbiRob21lLTQ6ICNlZjE1NGI7XG4kaG9tZS00LWxpZ2h0OiAjZWZiY2JhO1xuJGhvbWUtNS1kYXJrOiAjMzcxNTA3O1xuJGhvbWUtNS1zZW1pLWRhcms6ICM5MDNiMTI7XG4kaG9tZS01OiAjZWY2NTFlO1xuJGhvbWUtNS1saWdodDogI2VmZGFiMztcbiRob21lLTYtZGFyazogIzQ2NDIwYTtcbiRob21lLTY6ICNmZmMwMDA7XG4kaG9tZS02LWxpZ2h0OiAjZjlmZmQ3O1xuXG4kbGlnaHQtZ3JleTogI2FjYWNhYztcbiJdfQ== */"]
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
  "./src/app/pages/charts/lego/theme-per-decade/theme-decade.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/charts/lego/theme-per-decade/theme-decade.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ThemeDecadeComponent */

  /***/
  function srcAppPagesChartsLegoThemePerDecadeThemeDecadeComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/charts/lego/lego-chart.component.ts");
    /* harmony import */


    var _services_color_blind_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/color-blind.service */
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
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemeDecadeComponent_div_0_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var theme_r18 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.setTheme(theme_r18);
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
        var theme_r18 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", theme_r18 + "Button")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r17.currentThemes.includes(theme_r18)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", theme_r18 + "Button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](theme_r18);
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
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.themes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r16.barChartData)("labels", ctx_r16.barChartLabels)("options", ctx_r16.barChartOptions)("legend", true)("chartType", "line");
      }
    }

    var ThemeDecadeComponent = /*#__PURE__*/function (_lego_chart_component2) {
      _inherits(ThemeDecadeComponent, _lego_chart_component2);

      var _super2 = _createSuper(ThemeDecadeComponent);

      function ThemeDecadeComponent(colorBlindService) {
        var _this9;

        _classCallCheck(this, ThemeDecadeComponent);

        _this9 = _super2.call(this);
        _this9.colorBlindService = colorBlindService;
        _this9.colors = [{
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
        _this9.barChartOptions = {
          responsive: true,
          legend: false,
          animation: {
            duration: 2000
          }
        };
        return _this9;
      }

      _createClass(ThemeDecadeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          d3__WEBPACK_IMPORTED_MODULE_1__["csv"]('assets/reduced_theme_decade.csv').then(function (data) {
            // Group data by parent theme, take some random themes
            var dataByTheme = _this10.setInitialDataByTheme(data);

            _this10.data = dataByTheme;
            _this10.themes = Object.keys(dataByTheme);
            _this10.currentThemes = ['Train', 'Space', 'Pirates', 'Castle'];

            _this10.colorBlindService.colorBlindModeOn$.subscribe(function (res) {
              _this10.colorBlindMode = res;

              var testData = _this10.currentThemes.map(function (t) {
                return dataByTheme[t];
              }); // set labels as years


              _this10.barChartLabels = _this10.setDecades(data.map(function (d) {
                return d['decade'];
              })); // Make sure that the data corresponds with the correct decade, and that decades with no data have null values
              // todo: activate cbm again when its clear which pattern fits with which button

              _this10.barChartData = testData.map(function (d, i) {
                return _this10.setData(d, _this10.themes.indexOf(d[0]['parent_theme_name']),
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
      styles: [".container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.theme-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 2rem 0;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-filter: drop-shadow(2px 4px 6px #36a6ff) drop-shadow(-2px -4px 6px #36a6ff);\n          filter: drop-shadow(2px 4px 6px #36a6ff) drop-shadow(-2px -4px 6px #36a6ff);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #69bdff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #9cd3ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #36a6ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-filter: drop-shadow(2px 4px 6px #ff23c4) drop-shadow(-2px -4px 6px #ff23c4);\n          filter: drop-shadow(2px 4px 6px #ff23c4) drop-shadow(-2px -4px 6px #ff23c4);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ff56d2;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ff89df;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #ff23c4;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-filter: drop-shadow(2px 4px 6px #ffab26) drop-shadow(-2px -4px 6px #ffab26);\n          filter: drop-shadow(2px 4px 6px #ffab26) drop-shadow(-2px -4px 6px #ffab26);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ffbf59;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ffd28c;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #ffab26;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-filter: drop-shadow(2px 4px 6px #28b030) drop-shadow(-2px -4px 6px #28b030);\n          filter: drop-shadow(2px 4px 6px #28b030) drop-shadow(-2px -4px 6px #28b030);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #39d242;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #63db6a;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #28b030;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-filter: drop-shadow(2px 4px 6px #ff3a72) drop-shadow(-2px -4px 6px #ff3a72);\n          filter: drop-shadow(2px 4px 6px #ff3a72) drop-shadow(-2px -4px 6px #ff3a72);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ff6d97;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #ffa0bb;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(5).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #ff3a72;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-filter: drop-shadow(2px 4px 6px #5e34ff) drop-shadow(-2px -4px 6px #5e34ff);\n          filter: drop-shadow(2px 4px 6px #5e34ff) drop-shadow(-2px -4px 6px #5e34ff);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #8667ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #af9aff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(6).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #5e34ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-filter: drop-shadow(2px 4px 6px #a1ffd9) drop-shadow(-2px -4px 6px #a1ffd9);\n          filter: drop-shadow(2px 4px 6px #a1ffd9) drop-shadow(-2px -4px 6px #a1ffd9);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #d4ffee;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(7).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #a1ffd9;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-filter: drop-shadow(2px 4px 6px #e4c5d1) drop-shadow(-2px -4px 6px #e4c5d1);\n          filter: drop-shadow(2px 4px 6px #e4c5d1) drop-shadow(-2px -4px 6px #e4c5d1);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #f4e8ed;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(8).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #e4c5d1;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9) {\n  -webkit-filter: drop-shadow(2px 4px 6px #a231ff) drop-shadow(-2px -4px 6px #a231ff);\n          filter: drop-shadow(2px 4px 6px #a231ff) drop-shadow(-2px -4px 6px #a231ff);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #b964ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover.focus   .head[_ngcontent-%COMP%], .theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9):hover.focus   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  background-color: #d097ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(9).focus   label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #a231ff;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  width: calc(10.2rem / 3);\n  height: calc(8.5rem / 3);\n  border-radius: 10px;\n  margin-bottom: .5rem;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .head-top[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: calc(4.9rem / 3);\n  height: calc(1.6rem / 3);\n  top: calc(1.6rem / -3);\n  right: calc((100% - 4.9rem / 3) / 2);\n  border-top-right-radius: 40%;\n  border-top-left-radius: 40%;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: calc((4.9rem - (1.25rem / 3)) / 3);\n  left: calc((100% - ((4.9rem - (1.25rem / 3)) / 3)) / 2);\n  top: calc(3.4rem / 3);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: black;\n  border-radius: 50%;\n  width: calc(1.25rem / 3);\n  height: calc(1.25rem / 3);\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .eyes[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:last-child {\n  right: 0;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .mouth[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(2rem / 3);\n  left: calc((100% - .78rem) / 2);\n  width: 0.5rem;\n  height: 0.1rem;\n  border: solid 2px black;\n  border-top: none;\n  border-radius: 0 0 160px 160px / 0 0 120px 120px;\n}\n\n.theme-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9jaGFydHMvbGVnby90aGVtZS1wZXItZGVjYWRlL3RoZW1lLWRlY2FkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnRzL2xlZ28vdGhlbWUtcGVyLWRlY2FkZS90aGVtZS1kZWNhZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQ0NoQjs7QURFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztBQ0NoQjs7QURKQTtFQU1JLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQ0VuQjs7QURiQTtFQXNEUSxtRkFBeUU7VUFBekUsMkVBQXlFO0FDckNqRjs7QURqQkE7RUEwRFkseUJBQXNDO0FDckNsRDs7QURyQkE7RUFnRVkseUJBQXNDO0FDdkNsRDs7QUR6QkE7RUFzRVksZ0NBeERpQjtBQ2U3Qjs7QUQ3QkE7RUFzRFEsbUZBQXlFO1VBQXpFLDJFQUF5RTtBQ3JCakY7O0FEakNBO0VBMERZLHlCQUFzQztBQ3JCbEQ7O0FEckNBO0VBZ0VZLHlCQUFzQztBQ3ZCbEQ7O0FEekNBO0VBc0VZLGdDQXZEaUI7QUM4QjdCOztBRDdDQTtFQXNEUSxtRkFBeUU7VUFBekUsMkVBQXlFO0FDTGpGOztBRGpEQTtFQTBEWSx5QkFBc0M7QUNMbEQ7O0FEckRBO0VBZ0VZLHlCQUFzQztBQ1BsRDs7QUR6REE7RUFzRVksZ0NBdERpQjtBQzZDN0I7O0FEN0RBO0VBc0RRLG1GQUF5RTtVQUF6RSwyRUFBeUU7QUNXakY7O0FEakVBO0VBMERZLHlCQUFzQztBQ1dsRDs7QURyRUE7RUFnRVkseUJBQXNDO0FDU2xEOztBRHpFQTtFQXNFWSxnQ0FyRGdCO0FDNEQ1Qjs7QUQ3RUE7RUFzRFEsbUZBQXlFO1VBQXpFLDJFQUF5RTtBQzJCakY7O0FEakZBO0VBMERZLHlCQUFzQztBQzJCbEQ7O0FEckZBO0VBZ0VZLHlCQUFzQztBQ3lCbEQ7O0FEekZBO0VBc0VZLGdDQXBEaUI7QUMyRTdCOztBRDdGQTtFQXNEUSxtRkFBeUU7VUFBekUsMkVBQXlFO0FDMkNqRjs7QURqR0E7RUEwRFkseUJBQXNDO0FDMkNsRDs7QURyR0E7RUFnRVkseUJBQXNDO0FDeUNsRDs7QUR6R0E7RUFzRVksZ0NBbkRnQjtBQzBGNUI7O0FEN0dBO0VBc0RRLG1GQUF5RTtVQUF6RSwyRUFBeUU7QUMyRGpGOztBRGpIQTtFQTBEWSx5QkFBc0M7QUMyRGxEOztBRHJIQTtFQWdFWSx1QkFBc0M7QUN5RGxEOztBRHpIQTtFQXNFWSxnQ0FsRGtCO0FDeUc5Qjs7QUQ3SEE7RUFzRFEsbUZBQXlFO1VBQXpFLDJFQUF5RTtBQzJFakY7O0FEaklBO0VBMERZLHlCQUFzQztBQzJFbEQ7O0FEcklBO0VBZ0VZLHVCQUFzQztBQ3lFbEQ7O0FEeklBO0VBc0VZLGdDQWpEb0I7QUN3SGhDOztBRDdJQTtFQXNEUSxtRkFBeUU7VUFBekUsMkVBQXlFO0FDMkZqRjs7QURqSkE7RUEwRFkseUJBQXNDO0FDMkZsRDs7QURySkE7RUFnRVkseUJBQXNDO0FDeUZsRDs7QUR6SkE7RUFzRVksZ0NBaERpQjtBQ3VJN0I7O0FEN0pBO0VBNkVNLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQW9DO0VBQ3BDLHdCQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsb0JBQW9CO0FDb0YxQjs7QUR0S0E7RUFnRE0sa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQXNDckIsdUJBQXdDO0VBQ3hDLHdCQUF5QztFQUN6QyxzQkFBd0M7RUFDeEMsb0NBQXFEO0VBQ3JELDRCQW5EZ0I7RUFvRGhCLDJCQXBEZ0I7QUN5SXhCOztBRGpMQTtFQWdETSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBaURyQix5Q0FBd0U7RUFDeEUsdURBQXNGO0VBQ3RGLHFCQUF5QztBQ3FGakQ7O0FEekxBO0VBdUdVLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHdCQUFzQztFQUN0Qyx5QkFBdUM7QUNzRmpEOztBRGpNQTtFQThHWSxRQUFRO0FDdUZwQjs7QURyTUE7RUF1SFEsa0JBQWtCO0VBQ2xCLHNCQUFnRDtFQUNoRCwrQkFBK0I7RUFDL0IsYUFOZTtFQU9mLGNBTmU7RUFPZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtBQ2tGeEQ7O0FEaE5BO0VBbUlNLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQ2lGckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFydHMvbGVnby90aGVtZS1wZXItZGVjYWRlL3RoZW1lLWRlY2FkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnRoZW1lLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMnJlbSAwO1xuXG4gIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC8vIEJ1dHRvbiBjb2xvcnNcbiAgICAkY29sb3ItMTogcmdiKDU0LDE2NiwyNTUpO1xuICAgICRjb2xvci0yOiByZ2IoMjU1LDM1LDE5Nik7XG4gICAgJGNvbG9yLTM6IHJnYigyNTUsMTcxLDM4KTtcbiAgICAkY29sb3ItNDogcmdiKDQwLDE3Niw0OCk7XG4gICAgJGNvbG9yLTU6IHJnYigyNTUsNTgsMTE0KTtcbiAgICAkY29sb3ItNjogcmdiKDk0LDUyLDI1NSk7XG4gICAgJGNvbG9yLTc6IHJnYigxNjEsMjU1LDIxNyk7XG4gICAgJGNvbG9yLTg6IHJnYigyMjgsIDE5NywgMjA5KTtcbiAgICAkY29sb3ItOTogcmdiKDE2Miw0OSwyNTUpO1xuXG4gICAgJGxlZ28tY29sb3JzOlxuICAgICAgMSAkY29sb3ItMSxcbiAgICAgIDIgJGNvbG9yLTIsXG4gICAgICAzICRjb2xvci0zLFxuICAgICAgNCAkY29sb3ItNCxcbiAgICAgIDUgJGNvbG9yLTUsXG4gICAgICA2ICRjb2xvci02LFxuICAgICAgNyAkY29sb3ItNyxcbiAgICAgIDggJGNvbG9yLTgsXG4gICAgICA5ICRjb2xvci05O1xuXG4gICAgLy8gTGVnbyBoZWFkIHNpemUgdmFyaWFibGVzXG4gICAgJGhlYWQtdzogMTAuMnJlbTtcbiAgICAkaGVhZC1oOiA4LjVyZW07XG4gICAgJGhlYWQtdG9wLXc6IDQuOXJlbTtcbiAgICAkaGVhZC10b3AtaDogMS42cmVtO1xuICAgICRoZWFkLXRvcC1jdXJ2ZTogNDAlO1xuICAgICRleWVzLWZyb20tdG9wOiAzLjRyZW07XG4gICAgJG1vdXRoLWZyb20tYm90dG9tOiAycmVtO1xuICAgICRleWUtc2l6ZTogMS4yNXJlbTtcblxuICAgICRmYWN0b3I6IDM7XG5cbiAgICBAbWl4aW4gbGVnb0NvbW1vblZhcnMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgQGVhY2ggJGksICRjb2xvciBpbiAkbGVnby1jb2xvcnMge1xuICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAkY29sb3IpIGRyb3Atc2hhZG93KC0ycHggLTRweCA2cHggJGNvbG9yKTtcblxuICAgICAgICAmOmhvdmVyLCAmLmZvY3VzIHtcbiAgICAgICAgICAuaGVhZCwgLmhlYWQgLmhlYWQtdG9wIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLCAxMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIuZm9jdXMge1xuICAgICAgICAgIC5oZWFkLCAuaGVhZCAuaGVhZC10b3Age1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3IsIDIwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5mb2N1cyB7XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRjb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiBjYWxjKCN7JGhlYWQtd30gLyAjeyRmYWN0b3J9KTtcbiAgICAgIGhlaWdodDogY2FsYygjeyRoZWFkLWh9IC8gI3skZmFjdG9yfSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG5cbiAgICAgIC5oZWFkLXRvcCB7XG4gICAgICAgIEBpbmNsdWRlIGxlZ29Db21tb25WYXJzO1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKCN7JGhlYWQtdG9wLXd9IC8gI3skZmFjdG9yfSk7XG4gICAgICAgIGhlaWdodDogY2FsYygjeyRoZWFkLXRvcC1ofSAvICN7JGZhY3Rvcn0pO1xuICAgICAgICB0b3A6IGNhbGMoI3skaGVhZC10b3AtaH0gLyAtI3skZmFjdG9yfSk7XG4gICAgICAgIHJpZ2h0OiBjYWxjKCgxMDAlIC0gI3skaGVhZC10b3Atd30gLyAjeyRmYWN0b3J9KSAvIDIpO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGhlYWQtdG9wLWN1cnZlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkaGVhZC10b3AtY3VydmU7XG4gICAgICB9XG5cbiAgICAgIC5leWVzIHtcbiAgICAgICAgQGluY2x1ZGUgbGVnb0NvbW1vblZhcnM7XG5cbiAgICAgICAgd2lkdGg6IGNhbGMoKCN7JGhlYWQtdG9wLXd9IC0gKCN7JGV5ZS1zaXplfSAvICN7JGZhY3Rvcn0pKSAvICN7JGZhY3Rvcn0pO1xuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gKCgjeyRoZWFkLXRvcC13fSAtICgjeyRleWUtc2l6ZX0gLyAjeyRmYWN0b3J9KSkgLyAjeyRmYWN0b3J9KSkgLyAyKTtcbiAgICAgICAgdG9wOiBjYWxjKCN7JGV5ZXMtZnJvbS10b3B9IC8gI3skZmFjdG9yfSk7XG5cbiAgICAgICAgLmV5ZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB3aWR0aDogY2FsYygjeyRleWUtc2l6ZX0gLyAjeyRmYWN0b3J9KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoI3skZXllLXNpemV9IC8gI3skZmFjdG9yfSk7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tb3V0aCB7XG4gICAgICAgICRtb3V0aC13OiAuNXJlbTtcbiAgICAgICAgJG1vdXRoLWg6IC4xcmVtO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiBjYWxjKCN7JG1vdXRoLWZyb20tYm90dG9tfSAvICN7JGZhY3Rvcn0pO1xuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gLjc4cmVtKSAvIDIpOztcbiAgICAgICAgd2lkdGg6ICRtb3V0aC13O1xuICAgICAgICBoZWlnaHQ6ICRtb3V0aC1oO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDE2MHB4IDE2MHB4IC8gMCAwIDEyMHB4IDEyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGhlbWUtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggIzM2YTZmZikgZHJvcC1zaGFkb3coLTJweCAtNHB4IDZweCAjMzZhNmZmKTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMSkuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5YmRmZjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3Zlci5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgxKTpob3Zlci5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNkM2ZmO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDEpLmZvY3VzIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzNmE2ZmY7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4ICNmZjIzYzQpIGRyb3Atc2hhZG93KC0ycHggLTRweCA2cHggI2ZmMjNjNCk7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIgLmhlYWQgLmhlYWQtdG9wLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDIpLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU2ZDI7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMik6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODlkZjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKS5mb2N1cyBsYWJlbCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmYyM2M0O1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjZmZhYjI2KSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICNmZmFiMjYpO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyIC5oZWFkIC5oZWFkLXRvcCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKS5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgzKS5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjU5O1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDMpOmhvdmVyLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQyOGM7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoMykuZm9jdXMgbGFiZWwge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmYWIyNjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KSB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggIzI4YjAzMCkgZHJvcC1zaGFkb3coLTJweCAtNHB4IDZweCAjMjhiMDMwKTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNCkuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5ZDI0Mjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KTpob3Zlci5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg0KTpob3Zlci5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNkYjZhO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDQpLmZvY3VzIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyOGIwMzA7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSkge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4ICNmZjNhNzIpIGRyb3Atc2hhZG93KC0ycHggLTRweCA2cHggI2ZmM2E3Mik7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIgLmhlYWQgLmhlYWQtdG9wLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDUpLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZkOTc7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNSk6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTBiYjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg1KS5mb2N1cyBsYWJlbCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmYzYTcyO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjNWUzNGZmKSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICM1ZTM0ZmYpO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmhvdmVyIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmhvdmVyIC5oZWFkIC5oZWFkLXRvcCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg2KS5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg2KS5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY2N2ZmO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmhvdmVyLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDYpOmhvdmVyLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZjlhZmY7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNikuZm9jdXMgbGFiZWwge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzVlMzRmZjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KSB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggI2ExZmZkOSkgZHJvcC1zaGFkb3coLTJweCAtNHB4IDZweCAjYTFmZmQ5KTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3ZlciAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3ZlciAuaGVhZCAuaGVhZC10b3AsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNykuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoNykuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZmZlZTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3Zlci5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KTpob3Zlci5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg3KS5mb2N1cyBsYWJlbCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYTFmZmQ5O1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCAjZTRjNWQxKSBkcm9wLXNoYWRvdygtMnB4IC00cHggNnB4ICNlNGM1ZDEpO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpOmhvdmVyIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpOmhvdmVyIC5oZWFkIC5oZWFkLXRvcCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KS5mb2N1cyAuaGVhZCwgLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg4KS5mb2N1cyAuaGVhZCAuaGVhZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlOGVkO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpOmhvdmVyLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpOmhvdmVyLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDgpLmZvY3VzIGxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlNGM1ZDE7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSkge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4ICNhMjMxZmYpIGRyb3Atc2hhZG93KC0ycHggLTRweCA2cHggI2EyMzFmZik7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSk6aG92ZXIgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSk6aG92ZXIgLmhlYWQgLmhlYWQtdG9wLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpLmZvY3VzIC5oZWFkLCAudGhlbWUtYnV0dG9ucyBidXR0b246bnRoLWNoaWxkKDkpLmZvY3VzIC5oZWFkIC5oZWFkLXRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTY0ZmY7XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSk6aG92ZXIuZm9jdXMgLmhlYWQsIC50aGVtZS1idXR0b25zIGJ1dHRvbjpudGgtY2hpbGQoOSk6aG92ZXIuZm9jdXMgLmhlYWQgLmhlYWQtdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwOTdmZjtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCg5KS5mb2N1cyBsYWJlbCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYTIzMWZmO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b24gLmhlYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogY2FsYygxMC4ycmVtIC8gMyk7XG4gIGhlaWdodDogY2FsYyg4LjVyZW0gLyAzKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi50aGVtZS1idXR0b25zIGJ1dHRvbiAuaGVhZCAuaGVhZC10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogY2FsYyg0LjlyZW0gLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKDEuNnJlbSAvIDMpO1xuICB0b3A6IGNhbGMoMS42cmVtIC8gLTMpO1xuICByaWdodDogY2FsYygoMTAwJSAtIDQuOXJlbSAvIDMpIC8gMik7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwJTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uIC5oZWFkIC5leWVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IGNhbGMoKDQuOXJlbSAtICgxLjI1cmVtIC8gMykpIC8gMyk7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAoKDQuOXJlbSAtICgxLjI1cmVtIC8gMykpIC8gMykpIC8gMik7XG4gIHRvcDogY2FsYygzLjRyZW0gLyAzKTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uIC5oZWFkIC5leWVzIC5leWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiBjYWxjKDEuMjVyZW0gLyAzKTtcbiAgaGVpZ2h0OiBjYWxjKDEuMjVyZW0gLyAzKTtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uIC5oZWFkIC5leWVzIC5leWU6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4udGhlbWUtYnV0dG9ucyBidXR0b24gLmhlYWQgLm1vdXRoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoMnJlbSAvIDMpO1xuICBsZWZ0OiBjYWxjKCgxMDAlIC0gLjc4cmVtKSAvIDIpO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuMXJlbTtcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNjBweCAxNjBweCAvIDAgMCAxMjBweCAxMjBweDtcbn1cblxuLnRoZW1lLWJ1dHRvbnMgYnV0dG9uIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"]
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
  "./src/app/pages/charts/pie-chart/pie-chart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/charts/pie-chart/pie-chart.component.ts ***!
    \***************************************************************/

  /*! exports provided: PieChartComponent */

  /***/
  function srcAppPagesChartsPieChartPieChartComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/charts/chart-data.ts");
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9waWUtY2hhcnQvcGllLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
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
  "./src/app/pages/charts/radar-chart/radar-chart.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/charts/radar-chart/radar-chart.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RadarChartComponent */

  /***/
  function srcAppPagesChartsRadarChartRadarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/pages/charts/chart-data.ts");
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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9yYWRhci1jaGFydC9yYWRhci1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"]
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
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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
        link: '/image-detection',
        text: 'GUESS THE IMAGE'
      }, {
        link: '/starry-night',
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
      styles: ["@-webkit-keyframes colorTransition {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 100%;\n  }\n}\n\n@keyframes colorTransition {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 100%;\n  }\n}\n\n@-webkit-keyframes slideButtons1 {\n  to {\n    transform: translate3d(-100%, -10%, 0);\n  }\n}\n\n@keyframes slideButtons1 {\n  to {\n    transform: translate3d(-100%, -10%, 0);\n  }\n}\n\n@-webkit-keyframes slideButtons2 {\n  45% {\n    opacity: 1;\n  }\n  50% {\n    transform: translate3d(calc(-150% - (1% / 2)), -10%, 0);\n  }\n  51% {\n    transform: translate3d(calc(50% + 1%), -10%, 0);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(1%, -10%, 0);\n  }\n}\n\n@keyframes slideButtons2 {\n  45% {\n    opacity: 1;\n  }\n  50% {\n    transform: translate3d(calc(-150% - (1% / 2)), -10%, 0);\n  }\n  51% {\n    transform: translate3d(calc(50% + 1%), -10%, 0);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(1%, -10%, 0);\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(20deg, #1e7f24, transparent 70%), linear-gradient(60deg, #2600ff, transparent 60%), linear-gradient(90deg, #7000ff, transparent 80%), linear-gradient(180deg, #ef154b, transparent 70%), linear-gradient(240deg, #ef651e, transparent 70%), linear-gradient(300deg, #ffc000, transparent 70%);\n  background-size: 200% 100%;\n  -webkit-animation: colorTransition 4s linear infinite alternate;\n          animation: colorTransition 4s linear infinite alternate;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50vh - 30rem / 2);\n  color: rgba(255, 255, 255, 0.7);\n  -webkit-filter: drop-shadow(1px 1px 0.75px rgba(255, 255, 255, 0.7)) drop-shadow(-1px -1px 0.75px rgba(255, 255, 255, 0.7));\n          filter: drop-shadow(1px 1px 0.75px rgba(255, 255, 255, 0.7)) drop-shadow(-1px -1px 0.75px rgba(255, 255, 255, 0.7));\n  transition: top .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n  left: calc(50vw - 30rem / 2);\n  transform: rotate(-45deg);\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:not(:first-child) {\n  right: calc(50vw - 30rem / 2);\n  transform: rotate(45deg);\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black);\n          filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black);\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%] {\n  width: 30rem;\n  height: 30rem;\n  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n  background-color: black;\n  transition: width .5s, height .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n  transform: translate3d(1%, -10%, 0);\n  -webkit-animation: slideButtons1 15s linear infinite;\n          animation: slideButtons1 15s linear infinite;\n  display: flex;\n  align-items: flex-start;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #9ed59f;\n  color: #0a2d0c;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):hover {\n  background-color: #0a2d0c;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #b7cbff;\n  color: #090047;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):hover {\n  background-color: #090047;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #f2d4ff;\n  color: #220048;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):hover {\n  background-color: #220048;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #efbcba;\n  color: #58061d;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):hover {\n  background-color: #58061d;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #efdab3;\n  color: #371507;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):hover {\n  background-color: #371507;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n  transform: translate3d(-100%, -10%, 0);\n  -webkit-animation: slideButtons2 15s linear infinite;\n          animation: slideButtons2 15s linear infinite;\n  display: flex;\n  align-items: flex-start;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #9ed59f;\n  color: #0a2d0c;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):hover {\n  background-color: #0a2d0c;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #b7cbff;\n  color: #090047;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):hover {\n  background-color: #090047;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #f2d4ff;\n  color: #220048;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):hover {\n  background-color: #220048;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #efbcba;\n  color: #58061d;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):hover {\n  background-color: #58061d;\n  color: white;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #efdab3;\n  color: #371507;\n  transition: all .5s;\n}\n\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):hover {\n  background-color: #371507;\n  color: white;\n}\n\n@media screen and (max-width: 768px) {\n  @-webkit-keyframes pulsingButtons {\n    to {\n      transform: scale(1.05);\n    }\n  }\n  @keyframes pulsingButtons {\n    to {\n      transform: scale(1.05);\n    }\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: calc(50vh - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    left: calc(50vw - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:not(:first-child) {\n    right: calc(50vw - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%] {\n    width: 20rem;\n    height: 20rem;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    top: 20%;\n    left: 22%;\n    flex-direction: column;\n    align-items: initial;\n    -webkit-animation: none;\n            animation: none;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    -webkit-animation: pulsingButtons 1s alternate infinite;\n            animation: pulsingButtons 1s alternate infinite;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fZ2xvYmFscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0U7SUFBTSxzQkFBc0I7RUNQNUI7RURRQTtJQUFJLHlCQUF5QjtFQ0w3QjtBQUNGOztBREVBO0VBQ0U7SUFBTSxzQkFBc0I7RUNQNUI7RURRQTtJQUFJLHlCQUF5QjtFQ0w3QjtBQUNGOztBRE9BO0VBQ0U7SUFBSyxzQ0FBbUQ7RUNIeEQ7QUFDRjs7QURDQTtFQUNFO0lBQUssc0NBQW1EO0VDSHhEO0FBQ0Y7O0FES0E7RUFDRTtJQUFNLFVBQVc7RUNEakI7RURFQTtJQUFNLHVEQUFvRjtFQ0MxRjtFREFBO0lBQU0sK0NBQTRFO0lBQUUsVUFBVztFQ0kvRjtFREhBO0lBQUssbUNBQTZEO0VDTWxFO0FBQ0Y7O0FEWEE7RUFDRTtJQUFNLFVBQVc7RUNEakI7RURFQTtJQUFNLHVEQUFvRjtFQ0MxRjtFREFBO0lBQU0sK0NBQTRFO0lBQUUsVUFBVztFQ0kvRjtFREhBO0lBQUssbUNBQTZEO0VDTWxFO0FBQ0Y7O0FEMkJBO0VBQ0UsK1RBS21FO0VBQ25FLDBCQUEwQjtFQUMxQiwrREFBdUQ7VUFBdkQsdURBQXVEO0FDN0J6RDs7QURxQkE7RUFXSSxrQkFBa0I7QUM1QnRCOztBRGlCQTtFQWNNLGtCQUFrQjtFQUNsQiwyQkFBeUM7RUFDekMsK0JBckVnQztFQXNFaEMsMkhBQXlGO1VBQXpGLG1IQUF5RjtFQUN6RixtQkFBbUI7QUMzQnpCOztBRFNBO0VBcUJRLDRCQUEwQztFQUMxQyx5QkFBeUI7QUMxQmpDOztBRElBO0VBMEJRLDZCQUEyQztFQUMzQyx3QkFBd0I7QUMxQmhDOztBRERBO0VFdkRFLGVBQWU7RUFDZixRQUFRO0VBQUUsU0FBUztFQUNuQixnQ0FBZ0M7RUZ1RjVCLCtFQUF1RTtVQUF2RSx1RUFBdUU7QUN6QjdFOztBRFRBO0VBcUNRLFlBeEZlO0VBeUZmLGFBekZlO0VBMEZmLGtHQUEwRjtVQUExRiwwRkFBMEY7RUFDMUYsdUJBQWtDO0VBQ2xDLGlDQUFpQztBQ3hCekM7O0FEakJBO0VBNENVLGtCQUFrQjtBQ3ZCNUI7O0FEckJBO0VFdkRFLGVBQWU7RUFDZixRQUFRO0VBQUUsU0FBUztFQUNuQixnQ0FBZ0M7RUZ5QmhDLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUNBQW9EO0VBQ3BELG9EQUF5QztVQUF6Qyw0Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHVCQUF1QjtBQ3lEekI7O0FEL0NJO0VBQ0UseUJHMUNnQjtFSDJDaEIsY0c3Q2U7RUg4Q2YsbUJBQW1CO0FDa0R6Qjs7QURoRE07RUFDRSx5QkdqRGE7RUhrRGIsWUFBWTtBQ21EcEI7O0FEMURJO0VBQ0UseUJHdkNnQjtFSHdDaEIsY0cxQ2U7RUgyQ2YsbUJBQW1CO0FDNkR6Qjs7QUQzRE07RUFDRSx5Qkc5Q2E7RUgrQ2IsWUFBWTtBQzhEcEI7O0FEckVJO0VBQ0UseUJHcENnQjtFSHFDaEIsY0d2Q2U7RUh3Q2YsbUJBQW1CO0FDd0V6Qjs7QUR0RU07RUFDRSx5QkczQ2E7RUg0Q2IsWUFBWTtBQ3lFcEI7O0FEaEZJO0VBQ0UseUJHakNnQjtFSGtDaEIsY0dwQ2U7RUhxQ2YsbUJBQW1CO0FDbUZ6Qjs7QURqRk07RUFDRSx5Qkd4Q2E7RUh5Q2IsWUFBWTtBQ29GcEI7O0FEM0ZJO0VBQ0UseUJHN0JnQjtFSDhCaEIsY0dqQ2U7RUhrQ2YsbUJBQW1CO0FDOEZ6Qjs7QUQ1Rk07RUFDRSx5QkdyQ2E7RUhzQ2IsWUFBWTtBQytGcEI7O0FEekZBO0VFdkRFLGVBQWU7RUFDZixRQUFRO0VBQUUsU0FBUztFQUNuQixnQ0FBZ0M7RUZ5QmhDLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0NBQW9EO0VBQ3BELG9EQUF5QztVQUF6Qyw0Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHVCQUF1QjtBQzZIekI7O0FEbkhJO0VBQ0UseUJHMUNnQjtFSDJDaEIsY0c3Q2U7RUg4Q2YsbUJBQW1CO0FDc0h6Qjs7QURwSE07RUFDRSx5QkdqRGE7RUhrRGIsWUFBWTtBQ3VIcEI7O0FEOUhJO0VBQ0UseUJHdkNnQjtFSHdDaEIsY0cxQ2U7RUgyQ2YsbUJBQW1CO0FDaUl6Qjs7QUQvSE07RUFDRSx5Qkc5Q2E7RUgrQ2IsWUFBWTtBQ2tJcEI7O0FEeklJO0VBQ0UseUJHcENnQjtFSHFDaEIsY0d2Q2U7RUh3Q2YsbUJBQW1CO0FDNEl6Qjs7QUQxSU07RUFDRSx5QkczQ2E7RUg0Q2IsWUFBWTtBQzZJcEI7O0FEcEpJO0VBQ0UseUJHakNnQjtFSGtDaEIsY0dwQ2U7RUhxQ2YsbUJBQW1CO0FDdUp6Qjs7QURySk07RUFDRSx5Qkd4Q2E7RUh5Q2IsWUFBWTtBQ3dKcEI7O0FEL0pJO0VBQ0UseUJHN0JnQjtFSDhCaEIsY0dqQ2U7RUhrQ2YsbUJBQW1CO0FDa0t6Qjs7QURoS007RUFDRSx5QkdyQ2E7RUhzQ2IsWUFBWTtBQ21LcEI7O0FEcEdJO0VBQ0U7SUFDRTtNQUFLLHNCQUFzQjtJQ3dHL0I7RUFDRjtFRDFHSTtJQUNFO01BQUssc0JBQXNCO0lDd0cvQjtFQUNGO0VEcEtGO0lBa0VRLDhCQUE4QztFQ3FHcEQ7RUR2S0Y7SUFxRVUsK0JBQStDO0VDcUd2RDtFRDFLRjtJQXlFVSxnQ0FBZ0Q7RUNvR3hEO0VEN0tGO0lBK0VRLFlBakJ1QjtJQWtCdkIsYUFsQnVCO0VDbUg3QjtFRGpMRjtJQW9GWSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsdUJBQWU7WUFBZixlQUFlO0VDZ0d6QjtFRHpMRjtJQTRGYyx1REFBK0M7WUFBL0MsK0NBQStDO0VDZ0czRDtFRDVMRjtJQWlHWSxrQkFBa0I7RUM4RjVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvbWl4aW5zXCI7XG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvZ2xvYmFsc1wiO1xuXG4kdGl0bGUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcblxuJG1lbnUtaG9sZGVyLXctaDogMzByZW07XG4kc2xpZGUtb2Zmc2V0LXRvcDogLTEwJTtcbiRzbGlkZS1vZmZzZXQteDogMSU7XG5cbkBrZXlmcmFtZXMgY29sb3JUcmFuc2l0aW9uIHtcbiAgZnJvbSB7YmFja2dyb3VuZC1wb3NpdGlvbjogMH1cbiAgdG8ge2JhY2tncm91bmQtcG9zaXRpb246IDEwMCV9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCdXR0b25zMSB7XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgJHNsaWRlLW9mZnNldC10b3AsIDApIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUJ1dHRvbnMyIHtcbiAgNDUlIHsgb3BhY2l0eTogMSB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYygtMTUwJSAtICgjeyRzbGlkZS1vZmZzZXQteH0gLyAyKSksICRzbGlkZS1vZmZzZXQtdG9wLCAwKSB9XG4gIDUxJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYyg1MCUgKyAjeyRzbGlkZS1vZmZzZXQteH0pLCAkc2xpZGUtb2Zmc2V0LXRvcCwgMCk7IG9wYWNpdHk6IDAgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHNsaWRlLW9mZnNldC14LCAkc2xpZGUtb2Zmc2V0LXRvcCwgMCkgfVxufVxuXG5AbWl4aW4gc2xpZGVTaG93KCRzdGFydCwgJGFuaW1hdGlvbikge1xuICBAaW5jbHVkZSBjZW50ZXI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkc3RhcnQsICRzbGlkZS1vZmZzZXQtdG9wLCAwKTtcbiAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICRidG4tY29sb3JzOlxuICAgIDEgJGhvbWUtMS1kYXJrICRob21lLTEtbGlnaHQsXG4gICAgMiAkaG9tZS0yLWRhcmsgJGhvbWUtMi1saWdodCxcbiAgICAzICRob21lLTMtZGFyayAkaG9tZS0zLWxpZ2h0LFxuICAgIDQgJGhvbWUtNC1kYXJrICRob21lLTQtbGlnaHQsXG4gICAgNSAkaG9tZS01LWRhcmsgJGhvbWUtNS1saWdodDtcblxuICBAZWFjaCAkaSwgJGNvbG9yLCAkYmdDb2xvciBpbiAkYnRuLWNvbG9ycyB7XG4gICAgYTpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMGRlZywgJGhvbWUtMSwgdHJhbnNwYXJlbnQgNzAlKSxcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDYwZGVnLCAkaG9tZS0yLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRob21lLTMsIHRyYW5zcGFyZW50IDgwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRob21lLTQsIHRyYW5zcGFyZW50IDcwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICRob21lLTUsIHRyYW5zcGFyZW50IDcwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgzMDBkZWcsICRob21lLTYsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IGNvbG9yVHJhbnNpdGlvbiA0cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG4gIC50aXRsZS13cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBoMSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGNhbGMoNTB2aCAtICN7JG1lbnUtaG9sZGVyLXctaH0gLyAyKTtcbiAgICAgIGNvbG9yOiAkdGl0bGUtY29sb3I7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggLjc1cHggJHRpdGxlLWNvbG9yKSBkcm9wLXNoYWRvdygtMXB4IC0xcHggLjc1cHggJHRpdGxlLWNvbG9yKTtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAuNXM7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci13LWh9IC8gMik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICByaWdodDogY2FsYyg1MHZ3IC0gI3skbWVudS1ob2xkZXItdy1ofSAvIDIpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lbnUtaG9sZGVyLXdyYXAge1xuICAgICAgQGluY2x1ZGUgY2VudGVyO1xuXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNXB4IGJsYWNrKSBkcm9wLXNoYWRvdygtMnB4IC0ycHggNXB4IGJsYWNrKTtcblxuICAgICAgLm1lbnUtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6ICRtZW51LWhvbGRlci13LWg7XG4gICAgICAgIGhlaWdodDogJG1lbnUtaG9sZGVyLXctaDtcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgNzAlIDAlLCAxMDAlIDMwJSwgMTAwJSA3MCUsIDcwJSAxMDAlLCAzMCUgMTAwJSwgMCUgNzAlLCAwJSAzMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMsIGhlaWdodCAuNXM7XG5cbiAgICAgICAgLmJ1dHRvbi1zbGlkZS13cmFwIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAuYnV0dG9uLXNsaWRlLTEge1xuICAgICAgICAgICAgQGluY2x1ZGUgc2xpZGVTaG93KCRzbGlkZS1vZmZzZXQteCwgc2xpZGVCdXR0b25zMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ1dHRvbi1zbGlkZS0yIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHNsaWRlU2hvdygtMTAwJSwgc2xpZGVCdXR0b25zMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2luZ0J1dHRvbnMge1xuICAgICAgICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgfVxuICAgICAgfVxuXG4gICAgICAkbWVudS1ob2xkZXItcy13LWg6IDIwcmVtO1xuICAgICAgJHNsaWRlLW9mZnNldC1zLXg6IC01MCU7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwdmggLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0b2RvOiBhbHNvIHNsaWRlc2hvd1xuICAgICAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6ICRtZW51LWhvbGRlci1zLXctaDtcbiAgICAgICAgaGVpZ2h0OiAkbWVudS1ob2xkZXItcy13LWg7XG5cbiAgICAgICAgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUge1xuICAgICAgICAgICYtMSB7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICAgIGxlZnQ6IDIyJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2luZ0J1dHRvbnMgMXMgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYtMiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIkBrZXlmcmFtZXMgY29sb3JUcmFuc2l0aW9uIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQnV0dG9uczEge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgLTEwJSwgMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUJ1dHRvbnMyIHtcbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKC0xNTAlIC0gKDElIC8gMikpLCAtMTAlLCAwKTtcbiAgfVxuICA1MSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoY2FsYyg1MCUgKyAxJSksIC0xMCUsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMSUsIC0xMCUsIDApO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjBkZWcsICMxZTdmMjQsIHRyYW5zcGFyZW50IDcwJSksIGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzI2MDBmZiwgdHJhbnNwYXJlbnQgNjAlKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzAwMGZmLCB0cmFuc3BhcmVudCA4MCUpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZWYxNTRiLCB0cmFuc3BhcmVudCA3MCUpLCBsaW5lYXItZ3JhZGllbnQoMjQwZGVnLCAjZWY2NTFlLCB0cmFuc3BhcmVudCA3MCUpLCBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjZmZjMDAwLCB0cmFuc3BhcmVudCA3MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBjb2xvclRyYW5zaXRpb24gNHMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwdmggLSAzMHJlbSAvIDIpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMC43NXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSkgZHJvcC1zaGFkb3coLTFweCAtMXB4IDAuNzVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpO1xuICB0cmFuc2l0aW9uOiB0b3AgLjVzO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIGgxOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogY2FsYyg1MHZ3IC0gMzByZW0gLyAyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHJpZ2h0OiBjYWxjKDUwdncgLSAzMHJlbSAvIDIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNXB4IGJsYWNrKSBkcm9wLXNoYWRvdygtMnB4IC0ycHggNXB4IGJsYWNrKTtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIge1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMzByZW07XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDcwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzAlLCA3MCUgMTAwJSwgMzAlIDEwMCUsIDAlIDcwJSwgMCUgMzAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IHdpZHRoIC41cywgaGVpZ2h0IC41cztcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxJSwgLTEwJSwgMCk7XG4gIGFuaW1hdGlvbjogc2xpZGVCdXR0b25zMSAxNXMgbGluZWFyIGluZmluaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWQ1OWY7XG4gIGNvbG9yOiAjMGEyZDBjO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDEpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMmQwYztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3Y2JmZjtcbiAgY29sb3I6ICMwOTAwNDc7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoMik6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwMDQ3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkNGZmO1xuICBjb2xvcjogIzIyMDA0ODtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCgzKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjAwNDg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmJjYmE7XG4gIGNvbG9yOiAjNTgwNjFkO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4MDYxZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZGFiMztcbiAgY29sb3I6ICMzNzE1MDc7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoNSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzcxNTA3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAlLCAwKTtcbiAgYW5pbWF0aW9uOiBzbGlkZUJ1dHRvbnMyIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZDU5ZjtcbiAgY29sb3I6ICMwYTJkMGM7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoMSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEyZDBjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjYmZmO1xuICBjb2xvcjogIzA5MDA0NztcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCgyKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTAwNDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmQ0ZmY7XG4gIGNvbG9yOiAjMjIwMDQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDMpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMDA0ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYmNiYTtcbiAgY29sb3I6ICM1ODA2MWQ7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoNCk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgwNjFkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZkYWIzO1xuICBjb2xvcjogIzM3MTUwNztcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCg1KTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzE1MDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgQGtleWZyYW1lcyBwdWxzaW5nQnV0dG9ucyB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMSB7XG4gICAgdG9wOiBjYWxjKDUwdmggLSAyMHJlbSAvIDEuNzUpO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlLXdyYXAgaDE6Zmlyc3QtY2hpbGQge1xuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDIwcmVtIC8gMS43NSk7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgcmlnaHQ6IGNhbGMoNTB2dyAtIDIwcmVtIC8gMS43NSk7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiAyMiU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhIHtcbiAgICBhbmltYXRpb246IHB1bHNpbmdCdXR0b25zIDFzIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgfVxuICAuY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cbiIsIkBtaXhpbiBjZW50ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlOyBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgge1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuIiwiJGhvbWUtMS1kYXJrOiAjMGEyZDBjO1xuJGhvbWUtMTogIzFlN2YyNDtcbiRob21lLTEtbGlnaHQ6ICM5ZWQ1OWY7XG4kaG9tZS0yLWRhcms6ICMwOTAwNDc7XG4kaG9tZS0yOiAjMjYwMGZmO1xuJGhvbWUtMi1saWdodDogI2I3Y2JmZjtcbiRob21lLTMtZGFyazogIzIyMDA0ODtcbiRob21lLTM6ICM3MDAwZmY7XG4kaG9tZS0zLWxpZ2h0OiAjZjJkNGZmO1xuJGhvbWUtNC1kYXJrOiAjNTgwNjFkO1xuJGhvbWUtNDogI2VmMTU0YjtcbiRob21lLTQtbGlnaHQ6ICNlZmJjYmE7XG4kaG9tZS01LWRhcms6ICMzNzE1MDc7XG4kaG9tZS01LXNlbWktZGFyazogIzkwM2IxMjtcbiRob21lLTU6ICNlZjY1MWU7XG4kaG9tZS01LWxpZ2h0OiAjZWZkYWIzO1xuJGhvbWUtNi1kYXJrOiAjNDY0MjBhO1xuJGhvbWUtNjogI2ZmYzAwMDtcbiRob21lLTYtbGlnaHQ6ICNmOWZmZDc7XG5cbiRsaWdodC1ncmV5OiAjYWNhY2FjO1xuIl19 */"]
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
  "./src/app/pages/image-detection/image-detection.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/image-detection/image-detection.component.ts ***!
    \********************************************************************/

  /*! exports provided: ImageDetectionComponent */

  /***/
  function srcAppPagesImageDetectionImageDetectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageDetectionComponent", function () {
      return ImageDetectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @tensorflow-models/mobilenet */
    "./node_modules/@tensorflow-models/mobilenet/dist/mobilenet.esm.js");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageDetectionComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Image loading ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ImageDetectionComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r13.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ImageDetectionComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pred_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", pred_r15.className, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, pred_r15.probability), " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        borderColor: a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        color: a0
      };
    };

    ;

    var ImageDetectionComponent = /*#__PURE__*/function () {
      function ImageDetectionComponent() {
        _classCallCheck(this, ImageDetectionComponent);

        this.menuColor = '#7a4349';
      }

      _createClass(ImageDetectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loading = true;
                    _context.next = 3;
                    return _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_2__["load"]();

                  case 3:
                    this.model = _context.sent;
                    this.loading = false;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fileChange",
        value: function fileChange(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this11 = this;

            var file, reader;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    file = event.target.files[0];

                    if (!!file) {
                      reader = new FileReader();
                      reader.readAsDataURL(file);

                      reader.onload = function (res) {
                        _this11.imgSrc = res.target.result;
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return this.model.classify(document.getElementById("input-image"));

                                  case 2:
                                    this.predictions = _context2.sent;

                                  case 3:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                      };
                    }

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }]);

      return ImageDetectionComponent;
    }();

    ImageDetectionComponent.ɵfac = function ImageDetectionComponent_Factory(t) {
      return new (t || ImageDetectionComponent)();
    };

    ImageDetectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ImageDetectionComponent,
      selectors: [["app-image-detection"]],
      decls: 13,
      vars: 9,
      consts: [[1, "container"], [3, "wrapperStyle", "linkStyle"], [1, "content-wrapper"], [1, "content"], [1, "custom-file"], ["for", "image"], ["id", "image", "type", "file", 1, "custom-file-input", 3, "change"], [4, "ngIf", "ngIfElse"], ["inputImage", ""], [1, "predictions"], [4, "ngFor", "ngForOf"], ["id", "input-image", "alt", "", 3, "src"]],
      template: function ImageDetectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select an image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ImageDetectionComponent_Template_input_change_7_listener($event) {
            return ctx.fileChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ImageDetectionComponent_div_8_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ImageDetectionComponent_ng_template_9_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ImageDetectionComponent_div_12_Template, 3, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("wrapperStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.menuColor))("linkStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.menuColor));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.predictions);
        }
      },
      directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('tree-alley.png');\n  background-size: cover;\n}\n\n.container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 52.5%;\n  width: 90%;\n  max-width: 30rem;\n  height: 80%;\n  background-color: rgba(249, 249, 249, 0.81);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2rem 0;\n}\n\n.container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #7a4349;\n  font-family: 'Reenie Beanie', cursive;\n  font-size: 1.5rem;\n}\n\n.container[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 90%;\n  max-height: 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9pbWFnZS1kZXRlY3Rpb24vaW1hZ2UtZGV0ZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbWFnZS1kZXRlY3Rpb24vaW1hZ2UtZGV0ZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxzSEFFdUM7RUFDdkMsc0JBQXNCO0FDWHhCOztBRE9BO0VFVEUsZUFBZTtFQUNmLFFBQVE7RUFBRSxTQUFTO0VBQ25CLGdDQUFnQztFRmtCNUIsVUFBVTtFQUNWLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDJDQXJCcUM7RUFzQnJDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQ1Z6Qjs7QURUQTtFQXNCUSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0FDVHRCOztBRGhCQTtFQWdDVSxjQXZDYztFQXdDZCxxQ0FBcUM7RUFDckMsaUJBQWlCO0FDWjNCOztBRHRCQTtFQXVDUSxjQUFjO0VBQ2QsaUJBQWlCO0FDYnpCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW1hZ2UtZGV0ZWN0aW9uL2ltYWdlLWRldGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9nbG9iYWxzXCI7XG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvbWl4aW5zXCI7XG5cbiRpbWFnZS1yZWQtZGFyazogIzdhNDM0OTtcbiRpbWFnZS1yZWQtbGlnaHQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC44MSk7XG5cbi8vOmV4cG9ydCB7XG4vLyAgaW1hZ2UtZGFyay1yZWQ6ICRpbWFnZS1yZWQtZGFyaztcbi8vfVxuXG4uY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKSxcbiAgICB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvdHJlZS1hbGxleS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG5cbiAgICAuY29udGVudCB7XG4gICAgICBAaW5jbHVkZSBjZW50ZXI7XG5cbiAgICAgIHRvcDogNTIuNSU7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICAgIGhlaWdodDogODAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGltYWdlLXJlZC1saWdodDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5jdXN0b20tZmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xuXG4gICAgICAgIC5jdXN0b20tZmlsZS1pbnB1dCB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBjb2xvcjogJGltYWdlLXJlZC1kYXJrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xuICAgICAgfVxuXG4gICAgICAucHJlZGljdGlvbnMge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSksIHVybChcIn5zcmMvYXNzZXRzL2ltZy90cmVlLWFsbGV5LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciAuY29udGVudC13cmFwcGVyIC5jb250ZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdG9wOiA1Mi41JTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC44MSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIgLmNvbnRlbnQtd3JhcHBlciAuY29udGVudCAuY3VzdG9tLWZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLmNvbnRhaW5lciAuY29udGVudC13cmFwcGVyIC5jb250ZW50IC5jdXN0b20tZmlsZSBsYWJlbCB7XG4gIGNvbG9yOiAjN2E0MzQ5O1xuICBmb250LWZhbWlseTogJ1JlZW5pZSBCZWFuaWUnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbnRhaW5lciAuY29udGVudC13cmFwcGVyIC5jb250ZW50IGltZyB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiAyMHJlbTtcbn1cbiIsIkBtaXhpbiBjZW50ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlOyBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgge1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImageDetectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-image-detection',
          templateUrl: './image-detection.component.html',
          styleUrls: ['./image-detection.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/sunset/sunset.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/sunset/sunset.component.ts ***!
    \**************************************************/

  /*! exports provided: SunsetComponent */

  /***/
  function srcAppPagesSunsetSunsetComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      consts: [[1, "container", "container-black"], [1, "page-link", 3, "routerLink"], [1, "box"], [1, "cloud-box"], [1, "cloud-4"], [1, "cloud-3"], [1, "cloud-2"], [1, "cloud-1"], [1, "sun3"], [1, "sun2"], [1, "sun1"], [1, "ground"], [1, "cloud-shadow-box"], [1, "cloud-shadow-flip"], [1, "cloud-shadow-4"], [1, "cloud-shadow-3"], [1, "cloud-shadow-2"], [1, "cloud-shadow-1"]],
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
      styles: ["a[_ngcontent-%COMP%] {\n  margin-left: 0;\n  position: absolute;\n  top: calc(100vh - 420px - (100vh - 420px) / 2 - 3rem);\n  left: calc(100vw - 600px - (100vw - 600px) / 2);\n}\n@media screen and (max-width: 600px) {\n  a[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n  width: 600px;\n  height: 420px;\n  background-image: linear-gradient(to bottom right, #1c035e, #ce2801, #ce2801);\n  overflow: hidden;\n}\n\n.ground[_ngcontent-%COMP%] {\n  width: 120%;\n  height: 40%;\n  position: absolute;\n  left: -10%;\n  bottom: -10%;\n  background-image: linear-gradient(to bottom, #6FB23E, #257b21 30%, #10340f);\n  z-index: 5;\n  border-top-left-radius: 50%;\n  transform: skew(-5deg, -2deg);\n  overflow: hidden;\n}\n.ground[_ngcontent-%COMP%]::after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: linear-gradient(-90deg, rgba(206, 107, 47, 0.37), transparent, rgba(28, 3, 94, 0.27));\n  border-top-left-radius: 50%;\n}\n\n@-webkit-keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.sun1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60%;\n  height: calc(60% * 1.2);\n  top: 12%;\n  left: calc((100% - 60%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 174, 36, 0.76), #cec894);\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80%;\n  height: calc(80% * 1.2);\n  top: 12%;\n  left: calc((100% - 80%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 83, 29, 0.76), rgba(206, 146, 50, 0.76));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun3[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% * 1.2);\n  top: 12%;\n  left: calc((100% - 100%) / 2);\n  background-image: linear-gradient(90deg, rgba(168, 10, 36, 0.75) 10%, rgba(206, 76, 9, 0.75));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n  left: 25%;\n}\n\n@-webkit-keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n@keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n.cloud-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: 30%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-shadow-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: -10%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-shadow-flip[_ngcontent-%COMP%] {\n  transform: scaleY(-1);\n}\n.cloud-shadow-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9wYWdlcy9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsV0FBQTtBQVdBLHFCQUFBO0FBVUEsV0FBQTtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxREFBNkQ7RUFDN0QsK0NBQXVEO0FDdEJ6RDtBRHdCRTtFQU5GO0lBT0ksT0FBTztFQ3BCVDtBQUNGO0FEdUJBO0VFcENFLGVBQWU7RUFDZixRQUFRO0VBQUUsU0FBUztFQUNuQixnQ0FBZ0M7RUZxQ2hDLGNBQWM7RUFDZCxZQXpCVztFQTBCWCxhQXpCVztFQTBCWCw2RUFBNkU7RUFDN0UsZ0JBQWdCO0FDbEJsQjtBRHFCQSxXQUFBO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLDJFQW5Ec0U7RUFvRHRFLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQ25CbEI7QURzQkE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUdBOUR1RztFQStEdkcsMkJBQTJCO0FDbkI3QjtBRHNCQSxRQUFBO0FBY0E7RUFDRTtJQUFPLG1CQUFtQjtFQy9CMUI7RURnQ0E7SUFBTSxzQkFBc0I7RUM3QjVCO0VEOEJBO0lBQUssbUJBQW1CO0VDM0J4QjtBQUNGO0FEdUJBO0VBQ0U7SUFBTyxtQkFBbUI7RUMvQjFCO0VEZ0NBO0lBQU0sc0JBQXNCO0VDN0I1QjtFRDhCQTtJQUFLLG1CQUFtQjtFQzNCeEI7QUFDRjtBRDZCQTtFQWpCRSxrQkFBa0I7RUFDbEIsVUFpQmdCO0VBaEJoQix1QkFBNkI7RUFDN0IsUUFBUTtFQUNSLDRCQUFrQztFQUNsQywyRUF4RW9FO0VBeUVwRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUNScEM7QURxQkE7RUFyQkUsa0JBQWtCO0VBQ2xCLFVBcUJnQjtFQXBCaEIsdUJBQTZCO0VBQzdCLFFBQVE7RUFDUiw0QkFBa0M7RUFDbEMsMkZBdkVvRjtFQXdFcEYsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FDSXBDO0FEYUE7RUF6QkUsa0JBQWtCO0VBQ2xCLFdBeUJpQjtFQXhCakIsd0JBQTZCO0VBQzdCLFFBQVE7RUFDUiw2QkFBa0M7RUFDbEMsNkZBdEVzRjtFQXVFdEYsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBb0JsQyxTQUFTO0FDSFg7QURNQSxXQUFBO0FBc0JBO0VBQ0U7SUFBTyw0QkFBNEI7RUN2Qm5DO0VEd0JBO0lBQUssMkJBQTJCO0VDckJoQztBQUNGO0FEa0JBO0VBQ0U7SUFBTyw0QkFBNEI7RUN2Qm5DO0VEd0JBO0lBQUssMkJBQTJCO0VDckJoQztBQUNGO0FEdUJBO0VBZEUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFZc0I7RUFYdEIsU0FXMkI7RUFWM0IsbURBQTJDO1VBQTNDLDJDQUEyQztFQUMzQyxVQUFVO0FDTFo7QURpQkE7RUE1QkUsV0F6Rm9CO0VBMEZwQixZQTFGb0I7RUEyRnBCLGtCQUFrQjtFQUNsQixVQTBCc0Q7RUF6QnRELFNBeUJ5RDtFQXhCekQscUdBdEcrRjtFQXVHL0Ysa0JBQWtCO0FDZXBCO0FEV0E7RUFoQ0UsV0F4RnFCO0VBeUZyQixZQXpGcUI7RUEwRnJCLGtCQUFrQjtFQUNsQixVQThCd0Q7RUE3QnhELFlBNkI4RDtFQTVCOUQscUdBdEcrRjtFQXVHL0Ysa0JBQWtCO0FDeUJwQjtBREtBO0VBcENFLFlBdkZpQjtFQXdGakIsYUF2RmlCO0VBd0ZqQixrQkFBa0I7RUFDbEIsV0FrQytDO0VBakMvQyxZQWlDcUQ7RUFoQ3JELHFHQXRHK0Y7RUF1Ry9GLGtCQUFrQjtBQ21DcEI7QUREQTtFQXhDRSxXQXpGb0I7RUEwRnBCLFlBMUZvQjtFQTJGcEIsa0JBQWtCO0VBQ2xCLFdBc0N1RDtFQXJDdkQsU0FxQzBEO0VBcEMxRCxxR0F0RytGO0VBdUcvRixrQkFBa0I7QUM2Q3BCO0FEUEE7RUFsQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FnQ3VCO0VBL0J2QixTQStCNEI7RUE5QjVCLG1EQUEyQztVQUEzQywyQ0FBMkM7RUFDM0MsVUFBVTtBQzZDWjtBRGJBO0VBQ0UscUJBQXFCO0FDZ0J2QjtBRGJBO0VBcERFLFdBekZvQjtFQTBGcEIsWUExRm9CO0VBMkZwQixrQkFBa0I7RUFDbEIsVUFrRHNEO0VBakR0RCxTQWlEeUQ7RUFoRHpELHFHQXRHK0Y7RUF1Ry9GLGtCQUFrQjtFQWlEbEIsd0VBdkptRTtBQzRLckU7QURsQkE7RUExREUsV0F4RnFCO0VBeUZyQixZQXpGcUI7RUEwRnJCLGtCQUFrQjtFQUNsQixVQXdEd0Q7RUF2RHhELFlBdUQ4RDtFQXREOUQscUdBdEcrRjtFQXVHL0Ysa0JBQWtCO0VBdURsQix3RUE3Sm1FO0FDdUxyRTtBRHZCQTtFQWhFRSxZQXZGaUI7RUF3RmpCLGFBdkZpQjtFQXdGakIsa0JBQWtCO0VBQ2xCLFdBOEQrQztFQTdEL0MsWUE2RHFEO0VBNURyRCxxR0F0RytGO0VBdUcvRixrQkFBa0I7RUE2RGxCLHdFQW5LbUU7QUNrTXJFO0FENUJBO0VBdEVFLFdBekZvQjtFQTBGcEIsWUExRm9CO0VBMkZwQixrQkFBa0I7RUFDbEIsV0FvRXVEO0VBbkV2RCxTQW1FMEQ7RUFsRTFELHFHQXRHK0Y7RUF1Ry9GLGtCQUFrQjtFQW1FbEIsd0VBekttRTtBQzZNckUiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2dsb2JhbHNcIjtcblxuLyogQ29sb3JzICovXG4kZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNkZCMjNFLCAjMjU3YjIxIDMwJSwgIzEwMzQwZik7XG4kZ3JvdW5kLXJlZmxlY3Rpb246IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMjA2LCAxMDcsIDQ3LCAwLjM3KSwgdHJhbnNwYXJlbnQsIHJnYmEoMjgsIDMsIDk0LCAwLjI3KSk7XG5cbiRzdW4xLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA2LCAxNzQsIDM2LCAwLjc2KSwgI2NlYzg5NCk7XG4kc3VuMi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNiwgODMsIDI5LCAwLjc2KSwgcmdiYSgyMDYsIDE0NiwgNTAsIDAuNzYpKTtcbiRzdW4zLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LCAxMCwgMzYsIDAuNzUpIDEwJSwgcmdiYSgyMDYsIDc2LCA5LCAwLjc1KSk7XG5cbiRjbG91ZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4kY2xvdWQtc2hhZG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAxOSwgMCwgMC4zMSkgMzAlLCB0cmFuc3BhcmVudCk7XG5cbi8qIE51bWVyaWNhbCB2YWx1ZXMgKi9cblxuJGJveC14OiA2MDBweDtcbiRib3gteTogNDIwcHg7XG5cbiRzbWFsbC1jbG91ZC13LWg6IDUwcHg7XG4kbWlkZGxlLWNsb3VkLXctaDogODBweDtcbiRiaWctY2xvdWQtdzogMTEwcHg7XG4kYmlnLWNsb3VkLWg6IDEwMHB4O1xuXG4vKiBMYXlvdXQgKi9cblxuYSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDB2aCAtICN7JGJveC15fSAtICgxMDB2aCAtICN7JGJveC15fSkgLyAyIC0gM3JlbSk7XG4gIGxlZnQ6IGNhbGMoMTAwdncgLSAjeyRib3gteH0gLSAoMTAwdncgLSAjeyRib3gteH0pIC8gMik7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJveC14KSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uYm94IHtcbiAgQGluY2x1ZGUgY2VudGVyO1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogJGJveC14O1xuICBoZWlnaHQ6ICRib3gteTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzFjMDM1ZSwgI2NlMjgwMSwgI2NlMjgwMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEdyb3VuZCAqL1xuXG4uZ3JvdW5kIHtcbiAgd2lkdGg6IDEyMCU7XG4gIGhlaWdodDogNDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMCU7XG4gIGJvdHRvbTogLTEwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogJGdyb3VuZC1jb2xvcjtcbiAgei1pbmRleDogNTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcsIC0yZGVnKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdyb3VuZDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAkZ3JvdW5kLXJlZmxlY3Rpb247XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbn1cblxuLyogU3VuICovXG5cbkBtaXhpbiBzdW4oJHdpZHRoLCAkekluZGV4LCAkY29sb3IsICRhbmltYXRpb25EdXJhdGlvbikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogY2FsYygjeyR3aWR0aH0gKiAxLjIpO1xuICB0b3A6IDEyJTtcbiAgbGVmdDogY2FsYygoMTAwJSAtICN7JHdpZHRofSkgLyAyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogJGNvbG9yO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDQ7XG4gIGFuaW1hdGlvbjogcHVsc2luZy1zdW4gNXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2luZy1zdW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgxKSB9XG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgfVxuICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMSkgfVxufVxuXG4uc3VuMSB7XG4gIEBpbmNsdWRlIHN1big2MCUsIDMsICRzdW4xLWNvbG9yLCA1cyk7XG59XG5cbi5zdW4yIHtcbiAgQGluY2x1ZGUgc3VuKDgwJSwgNCwgJHN1bjItY29sb3IsIDRzKTtcbn1cblxuLnN1bjMge1xuICBAaW5jbHVkZSBzdW4oMTAwJSwgNSwgJHN1bjMtY29sb3IsIDNzKTtcblxuICBsZWZ0OiAyNSU7XG59XG5cbi8qIENsb3VkcyAqL1xuXG5AbWl4aW4gY2xvdWQoJHdpZHRoLCAkaGVpZ2h0LCAkcmlnaHQsICRib3R0b20pIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAkcmlnaHQ7XG4gIGJvdHRvbTogJGJvdHRvbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtaXhpbiBjbG91ZC1ib3goJHRvcCwgJGxlZnQpIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAkdG9wO1xuICBsZWZ0OiAkbGVmdDtcbiAgYW5pbWF0aW9uOiBtb3ZpbmctY2xvdWQgNDBzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogNztcbn1cblxuQGtleWZyYW1lcyBtb3ZpbmctY2xvdWQge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKSB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMyMCUpIH1cbn1cblxuLmNsb3VkLWJveCB7XG4gIEBpbmNsdWRlIGNsb3VkLWJveCgzMCUsIDIwJSk7XG59XG5cbi5jbG91ZC0xIHtcbiAgQGluY2x1ZGUgY2xvdWQoJHNtYWxsLWNsb3VkLXctaCwgJHNtYWxsLWNsb3VkLXctaCwgNjUlLCAwKTtcbn1cblxuLmNsb3VkLTIge1xuICBAaW5jbHVkZSBjbG91ZCgkbWlkZGxlLWNsb3VkLXctaCwgJG1pZGRsZS1jbG91ZC13LWgsIDIwJSwgLTIwJSk7XG59XG5cbi5jbG91ZC0zIHtcbiAgQGluY2x1ZGUgY2xvdWQoJGJpZy1jbG91ZC13LCAkYmlnLWNsb3VkLWgsIC0zMCUsIC0zMCUpO1xufVxuXG4uY2xvdWQtNCB7XG4gIEBpbmNsdWRlIGNsb3VkKCRzbWFsbC1jbG91ZC13LWgsICRzbWFsbC1jbG91ZC13LWgsIC01MCUsIDApO1xufVxuXG4uY2xvdWQtc2hhZG93LWJveCB7XG4gIEBpbmNsdWRlIGNsb3VkLWJveCgtMTAlLCAyMCUpO1xufVxuXG4uY2xvdWQtc2hhZG93LWZsaXAge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG5cbi5jbG91ZC1zaGFkb3ctMSB7XG4gIEBpbmNsdWRlIGNsb3VkKCRzbWFsbC1jbG91ZC13LWgsICRzbWFsbC1jbG91ZC13LWgsIDY1JSwgMCk7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLXNoYWRvdztcbn1cblxuLmNsb3VkLXNoYWRvdy0yIHtcbiAgQGluY2x1ZGUgY2xvdWQoJG1pZGRsZS1jbG91ZC13LWgsICRtaWRkbGUtY2xvdWQtdy1oLCAyMCUsIC0yMCUpO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjbG91ZC1zaGFkb3c7XG59XG5cbi5jbG91ZC1zaGFkb3ctMyB7XG4gIEBpbmNsdWRlIGNsb3VkKCRiaWctY2xvdWQtdywgJGJpZy1jbG91ZC1oLCAtMzAlLCAtMzAlKTtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiAkY2xvdWQtc2hhZG93O1xufVxuXG4uY2xvdWQtc2hhZG93LTQge1xuICBAaW5jbHVkZSBjbG91ZCgkc21hbGwtY2xvdWQtdy1oLCAkc21hbGwtY2xvdWQtdy1oLCAtNTAlLCAwKTtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiAkY2xvdWQtc2hhZG93O1xufVxuIiwiLyogQ29sb3JzICovXG4vKiBOdW1lcmljYWwgdmFsdWVzICovXG4vKiBMYXlvdXQgKi9cbmEge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwdmggLSA0MjBweCAtICgxMDB2aCAtIDQyMHB4KSAvIDIgLSAzcmVtKTtcbiAgbGVmdDogY2FsYygxMDB2dyAtIDYwMHB4IC0gKDEwMHZ3IC0gNjAwcHgpIC8gMik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGEge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxYzAzNWUsICNjZTI4MDEsICNjZTI4MDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91bmQgKi9cbi5ncm91bmQge1xuICB3aWR0aDogMTIwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwJTtcbiAgYm90dG9tOiAtMTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNkZCMjNFLCAjMjU3YjIxIDMwJSwgIzEwMzQwZik7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtMmRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncm91bmQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywgcmdiYSgyMDYsIDEwNywgNDcsIDAuMzcpLCB0cmFuc3BhcmVudCwgcmdiYSgyOCwgMywgOTQsIDAuMjcpKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xufVxuXG4vKiBTdW4gKi9cbkBrZXlmcmFtZXMgcHVsc2luZy1zdW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4uc3VuMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiBjYWxjKDYwJSAqIDEuMik7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiBjYWxjKCgxMDAlIC0gNjAlKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA2LCAxNzQsIDM2LCAwLjc2KSwgI2NlYzg5NCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNDtcbiAgYW5pbWF0aW9uOiBwdWxzaW5nLXN1biA1cyBpbmZpbml0ZTtcbn1cblxuLnN1bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogY2FsYyg4MCUgKiAxLjIpO1xuICB0b3A6IDEyJTtcbiAgbGVmdDogY2FsYygoMTAwJSAtIDgwJSkgLyAyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNiwgODMsIDI5LCAwLjc2KSwgcmdiYSgyMDYsIDE0NiwgNTAsIDAuNzYpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xufVxuXG4uc3VuMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICogMS4yKTtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAxMDAlKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LCAxMCwgMzYsIDAuNzUpIDEwJSwgcmdiYSgyMDYsIDc2LCA5LCAwLjc1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNDtcbiAgYW5pbWF0aW9uOiBwdWxzaW5nLXN1biA1cyBpbmZpbml0ZTtcbiAgbGVmdDogMjUlO1xufVxuXG4vKiBDbG91ZHMgKi9cbkBrZXlmcmFtZXMgbW92aW5nLWNsb3VkIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMyMCUpO1xuICB9XG59XG5cbi5jbG91ZC1ib3gge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogMjAlO1xuICBhbmltYXRpb246IG1vdmluZy1jbG91ZCA0MHMgbGluZWFyIGluZmluaXRlO1xuICB6LWluZGV4OiA3O1xufVxuXG4uY2xvdWQtMSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDY1JTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2xvdWQtMiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwJTtcbiAgYm90dG9tOiAtMjAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2xvdWQtMyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTMwJTtcbiAgYm90dG9tOiAtMzAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2xvdWQtNCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC01MCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLXNoYWRvdy1ib3gge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDIwJTtcbiAgYW5pbWF0aW9uOiBtb3ZpbmctY2xvdWQgNDBzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogNztcbn1cblxuLmNsb3VkLXNoYWRvdy1mbGlwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xufVxuXG4uY2xvdWQtc2hhZG93LTEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2NSU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMTksIDAsIDAuMzEpIDMwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uY2xvdWQtc2hhZG93LTIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMCU7XG4gIGJvdHRvbTogLTIwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMTksIDAsIDAuMzEpIDMwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uY2xvdWQtc2hhZG93LTMge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMCU7XG4gIGJvdHRvbTogLTMwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMTksIDAsIDAuMzEpIDMwJSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uY2xvdWQtc2hhZG93LTQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn1cbiIsIkBtaXhpbiBjZW50ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlOyBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gY2xlYXJmaXgge1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxufVxuIl19 */"]
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
  "./src/app/services/d3.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/d3.service.ts ***!
    \****************************************/

  /*! exports provided: D3Service */

  /***/
  function srcAppServicesD3ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D3Service", function () {
      return D3Service;
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


    var _models_d3_force_directed_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/d3/force-directed-graph */
    "./src/app/models/d3/force-directed-graph.ts");

    var D3Service = /*#__PURE__*/function () {
      /** This service will provide methods to enable user interaction with elements
       * while maintaining the d3 simulations physics
       */
      function D3Service() {
        _classCallCheck(this, D3Service);
      }
      /** A method to bind a pan and zoom behaviour to an svg element */


      _createClass(D3Service, [{
        key: "applyZoomableBehaviour",
        value: function applyZoomableBehaviour(svgElement, containerElement) {
          var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](svgElement);
          var container = d3__WEBPACK_IMPORTED_MODULE_1__["select"](containerElement);

          var zoomed = function zoomed() {
            var transform = d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform;
            container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
          };

          var zoom = d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]().on("zoom", zoomed);
          svg.call(zoom);
        }
        /** A method to bind a draggable behaviour to an svg element */

      }, {
        key: "applyDraggableBehaviour",
        value: function applyDraggableBehaviour(element, node, graph) {
          var d3Element = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element);

          function started() {
            /** Preventing propagation of dragstart to parent elements */
            d3__WEBPACK_IMPORTED_MODULE_1__["event"].sourceEvent.stopPropagation();

            if (!d3__WEBPACK_IMPORTED_MODULE_1__["event"].active) {
              graph.simulation.alphaTarget(0.3).restart();
            }

            function dragged() {
              node.x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x;
              node.y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y;
            }

            function ended() {
              if (!d3__WEBPACK_IMPORTED_MODULE_1__["event"].active) {
                graph.simulation.alphaTarget(-0.2);
              }
            }

            d3__WEBPACK_IMPORTED_MODULE_1__["event"].on("drag", dragged).on("end", ended);
          }

          d3Element.call(d3__WEBPACK_IMPORTED_MODULE_1__["drag"]().on("start", started));
        } // TODO: MAKE IT WORK
        // problem is that i have no access to the links here (is outside of element)

      }, {
        key: "applyMouseOverBehaviour",
        value: function applyMouseOverBehaviour(element, graph, node) {
          var d3Element = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element);
          var tooltip = d3__WEBPACK_IMPORTED_MODULE_1__["select"](".fdg-node-tooltip");

          function fade() {
            graph.links = graph.links.map(function (l) {
              return l.setHoverEffect(node);
            });
            graph.nodes = graph.nodes.map(function (n) {
              return n.setHoverEffect(isConnected(node, n));
            });
          }

          function mouseOut() {
            graph.nodes = graph.nodes.map(function (n) {
              return n.restoreAfterHover();
            });
            graph.links = graph.links.map(function (l) {
              return l.restoreAfterHover();
            });
          }

          function isConnected(a, b) {
            return linkedByIndex["".concat(a.index, ",").concat(b.index)] || linkedByIndex["".concat(b.index, ",").concat(a.index)] || a.index === b.index;
          }

          var linkedByIndex = {};
          graph.links.forEach(function (d) {
            linkedByIndex["".concat(d.source.index, ",").concat(d.target.index)] = 1;
          });
          d3Element.on('mouseover.fade', !!node ? fade : function () {}).on('mouseout', mouseOut).on('mouseover.tooltip', function (d) {
            tooltip.transition().duration(200).style("opacity", 1);
            tooltip.html(Math.round(node.amountAnswered / _models_d3_force_directed_graph__WEBPACK_IMPORTED_MODULE_2__["respondents"] * 100) + "%").style("left", node.x + window.innerWidth * .119 + "px").style("top", node.y + 12 + "px");
          }).on("mouseout.tooltip", function () {
            tooltip.transition().duration(100).style("opacity", 0);
          });
        }
        /** The interactable graph we will simulate in this article
         * This method does not interact with the document, purely physical calculations with d3
         */

      }, {
        key: "getForceDirectedGraph",
        value: function getForceDirectedGraph(nodes, links, options) {
          return new _models_d3_force_directed_graph__WEBPACK_IMPORTED_MODULE_2__["ForceDirectedGraph"](nodes, links, options);
        }
      }]);

      return D3Service;
    }();

    D3Service.ɵfac = function D3Service_Factory(t) {
      return new (t || D3Service)();
    };

    D3Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: D3Service,
      factory: D3Service.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](D3Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
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
  },

  /***/
  1:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!****************************!*\
    !*** node-fetch (ignored) ***!
    \****************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map