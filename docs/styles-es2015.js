(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css2?family=Comic+Neue&family=Do+Hyeon&family=Roboto+Condensed&family=Raleway:wght@400;600&family=Reenie+Beanie&display=swap\");\n/* You can add global styles to this file, and also import other style files */\na {\n  font-family: 'Do Hyeon', sans-serif;\n  display: inline-block;\n  text-decoration: none;\n  padding: .5rem .75rem;\n  border-radius: 5px;\n  margin: .5rem;\n  box-shadow: inset 0 0 15px black;\n  font-weight: bold;\n}\na.page-link {\n  font-size: 1.5rem;\n  color: white;\n  background-color: transparent;\n  font-family: 'Reenie Beanie', cursive;\n  -webkit-filter: none;\n          filter: none;\n  box-shadow: none;\n  transition: all .5s;\n}\na.page-link:hover {\n  -webkit-filter: drop-shadow(2px 2px 3px white) drop-shadow(-2px -2px 3px white);\n          filter: drop-shadow(2px 2px 3px white) drop-shadow(-2px -2px 3px white);\n}\na.page-link:active {\n  -webkit-filter: drop-shadow(2px 2px 3px #b7cbff) drop-shadow(-2px -2px 3px #b7cbff);\n          filter: drop-shadow(2px 2px 3px #b7cbff) drop-shadow(-2px -2px 3px #b7cbff);\n  color: #b7cbff;\n}\na.current {\n  -webkit-filter: drop-shadow(0.5px 0.5px 0.5px #f2d4ff) drop-shadow(-0.5px -0.5px 1px #f2d4ff);\n          filter: drop-shadow(0.5px 0.5px 0.5px #f2d4ff) drop-shadow(-0.5px -0.5px 1px #f2d4ff);\n  text-decoration: underline;\n}\nbody {\n  font-size: 1rem;\n  font-family: 'Raleway', sans-serif;\n}\nh1 {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 3rem;\n  font-family: 'Reenie Beanie', cursive;\n}\nh1.chart-header {\n  font-family: 'Do Hyeon', sans-serif;\n  margin: 0 auto;\n  font-size: 1.5rem;\n}\nh2.chart-header {\n  font-family: 'Do Hyeon', sans-serif;\n  margin: 0 auto;\n  font-size: 1.2rem;\n}\n.container {\n  width: 100vw;\n  height: 100vh;\n}\n.container-black {\n  background-color: black;\n  color: white;\n}\ncanvas {\n  max-width: 1000px;\n  height: auto !important;\n  margin: 0 auto;\n}\nbutton {\n  font-size: 1rem;\n  cursor: pointer;\n  border: none;\n}\nbutton:focus {\n  outline: none;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nbody {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdHlsZXMvX3RleHQuc2NzcyIsIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fbGluay5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fZ2xvYmFscy5zY3NzIiwiL1VzZXJzL2VybGVtb3JnYWluZS9Eb2N1bWVudHMvQ29kZVByYWN0aWNlL2VybGVzLWNvcm5lci9zcmMvYXBwL3N0eWxlcy9fY29udGFpbmVyLnNjc3MiLCIvVXNlcnMvZXJsZW1vcmdhaW5lL0RvY3VtZW50cy9Db2RlUHJhY3RpY2UvZXJsZXMtY29ybmVyL3NyYy9hcHAvc3R5bGVzL19idXR0b24uc2NzcyIsIi9Vc2Vycy9lcmxlbW9yZ2FpbmUvRG9jdW1lbnRzL0NvZGVQcmFjdGljZS9lcmxlcy1jb3JuZXIvc3JjL2FwcC9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0tBQVk7QUNBWiw4RUFBQTtBQ1VBO0VBQ0UsbUNBQW1DO0VBQ25DLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQ1BuQjtBRERBO0VBV0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLG9CQUFZO1VBQVosWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUNOdkI7QURYQTtFQVBDLCtFQUF5RTtVQUF6RSx1RUFBeUU7QUNzQjFFO0FEZkE7RUFQQyxtRkFBeUU7VUFBekUsMkVBQXlFO0VBZ0NwRSxjRTlCZ0I7QUR5QnRCO0FEcEJBO0VBSEUsNkZBQThFO1VBQTlFLHFGQUE4RTtFQW1DNUUsMEJBQTBCO0FDUDlCO0FIakNBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztBR29DcEM7QUhqQ0E7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUNBQXFDO0FHb0N2QztBSHZDQTtFQU1JLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsaUJBQWlCO0FHcUNyQjtBSGpDQTtFQUVJLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsaUJBQWlCO0FHbUNyQjtBRTFEQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FGNkRmO0FFMURBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUY2RGQ7QUUxREE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUY2RGhCO0FHMUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FINkVkO0FHaEZBO0VBTUksYUFBYTtBSDhFakI7QUlwRkE7RUFDRTtJQUFPLFVBQVc7RUp3RmxCO0VJdkZBO0lBQUssVUFBVztFSjBGaEI7QUFDRjtBSTdGQTtFQUNFO0lBQU8sVUFBVztFSndGbEI7RUl2RkE7SUFBSyxVQUFXO0VKMEZoQjtBQUNGO0FGbkZBO0VBQ0UsU0FBUztBRXNGWCIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlJmZhbWlseT1EbytIeWVvbiZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZmYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs2MDAmZmFtaWx5PVJlZW5pZStCZWFuaWUmZGlzcGxheT1zd2FwJyk7XG5cbmJvZHkge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG5cbiAgJi5jaGFydC1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbmgyIHtcbiAgJi5jaGFydC1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvbGlua1wiO1xuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy9nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy90ZXh0XCI7XG5AaW1wb3J0IFwiLi9hcHAvc3R5bGVzL2NvbnRhaW5lclwiO1xuQGltcG9ydCBcIi4vYXBwL3N0eWxlcy9idXR0b25cIjtcbkBpbXBvcnQgXCIuL2FwcC9zdHlsZXMvYW5pbWF0aW9uc1wiO1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuIiwiQGltcG9ydCBcIi4vZ2xvYmFscy5zY3NzXCI7XG5cbkBtaXhpbiBkcm9wU2hhZG93KCRjb2xvcikge1xuIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAzcHggJGNvbG9yKSBkcm9wLXNoYWRvdygtMnB4IC0ycHggM3B4ICRjb2xvcilcbn1cblxuQG1peGluIGRyb3BTaGFkb3dTbWFsbCgkY29sb3IpIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyguNXB4IC41cHggLjVweCAkY29sb3IpIGRyb3Atc2hhZG93KC0uNXB4IC0uNXB4IDFweCAkY29sb3IpXG59XG5cbmEge1xuICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IC41cmVtIC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IC41cmVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgJi5wYWdlLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogJ1JlZW5pZSBCZWFuaWUnLCBjdXJzaXZlO1xuICAgIGZpbHRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIEBpbmNsdWRlIGRyb3BTaGFkb3cod2hpdGUpO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIGRyb3BTaGFkb3coJGhvbWUtMi1saWdodCk7XG4gICAgICBjb2xvcjogJGhvbWUtMi1saWdodDtcbiAgICB9XG4gIH1cblxuICAmLmN1cnJlbnQge1xuICAgIEBpbmNsdWRlIGRyb3BTaGFkb3dTbWFsbCgkaG9tZS0zLWxpZ2h0KTtcblxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZSZmYW1pbHk9RG8rSHllb24mZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NjAwJmZhbWlseT1SZWVuaWUrQmVhbmllJmRpc3BsYXk9c3dhcFwiKTtcbmEge1xuICBmb250LWZhbWlseTogJ0RvIEh5ZW9uJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IC41cmVtIC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IC41cmVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmEucGFnZS1saW5rIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG4gIGZpbHRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuYS5wYWdlLWxpbms6aG92ZXIge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggM3B4IHdoaXRlKSBkcm9wLXNoYWRvdygtMnB4IC0ycHggM3B4IHdoaXRlKTtcbn1cblxuYS5wYWdlLWxpbms6YWN0aXZlIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDNweCAjYjdjYmZmKSBkcm9wLXNoYWRvdygtMnB4IC0ycHggM3B4ICNiN2NiZmYpO1xuICBjb2xvcjogI2I3Y2JmZjtcbn1cblxuYS5jdXJyZW50IHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVweCAwLjVweCAwLjVweCAjZjJkNGZmKSBkcm9wLXNoYWRvdygtMC41cHggLTAuNXB4IDFweCAjZjJkNGZmKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG59XG5cbmgxLmNoYXJ0LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmgyLmNoYXJ0LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250YWluZXItYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5jYW52YXMge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cbiIsIiRob21lLTEtZGFyazogIzBhMmQwYztcbiRob21lLTE6ICMxZTdmMjQ7XG4kaG9tZS0xLWxpZ2h0OiAjOWVkNTlmO1xuJGhvbWUtMi1kYXJrOiAjMDkwMDQ3O1xuJGhvbWUtMjogIzI2MDBmZjtcbiRob21lLTItbGlnaHQ6ICNiN2NiZmY7XG4kaG9tZS0zLWRhcms6ICMyMjAwNDg7XG4kaG9tZS0zOiAjNzAwMGZmO1xuJGhvbWUtMy1saWdodDogI2YyZDRmZjtcbiRob21lLTQtZGFyazogIzU4MDYxZDtcbiRob21lLTQ6ICNlZjE1NGI7XG4kaG9tZS00LWxpZ2h0OiAjZWZiY2JhO1xuJGhvbWUtNS1kYXJrOiAjMzcxNTA3O1xuJGhvbWUtNS1zZW1pLWRhcms6ICM5MDNiMTI7XG4kaG9tZS01OiAjZWY2NTFlO1xuJGhvbWUtNS1saWdodDogI2VmZGFiMztcbiRob21lLTYtZGFyazogIzQ2NDIwYTtcbiRob21lLTY6ICNmZmMwMDA7XG4kaG9tZS02LWxpZ2h0OiAjZjlmZmQ3O1xuXG4kbGlnaHQtZ3JleTogI2FjYWNhYztcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250YWluZXItYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5jYW52YXMge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIiwiYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG4iLCJAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwIH1cbiAgdG8geyBvcGFjaXR5OiAxIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 6:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/erlemorgaine/Documents/CodePractice/erles-corner/src/styles.scss */"./src/styles.scss");


/***/ })

},[[6,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map