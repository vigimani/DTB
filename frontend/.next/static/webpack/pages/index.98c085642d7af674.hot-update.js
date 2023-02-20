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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Minicard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Minicard */ \"./components/user/Minicard.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let priceformat = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) / 10 ** 30;\n            console.log(priceformat);\n            setPrices(priceformat);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                direction: \"raw\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"TVL\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)((longcollateral + longsize * (longavgprice - prices) / prices).toFixed(2))\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Total PLP supply\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(totalsupply.toFixed(0))\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Current exposition\",\n                        data: \"Long\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Leverage\",\n                        data: longleverage.toFixed(1).toString()\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"PLP share price\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(((longcollateral + longsize * (longavgprice - prices) / prices) / totalsupply).toFixed(2))\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            expo == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    direction: \"raw\",\n                    justifyContent: \"space-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"TVL\",\n                            data: vaultusdc\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"Total PLP supply\",\n                            data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(totalsupply.toFixed(0))\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"Current exposition\",\n                            data: \"Neutral\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"Leverage\",\n                            data: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            title: \"PLP share price\",\n                            data: totalsupply == 0 ? 0 : vaultusdc / totalsupply\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false) : expo == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: \"Exposition : Long\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Leverage : \",\n                            longleverage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"TVL :\",\n                            \" \",\n                            longcollateral + longsize * (longavgprice - prices) / prices\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Share Price :\",\n                            \" \",\n                            (longcollateral + longsize * (longavgprice - prices) / prices) / totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"PLP Total supply : \",\n                            totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: \"Exposition : Short\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Leverage : \",\n                            shortleverage\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"TVL :\",\n                            \" \",\n                            shortcollateral + shortsize * (prices - shortavgprice) / prices\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"Share Price :\",\n                            \" \",\n                            (shortcollateral + shortsize * (prices - shortavgprice) / prices) / totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        w: \"100%\",\n                        children: [\n                            \"PLP Total supply : \",\n                            totalsupply\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBb0IwQjtBQUMwQjtBQUNSO0FBQ29CO0FBQ2hDO0FBQ3lCO0FBQ2Y7QUFDUjtBQUN1QjtBQUUxQyxTQUFTNkIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFdBQVUsRUFDVkMsY0FBYSxFQUNiQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsZUFBYyxFQUNkQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLGlCQUFnQixFQUNoQkMsVUFBUyxFQUNUQyxnQkFBZSxFQUNmQyxjQUFhLEVBQ2JDLFdBQVUsRUFDVkMsY0FBYSxFQUNiQyxLQUFJLEVBQ0wsR0FBR3ZCLDZFQUFtQkE7SUFFdkIsTUFBTSxDQUFDd0IsUUFBUUMsVUFBVSxHQUFHM0IsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQzRCLFVBQVVDLFlBQVksR0FBRzdCLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUMsZUFBZThCLGVBQWU7UUFDNUIsTUFBTUMsTUFBTSw2QkFDVEMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ2Isa0NBQWtDO1lBQ2xDLElBQUlFLGNBQWNDLFNBQVNILEdBQUcsQ0FBQ2xDLHVEQUFZLENBQUMsSUFBSSxNQUFNO1lBQ3REdUMsUUFBUUMsR0FBRyxDQUFDSjtZQUNaUixVQUFVUTtRQUNaLEdBQ0NLLEtBQUssQ0FBQyxDQUFDQyxJQUFNSCxRQUFRQyxHQUFHLENBQUNFLElBQ3pCQyxPQUFPLENBQUMsSUFBTTtZQUNiQyxXQUFXYixjQUFjO1FBQzNCO0lBQ0o7SUFFQTdCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUMyQixVQUFVO1lBQ2IsSUFBSTtnQkFDRkU7Z0JBQ0FELFlBQVksSUFBSTtZQUNsQixFQUFFLE9BQU9ZLEdBQUc7Z0JBQ1ZILFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQzNELGtEQUFJQTtnQkFBQ2dFLFdBQVU7Z0JBQU1DLGdCQUFnQjs7a0NBQ3BDLDhEQUFDdkMsaURBQVFBO3dCQUFDd0MsT0FBTTt3QkFBTUMsTUFBTXhDLHNFQUFnQkEsQ0FBQyxDQUFDTyxpQkFBaUIsV0FBYUcsQ0FBQUEsZUFBZVMsTUFBSyxJQUFNQSxNQUFLLEVBQUdzQixPQUFPLENBQUM7Ozs7OztrQ0FDdEgsOERBQUMxQyxpREFBUUE7d0JBQUN3QyxPQUFNO3dCQUFtQkMsTUFBTXhDLHNFQUFnQkEsQ0FBQ0UsWUFBWXVDLE9BQU8sQ0FBQzs7Ozs7O2tDQUM5RSw4REFBQzFDLGlEQUFRQTt3QkFBQ3dDLE9BQU07d0JBQXFCQyxNQUFLOzs7Ozs7a0NBQzFDLDhEQUFDekMsaURBQVFBO3dCQUFDd0MsT0FBTTt3QkFBV0MsTUFBTS9CLGFBQWFnQyxPQUFPLENBQUMsR0FBR0MsUUFBUTs7Ozs7O2tDQUNqRSw4REFBQzNDLGlEQUFRQTt3QkFBQ3dDLE9BQU07d0JBQWtCQyxNQUFPeEMsc0VBQWdCQSxDQUFDLENBQUMsQ0FBQ08saUJBQWlCLFdBQWFHLENBQUFBLGVBQWVTLE1BQUssSUFBTUEsTUFBSyxJQUFHakIsV0FBVSxFQUFHdUMsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7WUFFbEp2QixRQUFRLGtCQUNQOzBCQUNRLDRFQUFDN0Msa0RBQUlBO29CQUFDZ0UsV0FBVTtvQkFBTUMsZ0JBQWdCOztzQ0FDOUMsOERBQUN2QyxpREFBUUE7NEJBQUN3QyxPQUFNOzRCQUFNQyxNQUFNbkM7Ozs7OztzQ0FDNUIsOERBQUNOLGlEQUFRQTs0QkFBQ3dDLE9BQU07NEJBQW1CQyxNQUFNeEMsc0VBQWdCQSxDQUFDRSxZQUFZdUMsT0FBTyxDQUFDOzs7Ozs7c0NBQzlFLDhEQUFDMUMsaURBQVFBOzRCQUFDd0MsT0FBTTs0QkFBcUJDLE1BQUs7Ozs7OztzQ0FDMUMsOERBQUN6QyxpREFBUUE7NEJBQUN3QyxPQUFNOzRCQUFXQyxNQUFLOzs7Ozs7c0NBQ2hDLDhEQUFDekMsaURBQVFBOzRCQUFDd0MsT0FBTTs0QkFBa0JDLE1BQU10QyxlQUFlLElBQUksSUFBSUcsWUFBWUgsV0FBVzs7Ozs7Ozs7Ozs7O2dDQUdwRmdCLFFBQVEsa0JBQ1Y7O2tDQUNFLDhEQUFDN0Msa0RBQUlBO3dCQUFDc0UsR0FBRTtrQ0FBTzs7Ozs7O2tDQUNmLDhEQUFDdEUsa0RBQUlBO3dCQUFDc0UsR0FBRTs7NEJBQU87NEJBQVlsQzs7Ozs7OztrQ0FDM0IsOERBQUNwQyxrREFBSUE7d0JBQUNzRSxHQUFFOzs0QkFBTzs0QkFDUDs0QkFDTHBDLGlCQUFpQixXQUFhRyxDQUFBQSxlQUFlUyxNQUFLLElBQU1BOzs7Ozs7O2tDQUUzRCw4REFBQzlDLGtEQUFJQTt3QkFBQ3NFLEdBQUU7OzRCQUFPOzRCQUNDOzRCQUNacEMsQ0FBQUEsaUJBQWlCLFdBQWFHLENBQUFBLGVBQWVTLE1BQUssSUFBTUEsTUFBSyxJQUFHakI7Ozs7Ozs7a0NBRXBFLDhEQUFDN0Isa0RBQUlBO3dCQUFDc0UsR0FBRTs7NEJBQU87NEJBQW9CekM7Ozs7Ozs7OzZDQUdyQzs7a0NBQ0UsOERBQUM3QixrREFBSUE7d0JBQUNzRSxHQUFFO2tDQUFPOzs7Ozs7a0NBQ2YsOERBQUN0RSxrREFBSUE7d0JBQUNzRSxHQUFFOzs0QkFBTzs0QkFBWTFCOzs7Ozs7O2tDQUMzQiw4REFBQzVDLGtEQUFJQTt3QkFBQ3NFLEdBQUU7OzRCQUFPOzRCQUNQOzRCQUNMN0Isa0JBQWtCLFlBQWNLLENBQUFBLFNBQU9KLGFBQVksSUFBTUk7Ozs7Ozs7a0NBRTVELDhEQUFDOUMsa0RBQUlBO3dCQUFDc0UsR0FBRTs7NEJBQU87NEJBQ0M7NEJBQ1o3QixDQUFBQSxrQkFBa0IsWUFBY0ssQ0FBQUEsU0FBT0osYUFBWSxJQUFNSSxNQUFLLElBQUdqQjs7Ozs7OztrQ0FFckUsOERBQUM3QixrREFBSUE7d0JBQUNzRSxHQUFFOzs0QkFBTzs0QkFBb0J6Qzs7Ozs7Ozs7NEJBRXRDOzs7QUFHUCxDQUFDO0dBcEd1QkQ7O1FBbUJsQk4seUVBQW1CQTs7O0tBbkJETSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3g/NmUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZSxcbiAgRmxleCxcbiAgVGV4dCxcbiAgQm94LFxuICBIU3RhY2ssXG4gIFN0YWNrLFxuICBTd2l0Y2gsXG4gIEJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZUNvbG9yTW9kZSxcbiAgSWNvbkJ1dHRvbixcbiAgY29sb3JNb2RlLFxuICBUYWJsZSxcbiAgVGhlYWQsXG4gIFRyLFxuICBUZCxcbiAgVGJvZHksXG4gIFRoLFxuICBJY29uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9Db250cmFjdENvbnRleHRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHRpbWVzdGFtcGNvbnZlcnQgfSBmcm9tIFwiQC91dGlscy91dGlsc2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBGYVdhbGxldCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IE1pbmljYXJkIGZyb20gXCIuL01pbmljYXJkXCI7XG5pbXBvcnQgeyBudW1iZXJXaXRoU3BhY2VzIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhKCkge1xuICBjb25zdCB7XG4gICAgdG90YWxzdXBwbHksXG4gICAgc2hhcmVwcmljZSxcbiAgICBuYXZjYWxjdWxhdGVkLFxuICAgIHZhdWx0dXNkYyxcbiAgICBsb25nc2l6ZSxcbiAgICBsb25nY29sbGF0ZXJhbCxcbiAgICBsb25nZGVsdGEsXG4gICAgbG9uZ2xldmVyYWdlLFxuICAgIGxvbmdhdmdwcmljZSxcbiAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgc2hvcnRzaXplLFxuICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICBzaG9ydGF2Z3ByaWNlLFxuICAgIHNob3J0ZGVsdGEsXG4gICAgc2hvcnRsZXZlcmFnZSxcbiAgICBleHBvLFxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuXG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbGF1bmNoZWQsIHNldExhdW5jaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRHbXhQcmljZXMoKSB7XG4gICAgYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyBsZXQgcHJpY2UgPSAocmVzW0FERFJFU1MuV0VUSF0pXG4gICAgICAgIGxldCBwcmljZWZvcm1hdCA9IHBhcnNlSW50KHJlc1tBRERSRVNTLldFVEhdKSAvIDEwICoqIDMwO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmljZWZvcm1hdCk7XG4gICAgICAgIHNldFByaWNlcyhwcmljZWZvcm1hdCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChnZXRHbXhQcmljZXMsIDEwMDAwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYXVuY2hlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZ2V0R214UHJpY2VzKCk7XG4gICAgICAgIHNldExhdW5jaGVkKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IGRpcmVjdGlvbj1cInJhd1wiIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XG4gICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIlRWTFwiIGRhdGE9e251bWJlcldpdGhTcGFjZXMoKGxvbmdjb2xsYXRlcmFsICsgKGxvbmdzaXplICogKGxvbmdhdmdwcmljZSAtIHByaWNlcykpIC8gcHJpY2VzKS50b0ZpeGVkKDIpKX0vPlxuICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJUb3RhbCBQTFAgc3VwcGx5XCIgZGF0YT17bnVtYmVyV2l0aFNwYWNlcyh0b3RhbHN1cHBseS50b0ZpeGVkKDApKX0vPlxuICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJDdXJyZW50IGV4cG9zaXRpb25cIiBkYXRhPVwiTG9uZ1wiLz5cbiAgICAgICAgPE1pbmljYXJkIHRpdGxlPVwiTGV2ZXJhZ2VcIiBkYXRhPXtsb25nbGV2ZXJhZ2UudG9GaXhlZCgxKS50b1N0cmluZygpfS8+XG4gICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIlBMUCBzaGFyZSBwcmljZVwiIGRhdGE9IHtudW1iZXJXaXRoU3BhY2VzKCgobG9uZ2NvbGxhdGVyYWwgKyAobG9uZ3NpemUgKiAobG9uZ2F2Z3ByaWNlIC0gcHJpY2VzKSkgLyBwcmljZXMpL3RvdGFsc3VwcGx5KS50b0ZpeGVkKDIpKX0vPlxuICAgICAgPC9GbGV4PlxuICAgICAge2V4cG8gPT0gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyYXdcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJUVkxcIiBkYXRhPXt2YXVsdHVzZGN9Lz5cbiAgICAgICAgPE1pbmljYXJkIHRpdGxlPVwiVG90YWwgUExQIHN1cHBseVwiIGRhdGE9e251bWJlcldpdGhTcGFjZXModG90YWxzdXBwbHkudG9GaXhlZCgwKSl9Lz5cbiAgICAgICAgPE1pbmljYXJkIHRpdGxlPVwiQ3VycmVudCBleHBvc2l0aW9uXCIgZGF0YT1cIk5ldXRyYWxcIi8+XG4gICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIkxldmVyYWdlXCIgZGF0YT0nMCcvPlxuICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJQTFAgc2hhcmUgcHJpY2VcIiBkYXRhPXt0b3RhbHN1cHBseSA9PSAwID8gMCA6IHZhdWx0dXNkYyAvIHRvdGFsc3VwcGx5fS8+XG4gICAgICA8L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IGV4cG8gPT0gMSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBMb25nPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiB7bG9uZ2xldmVyYWdlfTwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgVFZMIDp7XCIgXCJ9XG4gICAgICAgICAgICB7bG9uZ2NvbGxhdGVyYWwgKyAobG9uZ3NpemUgKiAobG9uZ2F2Z3ByaWNlIC0gcHJpY2VzKSkgLyBwcmljZXN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBTaGFyZSBQcmljZSA6e1wiIFwifVxuICAgICAgICAgICAgeyhsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlcykvdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBTaG9ydDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDoge3Nob3J0bGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBUVkwgOntcIiBcIn1cbiAgICAgICAgICAgIHtzaG9ydGNvbGxhdGVyYWwgKyAoc2hvcnRzaXplICogKHByaWNlcy1zaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBTaGFyZSBQcmljZSA6e1wiIFwifVxuICAgICAgICAgICAgeyhzaG9ydGNvbGxhdGVyYWwgKyAoc2hvcnRzaXplICogKHByaWNlcy1zaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXMpL3RvdGFsc3VwcGx5fVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGQiLCJUYm9keSIsIlRoIiwiSWNvbiIsIkFCSVMiLCJBRERSRVNTIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiZXRoZXJzIiwidGltZXN0YW1wY29udmVydCIsIkZhV2FsbGV0IiwiTWluaWNhcmQiLCJudW1iZXJXaXRoU3BhY2VzIiwiRGF0YSIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJleHBvIiwicHJpY2VzIiwic2V0UHJpY2VzIiwibGF1bmNoZWQiLCJzZXRMYXVuY2hlZCIsImdldEdteFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcmljZWZvcm1hdCIsInBhcnNlSW50IiwiV0VUSCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJmaW5hbGx5Iiwic2V0VGltZW91dCIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwidGl0bGUiLCJkYXRhIiwidG9GaXhlZCIsInRvU3RyaW5nIiwidyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});