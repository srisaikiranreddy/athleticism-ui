(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/card/card.component.html":
/*!***************************************************!*\
  !*** ./src/app/products/card/card.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/products/', product.id]\">\r\n<div class=\"product-photo\">\r\n  <img [src]=\"product.picture\">\r\n</div>\r\n<div class=\"product-info\">\r\n  <div>\r\n    <div class=\"title\">\r\n      <h3>{{ product.title }}</h3>\r\n    </div>\r\n    <div class=\"sub-title\">{{ product.description }}</div>\r\n  </div>\r\n  <div class=\"price-box\">\r\n    <p class=\"old-price\">{{ product.price }}$</p>\r\n    <p class=\"new-price\">{{ product.sale }}$</p>\r\n  </div>\r\n</div>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/products/card/card.component.scss":
/*!***************************************************!*\
  !*** ./src/app/products/card/card.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-sizing: border-box;\n  width: 100%; }\n\na {\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  text-decoration: none;\n  color: inherit; }\n\na:hover {\n    box-shadow: 0 0 15px rgba(88, 104, 215, 0.4); }\n\n.product-photo {\n  align-items: center;\n  background-color: #ffffff;\n  box-sizing: border-box;\n  display: flex;\n  height: 300px;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: 16px;\n  width: 100%; }\n\n.product-photo img {\n    max-height: 100%;\n    max-width: 100%; }\n\n.product-info {\n  box-sizing: border-box;\n  text-align: center;\n  width: 100%; }\n\n.product-info .title h3 {\n    font-size: 1.2rem; }\n\n.product-info .title a {\n    color: #333434;\n    text-decoration: none; }\n\n.product-info .sub-title {\n    font-size: 1rem; }\n\n.product-info .price-box {\n    align-items: baseline;\n    color: #3d4044;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin: 16px 0; }\n\n.product-info .price-box p {\n      margin: 0; }\n\n.product-info .price-box .old-price {\n      color: #7b7d8b;\n      margin-right: 8px;\n      text-decoration: line-through; }\n\n.product-info .price-box .new-price {\n      font-size: 1.4rem;\n      font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY2FyZC9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxccHJvZHVjdHNcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2NhcmQvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxzdHlsZXNcXF9wYXJhbXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFzQjtFQUN0QixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGNBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixlQUFjLEVBSWY7O0FBVEQ7SUFPSSw2Q0FBNEMsRUFDN0M7O0FBR0g7RUFDRSxvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsb0JBQXNCO0VBQ3RCLFlBQVcsRUFLWjs7QUFkRDtJQVdJLGlCQUFnQjtJQUNoQixnQkFBZSxFQUNoQjs7QUFHSDtFQUNFLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsWUFBVyxFQWlDWjs7QUFwQ0Q7SUFNTSxrQkFBaUIsRUFDbEI7O0FBUEw7SUFTTSxlQ3pDYTtJRDBDYixzQkFBcUIsRUFDdEI7O0FBWEw7SUFjSSxnQkFBZSxFQUNoQjs7QUFmSDtJQWlCSSxzQkFBcUI7SUFDckIsZUN6Q21CO0lEMENuQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixlQUFpQixFQWFsQjs7QUFuQ0g7TUF3Qk0sVUFBUyxFQUNWOztBQXpCTDtNQTJCTSxlQ25Ea0I7TURvRGxCLGtCQzlESTtNRCtESiw4QkFBNkIsRUFDOUI7O0FBOUJMO01BZ0NNLGtCQUFpQjtNQUNqQixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFyYW1zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6ICRncmlkKjI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSg4OCwgMTA0LCAyMTUsIDAuNCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC1waG90byB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGdyaWQqMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC50aXRsZSB7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICAucHJpY2UtYm94IHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGNvbG9yOiAkY2hhcmNvYWxDb2xvcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46ICRncmlkKjIgMDtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAub2xkLXByaWNlIHtcclxuICAgICAgY29sb3I6ICRzdG9ybUdyZXlDb2xvcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZ3JpZDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB9XHJcbiAgICAubmV3LXByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRncmlkOiA4cHg7XHJcblxyXG4kdGV4dENvbG9yOiAjMzMzNDM0O1xyXG4kdGhlbWVCYWNrZ3JvdW5kOiAjM2Q0MDQ0O1xyXG4kcHJpbWFyeUNvbG9yOiAjNTg2OEQ3O1xyXG4kcHJpbWFyeUNvbG9yMjogIzZERURGNjtcclxuXHJcbiR3aGl0ZVNtb2tlQ29sb3I6ICNGNUY1RjU7XHJcbiRzYXRpbkNvbG9yOiNFQ0U4REY7XHJcbiRtZXJjdXJ5Q29sb3I6ICNlMWUxZTE7XHJcbiRzdG9ybUdyZXlDb2xvcjogIzdiN2Q4YjtcclxuJGNoYXJjb2FsQ29sb3I6ICMzZDQwNDQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/card/card.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/card/card.component.ts ***!
  \*************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "product", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/products/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/products/card/card.component.scss")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/products/filters/filters.component.html":
/*!*********************************************************!*\
  !*** ./src/app/products/filters/filters.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-section\">\r\n  <div class=\"head\">\r\n    <div>\r\n      <div class=\"title\">Refine <a class=\"clear-all\" href=\"\"> Clear All</a></div>\r\n    </div>\r\n    <div class=\"chosen-box\">\r\n      <div>\r\n        <a href=\"\">\r\n          <span class=\"icon\"></span>\r\n          <span class=\"selected-type\">Category:</span> Clothing\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <ui-side-menu>\r\n      <ui-side-menu-group>\r\n        <div class=\"title\">Ceoptop\r\n        </div>\r\n        <ui-side-menu-sub>\r\n          <div class=\"type-box\">\r\n            <div>\r\n              <label>\r\n                <input [uiInput] type=\"checkbox\" checked>\r\n                <span>Lehenga</span>\r\n              </label>\r\n            </div>\r\n            <div><label>\r\n              <input [uiInput] type=\"checkbox\">\r\n              <span>Saree</span> </label>\r\n            </div>\r\n            <div><label>\r\n              <input [uiInput] type=\"checkbox\">\r\n              <span>Frock</span> </label>\r\n            </div>\r\n          </div>\r\n        </ui-side-menu-sub>\r\n      </ui-side-menu-group>\r\n    </ui-side-menu>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"title\">Size</div>\r\n    <div class=\"size-box\">\r\n      <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'xs'\">XS</button>\r\n      <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'s'\">S</button>\r\n      <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'m'\">M</button>\r\n      <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'l'\">L</button>\r\n      <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'xl'\">XL</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"title\">Color</div>\r\n    <div class=\"color-box\">\r\n      <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'1'\"\r\n              [style.background]=\"'#ccc'\"></button>\r\n      <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'2'\"\r\n              [style.background]=\"'#000C48'\"></button>\r\n      <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'3'\"\r\n              [style.background]=\"'#883C73'\"></button>\r\n      <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'4'\"\r\n              [style.background]=\"'#AC9934'\"></button>\r\n      <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'5'\"\r\n              [style.background]=\"'#3A8D1A'\"></button>\r\n      <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'6'\"\r\n              [style.background]=\"'#51B07E'\"></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"title\">Price</div>\r\n    <ui-slider [range]=\"true\" [ngModel]=\"[10, 50]\"></ui-slider>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/products/filters/filters.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/products/filters/filters.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border-radius: 6px;\n  box-sizing: border-box;\n  overflow: hidden;\n  position: relative;\n  padding: 16px 20px;\n  width: 100%; }\n\n.filter-section .head {\n  position: relative; }\n\n.filter-section .head .title {\n    border-bottom: none; }\n\n.filter-section .head .clear-all {\n    font-size: 0.9rem;\n    position: absolute;\n    right: 0;\n    top: 10px; }\n\n.filter-section .head .chosen-box > div {\n    margin-bottom: 8px; }\n\n.filter-section .head a {\n    color: #333434;\n    font-weight: 400;\n    text-decoration: none;\n    font-size: 0.9rem; }\n\n.filter-section .head .icon {\n    margin-right: 24px; }\n\n.filter-section .head .icon:before, .filter-section .head .icon:after {\n      position: absolute;\n      content: \"\";\n      height: 20px;\n      width: 2px;\n      background-color: #333434;\n      left: 8px; }\n\n.filter-section .head .icon:before {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n\n.filter-section .head .icon:after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n\n.filter-section .head .selected-type {\n    font-size: 0.9rem;\n    color: #333434;\n    font-weight: 700; }\n\n.filter-section > div {\n  margin-bottom: 20px; }\n\n.filter-section .title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #333434;\n  line-height: 1.9rem;\n  margin-bottom: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #F5F5F5; }\n\n.filter-section .type-box {\n  overflow-y: auto;\n  max-height: 185px;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #333434; }\n\n.filter-section .type-box > div {\n    margin-bottom: 8px; }\n\n.filter-section .type-box input {\n    height: 16px;\n    margin-right: 12px;\n    width: 16px; }\n\n.filter-section .type-box input:checked:after {\n      border-color: #5868D7; }\n\n.filter-section .size-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.filter-section .size-box button {\n    height: 40px;\n    margin-right: 8px;\n    width: 40px; }\n\n.filter-section .color-box {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.filter-section .color-box button {\n    border-radius: 4px;\n    height: 30px;\n    width: 30px;\n    margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvZmlsdGVycy9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXGFwcFxccHJvZHVjdHNcXGZpbHRlcnNcXGZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2ZpbHRlcnMvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxzdHlsZXNcXF9wYXJhbXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixtQkFBMEI7RUFDMUIsWUFBVyxFQUNaOztBQUVEO0VBRUksbUJBQWtCLEVBMkNuQjs7QUE3Q0g7SUFJTSxvQkFBbUIsRUFDcEI7O0FBTEw7SUFPTSxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixVQUFTLEVBQ1Y7O0FBWEw7SUFjUSxtQkN6QkUsRUQwQkg7O0FBZlA7SUFrQk0sZUMzQmE7SUQ0QmIsaUJBQWdCO0lBQ2hCLHNCQUFxQjtJQUNyQixrQkFBaUIsRUFDbEI7O0FBdEJMO0lBd0JNLG1CQUFxQixFQWV0Qjs7QUF2Q0w7TUEwQlEsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxhQUFZO01BQ1osV0FBVTtNQUNWLDBCQ3ZDVztNRHdDWCxVQUFTLEVBQ1Y7O0FBaENQO01Ba0NRLGlDQUF3QjtjQUF4Qix5QkFBd0IsRUFDekI7O0FBbkNQO01BcUNRLGtDQUF5QjtjQUF6QiwwQkFBeUIsRUFDMUI7O0FBdENQO0lBeUNNLGtCQUFpQjtJQUNqQixlQ25EYTtJRG9EYixpQkFBZ0IsRUFDakI7O0FBNUNMO0VBZ0RJLG9CQUF3QixFQUN6Qjs7QUFqREg7RUFtREksa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixlQzlEZTtFRCtEZixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGVBQWdCO0VBQ2hCLGlDQzdEcUIsRUQ4RHRCOztBQTFESDtFQTRESSxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVDekVlLEVEdUZoQjs7QUE5RUg7SUFrRU0sbUJDN0VJLEVEOEVMOztBQW5FTDtJQXFFTSxhQUFZO0lBQ1osbUJBQXVCO0lBQ3ZCLFlBQVcsRUFNWjs7QUE3RUw7TUEwRVUsc0JDakZZLEVEa0ZiOztBQTNFVDtFQWdGSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLCtCQUE4QixFQU0vQjs7QUF4Rkg7SUFvRk0sYUFBWTtJQUNaLGtCQ2hHSTtJRGlHSixZQUFXLEVBQ1o7O0FBdkZMO0VBMEZJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCLEVBTy9COztBQW5HSDtJQThGTSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLFlBQVc7SUFDWCxrQkM1R0ksRUQ2R0wiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwicGFyYW1zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogJGdyaWQqMiAkZ3JpZCoyLjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWx0ZXItc2VjdGlvbiB7XHJcbiAgLmhlYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jbGVhci1hbGwge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNob3Nlbi1ib3gge1xyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGdyaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZ3JpZCozO1xyXG4gICAgICAmOmJlZm9yZSwgJjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRDb2xvcjtcclxuICAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0ZWQtdHlwZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206ICRncmlkKjIuNTtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAkdGV4dENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAkZ3JpZCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR3aGl0ZVNtb2tlQ29sb3I7XHJcbiAgfVxyXG4gIC50eXBlLWJveCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTg1cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICR0ZXh0Q29sb3I7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206ICRncmlkO1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJGdyaWQqMS41O1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgJjpjaGVja2VkIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnlDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNpemUtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6ICRncmlkO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbG9yLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZ3JpZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGdyaWQ6IDhweDtcclxuXHJcbiR0ZXh0Q29sb3I6ICMzMzM0MzQ7XHJcbiR0aGVtZUJhY2tncm91bmQ6ICMzZDQwNDQ7XHJcbiRwcmltYXJ5Q29sb3I6ICM1ODY4RDc7XHJcbiRwcmltYXJ5Q29sb3IyOiAjNkRFREY2O1xyXG5cclxuJHdoaXRlU21va2VDb2xvcjogI0Y1RjVGNTtcclxuJHNhdGluQ29sb3I6I0VDRThERjtcclxuJG1lcmN1cnlDb2xvcjogI2UxZTFlMTtcclxuJHN0b3JtR3JleUNvbG9yOiAjN2I3ZDhiO1xyXG4kY2hhcmNvYWxDb2xvcjogIzNkNDA0NDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/products/filters/filters.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/filters/filters.component.ts ***!
  \*******************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/products/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/products/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/products/list-page/list-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/products/list-page/list-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <div class=\"breadcrumbs\">\r\n    <ul>\r\n      <li><a [routerLink]=\"['/home']\">Home</a></li>\r\n      <li class=\"-active\"><a href=\"\">Womens</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"list-page-container\">\r\n    <div class=\"filter\">\r\n      <app-filters></app-filters>\r\n    </div>\r\n    <div class=\"main-content\">\r\n      <div class=\"list-title\">\r\n        <h2 class=\"title\">Women's View All</h2>\r\n        <p class=\"results\">1019 results</p>\r\n      </div>\r\n      <div class=\"search-result-options\">\r\n        <nav class=\"pagination-box -top\">\r\n          <a class=\"navigation-button previous\"></a>\r\n          <div class=\"page-box\">\r\n            <a class=\"page-number -active\">1</a>\r\n            <a class=\"page-number\">2</a>\r\n            <a class=\"page-number\">3</a>\r\n          </div>\r\n          <a class=\"navigation-button next\"></a>\r\n        </nav>\r\n      </div>\r\n      <div class=\"list-cards\">\r\n        <div *ngFor=\"let product of products\" class=\"card\">\r\n          <app-card [product]=\"product\"></app-card>\r\n        </div>\r\n      </div>\r\n      <nav class=\"pagination-box\">\r\n        <a class=\"navigation-button previous\"></a>\r\n        <div class=\"page-box\">\r\n          <a class=\"page-number -active\">1</a>\r\n          <a class=\"page-number\">2</a>\r\n          <a class=\"page-number\">3</a>\r\n        </div>\r\n        <a class=\"navigation-button next\"></a>\r\n      </nav>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/list-page/list-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/products/list-page/list-page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0 8px;\n  width: 1180px; }\n\n@media (max-width: 1200px) {\n  .main-wrapper {\n    padding: 0 24px;\n    width: 100%; } }\n\n@media (max-width: 1200px) and (max-width: 500px) {\n  .main-wrapper {\n    padding: 0 16px; } }\n\n:host {\n  margin: 16px 0 32px 0; }\n\n.breadcrumbs {\n  margin: 20px auto; }\n\n.breadcrumbs ul {\n    padding-left: 0; }\n\n.breadcrumbs ul li {\n      display: inline-block; }\n\n.breadcrumbs ul li:after {\n        border-top: none;\n        border-bottom: none;\n        border-left: none;\n        content: \"/\";\n        color: inherit;\n        display: inline-block;\n        margin: 0;\n        padding: 0 4px; }\n\n.breadcrumbs ul li:last-child:after {\n        display: none; }\n\n.breadcrumbs ul a {\n      color: #7b7d8b;\n      font-size: 1rem;\n      text-decoration: none; }\n\n.breadcrumbs ul .-active a {\n      color: #333434;\n      font-weight: 700; }\n\n.list-page-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.filter {\n  margin: 0 48px 0 0;\n  width: 280px; }\n\n.main-content {\n  flex-grow: 1; }\n\n.list-title {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  font-size: 1.4rem;\n  justify-content: space-between;\n  margin: 12px 0;\n  text-transform: uppercase; }\n\n.list-title h2 {\n    font-size: 1.4rem; }\n\n.search-result-options {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 20px 0; }\n\n.pagination-box {\n  display: flex;\n  flex-direction: row; }\n\n.pagination-box .navigation-button {\n    border-color: #e1e1e1;\n    border-left-width: 1px;\n    border-top-width: 1px;\n    border-right-width: 1px;\n    border-bottom-width: 1px;\n    border-style: solid;\n    box-sizing: border-box;\n    color: #e1e1e1;\n    font-size: 0.9rem;\n    padding: 8px 16px;\n    text-align: center;\n    vertical-align: middle;\n    display: inline-block; }\n\n.pagination-box .navigation-button.previous:before {\n      content: \"\";\n      border: 2px solid #333;\n      border-top: transparent;\n      border-right: transparent;\n      display: inline-block;\n      margin-right: 0;\n      position: relative;\n      right: -1px;\n      padding: 4px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      top: 0; }\n\n.pagination-box .navigation-button.next:after {\n      content: \"\";\n      display: inline-block;\n      border: 2px solid #333;\n      border-top: transparent;\n      border-right: transparent;\n      left: -1px;\n      margin-right: 0;\n      padding: 3px;\n      position: relative;\n      top: 0;\n      -webkit-transform: rotate(225deg);\n              transform: rotate(225deg); }\n\n.pagination-box .page-box {\n    display: inline-block; }\n\n.pagination-box .page-box .page-number {\n      background-color: #fff;\n      border-color: #e1e1e1;\n      border-left-width: 1px;\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-style: solid;\n      box-sizing: border-box;\n      border-right: none;\n      border-radius: 0;\n      display: inline-block;\n      cursor: pointer;\n      font-weight: 700;\n      font-size: 0.9rem;\n      margin-left: -3px;\n      padding: 9px 17px;\n      text-align: center;\n      vertical-align: middle;\n      width: auto; }\n\n.pagination-box .page-box .page-number.-active {\n        background: #5868D7;\n        border-color: #5868D7;\n        color: #ffffff; }\n\n.pagination-box .page-box .page-number:hover {\n        background: #5868D7;\n        color: #ffffff; }\n\n.list-cards {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-bottom: 24px; }\n\n.card {\n  box-sizing: border-box;\n  padding: 8px;\n  width: 33%; }\n\n@media (max-width: 1200px) {\n  .card {\n    width: 50%; } }\n\n@media (max-width: 1000px) {\n  .list-page-container {\n    flex-direction: column; }\n  .filter {\n    display: none; }\n  .card {\n    width: 33%; } }\n\n@media (max-width: 800px) {\n  .card {\n    width: 50%; } }\n\n@media (max-width: 600px) {\n  .card {\n    width: 100%; }\n  .pagination-box.-top {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbGlzdC1wYWdlL0M6XFxVc2Vyc1xcc3BhbGxlXFxEb3dubG9hZHNcXGUtY29tbWVyY2UtdmlqYXlhL3NyY1xcc3R5bGVzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2xpc3QtcGFnZS9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXHN0eWxlc1xcX3BhcmFtcy5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9saXN0LXBhZ2UvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHByb2R1Y3RzXFxsaXN0LXBhZ2VcXGxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsZUNMUTtFRE1SLGNBQWEsRUFDZDs7QUFFRDtFQUNFO0lBQ0UsZ0JBQWtCO0lBQ2xCLFlBQVcsRUFDWixFQUFBOztBQUNEO0VBQ0U7SUFDRSxnQkFBa0IsRUFDbkIsRUFBQTs7QUVkTDtFQUNFLHNCQUEyQixFQUM1Qjs7QUFFRDtFQUNFLGtCQUFzQixFQWlDdkI7O0FBbENEO0lBR0ksZ0JBQWUsRUE4QmhCOztBQWpDSDtNQUtNLHNCQUFxQixFQWdCdEI7O0FBckJMO1FBT1EsaUJBQWdCO1FBQ2hCLG9CQUFtQjtRQUNuQixrQkFBaUI7UUFDakIsYUFBWTtRQUNaLGVBQWM7UUFDZCxzQkFBcUI7UUFDckIsVUFBUztRQUNULGVBQWtCLEVBQ25COztBQWZQO1FBa0JVLGNBQWEsRUFDZDs7QUFuQlQ7TUF1Qk0sZURwQmtCO01DcUJsQixnQkFBZTtNQUNmLHNCQUFxQixFQUN0Qjs7QUExQkw7TUE2QlEsZURsQ1c7TUNtQ1gsaUJBQWdCLEVBQ2pCOztBQUtQO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEIsRUFDL0I7O0FBRUQ7RUFDRSxtQkFBcUI7RUFDckIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLCtCQUE4QjtFQUM5QixlQUFtQjtFQUNuQiwwQkFBeUIsRUFJMUI7O0FBWEQ7SUFTSSxrQkFBaUIsRUFDbEI7O0FBR0g7RUFDRSxvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsZUFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CLEVBOEVwQjs7QUFoRkQ7SUFJSSxzQkQxRWtCO0lDMkVsQix1QkFBc0I7SUFDdEIsc0JBQXFCO0lBQ3JCLHdCQUF1QjtJQUN2Qix5QkFBd0I7SUFDeEIsb0JBQW1CO0lBQ25CLHVCQUFzQjtJQUN0QixlRGpGa0I7SUNrRmxCLGtCQUFpQjtJQUNqQixrQkFBc0I7SUFDdEIsbUJBQWtCO0lBQ2xCLHVCQUFzQjtJQUN0QixzQkFBcUIsRUErQnRCOztBQS9DSDtNQW1CUSxZQUFXO01BQ1gsdUJBQXNCO01BQ3RCLHdCQUF1QjtNQUN2QiwwQkFBeUI7TUFDekIsc0JBQXFCO01BQ3JCLGdCQUFlO01BQ2YsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxhQUFnQjtNQUNoQixpQ0FBd0I7Y0FBeEIseUJBQXdCO01BQ3hCLE9BQU0sRUFDUDs7QUE5QlA7TUFrQ1EsWUFBVztNQUNYLHNCQUFxQjtNQUNyQix1QkFBc0I7TUFDdEIsd0JBQXVCO01BQ3ZCLDBCQUF5QjtNQUN6QixXQUFVO01BQ1YsZ0JBQWU7TUFDZixhQUFZO01BQ1osbUJBQWtCO01BQ2xCLE9BQU07TUFDTixrQ0FBeUI7Y0FBekIsMEJBQXlCLEVBQzFCOztBQTdDUDtJQWlESSxzQkFBcUIsRUE4QnRCOztBQS9FSDtNQW1ETSx1QkFBc0I7TUFDdEIsc0JEMUhnQjtNQzJIaEIsdUJBQXNCO01BQ3RCLHNCQUFxQjtNQUNyQix5QkFBd0I7TUFDeEIsb0JBQW1CO01BQ25CLHVCQUFzQjtNQUN0QixtQkFBa0I7TUFDbEIsaUJBQWdCO01BQ2hCLHNCQUFxQjtNQUNyQixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsa0JBQWlCO01BQ2pCLGtCQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIsdUJBQXNCO01BQ3RCLFlBQVcsRUFVWjs7QUE5RUw7UUFzRVEsb0JEakpjO1FDa0pkLHNCRGxKYztRQ21KZCxlQUFjLEVBQ2Y7O0FBekVQO1FBMkVRLG9CRHRKYztRQ3VKZCxlQUFjLEVBQ2Y7O0FBS1A7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsNEJBQTJCO0VBQzNCLG9CQUFzQixFQUN2Qjs7QUFFRDtFQUNFLHVCQUFzQjtFQUN0QixhRDNLUTtFQzRLUixXQUFVLEVBQ1g7O0FBRUQ7RUFDRTtJQUNFLFdBQVUsRUFDWCxFQUFBOztBQUdIO0VBQ0U7SUFDRSx1QkFBc0IsRUFDdkI7RUFDRDtJQUNFLGNBQWEsRUFDZDtFQUNEO0lBQ0UsV0FBVSxFQUNYLEVBQUE7O0FBR0g7RUFDRTtJQUNFLFdBQVUsRUFDWCxFQUFBOztBQUVIO0VBQ0U7SUFDRSxZQUFXLEVBQ1o7RUFDRDtJQUVJLGNBQWEsRUFDZCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvbGlzdC1wYWdlL2xpc3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJwYXJhbXNcIjtcclxuXHJcbi5tYWluLXdyYXBwZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAkZ3JpZDtcclxuICB3aWR0aDogMTE4MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm1haW4td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwICRncmlkKjM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubWFpbi13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMCAkZ3JpZCoyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkZ3JpZDogOHB4O1xyXG5cclxuJHRleHRDb2xvcjogIzMzMzQzNDtcclxuJHRoZW1lQmFja2dyb3VuZDogIzNkNDA0NDtcclxuJHByaW1hcnlDb2xvcjogIzU4NjhENztcclxuJHByaW1hcnlDb2xvcjI6ICM2REVERjY7XHJcblxyXG4kd2hpdGVTbW9rZUNvbG9yOiAjRjVGNUY1O1xyXG4kc2F0aW5Db2xvcjojRUNFOERGO1xyXG4kbWVyY3VyeUNvbG9yOiAjZTFlMWUxO1xyXG4kc3Rvcm1HcmV5Q29sb3I6ICM3YjdkOGI7XHJcbiRjaGFyY29hbENvbG9yOiAjM2Q0MDQ0O1xyXG4iLCJAaW1wb3J0IFwicGFyYW1zXCI7XHJcbkBpbXBvcnQgXCJjb21tb25cIjtcclxuXHJcbjpob3N0IHtcclxuICBtYXJnaW46ICRncmlkKjIgMCAkZ3JpZCo0IDA7XHJcbn1cclxuXHJcbi5icmVhZGNydW1icyB7XHJcbiAgbWFyZ2luOiAkZ3JpZCoyLjUgYXV0bztcclxuICB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAkZ3JpZC8yO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkc3Rvcm1HcmV5Q29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgLi1hY3RpdmUge1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogJHRleHRDb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgbWFyZ2luOiAwICRncmlkKjYgMCAwO1xyXG4gIHdpZHRoOiAyODBweDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4ubGlzdC10aXRsZSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogJGdyaWQqMS41IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LW9wdGlvbnMge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46ICRncmlkKjIuNSAwO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAubmF2aWdhdGlvbi1idXR0b24ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkbWVyY3VyeUNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogJG1lcmN1cnlDb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgcGFkZGluZzogJGdyaWQgJGdyaWQqMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAmLnByZXZpb3VzIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxuICAgICAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6ICRncmlkLzI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5uZXh0IHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxuICAgICAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGxlZnQ6IC0xcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnBhZ2UtYm94IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC5wYWdlLW51bWJlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJG1lcmN1cnlDb2xvcjtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICAgICAgcGFkZGluZzogOXB4IDE3cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICYuLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlDb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5Q29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1jYXJkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGdyaWQqMztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogJGdyaWQ7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmxpc3QtcGFnZS1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmZpbHRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNhcmR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucGFnaW5hdGlvbi1ib3h7XHJcbiAgICAmLi10b3B7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/list-page/list-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/products/list-page/list-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/data.service */ "./src/app/data/data.service.ts");



