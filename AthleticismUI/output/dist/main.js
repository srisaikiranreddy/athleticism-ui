(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./products/products.module": [
		"./src/app/products/products.module.ts",
		"products-products-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n<div class=\"outlet\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-main-footer></app-main-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.outlet {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYix1QkFBc0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLm91dGxldCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(icons, router, platform) {
        var _this = this;
        this.icons = icons;
        this.router = router;
        this.platform = platform;
        this.icons.add([
            {
                name: 'star',
                url: '/assets/icons/star.svg',
            },
            {
                name: 'cart',
                url: '/assets/icons/cart.svg',
            },
            {
                name: 'avatar',
                url: '/assets/icons/avatar.svg',
            },
            {
                name: 'shopping-cart',
                url: '/assets/icons/shopping-cart.svg',
            }, {
                name: 'search',
                url: '/assets/icons/search.svg',
            },
        ]);
        // scroll to top
        this.router.events.subscribe(function (event) {
            if (_this.platform.isBrowser() && event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitIconsRegistryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitPlatformService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/data.service */ "./src/app/data/data.service.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_11__["UiModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            providers: [
                _data_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/data/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/data/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.products = [
            {
                id: 1,
                title: 'Dress Name',
                description: 'Dress Information',
                picture: '/assets/p1-1.jpeg',
                price: 170,
                sale: 145,
                photos: [
                    {
                        thumb: '/assets/p1-1.jpeg',
                        full: '/assets/p1-1.jpeg',
                        description: 'Jacket',
                    },
                    {
                        thumb: '/assets/p2-1.jpeg',
                        full: '/assets/p2-1.jpeg',
                        description: 'Jacket',
                    },
                    {
                        thumb: '/assets/p3-1.jpeg',
                        full: '/assets/p3-1.jpeg',
                        description: 'Jacket',
                    },
                    {
                        thumb: '/assets/p4-1.jpeg',
                        full: '/assets/p4-1.jpeg',
                        description: 'Jacket',
                    },
                ],
            }
        ];
    }
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-footer/main-footer.component */ "./src/app/footer/main-footer/main-footer.component.ts");




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [
                _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_3__["MainFooterComponent"],
            ],
            exports: [
                _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_3__["MainFooterComponent"],
            ],
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/footer/main-footer/main-footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/footer/main-footer/main-footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"main-wrapper\">\r\n    <div class=\"footer\">\r\n      <div>\r\n        <ul>\r\n          <li>\r\n            <h4>About Divis Couture</h4>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div>\r\n        <ul>\r\n          <li>\r\n            <h4>Customer Services</h4>\r\n          </li>\r\n          <li>\r\n            <a href=\"\">\r\n              Contact Us\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div>\r\n        <ul>\r\n          <li>\r\n            <h4>Terms & Conditions</h4>\r\n          </li>\r\n          <li><a href=\"\">\r\n            Returns Policy\r\n          </a>\r\n          </li>\r\n          <li><a href=\"\">\r\n            Terms & Conditions\r\n          </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/main-footer/main-footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/footer/main-footer/main-footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0 8px;\n  width: 1180px; }\n\n@media (max-width: 1200px) {\n  .main-wrapper {\n    padding: 0 24px;\n    width: 100%; } }\n\n@media (max-width: 1200px) and (max-width: 500px) {\n  .main-wrapper {\n    padding: 0 16px; } }\n\n:host {\n  background-color: #333434;\n  color: #F5F5F5; }\n\n.footer {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 24px 0; }\n\nh4 {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-bottom: 16px;\n  text-transform: uppercase; }\n\nul {\n  list-style: none; }\n\nul li {\n    font-size: 1rem;\n    margin: 8px 0; }\n\nul li a {\n      color: #F5F5F5;\n      text-decoration: none; }\n\nul li a:hover {\n        color: #5868D7; }\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL21haW4tZm9vdGVyL0M6XFxVc2Vyc1xcc3BhbGxlXFxEb3dubG9hZHNcXGUtY29tbWVyY2UtdmlqYXlhL3NyY1xcc3R5bGVzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9tYWluLWZvb3Rlci9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXHN0eWxlc1xcX3BhcmFtcy5zY3NzIiwic3JjL2FwcC9mb290ZXIvbWFpbi1mb290ZXIvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXGZvb3RlclxcbWFpbi1mb290ZXJcXG1haW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQXNCO0VBQ3RCLGVBQWM7RUFDZCxlQ0xRO0VETVIsY0FBYSxFQUNkOztBQUVEO0VBQ0U7SUFDRSxnQkFBa0I7SUFDbEIsWUFBVyxFQUNaLEVBQUE7O0FBQ0Q7RUFDRTtJQUNFLGdCQUFrQixFQUNuQixFQUFBOztBRWRMO0VBQ0UsMEJBQXlCO0VBQ3pCLGVERXVCLEVDRHhCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLCtCQUE4QjtFQUM5QixnQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsaUJBQWdCO0VBQ2hCLG9CQUFzQjtFQUN0QiwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFZakI7O0FBYkQ7SUFHSSxnQkFBZTtJQUNmLGNBQWUsRUFRaEI7O0FBWkg7TUFNTSxlRHRCbUI7TUN1Qm5CLHNCQUFxQixFQUl0Qjs7QUFYTDtRQVNRLGVENUJjLEVDNkJmOztBQUtQO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL21haW4tZm9vdGVyL21haW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhcmFtc1wiO1xyXG5cclxuLm1haW4td3JhcHBlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwICRncmlkO1xyXG4gIHdpZHRoOiAxMTgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWFpbi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDAgJGdyaWQqMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5tYWluLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAwICRncmlkKjI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRncmlkOiA4cHg7XHJcblxyXG4kdGV4dENvbG9yOiAjMzMzNDM0O1xyXG4kdGhlbWVCYWNrZ3JvdW5kOiAjM2Q0MDQ0O1xyXG4kcHJpbWFyeUNvbG9yOiAjNTg2OEQ3O1xyXG4kcHJpbWFyeUNvbG9yMjogIzZERURGNjtcclxuXHJcbiR3aGl0ZVNtb2tlQ29sb3I6ICNGNUY1RjU7XHJcbiRzYXRpbkNvbG9yOiNFQ0U4REY7XHJcbiRtZXJjdXJ5Q29sb3I6ICNlMWUxZTE7XHJcbiRzdG9ybUdyZXlDb2xvcjogIzdiN2Q4YjtcclxuJGNoYXJjb2FsQ29sb3I6ICMzZDQwNDQ7XHJcbiIsIkBpbXBvcnQgXCJwYXJhbXNcIjtcclxuQGltcG9ydCBcImNvbW1vblwiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM0MzQ7XHJcbiAgY29sb3I6ICR3aGl0ZVNtb2tlQ29sb3I7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6ICRncmlkKjMgMDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGdyaWQqMjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46ICRncmlkIDA7XHJcbiAgICBhe1xyXG4gICAgICBjb2xvcjogJHdoaXRlU21va2VDb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/main-footer/main-footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/footer/main-footer/main-footer.component.ts ***!
  \*************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainFooterComponent = /** @class */ (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () {
    };
    MainFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-footer',
            template: __webpack_require__(/*! ./main-footer.component.html */ "./src/app/footer/main-footer/main-footer.component.html"),
            styles: [__webpack_require__(/*! ./main-footer.component.scss */ "./src/app/footer/main-footer/main-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainFooterComponent);
    return MainFooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-header/main-header.component */ "./src/app/header/main-header/main-header.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/header/main-menu/main-menu.component.ts");









var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_5__["KitIconsModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_5__["KitOverlayModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_5__["KitSlideModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_5__["KitOutsideClickModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_5__["KitPositionModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UiModule"],
            ],
            declarations: [
                _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_7__["MainHeaderComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__["MainMenuComponent"],
            ],
            exports: [
                _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_7__["MainHeaderComponent"],
            ],
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/header/main-header/main-header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/header/main-header/main-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\r\n  <div class=\"main-wrapper\">\r\n    vijaya kavadi\r\n\r\n    \r\n  </div>\r\n  \r\n</div>\r\n\r\n<div class=\"navigation\">\r\n  <app-main-menu></app-main-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/header/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/header/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0 8px;\n  width: 1180px; }\n\n@media (max-width: 1200px) {\n  .main-wrapper {\n    padding: 0 24px;\n    width: 100%; } }\n\n@media (max-width: 1200px) and (max-width: 500px) {\n  .main-wrapper {\n    padding: 0 16px; } }\n\n:host {\n  margin-bottom: 12px;\n  border-bottom: 2px solid #e1e1e1;\n  color: #333434;\n  text-transform: uppercase; }\n\n.top-bar {\n  background: red;\n  color: #F5F5F5;\n  padding: 16px 0; }\n\n.top-bar .main-wrapper {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.top-bar .account a {\n    color: #F5F5F5;\n    text-decoration: none;\n    margin-right: 16px; }\n\n.top-bar .account a:hover {\n      color: #5868D7; }\n\n.head {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 16px; }\n\n.head .logo {\n    font-size: 3.9rem;\n    flex-shrink: 0;\n    letter-spacing: 12px;\n    padding-left: 12px; }\n\n.search {\n  display: flex;\n  flex-direction: row; }\n\n.search input {\n    border: none;\n    box-sizing: border-box;\n    border-radius: 4px 0 0 4px;\n    height: 32px;\n    padding: 0 12px;\n    width: 220px; }\n\n.search button {\n    background: #5868D7;\n    padding: 0 16px;\n    cursor: pointer;\n    color: #fff;\n    border: none;\n    border-radius: 0 4px 4px 0;\n    text-align: center;\n    text-transform: uppercase;\n    box-sizing: border-box; }\n\n.search button:hover {\n      box-shadow: 0 5px 30px rgba(79, 70, 228, 0.8); }\n\n@media (max-width: 400px) {\n  .search input {\n    width: 100px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21haW4taGVhZGVyL0M6XFxVc2Vyc1xcc3BhbGxlXFxEb3dubG9hZHNcXGUtY29tbWVyY2UtdmlqYXlhL3NyY1xcc3R5bGVzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9tYWluLWhlYWRlci9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXHN0eWxlc1xcX3BhcmFtcy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvbWFpbi1oZWFkZXIvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXGhlYWRlclxcbWFpbi1oZWFkZXJcXG1haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQXNCO0VBQ3RCLGVBQWM7RUFDZCxlQ0xRO0VETVIsY0FBYSxFQUNkOztBQUVEO0VBQ0U7SUFDRSxnQkFBa0I7SUFDbEIsWUFBVyxFQUNaLEVBQUE7O0FBQ0Q7RUFDRTtJQUNFLGdCQUFrQixFQUNuQixFQUFBOztBRWRMO0VBQ0Usb0JBQXdCO0VBQ3hCLGlDRElvQjtFQ0hwQixlREppQjtFQ0tqQiwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGVETHVCO0VDTXZCLGdCQUFrQixFQWlCbkI7O0FBcEJEO0lBS0ksb0JBQW1CO0lBQ25CLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCLEVBQy9COztBQVRIO0lBWU0sZURmbUI7SUNnQm5CLHNCQUFxQjtJQUNyQixtQkFBdUIsRUFJeEI7O0FBbEJMO01BZ0JRLGVEdEJjLEVDdUJmOztBQUtQO0VBQ0Usb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLGNBQWtCLEVBT25COztBQVpEO0lBT0ksa0JBQWlCO0lBQ2pCLGVBQWM7SUFDZCxxQkFBb0I7SUFDcEIsbUJBQWtCLEVBQ25COztBQUdIO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQixFQXVCcEI7O0FBekJEO0lBSUksYUFBWTtJQUNaLHVCQUFzQjtJQUN0QiwyQkFBMEI7SUFDMUIsYUFBWTtJQUNaLGdCQUFvQjtJQUNwQixhQUFZLEVBQ2I7O0FBVkg7SUFZSSxvQkR0RGtCO0lDdURsQixnQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixZQUFXO0lBQ1gsYUFBWTtJQUNaLDJCQUEwQjtJQUMxQixtQkFBa0I7SUFDbEIsMEJBQXlCO0lBQ3pCLHVCQUFzQixFQUl2Qjs7QUF4Qkg7TUFzQk0sOENBQTZDLEVBQzlDOztBQUlMO0VBQ0U7SUFFSSxhQUFZLEVBQ2IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYXJhbXNcIjtcclxuXHJcbi5tYWluLXdyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAkZ3JpZDtcclxuICB3aWR0aDogMTE4MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm1haW4td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwICRncmlkKjM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubWFpbi13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMCAkZ3JpZCoyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZ3JpZDogOHB4O1xyXG5cclxuJHRleHRDb2xvcjogIzMzMzQzNDtcclxuJHRoZW1lQmFja2dyb3VuZDogIzNkNDA0NDtcclxuJHByaW1hcnlDb2xvcjogIzU4NjhENztcclxuJHByaW1hcnlDb2xvcjI6ICM2REVERjY7XHJcblxyXG4kd2hpdGVTbW9rZUNvbG9yOiAjRjVGNUY1O1xyXG4kc2F0aW5Db2xvcjojRUNFOERGO1xyXG4kbWVyY3VyeUNvbG9yOiAjZTFlMWUxO1xyXG4kc3Rvcm1HcmV5Q29sb3I6ICM3YjdkOGI7XHJcbiRjaGFyY29hbENvbG9yOiAjM2Q0MDQ0O1xyXG4iLCJAaW1wb3J0IFwicGFyYW1zXCI7XHJcbkBpbXBvcnQgXCJjb21tb25cIjtcclxuXHJcbjpob3N0IHtcclxuICBtYXJnaW4tYm90dG9tOiAkZ3JpZCoxLjU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRtZXJjdXJ5Q29sb3I7XHJcbiAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRvcC1iYXIge1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBjb2xvcjogJHdoaXRlU21va2VDb2xvcjtcclxuICBwYWRkaW5nOiAkZ3JpZCoyIDA7XHJcbiAgLm1haW4td3JhcHBlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC5hY2NvdW50IHtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHdoaXRlU21va2VDb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRncmlkICogMjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAkZ3JpZCAqIDI7XHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAzLjlyZW07XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmc6IDAgJGdyaWQqMS41O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcclxuICAgIHBhZGRpbmc6IDAgJGdyaWQqMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IHJnYmEoNzksIDcwLCAyMjgsIDAuOCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuc2VhcmNoIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/main-header/main-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/header/main-header/main-header.component.ts ***!
  \*************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent(el) {
        this.el = el;
        this.displayMenu = false;
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
        this.menuAnchor = this.el.nativeElement;
    };
    MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-header',
            template: __webpack_require__(/*! ./main-header.component.html */ "./src/app/header/main-header/main-header.component.html"),
            styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/header/main-header/main-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/main-menu/main-menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/header/main-menu/main-menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li><a (click)=\"activate(1)\" (mouseover)=\"activate(1)\">Women</a></li>\r\n  <li><a (click)=\"activate(2)\" (mouseover)=\"activate(2)\">Men</a></li>\r\n</ul>\r\n\r\n<div *kitOverlay=\"displayMenu\"\r\n     kitPinPosition\r\n     position=\"bottom\"\r\n     [anchor]=\"menuAnchor\"\r\n     [@menuHost]=\"true\">\r\n  <div class=\"sub\"\r\n       [@fade]=\"true\"\r\n       (kitOutsideClick)=\"displayMenu = false\"\r\n       [skip]=\"menuAnchor\">\r\n    <div class=\"main-wrapper\">\r\n      <div *kitSlide=\"1\"\r\n           [@slide]=\"slideDirection | async\"\r\n           class=\"section\">\r\n        <div>\r\n          <div class=\"title\">\r\n            Shop by Category\r\n          </div>\r\n          <ul>\r\n            <li><a routerLink=\"/products\">New Arrivals</a></li>\r\n            <li><a routerLink=\"/products\">Ceoptop</a></li>\r\n            <li><a routerLink=\"/products\">Lehenga</a></li>\r\n            <li><a routerLink=\"/products\">Saree</a></li>\r\n            <li><a routerLink=\"/products\">Frock</a></li>\r\n            <li><a routerLink=\"/products\"><b>View All</b></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *kitSlide=\"2\"\r\n           [@slide]=\"slideDirection | async\"\r\n           class=\"section\">\r\n        <div>\r\n          <div class=\"title\">\r\n            Clothing\r\n          </div>\r\n          <ul>\r\n            <li><a routerLink=\"/products\">Jackets</a></li>\r\n            <li><a routerLink=\"/products\"><b>View All</b></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/main-menu/main-menu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/header/main-menu/main-menu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0 8px;\n  width: 1180px; }\n\n@media (max-width: 1200px) {\n  .main-wrapper {\n    padding: 0 24px;\n    width: 100%; } }\n\n@media (max-width: 1200px) and (max-width: 500px) {\n  .main-wrapper {\n    padding: 0 16px; } }\n\n:host {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.sub {\n  background: #F5F5F5;\n  border-bottom: 2px solid #e1e1e1;\n  display: block;\n  overflow: hidden;\n  width: 100%; }\n\n.sub .section {\n    padding: 16px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n\n.sub .section > div {\n      padding-right: 20px; }\n\n.sub .section .title {\n      font-size: 1.3rem;\n      font-weight: 600;\n      margin-bottom: 8px; }\n\n.sub .section ul {\n      align-items: flex-start;\n      display: flex;\n      flex-direction: column; }\n\n.sub .section ul li {\n        font-size: 1rem;\n        padding: 5px 0; }\n\n.sub .section ul li a {\n          color: initial;\n          text-decoration: none; }\n\n.sub .section ul li a:hover {\n            color: #5868D7; }\n\nul {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.2rem;\n  margin: 0;\n  list-style: none;\n  padding: 0; }\n\nul li {\n    cursor: pointer;\n    padding: 20px 16px;\n    text-align: center; }\n\nul li:hover {\n      background: #F5F5F5;\n      color: #5868D7; }\n\n@media (max-width: 600px) {\n  ul {\n    flex-wrap: wrap; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21haW4tbWVudS9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXHN0eWxlc1xcX2NvbW1vbi5zY3NzIiwic3JjL2FwcC9oZWFkZXIvbWFpbi1tZW51L0M6XFxVc2Vyc1xcc3BhbGxlXFxEb3dubG9hZHNcXGUtY29tbWVyY2UtdmlqYXlhL3NyY1xcc3R5bGVzXFxfcGFyYW1zLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9tYWluLW1lbnUvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXGhlYWRlclxcbWFpbi1tZW51XFxtYWluLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1QkFBc0I7RUFDdEIsZUFBYztFQUNkLGVDTFE7RURNUixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRTtJQUNFLGdCQUFrQjtJQUNsQixZQUFXLEVBQ1osRUFBQTs7QUFDRDtFQUNFO0lBQ0UsZ0JBQWtCLEVBQ25CLEVBQUE7O0FFZEw7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLG9CREh1QjtFQ0l2QixpQ0RGb0I7RUNHcEIsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixZQUFXLEVBK0JaOztBQXBDRDtJQU9JLGdCQUFvQjtJQUNwQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtCQUE4QixFQXlCL0I7O0FBbkNIO01BWU0sb0JBQW1CLEVBQ3BCOztBQWJMO01BZU0sa0JBQWlCO01BQ2pCLGlCQUFnQjtNQUNoQixtQkQxQkksRUMyQkw7O0FBbEJMO01Bb0JNLHdCQUF1QjtNQUN2QixjQUFhO01BQ2IsdUJBQXNCLEVBWXZCOztBQWxDTDtRQXdCUSxnQkFBZTtRQUNmLGVBQWMsRUFRZjs7QUFqQ1A7VUEyQlUsZUFBYztVQUNkLHNCQUFxQixFQUl0Qjs7QUFoQ1Q7WUE4QlksZURuQ1UsRUNvQ1g7O0FBT1g7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLFdBQVUsRUFVWDs7QUFoQkQ7SUFRSSxnQkFBZTtJQUNmLG1CQUE0QjtJQUM1QixtQkFBa0IsRUFLbkI7O0FBZkg7TUFZTSxvQkRwRG1CO01DcURuQixlRHhEZ0IsRUN5RGpCOztBQUlMO0VBQ0U7SUFDRSxnQkFBZSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFyYW1zXCI7XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgJGdyaWQ7XHJcbiAgd2lkdGg6IDExODBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5tYWluLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMCAkZ3JpZCozO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLm1haW4td3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmc6IDAgJGdyaWQqMjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGdyaWQ6IDhweDtcclxuXHJcbiR0ZXh0Q29sb3I6ICMzMzM0MzQ7XHJcbiR0aGVtZUJhY2tncm91bmQ6ICMzZDQwNDQ7XHJcbiRwcmltYXJ5Q29sb3I6ICM1ODY4RDc7XHJcbiRwcmltYXJ5Q29sb3IyOiAjNkRFREY2O1xyXG5cclxuJHdoaXRlU21va2VDb2xvcjogI0Y1RjVGNTtcclxuJHNhdGluQ29sb3I6I0VDRThERjtcclxuJG1lcmN1cnlDb2xvcjogI2UxZTFlMTtcclxuJHN0b3JtR3JleUNvbG9yOiAjN2I3ZDhiO1xyXG4kY2hhcmNvYWxDb2xvcjogIzNkNDA0NDtcclxuIiwiQGltcG9ydCBcInBhcmFtc1wiO1xyXG5AaW1wb3J0IFwiY29tbW9uXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViIHtcclxuICBiYWNrZ3JvdW5kOiAkd2hpdGVTbW9rZUNvbG9yO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkbWVyY3VyeUNvbG9yO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogJGdyaWQgKiAyIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgID4gZGl2IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkZ3JpZDtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogaW5pdGlhbDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnlDb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAkZ3JpZCoyLjUgJGdyaWQgKiAyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZVNtb2tlQ29sb3I7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgdWwge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/main-menu/main-menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/header/main-menu/main-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");




var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(el, slideHost) {
        this.el = el;
        this.slideHost = slideHost;
        this.displayMenu = false;
        this.slideHost.activateFirst = false;
    }
    Object.defineProperty(MainMenuComponent.prototype, "menuAnchor", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    MainMenuComponent.prototype.ngOnInit = function () {
        this.slideDirection = this.slideHost.directionChanges;
    };
    MainMenuComponent.prototype.activate = function (id) {
        if (this.displayMenu) {
            this.slideHost.active = id;
        }
        else {
            this.displayMenu = true;
            this.slideHost.activeInitial = id;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('@fade'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainMenuComponent.prototype, "fadeTrigger", void 0);
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/header/main-menu/main-menu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('menuHost', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter, :leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                        })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                        })),
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                    // entering
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => next', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => prev', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
                    ]),
                    // leaving
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('next => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('prev => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                    ]),
                ]),
            ],
            providers: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitSlideHostService"],
            ],
            styles: [__webpack_require__(/*! ./main-menu.component.scss */ "./src/app/header/main-menu/main-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitSlideHostService"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-button/ui-button-group/ui-button-group.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/ui-button/ui-button-group/ui-button-group.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex; }\n  :host.direction-row {\n    flex-direction: row; }\n  :host.direction-column {\n    flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktYnV0dG9uL3VpLWJ1dHRvbi1ncm91cC9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxcdWlcXHVpLWJ1dHRvblxcdWktYnV0dG9uLWdyb3VwXFx1aS1idXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBU2Q7RUFWRDtJQUlNLG9CQUFtQixFQUNwQjtFQUxMO0lBT00sdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdWkvdWktYnV0dG9uL3VpLWJ1dHRvbi1ncm91cC91aS1idXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAmLmRpcmVjdGlvbiB7XHJcbiAgICAmLXJvdyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAmLWNvbHVtbiB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/ui-button/ui-button-group/ui-button-group.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/ui-button/ui-button-group/ui-button-group.component.ts ***!
  \***************************************************************************/
/*! exports provided: UiButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiButtonGroupComponent", function() { return UiButtonGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");



/**
 * @apiOrder 2
 */
var UiButtonGroupComponent = /** @class */ (function () {
    function UiButtonGroupComponent(kitClass) {
        this.kitClass = kitClass;
        this.direction = 'row';
    }
    UiButtonGroupComponent.prototype.ngOnChanges = function () {
        this.applyClass();
    };
    UiButtonGroupComponent.prototype.ngOnInit = function () {
        this.applyClass();
    };
    UiButtonGroupComponent.prototype.applyClass = function () {
        this.kitClass.apply({
            direction: this.direction,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiButtonGroupComponent.prototype, "direction", void 0);
    UiButtonGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-button-group',
            template: "\n    <ng-content></ng-content>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitClassService"],
            ],
            styles: [__webpack_require__(/*! ./ui-button-group.component.scss */ "./src/app/ui/ui-button/ui-button-group/ui-button-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitClassService"]])
    ], UiButtonGroupComponent);
    return UiButtonGroupComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-button/ui-button.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui/ui-button/ui-button.module.ts ***!
  \**************************************************/
/*! exports provided: UiButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiButtonModule", function() { return UiButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var _ui_button_group_ui_button_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-button-group/ui-button-group.component */ "./src/app/ui/ui-button/ui-button-group/ui-button-group.component.ts");
/* harmony import */ var _ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-button/ui-button.component */ "./src/app/ui/ui-button/ui-button/ui-button.component.ts");






