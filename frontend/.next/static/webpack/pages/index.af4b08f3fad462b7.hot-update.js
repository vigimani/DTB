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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/header/Header */ \"./components/header/Header.jsx\");\n/* harmony import */ var _components_user_Userlayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/user/Userlayout */ \"./components/user/Userlayout.jsx\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/Footer */ \"./components/footer/Footer.jsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { isOwner  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"PLP\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Decentralized Trading Bot\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                minHeight: \"100vh\",\n                w: \"100%\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                    w: \"100%\",\n                    backgroundImage: \"bg_clair.png\",\n                    backgroundSize: \"100%\",\n                    justifyContent: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                        w: \"1280px\",\n                        direction: \"column\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_user_Userlayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                                h: \"80vh\",\n                                w: \"100%\",\n                                justifyContent: \"center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                                    h: \"50px\",\n                                    mt: \"2rem\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Alert, {\n                                        status: \"warning\",\n                                        w: \"auto\",\n                                        borderRadius: \"10px\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.AlertIcon, {}, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, this),\n                                            \"Connect to Metamask to use the Dapp\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Xi+LyF/GlMtzd5S0NDwpRB2sb/g=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider,\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFVSDtBQUNPO0FBQytCO0FBQ2hCO0FBQ1M7QUFDcEI7QUFDWTtBQUNzQjtBQUN4RCxTQUFTbUIsT0FBTzs7SUFDN0IsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR1YsNkVBQW1CQTtJQUN2QyxNQUFNLEVBQUVXLFFBQU8sRUFBRUMsWUFBVyxFQUFFLEdBQUdQLGlEQUFVQTtJQUMzQyxxQkFDRTs7MEJBQ0UsOERBQUNmLGtEQUFJQTs7a0NBQ0gsOERBQUN1QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDM0Isa0RBQUlBO2dCQUFDNEIsV0FBVTtnQkFBUUMsR0FBRTswQkFDeEIsNEVBQUM3QixrREFBSUE7b0JBQ0g2QixHQUFFO29CQUNGQyxpQkFBZ0I7b0JBQ2hCQyxnQkFBZTtvQkFDZkMsZ0JBQWdCOzhCQUVoQiw0RUFBQ2hDLGtEQUFJQTt3QkFBQzZCLEdBQUU7d0JBQVNJLFdBQVU7OzBDQUN6Qiw4REFBQ3hCLGlFQUFNQTs7Ozs7NEJBRU5XLDRCQUNDOzBDQUNFLDRFQUFDVixtRUFBVUE7Ozs7OzhEQUdiLDhEQUFDVixrREFBSUE7Z0NBQUNrQyxHQUFFO2dDQUFPTCxHQUFFO2dDQUFPRyxnQkFBZ0I7MENBQ3RDLDRFQUFDaEMsa0RBQUlBO29DQUFDa0MsR0FBRTtvQ0FBT0MsSUFBRzs4Q0FDbEIsNEVBQUNqQyxtREFBS0E7d0NBQUNrQyxRQUFPO3dDQUFVUCxHQUFFO3dDQUFPUSxjQUFhOzswREFDNUMsOERBQUNsQyx1REFBU0E7Ozs7OzRDQUFHOzs7Ozs7Ozs7Ozs7Ozs7O29DQUtsQjswQ0FDRCw4REFBQ1MsaUVBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQixDQUFDO0dBMUN1Qks7O1FBQ0ZULHlFQUFtQkE7UUFDTkssNkNBQVVBOzs7S0FGckJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHtcbiAgVGV4dCxcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgdXNlQnJlYWtwb2ludFZhbHVlLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgSW1hZ2UsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IFVzZXJsYXlvdXQgZnJvbSBcIi4vLi4vY29tcG9uZW50cy91c2VyL1VzZXJsYXlvdXRcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXIvRm9vdGVyXCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VCYWxhbmNlLCB1c2VQcm92aWRlciwgdXNlU2lnbmVyIH0gZnJvbSBcIndhZ21pXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGlzT3duZXIgfSA9IHVzZUNvbnRyYWN0UHJvdmlkZXIoKTtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBMUDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEZWNlbnRyYWxpemVkIFRyYWRpbmcgQm90XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8RmxleCBtaW5IZWlnaHQ9XCIxMDB2aFwiIHc9XCIxMDAlXCI+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZT1cImJnX2NsYWlyLnBuZ1wiXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU9XCIxMDAlXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxGbGV4IHc9XCIxMjgwcHhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxVc2VybGF5b3V0IC8+IFxuICAgICAgICAgICAgICA8Lz4gXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8RmxleCBoPVwiODB2aFwiIHc9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxGbGV4IGg9XCI1MHB4XCIgbXQ9XCIycmVtXCI+XG4gICAgICAgICAgICAgICAgPEFsZXJ0IHN0YXR1cz1cIndhcm5pbmdcIiB3PVwiYXV0b1wiIGJvcmRlclJhZGl1cz1cIjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgICAgICAgIENvbm5lY3QgdG8gTWV0YW1hc2sgdG8gdXNlIHRoZSBEYXBwXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgICAgPC9GbGV4PiBcbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKX0gXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIlRleHQiLCJGbGV4IiwiSGVhZGluZyIsIkFsZXJ0IiwiQWxlcnRJY29uIiwidXNlQnJlYWtwb2ludFZhbHVlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlQ29udHJhY3RQcm92aWRlciIsIkhlYWRlciIsIlVzZXJsYXlvdXQiLCJNYWluIiwiRm9vdGVyIiwidXNlQWNjb3VudCIsInVzZUJhbGFuY2UiLCJ1c2VQcm92aWRlciIsInVzZVNpZ25lciIsIkhvbWUiLCJpc093bmVyIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1pbkhlaWdodCIsInciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImp1c3RpZnlDb250ZW50IiwiZGlyZWN0aW9uIiwiaCIsIm10Iiwic3RhdHVzIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});