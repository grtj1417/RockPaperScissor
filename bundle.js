/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\r\n\r\nfunction importAll(r) {\r\n    return r.keys().map(r);\r\n}\r\nconst images = importAll(__webpack_require__(\"./img sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\"));\r\n\r\nvar HUMAN_SCORE = 0;\r\nvar COMPUTER_SCORE = 0;\r\nconst scoreH = document.querySelector(\".scoreH\");\r\nconst scoreC = document.querySelector(\".scoreC\");\r\nconst dialog = document.querySelector(\"dialog\");\r\nconst ComputerCoiceImg = document.querySelector(\"#ComputerCoiceImg\");\r\n\r\nfunction getRandomInt(max) {\r\n    return Math.floor(Math.random() * max);\r\n}\r\n\r\nfunction getComputerChoice() {\r\n    var computerChoice = getRandomInt(3);\r\n    return computerChoice;\r\n}\r\n\r\nfunction playRound(humanChoice) {\r\n    var computerChoice = getComputerChoice();\r\n    if(computerChoice === 0){\r\n        ComputerCoiceImg.src = \"./img/rock.png\";\r\n    }else if(computerChoice === 1){\r\n        ComputerCoiceImg.src = \"./img/paper.png\";\r\n    }else if(computerChoice === 2){\r\n        ComputerCoiceImg.src = \"./img/scissor.png\";\r\n    }\r\n\r\n    if(humanChoice == computerChoice){\r\n        return 0;\r\n    }\r\n\r\n    if(humanChoice === 0 && computerChoice === 1){\r\n        return -1;\r\n    }else if(humanChoice === 0 && computerChoice === 2){\r\n        return 1;\r\n    }\r\n\r\n    if(humanChoice === 1 && computerChoice === 2){\r\n        return -1;\r\n    }else if(humanChoice === 1 && computerChoice === 0){\r\n        return 1;\r\n    }\r\n\r\n    if(humanChoice === 2 && computerChoice === 0){\r\n        return -1;\r\n    }else if(humanChoice === 2 && computerChoice === 1){\r\n        return 1;\r\n    }\r\n}\r\n\r\nfunction updateScore(choices) {\r\n    if (choices === \"computer\") {\r\n        scoreC.textContent = COMPUTER_SCORE;\r\n    } else {\r\n        scoreH.textContent = HUMAN_SCORE;\r\n    }\r\n}\r\n\r\nfunction reset() {\r\n    scoreH.textContent = \"0\";\r\n    scoreC.textContent = \"0\";\r\n    ComputerCoiceImg.src = \"./img/computerDefault.jpg\";\r\n    HUMAN_SCORE = 0;\r\n    COMPUTER_SCORE = 0;\r\n}\r\n\r\nfunction check_is_gameover() {\r\n    if(HUMAN_SCORE === 5){\r\n        scoreH.textContent = \"5\";\r\n        const tieMessage = document.querySelector(\"h3\");\r\n        tieMessage.textContent = \"you win\";\r\n        dialog.showModal();\r\n        reset();\r\n    }else if(COMPUTER_SCORE === 5){\r\n        scoreC.textContent = \"5\";\r\n        const tieMessage = document.querySelector(\"h3\");\r\n        tieMessage.textContent = \"you lose\";\r\n        dialog.showModal(); \r\n        reset();\r\n    }\r\n}\r\n\r\nfunction playGame(humanChoice) {\r\n    var res = playRound(humanChoice);\r\n\r\n    if(res === 1){\r\n        HUMAN_SCORE++;\r\n    }else if(res === -1){\r\n        COMPUTER_SCORE++;\r\n    }else{\r\n        const tieMessage = document.querySelector(\"h3\");\r\n        tieMessage.textContent = \"tie\";\r\n        dialog.showModal();\r\n    }\r\n\r\n    updateScore(\"computer\");\r\n    updateScore(\"human\");\r\n\r\n    check_is_gameover();\r\n}\r\n\r\nconst btn0 = document.querySelector(\".btn0\");\r\nbtn0.addEventListener(\"click\", () => {\r\n    playGame(0);\r\n});\r\n\r\nconst btn1 = document.querySelector(\".btn1\");\r\nbtn1.addEventListener(\"click\", () => {\r\n    playGame(1);\r\n});\r\n\r\nconst btn2 = document.querySelector(\".btn2\");\r\nbtn2.addEventListener(\"click\", () => {\r\n    playGame(2);\r\n});\r\n\r\ndialog.addEventListener(\"click\", (event) => {\r\n    const rect = dialog.getBoundingClientRect();\r\n    const isInDialog =\r\n        rect.top <= event.clientY &&\r\n        event.clientY <= rect.top + rect.height &&\r\n        rect.left <= event.clientX &&\r\n        event.clientX <= rect.left + rect.width;\r\n    if (!isInDialog) {\r\n        dialog.close();\r\n    }\r\n});\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./home.js?");

/***/ }),

/***/ "./img sync \\.(png%7Cjpe?g%7Cgif%7Csvg)$":
/*!*************************************************************!*\
  !*** ./img/ sync nonrecursive \.(png%7Cjpe?g%7Cgif%7Csvg)$ ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./computerDefault.jpg\": \"./img/computerDefault.jpg\",\n\t\"./computerDefault2.jpg\": \"./img/computerDefault2.jpg\",\n\t\"./paper.png\": \"./img/paper.png\",\n\t\"./rock.png\": \"./img/rock.png\",\n\t\"./scissor.png\": \"./img/scissor.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./img sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\";\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./img/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./style.css?");

/***/ }),

/***/ "./img/computerDefault.jpg":
/*!*********************************!*\
  !*** ./img/computerDefault.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/computerDefault.jpg\";\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./img/computerDefault.jpg?");

/***/ }),

/***/ "./img/computerDefault2.jpg":
/*!**********************************!*\
  !*** ./img/computerDefault2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/computerDefault2.jpg\";\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./img/computerDefault2.jpg?");

/***/ }),

/***/ "./img/paper.png":
/*!***********************!*\
  !*** ./img/paper.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/paper.png\";\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./img/paper.png?");

/***/ }),

/***/ "./img/rock.png":
/*!**********************!*\
  !*** ./img/rock.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/rock.png\";\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./img/rock.png?");

/***/ }),

/***/ "./img/scissor.png":
/*!*************************!*\
  !*** ./img/scissor.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/scissor.png\";\n\n//# sourceURL=webpack://project_05_rockpaperscissor/./img/scissor.png?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./home.js");
/******/ 	
/******/ })()
;