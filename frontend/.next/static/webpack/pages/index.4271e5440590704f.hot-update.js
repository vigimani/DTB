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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Minicard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Minicard */ \"./components/user/Minicard.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let priceformat = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) / 10 ** 30;\n            console.log(priceformat);\n            setPrices(priceformat);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                direction: \"raw\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"TVL\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)((longcollateral + longsize * (longavgprice - prices) / prices).toFixed(2))\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Total PLP supply\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(totalsupply.toFixed(0))\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Current exposition\",\n                        data: \"Long\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Leverage\",\n                        data: longleverage.toFixed(1).toString()\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"PLP share price\",\n                        data: (longcollateral + longsize * (longavgprice - prices) / prices) / totalsupply\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            expo == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    direction: \"raw\",\n                    justifyContent: \"space-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"TVL\",\n                            data: vaultusdc\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"Total PLP supply\",\n                            data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(totalsupply.toFixed(0))\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"Current exposition\",\n                            data: \"Neutral\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"Leverage\",\n                            data: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"PLP share price\",\n                            data: totalsupply == 0 ? 0 : vaultusdc / totalsupply\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false) : expo == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: \"Exposition : Long\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Leverage : \",\n                            longleverage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"TVL :\",\n                            \" \",\n                            longcollateral + longsize * (longavgprice - prices) / prices\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Share Price :\",\n                            \" \",\n                            (longcollateral + longsize * (longavgprice - prices) / prices) / totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"PLP Total supply : \",\n                            totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: \"Exposition : Short\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Leverage : \",\n                            shortleverage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"TVL :\",\n                            \" \",\n                            shortcollateral + shortsize * (prices - shortavgprice) / prices\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Share Price :\",\n                            \" \",\n                            (shortcollateral + shortsize * (prices - shortavgprice) / prices) / totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"PLP Total supply : \",\n                            totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL0RhdGEuanN4PzZlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgSFN0YWNrLFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG4gIEljb25CdXR0b24sXG4gIGNvbG9yTW9kZSxcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUcixcbiAgVGQsXG4gIFRib2R5LFxuICBUaCxcbiAgSWNvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEFCSVMsIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQGNvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB0aW1lc3RhbXBjb252ZXJ0IH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuaW1wb3J0IHsgRmFXYWxsZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBNaW5pY2FyZCBmcm9tIFwiLi9NaW5pY2FyZFwiO1xuaW1wb3J0IHsgbnVtYmVyV2l0aFNwYWNlcyB9IGZyb20gXCJAL3V0aWxzL3V0aWxzZnVuY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YSgpIHtcbiAgY29uc3Qge1xuICAgIHRvdGFsc3VwcGx5LFxuICAgIHNoYXJlcHJpY2UsXG4gICAgbmF2Y2FsY3VsYXRlZCxcbiAgICB2YXVsdHVzZGMsXG4gICAgbG9uZ3NpemUsXG4gICAgbG9uZ2NvbGxhdGVyYWwsXG4gICAgbG9uZ2RlbHRhLFxuICAgIGxvbmdsZXZlcmFnZSxcbiAgICBsb25nYXZncHJpY2UsXG4gICAgaW5jcmVhc2VQb3NpdGlvbixcbiAgICBkZWNyZWFzZVBvc2l0aW9uLFxuICAgIHNob3J0c2l6ZSxcbiAgICBzaG9ydGNvbGxhdGVyYWwsXG4gICAgc2hvcnRhdmdwcmljZSxcbiAgICBzaG9ydGRlbHRhLFxuICAgIHNob3J0bGV2ZXJhZ2UsXG4gICAgZXhwbyxcbiAgfSA9IHVzZUNvbnRyYWN0UHJvdmlkZXIoKTtcblxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xhdW5jaGVkLCBzZXRMYXVuY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0R214UHJpY2VzKCkge1xuICAgIGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gbGV0IHByaWNlID0gKHJlc1tBRERSRVNTLldFVEhdKVxuICAgICAgICBsZXQgcHJpY2Vmb3JtYXQgPSBwYXJzZUludChyZXNbQUREUkVTUy5XRVRIXSkgLyAxMCAqKiAzMDtcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2Vmb3JtYXQpO1xuICAgICAgICBzZXRQcmljZXMocHJpY2Vmb3JtYXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZ2V0R214UHJpY2VzLCAxMDAwMDApO1xuICAgICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGF1bmNoZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdldEdteFByaWNlcygpO1xuICAgICAgICBzZXRMYXVuY2hlZCh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCBkaXJlY3Rpb249XCJyYXdcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJUVkxcIiBkYXRhPXtudW1iZXJXaXRoU3BhY2VzKChsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlcykudG9GaXhlZCgyKSl9Lz5cbiAgICAgICAgPE1pbmljYXJkIHRpdGxlPVwiVG90YWwgUExQIHN1cHBseVwiIGRhdGE9e251bWJlcldpdGhTcGFjZXModG90YWxzdXBwbHkudG9GaXhlZCgwKSl9Lz5cbiAgICAgICAgPE1pbmljYXJkIHRpdGxlPVwiQ3VycmVudCBleHBvc2l0aW9uXCIgZGF0YT1cIkxvbmdcIi8+XG4gICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIkxldmVyYWdlXCIgZGF0YT17bG9uZ2xldmVyYWdlLnRvRml4ZWQoMSkudG9TdHJpbmcoKX0vPlxuICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJQTFAgc2hhcmUgcHJpY2VcIiBkYXRhPSAgeyhsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlcykvdG90YWxzdXBwbHl9Lz5cbiAgICAgIDwvRmxleD5cbiAgICAgIHtleHBvID09IDAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicmF3XCIganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifT5cbiAgICAgICAgPE1pbmljYXJkIHRpdGxlPVwiVFZMXCIgZGF0YT17dmF1bHR1c2RjfS8+XG4gICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIlRvdGFsIFBMUCBzdXBwbHlcIiBkYXRhPXtudW1iZXJXaXRoU3BhY2VzKHRvdGFsc3VwcGx5LnRvRml4ZWQoMCkpfS8+XG4gICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIkN1cnJlbnQgZXhwb3NpdGlvblwiIGRhdGE9XCJOZXV0cmFsXCIvPlxuICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJMZXZlcmFnZVwiIGRhdGE9JzAnLz5cbiAgICAgICAgPE1pbmljYXJkIHRpdGxlPVwiUExQIHNoYXJlIHByaWNlXCIgZGF0YT17dG90YWxzdXBwbHkgPT0gMCA/IDAgOiB2YXVsdHVzZGMgLyB0b3RhbHN1cHBseX0vPlxuICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBleHBvID09IDEgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5FeHBvc2l0aW9uIDogTG9uZzwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDoge2xvbmdsZXZlcmFnZX08L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFRWTCA6e1wiIFwifVxuICAgICAgICAgICAge2xvbmdjb2xsYXRlcmFsICsgKGxvbmdzaXplICogKGxvbmdhdmdwcmljZSAtIHByaWNlcykpIC8gcHJpY2VzfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgU2hhcmUgUHJpY2UgOntcIiBcIn1cbiAgICAgICAgICAgIHsobG9uZ2NvbGxhdGVyYWwgKyAobG9uZ3NpemUgKiAobG9uZ2F2Z3ByaWNlIC0gcHJpY2VzKSkgLyBwcmljZXMpL3RvdGFsc3VwcGx5fVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5FeHBvc2l0aW9uIDogU2hvcnQ8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5MZXZlcmFnZSA6IHtzaG9ydGxldmVyYWdlfTwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgVFZMIDp7XCIgXCJ9XG4gICAgICAgICAgICB7c2hvcnRjb2xsYXRlcmFsICsgKHNob3J0c2l6ZSAqIChwcmljZXMtc2hvcnRhdmdwcmljZSkpIC8gcHJpY2VzfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgU2hhcmUgUHJpY2UgOntcIiBcIn1cbiAgICAgICAgICAgIHsoc2hvcnRjb2xsYXRlcmFsICsgKHNob3J0c2l6ZSAqIChwcmljZXMtc2hvcnRhdmdwcmljZSkpIC8gcHJpY2VzKS90b3RhbHN1cHBseX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgVG90YWwgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIlRleHQiLCJCb3giLCJIU3RhY2siLCJTdGFjayIsIlN3aXRjaCIsIkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlQ29sb3JNb2RlIiwiSWNvbkJ1dHRvbiIsImNvbG9yTW9kZSIsIlRhYmxlIiwiVGhlYWQiLCJUciIsIlRkIiwiVGJvZHkiLCJUaCIsIkljb24iLCJBQklTIiwiQUREUkVTUyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImV0aGVycyIsInRpbWVzdGFtcGNvbnZlcnQiLCJGYVdhbGxldCIsIk1pbmljYXJkIiwibnVtYmVyV2l0aFNwYWNlcyIsIkRhdGEiLCJ0b3RhbHN1cHBseSIsInNoYXJlcHJpY2UiLCJuYXZjYWxjdWxhdGVkIiwidmF1bHR1c2RjIiwibG9uZ3NpemUiLCJsb25nY29sbGF0ZXJhbCIsImxvbmdkZWx0YSIsImxvbmdsZXZlcmFnZSIsImxvbmdhdmdwcmljZSIsImluY3JlYXNlUG9zaXRpb24iLCJkZWNyZWFzZVBvc2l0aW9uIiwic2hvcnRzaXplIiwic2hvcnRjb2xsYXRlcmFsIiwic2hvcnRhdmdwcmljZSIsInNob3J0ZGVsdGEiLCJzaG9ydGxldmVyYWdlIiwiZXhwbyIsInByaWNlcyIsInNldFByaWNlcyIsImxhdW5jaGVkIiwic2V0TGF1bmNoZWQiLCJnZXRHbXhQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJpY2Vmb3JtYXQiLCJwYXJzZUludCIsIldFVEgiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlIiwiZmluYWxseSIsInNldFRpbWVvdXQiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInRpdGxlIiwiZGF0YSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsInciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});