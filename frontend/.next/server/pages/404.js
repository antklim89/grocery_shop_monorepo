"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./components/utils/Seo.tsx":
/*!**********************************!*\
  !*** ./components/utils/Seo.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/constants */ \"./constants.ts\");\n\n\n\n\nconst Seo = ({ description , keywords =[] , title ,  })=>{\n    const metaDescription = `${_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DESCRIPTION} ${description || \"\"}`.trim();\n    const defaultTitle = `${title ? `${title} | ` : \"\"}${_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_TITLE}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: defaultTitle\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                href: \"/favicon.ico\",\n                rel: \"icon\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: metaDescription,\n                name: \"description\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: [\n                    \"grocery\",\n                    \"shop\",\n                    ...keywords\n                ].join(\", \"),\n                name: \"keywords\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: metaDescription,\n                name: \"description\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: title,\n                property: \"og:title\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: metaDescription,\n                property: \"og:description\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: \"website\",\n                property: \"og:type\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: \"summary\",\n                name: \"twitter:card\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: _constants__WEBPACK_IMPORTED_MODULE_3__.CREATOR,\n                name: \"twitter:creator\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: title,\n                name: \"twitter:title\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                content: metaDescription,\n                name: \"twitter:description\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anton/Projects/grocery_shop/frontend/components/utils/Seo.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Seo));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxzL1Nlby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNJO0FBRXlDO0FBUzFFLE1BQU1LLEdBQUcsR0FBYyxDQUFDLEVBQ3BCQyxXQUFXLEdBQ1hDLFFBQVEsRUFBRyxFQUFFLEdBQ2JDLEtBQUssS0FDUixHQUFLO0lBRUYsTUFBTUMsZUFBZSxHQUFHLENBQUMsRUFBRU4sMkRBQW1CLENBQUMsQ0FBQyxFQUFFRyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQ0ksSUFBSSxFQUFFO0lBQzVFLE1BQU1DLFlBQVksR0FBRyxDQUFDLEVBQUVILEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRUoscURBQWEsQ0FBQyxDQUFDO0lBRXBFLHFCQUNJLDhEQUFDSixrREFBSTs7MEJBQ0QsOERBQUNRLE9BQUs7MEJBQUVHLFlBQVk7Ozs7O3lCQUFTOzBCQUM3Qiw4REFBQ0MsTUFBSTtnQkFBQ0MsSUFBSSxFQUFDLGNBQWM7Z0JBQUNDLEdBQUcsRUFBQyxNQUFNOzs7Ozt5QkFBRzswQkFDdkMsOERBQUNDLE1BQUk7Z0JBQUNDLE9BQU8sRUFBRVAsZUFBZTtnQkFBRVEsSUFBSSxFQUFDLGFBQWE7Ozs7O3lCQUFHOzBCQUNyRCw4REFBQ0YsTUFBSTtnQkFBQ0MsT0FBTyxFQUFFO29CQUFDLFNBQVM7b0JBQUUsTUFBTTt1QkFBS1QsUUFBUTtpQkFBQyxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFRCxJQUFJLEVBQUMsVUFBVTs7Ozs7eUJBQUc7MEJBQzlFLDhEQUFDRixNQUFJO2dCQUFDQyxPQUFPLEVBQUVQLGVBQWU7Z0JBQUVRLElBQUksRUFBQyxhQUFhOzs7Ozt5QkFBRzswQkFDckQsOERBQUNGLE1BQUk7Z0JBQUNDLE9BQU8sRUFBRVIsS0FBSztnQkFBRVcsUUFBUSxFQUFDLFVBQVU7Ozs7O3lCQUFHOzBCQUM1Qyw4REFBQ0osTUFBSTtnQkFBQ0MsT0FBTyxFQUFFUCxlQUFlO2dCQUFFVSxRQUFRLEVBQUMsZ0JBQWdCOzs7Ozt5QkFBRzswQkFDNUQsOERBQUNKLE1BQUk7Z0JBQUNDLE9BQU8sRUFBQyxTQUFTO2dCQUFDRyxRQUFRLEVBQUMsU0FBUzs7Ozs7eUJBQUc7MEJBQzdDLDhEQUFDSixNQUFJO2dCQUFDQyxPQUFPLEVBQUMsU0FBUztnQkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7O3lCQUFHOzBCQUM5Qyw4REFBQ0YsTUFBSTtnQkFBQ0MsT0FBTyxFQUFFZCwrQ0FBTztnQkFBRWUsSUFBSSxFQUFDLGlCQUFpQjs7Ozs7eUJBQUc7MEJBQ2pELDhEQUFDRixNQUFJO2dCQUFDQyxPQUFPLEVBQUVSLEtBQUs7Z0JBQUVTLElBQUksRUFBQyxlQUFlOzs7Ozt5QkFBRzswQkFDN0MsOERBQUNGLE1BQUk7Z0JBQUNDLE9BQU8sRUFBRVAsZUFBZTtnQkFBRVEsSUFBSSxFQUFDLHFCQUFxQjs7Ozs7eUJBQUc7Ozs7OztpQkFDMUQsQ0FDVDtBQUNOLENBQUM7QUFFRCw4RUFBZWhCLDJDQUFJLENBQUNJLEdBQUcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvY2VyeS1zaG9wLWZyb250ZW5kLy4vY29tcG9uZW50cy91dGlscy9TZW8udHN4PzNjZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEZDLCBtZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDUkVBVE9SLCBERUZBVUxUX0RFU0NSSVBUSU9OLCBERUZBVUxUX1RJVExFIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAga2V5d29yZHM/OiBzdHJpbmdbXVxufVxuXG5jb25zdCBTZW86IEZDPFByb3BzPiA9ICh7XG4gICAgZGVzY3JpcHRpb24sXG4gICAga2V5d29yZHMgPSBbXSxcbiAgICB0aXRsZSxcbn0pID0+IHtcblxuICAgIGNvbnN0IG1ldGFEZXNjcmlwdGlvbiA9IGAke0RFRkFVTFRfREVTQ1JJUFRJT059ICR7ZGVzY3JpcHRpb24gfHwgJyd9YC50cmltKCk7XG4gICAgY29uc3QgZGVmYXVsdFRpdGxlID0gYCR7dGl0bGUgPyBgJHt0aXRsZX0gfCBgIDogJyd9JHtERUZBVUxUX1RJVExFfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57ZGVmYXVsdFRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayBocmVmPVwiL2Zhdmljb24uaWNvXCIgcmVsPVwiaWNvblwiIC8+XG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PXttZXRhRGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PXtbJ2dyb2NlcnknLCAnc2hvcCcsIC4uLmtleXdvcmRzXS5qb2luKCcsICcpfSBuYW1lPVwia2V5d29yZHNcIiAvPlxuICAgICAgICAgICAgPG1ldGEgY29udGVudD17bWV0YURlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgPG1ldGEgY29udGVudD17dGl0bGV9IHByb3BlcnR5PVwib2c6dGl0bGVcIiAvPlxuICAgICAgICAgICAgPG1ldGEgY29udGVudD17bWV0YURlc2NyaXB0aW9ufSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgcHJvcGVydHk9XCJvZzp0eXBlXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PXtDUkVBVE9SfSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9e3RpdGxlfSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIC8+XG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PXttZXRhRGVzY3JpcHRpb259IG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNlbyk7XG4iXSwibmFtZXMiOlsiSGVhZCIsIm1lbW8iLCJDUkVBVE9SIiwiREVGQVVMVF9ERVNDUklQVElPTiIsIkRFRkFVTFRfVElUTEUiLCJTZW8iLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwidGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJ0cmltIiwiZGVmYXVsdFRpdGxlIiwibGluayIsImhyZWYiLCJyZWwiLCJtZXRhIiwiY29udGVudCIsIm5hbWUiLCJqb2luIiwicHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/utils/Seo.tsx\n");

