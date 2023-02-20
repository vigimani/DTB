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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Operation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Deposit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deposit */ \"./components/user/Deposit.jsx\");\n/* harmony import */ var _Withdraw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Withdraw */ \"./components/user/Withdraw.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Operation() {\n    _s();\n    const [tabIndex, setTabIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const bgCard = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"white\", \"gray.600\");\n    const colortext = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"#594B7E\", \"white\");\n    const colorfond2 = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"\", \"gray.400\");\n    const colordepwith = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"#9face6\", \"gray.600\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            direction: \"column\",\n            ml: \"1rem\",\n            borderRadius: \"30px\",\n            w: \"30%\",\n            display: \"flex\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                boxShadow: \"md\",\n                p: \"25px\",\n                borderRadius: \"30px\",\n                bg: bgCard,\n                color: colortext,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    w: \"100%\",\n                    direction: \"column\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                            w: \"100%\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                color: colortext,\n                                fontFamily: \"Kanit\",\n                                fontSize: \"lg\",\n                                fontWeight: \"bold\",\n                                mb: \"6px\",\n                                children: \"Operation\"\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                            w: \"100%\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tabs, {\n                                w: \"100%\",\n                                onChange: (index)=>setTabIndex(index),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                                        borderRadius: \"10px\",\n                                        p: \"5px\",\n                                        bg: \"#F4F6FE\",\n                                        w: \"100%\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabList, {\n                                            w: \"100%\",\n                                            justifyContent: \"space-evenly\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {\n                                                    w: \"100%\",\n                                                    borderRadius: \"10px\",\n                                                    bg: tabIndex == 0 ? colordepwith : \"#F4F6FE\",\n                                                    color: tabIndex == 0 ? \"white\" : \"gray.600\",\n                                                    fontWeight: \"extrabold\",\n                                                    fontFamily: \"Kanit\",\n                                                    children: \"Deposit\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tab, {\n                                                    w: \"100%\",\n                                                    borderRadius: \"10px\",\n                                                    bg: tabIndex == 1 ? colordepwith : \"#F4F6FE\",\n                                                    color: tabIndex == 1 ? \"white\" : \"gray.600\",\n                                                    fontWeight: \"extrabold\",\n                                                    fontFamily: \"Kanit\",\n                                                    children: \"Withdraw\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabPanels, {\n                                        w: \"100%\",\n                                        mt: \"1rem\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {\n                                                w: \"100%\",\n                                                p: \"0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Deposit__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    bgCard: bgCard,\n                                                    colortext: colortext,\n                                                    colorfond2: colorfond2\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {\n                                                w: \"100%\",\n                                                p: \"0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Withdraw__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    bgCard: bgCard,\n                                                    colortext: colortext,\n                                                    colorfond2: colorfond2\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Operation.jsx\",\n            lineNumber: 23,\n            columnNumber: 11\n        }, this)\n    }, void 0, false);\n}\n_s(Operation, \"t0JFXzU9UI3P1tkIwjHXbLVLbtY=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c = Operation;\nvar _c;\n$RefreshReg$(_c, \"Operation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvT3BlcmF0aW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQVUwQjtBQUNrQjtBQUNaO0FBQ0U7QUFDbkIsU0FBU2EsWUFBWTs7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1PLFNBQVNSLG1FQUFpQkEsQ0FBQyxTQUFTO0lBQzFDLE1BQU1TLFlBQVlULG1FQUFpQkEsQ0FBQyxXQUFXO0lBQy9DLE1BQU1VLGFBQWFWLG1FQUFpQkEsQ0FBQyxJQUFJO0lBQ3pDLE1BQU1XLGVBQWVYLG1FQUFpQkEsQ0FBQyxXQUFVO0lBQ2pELHFCQUNFO2tCQUNNLDRFQUFDUixrREFBSUE7WUFDSG9CLFdBQVU7WUFDVkMsSUFBRztZQUNIQyxjQUFjO1lBQ2RDLEdBQUU7WUFDRkMsU0FBUTtzQkFHUiw0RUFBQ3ZCLGlEQUFHQTtnQkFDRndCLFdBQVc7Z0JBQ1hDLEdBQUU7Z0JBQ0ZKLGNBQWM7Z0JBQ2RLLElBQUlYO2dCQUNKWSxPQUFPWDswQkFFWCw0RUFBQ2pCLGtEQUFJQTtvQkFBQ3VCLEdBQUU7b0JBQU9ILFdBQVU7O3NDQUN2Qiw4REFBQ3BCLGtEQUFJQTs0QkFBQ3VCLEdBQUU7c0NBQ1IsNEVBQUNyQixrREFBSUE7Z0NBQUMwQixPQUFPWDtnQ0FBV1ksWUFBWTtnQ0FBU0MsVUFBUztnQ0FBS0MsWUFBVztnQ0FBT0MsSUFBRzswQ0FBTTs7Ozs7Ozs7Ozs7c0NBSXhGLDhEQUFDaEMsa0RBQUlBOzRCQUFDdUIsR0FBRTtzQ0FDTiw0RUFBQ25CLGtEQUFJQTtnQ0FBQ21CLEdBQUU7Z0NBQU9VLFVBQVUsQ0FBQ0MsUUFBVW5CLFlBQVltQjs7a0RBQzlDLDhEQUFDbEMsa0RBQUlBO3dDQUFDc0IsY0FBYTt3Q0FBT0ksR0FBRTt3Q0FBTUMsSUFBRzt3Q0FBVUosR0FBRTtrREFDL0MsNEVBQUNoQixxREFBT0E7NENBQUNnQixHQUFFOzRDQUFPWSxnQkFBZ0I7OzhEQUNoQyw4REFBQ2hDLGlEQUFHQTtvREFDRm9CLEdBQUU7b0RBQ0ZELGNBQWE7b0RBQ2JLLElBQUliLFlBQVksSUFBSUssZUFBZSxTQUFTO29EQUM1Q1MsT0FBT2QsWUFBWSxJQUFJLFVBQVUsVUFBVTtvREFDM0NpQixZQUFXO29EQUNYRixZQUFZOzhEQUNiOzs7Ozs7OERBR0QsOERBQUMxQixpREFBR0E7b0RBQ0ZvQixHQUFFO29EQUNGRCxjQUFhO29EQUNiSyxJQUFJYixZQUFZLElBQUlLLGVBQWUsU0FBUztvREFDNUNTLE9BQU9kLFlBQVksSUFBSSxVQUFVLFVBQVU7b0RBQzNDaUIsWUFBVztvREFDWEYsWUFBWTs4REFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBS0wsOERBQUN2Qix1REFBU0E7d0NBQUNpQixHQUFFO3dDQUFPYSxJQUFHOzswREFDckIsOERBQUMvQixzREFBUUE7Z0RBQUNrQixHQUFFO2dEQUFPRyxHQUFFOzBEQUNuQiw0RUFBQ2YsZ0RBQU9BO29EQUFDSyxRQUFVQTtvREFBUUMsV0FBV0E7b0RBQVdDLFlBQVlBOzs7Ozs7Ozs7OzswREFFL0QsOERBQUNiLHNEQUFRQTtnREFBQ2tCLEdBQUU7Z0RBQU9HLEdBQUU7MERBQ25CLDRFQUFDZCxpREFBUUE7b0RBQUNJLFFBQVVBO29EQUFRQyxXQUFXQTtvREFBV0MsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVoRixDQUFDO0dBdEV1Qkw7O1FBRVBMLCtEQUFpQkE7UUFDZEEsK0RBQWlCQTtRQUNoQkEsK0RBQWlCQTtRQUNmQSwrREFBaUJBOzs7S0FMaEJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci9PcGVyYXRpb24uanN4P2U3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRmxleCxcbiAgQm94LFxuICBUZXh0LFxuICBUYWIsXG4gIFRhYnMsXG4gIFRhYlBhbmVsLFxuICBUYWJQYW5lbHMsXG4gIFRhYkxpc3QsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERlcG9zaXQgZnJvbSBcIi4vRGVwb3NpdFwiO1xuaW1wb3J0IFdpdGhkcmF3IGZyb20gXCIuL1dpdGhkcmF3XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcGVyYXRpb24oKSB7XG4gIGNvbnN0IFt0YWJJbmRleCwgc2V0VGFiSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGJnQ2FyZCA9IHVzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjYwMFwiKTtcbiAgY29uc3QgY29sb3J0ZXh0ID0gdXNlQ29sb3JNb2RlVmFsdWUoXCIjNTk0QjdFXCIsIFwid2hpdGVcIik7XG4gIGNvbnN0IGNvbG9yZm9uZDIgPSB1c2VDb2xvck1vZGVWYWx1ZShcIlwiLCBcImdyYXkuNDAwXCIpO1xuICBjb25zdCBjb2xvcmRlcHdpdGggPSB1c2VDb2xvck1vZGVWYWx1ZShcIiM5ZmFjZTZcIixcImdyYXkuNjAwXCIpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIG1sPVwiMXJlbVwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiMzBweFwifVxuICAgICAgICAgICAgdz1cIjMwJVwiXG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG5cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGJveFNoYWRvdz17XCJtZFwifVxuICAgICAgICAgICAgICBwPVwiMjVweFwiXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCIzMHB4XCJ9XG4gICAgICAgICAgICAgIGJnPXtiZ0NhcmR9XG4gICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17Y29sb3J0ZXh0fSBmb250RmFtaWx5PXtcIkthbml0XCJ9IGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG1iPVwiNnB4XCI+XG4gICAgICAgICAgICAgIE9wZXJhdGlvblxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgPFRhYnMgdz1cIjEwMCVcIiBvbkNoYW5nZT17KGluZGV4KSA9PiBzZXRUYWJJbmRleChpbmRleCl9PlxuICAgICAgICAgICAgICA8RmxleCBib3JkZXJSYWRpdXM9XCIxMHB4XCIgcD1cIjVweFwiIGJnPVwiI0Y0RjZGRVwiIHc9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgPFRhYkxpc3Qgdz1cIjEwMCVcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1ldmVubHlcIn0+XG4gICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgIGJnPXt0YWJJbmRleCA9PSAwID8gY29sb3JkZXB3aXRoIDogXCIjRjRGNkZFXCJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0YWJJbmRleCA9PSAwID8gXCJ3aGl0ZVwiIDogXCJncmF5LjYwMFwifVxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT17XCJLYW5pdFwifVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZXBvc2l0XG4gICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgYmc9e3RhYkluZGV4ID09IDEgPyBjb2xvcmRlcHdpdGggOiBcIiNGNEY2RkVcIn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e3RhYkluZGV4ID09IDEgPyBcIndoaXRlXCIgOiBcImdyYXkuNjAwXCJ9XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJleHRyYWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXtcIkthbml0XCJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFdpdGhkcmF3XG4gICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPFRhYlBhbmVscyB3PVwiMTAwJVwiIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB3PVwiMTAwJVwiIHA9XCIwXCI+XG4gICAgICAgICAgICAgICAgICA8RGVwb3NpdCBiZ0NhcmQgPSB7YmdDYXJkfSBjb2xvcnRleHQ9e2NvbG9ydGV4dH0gY29sb3Jmb25kMj17Y29sb3Jmb25kMn0vPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHc9XCIxMDAlXCIgcD1cIjBcIj4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxXaXRoZHJhdyBiZ0NhcmQgPSB7YmdDYXJkfSBjb2xvcnRleHQ9e2NvbG9ydGV4dH0gY29sb3Jmb25kMj17Y29sb3Jmb25kMn0vPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgIDwvVGFiUGFuZWxzPlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZsZXgiLCJCb3giLCJUZXh0IiwiVGFiIiwiVGFicyIsIlRhYlBhbmVsIiwiVGFiUGFuZWxzIiwiVGFiTGlzdCIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEZXBvc2l0IiwiV2l0aGRyYXciLCJPcGVyYXRpb24iLCJ0YWJJbmRleCIsInNldFRhYkluZGV4IiwiYmdDYXJkIiwiY29sb3J0ZXh0IiwiY29sb3Jmb25kMiIsImNvbG9yZGVwd2l0aCIsImRpcmVjdGlvbiIsIm1sIiwiYm9yZGVyUmFkaXVzIiwidyIsImRpc3BsYXkiLCJib3hTaGFkb3ciLCJwIiwiYmciLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYiIsIm9uQ2hhbmdlIiwiaW5kZXgiLCJqdXN0aWZ5Q29udGVudCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user/Operation.jsx\n"));

/***/ })

});