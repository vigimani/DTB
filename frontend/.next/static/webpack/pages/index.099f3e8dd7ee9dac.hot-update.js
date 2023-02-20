"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/user/Data.jsx":
/*!**********************************!*\
  !*** ./components/user/Data.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            console.log(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]);\n            setPrices(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            getGmxPrices();\n            setLaunched(true);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: expo == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Exposition : Neutral \"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Leverage : 0\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP share price : \",\n                        totalsupply == 0 ? 0 : vaultusdc / totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"TVL : \",\n                        vaultusdc\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP Total supply : \",\n                        totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true) : expo == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Exposition : Long\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"Leverage : \",\n                        longleverage\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"prices : \",\n                        prices\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP share price : \",\n                        11 + longsize * (longavgprice - prices) / prices\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"TVL : \",\n                        totalsupply * (longcollateral + longsize * (longavgprice - prices) / prices)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP Total supply : \",\n                        totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Exposition : Short\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"Leverage : \",\n                        shortleverage\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP share price : \",\n                        shortcollateral + shortsize * (prices - shortavgprice) / prices\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"TVL : \",\n                        totalsupply * (shortcollateral + shortsize * (prices - shortavgprice) / prices)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP Total supply : \",\n                        totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(Data, \"0i+4UNTzqsO+DxcgXL5aHYHpP9o=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs4QkFDcEYsOERBQUMzQyxrREFBSUE7b0JBQUMyRCxHQUFFOzt3QkFBTzt3QkFBT2pDLGNBQWFZLENBQUFBLGtCQUFpQkQsWUFBV00sQ0FBQUEsU0FBT0osYUFBWSxJQUFHSSxNQUFNOzs7Ozs7OzhCQUMzRiw4REFBQzNDLGtEQUFJQTtvQkFBQzJELEdBQUU7O3dCQUFPO3dCQUFvQmpDOzs7Ozs7Ozt3QkFFbkM7O0FBR1IsQ0FBQztHQTdFdUJEOztRQW1CbEJKLHlFQUFtQkE7OztLQW5CREkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL0RhdGEuanN4PzZlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgSFN0YWNrLFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG4gIEljb25CdXR0b24sXG4gIGNvbG9yTW9kZSxcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUcixcbiAgVGQsXG4gIFRib2R5LFxuICBUaCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEFCSVMsIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQGNvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB0aW1lc3RhbXBjb252ZXJ0IH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuaW1wb3J0IHsgdXNlV2ViU29ja2V0IH0gZnJvbSBcInJlYWN0LXVzZS13ZWJzb2NrZXQvZGlzdC9saWIvdXNlLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhKCkge1xuICBjb25zdCB7XG4gICAgdG90YWxzdXBwbHksXG4gICAgc2hhcmVwcmljZSxcbiAgICBuYXZjYWxjdWxhdGVkLFxuICAgIHZhdWx0dXNkYyxcbiAgICBsb25nc2l6ZSxcbiAgICBsb25nY29sbGF0ZXJhbCxcbiAgICBsb25nZGVsdGEsXG4gICAgbG9uZ2xldmVyYWdlLFxuICAgIGxvbmdhdmdwcmljZSxcbiAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgc2hvcnRzaXplLFxuICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICBzaG9ydGF2Z3ByaWNlLFxuICAgIHNob3J0ZGVsdGEsXG4gICAgc2hvcnRsZXZlcmFnZSxcbiAgICBleHBvXG4gIH0gPSB1c2VDb250cmFjdFByb3ZpZGVyKCk7XG5cbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsYXVuY2hlZCwgc2V0TGF1bmNoZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0R214UHJpY2VzKCkge1xuICAgIGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzW0FERFJFU1MuV0VUSF0pO1xuICAgICAgICBzZXRQcmljZXMocmVzW0FERFJFU1MuV0VUSF0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChnZXRHbXhQcmljZXMsIDEwMDAwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYXVuY2hlZCkge1xuICAgICAgZ2V0R214UHJpY2VzKClcbiAgICAgIHNldExhdW5jaGVkKHRydWUpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAge2V4cG8gPT0gMCA/IFxuICAgICAgIChcbiAgICAgICAgPD5cbiAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5FeHBvc2l0aW9uIDogTmV1dHJhbCA8L0ZsZXg+XG4gICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiAwPC9GbGV4PlxuICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBzaGFyZSBwcmljZSA6IHt0b3RhbHN1cHBseSA9PSAwID8gMDogKHZhdWx0dXNkYy90b3RhbHN1cHBseSl9PC9GbGV4PlxuICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlRWTCA6IHt2YXVsdHVzZGN9PC9GbGV4PlxuICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuXG4gICAgICAgIDwvPlxuICAgICAgICk6IChleHBvID09IDEgPyAoXG4gICAgICAgIDw+XG4gICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IExvbmc8L0ZsZXg+XG4gICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiB7bG9uZ2xldmVyYWdlfTwvRmxleD5cbiAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5wcmljZXMgOiB7cHJpY2VzfTwvRmxleD5cbiAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgc2hhcmUgcHJpY2UgOiB7MTErKGxvbmdzaXplKihsb25nYXZncHJpY2UtcHJpY2VzKS9wcmljZXMpfTwvRmxleD5cbiAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5UVkwgOiB7dG90YWxzdXBwbHkqKGxvbmdjb2xsYXRlcmFsKyhsb25nc2l6ZSoobG9uZ2F2Z3ByaWNlLXByaWNlcykvcHJpY2VzKSl9PC9GbGV4PlxuICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuXG4gICAgICAgIDwvPlxuICAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IFNob3J0PC9GbGV4PlxuICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDoge3Nob3J0bGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBzaGFyZSBwcmljZSA6IHtzaG9ydGNvbGxhdGVyYWwrKHNob3J0c2l6ZSoocHJpY2VzLXNob3J0YXZncHJpY2UpL3ByaWNlcyl9PC9GbGV4PlxuICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlRWTCA6IHt0b3RhbHN1cHBseSooc2hvcnRjb2xsYXRlcmFsKyhzaG9ydHNpemUqKHByaWNlcy1zaG9ydGF2Z3ByaWNlKS9wcmljZXMpKX08L0ZsZXg+XG4gICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIlRleHQiLCJCb3giLCJIU3RhY2siLCJTdGFjayIsIlN3aXRjaCIsIkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlQ29sb3JNb2RlIiwiSWNvbkJ1dHRvbiIsImNvbG9yTW9kZSIsIlRhYmxlIiwiVGhlYWQiLCJUciIsIlRkIiwiVGJvZHkiLCJUaCIsIkFCSVMiLCJBRERSRVNTIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiZXRoZXJzIiwidGltZXN0YW1wY29udmVydCIsInVzZVdlYlNvY2tldCIsIkRhdGEiLCJ0b3RhbHN1cHBseSIsInNoYXJlcHJpY2UiLCJuYXZjYWxjdWxhdGVkIiwidmF1bHR1c2RjIiwibG9uZ3NpemUiLCJsb25nY29sbGF0ZXJhbCIsImxvbmdkZWx0YSIsImxvbmdsZXZlcmFnZSIsImxvbmdhdmdwcmljZSIsImluY3JlYXNlUG9zaXRpb24iLCJkZWNyZWFzZVBvc2l0aW9uIiwic2hvcnRzaXplIiwic2hvcnRjb2xsYXRlcmFsIiwic2hvcnRhdmdwcmljZSIsInNob3J0ZGVsdGEiLCJzaG9ydGxldmVyYWdlIiwiZXhwbyIsInByaWNlcyIsInNldFByaWNlcyIsImxhdW5jaGVkIiwic2V0TGF1bmNoZWQiLCJnZXRHbXhQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIldFVEgiLCJjYXRjaCIsImUiLCJmaW5hbGx5Iiwic2V0VGltZW91dCIsInciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});