var UiButtonModule = /** @class */ (function () {
    function UiButtonModule() {
    }
    UiButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitIconsModule"],
            ],
            exports: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitCheckModule"],
                _ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_5__["UiButtonComponent"],
                _ui_button_group_ui_button_group_component__WEBPACK_IMPORTED_MODULE_4__["UiButtonGroupComponent"],
            ],
            declarations: [
                _ui_button_ui_button_component__WEBPACK_IMPORTED_MODULE_5__["UiButtonComponent"],
                _ui_button_group_ui_button_group_component__WEBPACK_IMPORTED_MODULE_4__["UiButtonGroupComponent"],
            ],
            providers: [],
        })
    ], UiButtonModule);
    return UiButtonModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-button/ui-button/ui-button.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui/ui-button/ui-button/ui-button.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  text-decoration: none;\n  margin-bottom: 0;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 3px;\n  border: 0;\n  transition-property: background;\n  transition-duration: .3s;\n  text-transform: uppercase; }\n  :host:focus {\n    outline: none; }\n  :host.color-default {\n    background: #5868d7;\n    color: #ffffff; }\n  :host.color-default:hover {\n      background: #5868d7; }\n  :host.color-default.checked {\n      background: #5868d7; }\n  :host.color-primary {\n    background: #66eef6;\n    color: #ffffff; }\n  :host.color-primary:hover {\n      background: #66eef6; }\n  :host.color-primary.checked {\n      background: #66eef6; }\n  :host.size-s {\n    padding: 2px 6px;\n    font-size: .65rem; }\n  :host.size-m {\n    padding: .7em 1em;\n    border-radius: 4px;\n    font-size: .75rem; }\n  :host.size-m .icon {\n      position: absolute;\n      left: 1em;\n      top: 0.7em;\n      width: 1.2em;\n      height: 1.2em; }\n  :host.size-m.withIcon {\n      padding-left: 2.6em; }\n  :host.size-l {\n    padding: 8px 20px;\n    font-size: 1rem; }\n  :host.type-size {\n    background: #f8f8f8;\n    color: #444444;\n    border: 1px solid transparent;\n    padding: 0;\n    line-height: 32px;\n    height: 32px;\n    width: 32px;\n    text-align: center; }\n  :host.type-size:hover {\n      background: #f2f2f2;\n      color: #333333; }\n  :host.type-size.checked {\n      border: 1px solid rgba(255, 255, 255, 0.83);\n      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3); }\n  :host.type-size.checked.color-default {\n        background: #5868d7;\n        color: #ffffff; }\n  :host.type-size.checked.color-primary {\n        background: #66eef6;\n        color: #ffffff; }\n  :host.type-color {\n    padding: 0;\n    height: 24px;\n    width: 24px;\n    border-radius: 50%;\n    border: 1px solid transparent; }\n  :host.type-color.checked {\n      border: 1px solid rgba(255, 255, 255, 0.83);\n      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3); }\n  :host.groupDirection-row {\n    border-radius: 0; }\n  :host.groupDirection-row:first-child {\n      border-bottom-left-radius: 3px;\n      border-top-left-radius: 3px; }\n  :host.groupDirection-row:last-child {\n      border-bottom-right-radius: 3px;\n      border-top-right-radius: 3px; }\n  :host.groupDirection-column {\n    border-radius: 0; }\n  :host.groupDirection-column:first-child {\n      border-top-right-radius: 3px;\n      border-top-left-radius: 3px; }\n  :host.groupDirection-column:last-child {\n      border-bottom-right-radius: 3px;\n      border-bottom-left-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktYnV0dG9uL3VpLWJ1dHRvbi9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxcdWlcXHVpLWJ1dHRvblxcdWktYnV0dG9uXFx1aS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQiwwQkFBaUI7S0FBakIsdUJBQWlCO01BQWpCLHNCQUFpQjtVQUFqQixrQkFBaUI7RUFDakIsbUJBZmdCO0VBZ0JoQixVQUFTO0VBQ1QsZ0NBQStCO0VBQy9CLHlCQUF3QjtFQUN4QiwwQkFBeUIsRUFzSDFCO0VBdklEO0lBbUJJLGNBQWEsRUFDZDtFQXBCSDtJQXVCTSxvQkFBbUI7SUFDbkIsZUFBYyxFQU9mO0VBL0JMO01BMEJRLG9CQUFtQixFQUNwQjtFQTNCUDtNQTZCUSxvQkFBbUIsRUFDcEI7RUE5QlA7SUFpQ00sb0JBQW1CO0lBQ25CLGVBQWMsRUFPZjtFQXpDTDtNQW9DUSxvQkFBbUIsRUFDcEI7RUFyQ1A7TUF1Q1Esb0JBQW1CLEVBQ3BCO0VBeENQO0lBNkNNLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFDbEI7RUEvQ0w7SUFpRE0sa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixrQkFBaUIsRUFXbEI7RUE5REw7TUFxRFEsbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxXQUFVO01BQ1YsYUFBWTtNQUNaLGNBQWEsRUFDZDtFQTFEUDtNQTREUSxvQkFBbUIsRUFDcEI7RUE3RFA7SUFnRU0sa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2hCO0VBbEVMO0lBd0VNLG9CQUFtQjtJQUNuQixlQUFjO0lBQ2QsOEJBQTZCO0lBQzdCLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLFlBQVc7SUFDWCxtQkFBa0IsRUFtQm5CO0VBbEdMO01BaUZRLG9CQUFtQjtNQUNuQixlQUFjLEVBQ2Y7RUFuRlA7TUFxRlEsNENBQTJDO01BQzNDLHlDQUF1QyxFQVd4QztFQWpHUDtRQXlGWSxvQkFBbUI7UUFDbkIsZUFBYyxFQUNmO0VBM0ZYO1FBNkZZLG9CQUFtQjtRQUNuQixlQUFjLEVBQ2Y7RUEvRlg7SUFvR00sV0FBVTtJQUNWLGFBQVk7SUFDWixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLDhCQUE2QixFQUs5QjtFQTdHTDtNQTBHUSw0Q0FBMkM7TUFDM0MseUNBQXVDLEVBQ3hDO0VBNUdQO0lBaUhNLGlCQUFnQixFQVNqQjtFQTFITDtNQW1IUSwrQkFySFU7TUFzSFYsNEJBdEhVLEVBdUhYO0VBckhQO01BdUhRLGdDQXpIVTtNQTBIViw2QkExSFUsRUEySFg7RUF6SFA7SUE0SE0saUJBQWdCLEVBU2pCO0VBcklMO01BOEhRLDZCQWhJVTtNQWlJViw0QkFqSVUsRUFrSVg7RUFoSVA7TUFrSVEsZ0NBcElVO01BcUlWLCtCQXJJVSxFQXNJWCIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLWJ1dHRvbi91aS1idXR0b24vdWktYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlclJhZGl1czogM3B4O1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICBib3JkZXI6IDA7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICYuY29sb3Ige1xyXG4gICAgJi1kZWZhdWx0IHtcclxuICAgICAgYmFja2dyb3VuZDogIzU4NjhkNztcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1ODY4ZDc7XHJcbiAgICAgIH1cclxuICAgICAgJi5jaGVja2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNTg2OGQ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjZlZWY2O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzY2ZWVmNjtcclxuICAgICAgfVxyXG4gICAgICAmLmNoZWNrZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2NmVlZjY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi5zaXplIHtcclxuICAgICYtcyB7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjY1cmVtO1xyXG4gICAgfVxyXG4gICAgJi1tIHtcclxuICAgICAgcGFkZGluZzogLjdlbSAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgIC5pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMWVtO1xyXG4gICAgICAgIHRvcDogMC43ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuMmVtO1xyXG4gICAgICAgIGhlaWdodDogMS4yZW07XHJcbiAgICAgIH1cclxuICAgICAgJi53aXRoSWNvbiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjZlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1sIHtcclxuICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJi50eXBlIHtcclxuICAgICYtZGVmYXVsdCB7XHJcbiAgICB9XHJcbiAgICAmLXNpemUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIH1cclxuICAgICAgJi5jaGVja2VkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODMpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDdweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAmLmNvbG9yIHtcclxuICAgICAgICAgICYtZGVmYXVsdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ODY4ZDc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1wcmltYXJ5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2ZWVmNjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWNvbG9yIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgJi5jaGVja2VkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODMpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDdweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLmdyb3VwRGlyZWN0aW9uIHtcclxuICAgICYtcm93IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtY29sdW1uIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgICAgfVxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui/ui-button/ui-button/ui-button.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/ui-button/ui-button/ui-button.component.ts ***!
  \***************************************************************/
/*! exports provided: UiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiButtonComponent", function() { return UiButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var _ui_button_group_ui_button_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-button-group/ui-button-group.component */ "./src/app/ui/ui-button/ui-button-group/ui-button-group.component.ts");




