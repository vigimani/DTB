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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _Minicard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Minicard */ \"./components/user/Minicard.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let priceformat = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) / 10 ** 30;\n            console.log(priceformat);\n            setPrices(priceformat);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: expo == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                direction: \"raw\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"TVL\",\n                        data: vaultusdc,\n                        unity: \"$\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Total PLP supply\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(totalsupply.toFixed(0)),\n                        unity: \"PLP\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Current exposition\",\n                        data: \"Neutral\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Leverage\",\n                        data: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"PLP share price\",\n                        data: totalsupply == 0 ? 0 : vaultusdc / totalsupply,\n                        unity: \"$\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 88,\n                columnNumber: 11\n            }, this)\n        }, void 0, false) : expo == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                direction: \"raw\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"TVL\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)((longcollateral + longsize * (longavgprice - prices) / prices).toFixed(2)),\n                        unity: \"$\",\n                        icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaWallet\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Total PLP supply\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(totalsupply.toFixed(0)),\n                        unity: \"PLP\",\n                        icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCoins\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Current exposition\",\n                        data: \"Long\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Leverage\",\n                        data: longleverage.toFixed(1).toString(),\n                        unity: \"x\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"PLP share price\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(((longcollateral + longsize * (longavgprice - prices) / prices) / totalsupply).toFixed(2)),\n                        unity: \"$\",\n                        icon: react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiCurrencyDollar\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 106,\n                columnNumber: 11\n            }, this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                direction: \"raw\",\n                justifyContent: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"TVL\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)((shortcollateral + shortsize * (prices - shortavgprice) / prices).toFixed(2)),\n                        unity: \"$\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 147,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Total PLP supply\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(totalsupply.toFixed(0)),\n                        unity: \"PLP\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 157,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Current exposition\",\n                        data: \"Short\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 162,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"Leverage\",\n                        data: shortleverage.toFixed(1).toString(),\n                        unity: \"x\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 163,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        title: \"PLP share price\",\n                        data: (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__.numberWithSpaces)(((shortcollateral + shortsize * (prices - shortavgprice) / prices) / totalsupply).toFixed(2)),\n                        unity: \"$\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 168,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 146,\n                columnNumber: 11\n            }, this)\n        }, void 0, false)\n    }, void 0, false);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFvQjBCO0FBQzBCO0FBQ1I7QUFDb0I7QUFDaEM7QUFDeUI7QUFDUDtBQUNIO0FBQ3FEO0FBQzNEO0FBQ1A7QUFDdUI7QUFFMUMsU0FBU21DLE9BQU87O0lBQzdCLE1BQU0sRUFDSkMsWUFBVyxFQUNYQyxXQUFVLEVBQ1ZDLGNBQWEsRUFDYkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1JDLGVBQWMsRUFDZEMsVUFBUyxFQUNUQyxhQUFZLEVBQ1pDLGFBQVksRUFDWkMsaUJBQWdCLEVBQ2hCQyxpQkFBZ0IsRUFDaEJDLFVBQVMsRUFDVEMsZ0JBQWUsRUFDZkMsY0FBYSxFQUNiQyxXQUFVLEVBQ1ZDLGNBQWEsRUFDYkMsS0FBSSxFQUNMLEdBQUc3Qiw2RUFBbUJBO0lBRXZCLE1BQU0sQ0FBQzhCLFFBQVFDLFVBQVUsR0FBR2pDLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNrQyxVQUFVQyxZQUFZLEdBQUduQywrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDLGVBQWVvQyxlQUFlO1FBQzVCLE1BQU1DLE1BQU0sNkJBQ1RDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiLGtDQUFrQztZQUNsQyxJQUFJRSxjQUFjQyxTQUFTSCxHQUFHLENBQUN4Qyx1REFBWSxDQUFDLElBQUksTUFBTTtZQUN0RDZDLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDWlIsVUFBVVE7UUFDWixHQUNDSyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUgsUUFBUUMsR0FBRyxDQUFDRSxJQUN6QkMsT0FBTyxDQUFDLElBQU07WUFDYkMsV0FBV2IsY0FBYztRQUMzQjtJQUNKO0lBRUFuQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDaUMsVUFBVTtZQUNiLElBQUk7Z0JBQ0ZFO2dCQUNBRCxZQUFZLElBQUk7WUFDbEIsRUFBRSxPQUFPWSxHQUFHO2dCQUNWSCxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR2QsUUFBUSxrQkFDUDtzQkFDRSw0RUFBQ25ELGtEQUFJQTtnQkFBQ3NFLFdBQVU7Z0JBQU1DLGdCQUFnQjs7a0NBQ3BDLDhEQUFDdkMsaURBQVFBO3dCQUFDd0MsT0FBTTt3QkFBTUMsTUFBTW5DO3dCQUFXb0MsT0FBTzs7Ozs7O2tDQUM5Qyw4REFBQzFDLGlEQUFRQTt3QkFDUHdDLE9BQU07d0JBQ05DLE1BQU14QyxzRUFBZ0JBLENBQUNFLFlBQVl3QyxPQUFPLENBQUM7d0JBQzNDRCxPQUFPOzs7Ozs7a0NBRVQsOERBQUMxQyxpREFBUUE7d0JBQUN3QyxPQUFNO3dCQUFxQkMsTUFBSzs7Ozs7O2tDQUMxQyw4REFBQ3pDLGlEQUFRQTt3QkFBQ3dDLE9BQU07d0JBQVdDLE1BQUs7Ozs7OztrQ0FDaEMsOERBQUN6QyxpREFBUUE7d0JBQ1B3QyxPQUFNO3dCQUNOQyxNQUFNdEMsZUFBZSxJQUFJLElBQUlHLFlBQVlILFdBQVc7d0JBQ3BEdUMsT0FBTzs7Ozs7Ozs7Ozs7OzRCQUlYdkIsUUFBUSxrQkFDVjtzQkFDRSw0RUFBQ25ELGtEQUFJQTtnQkFBQ3NFLFdBQVU7Z0JBQU1DLGdCQUFnQjs7a0NBQ3BDLDhEQUFDdkMsaURBQVFBO3dCQUNQd0MsT0FBTTt3QkFDTkMsTUFBTXhDLHNFQUFnQkEsQ0FDcEIsQ0FDRU8saUJBQ0EsV0FBYUcsQ0FBQUEsZUFBZVMsTUFBSyxJQUFNQSxNQUFLLEVBQzVDdUIsT0FBTyxDQUFDO3dCQUVaRCxPQUFPO3dCQUNQRSxNQUFNbkQsb0RBQVFBOzs7Ozs7a0NBRWhCLDhEQUFDTyxpREFBUUE7d0JBQ1B3QyxPQUFNO3dCQUNOQyxNQUFNeEMsc0VBQWdCQSxDQUFDRSxZQUFZd0MsT0FBTyxDQUFDO3dCQUMzQ0QsT0FBTzt3QkFDUEUsTUFBUWxELG1EQUFPQTs7Ozs7O2tDQUVqQiw4REFBQ00saURBQVFBO3dCQUFDd0MsT0FBTTt3QkFBcUJDLE1BQUs7Ozs7OztrQ0FDMUMsOERBQUN6QyxpREFBUUE7d0JBQ1B3QyxPQUFNO3dCQUNOQyxNQUFNL0IsYUFBYWlDLE9BQU8sQ0FBQyxHQUFHRSxRQUFRO3dCQUN0Q0gsT0FBTzs7Ozs7O2tDQUVULDhEQUFDMUMsaURBQVFBO3dCQUNQd0MsT0FBTTt3QkFDTkMsTUFBTXhDLHNFQUFnQkEsQ0FDcEIsQ0FDRSxDQUFDTyxpQkFDQyxXQUFhRyxDQUFBQSxlQUFlUyxNQUFLLElBQU1BLE1BQUssSUFDOUNqQixXQUFVLEVBQ1Z3QyxPQUFPLENBQUM7d0JBRVpELE9BQU87d0JBQ1BFLE1BQU1qRCw0REFBZ0JBOzs7Ozs7Ozs7Ozs7MENBSzVCO3NCQUNFLDRFQUFDM0Isa0RBQUlBO2dCQUFDc0UsV0FBVTtnQkFBTUMsZ0JBQWdCOztrQ0FDcEMsOERBQUN2QyxpREFBUUE7d0JBQ1B3QyxPQUFNO3dCQUNOQyxNQUFNeEMsc0VBQWdCQSxDQUNwQixDQUNFYyxrQkFDQSxZQUFjSyxDQUFBQSxTQUFTSixhQUFZLElBQU1JLE1BQUssRUFDOUN1QixPQUFPLENBQUM7d0JBRVpELE9BQU87Ozs7OztrQ0FFVCw4REFBQzFDLGlEQUFRQTt3QkFDUHdDLE9BQU07d0JBQ05DLE1BQU14QyxzRUFBZ0JBLENBQUNFLFlBQVl3QyxPQUFPLENBQUM7d0JBQzNDRCxPQUFPOzs7Ozs7a0NBRVQsOERBQUMxQyxpREFBUUE7d0JBQUN3QyxPQUFNO3dCQUFxQkMsTUFBSzs7Ozs7O2tDQUMxQyw4REFBQ3pDLGlEQUFRQTt3QkFDUHdDLE9BQU07d0JBQ05DLE1BQU12QixjQUFjeUIsT0FBTyxDQUFDLEdBQUdFLFFBQVE7d0JBQ3ZDSCxPQUFPOzs7Ozs7a0NBRVQsOERBQUMxQyxpREFBUUE7d0JBQ1B3QyxPQUFNO3dCQUNOQyxNQUFNeEMsc0VBQWdCQSxDQUNwQixDQUNFLENBQUNjLGtCQUNDLFlBQWNLLENBQUFBLFNBQVNKLGFBQVksSUFBTUksTUFBSyxJQUNoRGpCLFdBQVUsRUFDVndDLE9BQU8sQ0FBQzt3QkFFWkQsT0FBTzs7Ozs7Ozs7Ozs7O3lCQUlkOztBQUdQLENBQUM7R0F0SnVCeEM7O1FBbUJsQloseUVBQW1CQTs7O0tBbkJEWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3g/NmUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZSxcbiAgRmxleCxcbiAgVGV4dCxcbiAgQm94LFxuICBIU3RhY2ssXG4gIFN0YWNrLFxuICBTd2l0Y2gsXG4gIEJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZUNvbG9yTW9kZSxcbiAgSWNvbkJ1dHRvbixcbiAgY29sb3JNb2RlLFxuICBUYWJsZSxcbiAgVGhlYWQsXG4gIFRyLFxuICBUZCxcbiAgVGJvZHksXG4gIFRoLFxuICBJY29uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9Db250cmFjdENvbnRleHRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHRpbWVzdGFtcGNvbnZlcnQgfSBmcm9tIFwiQC91dGlscy91dGlsc2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBGYVdhbGxldCxGYUNvaW5zIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0hpQ3VycmVuY3lEb2xsYXJ9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiXG5pbXBvcnQge0JzRmlsbEJhckNoYXJ0RmlsbCwgQnNGaWxsQXJyb3dVcENpcmNsZUZpbGwsQnNGaWxsQXJyb3dEb3duQ2lyY2xlRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7RmlBY3Rpdml0eX0gZnJvbSBcInJlYWN0LWljb25zL2hpXCJcbmltcG9ydCBNaW5pY2FyZCBmcm9tIFwiLi9NaW5pY2FyZFwiO1xuaW1wb3J0IHsgbnVtYmVyV2l0aFNwYWNlcyB9IGZyb20gXCJAL3V0aWxzL3V0aWxzZnVuY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YSgpIHtcbiAgY29uc3Qge1xuICAgIHRvdGFsc3VwcGx5LFxuICAgIHNoYXJlcHJpY2UsXG4gICAgbmF2Y2FsY3VsYXRlZCxcbiAgICB2YXVsdHVzZGMsXG4gICAgbG9uZ3NpemUsXG4gICAgbG9uZ2NvbGxhdGVyYWwsXG4gICAgbG9uZ2RlbHRhLFxuICAgIGxvbmdsZXZlcmFnZSxcbiAgICBsb25nYXZncHJpY2UsXG4gICAgaW5jcmVhc2VQb3NpdGlvbixcbiAgICBkZWNyZWFzZVBvc2l0aW9uLFxuICAgIHNob3J0c2l6ZSxcbiAgICBzaG9ydGNvbGxhdGVyYWwsXG4gICAgc2hvcnRhdmdwcmljZSxcbiAgICBzaG9ydGRlbHRhLFxuICAgIHNob3J0bGV2ZXJhZ2UsXG4gICAgZXhwbyxcbiAgfSA9IHVzZUNvbnRyYWN0UHJvdmlkZXIoKTtcblxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xhdW5jaGVkLCBzZXRMYXVuY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0R214UHJpY2VzKCkge1xuICAgIGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gbGV0IHByaWNlID0gKHJlc1tBRERSRVNTLldFVEhdKVxuICAgICAgICBsZXQgcHJpY2Vmb3JtYXQgPSBwYXJzZUludChyZXNbQUREUkVTUy5XRVRIXSkgLyAxMCAqKiAzMDtcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2Vmb3JtYXQpO1xuICAgICAgICBzZXRQcmljZXMocHJpY2Vmb3JtYXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZ2V0R214UHJpY2VzLCAxMDAwMDApO1xuICAgICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGF1bmNoZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdldEdteFByaWNlcygpO1xuICAgICAgICBzZXRMYXVuY2hlZCh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZXhwbyA9PSAwID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cInJhd1wiIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XG4gICAgICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJUVkxcIiBkYXRhPXt2YXVsdHVzZGN9IHVuaXR5PXtcIiRcIn0vPlxuICAgICAgICAgICAgPE1pbmljYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiVG90YWwgUExQIHN1cHBseVwiXG4gICAgICAgICAgICAgIGRhdGE9e251bWJlcldpdGhTcGFjZXModG90YWxzdXBwbHkudG9GaXhlZCgwKSl9XG4gICAgICAgICAgICAgIHVuaXR5PXtcIlBMUFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIkN1cnJlbnQgZXhwb3NpdGlvblwiIGRhdGE9XCJOZXV0cmFsXCIgLz5cbiAgICAgICAgICAgIDxNaW5pY2FyZCB0aXRsZT1cIkxldmVyYWdlXCIgZGF0YT1cIjBcIiAvPlxuICAgICAgICAgICAgPE1pbmljYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiUExQIHNoYXJlIHByaWNlXCJcbiAgICAgICAgICAgICAgZGF0YT17dG90YWxzdXBwbHkgPT0gMCA/IDAgOiB2YXVsdHVzZGMgLyB0b3RhbHN1cHBseX1cbiAgICAgICAgICAgICAgdW5pdHk9e1wiJFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IGV4cG8gPT0gMSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyYXdcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgICAgPE1pbmljYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiVFZMXCJcbiAgICAgICAgICAgICAgZGF0YT17bnVtYmVyV2l0aFNwYWNlcyhcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICBsb25nY29sbGF0ZXJhbCArXG4gICAgICAgICAgICAgICAgICAobG9uZ3NpemUgKiAobG9uZ2F2Z3ByaWNlIC0gcHJpY2VzKSkgLyBwcmljZXNcbiAgICAgICAgICAgICAgICApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgdW5pdHk9e1wiJFwifVxuICAgICAgICAgICAgICBpY29uPXtGYVdhbGxldH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWluaWNhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJUb3RhbCBQTFAgc3VwcGx5XCJcbiAgICAgICAgICAgICAgZGF0YT17bnVtYmVyV2l0aFNwYWNlcyh0b3RhbHN1cHBseS50b0ZpeGVkKDApKX1cbiAgICAgICAgICAgICAgdW5pdHk9e1wiUExQXCJ9XG4gICAgICAgICAgICAgIGljb24gPSB7RmFDb2luc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJDdXJyZW50IGV4cG9zaXRpb25cIiBkYXRhPVwiTG9uZ1wiIC8+XG4gICAgICAgICAgICA8TWluaWNhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJMZXZlcmFnZVwiXG4gICAgICAgICAgICAgIGRhdGE9e2xvbmdsZXZlcmFnZS50b0ZpeGVkKDEpLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgIHVuaXR5PXtcInhcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWluaWNhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJQTFAgc2hhcmUgcHJpY2VcIlxuICAgICAgICAgICAgICBkYXRhPXtudW1iZXJXaXRoU3BhY2VzKFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIChsb25nY29sbGF0ZXJhbCArXG4gICAgICAgICAgICAgICAgICAgIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlcykgL1xuICAgICAgICAgICAgICAgICAgdG90YWxzdXBwbHlcbiAgICAgICAgICAgICAgICApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgdW5pdHk9e1wiJFwifVxuICAgICAgICAgICAgICBpY29uPXtIaUN1cnJlbmN5RG9sbGFyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyYXdcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9PlxuICAgICAgICAgICAgPE1pbmljYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiVFZMXCJcbiAgICAgICAgICAgICAgZGF0YT17bnVtYmVyV2l0aFNwYWNlcyhcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICBzaG9ydGNvbGxhdGVyYWwgK1xuICAgICAgICAgICAgICAgICAgKHNob3J0c2l6ZSAqIChwcmljZXMgLSBzaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXNcbiAgICAgICAgICAgICAgICApLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgdW5pdHk9e1wiJFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNaW5pY2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIlRvdGFsIFBMUCBzdXBwbHlcIlxuICAgICAgICAgICAgICBkYXRhPXtudW1iZXJXaXRoU3BhY2VzKHRvdGFsc3VwcGx5LnRvRml4ZWQoMCkpfVxuICAgICAgICAgICAgICB1bml0eT17XCJQTFBcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWluaWNhcmQgdGl0bGU9XCJDdXJyZW50IGV4cG9zaXRpb25cIiBkYXRhPVwiU2hvcnRcIiAvPlxuICAgICAgICAgICAgPE1pbmljYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiTGV2ZXJhZ2VcIlxuICAgICAgICAgICAgICBkYXRhPXtzaG9ydGxldmVyYWdlLnRvRml4ZWQoMSkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgdW5pdHk9e1wieFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNaW5pY2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIlBMUCBzaGFyZSBwcmljZVwiXG4gICAgICAgICAgICAgIGRhdGE9e251bWJlcldpdGhTcGFjZXMoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgKHNob3J0Y29sbGF0ZXJhbCArXG4gICAgICAgICAgICAgICAgICAgIChzaG9ydHNpemUgKiAocHJpY2VzIC0gc2hvcnRhdmdwcmljZSkpIC8gcHJpY2VzKSAvXG4gICAgICAgICAgICAgICAgICB0b3RhbHN1cHBseVxuICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB1bml0eT17XCIkXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIlRleHQiLCJCb3giLCJIU3RhY2siLCJTdGFjayIsIlN3aXRjaCIsIkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlQ29sb3JNb2RlIiwiSWNvbkJ1dHRvbiIsImNvbG9yTW9kZSIsIlRhYmxlIiwiVGhlYWQiLCJUciIsIlRkIiwiVGJvZHkiLCJUaCIsIkljb24iLCJBQklTIiwiQUREUkVTUyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImV0aGVycyIsInRpbWVzdGFtcGNvbnZlcnQiLCJGYVdhbGxldCIsIkZhQ29pbnMiLCJIaUN1cnJlbmN5RG9sbGFyIiwiQnNGaWxsQmFyQ2hhcnRGaWxsIiwiQnNGaWxsQXJyb3dVcENpcmNsZUZpbGwiLCJCc0ZpbGxBcnJvd0Rvd25DaXJjbGVGaWxsIiwiRmlBY3Rpdml0eSIsIk1pbmljYXJkIiwibnVtYmVyV2l0aFNwYWNlcyIsIkRhdGEiLCJ0b3RhbHN1cHBseSIsInNoYXJlcHJpY2UiLCJuYXZjYWxjdWxhdGVkIiwidmF1bHR1c2RjIiwibG9uZ3NpemUiLCJsb25nY29sbGF0ZXJhbCIsImxvbmdkZWx0YSIsImxvbmdsZXZlcmFnZSIsImxvbmdhdmdwcmljZSIsImluY3JlYXNlUG9zaXRpb24iLCJkZWNyZWFzZVBvc2l0aW9uIiwic2hvcnRzaXplIiwic2hvcnRjb2xsYXRlcmFsIiwic2hvcnRhdmdwcmljZSIsInNob3J0ZGVsdGEiLCJzaG9ydGxldmVyYWdlIiwiZXhwbyIsInByaWNlcyIsInNldFByaWNlcyIsImxhdW5jaGVkIiwic2V0TGF1bmNoZWQiLCJnZXRHbXhQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJpY2Vmb3JtYXQiLCJwYXJzZUludCIsIldFVEgiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlIiwiZmluYWxseSIsInNldFRpbWVvdXQiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInRpdGxlIiwiZGF0YSIsInVuaXR5IiwidG9GaXhlZCIsImljb24iLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});