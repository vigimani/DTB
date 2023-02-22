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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Adminreader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_others_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/others/Separator */ \"./components/others/Separator.jsx\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Adminreader(param) {\n    let { expo , setExpo  } = param;\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , updateData  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider)();\n    const bgCard = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"white\", \"gray.600\");\n    const colortext = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#594B7E\", \"white\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            w: \"33%\",\n            ml: \"1rem\",\n            direction: \"column\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                    color: colortext,\n                    children: \"Reader\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    boxShadow: \"0px 0px 10px\",\n                    flexDirection: \"column\",\n                    p: \"10px\",\n                    mt: \"1rem\",\n                    borderRadius: \"10px\",\n                    bg: bgCard,\n                    color: colortext,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                        mt: \"1rem\",\n                        flexDirection: \"column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"PLP supply : \",\n                                    totalsupply\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"Share price : \",\n                                    shareprice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"NAV : \",\n                                    navcalculated\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"VAULT USDC : \",\n                                    vaultusdc\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                boxSize: \"50px\",\n                                objectFit: \"cover\",\n                                src: \"./logoFun.png\",\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                mb: \"1rem\",\n                                mt: \"1rem\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                        w: \"50%\",\n                                        flexDirection: \"column\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                fontWeight: \"bold\",\n                                                children: \"LONG\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Size : \",\n                                                    longsize\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Collateral : \",\n                                                    longcollateral\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Delta : \",\n                                                    longdelta\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                mb: \"5px\",\n                                                children: [\n                                                    \"Leverage : \",\n                                                    longleverage\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                        w: \"3px\",\n                                        h: \"100%\",\n                                        bg: \"linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)\",\n                                        mr: \"5px\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                        w: \"50%\",\n                                        flexDirection: \"column\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                fontWeight: \"bold\",\n                                                children: \"SHORT\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Size : \",\n                                                    shortsize\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Collateral : \",\n                                                    shortcollateral\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Delta : \",\n                                                    shortdelta\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Leverage : \",\n                                                    shortleverage\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_others_Separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {}, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                mt: \"1rem\",\n                                children: [\n                                    \"Waiting Increase pos : \",\n                                    increasePosition\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                children: [\n                                    \"Waiting Decrease pos : \",\n                                    decreasePosition\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Adminreader, \"REJdyjxN+sPQv+0WkwSOOMTdvnA=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = Adminreader;\nvar _c;\n$RefreshReg$(_c, \"Adminreader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUM7b0NBQXdCa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUMsQ0FBQztHQTFFdUJiOztRQW1CbEJELHlFQUFtQkE7UUFDUlIsK0RBQWlCQTtRQUNkQSwrREFBaUJBOzs7S0FyQmJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5yZWFkZXIuanN4PzAxYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIElucHV0LFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dExlZnRBZGRvbixcbiAgSWNvbixcbiAgUmFkaW9Hcm91cCxcbiAgUmFkaW8sXG4gIFN0YWNrLFxuICBUZXh0LFxuICBIZWFkaW5nLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZUNvbG9yTW9kZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvb3RoZXJzL1NlcGFyYXRvclwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5cbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbnJlYWRlcih7ZXhwbywgc2V0RXhwb30pIHtcbiAgY29uc3Qge1xuICAgIHRvdGFsc3VwcGx5LFxuICAgIHNoYXJlcHJpY2UsXG4gICAgbmF2Y2FsY3VsYXRlZCxcbiAgICB2YXVsdHVzZGMsXG4gICAgbG9uZ3NpemUsXG4gICAgbG9uZ2NvbGxhdGVyYWwsXG4gICAgbG9uZ2RlbHRhLFxuICAgIGxvbmdsZXZlcmFnZSxcbiAgICBsb25nYXZncHJpY2UsXG4gICAgaW5jcmVhc2VQb3NpdGlvbixcbiAgICBkZWNyZWFzZVBvc2l0aW9uLFxuICAgIHNob3J0c2l6ZSxcbiAgICBzaG9ydGNvbGxhdGVyYWwsXG4gICAgc2hvcnRhdmdwcmljZSxcbiAgICBzaG9ydGRlbHRhLFxuICAgIHNob3J0bGV2ZXJhZ2UsXG4gICAgdXBkYXRlRGF0YVxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuICBjb25zdCBiZ0NhcmQgPSB1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlXCIsIFwiZ3JheS42MDBcIik7XG4gIGNvbnN0IGNvbG9ydGV4dCA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzU5NEI3RVwiLCBcIndoaXRlXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IHc9XCIzMyVcIiBtbD1cIjFyZW1cIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgPEhlYWRpbmcgY29sb3I9e2NvbG9ydGV4dH0+UmVhZGVyPC9IZWFkaW5nPlxuICAgICAgICA8RmxleFxuICAgICAgICAgIGJveFNoYWRvdz17XCIwcHggMHB4IDEwcHhcIn1cbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgICAgIHA9XCIxMHB4XCJcbiAgICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICAgIGJnPXtiZ0NhcmR9XG4gICAgICAgICAgY29sb3I9e2NvbG9ydGV4dH1cbiAgICAgICAgPlxuICAgICAgICAgIDxGbGV4IG10PVwiMXJlbVwiIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9PlxuXG4gICAgICAgICAgICA8VGV4dD5QTFAgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0PlNoYXJlIHByaWNlIDoge3NoYXJlcHJpY2V9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+TkFWIDoge25hdmNhbGN1bGF0ZWR9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+VkFVTFQgVVNEQyA6IHt2YXVsdHVzZGN9PC9UZXh0PlxuICAgICAgICAgICAgPEltYWdlIGJveFNpemU9XCI1MHB4XCIgb2JqZWN0Rml0PVwiY292ZXJcIiBzcmM9Jy4vbG9nb0Z1bi5wbmcnIGFsdD0nTG9nbycgLz5cblxuICAgICAgICAgICAgPEZsZXggbWI9XCIxcmVtXCIgbXQ9XCIxcmVtXCI+XG4gICAgICAgICAgICAgIDxGbGV4IHc9XCI1MCVcIiBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifT5cbiAgICAgICAgICAgICAgICA8RmxleCBmb250V2VpZ2h0PXtcImJvbGRcIn0+TE9ORzwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5TaXplIDoge2xvbmdzaXplfTwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5Db2xsYXRlcmFsIDoge2xvbmdjb2xsYXRlcmFsfTwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5EZWx0YSA6IHtsb25nZGVsdGF9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4IG1iPVwiNXB4XCI+TGV2ZXJhZ2UgOiB7bG9uZ2xldmVyYWdlfTwvRmxleD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIHc9XCIzcHhcIlxuICAgICAgICAgICAgICAgIGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBiZz1cImxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjQsIDIyNSwgMjI2LCAwKSAwJSwgI0UwRTFFMiA0OS41MiUsIHJnYmEoMjI0LCAyMjUsIDIyNiwgMCkgMTAwJSlcIlxuICAgICAgICAgICAgICAgIG1yPVwiNXB4XCJcbiAgICAgICAgICAgICAgPjwvRmxleD5cbiAgICAgICAgICAgICAgPEZsZXggdz1cIjUwJVwiIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGZvbnRXZWlnaHQ9e1wiYm9sZFwifT5TSE9SVDwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5TaXplIDoge3Nob3J0c2l6ZX08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXg+Q29sbGF0ZXJhbCA6IHtzaG9ydGNvbGxhdGVyYWx9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkRlbHRhIDoge3Nob3J0ZGVsdGF9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkxldmVyYWdlIDoge3Nob3J0bGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICA8RmxleCBtdD1cIjFyZW1cIj5XYWl0aW5nIEluY3JlYXNlIHBvcyA6IHtpbmNyZWFzZVBvc2l0aW9ufTwvRmxleD5cbiAgICAgICAgICAgIDxGbGV4PldhaXRpbmcgRGVjcmVhc2UgcG9zIDoge2RlY3JlYXNlUG9zaXRpb259PC9GbGV4PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIklucHV0IiwiSW5wdXRHcm91cCIsIklucHV0TGVmdEFkZG9uIiwiSWNvbiIsIlJhZGlvR3JvdXAiLCJSYWRpbyIsIlN0YWNrIiwiVGV4dCIsIkhlYWRpbmciLCJMaXN0IiwiTGlzdEl0ZW0iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZUNvbG9yTW9kZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VwYXJhdG9yIiwiQUJJUyIsIkFERFJFU1MiLCJldGhlcnMiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiQWRtaW5yZWFkZXIiLCJleHBvIiwic2V0RXhwbyIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJ1cGRhdGVEYXRhIiwiYmdDYXJkIiwiY29sb3J0ZXh0IiwidyIsIm1sIiwiZGlyZWN0aW9uIiwiY29sb3IiLCJib3hTaGFkb3ciLCJmbGV4RGlyZWN0aW9uIiwicCIsIm10IiwiYm9yZGVyUmFkaXVzIiwiYmciLCJib3hTaXplIiwib2JqZWN0Rml0Iiwic3JjIiwiYWx0IiwibWIiLCJmb250V2VpZ2h0IiwiaCIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/admin/Adminreader.jsx\n"));

/***/ })

});