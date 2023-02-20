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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let pric = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) * 10;\n            console.log();\n            setPrices(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: expo == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Exposition : Neutral \"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Leverage : 0\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP share price : \",\n                        totalsupply == 0 ? 0 : vaultusdc / totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"TVL : \",\n                        vaultusdc\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP Total supply : \",\n                        totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : expo == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Exposition : Long\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"Leverage : \",\n                        longleverage\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"prices : \",\n                        prices\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP share price :\",\n                        \" \",\n                        prices == \"\" ? 0 : longcollateral + longsize * (longavgprice - prices) / prices\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"Avg price : \",\n                        longavgprice\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"TVL :\",\n                        \" \",\n                        totalsupply * (longcollateral + longsize * (longavgprice - prices) / prices)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP Total supply : \",\n                        totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: \"Exposition : Short\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"Leverage : \",\n                        shortleverage\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP share price :\",\n                        \" \",\n                        shortcollateral + shortsize * (prices - shortavgprice) / prices\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"TVL :\",\n                        \" \",\n                        totalsupply * (shortcollateral + shortsize * (prices - shortavgprice) / prices)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    w: \"100%\",\n                    children: [\n                        \"PLP Total supply : \",\n                        totalsupply\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBQzFCLGtEQUFJQTtvQkFBQzZELEdBQUU7OEJBQU87Ozs7Ozs4QkFDZiw4REFBQzdELGtEQUFJQTtvQkFBQzZELEdBQUU7O3dCQUFPO3dCQUFZcEI7Ozs7Ozs7OEJBQzNCLDhEQUFDekMsa0RBQUlBO29CQUFDNkQsR0FBRTs7d0JBQU87d0JBQ0s7d0JBQ2pCdkIsa0JBQWtCLFlBQWNLLENBQUFBLFNBQVNKLGFBQVksSUFBTUk7Ozs7Ozs7OEJBRTlELDhEQUFDM0Msa0RBQUlBO29CQUFDNkQsR0FBRTs7d0JBQU87d0JBQ1A7d0JBQ0xuQyxjQUNFWSxDQUFBQSxrQkFDQyxZQUFjSyxDQUFBQSxTQUFTSixhQUFZLElBQU1JLE1BQUs7Ozs7Ozs7OEJBRXBELDhEQUFDM0Msa0RBQUlBO29CQUFDNkQsR0FBRTs7d0JBQU87d0JBQW9CbkM7Ozs7Ozs7O3dCQUV0Qzs7QUFHUCxDQUFDO0dBcEd1QkQ7O1FBbUJsQkoseUVBQW1CQTs7O0tBbkJESSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3g/NmUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZSxcbiAgRmxleCxcbiAgVGV4dCxcbiAgQm94LFxuICBIU3RhY2ssXG4gIFN0YWNrLFxuICBTd2l0Y2gsXG4gIEJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZUNvbG9yTW9kZSxcbiAgSWNvbkJ1dHRvbixcbiAgY29sb3JNb2RlLFxuICBUYWJsZSxcbiAgVGhlYWQsXG4gIFRyLFxuICBUZCxcbiAgVGJvZHksXG4gIFRoLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9Db250cmFjdENvbnRleHRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHRpbWVzdGFtcGNvbnZlcnQgfSBmcm9tIFwiQC91dGlscy91dGlsc2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyB1c2VXZWJTb2NrZXQgfSBmcm9tIFwicmVhY3QtdXNlLXdlYnNvY2tldC9kaXN0L2xpYi91c2Utd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGEoKSB7XG4gIGNvbnN0IHtcbiAgICB0b3RhbHN1cHBseSxcbiAgICBzaGFyZXByaWNlLFxuICAgIG5hdmNhbGN1bGF0ZWQsXG4gICAgdmF1bHR1c2RjLFxuICAgIGxvbmdzaXplLFxuICAgIGxvbmdjb2xsYXRlcmFsLFxuICAgIGxvbmdkZWx0YSxcbiAgICBsb25nbGV2ZXJhZ2UsXG4gICAgbG9uZ2F2Z3ByaWNlLFxuICAgIGluY3JlYXNlUG9zaXRpb24sXG4gICAgZGVjcmVhc2VQb3NpdGlvbixcbiAgICBzaG9ydHNpemUsXG4gICAgc2hvcnRjb2xsYXRlcmFsLFxuICAgIHNob3J0YXZncHJpY2UsXG4gICAgc2hvcnRkZWx0YSxcbiAgICBzaG9ydGxldmVyYWdlLFxuICAgIGV4cG8sXG4gIH0gPSB1c2VDb250cmFjdFByb3ZpZGVyKCk7XG5cbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsYXVuY2hlZCwgc2V0TGF1bmNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEdteFByaWNlcygpIHtcbiAgICBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdteC5pby9wcmljZXNcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGxldCBwcmljZSA9IChyZXNbQUREUkVTUy5XRVRIXSlcbiAgICAgICAgbGV0IHByaWMgPSBwYXJzZUludChyZXNbQUREUkVTUy5XRVRIXSkqMTBcbiAgICAgICAgY29uc29sZS5sb2coKTtcbiAgICAgICAgc2V0UHJpY2VzKHJlc1tBRERSRVNTLldFVEhdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGdldEdteFByaWNlcywgMTAwMDAwKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxhdW5jaGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBnZXRHbXhQcmljZXMoKTtcbiAgICAgICAgc2V0TGF1bmNoZWQodHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2V4cG8gPT0gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBOZXV0cmFsIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDogMDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgUExQIHNoYXJlIHByaWNlIDoge3RvdGFsc3VwcGx5ID09IDAgPyAwIDogdmF1bHR1c2RjIC8gdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+VFZMIDoge3ZhdWx0dXNkY308L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgVG90YWwgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApIDogZXhwbyA9PSAxID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IExvbmc8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5MZXZlcmFnZSA6IHtsb25nbGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+cHJpY2VzIDoge3ByaWNlc308L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFBMUCBzaGFyZSBwcmljZSA6e1wiIFwifVxuICAgICAgICAgICAge3ByaWNlcyA9PSBcIlwiXG4gICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICA6IGxvbmdjb2xsYXRlcmFsICsgKGxvbmdzaXplICogKGxvbmdhdmdwcmljZSAtIHByaWNlcykpIC8gcHJpY2VzfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkF2ZyBwcmljZSA6IHtsb25nYXZncHJpY2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBUVkwgOntcIiBcIn1cbiAgICAgICAgICAgIHt0b3RhbHN1cHBseSAqXG4gICAgICAgICAgICAgIChsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlcyl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBTaG9ydDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDoge3Nob3J0bGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBQTFAgc2hhcmUgcHJpY2UgOntcIiBcIn1cbiAgICAgICAgICAgIHtzaG9ydGNvbGxhdGVyYWwgKyAoc2hvcnRzaXplICogKHByaWNlcyAtIHNob3J0YXZncHJpY2UpKSAvIHByaWNlc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFRWTCA6e1wiIFwifVxuICAgICAgICAgICAge3RvdGFsc3VwcGx5ICpcbiAgICAgICAgICAgICAgKHNob3J0Y29sbGF0ZXJhbCArXG4gICAgICAgICAgICAgICAgKHNob3J0c2l6ZSAqIChwcmljZXMgLSBzaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXMpfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGQiLCJUYm9keSIsIlRoIiwiQUJJUyIsIkFERFJFU1MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRyYWN0UHJvdmlkZXIiLCJldGhlcnMiLCJ0aW1lc3RhbXBjb252ZXJ0IiwidXNlV2ViU29ja2V0IiwiRGF0YSIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJleHBvIiwicHJpY2VzIiwic2V0UHJpY2VzIiwibGF1bmNoZWQiLCJzZXRMYXVuY2hlZCIsImdldEdteFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcmljIiwicGFyc2VJbnQiLCJXRVRIIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZSIsImZpbmFsbHkiLCJzZXRUaW1lb3V0IiwidyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});