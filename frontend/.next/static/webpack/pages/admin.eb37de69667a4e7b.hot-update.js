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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Adminreader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_others_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/others/Separator */ \"./components/others/Separator.jsx\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Adminreader(param) {\n    let { expo , setExpo  } = param;\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , updateData  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider)();\n    const bgCard = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"white\", \"gray.600\");\n    const colortext = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#594B7E\", \"white\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            w: \"33%\",\n            ml: \"1rem\",\n            direction: \"column\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                    color: colortext,\n                    children: \"Reader\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    boxShadow: \"0px 0px 10px\",\n                    flexDirection: \"column\",\n                    p: \"10px\",\n                    mt: \"1rem\",\n                    borderRadius: \"10px\",\n                    bg: bgCard,\n                    color: colortext,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                        mt: \"1rem\",\n                        flexDirection: \"column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"PLP supply : \",\n                                    totalsupply\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"Share price : \",\n                                    shareprice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"NAV : \",\n                                    navcalculated\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"VAULT USDC : \",\n                                    vaultusdc\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                boxSize: \"50px\",\n                                objectFit: \"cover\",\n                                src: \"./logoFun.png\",\n                                alt: \"Logo\"\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                mb: \"1rem\",\n                                mt: \"1rem\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                        w: \"50%\",\n                                        flexDirection: \"column\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                fontWeight: \"bold\",\n                                                children: \"LONG\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Size : \",\n                                                    longsize\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Collateral : \",\n                                                    longcollateral\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Delta : \",\n                                                    longdelta\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                mb: \"5px\",\n                                                children: [\n                                                    \"Leverage : \",\n                                                    longleverage\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                        w: \"3px\",\n                                        h: \"100%\",\n                                        bg: \"linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)\",\n                                        mr: \"5px\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                        w: \"50%\",\n                                        flexDirection: \"column\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                fontWeight: \"bold\",\n                                                children: \"SHORT\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Size : \",\n                                                    shortsize\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Collateral : \",\n                                                    shortcollateral\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Delta : \",\n                                                    shortdelta\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                                children: [\n                                                    \"Leverage : \",\n                                                    shortleverage\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_others_Separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {}, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                mt: \"1rem\",\n                                children: [\n                                    \"Waiting Increase pos : \",\n                                    increasePosition\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                children: [\n                                    \"Waiting Decrease pos : \",\n                                    decreasePosition\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/admin/Adminreader.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Adminreader, \"REJdyjxN+sPQv+0WkwSOOMTdvnA=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_4__.useContractProvider,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = Adminreader;\nvar _c;\n$RefreshReg$(_c, \"Adminreader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QmtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDLENBQUM7R0ExRXVCYjs7UUFtQmxCRCx5RUFBbUJBO1FBQ1JSLCtEQUFpQkE7UUFDZEEsK0RBQWlCQTs7O0tBckJiUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FkbWluL0FkbWlucmVhZGVyLmpzeD8wMWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmxleCxcbiAgSW5wdXQsXG4gIElucHV0R3JvdXAsXG4gIElucHV0TGVmdEFkZG9uLFxuICBJY29uLFxuICBSYWRpb0dyb3VwLFxuICBSYWRpbyxcbiAgU3RhY2ssXG4gIFRleHQsXG4gIEhlYWRpbmcsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgdXNlQ29sb3JNb2RlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50cy9vdGhlcnMvU2VwYXJhdG9yXCI7XG5pbXBvcnQgeyBBQklTLCBBRERSRVNTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0Bjb25maWdcIjtcblxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWlucmVhZGVyKHtleHBvLCBzZXRFeHBvfSkge1xuICBjb25zdCB7XG4gICAgdG90YWxzdXBwbHksXG4gICAgc2hhcmVwcmljZSxcbiAgICBuYXZjYWxjdWxhdGVkLFxuICAgIHZhdWx0dXNkYyxcbiAgICBsb25nc2l6ZSxcbiAgICBsb25nY29sbGF0ZXJhbCxcbiAgICBsb25nZGVsdGEsXG4gICAgbG9uZ2xldmVyYWdlLFxuICAgIGxvbmdhdmdwcmljZSxcbiAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgc2hvcnRzaXplLFxuICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICBzaG9ydGF2Z3ByaWNlLFxuICAgIHNob3J0ZGVsdGEsXG4gICAgc2hvcnRsZXZlcmFnZSxcbiAgICB1cGRhdGVEYXRhXG4gIH0gPSB1c2VDb250cmFjdFByb3ZpZGVyKCk7XG4gIGNvbnN0IGJnQ2FyZCA9IHVzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjYwMFwiKTtcbiAgY29uc3QgY29sb3J0ZXh0ID0gdXNlQ29sb3JNb2RlVmFsdWUoXCIjNTk0QjdFXCIsIFwid2hpdGVcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggdz1cIjMzJVwiIG1sPVwiMXJlbVwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8SGVhZGluZyBjb2xvcj17Y29sb3J0ZXh0fT5SZWFkZXI8L0hlYWRpbmc+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgYm94U2hhZG93PXtcIjBweCAwcHggMTBweFwifVxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICAgICAgcD1cIjEwcHhcIlxuICAgICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBweFwiXG4gICAgICAgICAgYmc9e2JnQ2FyZH1cbiAgICAgICAgICBjb2xvcj17Y29sb3J0ZXh0fVxuICAgICAgICA+XG4gICAgICAgICAgPEZsZXggbXQ9XCIxcmVtXCIgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn0+XG5cbiAgICAgICAgICAgIDxUZXh0PlBMUCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQ+U2hhcmUgcHJpY2UgOiB7c2hhcmVwcmljZX08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD5OQVYgOiB7bmF2Y2FsY3VsYXRlZH08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dD5WQVVMVCBVU0RDIDoge3ZhdWx0dXNkY308L1RleHQ+XG4gICAgICAgICAgICA8SW1hZ2UgYm94U2l6ZT1cIjUwcHhcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIHNyYz0nLi9sb2dvRnVuLnBuZycgYWx0PSdMb2dvJyAvPlxuXG4gICAgICAgICAgICA8RmxleCBtYj1cIjFyZW1cIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgPEZsZXggdz1cIjUwJVwiIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGZvbnRXZWlnaHQ9e1wiYm9sZFwifT5MT05HPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PlNpemUgOiB7bG9uZ3NpemV9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkNvbGxhdGVyYWwgOiB7bG9uZ2NvbGxhdGVyYWx9PC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PkRlbHRhIDoge2xvbmdkZWx0YX08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXggbWI9XCI1cHhcIj5MZXZlcmFnZSA6IHtsb25nbGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgdz1cIjNweFwiXG4gICAgICAgICAgICAgICAgaD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGJnPVwibGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyNCwgMjI1LCAyMjYsIDApIDAlLCAjRTBFMUUyIDQ5LjUyJSwgcmdiYSgyMjQsIDIyNSwgMjI2LCAwKSAxMDAlKVwiXG4gICAgICAgICAgICAgICAgbXI9XCI1cHhcIlxuICAgICAgICAgICAgICA+PC9GbGV4PlxuICAgICAgICAgICAgICA8RmxleCB3PVwiNTAlXCIgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn0+XG4gICAgICAgICAgICAgICAgPEZsZXggZm9udFdlaWdodD17XCJib2xkXCJ9PlNIT1JUPC9GbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4PlNpemUgOiB7c2hvcnRzaXplfTwvRmxleD5cbiAgICAgICAgICAgICAgICA8RmxleD5Db2xsYXRlcmFsIDoge3Nob3J0Y29sbGF0ZXJhbH08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXg+RGVsdGEgOiB7c2hvcnRkZWx0YX08L0ZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXg+TGV2ZXJhZ2UgOiB7c2hvcnRsZXZlcmFnZX08L0ZsZXg+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cbiAgICAgICAgICAgIDxGbGV4IG10PVwiMXJlbVwiPldhaXRpbmcgSW5jcmVhc2UgcG9zIDoge2luY3JlYXNlUG9zaXRpb259PC9GbGV4PlxuICAgICAgICAgICAgPEZsZXg+V2FpdGluZyBEZWNyZWFzZSBwb3MgOiB7ZGVjcmVhc2VQb3NpdGlvbn08L0ZsZXg+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiRmxleCIsIklucHV0IiwiSW5wdXRHcm91cCIsIklucHV0TGVmdEFkZG9uIiwiSWNvbiIsIlJhZGlvR3JvdXAiLCJSYWRpbyIsIlN0YWNrIiwiVGV4dCIsIkhlYWRpbmciLCJMaXN0IiwiTGlzdEl0ZW0iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZUNvbG9yTW9kZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VwYXJhdG9yIiwiQUJJUyIsIkFERFJFU1MiLCJldGhlcnMiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiQWRtaW5yZWFkZXIiLCJleHBvIiwic2V0RXhwbyIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJ1cGRhdGVEYXRhIiwiYmdDYXJkIiwiY29sb3J0ZXh0IiwidyIsIm1sIiwiZGlyZWN0aW9uIiwiY29sb3IiLCJib3hTaGFkb3ciLCJmbGV4RGlyZWN0aW9uIiwicCIsIm10IiwiYm9yZGVyUmFkaXVzIiwiYmciLCJJbWFnZSIsImJveFNpemUiLCJvYmplY3RGaXQiLCJzcmMiLCJhbHQiLCJtYiIsImZvbnRXZWlnaHQiLCJoIiwibXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/admin/Adminreader.jsx\n"));

/***/ })

});