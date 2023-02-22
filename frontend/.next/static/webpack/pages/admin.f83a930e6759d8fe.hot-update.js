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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Adminreader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_others_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/others/Separator */ \"./components/others/Separator.jsx\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Adminreader(param) {\n    let { expo , setExpo  } = param;\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , updateData  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider)();\n    const bgCard = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"white\", \"gray.600\");\n    const colortext = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#594B7E\", \"white\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            w: \"33%\",\n            ml: \"1rem\",\n            direction: \"column\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                    color: colortext,\n                    children: \"Reader\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    boxShadow: \"0px 0px 10px\",\n                    flexDirection: \"column\",\n                    p: \"10px\",\n                    mt: \"1rem\",\n                    borderRadius: \"10px\",\n                    bg: bgCard,\n                    color: colortext,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            fontWeight: \"bold\",\n                            fontSize: \"2xl\",\n                            children: \"Vault\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            mt: \"1rem\",\n                            flexDirection: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"PLP supply : \",\n                                        totalsupply\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"Share price : \",\n                                        shareprice\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"NAV : \",\n                                        navcalculated\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    children: [\n                                        \"VAULT USDC : \",\n                                        vaultusdc\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    w: \"100%\",\n                                    bg: \"red\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                        maxHeight: \"100px\",\n                                        boxSize: \"120px\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            direction: \"raw\",\n                                            w: \"100%\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                                    fontWeight: \"bold\",\n                                                    fontSize: \"2xl\",\n                                                    children: \"Positions on\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                                    ml: \"1rem\",\n                                                    // objectFit=\"cover\"\n                                                    src: \"./GMXlogo.png\",\n                                                    alt: \"Logo\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    mb: \"1rem\",\n                                    mt: \"1rem\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            w: \"50%\",\n                                            flexDirection: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    fontWeight: \"bold\",\n                                                    children: \"LONG\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Size : \",\n                                                        longsize\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Collateral : \",\n                                                        longcollateral\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Delta : \",\n                                                        longdelta\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    mb: \"5px\",\n                                                    children: [\n                                                        \"Leverage : \",\n                                                        longleverage\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            w: \"3px\",\n                                            h: \"100%\",\n                                            bg: \"linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)\",\n                                            mr: \"5px\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                            w: \"50%\",\n                                            flexDirection: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    fontWeight: \"bold\",\n                                                    children: \"SHORT\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Size : \",\n                                                        shortsize\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Collateral : \",\n                                                        shortcollateral\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Delta : \",\n                                                        shortdelta\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                    children: [\n                                                        \"Leverage : \",\n                                                        shortleverage\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_others_Separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {}, void 0, false, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    mt: \"1rem\",\n                                    children: [\n                                        \"Waiting Increase pos : \",\n                                        increasePosition\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    children: [\n                                        \"Waiting Decrease pos : \",\n                                        decreasePosition\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Adminreader, \"a8vwVoUueLTrkF0dQhR7vqNnbro=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = Adminreader;\nvar _c;\n$RefreshReg$(_c, \"Adminreader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyRCxrREFBSUE7O3dEQUFDO3dEQUFRbUM7Ozs7Ozs7OERBQ2QsOERBQUNuQyxrREFBSUE7O3dEQUFDO3dEQUFjb0M7Ozs7Ozs7OERBQ3BCLDhEQUFDcEMsa0RBQUlBOzt3REFBQzt3REFBU3NDOzs7Ozs7OzhEQUNmLDhEQUFDdEMsa0RBQUlBOzt3REFBQzt3REFBWXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUd0Qiw4REFBQ3ZCLG1FQUFTQTs7Ozs7OENBQ1YsOERBQUNoQixrREFBSUE7b0NBQUNrRCxJQUFHOzt3Q0FBTzt3Q0FBd0JqQjs7Ozs7Ozs4Q0FDeEMsOERBQUNqQyxrREFBSUE7O3dDQUFDO3dDQUF3QmtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQyxDQUFDO0dBMUZ1QmI7O1FBbUJsQkQseUVBQW1CQTtRQUNSUiwrREFBaUJBO1FBQ2RBLCtEQUFpQkE7OztLQXJCYlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9BZG1pbnJlYWRlci5qc3g/MDFiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZSxcbiAgRmxleCxcbiAgQm94LFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dExlZnRBZGRvbixcbiAgSWNvbixcbiAgUmFkaW9Hcm91cCxcbiAgUmFkaW8sXG4gIFN0YWNrLFxuICBUZXh0LFxuICBIZWFkaW5nLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZUNvbG9yTW9kZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvb3RoZXJzL1NlcGFyYXRvclwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5cbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbnJlYWRlcih7IGV4cG8sIHNldEV4cG8gfSkge1xuICBjb25zdCB7XG4gICAgdG90YWxzdXBwbHksXG4gICAgc2hhcmVwcmljZSxcbiAgICBuYXZjYWxjdWxhdGVkLFxuICAgIHZhdWx0dXNkYyxcbiAgICBsb25nc2l6ZSxcbiAgICBsb25nY29sbGF0ZXJhbCxcbiAgICBsb25nZGVsdGEsXG4gICAgbG9uZ2xldmVyYWdlLFxuICAgIGxvbmdhdmdwcmljZSxcbiAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgc2hvcnRzaXplLFxuICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICBzaG9ydGF2Z3ByaWNlLFxuICAgIHNob3J0ZGVsdGEsXG4gICAgc2hvcnRsZXZlcmFnZSxcbiAgICB1cGRhdGVEYXRhLFxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuICBjb25zdCBiZ0NhcmQgPSB1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlXCIsIFwiZ3JheS42MDBcIik7XG4gIGNvbnN0IGNvbG9ydGV4dCA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzU5NEI3RVwiLCBcIndoaXRlXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IHc9XCIzMyVcIiBtbD1cIjFyZW1cIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEhlYWRpbmcgY29sb3I9e2NvbG9ydGV4dH0+UmVhZGVyPC9IZWFkaW5nPlxuICAgICAgICA8RmxleFxuICAgICAgICAgIGJveFNoYWRvdz17XCIwcHggMHB4IDEwcHhcIn1cbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgICAgIHA9XCIxMHB4XCJcbiAgICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICAgIGJnPXtiZ0NhcmR9XG4gICAgICAgICAgY29sb3I9e2NvbG9ydGV4dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9e1wiYm9sZFwifSBmb250U2l6ZT17XCIyeGxcIn0+XG4gICAgICAgICAgICBWYXVsdFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8RmxleCBtdD1cIjFyZW1cIiBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifT5cbiAgICAgICAgICAgIDxUZXh0PlBMUCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+U2hhcmUgcHJpY2UgOiB7c2hhcmVwcmljZX08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD5OQVYgOiB7bmF2Y2FsY3VsYXRlZH08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD5WQVVMVCBVU0RDIDoge3ZhdWx0dXNkY308L1RleHQ+XG5cbiAgICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCIgYmc9XCJyZWRcIj5cbiAgICAgICAgICAgICAgPEJveCBtYXhIZWlnaHQ9e1wiMTAwcHhcIn0gYm94U2l6ZT1cIjEyMHB4XCI+XG4gICAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicmF3XCIgdz1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXtcImJvbGRcIn0gZm9udFNpemU9e1wiMnhsXCJ9PlxuICAgICAgICAgICAgICAgICAgUG9zaXRpb25zIG9uXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgbWw9XCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4vR01YbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgICAgICAgICAgLz48L0ZsZXg+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICA8RmxleCBtYj1cIjFyZW1cIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgPEZsZXggdz1cIjUwJVwiIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGZvbnRXZWlnaHQ9e1wiYm9sZFwifT5MT05HPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PlNpemUgOiB7bG9uZ3NpemV9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkNvbGxhdGVyYWwgOiB7bG9uZ2NvbGxhdGVyYWx9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkRlbHRhIDoge2xvbmdkZWx0YX08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXggbWI9XCI1cHhcIj5MZXZlcmFnZSA6IHtsb25nbGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgdz1cIjNweFwiXG4gICAgICAgICAgICAgICAgaD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGJnPVwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyNCwgMjI1LCAyMjYsIDApIDAlLCAjRTBFMUUyIDQ5LjUyJSwgcmdiYSgyMjQsIDIyNSwgMjI2LCAwKSAxMDAlKVwiXG4gICAgICAgICAgICAgICAgbXI9XCI1cHhcIlxuICAgICAgICAgICAgICA+PC9GbGV4PlxuICAgICAgICAgICAgICA8RmxleCB3PVwiNTAlXCIgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn0+XG4gICAgICAgICAgICAgICAgPEZsZXggZm9udFdlaWdodD17XCJib2xkXCJ9PlNIT1JUPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PlNpemUgOiB7c2hvcnRzaXplfTwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5Db2xsYXRlcmFsIDoge3Nob3J0Y29sbGF0ZXJhbH08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXg+RGVsdGEgOiB7c2hvcnRkZWx0YX08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXg+TGV2ZXJhZ2UgOiB7c2hvcnRsZXZlcmFnZX08L0ZsZXg+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgICAgICAgIDxGbGV4IG10PVwiMXJlbVwiPldhaXRpbmcgSW5jcmVhc2UgcG9zIDoge2luY3JlYXNlUG9zaXRpb259PC9GbGV4PlxuICAgICAgICAgICAgPEZsZXg+V2FpdGluZyBEZWNyZWFzZSBwb3MgOiB7ZGVjcmVhc2VQb3NpdGlvbn08L0ZsZXg+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiQm94IiwiSW5wdXRHcm91cCIsIklucHV0TGVmdEFkZG9uIiwiSWNvbiIsIlJhZGlvR3JvdXAiLCJSYWRpbyIsIlN0YWNrIiwiVGV4dCIsIkhlYWRpbmciLCJMaXN0IiwiTGlzdEl0ZW0iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZUNvbG9yTW9kZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VwYXJhdG9yIiwiQUJJUyIsIkFERFJFU1MiLCJldGhlcnMiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiQWRtaW5yZWFkZXIiLCJleHBvIiwic2V0RXhwbyIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJ1cGRhdGVEYXRhIiwiYmdDYXJkIiwiY29sb3J0ZXh0IiwidyIsIm1sIiwiZGlyZWN0aW9uIiwiY29sb3IiLCJib3hTaGFkb3ciLCJmbGV4RGlyZWN0aW9uIiwicCIsIm10IiwiYm9yZGVyUmFkaXVzIiwiYmciLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJtYXhIZWlnaHQiLCJib3hTaXplIiwic3JjIiwiYWx0IiwibWIiLCJoIiwibXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/admin/Adminreader.jsx\n"));

/***/ })

});