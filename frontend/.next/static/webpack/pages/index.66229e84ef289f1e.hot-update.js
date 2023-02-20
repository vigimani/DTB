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

/***/ "./components/user/Operation.jsx":
/*!***************************************!*\
  !*** ./components/user/Operation.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Operation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Deposit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deposit */ \"./components/user/Deposit.jsx\");\n/* harmony import */ var _Withdraw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Withdraw */ \"./components/user/Withdraw.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Operation() {\n    _s();\n    const [tabIndex, setTabIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const bgCard = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"white\", \"gray.600\");\n    const colortext = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"#594B7E\", \"white\");\n    const colorfond1 = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"#9face6\", \"#594B7E\");\n    const colorfond2 = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"\", \"gray.400\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            direction: \"column\",\n            ml: \"1rem\",\n            borderRadius: \"30px\",\n            w: \"30%\",\n            display: \"flex\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                boxShadow: \"md\",\n                p: \"25px\",\n                bg: \"white\",\n                borderRadius: \"30px\",\n                bg: bgCard,\n                color: colortext,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    w: \"100%\",\n                    direction: \"column\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                            w: \"100%\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                color: colortext,\n                                fontFamily: \"Kanit\",\n                                fontSize: \"lg\",\n                                fontWeight: \"bold\",\n                                mb: \"6px\",\n                                children: \"Operation\"\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                            w: \"100%\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tabs, {\n                                w: \"100%\",\n                                onChange: (index)=>setTabIndex(index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                        borderRadius: \"10px\",\n                                        p: \"5px\",\n                                        bg: colorfond2,\n                                        w: \"100%\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabList, {\n                                            w: \"100%\",\n                                            justifyContent: \"space-evenly\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {\n                                                    w: \"100%\",\n                                                    borderRadius: \"10px\",\n                                                    bg: tabIndex == 0 ? colorfond1 : colorfond2,\n                                                    color: tabIndex == 0 ? \"white\" : \"gray.600\",\n                                                    fontWeight: \"extrabold\",\n                                                    fontFamily: \"Kanit\",\n                                                    children: \"Deposit\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {\n                                                    w: \"100%\",\n                                                    borderRadius: \"10px\",\n                                                    bg: tabIndex == 1 ? colorfond1 : colorfond2,\n                                                    color: tabIndex == 1 ? \"white\" : \"gray.400\",\n                                                    fontWeight: \"extrabold\",\n                                                    fontFamily: \"Kanit\",\n                                                    children: \"Withdraw\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabPanels, {\n                                        w: \"100%\",\n                                        mt: \"1rem\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {\n                                                w: \"100%\",\n                                                p: \"0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Deposit__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {\n                                                w: \"100%\",\n                                                p: \"0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Withdraw__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n            lineNumber: 23,\n            columnNumber: 11\n        }, this)\n    }, void 0, false);\n}\n_s(Operation, \"v4sOqGPJCr8bIDj6KMglqOJBPiU=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c = Operation;\nvar _c;\n$RefreshReg$(_c, \"Operation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvT3BlcmF0aW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQVUwQjtBQUNrQjtBQUNaO0FBQ0U7QUFDbkIsU0FBU2EsWUFBWTs7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1PLFNBQVNSLG1FQUFpQkEsQ0FBQyxTQUFTO0lBQzFDLE1BQU1TLFlBQVlULG1FQUFpQkEsQ0FBQyxXQUFXO0lBQy9DLE1BQU1VLGFBQWFWLG1FQUFpQkEsQ0FBQyxXQUFXO0lBQ2hELE1BQU1XLGFBQWFYLG1FQUFpQkEsQ0FBQyxJQUFJO0lBQ3pDLHFCQUNFO2tCQUNNLDRFQUFDUixrREFBSUE7WUFDSG9CLFdBQVU7WUFDVkMsSUFBRztZQUNIQyxjQUFjO1lBQ2RDLEdBQUU7WUFDRkMsU0FBUTtzQkFHUiw0RUFBQ3ZCLGlEQUFHQTtnQkFDRndCLFdBQVc7Z0JBQ1hDLEdBQUU7Z0JBQ0ZDLElBQUc7Z0JBQ0hMLGNBQWM7Z0JBQ2RLLElBQUlYO2dCQUNKWSxPQUFPWDswQkFFWCw0RUFBQ2pCLGtEQUFJQTtvQkFBQ3VCLEdBQUU7b0JBQU9ILFdBQVU7O3NDQUN2Qiw4REFBQ3BCLGtEQUFJQTs0QkFBQ3VCLEdBQUU7c0NBQ1IsNEVBQUNyQixrREFBSUE7Z0NBQUMwQixPQUFPWDtnQ0FBV1ksWUFBWTtnQ0FBU0MsVUFBUztnQ0FBS0MsWUFBVztnQ0FBT0MsSUFBRzswQ0FBTTs7Ozs7Ozs7Ozs7c0NBSXhGLDhEQUFDaEMsa0RBQUlBOzRCQUFDdUIsR0FBRTtzQ0FDTiw0RUFBQ25CLGtEQUFJQTtnQ0FBQ21CLEdBQUU7Z0NBQU9VLFVBQVUsQ0FBQ0MsUUFBVW5CLFlBQVltQjs7a0RBQzlDLDhEQUFDbEMsa0RBQUlBO3dDQUFDc0IsY0FBYTt3Q0FBT0ksR0FBRTt3Q0FBTUMsSUFBSVI7d0NBQVlJLEdBQUU7a0RBQ2xELDRFQUFDaEIscURBQU9BOzRDQUFDZ0IsR0FBRTs0Q0FBT1ksZ0JBQWdCOzs4REFDaEMsOERBQUNoQyxpREFBR0E7b0RBQ0ZvQixHQUFFO29EQUNGRCxjQUFhO29EQUNiSyxJQUFJYixZQUFZLElBQUlJLGFBQWFDLFVBQVU7b0RBQzNDUyxPQUFPZCxZQUFZLElBQUksVUFBVSxVQUFVO29EQUMzQ2lCLFlBQVc7b0RBQ1hGLFlBQVk7OERBQ2I7Ozs7Ozs4REFHRCw4REFBQzFCLGlEQUFHQTtvREFDRm9CLEdBQUU7b0RBQ0ZELGNBQWE7b0RBQ2JLLElBQUliLFlBQVksSUFBSUksYUFBYUMsVUFBVTtvREFDM0NTLE9BQU9kLFlBQVksSUFBSSxVQUFVLFVBQVU7b0RBQzNDaUIsWUFBVztvREFDWEYsWUFBWTs4REFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBS0wsOERBQUN2Qix1REFBU0E7d0NBQUNpQixHQUFFO3dDQUFPYSxJQUFHOzswREFDckIsOERBQUMvQixzREFBUUE7Z0RBQUNrQixHQUFFO2dEQUFPRyxHQUFFOzBEQUNuQiw0RUFBQ2YsZ0RBQU9BOzs7Ozs7Ozs7OzBEQUVWLDhEQUFDTixzREFBUUE7Z0RBQUNrQixHQUFFO2dEQUFPRyxHQUFFOzBEQUNuQiw0RUFBQ2QsaURBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUzQixDQUFDO0dBdkV1QkM7O1FBRVBMLCtEQUFpQkE7UUFDZEEsK0RBQWlCQTtRQUNoQkEsK0RBQWlCQTtRQUNqQkEsK0RBQWlCQTs7O0tBTGRLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci9PcGVyYXRpb24uanN4P2U3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmxleCxcbiAgQm94LFxuICBUZXh0LFxuICBUYWIsXG4gIFRhYnMsXG4gIFRhYlBhbmVsLFxuICBUYWJQYW5lbHMsXG4gIFRhYkxpc3QsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERlcG9zaXQgZnJvbSBcIi4vRGVwb3NpdFwiO1xuaW1wb3J0IFdpdGhkcmF3IGZyb20gXCIuL1dpdGhkcmF3XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb24oKSB7XG4gIGNvbnN0IFt0YWJJbmRleCwgc2V0VGFiSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGJnQ2FyZCA9IHVzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjYwMFwiKTtcbiAgY29uc3QgY29sb3J0ZXh0ID0gdXNlQ29sb3JNb2RlVmFsdWUoXCIjNTk0QjdFXCIsIFwid2hpdGVcIik7XG4gIGNvbnN0IGNvbG9yZm9uZDEgPSB1c2VDb2xvck1vZGVWYWx1ZShcIiM5ZmFjZTZcIiwgXCIjNTk0QjdFXCIpO1xuICBjb25zdCBjb2xvcmZvbmQyID0gdXNlQ29sb3JNb2RlVmFsdWUoXCJcIiwgXCJncmF5LjQwMFwiKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgbWw9XCIxcmVtXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCIzMHB4XCJ9XG4gICAgICAgICAgICB3PVwiMzAlXCJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcblxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgYm94U2hhZG93PXtcIm1kXCJ9XG4gICAgICAgICAgICAgIHA9XCIyNXB4XCJcbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCIzMHB4XCJ9XG4gICAgICAgICAgICAgIGJnPXtiZ0NhcmR9XG4gICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17Y29sb3J0ZXh0fSBmb250RmFtaWx5PXtcIkthbml0XCJ9IGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG1iPVwiNnB4XCI+XG4gICAgICAgICAgICAgIE9wZXJhdGlvblxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgPFRhYnMgdz1cIjEwMCVcIiBvbkNoYW5nZT17KGluZGV4KSA9PiBzZXRUYWJJbmRleChpbmRleCl9PlxuICAgICAgICAgICAgICA8RmxleCBib3JkZXJSYWRpdXM9XCIxMHB4XCIgcD1cIjVweFwiIGJnPXtjb2xvcmZvbmQyfSB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgIDxUYWJMaXN0IHc9XCIxMDAlXCIganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtZXZlbmx5XCJ9PlxuICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICBiZz17dGFiSW5kZXggPT0gMCA/IGNvbG9yZm9uZDEgOiBjb2xvcmZvbmQyfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGFiSW5kZXggPT0gMCA/IFwid2hpdGVcIiA6IFwiZ3JheS42MDBcIn1cbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImV4dHJhYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiS2FuaXRcIn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgIGJnPXt0YWJJbmRleCA9PSAxID8gY29sb3Jmb25kMSA6IGNvbG9yZm9uZDJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0YWJJbmRleCA9PSAxID8gXCJ3aGl0ZVwiIDogXCJncmF5LjQwMFwifVxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT17XCJLYW5pdFwifVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBXaXRoZHJhd1xuICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDxUYWJQYW5lbHMgdz1cIjEwMCVcIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdz1cIjEwMCVcIiBwPVwiMFwiPlxuICAgICAgICAgICAgICAgICAgPERlcG9zaXQvPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHc9XCIxMDAlXCIgcD1cIjBcIj4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxXaXRoZHJhdy8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPC9UYWJQYW5lbHM+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRmxleCIsIkJveCIsIlRleHQiLCJUYWIiLCJUYWJzIiwiVGFiUGFuZWwiLCJUYWJQYW5lbHMiLCJUYWJMaXN0IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRlcG9zaXQiLCJXaXRoZHJhdyIsIk9wZXJhdGlvbiIsInRhYkluZGV4Iiwic2V0VGFiSW5kZXgiLCJiZ0NhcmQiLCJjb2xvcnRleHQiLCJjb2xvcmZvbmQxIiwiY29sb3Jmb25kMiIsImRpcmVjdGlvbiIsIm1sIiwiYm9yZGVyUmFkaXVzIiwidyIsImRpc3BsYXkiLCJib3hTaGFkb3ciLCJwIiwiYmciLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYiIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJqdXN0aWZ5Q29udGVudCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user/Operation.jsx\n"));

/***/ })

});