/**
 * @apiOrder 1
 */
var UiButtonComponent = /** @class */ (function () {
    function UiButtonComponent(kitClass, group) {
        this.kitClass = kitClass;
        this.group = group;
        this.color = 'default';
        this.disabled = false;
        this.size = 'm';
        this.type = 'default';
    }
    UiButtonComponent.prototype.ngOnChanges = function () {
        this.applyClass();
    };
    UiButtonComponent.prototype.ngOnInit = function () {
        this.applyClass();
    };
    UiButtonComponent.prototype.applyClass = function () {
        this.kitClass.apply({
            disabled: this.disabled,
            color: this.color,
            size: this.size,
            type: this.type,
            withIcon: !!this.icon,
            groupDirection: !!this.group ? this.group.direction : null,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiButtonComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiButtonComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", void 0)
    ], UiButtonComponent.prototype, "uiButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiButtonComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiButtonComponent.prototype, "type", void 0);
    UiButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'button[uiButton],a[uiButton]',
            template: "\n    <kit-icon *ngIf=\"icon\" [name]=\"icon\" class=\"icon\"></kit-icon>\n    <ng-content></ng-content>\n  ",
            providers: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitClassService"],
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./ui-button.component.scss */ "./src/app/ui/ui-button/ui-button/ui-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitClassService"],
            _ui_button_group_ui_button_group_component__WEBPACK_IMPORTED_MODULE_3__["UiButtonGroupComponent"]])
    ], UiButtonComponent);
    return UiButtonComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-input/ui-input.module.ts":
