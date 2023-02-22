"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/admin/Adminreader.jsx":
/*!******************************************!*\
  !*** ./components/admin/Adminreader.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Adminreader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_others_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/others/Separator */ \"./components/others/Separator.jsx\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Adminreader(param) {\n    let { expo , setExpo  } = param;\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , updateData  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider)();\n    const bgCard = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"white\", \"gray.600\");\n    const colortext = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#594B7E\", \"white\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            w: \"33%\",\n            ml: \"1rem\",\n            direction: \"column\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                    color: colortext,\n                    children: \"Reader\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    boxShadow: \"0px 0px 10px\",\n                    flexDirection: \"column\",\n                    p: \"10px\",\n                    mt: \"1rem\",\n                    borderRadius: \"10px\",\n                    bg: bgCard,\n                    color: colortext,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            fontWeight: \"bold\",\n                            fontSize: \"2xl\",\n                            children: \"Vault\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            mt: \"1rem\",\n                            flexDirection: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"PLP supply : \",\n                                        totalsupply\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"Share price : \",\n                                        shareprice\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"NAV : \",\n                                        navcalculated\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"VAULT USDC : \",\n                                        vaultusdc\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    w: \"100%\",\n                                    bg: \"green\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                                fontWeight: \"bold\",\n                                                fontSize: \"2xl\",\n                                                children: \"Positions on\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                                maxH: true,\n                                                boxSize: \"120px\",\n                                                bg: \"blue\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                                    ml: \"1rem\",\n                                                    // objectFit=\"cover\"\n                                                    src: \"./GMXlogo.png\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    mb: \"1rem\",\n                                    mt: \"1rem\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            w: \"50%\",\n                                            flexDirection: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    fontWeight: \"bold\",\n                                                    children: \"LONG\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Size : \",\n                                                        longsize\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Collateral : \",\n                                                        longcollateral\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Delta : \",\n                                                        longdelta\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    mb: \"5px\",\n                                                    children: [\n                                                        \"Leverage : \",\n                                                        longleverage\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            w: \"3px\",\n                                            h: \"100%\",\n                                            bg: \"linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)\",\n                                            mr: \"5px\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            w: \"50%\",\n                                            flexDirection: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    fontWeight: \"bold\",\n                                                    children: \"SHORT\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Size : \",\n                                                        shortsize\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Collateral : \",\n                                                        shortcollateral\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Delta : \",\n                                                        shortdelta\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Leverage : \",\n                                                        shortleverage\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_others_Separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {}, void 0, false, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    mt: \"1rem\",\n                                    children: [\n                                        \"Waiting Increase pos : \",\n                                        increasePosition\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    children: [\n                                        \"Waiting Decrease pos : \",\n                                        decreasePosition\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Adminreader, \"a8vwVoUueLTrkF0dQhR7vqNnbro=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = Adminreader;\nvar _c;\n$RefreshReg$(_c, \"Adminreader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckQsa0RBQUlBOzt3REFBQzt3REFBUW1DOzs7Ozs7OzhEQUNkLDhEQUFDbkMsa0RBQUlBOzt3REFBQzt3REFBY29DOzs7Ozs7OzhEQUNwQiw4REFBQ3BDLGtEQUFJQTs7d0RBQUM7d0RBQVNzQzs7Ozs7Ozs4REFDZiw4REFBQ3RDLGtEQUFJQTs7d0RBQUM7d0RBQVl1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHdEIsOERBQUN2QixtRUFBU0E7Ozs7OzhDQUNWLDhEQUFDaEIsa0RBQUlBO29DQUFDa0QsSUFBRzs7d0NBQU87d0NBQXdCakI7Ozs7Ozs7OENBQ3hDLDhEQUFDakMsa0RBQUlBOzt3Q0FBQzt3Q0FBd0JrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUMsQ0FBQztHQTdGdUJiOztRQW1CbEJELHlFQUFtQkE7UUFDUlIsK0RBQWlCQTtRQUNkQSwrREFBaUJBOzs7S0FyQmJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5yZWFkZXIuanN4PzAxYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIEJveCxcbiAgSW5wdXRHcm91cCxcbiAgSW5wdXRMZWZ0QWRkb24sXG4gIEljb24sXG4gIFJhZGlvR3JvdXAsXG4gIFJhZGlvLFxuICBTdGFjayxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC9jb21wb25lbnRzL290aGVycy9TZXBhcmF0b3JcIjtcbmltcG9ydCB7IEFCSVMsIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQGNvbmZpZ1wiO1xuXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9Db250cmFjdENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5yZWFkZXIoeyBleHBvLCBzZXRFeHBvIH0pIHtcbiAgY29uc3Qge1xuICAgIHRvdGFsc3VwcGx5LFxuICAgIHNoYXJlcHJpY2UsXG4gICAgbmF2Y2FsY3VsYXRlZCxcbiAgICB2YXVsdHVzZGMsXG4gICAgbG9uZ3NpemUsXG4gICAgbG9uZ2NvbGxhdGVyYWwsXG4gICAgbG9uZ2RlbHRhLFxuICAgIGxvbmdsZXZlcmFnZSxcbiAgICBsb25nYXZncHJpY2UsXG4gICAgaW5jcmVhc2VQb3NpdGlvbixcbiAgICBkZWNyZWFzZVBvc2l0aW9uLFxuICAgIHNob3J0c2l6ZSxcbiAgICBzaG9ydGNvbGxhdGVyYWwsXG4gICAgc2hvcnRhdmdwcmljZSxcbiAgICBzaG9ydGRlbHRhLFxuICAgIHNob3J0bGV2ZXJhZ2UsXG4gICAgdXBkYXRlRGF0YSxcbiAgfSA9IHVzZUNvbnRyYWN0UHJvdmlkZXIoKTtcbiAgY29uc3QgYmdDYXJkID0gdXNlQ29sb3JNb2RlVmFsdWUoXCJ3aGl0ZVwiLCBcImdyYXkuNjAwXCIpO1xuICBjb25zdCBjb2xvcnRleHQgPSB1c2VDb2xvck1vZGVWYWx1ZShcIiM1OTRCN0VcIiwgXCJ3aGl0ZVwiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3PVwiMzMlXCIgbWw9XCIxcmVtXCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxIZWFkaW5nIGNvbG9yPXtjb2xvcnRleHR9PlJlYWRlcjwvSGVhZGluZz5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBib3hTaGFkb3c9e1wiMHB4IDBweCAxMHB4XCJ9XG4gICAgICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cbiAgICAgICAgICBwPVwiMTBweFwiXG4gICAgICAgICAgbXQ9XCIxcmVtXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgICBiZz17YmdDYXJkfVxuICAgICAgICAgIGNvbG9yPXtjb2xvcnRleHR9XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXtcImJvbGRcIn0gZm9udFNpemU9e1wiMnhsXCJ9PlxuICAgICAgICAgICAgVmF1bHRcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEZsZXggbXQ9XCIxcmVtXCIgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn0+XG4gICAgICAgICAgICA8VGV4dD5QTFAgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PlNoYXJlIHByaWNlIDoge3NoYXJlcHJpY2V9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+TkFWIDoge25hdmNhbGN1bGF0ZWR9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+VkFVTFQgVVNEQyA6IHt2YXVsdHVzZGN9PC9UZXh0PlxuXG5cbiAgICAgICAgICAgICAgPEZsZXggdz1cIjEwMCVcIiBiZz1cImdyZWVuXCI+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXtcImJvbGRcIn0gZm9udFNpemU9e1wiMnhsXCJ9PlxuICAgICAgICAgICAgICAgICAgICBQb3NpdGlvbnMgb25cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICA8Qm94IG1heEggYm94U2l6ZT1cIjEyMHB4XCIgYmc9XCJibHVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIG1sPVwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4vR01YbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPEZsZXggbWI9XCIxcmVtXCIgbXQ9XCIxcmVtXCI+XG4gICAgICAgICAgICAgIDxGbGV4IHc9XCI1MCVcIiBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifT5cbiAgICAgICAgICAgICAgICA8RmxleCBmb250V2VpZ2h0PXtcImJvbGRcIn0+TE9ORzwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5TaXplIDoge2xvbmdzaXplfTwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5Db2xsYXRlcmFsIDoge2xvbmdjb2xsYXRlcmFsfTwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5EZWx0YSA6IHtsb25nZGVsdGF9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4IG1iPVwiNXB4XCI+TGV2ZXJhZ2UgOiB7bG9uZ2xldmVyYWdlfTwvRmxleD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIHc9XCIzcHhcIlxuICAgICAgICAgICAgICAgIGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBiZz1cImxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjQsIDIyNSwgMjI2LCAwKSAwJSwgI0UwRTFFMiA0OS41MiUsIHJnYmEoMjI0LCAyMjUsIDIyNiwgMCkgMTAwJSlcIlxuICAgICAgICAgICAgICAgIG1yPVwiNXB4XCJcbiAgICAgICAgICAgICAgPjwvRmxleD5cbiAgICAgICAgICAgICAgPEZsZXggdz1cIjUwJVwiIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGZvbnRXZWlnaHQ9e1wiYm9sZFwifT5TSE9SVDwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5TaXplIDoge3Nob3J0c2l6ZX08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXg+Q29sbGF0ZXJhbCA6IHtzaG9ydGNvbGxhdGVyYWx9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkRlbHRhIDoge3Nob3J0ZGVsdGF9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkxldmVyYWdlIDoge3Nob3J0bGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICA8RmxleCBtdD1cIjFyZW1cIj5XYWl0aW5nIEluY3JlYXNlIHBvcyA6IHtpbmNyZWFzZVBvc2l0aW9ufTwvRmxleD5cbiAgICAgICAgICAgIDxGbGV4PldhaXRpbmcgRGVjcmVhc2UgcG9zIDoge2RlY3JlYXNlUG9zaXRpb259PC9GbGV4PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIkJveCIsIklucHV0R3JvdXAiLCJJbnB1dExlZnRBZGRvbiIsIkljb24iLCJSYWRpb0dyb3VwIiwiUmFkaW8iLCJTdGFjayIsIlRleHQiLCJIZWFkaW5nIiwiTGlzdCIsIkxpc3RJdGVtIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlcGFyYXRvciIsIkFCSVMiLCJBRERSRVNTIiwiZXRoZXJzIiwidXNlQ29udHJhY3RQcm92aWRlciIsIkFkbWlucmVhZGVyIiwiZXhwbyIsInNldEV4cG8iLCJ0b3RhbHN1cHBseSIsInNoYXJlcHJpY2UiLCJuYXZjYWxjdWxhdGVkIiwidmF1bHR1c2RjIiwibG9uZ3NpemUiLCJsb25nY29sbGF0ZXJhbCIsImxvbmdkZWx0YSIsImxvbmdsZXZlcmFnZSIsImxvbmdhdmdwcmljZSIsImluY3JlYXNlUG9zaXRpb24iLCJkZWNyZWFzZVBvc2l0aW9uIiwic2hvcnRzaXplIiwic2hvcnRjb2xsYXRlcmFsIiwic2hvcnRhdmdwcmljZSIsInNob3J0ZGVsdGEiLCJzaG9ydGxldmVyYWdlIiwidXBkYXRlRGF0YSIsImJnQ2FyZCIsImNvbG9ydGV4dCIsInciLCJtbCIsImRpcmVjdGlvbiIsImNvbG9yIiwiYm94U2hhZG93IiwiZmxleERpcmVjdGlvbiIsInAiLCJtdCIsImJvcmRlclJhZGl1cyIsImJnIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibWF4SCIsImJveFNpemUiLCJzcmMiLCJtYiIsImgiLCJtciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/admin/Adminreader.jsx\n"));

/***/ })

});