/***/ }),

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"AUTH_TOKEN_NAME\": () => (/* binding */ AUTH_TOKEN_NAME),\n/* harmony export */   \"CART_LOCAL_STORAGE_NAME\": () => (/* binding */ CART_LOCAL_STORAGE_NAME),\n/* harmony export */   \"CREATOR\": () => (/* binding */ CREATOR),\n/* harmony export */   \"DEFAULT_DESCRIPTION\": () => (/* binding */ DEFAULT_DESCRIPTION),\n/* harmony export */   \"DEFAULT_TITLE\": () => (/* binding */ DEFAULT_TITLE),\n/* harmony export */   \"IMAGE_URL\": () => (/* binding */ IMAGE_URL),\n/* harmony export */   \"ORDER_EXPIRE_TIME\": () => (/* binding */ ORDER_EXPIRE_TIME),\n/* harmony export */   \"PRODUCTS_LIMIT\": () => (/* binding */ PRODUCTS_LIMIT)\n/* harmony export */ });\nconst DEFAULT_DESCRIPTION = process.env.DEFAULT_DESCRIPTION || \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo asperiores id nulla fugiat eius nostrum tempore alias illum deleniti, recusandae eligendi consectetur, dolor quisquam. Quibusdam eligendi at corrupti distinctio magnam voluptas quisquam repellat voluptatibus laudantium asperiores! Rerum error non, expedita amet repudiandae nisi incidunt, odit nostrum quo illum, perferendis commodi.\";\nconst DEFAULT_TITLE = process.env.DEFAULT_TITLE || \"Grocery Shop\";\nconst CREATOR = process.env.CREATOR || \"Me\";\nconst CART_LOCAL_STORAGE_NAME = process.env.CART_LOCAL_STORAGE_NAME || \"grocery_shop_cart\";\nconst AUTH_TOKEN_NAME = process.env.AUTH_TOKEN_NAME || \"token\";\nconst PRODUCTS_LIMIT = Number(process.env.PRODUCTS_LIMIT) || 6;\nconst ORDER_EXPIRE_TIME = 1000 * 60 * 15;\nconst API_URL = \"http://localhost:1337\" || 0;\nconst IMAGE_URL = \"ucarecdn.com\" || 0;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTUEsbUJBQW1CLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixtQkFBbUIsSUFBSSw4WUFBOFksQ0FBQztBQUM5YyxNQUFNRyxhQUFhLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLElBQUksY0FBYyxDQUFDO0FBQ2xFLE1BQU1DLE9BQU8sR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNFLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFFNUMsTUFBTUMsdUJBQXVCLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyx1QkFBdUIsSUFBSSxtQkFBbUIsQ0FBQztBQUMzRixNQUFNQyxlQUFlLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxlQUFlLElBQUksT0FBTyxDQUFDO0FBQy9ELE1BQU1DLGNBQWMsR0FBR0MsTUFBTSxDQUFDUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRS9ELE1BQU1FLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXpDLE1BQU1DLE9BQU8sR0FBR1QsdUJBQStCLElBQUksQ0FFdEQsQ0FBQztBQUNFLE1BQU1ZLFNBQVMsR0FBR1osY0FBaUMsSUFBSSxDQUUxRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvY2VyeS1zaG9wLWZyb250ZW5kLy4vY29uc3RhbnRzLnRzP2RkNGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFU0NSSVBUSU9OID0gcHJvY2Vzcy5lbnYuREVGQVVMVF9ERVNDUklQVElPTiB8fCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIElsbG8gYXNwZXJpb3JlcyBpZCBudWxsYSBmdWdpYXQgZWl1cyBub3N0cnVtIHRlbXBvcmUgYWxpYXMgaWxsdW0gZGVsZW5pdGksIHJlY3VzYW5kYWUgZWxpZ2VuZGkgY29uc2VjdGV0dXIsIGRvbG9yIHF1aXNxdWFtLiBRdWlidXNkYW0gZWxpZ2VuZGkgYXQgY29ycnVwdGkgZGlzdGluY3RpbyBtYWduYW0gdm9sdXB0YXMgcXVpc3F1YW0gcmVwZWxsYXQgdm9sdXB0YXRpYnVzIGxhdWRhbnRpdW0gYXNwZXJpb3JlcyEgUmVydW0gZXJyb3Igbm9uLCBleHBlZGl0YSBhbWV0IHJlcHVkaWFuZGFlIG5pc2kgaW5jaWR1bnQsIG9kaXQgbm9zdHJ1bSBxdW8gaWxsdW0sIHBlcmZlcmVuZGlzIGNvbW1vZGkuJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFID0gcHJvY2Vzcy5lbnYuREVGQVVMVF9USVRMRSB8fCAnR3JvY2VyeSBTaG9wJztcbmV4cG9ydCBjb25zdCBDUkVBVE9SID0gcHJvY2Vzcy5lbnYuQ1JFQVRPUiB8fCAnTWUnO1xuXG5leHBvcnQgY29uc3QgQ0FSVF9MT0NBTF9TVE9SQUdFX05BTUUgPSBwcm9jZXNzLmVudi5DQVJUX0xPQ0FMX1NUT1JBR0VfTkFNRSB8fCAnZ3JvY2VyeV9zaG9wX2NhcnQnO1xuZXhwb3J0IGNvbnN0IEFVVEhfVE9LRU5fTkFNRSA9IHByb2Nlc3MuZW52LkFVVEhfVE9LRU5fTkFNRSB8fCAndG9rZW4nO1xuZXhwb3J0IGNvbnN0IFBST0RVQ1RTX0xJTUlUID0gTnVtYmVyKHByb2Nlc3MuZW52LlBST0RVQ1RTX0xJTUlUKSB8fCA2O1xuXG5leHBvcnQgY29uc3QgT1JERVJfRVhQSVJFX1RJTUUgPSAxMDAwICogNjAgKiAxNTtcblxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICgoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdORVhUX1BVQkxJQ19BUElfVVJMIGVudiB2YXJpYWJsZSBpcyByZXF1aXJlZC4nKTtcbn0pKCk7XG5leHBvcnQgY29uc3QgSU1BR0VfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0VfVVJMIHx8ICgoKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJTUFHRV9VUkwgZW52IHZhcmlhYmxlIGlzIHJlcXVpcmVkLicpO1xufSkoKTtcblxuXG4iXSwibmFtZXMiOlsiREVGQVVMVF9ERVNDUklQVElPTiIsInByb2Nlc3MiLCJlbnYiLCJERUZBVUxUX1RJVExFIiwiQ1JFQVRPUiIsIkNBUlRfTE9DQUxfU1RPUkFHRV9OQU1FIiwiQVVUSF9UT0tFTl9OQU1FIiwiUFJPRFVDVFNfTElNSVQiLCJOdW1iZXIiLCJPUkRFUl9FWFBJUkVfVElNRSIsIkFQSV9VUkwiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiRXJyb3IiLCJJTUFHRV9VUkwiLCJORVhUX1BVQkxJQ19JTUFHRV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants.ts\n");