var ListPageComponent = /** @class */ (function () {
    function ListPageComponent(data) {
        this.data = data;
    }
    ListPageComponent.prototype.ngOnInit = function () {
        this.products = this.data.products;
    };
    ListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-page',
            template: __webpack_require__(/*! ./list-page.component.html */ "./src/app/products/list-page/list-page.component.html"),
            styles: [__webpack_require__(/*! ./list-page.component.scss */ "./src/app/products/list-page/list-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ListPageComponent);
    return ListPageComponent;
}());



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-page/list-page.component */ "./src/app/products/list-page/list-page.component.ts");
/* harmony import */ var _view_page_view_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-page/view-page.component */ "./src/app/products/view-page/view-page.component.ts");





var routes = [
    {
        path: '',
        component: _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_3__["ListPageComponent"],
    },
    {
        path: ':id',
        component: _view_page_view_page_component__WEBPACK_IMPORTED_MODULE_4__["ViewPageComponent"],
    },
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/products/card/card.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/products/filters/filters.component.ts");
/* harmony import */ var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-page/list-page.component */ "./src/app/products/list-page/list-page.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _view_page_view_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-page/view-page.component */ "./src/app/products/view-page/view-page.component.ts");










var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductsRoutingModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
            ],
            declarations: [
                _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_7__["ListPageComponent"],
                _view_page_view_page_component__WEBPACK_IMPORTED_MODULE_9__["ViewPageComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_6__["FiltersComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
            ],
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/products/view-page/view-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/products/view-page/view-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\r\n  <div class=\"product-box\">\r\n    <div class=\"product-preview\">\r\n      <ui-photo-carousel [photos]=\"product.photos\"></ui-photo-carousel>\r\n      <div>\r\n        <h4>Description</h4>\r\n        <p> You should provide the details</p>\r\n      </div>\r\n      <div>\r\n        <h4>Product Details</h4>\r\n        <table cellspacing=\"0\">\r\n          <tbody>\r\n          <tr>\r\n            <th>\r\n              Material:\r\n            </th>\r\n            <td>\r\n              95% Polyester, 5% Elastane\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"product-info\">\r\n      <div class=\"title\"><h3>{{ product.title }}</h3></div>\r\n      <div class=\"sub-title\">{{ product.description }}</div>\r\n      <div class=\"price-box\">\r\n        <div class=\"price\">\r\n          {{ product.price }} INR\r\n        </div>\r\n        <div class=\"rating\">\r\n          <ui-rating [value]=\"3\"></ui-rating>\r\n        </div>\r\n      </div>\r\n      <div class=\"color-box\">\r\n        <p>Select color</p>\r\n        <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'1'\"\r\n                [style.background]=\"'#ccc'\"></button>\r\n        <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'2'\"\r\n                [style.background]=\"'#000C48'\"></button>\r\n        <button [uiButton] [type]=\"'color'\" [kitCheck] [(ngModel)]=\"color\" [value]=\"'3'\"\r\n                [style.background]=\"'#883C73'\"></button>\r\n      </div>\r\n      <div class=\"size-box\">\r\n        <p>Select size</p>\r\n        <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'xs'\">XS</button>\r\n        <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'s'\">S</button>\r\n        <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'m'\">M</button>\r\n        <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'l'\">L</button>\r\n        <button [uiButton] [type]=\"'size'\" [kitCheck] [(ngModel)]=\"size\" [value]=\"'xl'\">XL</button>\r\n      </div>\r\n      \r\n      \r\n      \r\n      <div>\r\n        <h4>Returns Policy</h4>\r\n        <p>Provide your policy</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"recently-viewed\">\r\n    <h4>Recently viewed:</h4>\r\n    <div class=\"list-cards\">\r\n      <app-card *ngFor=\"let product of recent\" [product]=\"product\"></app-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/view-page/view-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/products/view-page/view-page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  box-sizing: border-box;\n  margin: 0 auto;\n  padding: 0 8px;\n  width: 1180px; }\n\n@media (max-width: 1200px) {\n  .main-wrapper {\n    padding: 0 24px;\n    width: 100%; } }\n\n@media (max-width: 1200px) and (max-width: 500px) {\n  .main-wrapper {\n    padding: 0 16px; } }\n\n:host {\n  margin: 48px 0; }\n\n.product-box {\n  display: flex;\n  flex-direction: row; }\n\n.recently-viewed {\n  margin: 48px 0; }\n\n.recently-viewed .list-cards {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 100%; }\n\n.recently-viewed .list-cards app-card {\n      padding: 8px;\n      width: 270px; }\n\n.recently-viewed .list-cards app-card .product-photo {\n        height: 300px; }\n\n.product-preview {\n  border-right: 1px solid #e1e1e1;\n  flex-shrink: 0;\n  padding-right: 64px;\n  width: 600px; }\n\n.product-info {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  padding-left: 40px; }\n\n.product-info > div {\n    width: 100%; }\n\n.product-info .title h3 {\n    font-size: 2rem;\n    margin: 8px 0 2px 0; }\n\n.product-info .sub-title {\n    color: #CCCCCC;\n    font-size: 1rem; }\n\n.product-info .price-box {\n    align-items: center;\n    display: flex;\n    margin: 20px 0;\n    flex-direction: row; }\n\n.product-info .price-box .price {\n      font-size: 2rem;\n      margin-right: 28px; }\n\n.product-info .color-box, .product-info .size-box {\n    color: #CCCCCC;\n    display: flex;\n    flex-direction: row;\n    margin: 12px 0; }\n\n.product-info .color-box p, .product-info .size-box p {\n      margin: 0 20px 0 0;\n      line-height: 2rem; }\n\n.product-info .color-box button, .product-info .size-box button {\n      margin-right: 8px; }\n\n.product-info .size-box button {\n    height: 40px;\n    width: 40px; }\n\n.product-info .size-box p {\n    line-height: 2.6rem; }\n\n.product-info .color-box button {\n    border-radius: 4px;\n    height: 30px;\n    margin-right: 8px;\n    width: 30px; }\n\n.product-info .quantity, .product-info .add {\n    margin: 12px 0; }\n\nh4 {\n  border-bottom: 1px solid #e1e1e1;\n  font-size: 1.2rem;\n  margin-bottom: 16px;\n  padding-bottom: 4px;\n  width: 100%; }\n\np {\n  font-size: 1rem;\n  line-height: 1.5rem; }\n\ntable {\n  font-size: 1rem;\n  line-height: 1.5rem; }\n\ntable th {\n    text-align: left;\n    padding-left: 0;\n    width: 130px; }\n\ntable tr {\n    display: block;\n    padding-top: 12px; }\n\n@media (max-width: 1200px) {\n  .product-preview {\n    width: 450px; } }\n\n@media (max-width: 900px) {\n  .product-preview {\n    padding-right: 16px;\n    width: 400px; } }\n\n@media (max-width: 800px) {\n  .product-preview {\n    padding-right: 16px;\n    width: 300px; } }\n\n@media (max-width: 700px) {\n  .product-box {\n    flex-direction: column; }\n  .product-preview {\n    flex-grow: 1;\n    padding-right: 0;\n    border-right: none;\n    width: auto; }\n  .product-info {\n    order: -1;\n    padding-left: 0; } }\n\n@media (max-width: 600px) {\n  .recently-viewed .list-cards app-card {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvdmlldy1wYWdlL0M6XFxVc2Vyc1xcc3BhbGxlXFxEb3dubG9hZHNcXGUtY29tbWVyY2UtdmlqYXlhL3NyY1xcc3R5bGVzXFxfY29tbW9uLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3ZpZXctcGFnZS9DOlxcVXNlcnNcXHNwYWxsZVxcRG93bmxvYWRzXFxlLWNvbW1lcmNlLXZpamF5YS9zcmNcXHN0eWxlc1xcX3BhcmFtcy5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy92aWV3LXBhZ2UvQzpcXFVzZXJzXFxzcGFsbGVcXERvd25sb2Fkc1xcZS1jb21tZXJjZS12aWpheWEvc3JjXFxhcHBcXHByb2R1Y3RzXFx2aWV3LXBhZ2VcXHZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsZUNMUTtFRE1SLGNBQWEsRUFDZDs7QUFFRDtFQUNFO0lBQ0UsZ0JBQWtCO0lBQ2xCLFlBQVcsRUFDWixFQUFBOztBQUNEO0VBQ0U7SUFDRSxnQkFBa0IsRUFDbkIsRUFBQTs7QUVkTDtFQUNFLGVBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGVBQWlCLEVBZWxCOztBQWhCRDtJQUdJLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsZ0JBQWU7SUFDZix3QkFBdUI7SUFDdkIsWUFBVyxFQVFaOztBQWZIO01BU00sYURyQkk7TUNzQkosYUFBWSxFQUliOztBQWRMO1FBWVEsY0FBYSxFQUNkOztBQUtQO0VBQ0UsZ0NEdEJvQjtFQ3VCcEIsZUFBYztFQUNkLG9CQUFzQjtFQUN0QixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixtQkFBcUIsRUF5RHRCOztBQTdERDtJQU1JLFlBQVcsRUFDWjs7QUFQSDtJQVVNLGdCQUFlO0lBQ2Ysb0JBQXlCLEVBQzFCOztBQVpMO0lBZUksZUFBYztJQUNkLGdCQUFlLEVBQ2hCOztBQWpCSDtJQW1CSSxvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLGVBQW1CO0lBQ25CLG9CQUFtQixFQUtwQjs7QUEzQkg7TUF3Qk0sZ0JBQWU7TUFDZixtQkFBdUIsRUFDeEI7O0FBMUJMO0lBNkJJLGVBQWM7SUFDZCxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGVBQW1CLEVBUXBCOztBQXhDSDtNQWtDTSxtQkFBdUI7TUFDdkIsa0JBQWlCLEVBQ2xCOztBQXBDTDtNQXNDTSxrQkQzRUksRUM0RUw7O0FBdkNMO0lBMkNNLGFBQVk7SUFDWixZQUFXLEVBQ1o7O0FBN0NMO0lBK0NNLG9CQUFtQixFQUNwQjs7QUFoREw7SUFvRE0sbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixrQkQzRkk7SUM0RkosWUFBVyxFQUNaOztBQXhETDtJQTJESSxlQUFtQixFQUNwQjs7QUFHSDtFQUNFLGlDRDVGb0I7RUM2RnBCLGtCQUFpQjtFQUNqQixvQkFBc0I7RUFDdEIsb0JBQXlCO0VBQ3pCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2Ysb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixvQkFBbUIsRUFVcEI7O0FBWkQ7SUFJSSxpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixhQUFZLEVBQ2I7O0FBUEg7SUFTSSxlQUFjO0lBQ2Qsa0JBQXNCLEVBQ3ZCOztBQUdIO0VBQ0U7SUFDRSxhQUFZLEVBQ2IsRUFBQTs7QUFHSDtFQUNFO0lBQ0Usb0JBQXNCO0lBQ3RCLGFBQVksRUFDYixFQUFBOztBQUdIO0VBQ0U7SUFDRSxvQkFBc0I7SUFDdEIsYUFBWSxFQUNiLEVBQUE7O0FBR0g7RUFDRTtJQUNFLHVCQUFzQixFQUN2QjtFQUNEO0lBQ0UsYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxVQUFTO0lBQ1QsZ0JBQWUsRUFDaEIsRUFBQTs7QUFHSDtFQUNFO0lBR00sWUFBVyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy92aWV3LXBhZ2Uvdmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInBhcmFtc1wiO1xyXG5cclxuLm1haW4td3JhcHBlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwICRncmlkO1xyXG4gIHdpZHRoOiAxMTgwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWFpbi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDAgJGdyaWQqMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5tYWluLXdyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAwICRncmlkKjI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRncmlkOiA4cHg7XHJcblxyXG4kdGV4dENvbG9yOiAjMzMzNDM0O1xyXG4kdGhlbWVCYWNrZ3JvdW5kOiAjM2Q0MDQ0O1xyXG4kcHJpbWFyeUNvbG9yOiAjNTg2OEQ3O1xyXG4kcHJpbWFyeUNvbG9yMjogIzZERURGNjtcclxuXHJcbiR3aGl0ZVNtb2tlQ29sb3I6ICNGNUY1RjU7XHJcbiRzYXRpbkNvbG9yOiNFQ0U4REY7XHJcbiRtZXJjdXJ5Q29sb3I6ICNlMWUxZTE7XHJcbiRzdG9ybUdyZXlDb2xvcjogIzdiN2Q4YjtcclxuJGNoYXJjb2FsQ29sb3I6ICMzZDQwNDQ7XHJcbiIsIkBpbXBvcnQgXCJwYXJhbXNcIjtcclxuQGltcG9ydCBcImNvbW1vblwiO1xyXG5cclxuOmhvc3Qge1xyXG4gIG1hcmdpbjogJGdyaWQqNiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnJlY2VudGx5LXZpZXdlZCB7XHJcbiAgbWFyZ2luOiAkZ3JpZCo2IDA7XHJcbiAgLmxpc3QtY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYXBwLWNhcmQge1xyXG4gICAgICBwYWRkaW5nOiAkZ3JpZDtcclxuICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAucHJvZHVjdC1waG90byB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3QtcHJldmlldyB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJG1lcmN1cnlDb2xvcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAkZ3JpZCo4O1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctbGVmdDogJGdyaWQqNTtcclxuICA+IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBtYXJnaW46ICRncmlkIDAgJGdyaWQvNCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc3ViLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjQ0NDQ0NDO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICAucHJpY2UtYm94IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAkZ3JpZCoyLjUgMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIG1hcmdpbi1yaWdodDogJGdyaWQqMy41O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29sb3ItYm94LCAuc2l6ZS1ib3gge1xyXG4gICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogJGdyaWQqMS41IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwICRncmlkKjIuNSAwIDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZ3JpZDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNpemUtYm94IHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIuNnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbG9yLWJveCB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkZ3JpZDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5xdWFudGl0eSwgLmFkZCB7XHJcbiAgICBtYXJnaW46ICRncmlkKjEuNSAwO1xyXG4gIH1cclxufVxyXG5cclxuaDQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbWVyY3VyeUNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206ICRncmlkKjI7XHJcbiAgcGFkZGluZy1ib3R0b206ICRncmlkKjAuNTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gIH1cclxuICB0ciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAkZ3JpZCoxLjU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnByb2R1Y3QtcHJldmlldyB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAucHJvZHVjdC1wcmV2aWV3IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICRncmlkKjI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAucHJvZHVjdC1wcmV2aWV3IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICRncmlkKjI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAucHJvZHVjdC1ib3gge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnByb2R1Y3QtcHJldmlldyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWluZm8ge1xyXG4gICAgb3JkZXI6IC0xO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnJlY2VudGx5LXZpZXdlZCB7XHJcbiAgICAubGlzdC1jYXJkcyB7XHJcbiAgICAgIGFwcC1jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/products/view-page/view-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/products/view-page/view-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageComponent", function() { return ViewPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/data.service */ "./src/app/data/data.service.ts");




var ViewPageComponent = /** @class */ (function () {
    function ViewPageComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    ViewPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.product = _this.data.products.find(function (p) { return p.id === parseInt(params.id, 10); });
            _this.recent = _this.data.products.slice(0, 4);
        });
    };
    ViewPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-page',
            template: __webpack_require__(/*! ./view-page.component.html */ "./src/app/products/view-page/view-page.component.html"),
            styles: [__webpack_require__(/*! ./view-page.component.scss */ "./src/app/products/view-page/view-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewPageComponent);
    return ViewPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map