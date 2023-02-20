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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let priceformat = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) / 10 ** 30;\n            console.log(priceformat);\n            setPrices(priceformat);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            w: \"18%\",\n            boxShadow: \"md\",\n            p: \"20px\",\n            bg: \"white\",\n            borderRadius: \"20px\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    direction: \"column\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            color: \"gray.400\",\n                            fontFamily: \"Kanit\",\n                            fontSize: \"xs\",\n                            fontWeight: \"bold\",\n                            children: \"Data\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            fontFamily: \"Kanit\",\n                            fontSize: \"xl\",\n                            fontWeight: \"bold\",\n                            children: \"test\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            h: \"30px\",\n                            w: \"30px\",\n                            me: \"12px\",\n                            borderRadius: \"10px\",\n                            bgColor: \"#9FACE6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                                mt: \"5px\",\n                                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaWallet\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            textDecorationThickness: \"3px\",\n                            textDecorationColor: isActive(\"/\") ? \"#9FACE6\" : \"transparent\",\n                            textDecorationLine: \"underline\",\n                            my: \"auto\",\n                            fontFamily: \"Kanit\",\n                            children: \"My investment\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 81,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBb0IwQjtBQUMwQjtBQUNSO0FBQ29CO0FBQ2hDO0FBQ3lCO0FBQ2Y7QUFFM0IsU0FBUzJCLE9BQU87O0lBQzdCLE1BQU0sRUFDSkMsWUFBVyxFQUNYQyxXQUFVLEVBQ1ZDLGNBQWEsRUFDYkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1JDLGVBQWMsRUFDZEMsVUFBUyxFQUNUQyxhQUFZLEVBQ1pDLGFBQVksRUFDWkMsaUJBQWdCLEVBQ2hCQyxpQkFBZ0IsRUFDaEJDLFVBQVMsRUFDVEMsZ0JBQWUsRUFDZkMsY0FBYSxFQUNiQyxXQUFVLEVBQ1ZDLGNBQWEsRUFDYkMsS0FBSSxFQUNMLEdBQUdyQiw2RUFBbUJBO0lBRXZCLE1BQU0sQ0FBQ3NCLFFBQVFDLFVBQVUsR0FBR3pCLCtDQUFRQTtJQUNwQyxNQUFNLENBQUMwQixVQUFVQyxZQUFZLEdBQUczQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDLGVBQWU0QixlQUFlO1FBQzVCLE1BQU1DLE1BQU0sNkJBQ1RDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiLGtDQUFrQztZQUNsQyxJQUFJRSxjQUFjQyxTQUFTSCxHQUFHLENBQUNoQyx1REFBWSxDQUFDLElBQUUsTUFBSTtZQUNsRHFDLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDWlIsVUFBVVE7UUFDWixHQUNDSyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUgsUUFBUUMsR0FBRyxDQUFDRSxJQUN6QkMsT0FBTyxDQUFDLElBQU07WUFDYkMsV0FBV2IsY0FBYztRQUMzQjtJQUNKO0lBRUEzQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDeUIsVUFBVTtZQUNiLElBQUk7Z0JBQ0ZFO2dCQUNBRCxZQUFZLElBQUk7WUFDbEIsRUFBRSxPQUFPWSxHQUFHO2dCQUNWSCxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRyw0RUFBQ3ZELGlEQUFHQTtZQUFDNEQsR0FBRTtZQUFNQyxXQUFXO1lBQU1DLEdBQUU7WUFBT0MsSUFBRztZQUFRQyxjQUFjOzs4QkFDN0QsOERBQUNsRSxrREFBSUE7b0JBQUNtRSxXQUFVOztzQ0FDZCw4REFBQ25FLGtEQUFJQTs0QkFDSG9FLE9BQU07NEJBQ05DLFlBQVk7NEJBQ1pDLFVBQVM7NEJBQ1RDLFlBQVc7c0NBQ1o7Ozs7OztzQ0FHRCw4REFBQ3RFLGtEQUFJQTs0QkFDSG9FLFlBQVk7NEJBQ1pDLFVBQVM7NEJBQ1RDLFlBQVc7c0NBQU87Ozs7Ozs7Ozs7Ozs4QkFFdEIsOERBQUN2RSxrREFBSUE7O3NDQUNHLDhEQUFDRSxpREFBR0E7NEJBQ0ZzRSxHQUFFOzRCQUNGVixHQUFFOzRCQUNGVyxJQUFHOzRCQUNIUCxjQUFhOzRCQUNiUSxTQUFRO3NDQUVSLDRFQUFDekQsa0RBQUlBO2dDQUFDMEQsSUFBRztnQ0FBTUMsSUFBSW5ELG9EQUFRQTs7Ozs7Ozs7Ozs7c0NBRTdCLDhEQUFDeEIsa0RBQUlBOzRCQUFFNEUseUJBQXlCOzRCQUFPQyxxQkFBcUJDLFNBQVMsT0FBTyxZQUFZLGFBQWE7NEJBQUVDLG9CQUFtQjs0QkFBWUMsSUFBRzs0QkFBT1osWUFBWTtzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDdkwsQ0FBQztHQXpIdUIzQzs7UUFtQmxCSix5RUFBbUJBOzs7S0FuQkRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci9EYXRhLmpzeD82ZTM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEltYWdlLFxuICBGbGV4LFxuICBUZXh0LFxuICBCb3gsXG4gIEhTdGFjayxcbiAgU3RhY2ssXG4gIFN3aXRjaCxcbiAgQnV0dG9uLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgdXNlQ29sb3JNb2RlLFxuICBJY29uQnV0dG9uLFxuICBjb2xvck1vZGUsXG4gIFRhYmxlLFxuICBUaGVhZCxcbiAgVHIsXG4gIFRkLFxuICBUYm9keSxcbiAgVGgsXG4gIEljb25cbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEFCSVMsIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQGNvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB0aW1lc3RhbXBjb252ZXJ0IH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuaW1wb3J0IHsgRmFXYWxsZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YSgpIHtcbiAgY29uc3Qge1xuICAgIHRvdGFsc3VwcGx5LFxuICAgIHNoYXJlcHJpY2UsXG4gICAgbmF2Y2FsY3VsYXRlZCxcbiAgICB2YXVsdHVzZGMsXG4gICAgbG9uZ3NpemUsXG4gICAgbG9uZ2NvbGxhdGVyYWwsXG4gICAgbG9uZ2RlbHRhLFxuICAgIGxvbmdsZXZlcmFnZSxcbiAgICBsb25nYXZncHJpY2UsXG4gICAgaW5jcmVhc2VQb3NpdGlvbixcbiAgICBkZWNyZWFzZVBvc2l0aW9uLFxuICAgIHNob3J0c2l6ZSxcbiAgICBzaG9ydGNvbGxhdGVyYWwsXG4gICAgc2hvcnRhdmdwcmljZSxcbiAgICBzaG9ydGRlbHRhLFxuICAgIHNob3J0bGV2ZXJhZ2UsXG4gICAgZXhwbyxcbiAgfSA9IHVzZUNvbnRyYWN0UHJvdmlkZXIoKTtcblxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xhdW5jaGVkLCBzZXRMYXVuY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0R214UHJpY2VzKCkge1xuICAgIGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gbGV0IHByaWNlID0gKHJlc1tBRERSRVNTLldFVEhdKVxuICAgICAgICBsZXQgcHJpY2Vmb3JtYXQgPSBwYXJzZUludChyZXNbQUREUkVTUy5XRVRIXSkvMTAqKjMwXG4gICAgICAgIGNvbnNvbGUubG9nKHByaWNlZm9ybWF0KTtcbiAgICAgICAgc2V0UHJpY2VzKHByaWNlZm9ybWF0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGdldEdteFByaWNlcywgMTAwMDAwKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxhdW5jaGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBnZXRHbXhQcmljZXMoKTtcbiAgICAgICAgc2V0TGF1bmNoZWQodHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgIDxCb3ggdz1cIjE4JVwiIGJveFNoYWRvdz17XCJtZFwifSBwPVwiMjBweFwiIGJnPVwid2hpdGVcIiBib3JkZXJSYWRpdXM9e1wiMjBweFwifT5cbiAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS40MDBcIlxuICAgICAgICAgICAgICBmb250RmFtaWx5PXtcIkthbml0XCJ9XG4gICAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERhdGFcbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxUZXh0IFxuICAgICAgICAgICAgICBmb250RmFtaWx5PXtcIkthbml0XCJ9XG4gICAgICAgICAgICAgIGZvbnRTaXplPVwieGxcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiPnRlc3Q8L1RleHQ+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBoPVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICAgIHc9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgbWU9XCIxMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjOUZBQ0U2XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbXQ9XCI1cHhcIiBhcz17RmFXYWxsZXR9Lz5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPFRleHQgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzPXtcIjNweFwifSB0ZXh0RGVjb3JhdGlvbkNvbG9yPXtpc0FjdGl2ZShcIi9cIikgPyBcIiM5RkFDRTZcIiA6IFwidHJhbnNwYXJlbnRcIn0gdGV4dERlY29yYXRpb25MaW5lPVwidW5kZXJsaW5lXCIgbXk9XCJhdXRvXCIgZm9udEZhbWlseT17XCJLYW5pdFwifT5NeSBpbnZlc3RtZW50PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB7Lyoge2V4cG8gPT0gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBOZXV0cmFsIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDogMDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgUExQIHNoYXJlIHByaWNlIDoge3RvdGFsc3VwcGx5ID09IDAgPyAwIDogdmF1bHR1c2RjIC8gdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+VFZMIDoge3ZhdWx0dXNkY308L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgVG90YWwgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApIDogZXhwbyA9PSAxID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IExvbmc8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5MZXZlcmFnZSA6IHtsb25nbGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBUVkwgOntcIiBcIn1cbiAgICAgICAgICAgIHtsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFNoYXJlIFByaWNlIDp7XCIgXCJ9XG4gICAgICAgICAgICB7KGxvbmdjb2xsYXRlcmFsICsgKGxvbmdzaXplICogKGxvbmdhdmdwcmljZSAtIHByaWNlcykpIC8gcHJpY2VzKS90b3RhbHN1cHBseX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgVG90YWwgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IFNob3J0PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiB7c2hvcnRsZXZlcmFnZX08L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFRWTCA6e1wiIFwifVxuICAgICAgICAgICAge3Nob3J0Y29sbGF0ZXJhbCArIChzaG9ydHNpemUgKiAocHJpY2VzLXNob3J0YXZncHJpY2UpKSAvIHByaWNlc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFNoYXJlIFByaWNlIDp7XCIgXCJ9XG4gICAgICAgICAgICB7KHNob3J0Y29sbGF0ZXJhbCArIChzaG9ydHNpemUgKiAocHJpY2VzLXNob3J0YXZncHJpY2UpKSAvIHByaWNlcykvdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKX0gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGQiLCJUYm9keSIsIlRoIiwiSWNvbiIsIkFCSVMiLCJBRERSRVNTIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiZXRoZXJzIiwidGltZXN0YW1wY29udmVydCIsIkZhV2FsbGV0IiwiRGF0YSIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJleHBvIiwicHJpY2VzIiwic2V0UHJpY2VzIiwibGF1bmNoZWQiLCJzZXRMYXVuY2hlZCIsImdldEdteFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcmljZWZvcm1hdCIsInBhcnNlSW50IiwiV0VUSCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJmaW5hbGx5Iiwic2V0VGltZW91dCIsInciLCJib3hTaGFkb3ciLCJwIiwiYmciLCJib3JkZXJSYWRpdXMiLCJkaXJlY3Rpb24iLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoIiwibWUiLCJiZ0NvbG9yIiwibXQiLCJhcyIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwidGV4dERlY29yYXRpb25Db2xvciIsImlzQWN0aXZlIiwidGV4dERlY29yYXRpb25MaW5lIiwibXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});