/*!************************************************!*\
  !*** ./src/app/ui/ui-input/ui-input.module.ts ***!
  \************************************************/
/*! exports provided: UiInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputModule", function() { return UiInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-input/ui-input.component */ "./src/app/ui/ui-input/ui-input/ui-input.component.ts");





var UiInputModule = /** @class */ (function () {
    function UiInputModule() {
    }
    UiInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            exports: [
                _ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_4__["UiInputComponent"],
            ],
            declarations: [
                _ui_input_ui_input_component__WEBPACK_IMPORTED_MODULE_4__["UiInputComponent"],
            ],
        })
    ], UiInputModule);
    return UiInputModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-input/ui-input/ui-input.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui/ui-input/ui-input/ui-input.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":hostinput:not([type=\"checkbox\"]):not([type=\"radio\"]) {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 2px;\n  transition: all .3s;\n  padding: 8px;\n  box-shadow: 0 0 2px 0 rgba(50, 50, 50, 0.1);\n  background: transparent;\n  border: 1px solid #e1e1e1;\n  color: #4a505a; }\n  :hostinput:not([type=\"checkbox\"]):not([type=\"radio\"]):hover {\n    outline: none;\n    border-color: #6DEDF6; }\n  :hostinput:not([type=\"checkbox\"]):not([type=\"radio\"]):focus {\n    outline: none;\n    border-color: #6DEDF6;\n    box-shadow: 0 0 6px 0 rgba(109, 237, 246, 0.7); }\n  :hostinput[type=\"checkbox\"] {\n  position: relative;\n  width: 14px;\n  height: 14px; }\n  :hostinput[type=\"checkbox\"]:before {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: 0;\n    border-radius: 2px;\n    transition: all .3s;\n    background: #ffffff;\n    border: 1px solid #e1e1e1; }\n  :hostinput[type=\"checkbox\"]:after {\n    -webkit-transform: rotate(45deg) scale(1);\n            transform: rotate(45deg) scale(1);\n    position: absolute;\n    left: 4px;\n    top: 1px;\n    display: table;\n    width: 5px;\n    height: 8px;\n    border-top-width: 0px;\n    border-right-width: 2px;\n    border-bottom-width: 2px;\n    border-left-width: 0px;\n    border-color: #ffffff;\n    border-style: solid;\n    content: \" \";\n    transition: all .3s; }\n  :hostinput[type=\"checkbox\"]:hover:before {\n    border-color: #6DEDF6; }\n  :hostinput[type=\"checkbox\"]:focus:before {\n    border-color: #e1e1e1; }\n  :hostinput[type=\"checkbox\"]:checked:after {\n    border-color: #5868D7; }\n  :hostinput[type=\"radio\"] {\n  position: relative;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%; }\n  :hostinput[type=\"radio\"]:before {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: 0;\n    border-radius: 50%;\n    transition: all .3s;\n    background: #ffffff;\n    border: 1px solid #e1e1e1; }\n  :hostinput[type=\"radio\"]:after {\n    position: absolute;\n    left: 4px;\n    top: 4px;\n    display: table;\n    width: 6px;\n    height: 6px;\n    background: #ffffff;\n    border: 0;\n    border-radius: 50%;\n    content: \" \";\n    transition: all .3s; }\n  :hostinput[type=\"radio\"]:hover:before {\n    border-color: #6DEDF6; }\n  :hostinput[type=\"radio\"]:focus:before {\n    border-color: #e1e1e1; }\n  :hostinput[type=\"radio\"]:checked:after {\n    background: #5868D7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktaW5wdXQvdWktaW5wdXQvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHVpXFx1aS1pbnB1dFxcdWktaW5wdXRcXHVpLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS91aS1pbnB1dC91aS1pbnB1dC9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXHN0eWxlc1xcX3BhcmFtcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWiw0Q0FBMkM7RUFDM0Msd0JBQXVCO0VBQ3ZCLDBCQ0ZrQjtFREdsQixlQUFjLEVBVWY7RUFwQkg7SUFZTSxjQUFhO0lBQ2Isc0JDVmlCLEVEV2xCO0VBZEw7SUFnQk0sY0FBYTtJQUNiLHNCQ2RpQjtJRGVqQiwrQ0FBOEMsRUFDL0M7RUFuQkw7RUF1QkksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBeUNiO0VBbEVIO0lBMkJNLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsUUFBTztJQUNQLGdCQUFlO0lBQ2YsT0FBTTtJQUNOLFVBQVM7SUFDVCxTQUFRO0lBQ1IsVUFBUztJQUNULG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsb0JBQW1CO0lBQ25CLDBCQy9CZ0IsRURnQ2pCO0VBdkNMO0lBeUNNLDBDQUFpQztZQUFqQyxrQ0FBaUM7SUFDakMsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxTQUFRO0lBQ1IsZUFBYztJQUNkLFdBQVU7SUFDVixZQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLHdCQUF1QjtJQUN2Qix5QkFBd0I7SUFDeEIsdUJBQXNCO0lBQ3RCLHNCQUFxQjtJQUNyQixvQkFBbUI7SUFDbkIsYUFBWTtJQUNaLG9CQUFtQixFQUNwQjtFQXhETDtJQTBETSxzQkN2RGlCLEVEd0RsQjtFQTNETDtJQTZETSxzQkN0RGdCLEVEdURqQjtFQTlETDtJQWdFTSxzQkM5RGdCLEVEK0RqQjtFQWpFTDtFQXFFSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0IsRUFxQ25CO0VBN0dIO0lBMEVNLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsUUFBTztJQUNQLGdCQUFlO0lBQ2YsT0FBTTtJQUNOLFVBQVM7SUFDVCxTQUFRO0lBQ1IsVUFBUztJQUNULG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsb0JBQW1CO0lBQ25CLDBCQzlFZ0IsRUQrRWpCO0VBdEZMO0lBd0ZNLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsU0FBUTtJQUNSLGVBQWM7SUFDZCxXQUFVO0lBQ1YsWUFBVztJQUNYLG9CQUFtQjtJQUNuQixVQUFTO0lBQ1QsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixvQkFBbUIsRUFDcEI7RUFuR0w7SUFxR00sc0JDbEdpQixFRG1HbEI7RUF0R0w7SUF3R00sc0JDakdnQixFRGtHakI7RUF6R0w7SUEyR00sb0JDekdnQixFRDBHakIiLCJmaWxlIjoic3JjL2FwcC91aS91aS1pbnB1dC91aS1pbnB1dC91aS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYXJhbXNcIjtcclxuXHJcbjpob3N0IHtcclxuICAmaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pOm5vdChbdHlwZT1cInJhZGlvXCJdKSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoNTAsIDUwLCA1MCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJG1lcmN1cnlDb2xvcjtcclxuICAgIGNvbG9yOiAjNGE1MDVhO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlDb2xvcjI7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeUNvbG9yMjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMTA5LCAyMzcsIDI0NiwgMC43KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lcmN1cnlDb2xvcjtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNHB4O1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwcHg7XHJcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwcHg7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlDb2xvcjI7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzOmJlZm9yZSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJG1lcmN1cnlDb2xvcjtcclxuICAgIH1cclxuICAgICY6Y2hlY2tlZDphZnRlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlDb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1lcmN1cnlDb2xvcjtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgdG9wOiA0cHg7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcjpiZWZvcmUge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5Q29sb3IyO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1czpiZWZvcmUge1xyXG4gICAgICBib3JkZXItY29sb3I6ICRtZXJjdXJ5Q29sb3I7XHJcbiAgICB9XHJcbiAgICAmOmNoZWNrZWQ6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZ3JpZDogOHB4O1xyXG5cclxuJHRleHRDb2xvcjogIzMzMzQzNDtcclxuJHRoZW1lQmFja2dyb3VuZDogIzNkNDA0NDtcclxuJHByaW1hcnlDb2xvcjogIzU4NjhENztcclxuJHByaW1hcnlDb2xvcjI6ICM2REVERjY7XHJcblxyXG4kd2hpdGVTbW9rZUNvbG9yOiAjRjVGNUY1O1xyXG4kc2F0aW5Db2xvcjojRUNFOERGO1xyXG4kbWVyY3VyeUNvbG9yOiAjZTFlMWUxO1xyXG4kc3Rvcm1HcmV5Q29sb3I6ICM3YjdkOGI7XHJcbiRjaGFyY29hbENvbG9yOiAjM2Q0MDQ0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ui-input/ui-input/ui-input.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/ui-input/ui-input/ui-input.component.ts ***!
  \************************************************************/
