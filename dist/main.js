/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ \"./src/img/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@100;300;500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    /* --orange: rgb(255, 206, 59); */\r\n    --orange: rgb(255, 191, 0);\r\n    --red: rgb(236, 54, 8);\r\n    --dark-red: rgb(206, 41, 0);\r\n    --white: rgb(238, 247, 255);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Lobster\", sans-serif;\r\n}\r\n\r\nbody {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-attachment: fixed; \r\n    background-size: cover;\r\n    background-position: center;\r\n    color: var(--white);  \r\n    letter-spacing: 3px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#content {\r\n    min-height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n.menu-checked {\r\n    padding-bottom: 130px;\r\n}\r\n\r\n/* Header */\r\nheader {\r\n    background-color: var(--orange);\r\n    width: 100%;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 30px;\r\n}\r\n\r\nheader > h1 {\r\n    font-size: 2.5rem;\r\n    color: var(--red);\r\n    /* letter-spacing: 2px; */\r\n}\r\n\r\nheader > nav {\r\n    /* background-color: blue; */\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 300px;\r\n    border: none;\r\n}\r\n\r\nheader > nav > button {\r\n    width: auto;\r\n    height: 30px;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    font-size: 1.3rem;\r\n    font-weight: 700;\r\n    /* letter-spacing: 2px; */\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    color: var(--white);\r\n    transition: color 0.3s ease;\r\n}\r\n\r\nheader > nav > button:hover {\r\n    color: var(--red);\r\n}\r\n\r\n/* Home */\r\n.home-container {\r\n    width: 100%;\r\n    height: calc(100vh - 120px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.hero {\r\n    height: 70%;\r\n    width: 600px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 50px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.hero > h1,\r\n.hero > h1 > h1 {\r\n    font-size: 4rem;\r\n}\r\n\r\n.hero > h1 > span {\r\n    font-size: 4rem;\r\n    margin-left: 15px;\r\n    color: var(--red);\r\n}\r\n\r\n.hero > p {\r\n    font-size: 1.3rem;\r\n    margin: 10px 0 20px 0;\r\n    color: var(--yellow);\r\n}\r\n\r\n.hero > h1,\r\n.hero > p {\r\n    font-weight: 700;\r\n} \r\n\r\n.hero > button {\r\n    width: 200px;\r\n    height: 40px;\r\n    background-color: var(--red);\r\n    color: var(--white);\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n}\r\n\r\n.hero > button:hover {\r\n    background-color: var(--dark-red);\r\n}\r\n\r\n/* Menu */\r\n.menu-container {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n}\r\n\r\n.menu-container > h1 {\r\n    margin-top: 80px;\r\n    font-size: 3.2rem;\r\n    /* letter-spacing: 2px; */\r\n    color: var(--white);\r\n    text-shadow: 2px 1px 3px rgba(0,0,0,0.49);\r\n}\r\n\r\n.all-food-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 50px;\r\n    width: 100%;\r\n    padding: 0 50px;\r\n}\r\n\r\n.food-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    background-color: var(--orange);\r\n    height: 450px;\r\n    padding: 15px 20px;\r\n    border-radius: 5px;\r\n    color: var(--red);\r\n    box-shadow: 10px 10px 24px 1px rgba(0,0,0,0.36);\r\n}\r\n\r\n.food-container > h3:nth-child(1) {\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.food-container > img {\r\n    width: 200px;\r\n    min-height: 150px;\r\n    object-fit: cover;\r\n}\r\n\r\n.food-container > p {\r\n    color: var(--white);\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.food-container > h3:nth-child(4) {\r\n    color: var(--white);\r\n    font-size: 1.5rem;\r\n    /* letter-spacing: 2px; */\r\n}\r\n\r\n.food-container > h3:nth-child(4)::first-letter {\r\n    color: var(--dark-red);\r\n}\r\n\r\n/* Contact us */\r\n.contact-container {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n}\r\n\r\n.contact-container > h1 {\r\n    margin-top: 80px;\r\n    font-size: 3.2rem;\r\n}\r\n\r\n.contact {\r\n    background-color: var(--orange);\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 550px;\r\n    gap: 40px;\r\n    padding: 40px;\r\n    border-radius: 5px;\r\n    box-shadow: 10px 10px 24px 1px rgba(0,0,0,0.36);\r\n}\r\n\r\n.info {\r\n    font-size: 1.2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.info img {\r\n    margin-right: 20px;\r\n    height:25px;\r\n    width: 25px;\r\n}\r\n\r\n.info  div {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.iframe {\r\n    height: 400px;\r\n    width: 100%;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n    background-color: var(--orange);\r\n    width: 100%;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    /* letter-spacing: 1px; */\r\n}\r\n\r\nfooter > a {\r\n    text-decoration: none;\r\n    color: var(--white);\r\n    transition: color 0.3s ease;\r\n}\r\n\r\nfooter > a:hover {\r\n    text-decoration: none;\r\n    color: var(--red);\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n    header {\r\n        justify-content: space-around;\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    header > h1 {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    header > nav {\r\n        justify-content: space-evenly;\r\n        width: 220px;\r\n    }\r\n    \r\n    header > nav > button {\r\n        font-size: 1.1rem;\r\n        padding: 5px;\r\n    }\r\n\r\n    .hero > h1,\r\n    .hero > h1 > h1,\r\n    .hero > h1 > span {\r\n        font-size: 3.5rem;\r\n    }\r\n\r\n    .hero > p {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    .menu-container > h1,\r\n    .contact-container > h1 {\r\n        font-size: 2.8rem;\r\n    }\r\n\r\n    .contact {\r\n        width: 450px;\r\n        gap: 30px;\r\n        padding: 30px;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    header {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        min-height: 80px;\r\n        padding: 0;\r\n    }\r\n\r\n    .home-container {\r\n        height: calc(100vh - 140px);\r\n    }\r\n\r\n    .hero {\r\n        padding: 10px;\r\n        margin-bottom: 0;\r\n        justify-content: center;\r\n    }\r\n\r\n    .hero > h1,\r\n    .hero > h1 > h1,\r\n    .hero > h1 > span {\r\n        font-size: 2.6rem;\r\n    }\r\n\r\n    .hero > p {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n    .hero > button {\r\n        width: 180px;\r\n        height: 30px;\r\n        border-radius: 5px;\r\n        padding: 5px;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .menu-container > h1 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .all-food-container {\r\n        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .contact {\r\n        max-width: 300px;\r\n    }\r\n\r\n    .info {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n    .info img {\r\n        margin-right: 20px;\r\n        height: 20px;\r\n        width: 20px;\r\n    }\r\n\r\n    .iframe {\r\n        height: 300px;\r\n        width: 100%;\r\n    }\r\n\r\n    footer {\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .all-food-container {\r\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    }\r\n\r\n    .food-container {\r\n        justify-content: center;\r\n        height: 350px;\r\n        padding: 10px 5px;\r\n        gap: 10px;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .food-container > h3:nth-child(1) {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .food-container > img {\r\n        width: 120px;\r\n        min-height: 120px;\r\n    }\r\n    \r\n    .food-container > p {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n    .food-container > h3:nth-child(4) {\r\n        font-size: 1.3rem;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactPage: () => (/* binding */ createContactPage)\n/* harmony export */ });\nfunction createContactPage() {\r\n    const contentDiv = document.getElementById(\"content\");\r\n    const mainSection = document.querySelector(\".main-section\");\r\n\r\n    contentDiv.classList.add(\"menu-checked\");\r\n\r\n    // Contact container\r\n    mainSection.classList.remove(\"menu-container\");\r\n    mainSection.classList.remove(\"home-container\");\r\n    mainSection.classList.add(\"contact-container\");\r\n\r\n    // Contact title\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"Contact Us\";\r\n    mainSection.appendChild(title);\r\n\r\n    // Contact\r\n    const contact = document.createElement(\"div\");\r\n    contact.classList.add(\"contact\");\r\n    mainSection.appendChild(contact);\r\n    \r\n    // Info container\r\n    const infoDiv = document.createElement(\"div\");\r\n    infoDiv.classList.add(\"info\");\r\n    contact.appendChild(infoDiv);\r\n\r\n    // Phone number container\r\n    const phoneNumberContainer = document.createElement(\"div\");\r\n    phoneNumberContainer.classList.add(\"phone\");\r\n    infoDiv.appendChild(phoneNumberContainer);\r\n\r\n    // Phone number icon\r\n    const numIcon = document.createElement(\"img\");\r\n    numIcon.src = \"../src/svg/phone-solid.svg\"\r\n    phoneNumberContainer.appendChild(numIcon);\r\n    \r\n    // Phone number\r\n    const phoneNumber = document.createElement(\"p\");\r\n    phoneNumber.textContent = \"1234 5678\";\r\n    phoneNumberContainer.appendChild(phoneNumber);\r\n\r\n    // Adress container\r\n    const adressContainer = document.createElement(\"div\");\r\n    adressContainer.classList.add(\"adress\");\r\n    infoDiv.appendChild(adressContainer);\r\n\r\n    // Adress icon\r\n    const adressIcon = document.createElement(\"img\");\r\n    adressIcon.src = \"../src/svg/location-dot-solid.svg\"\r\n    adressContainer.appendChild(adressIcon);\r\n\r\n    // Adress\r\n    const adress = document.createElement(\"p\");\r\n    adress.textContent = \"1024 Oakwood Ave - San Diego, CA 22434\";\r\n    adressContainer.appendChild(adress);\r\n\r\n    // Hours container\r\n    const hoursContainer = document.createElement(\"div\");\r\n    hoursContainer.classList.add(\"hours\");\r\n    infoDiv.appendChild(hoursContainer);\r\n\r\n    // Hours icon\r\n    const hoursIcon = document.createElement(\"img\");\r\n    hoursIcon.src = \"../src/svg/clock-solid.svg\"\r\n    hoursContainer.appendChild(hoursIcon);\r\n\r\n    // Hours\r\n    const hours = document.createElement(\"p\");\r\n    hours.textContent = \"Mon-Thurs:8am-8pm -  Fri-Sun:8am-11pm\";\r\n    hoursContainer.appendChild(hours);\r\n\r\n    // iframe\r\n    const iFrame = document.createElement(\"iframe\");\r\n    iFrame.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald's!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus\";\r\n    iFrame.classList.add(\"iframe\");\r\n    contact.appendChild(iFrame);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\nfunction createHomePage() {\r\n    const contentDiv = document.getElementById(\"content\");\r\n    const mainSection = document.querySelector(\".main-section\");\r\n    \r\n    contentDiv.classList.remove(\"menu-checked\");\r\n\r\n    // Home container\r\n    mainSection.classList.remove(\"menu-container\");\r\n    mainSection.classList.remove(\"contact-container\");\r\n    mainSection.classList.add(\"home-container\");\r\n\r\n    // Hero\r\n    const hero = document.createElement(\"div\");\r\n    hero.classList.add(\"hero\");\r\n    mainSection.appendChild(hero);\r\n\r\n    // Headline\r\n    const headLine1 = document.createElement(\"h1\");\r\n    headLine1.textContent = \"The\";\r\n    hero.appendChild(headLine1);\r\n\r\n    const highLight = document.createElement(\"span\");\r\n    highLight.textContent = \"best\";\r\n    headLine1.appendChild(highLight);\r\n\r\n    const headLine2 = document.createElement(\"h1\");\r\n    headLine2.textContent = \"hamburgers!\";\r\n    headLine1.appendChild(headLine2);\r\n\r\n    // Paragraph\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = \"Come to visit us or...\";\r\n    hero.appendChild(paragraph);\r\n\r\n    // Go to menu button\r\n    const toMenuBtn = document.createElement(\"button\");\r\n    toMenuBtn.textContent = \"Order now\";\r\n    hero.appendChild(toMenuBtn);\r\n\r\n    // Event for the menu btn\r\n    toMenuBtn.addEventListener(\"click\", () => {\r\n        mainSection.innerHTML = \"\";\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenuPage)();\r\n        contentDiv.classList.add(\"menu-checked\");\r\n    })\r\n};\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    initialLoad();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\r\n    tabsFunction();\r\n});\r\n\r\n// Inital load\r\nconst header = document.createElement(\"header\");\r\nconst nav = document.createElement(\"nav\");\r\nconst title = document.createElement(\"h1\");\r\nconst mainSection = document.createElement(\"section\");\r\nconst footer = document.createElement(\"footer\");\r\nconst footerText = document.createElement(\"p\");\r\nconst footerLink = document.createElement(\"a\");\r\n\r\nlet allTabs = [];\r\n\r\nfunction initialLoad() {\r\n    const contentDiv = document.getElementById(\"content\");\r\n\r\n    // Title\r\n    title.textContent = \"Fast Bites\";\r\n    header.appendChild(title);\r\n    \r\n    // Buttons\r\n    const btnLabels = [\"Home\", \"Menu\", \"Contact us\"];\r\n\r\n    btnLabels.forEach((label) => {\r\n        const button = document.createElement(\"button\");\r\n        button.textContent = label;\r\n        button.classList.add(\"tab-btn\");\r\n        nav.appendChild(button);\r\n    });\r\n\r\n    // Nav\r\n    header.appendChild(nav);\r\n\r\n    // Header\r\n    contentDiv.appendChild(header);\r\n\r\n    // Main section\r\n    mainSection.classList.add(\"main-section\");\r\n    contentDiv.appendChild(mainSection);\r\n\r\n    // Footer\r\n    contentDiv.appendChild(footer);\r\n    footer.appendChild(footerText);\r\n    footer.appendChild(footerLink);\r\n    footerText.textContent = \"Made by\";\r\n    footerLink.textContent = \"Tiago-salva\";\r\n    footerLink.href = \"https://github.com/Tiago-salva\";\r\n};\r\n\r\nfunction tabsFunction() {\r\n    allTabs = document.querySelectorAll(\".tab-btn\");\r\n    const contentDiv = document.getElementById(\"content\");\r\n\r\n    // Tab function\r\n    const tabs = [\r\n        { name: \"Home\", function: _home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage },\r\n        { name: \"Menu\", function: _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuPage },\r\n        { name: \"Contact us\", function: _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactPage },\r\n    ];\r\n\r\n    function switchTab(tabName) {\r\n        mainSection.innerHTML = \"\";\r\n        const tab = tabs.find((t) => t.name === tabName);\r\n        tab.function();\r\n    };\r\n\r\n    allTabs.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n        switchTab(button.textContent);\r\n    });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\nfunction createMenuPage() {    \r\n    const contentDiv = document.getElementById(\"content\");\r\n    const mainSection = document.querySelector(\".main-section\");\r\n\r\n    contentDiv.classList.add(\"menu-checked\");\r\n\r\n    // Menu container\r\n    mainSection.classList.remove(\"home-container\");\r\n    mainSection.classList.remove(\"contact-container\");\r\n    mainSection.classList.add(\"menu-container\");\r\n\r\n    // Menu title\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"Menu\";\r\n    mainSection.appendChild(title);\r\n    \r\n    // allFoodContainer\r\n    const allFoodContainer = document.createElement(\"div\");\r\n    allFoodContainer.classList.add(\"all-food-container\");\r\n    mainSection.appendChild(allFoodContainer);\r\n\r\n    // Food container\r\n    const menu = [\r\n        {\r\n            name: \"Classic FastBurger\",\r\n            img: \"../src/img/hamburger1.png\",\r\n            description: \"A simple burger with mayonnaise and ketchup\",\r\n            price: \"$10.99\",\r\n        },\r\n        {\r\n            name: \"Fish FastSandwich\",\r\n            img: \"../src/img/hamburger2.png\",\r\n            description: \"A double fish sandwich with cheddar\",\r\n            price: \"$12.99\",\r\n        },\r\n        {\r\n            name: \"Big Triple FastBite\",\r\n            img: \"../src/img/hamburger3.png\",\r\n            description: \"A triple burger with cheddar, bacon, tomato and lettuce\",\r\n            price: \"$20.99\",\r\n        },\r\n        {\r\n            name: \"FastNuggets X 10\",\r\n            img: \"../src/img/nuggets.png\",\r\n            description: \"10 chicken nuggets with 2 sauces\",\r\n            price: \"$5.99\",\r\n        },\r\n        {\r\n            name: \"FastSalad\",\r\n            img: \"../src/img/salad.png\",\r\n            description: \"A salad with chicken, tomatoes and caramelized onion\",\r\n            price: \"$10.99\",\r\n        },\r\n        {\r\n            name: \"FastFries\",\r\n            img: \"../src/img/cheddar-fries.png\",\r\n            description: \"French fries with cheddar or ketchup\",\r\n            price: \"$6.99\",\r\n        },\r\n        {\r\n            name: \"Vainilla FastCone\",\r\n            img: \"../src/img/vainilla-icecream.png\",\r\n            description: \"A vanilla ice cream cone\",\r\n            price: \"$3.99\",\r\n        },\r\n        {\r\n            name: \"Chocolate FastCream\",\r\n            img: \"../src/img/choco-icecream.png\",\r\n            description: \"An ice cream with cream and a chocolate sauce\",\r\n            price: \"$5.99\",\r\n        },\r\n    ];\r\n\r\n    // Create the cards\r\n    menu.forEach(item => {\r\n        // Card\r\n        const foodContainer = document.createElement(\"div\");\r\n        foodContainer.classList.add(\"food-container\");\r\n        allFoodContainer.appendChild(foodContainer);\r\n\r\n        // Card title\r\n        const foodTitle = document.createElement(\"h3\");\r\n        foodTitle.textContent = item.name;\r\n\r\n        // Card image\r\n        const foodImg = document.createElement(\"img\");\r\n        foodImg.src = item.img;\r\n        foodImg.alt = item.nombre;\r\n\r\n        // Card description\r\n        const foodDescription = document.createElement(\"p\");\r\n        foodDescription.textContent = item.description;\r\n\r\n        // Card price\r\n        const foodPrice = document.createElement(\"h3\");\r\n        foodPrice.textContent = item.price;\r\n        \r\n        foodContainer.appendChild(foodTitle);\r\n        foodContainer.appendChild(foodImg);\r\n        foodContainer.appendChild(foodDescription);\r\n        foodContainer.appendChild(foodPrice);\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39463cf52e6816a5cee4.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/background.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;