/***/ }),

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_utils_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/utils/Seo */ \"./components/utils/Seo.tsx\");\n\n\nconst NotFoundPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils_Seo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Page Not Found\"\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/pages/404.tsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"position-absolute top-50 start-50 translate-middle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"h1\",\n                    children: \"404 | PAGE NOT FOUND\"\n                }, void 0, false, {\n                    fileName: \"/home/anton/Projects/grocery_shop/frontend/pages/404.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/anton/Projects/grocery_shop/frontend/pages/404.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUF5QztBQUd6QyxNQUFNQyxZQUFZLEdBQUcsSUFBbUI7SUFDcEMscUJBQ0k7OzBCQUNJLDhEQUFDRCw2REFBRztnQkFBQ0UsS0FBSyxFQUFDLGdCQUFnQjs7Ozs7eUJBQUc7MEJBQzlCLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0RBQW9EOzBCQUMvRCw0RUFBQ0MsTUFBSTtvQkFBQ0QsU0FBUyxFQUFDLElBQUk7OEJBQUMsc0JBRXJCOzs7Ozs2QkFBTzs7Ozs7eUJBQ0w7O29CQUNQLENBQ0w7QUFDTixDQUFDO0FBRUQsaUVBQWVILFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb2Nlcnktc2hvcC1mcm9udGVuZC8uL3BhZ2VzLzQwNC50c3g/Y2E2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VvIGZyb20gJ34vY29tcG9uZW50cy91dGlscy9TZW8nO1xuXG5cbmNvbnN0IE5vdEZvdW5kUGFnZSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZW8gdGl0bGU9XCJQYWdlIE5vdCBGb3VuZFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHRvcC01MCBzdGFydC01MCB0cmFuc2xhdGUtbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDFcIj5cbiAgICAgICAgICAgICAgICAgICAgNDA0IHwgUEFHRSBOT1QgRk9VTkRcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kUGFnZTtcbiJdLCJuYW1lcyI6WyJTZW8iLCJOb3RGb3VuZFBhZ2UiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/404.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.tsx"));
module.exports = __webpack_exports__;

})();