/*! exports provided: UiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInputComponent", function() { return UiInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiInputComponent = /** @class */ (function () {
    function UiInputComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", void 0)
    ], UiInputComponent.prototype, "uiInput", void 0);
    UiInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'input[uiInput]',
            template: '',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./ui-input.component.scss */ "./src/app/ui/ui-input/ui-input/ui-input.component.scss")]
        })
    ], UiInputComponent);
    return UiInputComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-photo-carousel/ui-photo-carousel-slide/ui-photo-carousel-slide.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ui/ui-photo-carousel/ui-photo-carousel-slide/ui-photo-carousel-slide.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\nimg {\n  max-width: 100%;\n  height: 600px;\n  pointer-events: none; }\n\n@media (max-width: 1200px) {\n  img {\n    height: 450px; } }\n\n@media (max-width: 900px) {\n  img {\n    height: 400px; } }\n\n@media (max-width: 800px) {\n  img {\n    height: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktcGhvdG8tY2Fyb3VzZWwvdWktcGhvdG8tY2Fyb3VzZWwtc2xpZGUvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHVpXFx1aS1waG90by1jYXJvdXNlbFxcdWktcGhvdG8tY2Fyb3VzZWwtc2xpZGVcXHVpLXBob3RvLWNhcm91c2VsLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGNBQWE7RUFDYixxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRTtJQUNFLGNBQWEsRUFDZCxFQUFBOztBQUVIO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFFSDtFQUNFO0lBQ0UsY0FBYSxFQUNkLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS91aS1waG90by1jYXJvdXNlbC91aS1waG90by1jYXJvdXNlbC1zbGlkZS91aS1waG90by1jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ui-photo-carousel/ui-photo-carousel-slide/ui-photo-carousel-slide.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/ui/ui-photo-carousel/ui-photo-carousel-slide/ui-photo-carousel-slide.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UiPhotoCarouselSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiPhotoCarouselSlideComponent", function() { return UiPhotoCarouselSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");






/**
 * @apiOrder 2
 */
var UiPhotoCarouselSlideComponent = /** @class */ (function () {
    function UiPhotoCarouselSlideComponent(host) {
        var _this = this;
        this.host = host;
        this.destroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.host.directionChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (d) {
            _this.slideTrigger = d;
        });
    }
    UiPhotoCarouselSlideComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiPhotoCarouselSlideComponent.prototype, "photo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('@slide'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiPhotoCarouselSlideComponent.prototype, "slideTrigger", void 0);
    UiPhotoCarouselSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ui-photo-carousel-slide',
            template: "<img [attr.src]=\"photo.full\" [attr.alt]=\"photo.description\">",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [
                    // entering
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => prev', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => next', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
                    ]),
                    // leaving
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('prev => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('next => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' })),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./ui-photo-carousel-slide.component.scss */ "./src/app/ui/ui-photo-carousel/ui-photo-carousel-slide/ui-photo-carousel-slide.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitSlideHostService"]])
    ], UiPhotoCarouselSlideComponent);
    return UiPhotoCarouselSlideComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-photo-carousel/ui-photo-carousel.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui/ui-photo-carousel/ui-photo-carousel.module.ts ***!
  \******************************************************************/
/*! exports provided: UiPhotoCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiPhotoCarouselModule", function() { return UiPhotoCarouselModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var _ui_photo_carousel_slide_ui_photo_carousel_slide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-photo-carousel-slide/ui-photo-carousel-slide.component */ "./src/app/ui/ui-photo-carousel/ui-photo-carousel-slide/ui-photo-carousel-slide.component.ts");
/* harmony import */ var _ui_photo_carousel_ui_photo_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-photo-carousel/ui-photo-carousel.component */ "./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.ts");






var UiPhotoCarouselModule = /** @class */ (function () {
    function UiPhotoCarouselModule() {
    }
    UiPhotoCarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitSlideModule"],
            ],
            exports: [
                _ui_photo_carousel_ui_photo_carousel_component__WEBPACK_IMPORTED_MODULE_5__["UiPhotoCarouselComponent"],
                _ui_photo_carousel_slide_ui_photo_carousel_slide_component__WEBPACK_IMPORTED_MODULE_4__["UiPhotoCarouselSlideComponent"],
            ],
            declarations: [
                _ui_photo_carousel_ui_photo_carousel_component__WEBPACK_IMPORTED_MODULE_5__["UiPhotoCarouselComponent"],
                _ui_photo_carousel_slide_ui_photo_carousel_slide_component__WEBPACK_IMPORTED_MODULE_4__["UiPhotoCarouselSlideComponent"],
            ],
        })
    ], UiPhotoCarouselModule);
    return UiPhotoCarouselModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbs\">\r\n  <a *ngFor=\"let photo of photos; let index = index\"\r\n     href=\"javascript:void(0)\"\r\n     [class.-active]=\"(activeChanges | async) === index\"\r\n     (click)=\"activate(index)\">\r\n    <img [attr.src]=\"photo.thumb\">\r\n  </a>\r\n</div>\r\n<div class=\"wrapper\"\r\n     (swipeleft)=\"next()\"\r\n     (swipeup)=\"next()\"\r\n     (swiperight)=\"prev()\"\r\n     (swipedown)=\"prev()\">\r\n  <ng-container *ngFor=\"let photo of photos; let index = index\">\r\n    <ui-photo-carousel-slide *kitSlide=\"index\" [photo]=\"photo\"></ui-photo-carousel-slide>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row; }\n\n.thumbs {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100px;\n  height: 100px; }\n\n.thumbs a {\n    text-align: center;\n    margin-right: 10px; }\n\n.thumbs a img {\n      height: 100px; }\n\n.thumbs a.-active {\n      box-shadow: 0 0 10px 5px #f5f3f3;\n      border-radius: 6px; }\n\n.wrapper {\n  overflow: hidden;\n  position: relative;\n  flex-grow: 1; }\n\n@media (max-width: 900px) {\n  :host {\n    flex-direction: column; }\n  .thumbs {\n    flex-direction: row;\n    order: 2; } }\n\n@media (max-width: 800px) {\n  .thumbs {\n    height: 60px;\n    width: 60px; }\n    .thumbs a img {\n      height: 60px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktcGhvdG8tY2Fyb3VzZWwvdWktcGhvdG8tY2Fyb3VzZWwvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHVpXFx1aS1waG90by1jYXJvdXNlbFxcdWktcGhvdG8tY2Fyb3VzZWxcXHVpLXBob3RvLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsK0JBQThCO0VBQzlCLGFBQVk7RUFDWixjQUFhLEVBWWQ7O0FBakJEO0lBT0ksbUJBQWtCO0lBQ2xCLG1CQUFrQixFQVFuQjs7QUFoQkg7TUFVTSxjQUFhLEVBQ2Q7O0FBWEw7TUFhTSxpQ0FBK0M7TUFDL0MsbUJBQWtCLEVBQ25COztBQUlMO0VBQ0UsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRTtJQUNFLHVCQUFzQixFQUN2QjtFQUNEO0lBQ0Usb0JBQW1CO0lBQ25CLFNBQVEsRUFDVCxFQUFBOztBQUdIO0VBQ0U7SUFDRSxhQUFZO0lBQ1osWUFBVyxFQU1aO0lBUkQ7TUFLTSxhQUFZLEVBQ2IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLXBob3RvLWNhcm91c2VsL3VpLXBob3RvLWNhcm91c2VsL3VpLXBob3RvLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnRodW1icyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAmLi1hY3RpdmUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgyNDUsIDI0MywgMjQzLCAxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnRodW1icyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAudGh1bWJzIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYXtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UiPhotoCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiPhotoCarouselComponent", function() { return UiPhotoCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");



/**
 * @apiOrder 1
 */
var UiPhotoCarouselComponent = /** @class */ (function () {
    function UiPhotoCarouselComponent(host) {
        this.host = host;
        /**
         * Slide auto-changing interval.
         */
        this.interval = 5000;
        this.photos = [];
    }
    UiPhotoCarouselComponent.prototype.ngOnInit = function () {
        this.activeChanges = this.host.activeChanges;
    };
    UiPhotoCarouselComponent.prototype.activate = function (index) {
        this.host.active = index;
    };
    UiPhotoCarouselComponent.prototype.prev = function () {
        this.host.prev(true);
    };
    UiPhotoCarouselComponent.prototype.next = function () {
        this.host.next(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiPhotoCarouselComponent.prototype, "interval", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UiPhotoCarouselComponent.prototype, "photos", void 0);
    UiPhotoCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-photo-carousel',
            template: __webpack_require__(/*! ./ui-photo-carousel.component.html */ "./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitSlideHostService"],
            ],
            styles: [__webpack_require__(/*! ./ui-photo-carousel.component.scss */ "./src/app/ui/ui-photo-carousel/ui-photo-carousel/ui-photo-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitSlideHostService"]])
    ], UiPhotoCarouselComponent);
    return UiPhotoCarouselComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-qt-input/ui-qt-input.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ui/ui-qt-input/ui-qt-input.module.ts ***!
  \******************************************************/
/*! exports provided: UiQtInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiQtInputModule", function() { return UiQtInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_qt_input_ui_qt_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-qt-input/ui-qt-input.component */ "./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.ts");





var UiQtInputModule = /** @class */ (function () {
    function UiQtInputModule() {
    }
    UiQtInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            exports: [
                _ui_qt_input_ui_qt_input_component__WEBPACK_IMPORTED_MODULE_4__["UiQtInputComponent"],
            ],
            declarations: [
                _ui_qt_input_ui_qt_input_component__WEBPACK_IMPORTED_MODULE_4__["UiQtInputComponent"],
            ],
        })
    ], UiQtInputModule);
    return UiQtInputModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"minus()\">-</button>\r\n<input [(ngModel)]=\"viewState\">\r\n<button (click)=\"plus()\">+</button>\r\n"

/***/ }),

/***/ "./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border: 1px solid #CCCCCC;\n  padding: 6px 8px;\n  border-radius: 4px;\n  width: 95px; }\n\nbutton {\n  background: transparent;\n  border: none;\n  color: #5868D7;\n  cursor: pointer; }\n\nbutton:focus {\n    outline: none; }\n\ninput {\n  background: transparent;\n  width: 50px;\n  border: none;\n  text-align: center; }\n\ninput:focus {\n    outline: none; }\n\n@media (max-width: 600px) {\n  input {\n    width: 16px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktcXQtaW5wdXQvdWktcXQtaW5wdXQvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHVpXFx1aS1xdC1pbnB1dFxcdWktcXQtaW5wdXRcXHVpLXF0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS91aS1xdC1pbnB1dC91aS1xdC1pbnB1dC9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXHN0eWxlc1xcX3BhcmFtcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQXlCO0VBQ3pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsWUFBVyxFQUVaOztBQUVEO0VBQ0Usd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixlQ1RvQjtFRFVwQixnQkFBZSxFQUloQjs7QUFSRDtJQU1JLGNBQWEsRUFDZDs7QUFHSDtFQUNFLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQixFQUluQjs7QUFSRDtJQU1JLGNBQWEsRUFDZDs7QUFHSDtFQUNFO0lBQ0UsWUFBVyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS91aS1xdC1pbnB1dC91aS1xdC1pbnB1dC91aS1xdC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYXJhbXNcIjtcclxuXHJcbjpob3N0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiA5NXB4O1xyXG5cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogNTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCIkZ3JpZDogOHB4O1xyXG5cclxuJHRleHRDb2xvcjogIzMzMzQzNDtcclxuJHRoZW1lQmFja2dyb3VuZDogIzNkNDA0NDtcclxuJHByaW1hcnlDb2xvcjogIzU4NjhENztcclxuJHByaW1hcnlDb2xvcjI6ICM2REVERjY7XHJcblxyXG4kd2hpdGVTbW9rZUNvbG9yOiAjRjVGNUY1O1xyXG4kc2F0aW5Db2xvcjojRUNFOERGO1xyXG4kbWVyY3VyeUNvbG9yOiAjZTFlMWUxO1xyXG4kc3Rvcm1HcmV5Q29sb3I6ICM3YjdkOGI7XHJcbiRjaGFyY29hbENvbG9yOiAjM2Q0MDQ0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: KIT_QT_INPUT_VALUE_ACCESSOR, UiQtInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIT_QT_INPUT_VALUE_ACCESSOR", function() { return KIT_QT_INPUT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiQtInputComponent", function() { return UiQtInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");




