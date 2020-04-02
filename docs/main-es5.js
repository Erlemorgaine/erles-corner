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

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'sunset',
      component: _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_2__["SunsetComponent"]
    }, {
      path: 'charts',
      component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]
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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__["SunsetComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _sunset_sunset_component__WEBPACK_IMPORTED_MODULE_4__["SunsetComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_6__["ChartsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ChartsComponent = function ChartsComponent() {
      _classCallCheck(this, ChartsComponent);
    };

    ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
      return new (t || ChartsComponent)();
    };

    ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartsComponent,
      selectors: [["app-charts"]],
      decls: 19,
      vars: 1,
      consts: [[1, "container"], [1, "page-link", 3, "routerLink"], [1, "box"], [1, "cloud-box"], [1, "cloud-4"], [1, "cloud-3"], [1, "cloud-2"], [1, "cloud-1"], [1, "sun3"], [1, "sun2"], [1, "sun1"], [1, "ground"], [1, "cloud-shadow-box"], [1, "cloud-shadow-flip"], [1, "cloud-shadow-4"], [1, "cloud-shadow-3"], [1, "cloud-shadow-2"], [1, "cloud-shadow-1"]],
      template: function ChartsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terug naar huis");

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
      styles: ["a[_ngcontent-%COMP%] {\n  margin-left: 0;\n  position: absolute;\n  top: calc(100vh - 420px - (100vh - 420px) / 2 - 3rem);\n  left: calc(100vw - 600px - (100vw - 600px) / 2);\n}\n@media screen and (max-width: 600px) {\n  a[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n}\n.box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n  width: 600px;\n  height: 420px;\n  background-image: linear-gradient(to bottom right, #1c035e, #ce2801, #ce2801);\n  overflow: hidden;\n}\n\n.ground[_ngcontent-%COMP%] {\n  width: 120%;\n  height: 40%;\n  position: absolute;\n  left: -10%;\n  bottom: -10%;\n  background-image: linear-gradient(to bottom, #6FB23E, #257b21 30%, #10340f);\n  z-index: 5;\n  border-top-left-radius: 50%;\n  transform: skew(-5deg, -2deg);\n  overflow: hidden;\n}\n.ground[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: linear-gradient(-90deg, rgba(206, 107, 47, 0.37), transparent, rgba(28, 3, 94, 0.27));\n  border-top-left-radius: 50%;\n}\n\n@-webkit-keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.sun1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60%;\n  height: calc(60% * 1.2);\n  top: 12%;\n  left: calc((100% - 60%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 174, 36, 0.76), #cec894);\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80%;\n  height: calc(80% * 1.2);\n  top: 12%;\n  left: calc((100% - 80%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 83, 29, 0.76), rgba(206, 146, 50, 0.76));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun3[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% * 1.2);\n  top: 12%;\n  left: calc((100% - 100%) / 2);\n  background-image: linear-gradient(90deg, rgba(168, 10, 36, 0.75) 10%, rgba(206, 76, 9, 0.75));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n  left: 25%;\n}\n\n@-webkit-keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n@keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n.cloud-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: 30%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-shadow-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: -10%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-shadow-flip[_ngcontent-%COMP%] {\n  transform: scaleY(-1);\n}\n.cloud-shadow-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsV0FBQTtBQVdBLHFCQUFBO0FBVUEsV0FBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSwrQ0FBQTtBQ3RCRjtBRHdCRTtFQU5GO0lBT0ksT0FBQTtFQ3JCRjtBQUNGO0FEd0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3JCRjtBRHdCQTtFRTVDRSxlQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFDVixnQ0FBQTtFRjZDQSxjQUFBO0VBQ0EsWUFqQ007RUFrQ04sYUFqQ007RUFrQ04sNkVBQUE7RUFDQSxnQkFBQTtBQ25CRjtBRHNCQSxXQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwyRUEzRGE7RUE0RGIsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUdBdEVrQjtFQXVFbEIsMkJBQUE7QUNwQkY7QUR1QkEsUUFBQTtBQWNBO0VBQ0U7SUFBTyxtQkFBQTtFQ2hDUDtFRGlDQTtJQUFNLHNCQUFBO0VDOUJOO0VEK0JBO0lBQUssbUJBQUE7RUM1Qkw7QUFDRjtBRHdCQTtFQUNFO0lBQU8sbUJBQUE7RUNoQ1A7RURpQ0E7SUFBTSxzQkFBQTtFQzlCTjtFRCtCQTtJQUFLLG1CQUFBO0VDNUJMO0FBQ0Y7QUQ4QkE7RUFqQkUsa0JBQUE7RUFDQSxVQWlCYTtFQWhCYix1QkFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLDJFQWhGVztFQWlGWCxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDVkY7QUR1QkE7RUFyQkUsa0JBQUE7RUFDQSxVQXFCYTtFQXBCYix1QkFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLDJGQS9FVztFQWdGWCxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDRUY7QURlQTtFQXpCRSxrQkFBQTtFQUNBLFdBeUJhO0VBeEJiLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkZBOUVXO0VBK0VYLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFvQkEsU0FBQTtBQ0xGO0FEUUEsV0FBQTtBQXNCQTtFQUNFO0lBQU8sNEJBQUE7RUN6QlA7RUQwQkE7SUFBSywyQkFBQTtFQ3ZCTDtBQUNGO0FEb0JBO0VBQ0U7SUFBTyw0QkFBQTtFQ3pCUDtFRDBCQTtJQUFLLDJCQUFBO0VDdkJMO0FBQ0Y7QUR5QkE7RUFkRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFZbUI7RUFYbkIsU0FXd0I7RUFWeEIsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLFVBQUE7QUNSRjtBRG9CQTtFQTVCRSxXQWpHZ0I7RUFrR2hCLFlBbEdnQjtFQW1HaEIsa0JBQUE7RUFDQSxVQTBCbUQ7RUF6Qm5ELFNBeUJ3RDtFQXhCeEQscUdBOUdZO0VBK0daLGtCQUFBO0FDWUY7QURjQTtFQWhDRSxXQWhHaUI7RUFpR2pCLFlBakdpQjtFQWtHakIsa0JBQUE7RUFDQSxVQThCcUQ7RUE3QnJELFlBNkIwRDtFQTVCMUQscUdBOUdZO0VBK0daLGtCQUFBO0FDc0JGO0FEUUE7RUFwQ0UsWUEvRlk7RUFnR1osYUEvRlk7RUFnR1osa0JBQUE7RUFDQSxXQWtDMkM7RUFqQzNDLFlBaUNpRDtFQWhDakQscUdBOUdZO0VBK0daLGtCQUFBO0FDZ0NGO0FERUE7RUF4Q0UsV0FqR2dCO0VBa0doQixZQWxHZ0I7RUFtR2hCLGtCQUFBO0VBQ0EsV0FzQ21EO0VBckNuRCxTQXFDeUQ7RUFwQ3pELHFHQTlHWTtFQStHWixrQkFBQTtBQzBDRjtBREpBO0VBbENFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQWdDbUI7RUEvQm5CLFNBK0J5QjtFQTlCekIsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLFVBQUE7QUMwQ0Y7QURWQTtFQUNFLHFCQUFBO0FDYUY7QURWQTtFQXBERSxXQWpHZ0I7RUFrR2hCLFlBbEdnQjtFQW1HaEIsa0JBQUE7RUFDQSxVQWtEbUQ7RUFqRG5ELFNBaUR3RDtFQWhEeEQscUdBOUdZO0VBK0daLGtCQUFBO0VBaURBLHdFQS9KYTtBQ2lMZjtBRGZBO0VBMURFLFdBaEdpQjtFQWlHakIsWUFqR2lCO0VBa0dqQixrQkFBQTtFQUNBLFVBd0RxRDtFQXZEckQsWUF1RDBEO0VBdEQxRCxxR0E5R1k7RUErR1osa0JBQUE7RUF1REEsd0VBckthO0FDNExmO0FEcEJBO0VBaEVFLFlBL0ZZO0VBZ0daLGFBL0ZZO0VBZ0daLGtCQUFBO0VBQ0EsV0E4RDJDO0VBN0QzQyxZQTZEaUQ7RUE1RGpELHFHQTlHWTtFQStHWixrQkFBQTtFQTZEQSx3RUEzS2E7QUN1TWY7QUR6QkE7RUF0RUUsV0FqR2dCO0VBa0doQixZQWxHZ0I7RUFtR2hCLGtCQUFBO0VBQ0EsV0FvRW1EO0VBbkVuRCxTQW1FeUQ7RUFsRXpELHFHQTlHWTtFQStHWixrQkFBQTtFQW1FQSx3RUFqTGE7QUNrTmYiLCJmaWxlIjoic3JjL2FwcC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuLyogQ29sb3JzICovXG4kZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNkZCMjNFLCAjMjU3YjIxIDMwJSwgIzEwMzQwZik7XG4kZ3JvdW5kLXJlZmxlY3Rpb246IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMjA2LCAxMDcsIDQ3LCAwLjM3KSwgdHJhbnNwYXJlbnQsIHJnYmEoMjgsIDMsIDk0LCAwLjI3KSk7XG5cbiRzdW4xLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA2LCAxNzQsIDM2LCAwLjc2KSwgI2NlYzg5NCk7XG4kc3VuMi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNiwgODMsIDI5LCAwLjc2KSwgcmdiYSgyMDYsIDE0NiwgNTAsIDAuNzYpKTtcbiRzdW4zLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LCAxMCwgMzYsIDAuNzUpIDEwJSwgcmdiYSgyMDYsIDc2LCA5LCAwLjc1KSk7XG5cbiRjbG91ZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4kY2xvdWQtc2hhZG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAxOSwgMCwgMC4zMSkgMzAlLCB0cmFuc3BhcmVudCk7XG5cbi8qIE51bWVyaWNhbCB2YWx1ZXMgKi9cblxuJGJveC14OiA2MDBweDtcbiRib3gteTogNDIwcHg7XG5cbiRzbWFsbC1jbG91ZC13LWg6IDUwcHg7XG4kbWlkZGxlLWNsb3VkLXctaDogODBweDtcbiRiaWctY2xvdWQtdzogMTEwcHg7XG4kYmlnLWNsb3VkLWg6IDEwMHB4O1xuXG4vKiBMYXlvdXQgKi9cblxuYSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDB2aCAtICN7JGJveC15fSAtICgxMDB2aCAtICN7JGJveC15fSkgLyAyIC0gM3JlbSk7XG4gIGxlZnQ6IGNhbGMoMTAwdncgLSAjeyRib3gteH0gLSAoMTAwdncgLSAjeyRib3gteH0pIC8gMik7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJveC14KSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJveCB7XG4gIEBpbmNsdWRlIGNlbnRlcjtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICRib3gteDtcbiAgaGVpZ2h0OiAkYm94LXk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxYzAzNWUsICNjZTI4MDEsICNjZTI4MDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91bmQgKi9cblxuLmdyb3VuZCB7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAlO1xuICBib3R0b206IC0xMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRncm91bmQtY29sb3I7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtMmRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncm91bmQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogJGdyb3VuZC1yZWZsZWN0aW9uO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN1biAqL1xuXG5AbWl4aW4gc3VuKCR3aWR0aCwgJHpJbmRleCwgJGNvbG9yLCAkYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6IGNhbGMoI3skd2lkdGh9ICogMS4yKTtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAjeyR3aWR0aH0pIC8gMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNpbmctc3VuIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMSkgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIH1cbiAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpIH1cbn1cblxuLnN1bjEge1xuICBAaW5jbHVkZSBzdW4oNjAlLCAzLCAkc3VuMS1jb2xvciwgNXMpO1xufVxuXG4uc3VuMiB7XG4gIEBpbmNsdWRlIHN1big4MCUsIDQsICRzdW4yLWNvbG9yLCA0cyk7XG59XG5cbi5zdW4zIHtcbiAgQGluY2x1ZGUgc3VuKDEwMCUsIDUsICRzdW4zLWNvbG9yLCAzcyk7XG5cbiAgbGVmdDogMjUlO1xufVxuXG4vKiBDbG91ZHMgKi9cblxuQG1peGluIGNsb3VkKCR3aWR0aCwgJGhlaWdodCwgJHJpZ2h0LCAkYm90dG9tKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjbG91ZC1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5AbWl4aW4gY2xvdWQtYm94KCR0b3AsICRsZWZ0KSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHRvcDtcbiAgbGVmdDogJGxlZnQ7XG4gIGFuaW1hdGlvbjogbW92aW5nLWNsb3VkIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gIHotaW5kZXg6IDc7XG59XG5cbkBrZXlmcmFtZXMgbW92aW5nLWNsb3VkIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1JSkgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMjAlKSB9XG59XG5cbi5jbG91ZC1ib3gge1xuICBAaW5jbHVkZSBjbG91ZC1ib3goMzAlLCAyMCUpO1xufVxuXG4uY2xvdWQtMSB7XG4gIEBpbmNsdWRlIGNsb3VkKCRzbWFsbC1jbG91ZC13LWgsICRzbWFsbC1jbG91ZC13LWgsIDY1JSwgMCk7XG59XG5cbi5jbG91ZC0yIHtcbiAgQGluY2x1ZGUgY2xvdWQoJG1pZGRsZS1jbG91ZC13LWgsICRtaWRkbGUtY2xvdWQtdy1oLCAyMCUsIC0yMCUpO1xufVxuXG4uY2xvdWQtMyB7XG4gIEBpbmNsdWRlIGNsb3VkKCRiaWctY2xvdWQtdywgJGJpZy1jbG91ZC1oLCAtMzAlLCAtMzAlKTtcbn1cblxuLmNsb3VkLTQge1xuICBAaW5jbHVkZSBjbG91ZCgkc21hbGwtY2xvdWQtdy1oLCAkc21hbGwtY2xvdWQtdy1oLCAtNTAlLCAwKTtcbn1cblxuLmNsb3VkLXNoYWRvdy1ib3gge1xuICBAaW5jbHVkZSBjbG91ZC1ib3goLTEwJSwgMjAlKTtcbn1cblxuLmNsb3VkLXNoYWRvdy1mbGlwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xufVxuXG4uY2xvdWQtc2hhZG93LTEge1xuICBAaW5jbHVkZSBjbG91ZCgkc21hbGwtY2xvdWQtdy1oLCAkc21hbGwtY2xvdWQtdy1oLCA2NSUsIDApO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjbG91ZC1zaGFkb3c7XG59XG5cbi5jbG91ZC1zaGFkb3ctMiB7XG4gIEBpbmNsdWRlIGNsb3VkKCRtaWRkbGUtY2xvdWQtdy1oLCAkbWlkZGxlLWNsb3VkLXctaCwgMjAlLCAtMjAlKTtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiAkY2xvdWQtc2hhZG93O1xufVxuXG4uY2xvdWQtc2hhZG93LTMge1xuICBAaW5jbHVkZSBjbG91ZCgkYmlnLWNsb3VkLXcsICRiaWctY2xvdWQtaCwgLTMwJSwgLTMwJSk7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLXNoYWRvdztcbn1cblxuLmNsb3VkLXNoYWRvdy00IHtcbiAgQGluY2x1ZGUgY2xvdWQoJHNtYWxsLWNsb3VkLXctaCwgJHNtYWxsLWNsb3VkLXctaCwgLTUwJSwgMCk7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLXNoYWRvdztcbn1cbiIsIi8qIENvbG9ycyAqL1xuLyogTnVtZXJpY2FsIHZhbHVlcyAqL1xuLyogTGF5b3V0ICovXG5hIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMHZoIC0gNDIwcHggLSAoMTAwdmggLSA0MjBweCkgLyAyIC0gM3JlbSk7XG4gIGxlZnQ6IGNhbGMoMTAwdncgLSA2MDBweCAtICgxMDB2dyAtIDYwMHB4KSAvIDIpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxYzAzNWUsICNjZTI4MDEsICNjZTI4MDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91bmQgKi9cbi5ncm91bmQge1xuICB3aWR0aDogMTIwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwJTtcbiAgYm90dG9tOiAtMTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNkZCMjNFLCAjMjU3YjIxIDMwJSwgIzEwMzQwZik7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtMmRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncm91bmQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCByZ2JhKDIwNiwgMTA3LCA0NywgMC4zNyksIHRyYW5zcGFyZW50LCByZ2JhKDI4LCAzLCA5NCwgMC4yNykpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN1biAqL1xuQGtleWZyYW1lcyBwdWxzaW5nLXN1biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uc3VuMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiBjYWxjKDYwJSAqIDEuMik7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiBjYWxjKCgxMDAlIC0gNjAlKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA2LCAxNzQsIDM2LCAwLjc2KSwgI2NlYzg5NCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNDtcbiAgYW5pbWF0aW9uOiBwdWxzaW5nLXN1biA1cyBpbmZpbml0ZTtcbn1cblxuLnN1bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogY2FsYyg4MCUgKiAxLjIpO1xuICB0b3A6IDEyJTtcbiAgbGVmdDogY2FsYygoMTAwJSAtIDgwJSkgLyAyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNiwgODMsIDI5LCAwLjc2KSwgcmdiYSgyMDYsIDE0NiwgNTAsIDAuNzYpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xufVxuXG4uc3VuMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICogMS4yKTtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAxMDAlKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LCAxMCwgMzYsIDAuNzUpIDEwJSwgcmdiYSgyMDYsIDc2LCA5LCAwLjc1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNDtcbiAgYW5pbWF0aW9uOiBwdWxzaW5nLXN1biA1cyBpbmZpbml0ZTtcbiAgbGVmdDogMjUlO1xufVxuXG4vKiBDbG91ZHMgKi9cbkBrZXlmcmFtZXMgbW92aW5nLWNsb3VkIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMyMCUpO1xuICB9XG59XG4uY2xvdWQtYm94IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDIwJTtcbiAgYW5pbWF0aW9uOiBtb3ZpbmctY2xvdWQgNDBzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogNztcbn1cblxuLmNsb3VkLTEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2NSU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLTIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMCU7XG4gIGJvdHRvbTogLTIwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLTMge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMCU7XG4gIGJvdHRvbTogLTMwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLTQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jbG91ZC1zaGFkb3ctYm94IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAyMCU7XG4gIGFuaW1hdGlvbjogbW92aW5nLWNsb3VkIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gIHotaW5kZXg6IDc7XG59XG5cbi5jbG91ZC1zaGFkb3ctZmxpcCB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn1cblxuLmNsb3VkLXNoYWRvdy0xIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNjUlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmNsb3VkLXNoYWRvdy0yIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjAlO1xuICBib3R0b206IC0yMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmNsb3VkLXNoYWRvdy0zIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMzAlO1xuICBib3R0b206IC0zMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmNsb3VkLXNoYWRvdy00IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAxOSwgMCwgMC4zMSkgMzAlLCB0cmFuc3BhcmVudCk7XG59IiwiQG1peGluIGNlbnRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */"]
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
      }], null, null);
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
        link: '/tbc',
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
      styles: ["@-webkit-keyframes colorTransition {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 100%;\n  }\n}\n@keyframes colorTransition {\n  from {\n    background-position: 0;\n  }\n  to {\n    background-position: 100%;\n  }\n}\n@-webkit-keyframes slideButtons1 {\n  to {\n    transform: translate3d(-100%, -10%, 0);\n  }\n}\n@keyframes slideButtons1 {\n  to {\n    transform: translate3d(-100%, -10%, 0);\n  }\n}\n@-webkit-keyframes slideButtons2 {\n  45% {\n    opacity: 1;\n  }\n  50% {\n    transform: translate3d(calc(-150% - (1% / 2)), -10%, 0);\n  }\n  51% {\n    transform: translate3d(calc(50% + 1%), -10%, 0);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(1%, -10%, 0);\n  }\n}\n@keyframes slideButtons2 {\n  45% {\n    opacity: 1;\n  }\n  50% {\n    transform: translate3d(calc(-150% - (1% / 2)), -10%, 0);\n  }\n  51% {\n    transform: translate3d(calc(50% + 1%), -10%, 0);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(1%, -10%, 0);\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: linear-gradient(20deg, #1e7f24, transparent 70%), linear-gradient(60deg, #2600ff, transparent 60%), linear-gradient(90deg, #7000ff, transparent 80%), linear-gradient(180deg, #ef154b, transparent 70%), linear-gradient(240deg, #ef651e, transparent 70%), linear-gradient(300deg, #ffc000, transparent 70%);\n  background-size: 200% 100%;\n  -webkit-animation: colorTransition 4s linear infinite alternate;\n          animation: colorTransition 4s linear infinite alternate;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50vh - 30rem / 2);\n  color: rgba(255, 255, 255, 0.7);\n  -webkit-filter: drop-shadow(1px 1px 0.75px rgba(255, 255, 255, 0.7)) drop-shadow(-1px -1px 0.75px rgba(255, 255, 255, 0.7));\n          filter: drop-shadow(1px 1px 0.75px rgba(255, 255, 255, 0.7)) drop-shadow(-1px -1px 0.75px rgba(255, 255, 255, 0.7));\n  transition: top 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n  left: calc(50vw - 30rem / 2);\n  transform: rotate(-45deg);\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:not(:first-child) {\n  right: calc(50vw - 30rem / 2);\n  transform: rotate(45deg);\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black);\n          filter: drop-shadow(2px 2px 5px black) drop-shadow(-2px -2px 5px black);\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%] {\n  width: 30rem;\n  height: 30rem;\n  -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n  background-color: black;\n  transition: width 0.5s, height 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n  transform: translate3d(1%, -10%, 0);\n  -webkit-animation: slideButtons1 15s linear infinite;\n          animation: slideButtons1 15s linear infinite;\n  display: flex;\n  align-items: flex-start;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #9ed59f;\n  color: #0a2d0c;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):hover {\n  background-color: #0a2d0c;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #b7cbff;\n  color: #090047;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):hover {\n  background-color: #090047;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #f2d4ff;\n  color: #220048;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):hover {\n  background-color: #220048;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #efbcba;\n  color: #58061d;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):hover {\n  background-color: #58061d;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #efdab3;\n  color: #371507;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):hover {\n  background-color: #371507;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 100%;\n  width: 100%;\n  transform: translate3d(-100%, -10%, 0);\n  -webkit-animation: slideButtons2 15s linear infinite;\n          animation: slideButtons2 15s linear infinite;\n  display: flex;\n  align-items: flex-start;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #9ed59f;\n  color: #0a2d0c;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1):hover {\n  background-color: #0a2d0c;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #b7cbff;\n  color: #090047;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2):hover {\n  background-color: #090047;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #f2d4ff;\n  color: #220048;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3):hover {\n  background-color: #220048;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #efbcba;\n  color: #58061d;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4):hover {\n  background-color: #58061d;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #efdab3;\n  color: #371507;\n  transition: all 0.5s;\n}\n.container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5):hover {\n  background-color: #371507;\n  color: white;\n}\n@media screen and (max-width: 768px) {\n  @-webkit-keyframes pulsingButtons {\n    to {\n      transform: scale(1.05);\n    }\n  }\n  @keyframes pulsingButtons {\n    to {\n      transform: scale(1.05);\n    }\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    top: calc(50vh - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:first-child {\n    left: calc(50vw - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:not(:first-child) {\n    right: calc(50vw - 20rem / 1.75);\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%] {\n    width: 20rem;\n    height: 20rem;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    top: 20%;\n    left: 22%;\n    flex-direction: column;\n    align-items: initial;\n    -webkit-animation: none;\n            animation: none;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    -webkit-animation: pulsingButtons 1s alternate infinite;\n            animation: pulsingButtons 1s alternate infinite;\n  }\n  .container[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .menu-holder-wrap[_ngcontent-%COMP%]   .menu-holder[_ngcontent-%COMP%]   .button-slide-wrap[_ngcontent-%COMP%]   .button-slide-2[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0U7SUFBTSxzQkFBQTtFQ1BOO0VEUUE7SUFBSSx5QkFBQTtFQ0xKO0FBQ0Y7QURFQTtFQUNFO0lBQU0sc0JBQUE7RUNQTjtFRFFBO0lBQUkseUJBQUE7RUNMSjtBQUNGO0FET0E7RUFDRTtJQUFLLHNDQUFBO0VDSkw7QUFDRjtBREVBO0VBQ0U7SUFBSyxzQ0FBQTtFQ0pMO0FBQ0Y7QURNQTtFQUNFO0lBQU0sVUFBQTtFQ0hOO0VESUE7SUFBTSx1REFBQTtFQ0ROO0VERUE7SUFBTSwrQ0FBQTtJQUE4RSxVQUFBO0VDRXBGO0VEREE7SUFBSyxtQ0FBQTtFQ0lMO0FBQ0Y7QURUQTtFQUNFO0lBQU0sVUFBQTtFQ0hOO0VESUE7SUFBTSx1REFBQTtFQ0ROO0VERUE7SUFBTSwrQ0FBQTtJQUE4RSxVQUFBO0VDRXBGO0VEREE7SUFBSyxtQ0FBQTtFQ0lMO0FBQ0Y7QUQ2QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtUQUFBO0VBTUEsMEJBQUE7RUFDQSwrREFBQTtVQUFBLHVEQUFBO0FDaENGO0FEa0NFO0VBQ0Usa0JBQUE7QUNoQ0o7QURrQ0k7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBdkVRO0VBd0VSLDJIQUFBO1VBQUEsbUhBQUE7RUFDQSxvQkFBQTtBQ2hDTjtBRGtDTTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUNoQ1I7QURtQ007RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0FDakNSO0FEcUNJO0VFeEZGLGVBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUNWLGdDQUFBO0VGeUZJLCtFQUFBO1VBQUEsdUVBQUE7QUNqQ047QURtQ007RUFDRSxZQTFGVTtFQTJGVixhQTNGVTtFQTRGVixrR0FBQTtVQUFBLDBGQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtBQ2pDUjtBRG1DUTtFQUNFLGtCQUFBO0FDakNWO0FEbUNVO0VFdkdSLGVBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUNWLGdDQUFBO0VGeUJBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDZ0RGO0FEdENJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUN3Q047QUR0Q007RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUN3Q1I7QUQvQ0k7RUFDRSx5QkFSRjtFQVNFLGNBVEY7RUFVRSxvQkFBQTtBQ2lETjtBRC9DTTtFQUNFLHlCQWJKO0VBY0ksWUFBQTtBQ2lEUjtBRHhESTtFQUNFLHlCQVJGO0VBU0UsY0FURjtFQVVFLG9CQUFBO0FDMEROO0FEeERNO0VBQ0UseUJBYko7RUFjSSxZQUFBO0FDMERSO0FEakVJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUNtRU47QURqRU07RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUNtRVI7QUQxRUk7RUFDRSx5QkFSRjtFQVNFLGNBVEY7RUFVRSxvQkFBQTtBQzRFTjtBRDFFTTtFQUNFLHlCQWJKO0VBY0ksWUFBQTtBQzRFUjtBRGxCVTtFRTNHUixlQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFDVixnQ0FBQTtFRnlCQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ3lHRjtBRC9GSTtFQUNFLHlCQVJGO0VBU0UsY0FURjtFQVVFLG9CQUFBO0FDaUdOO0FEL0ZNO0VBQ0UseUJBYko7RUFjSSxZQUFBO0FDaUdSO0FEeEdJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUMwR047QUR4R007RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUMwR1I7QURqSEk7RUFDRSx5QkFSRjtFQVNFLGNBVEY7RUFVRSxvQkFBQTtBQ21ITjtBRGpITTtFQUNFLHlCQWJKO0VBY0ksWUFBQTtBQ21IUjtBRDFISTtFQUNFLHlCQVJGO0VBU0UsY0FURjtFQVVFLG9CQUFBO0FDNEhOO0FEMUhNO0VBQ0UseUJBYko7RUFjSSxZQUFBO0FDNEhSO0FEbklJO0VBQ0UseUJBUkY7RUFTRSxjQVRGO0VBVUUsb0JBQUE7QUNxSU47QURuSU07RUFDRSx5QkFiSjtFQWNJLFlBQUE7QUNxSVI7QURwRUk7RUFDRTtJQUNFO01BQUssc0JBQUE7SUN1RVQ7RUFDRjtFRHpFSTtJQUNFO01BQUssc0JBQUE7SUN1RVQ7RUFDRjtFRGxFSTtJQUNFLDhCQUFBO0VDb0VOO0VEbEVNO0lBQ0UsK0JBQUE7RUNvRVI7RURqRU07SUFDRSxnQ0FBQTtFQ21FUjtFRDlESTtJQUNFLFlBakJrQjtJQWtCbEIsYUFsQmtCO0VDa0Z4QjtFRDdEUTtJQUNFLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSxvQkFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFQytEVjtFRDdEVTtJQUNFLHVEQUFBO1lBQUEsK0NBQUE7RUMrRFo7RUQzRFE7SUFDRSxrQkFBQTtFQzZEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuJHRpdGxlLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG5cbiRtZW51LWhvbGRlci13LWg6IDMwcmVtO1xuJHNsaWRlLW9mZnNldC10b3A6IC0xMCU7XG4kc2xpZGUtb2Zmc2V0LXg6IDElO1xuXG5Aa2V5ZnJhbWVzIGNvbG9yVHJhbnNpdGlvbiB7XG4gIGZyb20ge2JhY2tncm91bmQtcG9zaXRpb246IDB9XG4gIHRvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQnV0dG9uczEge1xuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsICRzbGlkZS1vZmZzZXQtdG9wLCAwKSB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCdXR0b25zMiB7XG4gIDQ1JSB7IG9wYWNpdHk6IDEgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoLTE1MCUgLSAoI3skc2xpZGUtb2Zmc2V0LXh9IC8gMikpLCAkc2xpZGUtb2Zmc2V0LXRvcCwgMCkgfVxuICA1MSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoNTAlICsgI3skc2xpZGUtb2Zmc2V0LXh9KSwgJHNsaWRlLW9mZnNldC10b3AsIDApOyBvcGFjaXR5OiAwIH1cbiAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCRzbGlkZS1vZmZzZXQteCwgJHNsaWRlLW9mZnNldC10b3AsIDApIH1cbn1cblxuQG1peGluIHNsaWRlU2hvdygkc3RhcnQsICRhbmltYXRpb24pIHtcbiAgQGluY2x1ZGUgY2VudGVyO1xuXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHN0YXJ0LCAkc2xpZGUtb2Zmc2V0LXRvcCwgMCk7XG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAxNXMgbGluZWFyIGluZmluaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAkYnRuLWNvbG9yczpcbiAgICAxICRob21lLTEtZGFyayAkaG9tZS0xLWxpZ2h0LFxuICAgIDIgJGhvbWUtMi1kYXJrICRob21lLTItbGlnaHQsXG4gICAgMyAkaG9tZS0zLWRhcmsgJGhvbWUtMy1saWdodCxcbiAgICA0ICRob21lLTQtZGFyayAkaG9tZS00LWxpZ2h0LFxuICAgIDUgJGhvbWUtNS1kYXJrICRob21lLTUtbGlnaHQ7XG5cbiAgQGVhY2ggJGksICRjb2xvciwgJGJnQ29sb3IgaW4gJGJ0bi1jb2xvcnMge1xuICAgIGE6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMGRlZywgJGhvbWUtMSwgdHJhbnNwYXJlbnQgNzAlKSxcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDYwZGVnLCAkaG9tZS0yLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRob21lLTMsIHRyYW5zcGFyZW50IDgwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICRob21lLTQsIHRyYW5zcGFyZW50IDcwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICRob21lLTUsIHRyYW5zcGFyZW50IDcwJSksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgzMDBkZWcsICRob21lLTYsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IGNvbG9yVHJhbnNpdGlvbiA0cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXG4gIC50aXRsZS13cmFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBoMSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IGNhbGMoNTB2aCAtICN7JG1lbnUtaG9sZGVyLXctaH0gLyAyKTtcbiAgICAgIGNvbG9yOiAkdGl0bGUtY29sb3I7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggLjc1cHggJHRpdGxlLWNvbG9yKSBkcm9wLXNoYWRvdygtMXB4IC0xcHggLjc1cHggJHRpdGxlLWNvbG9yKTtcbiAgICAgIHRyYW5zaXRpb246IHRvcCAuNXM7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci13LWh9IC8gMik7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICByaWdodDogY2FsYyg1MHZ3IC0gI3skbWVudS1ob2xkZXItdy1ofSAvIDIpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1lbnUtaG9sZGVyLXdyYXAge1xuICAgICAgQGluY2x1ZGUgY2VudGVyO1xuXG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNXB4IGJsYWNrKSBkcm9wLXNoYWRvdygtMnB4IC0ycHggNXB4IGJsYWNrKTtcblxuICAgICAgLm1lbnUtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6ICRtZW51LWhvbGRlci13LWg7XG4gICAgICAgIGhlaWdodDogJG1lbnUtaG9sZGVyLXctaDtcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgNzAlIDAlLCAxMDAlIDMwJSwgMTAwJSA3MCUsIDcwJSAxMDAlLCAzMCUgMTAwJSwgMCUgNzAlLCAwJSAzMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMsIGhlaWdodCAuNXM7XG5cbiAgICAgICAgLmJ1dHRvbi1zbGlkZS13cmFwIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAuYnV0dG9uLXNsaWRlLTEge1xuICAgICAgICAgICAgQGluY2x1ZGUgc2xpZGVTaG93KCRzbGlkZS1vZmZzZXQteCwgc2xpZGVCdXR0b25zMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJ1dHRvbi1zbGlkZS0yIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHNsaWRlU2hvdygtMTAwJSwgc2xpZGVCdXR0b25zMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIEBrZXlmcmFtZXMgcHVsc2luZ0J1dHRvbnMge1xuICAgICAgICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgfVxuICAgICAgfVxuXG4gICAgICAkbWVudS1ob2xkZXItcy13LWg6IDIwcmVtO1xuICAgICAgJHNsaWRlLW9mZnNldC1zLXg6IC01MCU7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwdmggLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwdncgLSAjeyRtZW51LWhvbGRlci1zLXctaH0gLyAxLjc1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0b2RvOiBhbHNvIHNsaWRlc2hvd1xuICAgICAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6ICRtZW51LWhvbGRlci1zLXctaDtcbiAgICAgICAgaGVpZ2h0OiAkbWVudS1ob2xkZXItcy13LWg7XG5cbiAgICAgICAgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUge1xuICAgICAgICAgICYtMSB7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICAgIGxlZnQ6IDIyJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2luZ0J1dHRvbnMgMXMgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYtMiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIkBrZXlmcmFtZXMgY29sb3JUcmFuc2l0aW9uIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUJ1dHRvbnMxIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlQnV0dG9uczIge1xuICA0NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGNhbGMoLTE1MCUgLSAoMSUgLyAyKSksIC0xMCUsIDApO1xuICB9XG4gIDUxJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZChjYWxjKDUwJSArIDElKSwgLTEwJSwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxJSwgLTEwJSwgMCk7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMGRlZywgIzFlN2YyNCwgdHJhbnNwYXJlbnQgNzAlKSwgbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMjYwMGZmLCB0cmFuc3BhcmVudCA2MCUpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3MDAwZmYsIHRyYW5zcGFyZW50IDgwJSksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNlZjE1NGIsIHRyYW5zcGFyZW50IDcwJSksIGxpbmVhci1ncmFkaWVudCgyNDBkZWcsICNlZjY1MWUsIHRyYW5zcGFyZW50IDcwJSksIGxpbmVhci1ncmFkaWVudCgzMDBkZWcsICNmZmMwMDAsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBhbmltYXRpb246IGNvbG9yVHJhbnNpdGlvbiA0cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgaDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MHZoIC0gMzByZW0gLyAyKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDAuNzVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpIGRyb3Atc2hhZG93KC0xcHggLTFweCAwLjc1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpKTtcbiAgdHJhbnNpdGlvbjogdG9wIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIGgxOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogY2FsYyg1MHZ3IC0gMzByZW0gLyAyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgaDE6bm90KDpmaXJzdC1jaGlsZCkge1xuICByaWdodDogY2FsYyg1MHZ3IC0gMzByZW0gLyAyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA1cHggYmxhY2spIGRyb3Atc2hhZG93KC0ycHggLTJweCA1cHggYmxhY2spO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIge1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMzByZW07XG4gIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDcwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzAlLCA3MCUgMTAwJSwgMzAlIDEwMCUsIDAlIDcwJSwgMCUgMzAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGhlaWdodCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMSUsIC0xMCUsIDApO1xuICBhbmltYXRpb246IHNsaWRlQnV0dG9uczEgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZDU5ZjtcbiAgY29sb3I6ICMwYTJkMGM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCgxKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTJkMGM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjYmZmO1xuICBjb2xvcjogIzA5MDA0NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDA0NztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmQ0ZmY7XG4gIGNvbG9yOiAjMjIwMDQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoMyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIwMDQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYmNiYTtcbiAgY29sb3I6ICM1ODA2MWQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhOm50aC1jaGlsZCg0KTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODA2MWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEgYTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZkYWIzO1xuICBjb2xvcjogIzM3MTUwNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0xIGE6bnRoLWNoaWxkKDUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MTUwNztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMCUsIDApO1xuICBhbmltYXRpb246IHNsaWRlQnV0dG9uczIgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZDU5ZjtcbiAgY29sb3I6ICMwYTJkMGM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCgxKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTJkMGM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjYmZmO1xuICBjb2xvcjogIzA5MDA0NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDIpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDA0NztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmQ0ZmY7XG4gIGNvbG9yOiAjMjIwMDQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoMyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIwMDQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmYmNiYTtcbiAgY29sb3I6ICM1ODA2MWQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMiBhOm50aC1jaGlsZCg0KTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODA2MWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTIgYTpudGgtY2hpbGQoNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZkYWIzO1xuICBjb2xvcjogIzM3MTUwNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIGE6bnRoLWNoaWxkKDUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MTUwNztcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgQGtleWZyYW1lcyBwdWxzaW5nQnV0dG9ucyB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMSB7XG4gICAgdG9wOiBjYWxjKDUwdmggLSAyMHJlbSAvIDEuNzUpO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlLXdyYXAgaDE6Zmlyc3QtY2hpbGQge1xuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDIwcmVtIC8gMS43NSk7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCBoMTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgcmlnaHQ6IGNhbGMoNTB2dyAtIDIwcmVtIC8gMS43NSk7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICB9XG4gIC5jb250YWluZXIgLnRpdGxlLXdyYXAgLm1lbnUtaG9sZGVyLXdyYXAgLm1lbnUtaG9sZGVyIC5idXR0b24tc2xpZGUtd3JhcCAuYnV0dG9uLXNsaWRlLTEge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiAyMiU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgLmNvbnRhaW5lciAudGl0bGUtd3JhcCAubWVudS1ob2xkZXItd3JhcCAubWVudS1ob2xkZXIgLmJ1dHRvbi1zbGlkZS13cmFwIC5idXR0b24tc2xpZGUtMSBhIHtcbiAgICBhbmltYXRpb246IHB1bHNpbmdCdXR0b25zIDFzIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgfVxuICAuY29udGFpbmVyIC50aXRsZS13cmFwIC5tZW51LWhvbGRlci13cmFwIC5tZW51LWhvbGRlciAuYnV0dG9uLXNsaWRlLXdyYXAgLmJ1dHRvbi1zbGlkZS0yIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn0iLCJAbWl4aW4gY2VudGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTsgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiJdfQ== */"]
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
      consts: [[1, "container"], [1, "page-link", 3, "routerLink"], [1, "box"], [1, "cloud-box"], [1, "cloud-4"], [1, "cloud-3"], [1, "cloud-2"], [1, "cloud-1"], [1, "sun3"], [1, "sun2"], [1, "sun1"], [1, "ground"], [1, "cloud-shadow-box"], [1, "cloud-shadow-flip"], [1, "cloud-shadow-4"], [1, "cloud-shadow-3"], [1, "cloud-shadow-2"], [1, "cloud-shadow-1"]],
      template: function SunsetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Terug naar huis");

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
      styles: ["a[_ngcontent-%COMP%] {\n  margin-left: 0;\n  position: absolute;\n  top: calc(100vh - 420px - (100vh - 420px) / 2 - 3rem);\n  left: calc(100vw - 600px - (100vw - 600px) / 2);\n}\n@media screen and (max-width: 600px) {\n  a[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n}\n.box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n  width: 600px;\n  height: 420px;\n  background-image: linear-gradient(to bottom right, #1c035e, #ce2801, #ce2801);\n  overflow: hidden;\n}\n\n.ground[_ngcontent-%COMP%] {\n  width: 120%;\n  height: 40%;\n  position: absolute;\n  left: -10%;\n  bottom: -10%;\n  background-image: linear-gradient(to bottom, #6FB23E, #257b21 30%, #10340f);\n  z-index: 5;\n  border-top-left-radius: 50%;\n  transform: skew(-5deg, -2deg);\n  overflow: hidden;\n}\n.ground[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image: linear-gradient(-90deg, rgba(206, 107, 47, 0.37), transparent, rgba(28, 3, 94, 0.27));\n  border-top-left-radius: 50%;\n}\n\n@-webkit-keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes pulsing-sun {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.sun1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60%;\n  height: calc(60% * 1.2);\n  top: 12%;\n  left: calc((100% - 60%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 174, 36, 0.76), #cec894);\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80%;\n  height: calc(80% * 1.2);\n  top: 12%;\n  left: calc((100% - 80%) / 2);\n  background-image: linear-gradient(90deg, rgba(206, 83, 29, 0.76), rgba(206, 146, 50, 0.76));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n}\n.sun3[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% * 1.2);\n  top: 12%;\n  left: calc((100% - 100%) / 2);\n  background-image: linear-gradient(90deg, rgba(168, 10, 36, 0.75) 10%, rgba(206, 76, 9, 0.75));\n  border-radius: 50%;\n  z-index: 4;\n  -webkit-animation: pulsing-sun 5s infinite;\n          animation: pulsing-sun 5s infinite;\n  left: 25%;\n}\n\n@-webkit-keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n@keyframes moving-cloud {\n  from {\n    transform: translateX(-225%);\n  }\n  to {\n    transform: translateX(320%);\n  }\n}\n.cloud-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: 30%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n}\n.cloud-shadow-box[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  position: absolute;\n  top: -10%;\n  left: 20%;\n  -webkit-animation: moving-cloud 40s linear infinite;\n          animation: moving-cloud 40s linear infinite;\n  z-index: 7;\n}\n.cloud-shadow-flip[_ngcontent-%COMP%] {\n  transform: scaleY(-1);\n}\n.cloud-shadow-1[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 65%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  right: 20%;\n  bottom: -20%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-3[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 100px;\n  position: absolute;\n  right: -30%;\n  bottom: -30%;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n.cloud-shadow-4[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: -50%;\n  bottom: 0;\n  background-image: linear-gradient(to bottom, rgba(212, 212, 212, 0.81) 20%, rgba(112, 75, 153, 0.58));\n  border-radius: 50%;\n  background-image: radial-gradient(rgba(0, 19, 0, 0.31) 30%, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsV0FBQTtBQVdBLHFCQUFBO0FBVUEsV0FBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSwrQ0FBQTtBQ3RCRjtBRHdCRTtFQU5GO0lBT0ksT0FBQTtFQ3JCRjtBQUNGO0FEd0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3JCRjtBRHdCQTtFRTVDRSxlQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFDVixnQ0FBQTtFRjZDQSxjQUFBO0VBQ0EsWUFqQ007RUFrQ04sYUFqQ007RUFrQ04sNkVBQUE7RUFDQSxnQkFBQTtBQ25CRjtBRHNCQSxXQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwyRUEzRGE7RUE0RGIsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUdBdEVrQjtFQXVFbEIsMkJBQUE7QUNwQkY7QUR1QkEsUUFBQTtBQWNBO0VBQ0U7SUFBTyxtQkFBQTtFQ2hDUDtFRGlDQTtJQUFNLHNCQUFBO0VDOUJOO0VEK0JBO0lBQUssbUJBQUE7RUM1Qkw7QUFDRjtBRHdCQTtFQUNFO0lBQU8sbUJBQUE7RUNoQ1A7RURpQ0E7SUFBTSxzQkFBQTtFQzlCTjtFRCtCQTtJQUFLLG1CQUFBO0VDNUJMO0FBQ0Y7QUQ4QkE7RUFqQkUsa0JBQUE7RUFDQSxVQWlCYTtFQWhCYix1QkFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLDJFQWhGVztFQWlGWCxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDVkY7QUR1QkE7RUFyQkUsa0JBQUE7RUFDQSxVQXFCYTtFQXBCYix1QkFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLDJGQS9FVztFQWdGWCxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDRUY7QURlQTtFQXpCRSxrQkFBQTtFQUNBLFdBeUJhO0VBeEJiLHdCQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkZBOUVXO0VBK0VYLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFvQkEsU0FBQTtBQ0xGO0FEUUEsV0FBQTtBQXNCQTtFQUNFO0lBQU8sNEJBQUE7RUN6QlA7RUQwQkE7SUFBSywyQkFBQTtFQ3ZCTDtBQUNGO0FEb0JBO0VBQ0U7SUFBTyw0QkFBQTtFQ3pCUDtFRDBCQTtJQUFLLDJCQUFBO0VDdkJMO0FBQ0Y7QUR5QkE7RUFkRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFZbUI7RUFYbkIsU0FXd0I7RUFWeEIsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLFVBQUE7QUNSRjtBRG9CQTtFQTVCRSxXQWpHZ0I7RUFrR2hCLFlBbEdnQjtFQW1HaEIsa0JBQUE7RUFDQSxVQTBCbUQ7RUF6Qm5ELFNBeUJ3RDtFQXhCeEQscUdBOUdZO0VBK0daLGtCQUFBO0FDWUY7QURjQTtFQWhDRSxXQWhHaUI7RUFpR2pCLFlBakdpQjtFQWtHakIsa0JBQUE7RUFDQSxVQThCcUQ7RUE3QnJELFlBNkIwRDtFQTVCMUQscUdBOUdZO0VBK0daLGtCQUFBO0FDc0JGO0FEUUE7RUFwQ0UsWUEvRlk7RUFnR1osYUEvRlk7RUFnR1osa0JBQUE7RUFDQSxXQWtDMkM7RUFqQzNDLFlBaUNpRDtFQWhDakQscUdBOUdZO0VBK0daLGtCQUFBO0FDZ0NGO0FERUE7RUF4Q0UsV0FqR2dCO0VBa0doQixZQWxHZ0I7RUFtR2hCLGtCQUFBO0VBQ0EsV0FzQ21EO0VBckNuRCxTQXFDeUQ7RUFwQ3pELHFHQTlHWTtFQStHWixrQkFBQTtBQzBDRjtBREpBO0VBbENFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQWdDbUI7RUEvQm5CLFNBK0J5QjtFQTlCekIsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLFVBQUE7QUMwQ0Y7QURWQTtFQUNFLHFCQUFBO0FDYUY7QURWQTtFQXBERSxXQWpHZ0I7RUFrR2hCLFlBbEdnQjtFQW1HaEIsa0JBQUE7RUFDQSxVQWtEbUQ7RUFqRG5ELFNBaUR3RDtFQWhEeEQscUdBOUdZO0VBK0daLGtCQUFBO0VBaURBLHdFQS9KYTtBQ2lMZjtBRGZBO0VBMURFLFdBaEdpQjtFQWlHakIsWUFqR2lCO0VBa0dqQixrQkFBQTtFQUNBLFVBd0RxRDtFQXZEckQsWUF1RDBEO0VBdEQxRCxxR0E5R1k7RUErR1osa0JBQUE7RUF1REEsd0VBckthO0FDNExmO0FEcEJBO0VBaEVFLFlBL0ZZO0VBZ0daLGFBL0ZZO0VBZ0daLGtCQUFBO0VBQ0EsV0E4RDJDO0VBN0QzQyxZQTZEaUQ7RUE1RGpELHFHQTlHWTtFQStHWixrQkFBQTtFQTZEQSx3RUEzS2E7QUN1TWY7QUR6QkE7RUF0RUUsV0FqR2dCO0VBa0doQixZQWxHZ0I7RUFtR2hCLGtCQUFBO0VBQ0EsV0FvRW1EO0VBbkVuRCxTQW1FeUQ7RUFsRXpELHFHQTlHWTtFQStHWixrQkFBQTtFQW1FQSx3RUFqTGE7QUNrTmYiLCJmaWxlIjoic3JjL2FwcC9zdW5zZXQvc3Vuc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuLyogQ29sb3JzICovXG4kZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNkZCMjNFLCAjMjU3YjIxIDMwJSwgIzEwMzQwZik7XG4kZ3JvdW5kLXJlZmxlY3Rpb246IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsIHJnYmEoMjA2LCAxMDcsIDQ3LCAwLjM3KSwgdHJhbnNwYXJlbnQsIHJnYmEoMjgsIDMsIDk0LCAwLjI3KSk7XG5cbiRzdW4xLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA2LCAxNzQsIDM2LCAwLjc2KSwgI2NlYzg5NCk7XG4kc3VuMi1jb2xvcjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNiwgODMsIDI5LCAwLjc2KSwgcmdiYSgyMDYsIDE0NiwgNTAsIDAuNzYpKTtcbiRzdW4zLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LCAxMCwgMzYsIDAuNzUpIDEwJSwgcmdiYSgyMDYsIDc2LCA5LCAwLjc1KSk7XG5cbiRjbG91ZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4kY2xvdWQtc2hhZG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAxOSwgMCwgMC4zMSkgMzAlLCB0cmFuc3BhcmVudCk7XG5cbi8qIE51bWVyaWNhbCB2YWx1ZXMgKi9cblxuJGJveC14OiA2MDBweDtcbiRib3gteTogNDIwcHg7XG5cbiRzbWFsbC1jbG91ZC13LWg6IDUwcHg7XG4kbWlkZGxlLWNsb3VkLXctaDogODBweDtcbiRiaWctY2xvdWQtdzogMTEwcHg7XG4kYmlnLWNsb3VkLWg6IDEwMHB4O1xuXG4vKiBMYXlvdXQgKi9cblxuYSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDB2aCAtICN7JGJveC15fSAtICgxMDB2aCAtICN7JGJveC15fSkgLyAyIC0gM3JlbSk7XG4gIGxlZnQ6IGNhbGMoMTAwdncgLSAjeyRib3gteH0gLSAoMTAwdncgLSAjeyRib3gteH0pIC8gMik7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJveC14KSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJveCB7XG4gIEBpbmNsdWRlIGNlbnRlcjtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICRib3gteDtcbiAgaGVpZ2h0OiAkYm94LXk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxYzAzNWUsICNjZTI4MDEsICNjZTI4MDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91bmQgKi9cblxuLmdyb3VuZCB7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAlO1xuICBib3R0b206IC0xMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRncm91bmQtY29sb3I7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtMmRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncm91bmQ6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogJGdyb3VuZC1yZWZsZWN0aW9uO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN1biAqL1xuXG5AbWl4aW4gc3VuKCR3aWR0aCwgJHpJbmRleCwgJGNvbG9yLCAkYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6IGNhbGMoI3skd2lkdGh9ICogMS4yKTtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAjeyR3aWR0aH0pIC8gMik7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNpbmctc3VuIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMSkgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIH1cbiAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpIH1cbn1cblxuLnN1bjEge1xuICBAaW5jbHVkZSBzdW4oNjAlLCAzLCAkc3VuMS1jb2xvciwgNXMpO1xufVxuXG4uc3VuMiB7XG4gIEBpbmNsdWRlIHN1big4MCUsIDQsICRzdW4yLWNvbG9yLCA0cyk7XG59XG5cbi5zdW4zIHtcbiAgQGluY2x1ZGUgc3VuKDEwMCUsIDUsICRzdW4zLWNvbG9yLCAzcyk7XG5cbiAgbGVmdDogMjUlO1xufVxuXG4vKiBDbG91ZHMgKi9cblxuQG1peGluIGNsb3VkKCR3aWR0aCwgJGhlaWdodCwgJHJpZ2h0LCAkYm90dG9tKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogJHJpZ2h0O1xuICBib3R0b206ICRib3R0b207XG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjbG91ZC1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5AbWl4aW4gY2xvdWQtYm94KCR0b3AsICRsZWZ0KSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHRvcDtcbiAgbGVmdDogJGxlZnQ7XG4gIGFuaW1hdGlvbjogbW92aW5nLWNsb3VkIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gIHotaW5kZXg6IDc7XG59XG5cbkBrZXlmcmFtZXMgbW92aW5nLWNsb3VkIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjI1JSkgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMjAlKSB9XG59XG5cbi5jbG91ZC1ib3gge1xuICBAaW5jbHVkZSBjbG91ZC1ib3goMzAlLCAyMCUpO1xufVxuXG4uY2xvdWQtMSB7XG4gIEBpbmNsdWRlIGNsb3VkKCRzbWFsbC1jbG91ZC13LWgsICRzbWFsbC1jbG91ZC13LWgsIDY1JSwgMCk7XG59XG5cbi5jbG91ZC0yIHtcbiAgQGluY2x1ZGUgY2xvdWQoJG1pZGRsZS1jbG91ZC13LWgsICRtaWRkbGUtY2xvdWQtdy1oLCAyMCUsIC0yMCUpO1xufVxuXG4uY2xvdWQtMyB7XG4gIEBpbmNsdWRlIGNsb3VkKCRiaWctY2xvdWQtdywgJGJpZy1jbG91ZC1oLCAtMzAlLCAtMzAlKTtcbn1cblxuLmNsb3VkLTQge1xuICBAaW5jbHVkZSBjbG91ZCgkc21hbGwtY2xvdWQtdy1oLCAkc21hbGwtY2xvdWQtdy1oLCAtNTAlLCAwKTtcbn1cblxuLmNsb3VkLXNoYWRvdy1ib3gge1xuICBAaW5jbHVkZSBjbG91ZC1ib3goLTEwJSwgMjAlKTtcbn1cblxuLmNsb3VkLXNoYWRvdy1mbGlwIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xufVxuXG4uY2xvdWQtc2hhZG93LTEge1xuICBAaW5jbHVkZSBjbG91ZCgkc21hbGwtY2xvdWQtdy1oLCAkc21hbGwtY2xvdWQtdy1oLCA2NSUsIDApO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRjbG91ZC1zaGFkb3c7XG59XG5cbi5jbG91ZC1zaGFkb3ctMiB7XG4gIEBpbmNsdWRlIGNsb3VkKCRtaWRkbGUtY2xvdWQtdy1oLCAkbWlkZGxlLWNsb3VkLXctaCwgMjAlLCAtMjAlKTtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiAkY2xvdWQtc2hhZG93O1xufVxuXG4uY2xvdWQtc2hhZG93LTMge1xuICBAaW5jbHVkZSBjbG91ZCgkYmlnLWNsb3VkLXcsICRiaWctY2xvdWQtaCwgLTMwJSwgLTMwJSk7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLXNoYWRvdztcbn1cblxuLmNsb3VkLXNoYWRvdy00IHtcbiAgQGluY2x1ZGUgY2xvdWQoJHNtYWxsLWNsb3VkLXctaCwgJHNtYWxsLWNsb3VkLXctaCwgLTUwJSwgMCk7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogJGNsb3VkLXNoYWRvdztcbn1cbiIsIi8qIENvbG9ycyAqL1xuLyogTnVtZXJpY2FsIHZhbHVlcyAqL1xuLyogTGF5b3V0ICovXG5hIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMHZoIC0gNDIwcHggLSAoMTAwdmggLSA0MjBweCkgLyAyIC0gM3JlbSk7XG4gIGxlZnQ6IGNhbGMoMTAwdncgLSA2MDBweCAtICgxMDB2dyAtIDYwMHB4KSAvIDIpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMxYzAzNWUsICNjZTI4MDEsICNjZTI4MDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBHcm91bmQgKi9cbi5ncm91bmQge1xuICB3aWR0aDogMTIwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwJTtcbiAgYm90dG9tOiAtMTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNkZCMjNFLCAjMjU3YjIxIDMwJSwgIzEwMzQwZik7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtMmRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ncm91bmQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCByZ2JhKDIwNiwgMTA3LCA0NywgMC4zNyksIHRyYW5zcGFyZW50LCByZ2JhKDI4LCAzLCA5NCwgMC4yNykpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN1biAqL1xuQGtleWZyYW1lcyBwdWxzaW5nLXN1biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uc3VuMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiBjYWxjKDYwJSAqIDEuMik7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiBjYWxjKCgxMDAlIC0gNjAlKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjA2LCAxNzQsIDM2LCAwLjc2KSwgI2NlYzg5NCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNDtcbiAgYW5pbWF0aW9uOiBwdWxzaW5nLXN1biA1cyBpbmZpbml0ZTtcbn1cblxuLnN1bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogY2FsYyg4MCUgKiAxLjIpO1xuICB0b3A6IDEyJTtcbiAgbGVmdDogY2FsYygoMTAwJSAtIDgwJSkgLyAyKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNiwgODMsIDI5LCAwLjc2KSwgcmdiYSgyMDYsIDE0NiwgNTAsIDAuNzYpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA0O1xuICBhbmltYXRpb246IHB1bHNpbmctc3VuIDVzIGluZmluaXRlO1xufVxuXG4uc3VuMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICogMS4yKTtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IGNhbGMoKDEwMCUgLSAxMDAlKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTY4LCAxMCwgMzYsIDAuNzUpIDEwJSwgcmdiYSgyMDYsIDc2LCA5LCAwLjc1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogNDtcbiAgYW5pbWF0aW9uOiBwdWxzaW5nLXN1biA1cyBpbmZpbml0ZTtcbiAgbGVmdDogMjUlO1xufVxuXG4vKiBDbG91ZHMgKi9cbkBrZXlmcmFtZXMgbW92aW5nLWNsb3VkIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMjUlKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMyMCUpO1xuICB9XG59XG4uY2xvdWQtYm94IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDIwJTtcbiAgYW5pbWF0aW9uOiBtb3ZpbmctY2xvdWQgNDBzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogNztcbn1cblxuLmNsb3VkLTEge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA2NSU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLTIge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMCU7XG4gIGJvdHRvbTogLTIwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLTMge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMCU7XG4gIGJvdHRvbTogLTMwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjgxKSAyMCUsIHJnYmEoMTEyLCA3NSwgMTUzLCAwLjU4KSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3VkLTQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNTAlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jbG91ZC1zaGFkb3ctYm94IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAyMCU7XG4gIGFuaW1hdGlvbjogbW92aW5nLWNsb3VkIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gIHotaW5kZXg6IDc7XG59XG5cbi5jbG91ZC1zaGFkb3ctZmxpcCB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn1cblxuLmNsb3VkLXNoYWRvdy0xIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNjUlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmNsb3VkLXNoYWRvdy0yIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjAlO1xuICBib3R0b206IC0yMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmNsb3VkLXNoYWRvdy0zIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMzAlO1xuICBib3R0b206IC0zMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLCAyMTIsIDIxMiwgMC44MSkgMjAlLCByZ2JhKDExMiwgNzUsIDE1MywgMC41OCkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDAsIDE5LCAwLCAwLjMxKSAzMCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLmNsb3VkLXNoYWRvdy00IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTUwJTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIxMiwgMjEyLCAyMTIsIDAuODEpIDIwJSwgcmdiYSgxMTIsIDc1LCAxNTMsIDAuNTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAxOSwgMCwgMC4zMSkgMzAlLCB0cmFuc3BhcmVudCk7XG59IiwiQG1peGluIGNlbnRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */"]
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
      production: false
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