var KIT_QT_INPUT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return UiQtInputComponent; }),
    multi: true,
};
var UiQtInputComponent = /** @class */ (function () {
    function UiQtInputComponent(cdr) {
        this.cdr = cdr;
        this.max = null;
        this.min = 0;
        this.changes$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.disabled = false;
        this.touches$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UiQtInputComponent.prototype.ngOnChanges = function () {
    };
    UiQtInputComponent.prototype.ngOnInit = function () {
    };
    UiQtInputComponent.prototype.minus = function () {
        if (this.min === null || this.state > this.min) {
            this.update(this.state - 1);
        }
    };
    UiQtInputComponent.prototype.plus = function () {
        if (this.max === null || this.state < this.max) {
            this.update(this.state + 1);
        }
    };
    UiQtInputComponent.prototype.registerOnChange = function (fn) {
        this.changes$.subscribe(fn);
    };
    UiQtInputComponent.prototype.registerOnTouched = function (fn) {
        this.touches$.subscribe(fn);
    };
    UiQtInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    UiQtInputComponent.prototype.writeValue = function (rawValue) {
        this.update(rawValue);
        this.cdr.markForCheck();
    };
    UiQtInputComponent.prototype.update = function (state) {
        this.state = state;
        this.viewState = state;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UiQtInputComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UiQtInputComponent.prototype, "min", void 0);
    UiQtInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-qt-input',
            template: __webpack_require__(/*! ./ui-qt-input.component.html */ "./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [KIT_QT_INPUT_VALUE_ACCESSOR],
            styles: [__webpack_require__(/*! ./ui-qt-input.component.scss */ "./src/app/ui/ui-qt-input/ui-qt-input/ui-qt-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], UiQtInputComponent);
    return UiQtInputComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-rating/ui-rating.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui/ui-rating/ui-rating.module.ts ***!
  \**************************************************/
/*! exports provided: UiRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiRatingModule", function() { return UiRatingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var _ui_rating_ui_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-rating/ui-rating.component */ "./src/app/ui/ui-rating/ui-rating/ui-rating.component.ts");





var UiRatingModule = /** @class */ (function () {
    function UiRatingModule() {
    }
    UiRatingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitIconsModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitRepeatModule"],
            ],
            exports: [
                _ui_rating_ui_rating_component__WEBPACK_IMPORTED_MODULE_4__["UiRatingComponent"],
            ],
            declarations: [
                _ui_rating_ui_rating_component__WEBPACK_IMPORTED_MODULE_4__["UiRatingComponent"],
            ],
        })
    ], UiRatingModule);
    return UiRatingModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-rating/ui-rating/ui-rating.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui/ui-rating/ui-rating/ui-rating.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"icon\">\r\n  <kit-icon *kitRepeat=\"total; let index = index\"\r\n            [name]=\"icon\"\r\n            class=\"icon\"\r\n            [class.active]=\"index < value\">\r\n  </kit-icon>\r\n</ng-container>\r\n<ng-container *ngIf=\"!icon\">\r\n        <span *kitRepeat=\"total; let index = index\"\r\n              class=\"icon\"\r\n              [class.active]=\"index < value\"\r\n              [innerHtml]=\"symbol\">\r\n        </span>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/ui/ui-rating/ui-rating/ui-rating.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui/ui-rating/ui-rating/ui-rating.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  color: #cccccc;\n  width: 20px;\n  height: 20px; }\n  .icon.active {\n    color: #e8ba03; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktcmF0aW5nL3VpLXJhdGluZy9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxcdWlcXHVpLXJhdGluZ1xcdWktcmF0aW5nXFx1aS1yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFjO0VBQ2QsWUFBVztFQUNYLGFBQVksRUFJYjtFQVBEO0lBS0ksZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvdWkvdWktcmF0aW5nL3VpLXJhdGluZy91aS1yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNlOGJhMDM7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/ui-rating/ui-rating/ui-rating.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/ui-rating/ui-rating/ui-rating.component.ts ***!
  \***************************************************************/
/*! exports provided: UiRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiRatingComponent", function() { return UiRatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");



var UiRatingComponent = /** @class */ (function () {
    function UiRatingComponent(kitClass) {
        this.kitClass = kitClass;
        this.symbol = '&#x2605;';
        this.total = 5;
    }
    UiRatingComponent.prototype.ngOnChanges = function () {
        this.kitClass.apply({});
    };
    UiRatingComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UiRatingComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiRatingComponent.prototype, "symbol", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiRatingComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UiRatingComponent.prototype, "value", void 0);
    UiRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-rating',
            template: __webpack_require__(/*! ./ui-rating.component.html */ "./src/app/ui/ui-rating/ui-rating/ui-rating.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitClassService"]],
            styles: [__webpack_require__(/*! ./ui-rating.component.scss */ "./src/app/ui/ui-rating/ui-rating/ui-rating.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitClassService"]])
    ], UiRatingComponent);
    return UiRatingComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-select/ui-select.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui/ui-select/ui-select.module.ts ***!
  \**************************************************/
/*! exports provided: UiSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelectModule", function() { return UiSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_select_ui_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-select/ui-select.component */ "./src/app/ui/ui-select/ui-select/ui-select.component.ts");





var UiSelectModule = /** @class */ (function () {
    function UiSelectModule() {
    }
    UiSelectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            exports: [
                _ui_select_ui_select_component__WEBPACK_IMPORTED_MODULE_4__["UiSelectComponent"],
            ],
            declarations: [
                _ui_select_ui_select_component__WEBPACK_IMPORTED_MODULE_4__["UiSelectComponent"],
            ],
            providers: [],
        })
    ], UiSelectModule);
    return UiSelectModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-select/ui-select/ui-select.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui/ui-select/ui-select/ui-select.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-sizing: border-box;\n  border-radius: 2px;\n  background: transparent;\n  border: 1px solid #e1e1e1;\n  color: #4a505a;\n  padding: 8px;\n  transition: all .3s;\n  width: 100%; }\n  :host:hover {\n    outline: none;\n    border-color: #6DEDF6; }\n  :host:focus {\n    outline: none;\n    border-color: #6DEDF6;\n    box-shadow: 0 0 6px 0 rgba(109, 237, 246, 0.7); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktc2VsZWN0L3VpLXNlbGVjdC9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxcdWlcXHVpLXNlbGVjdFxcdWktc2VsZWN0XFx1aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3VpLXNlbGVjdC91aS1zZWxlY3QvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxzdHlsZXNcXF9wYXJhbXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLDBCQ0dvQjtFREZwQixlQUFjO0VBQ2QsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixZQUFXLEVBVVo7RUFsQkQ7SUFVSSxjQUFhO0lBQ2Isc0JDUm1CLEVEU3BCO0VBWkg7SUFjSSxjQUFhO0lBQ2Isc0JDWm1CO0lEYW5CLCtDQUE4QyxFQUMvQyIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLXNlbGVjdC91aS1zZWxlY3QvdWktc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhcmFtc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRtZXJjdXJ5Q29sb3I7XHJcbiAgY29sb3I6ICM0YTUwNWE7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeUNvbG9yMjtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeUNvbG9yMjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDEwOSwgMjM3LCAyNDYsIDAuNyk7XHJcbiAgfVxyXG59XHJcbiIsIiRncmlkOiA4cHg7XHJcblxyXG4kdGV4dENvbG9yOiAjMzMzNDM0O1xyXG4kdGhlbWVCYWNrZ3JvdW5kOiAjM2Q0MDQ0O1xyXG4kcHJpbWFyeUNvbG9yOiAjNTg2OEQ3O1xyXG4kcHJpbWFyeUNvbG9yMjogIzZERURGNjtcclxuXHJcbiR3aGl0ZVNtb2tlQ29sb3I6ICNGNUY1RjU7XHJcbiRzYXRpbkNvbG9yOiNFQ0U4REY7XHJcbiRtZXJjdXJ5Q29sb3I6ICNlMWUxZTE7XHJcbiRzdG9ybUdyZXlDb2xvcjogIzdiN2Q4YjtcclxuJGNoYXJjb2FsQ29sb3I6ICMzZDQwNDQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/ui-select/ui-select/ui-select.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/ui-select/ui-select/ui-select.component.ts ***!
  \***************************************************************/
/*! exports provided: UiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSelectComponent", function() { return UiSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiSelectComponent = /** @class */ (function () {
    function UiSelectComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", void 0)
    ], UiSelectComponent.prototype, "uiSelect", void 0);
    UiSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'select[uiSelect]',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./ui-select.component.scss */ "./src/app/ui/ui-select/ui-select/ui-select.component.scss")]
        })
    ], UiSelectComponent);
    return UiSelectComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu-group/ui-side-menu-group.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu-group/ui-side-menu-group.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  border-bottom: 1px solid #eeeeee; }\n  :host:last-child {\n    border-bottom: 0; }\n  .title {\n  display: flex;\n  flex-direction: row;\n  padding: 12px 0;\n  cursor: pointer;\n  font-size: 1rem; }\n  .title .wrapper {\n    flex-grow: 1; }\n  .title .arrow {\n    border: 0;\n    background: transparent;\n    padding-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktc2lkZS1tZW51L3VpLXNpZGUtbWVudS1ncm91cC9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxcdWlcXHVpLXNpZGUtbWVudVxcdWktc2lkZS1tZW51LWdyb3VwXFx1aS1zaWRlLW1lbnUtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUNBQWdDLEVBSWpDO0VBTkQ7SUFJSSxpQkFBZ0IsRUFDakI7RUFHSDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLGdCQUFlLEVBU2hCO0VBZEQ7SUFPSSxhQUFZLEVBQ2I7RUFSSDtJQVVJLFVBQVM7SUFDVCx3QkFBdUI7SUFDdkIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdWkvdWktc2lkZS1tZW51L3VpLXNpZGUtbWVudS1ncm91cC91aS1zaWRlLW1lbnUtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICAud3JhcHBlciB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIC5hcnJvdyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu-group/ui-side-menu-group.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu-group/ui-side-menu-group.component.ts ***!
  \************************************************************************************/
/*! exports provided: UiSideMenuGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSideMenuGroupComponent", function() { return UiSideMenuGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");



/**
 * @apiOrder 3
 */
var UiSideMenuGroupComponent = /** @class */ (function () {
    function UiSideMenuGroupComponent(item) {
        this.item = item;
    }
    Object.defineProperty(UiSideMenuGroupComponent.prototype, "active", {
        get: function () {
            return this.item.active;
        },
        enumerable: true,
        configurable: true
    });
    UiSideMenuGroupComponent.prototype.toggle = function () {
        this.item.toggle();
    };
    UiSideMenuGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-side-menu-group',
            template: "\n    <div class=\"title\" (click)=\"toggle()\">\n      <span class=\"wrapper\"><ng-content></ng-content></span>\n      <button class=\"arrow\">\n        <ng-container *ngIf=\"active\">&#10005;</ng-container>\n        <ng-container *ngIf=\"!active\">&#9661;</ng-container>\n      </button>\n    </div>\n    <ng-content select=\"ui-side-menu-sub\"></ng-content>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitCollapseItemService"],
            ],
            styles: [__webpack_require__(/*! ./ui-side-menu-group.component.scss */ "./src/app/ui/ui-side-menu/ui-side-menu-group/ui-side-menu-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitCollapseItemService"]])
    ], UiSideMenuGroupComponent);
    return UiSideMenuGroupComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu-item/ui-side-menu-item.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu-item/ui-side-menu-item.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 4px 0;\n  border-bottom: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: #797575;\n  font-weight: 400; }\n  :host:last-child {\n    border-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktc2lkZS1tZW51L3VpLXNpZGUtbWVudS1pdGVtL0M6XFxVc2Vyc1xcc3BhbGxlXFxEb3dubG9hZHNcXGUtY29tbWVyY2UtdmlqYXlhL3NyY1xcYXBwXFx1aVxcdWktc2lkZS1tZW51XFx1aS1zaWRlLW1lbnUtaXRlbVxcdWktc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2QsaUJBQWdCLEVBTWpCO0VBYkQ7SUFXSSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC91aS91aS1zaWRlLW1lbnUvdWktc2lkZS1tZW51LWl0ZW0vdWktc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNzk3NTc1O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu-item/ui-side-menu-item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu-item/ui-side-menu-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UiSideMenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSideMenuItemComponent", function() { return UiSideMenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");



/**
 * @apiOrder 2
 */
var UiSideMenuItemComponent = /** @class */ (function () {
    function UiSideMenuItemComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", void 0)
    ], UiSideMenuItemComponent.prototype, "uiSideMenuItem", void 0);
    UiSideMenuItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-side-menu-item,a[uiSideMenuItem]',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitCollapseItemService"],
            ],
            styles: [__webpack_require__(/*! ./ui-side-menu-item.component.scss */ "./src/app/ui/ui-side-menu/ui-side-menu-item/ui-side-menu-item.component.scss")]
        })
    ], UiSideMenuItemComponent);
    return UiSideMenuItemComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu-sub/ui-side-menu-sub.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu-sub/ui-side-menu-sub.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  overflow: hidden;\n  color: #797575;\n  border: none;\n  font-weight: 700;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktc2lkZS1tZW51L3VpLXNpZGUtbWVudS1zdWIvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHVpXFx1aS1zaWRlLW1lbnVcXHVpLXNpZGUtbWVudS1zdWJcXHVpLXNpZGUtbWVudS1zdWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLXNpZGUtbWVudS91aS1zaWRlLW1lbnUtc3ViL3VpLXNpZGUtbWVudS1zdWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogIzc5NzU3NTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu-sub/ui-side-menu-sub.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu-sub/ui-side-menu-sub.component.ts ***!
  \********************************************************************************/
/*! exports provided: UiSideMenuSubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSideMenuSubComponent", function() { return UiSideMenuSubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @apiOrder 5
 */
var UiSideMenuSubComponent = /** @class */ (function () {
    function UiSideMenuSubComponent() {
        this.collapseTrigger = true;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('@collapse'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSideMenuSubComponent.prototype, "collapseTrigger", void 0);
    UiSideMenuSubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ui-side-menu-sub',
            template: "\n    <div class=\"wrapper\">\n      <ng-content></ng-content>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapse', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 })),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./ui-side-menu-sub.component.scss */ "./src/app/ui/ui-side-menu/ui-side-menu-sub/ui-side-menu-sub.component.scss")]
        })
    ], UiSideMenuSubComponent);
    return UiSideMenuSubComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu.module.ts":
/*!********************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu.module.ts ***!
  \********************************************************/
/*! exports provided: UiSideMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSideMenuModule", function() { return UiSideMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var _ui_side_menu_group_ui_side_menu_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-side-menu-group/ui-side-menu-group.component */ "./src/app/ui/ui-side-menu/ui-side-menu-group/ui-side-menu-group.component.ts");
/* harmony import */ var _ui_side_menu_item_ui_side_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-side-menu-item/ui-side-menu-item.component */ "./src/app/ui/ui-side-menu/ui-side-menu-item/ui-side-menu-item.component.ts");
/* harmony import */ var _ui_side_menu_sub_ui_side_menu_sub_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-side-menu-sub/ui-side-menu-sub.component */ "./src/app/ui/ui-side-menu/ui-side-menu-sub/ui-side-menu-sub.component.ts");
/* harmony import */ var _ui_side_menu_ui_side_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-side-menu/ui-side-menu.component */ "./src/app/ui/ui-side-menu/ui-side-menu/ui-side-menu.component.ts");








var UiSideMenuModule = /** @class */ (function () {
    function UiSideMenuModule() {
    }
    UiSideMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["KitCollapseModule"],
            ],
            exports: [
                _ui_side_menu_ui_side_menu_component__WEBPACK_IMPORTED_MODULE_7__["UiSideMenuComponent"],
                _ui_side_menu_item_ui_side_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["UiSideMenuItemComponent"],
                _ui_side_menu_group_ui_side_menu_group_component__WEBPACK_IMPORTED_MODULE_4__["UiSideMenuGroupComponent"],
                _ui_side_menu_sub_ui_side_menu_sub_component__WEBPACK_IMPORTED_MODULE_6__["UiSideMenuSubComponent"],
            ],
            declarations: [
                _ui_side_menu_ui_side_menu_component__WEBPACK_IMPORTED_MODULE_7__["UiSideMenuComponent"],
                _ui_side_menu_item_ui_side_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["UiSideMenuItemComponent"],
                _ui_side_menu_group_ui_side_menu_group_component__WEBPACK_IMPORTED_MODULE_4__["UiSideMenuGroupComponent"],
                _ui_side_menu_sub_ui_side_menu_sub_component__WEBPACK_IMPORTED_MODULE_6__["UiSideMenuSubComponent"],
            ],
            providers: [],
        })
    ], UiSideMenuModule);
    return UiSideMenuModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu/ui-side-menu.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu/ui-side-menu.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: transparent;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktc2lkZS1tZW51L3VpLXNpZGUtbWVudS9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxcdWlcXHVpLXNpZGUtbWVudVxcdWktc2lkZS1tZW51XFx1aS1zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2Qsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLXNpZGUtbWVudS91aS1zaWRlLW1lbnUvdWktc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ui-side-menu/ui-side-menu/ui-side-menu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui/ui-side-menu/ui-side-menu/ui-side-menu.component.ts ***!
  \************************************************************************/
/*! exports provided: UiSideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSideMenuComponent", function() { return UiSideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");



/**
 * @apiOrder 1
 */
var UiSideMenuComponent = /** @class */ (function () {
    function UiSideMenuComponent(host) {
        this.host = host;
        /**
       * Allow few panels open at a time.
       */
        this.multiple = false;
    }
    UiSideMenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes['multiple']) {
            this.host.multiple = this.multiple;
        }
    };
    UiSideMenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSideMenuComponent.prototype, "multiple", void 0);
    UiSideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-side-menu',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [
                _ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitCollapseHostService"],
            ],
            styles: [__webpack_require__(/*! ./ui-side-menu.component.scss */ "./src/app/ui/ui-side-menu/ui-side-menu/ui-side-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_kit_core__WEBPACK_IMPORTED_MODULE_2__["KitCollapseHostService"]])
    ], UiSideMenuComponent);
    return UiSideMenuComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-slider/ui-slider.module.ts":
/*!**************************************************!*\
  !*** ./src/app/ui/ui-slider/ui-slider.module.ts ***!
  \**************************************************/
/*! exports provided: UiSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSliderModule", function() { return UiSliderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_slider_ui_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-slider/ui-slider.component */ "./src/app/ui/ui-slider/ui-slider/ui-slider.component.ts");




var UiSliderModule = /** @class */ (function () {
    function UiSliderModule() {
    }
    UiSliderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [
                _ui_slider_ui_slider_component__WEBPACK_IMPORTED_MODULE_3__["UiSliderComponent"],
            ],
            exports: [
                _ui_slider_ui_slider_component__WEBPACK_IMPORTED_MODULE_3__["UiSliderComponent"],
            ],
        })
    ], UiSliderModule);
    return UiSliderModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-slider/ui-slider/ui-slider.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui/ui-slider/ui-slider/ui-slider.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\"\r\n     #sliderRef\r\n     (pan)=\"handleMove($event)\"\r\n     (tap)=\"handleMove($event)\">\r\n  <div class=\"bg\"></div>\r\n  <div [style.left.px]=\"fillLeft\"\r\n       [style.right.px]=\"fillRight\"\r\n       class=\"fill\"></div>\r\n  <div *ngIf=\"range\"\r\n       [style.left.px]=\"leftPointerLeft\"\r\n       class=\"pointer\"\r\n       tabindex=\"0\"></div>\r\n  <div class=\"pointer\"\r\n       [style.left.px]=\"mainPointerLeft\"\r\n       tabindex=\"0\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui/ui-slider/ui-slider/ui-slider.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui/ui-slider/ui-slider/ui-slider.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\n  height: 4px;\n  padding: 4px 0;\n  position: relative; }\n\n.bg {\n  background: #dddddd;\n  height: 4px; }\n\n.fill {\n  background: #2399e5;\n  bottom: 4px;\n  height: 4px;\n  left: 0;\n  position: absolute;\n  top: 4px; }\n\n.pointer {\n  background: #ffffff;\n  border: 1px solid #2399e5;\n  border-radius: 50%;\n  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  cursor: pointer;\n  height: 10px;\n  position: absolute;\n  top: 1px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 10px; }\n\n.pointer:focus {\n    background: #f9f9f9;\n    box-shadow: 1px 1px 11px rgba(0, 0, 0, 0.4);\n    outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktc2xpZGVyL3VpLXNsaWRlci9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxcdWlcXHVpLXNsaWRlclxcdWktc2xpZGVyXFx1aS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQUxVO0VBTVYsZUFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixZQVpVLEVBYVg7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsWUFmTztFQWdCUCxZQWxCVTtFQW1CVixRQUFPO0VBQ1AsbUJBQWtCO0VBQ2xCLFNBbkJPLEVBb0JSOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsMkNBQXlDO0VBQ3pDLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLGFBOUJZO0VBK0JaLG1CQUFrQjtFQUNsQixTQUFvQztFQUNwQyxvQ0FBMkI7VUFBM0IsNEJBQTJCO0VBQzNCLFlBbENZLEVBd0NiOztBQWpCRDtJQWFJLG9CQUFtQjtJQUNuQiw0Q0FBMEM7SUFDMUMsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvdWkvdWktc2xpZGVyL3VpLXNsaWRlci91aS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVpZ2h0OiA0cHg7XHJcbiRwb2ludGVyOiAxMHB4O1xyXG4kcGFkOiA0cHg7XHJcblxyXG4uc2xpZGVyIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgcGFkZGluZzogJHBhZCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJnIHtcclxuICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxufVxyXG5cclxuLmZpbGwge1xyXG4gIGJhY2tncm91bmQ6ICMyMzk5ZTU7XHJcbiAgYm90dG9tOiAkcGFkO1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6ICRwYWQ7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzk5ZTU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogJHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogKCRoZWlnaHQgLSAkcG9pbnRlcikgLyAyICsgJHBhZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6ICRwb2ludGVyO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTFweCByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/ui-slider/ui-slider/ui-slider.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/ui-slider/ui-slider/ui-slider.component.ts ***!
  \***************************************************************/
/*! exports provided: uiSliderValueAccessor, UiSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiSliderValueAccessor", function() { return uiSliderValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSliderComponent", function() { return UiSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-kit/core */ "./node_modules/@ngx-kit/core/fesm5/ngx-kit-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var uiSliderValueAccessor = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return UiSliderComponent; }),
    multi: true,
};
var UiSliderComponent = /** @class */ (function () {
    function UiSliderComponent(cdr) {
        this.cdr = cdr;
        this.min = 0;
        this.max = 100;
        this.step = 1;
        /**
         * Range section mode.
         * Model: [number, number]
         */
        this.range = false;
        /**
         * Fill space from start to pointer.
         * Always true for range-mode.
         */
        this.fill = true;
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.disabled = false;
        this.touches = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    UiSliderComponent.prototype.ngOnChanges = function () {
        this.rangeLength = this.max - this.min;
        this.totalSteps = this.rangeLength / this.step;
        this.updateView();
    };
    UiSliderComponent.prototype.registerOnChange = function (fn) {
        this.changes.subscribe(fn);
    };
    UiSliderComponent.prototype.registerOnTouched = function (fn) {
        this.touches.subscribe(fn);
    };
    UiSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    UiSliderComponent.prototype.writeValue = function (rawValue) {
        this.state = rawValue;
        this.updateView();
    };
    UiSliderComponent.prototype.handleMove = function (event) {
        var xPosition = this.calcXPosition(event.center.x);
        var width = this.sliderRef.nativeElement.clientWidth;
        var relPosition = xPosition / width;
        var rawValue = this.totalSteps * relPosition * this.step + this.min;
        var value = Math.round(this.totalSteps * relPosition) * this.step + this.min;
        if (this.range) {
            if (Object(_ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.state)) {
                var mid = (this.state[0] + this.state[1]) / 2;
                if (rawValue <= mid && value !== this.state[0]) {
                    // Move left pointer
                    this.updateStateAfterMove([value, this.state[1]]);
                }
                else if (rawValue >= mid && value !== this.state[1]) {
                    // Move right pointer
                    this.updateStateAfterMove([this.state[0], value]);
                }
            }
        }
        else {
            if (this.state !== value) {
                this.updateStateAfterMove(value);
            }
        }
    };
    UiSliderComponent.prototype.calcXPosition = function (clientX) {
        var width = this.sliderRef.nativeElement.clientWidth;
        var sliderRect = this.sliderRef.nativeElement.getBoundingClientRect();
        return clientX <= sliderRect.left
            ? 0
            : clientX >= sliderRect.right
                ? width
                : clientX - sliderRect.left;
    };
    UiSliderComponent.prototype.updateStateAfterMove = function (state) {
        this.state = state;
        this.updateView();
        this.changes.next(this.state);
    };
    UiSliderComponent.prototype.updateView = function () {
        var width = this.sliderRef.nativeElement.clientWidth;
        if (this.range) {
            if (Object(_ngx_kit_core__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.state)) {
                this.leftPointerLeft = Math.round(((this.state[0] - this.min) / this.rangeLength) * width);
                this.mainPointerLeft = Math.round(((this.state[1] - this.min) / this.rangeLength) * width);
                this.fillLeft = this.leftPointerLeft;
                this.fillRight = width - this.mainPointerLeft;
            }
        }
        else {
            this.mainPointerLeft = Math.round(((this.state - this.min) / this.rangeLength) * width);
            this.fillLeft = 0;
            this.fillRight = this.fill ? width - this.mainPointerLeft : width;
        }
        this.cdr.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSliderComponent.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSliderComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSliderComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSliderComponent.prototype, "range", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UiSliderComponent.prototype, "fill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sliderRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UiSliderComponent.prototype, "sliderRef", void 0);
    UiSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-slider',
            template: __webpack_require__(/*! ./ui-slider.component.html */ "./src/app/ui/ui-slider/ui-slider/ui-slider.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [uiSliderValueAccessor],
            styles: [__webpack_require__(/*! ./ui-slider.component.scss */ "./src/app/ui/ui-slider/ui-slider/ui-slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], UiSliderComponent);
    return UiSliderComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-textarea/ui-textarea.module.ts":
/*!******************************************************!*\
  !*** ./src/app/ui/ui-textarea/ui-textarea.module.ts ***!
  \******************************************************/
/*! exports provided: UiTextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTextareaModule", function() { return UiTextareaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_textarea_ui_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-textarea/ui-textarea.component */ "./src/app/ui/ui-textarea/ui-textarea/ui-textarea.component.ts");





var UiTextareaModule = /** @class */ (function () {
    function UiTextareaModule() {
    }
    UiTextareaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            exports: [
                _ui_textarea_ui_textarea_component__WEBPACK_IMPORTED_MODULE_4__["UiTextareaComponent"],
            ],
            declarations: [
                _ui_textarea_ui_textarea_component__WEBPACK_IMPORTED_MODULE_4__["UiTextareaComponent"],
            ],
        })
    ], UiTextareaModule);
    return UiTextareaModule;
}());



/***/ }),

/***/ "./src/app/ui/ui-textarea/ui-textarea/ui-textarea.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui/ui-textarea/ui-textarea/ui-textarea.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 2px;\n  transition: all .3s;\n  padding: 4px 8px;\n  box-shadow: 0 0 2px 0 rgba(50, 50, 50, 0.1);\n  background: #f7f7f7;\n  border: 1px solid #d6d6d6;\n  color: #4a505a; }\n  :host:hover {\n    outline: none;\n    border-color: #acadb0; }\n  :host:focus {\n    outline: none;\n    border-color: #2399e5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvdWktdGV4dGFyZWEvdWktdGV4dGFyZWEvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHVpXFx1aS10ZXh0YXJlYVxcdWktdGV4dGFyZWFcXHVpLXRleHRhcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQiw0Q0FBMkM7RUFDM0Msb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixlQUFjLEVBU2Y7RUFsQkQ7SUFXSSxjQUFhO0lBQ2Isc0JBQXFCLEVBQ3RCO0VBYkg7SUFlSSxjQUFhO0lBQ2Isc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdWkvdWktdGV4dGFyZWEvdWktdGV4dGFyZWEvdWktdGV4dGFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKDUwLCA1MCwgNTAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNmQ2O1xyXG4gIGNvbG9yOiAjNGE1MDVhO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2FjYWRiMDtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjM5OWU1O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/ui-textarea/ui-textarea/ui-textarea.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui/ui-textarea/ui-textarea/ui-textarea.component.ts ***!
  \*********************************************************************/
/*! exports provided: UiTextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiTextareaComponent", function() { return UiTextareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiTextareaComponent = /** @class */ (function () {
    function UiTextareaComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", void 0)
    ], UiTextareaComponent.prototype, "uiTextarea", void 0);
    UiTextareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'textarea[uiTextarea]',
            template: '',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./ui-textarea.component.scss */ "./src/app/ui/ui-textarea/ui-textarea/ui-textarea.component.scss")]
        })
    ], UiTextareaComponent);
    return UiTextareaComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_button_ui_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-button/ui-button.module */ "./src/app/ui/ui-button/ui-button.module.ts");
/* harmony import */ var _ui_input_ui_input_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-input/ui-input.module */ "./src/app/ui/ui-input/ui-input.module.ts");
/* harmony import */ var _ui_photo_carousel_ui_photo_carousel_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-photo-carousel/ui-photo-carousel.module */ "./src/app/ui/ui-photo-carousel/ui-photo-carousel.module.ts");
/* harmony import */ var _ui_qt_input_ui_qt_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-qt-input/ui-qt-input.module */ "./src/app/ui/ui-qt-input/ui-qt-input.module.ts");
/* harmony import */ var _ui_rating_ui_rating_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-rating/ui-rating.module */ "./src/app/ui/ui-rating/ui-rating.module.ts");
/* harmony import */ var _ui_select_ui_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-select/ui-select.module */ "./src/app/ui/ui-select/ui-select.module.ts");
/* harmony import */ var _ui_side_menu_ui_side_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-side-menu/ui-side-menu.module */ "./src/app/ui/ui-side-menu/ui-side-menu.module.ts");
/* harmony import */ var _ui_slider_ui_slider_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui-slider/ui-slider.module */ "./src/app/ui/ui-slider/ui-slider.module.ts");
/* harmony import */ var _ui_textarea_ui_textarea_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui-textarea/ui-textarea.module */ "./src/app/ui/ui-textarea/ui-textarea.module.ts");











var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ui_button_ui_button_module__WEBPACK_IMPORTED_MODULE_2__["UiButtonModule"],
                _ui_input_ui_input_module__WEBPACK_IMPORTED_MODULE_3__["UiInputModule"],
                _ui_photo_carousel_ui_photo_carousel_module__WEBPACK_IMPORTED_MODULE_4__["UiPhotoCarouselModule"],
                _ui_qt_input_ui_qt_input_module__WEBPACK_IMPORTED_MODULE_5__["UiQtInputModule"],
                _ui_rating_ui_rating_module__WEBPACK_IMPORTED_MODULE_6__["UiRatingModule"],
                _ui_select_ui_select_module__WEBPACK_IMPORTED_MODULE_7__["UiSelectModule"],
                _ui_side_menu_ui_side_menu_module__WEBPACK_IMPORTED_MODULE_8__["UiSideMenuModule"],
                _ui_slider_ui_slider_module__WEBPACK_IMPORTED_MODULE_9__["UiSliderModule"],
                _ui_textarea_ui_textarea_module__WEBPACK_IMPORTED_MODULE_10__["UiTextareaModule"],
            ],
            declarations: [],
            exports: [
                _ui_button_ui_button_module__WEBPACK_IMPORTED_MODULE_2__["UiButtonModule"],
                _ui_input_ui_input_module__WEBPACK_IMPORTED_MODULE_3__["UiInputModule"],
                _ui_photo_carousel_ui_photo_carousel_module__WEBPACK_IMPORTED_MODULE_4__["UiPhotoCarouselModule"],
                _ui_qt_input_ui_qt_input_module__WEBPACK_IMPORTED_MODULE_5__["UiQtInputModule"],
                _ui_rating_ui_rating_module__WEBPACK_IMPORTED_MODULE_6__["UiRatingModule"],
                _ui_select_ui_select_module__WEBPACK_IMPORTED_MODULE_7__["UiSelectModule"],
                _ui_side_menu_ui_side_menu_module__WEBPACK_IMPORTED_MODULE_8__["UiSideMenuModule"],
                _ui_slider_ui_slider_module__WEBPACK_IMPORTED_MODULE_9__["UiSliderModule"],
                _ui_textarea_ui_textarea_module__WEBPACK_IMPORTED_MODULE_10__["UiTextareaModule"],
            ],
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\spalle\Downloads\e-commerce-vijaya\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map