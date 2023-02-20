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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let priceformat = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) / 10 ** 30;\n            console.log(priceformat);\n            setPrices(priceformat);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            w: \"18%\",\n            boxShadow: \"md\",\n            p: \"20px\",\n            bg: \"white\",\n            borderRadius: \"20px\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    direction: \"column\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            color: \"gray.400\",\n                            fontFamily: \"Kanit\",\n                            fontSize: \"xs\",\n                            fontWeight: \"bold\",\n                            children: \"Data\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            fontFamily: \"Kanit\",\n                            fontSize: \"xl\",\n                            fontWeight: \"bold\",\n                            children: \"test\"\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    mr: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        h: \"30px\",\n                        w: \"30px\",\n                        me: \"12px\",\n                        borderRadius: \"10px\",\n                        bgColor: \"#9FACE6\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        alignContent: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n                            mt: \"5px\",\n                            color: \"white\",\n                            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaWallet\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 81,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBb0IwQjtBQUMwQjtBQUNSO0FBQ29CO0FBQ2hDO0FBQ3lCO0FBQ2Y7QUFFM0IsU0FBUzJCLE9BQU87O0lBQzdCLE1BQU0sRUFDSkMsWUFBVyxFQUNYQyxXQUFVLEVBQ1ZDLGNBQWEsRUFDYkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1JDLGVBQWMsRUFDZEMsVUFBUyxFQUNUQyxhQUFZLEVBQ1pDLGFBQVksRUFDWkMsaUJBQWdCLEVBQ2hCQyxpQkFBZ0IsRUFDaEJDLFVBQVMsRUFDVEMsZ0JBQWUsRUFDZkMsY0FBYSxFQUNiQyxXQUFVLEVBQ1ZDLGNBQWEsRUFDYkMsS0FBSSxFQUNMLEdBQUdyQiw2RUFBbUJBO0lBRXZCLE1BQU0sQ0FBQ3NCLFFBQVFDLFVBQVUsR0FBR3pCLCtDQUFRQTtJQUNwQyxNQUFNLENBQUMwQixVQUFVQyxZQUFZLEdBQUczQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDLGVBQWU0QixlQUFlO1FBQzVCLE1BQU1DLE1BQU0sNkJBQ1RDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiLGtDQUFrQztZQUNsQyxJQUFJRSxjQUFjQyxTQUFTSCxHQUFHLENBQUNoQyx1REFBWSxDQUFDLElBQUUsTUFBSTtZQUNsRHFDLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDWlIsVUFBVVE7UUFDWixHQUNDSyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUgsUUFBUUMsR0FBRyxDQUFDRSxJQUN6QkMsT0FBTyxDQUFDLElBQU07WUFDYkMsV0FBV2IsY0FBYztRQUMzQjtJQUNKO0lBRUEzQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDeUIsVUFBVTtZQUNiLElBQUk7Z0JBQ0ZFO2dCQUNBRCxZQUFZLElBQUk7WUFDbEIsRUFBRSxPQUFPWSxHQUFHO2dCQUNWSCxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRyw0RUFBQ3ZELGlEQUFHQTtZQUFDNEQsR0FBRTtZQUFNQyxXQUFXO1lBQU1DLEdBQUU7WUFBT0MsSUFBRztZQUFRQyxjQUFjOzs4QkFDN0QsOERBQUNsRSxrREFBSUE7b0JBQUNtRSxXQUFVOztzQ0FDZCw4REFBQ25FLGtEQUFJQTs0QkFDSG9FLE9BQU07NEJBQ05DLFlBQVk7NEJBQ1pDLFVBQVM7NEJBQ1RDLFlBQVc7c0NBQ1o7Ozs7OztzQ0FHRCw4REFBQ3RFLGtEQUFJQTs0QkFDSG9FLFlBQVk7NEJBQ1pDLFVBQVM7NEJBQ1RDLFlBQVc7c0NBQU87Ozs7Ozs7Ozs7Ozs4QkFFdEIsOERBQUN2RSxrREFBSUE7b0JBQUN3RSxFQUFFOzhCQUNBLDRFQUFDdEUsaURBQUdBO3dCQUNGdUUsR0FBRTt3QkFDRlgsR0FBRTt3QkFDRlksSUFBRzt3QkFDSFIsY0FBYTt3QkFDYlMsU0FBUTt3QkFDUkMsWUFBWTt3QkFDWkMsZ0JBQWU7d0JBQ2ZDLGNBQWM7a0NBRWQsNEVBQUM3RCxrREFBSUE7NEJBQUM4RCxJQUFHOzRCQUFNWCxPQUFNOzRCQUFRWSxJQUFJdkQsb0RBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDN0QsQ0FBQztHQTNIdUJDOztRQW1CbEJKLHlFQUFtQkE7OztLQW5CREkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL0RhdGEuanN4PzZlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgSFN0YWNrLFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG4gIEljb25CdXR0b24sXG4gIGNvbG9yTW9kZSxcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUcixcbiAgVGQsXG4gIFRib2R5LFxuICBUaCxcbiAgSWNvblxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9Db250cmFjdENvbnRleHRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHRpbWVzdGFtcGNvbnZlcnQgfSBmcm9tIFwiQC91dGlscy91dGlsc2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBGYVdhbGxldCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhKCkge1xuICBjb25zdCB7XG4gICAgdG90YWxzdXBwbHksXG4gICAgc2hhcmVwcmljZSxcbiAgICBuYXZjYWxjdWxhdGVkLFxuICAgIHZhdWx0dXNkYyxcbiAgICBsb25nc2l6ZSxcbiAgICBsb25nY29sbGF0ZXJhbCxcbiAgICBsb25nZGVsdGEsXG4gICAgbG9uZ2xldmVyYWdlLFxuICAgIGxvbmdhdmdwcmljZSxcbiAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgc2hvcnRzaXplLFxuICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICBzaG9ydGF2Z3ByaWNlLFxuICAgIHNob3J0ZGVsdGEsXG4gICAgc2hvcnRsZXZlcmFnZSxcbiAgICBleHBvLFxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuXG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbGF1bmNoZWQsIHNldExhdW5jaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRHbXhQcmljZXMoKSB7XG4gICAgYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyBsZXQgcHJpY2UgPSAocmVzW0FERFJFU1MuV0VUSF0pXG4gICAgICAgIGxldCBwcmljZWZvcm1hdCA9IHBhcnNlSW50KHJlc1tBRERSRVNTLldFVEhdKS8xMCoqMzBcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2Vmb3JtYXQpO1xuICAgICAgICBzZXRQcmljZXMocHJpY2Vmb3JtYXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZ2V0R214UHJpY2VzLCAxMDAwMDApO1xuICAgICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGF1bmNoZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdldEdteFByaWNlcygpO1xuICAgICAgICBzZXRMYXVuY2hlZCh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgPEJveCB3PVwiMTglXCIgYm94U2hhZG93PXtcIm1kXCJ9IHA9XCIyMHB4XCIgYmc9XCJ3aGl0ZVwiIGJvcmRlclJhZGl1cz17XCIyMHB4XCJ9PlxuICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgY29sb3I9XCJncmF5LjQwMFwiXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiS2FuaXRcIn1cbiAgICAgICAgICAgICAgZm9udFNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGF0YVxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPFRleHQgXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiS2FuaXRcIn1cbiAgICAgICAgICAgICAgZm9udFNpemU9XCJ4bFwiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCI+dGVzdDwvVGV4dD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggbXI+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgdz1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICBtZT1cIjEycHhcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cIiM5RkFDRTZcIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbXQ9XCI1cHhcIiBjb2xvcj1cIndoaXRlXCIgYXM9e0ZhV2FsbGV0fS8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICAgey8qIHtleHBvID09IDAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5FeHBvc2l0aW9uIDogTmV1dHJhbCA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5MZXZlcmFnZSA6IDA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFBMUCBzaGFyZSBwcmljZSA6IHt0b3RhbHN1cHBseSA9PSAwID8gMCA6IHZhdWx0dXNkYyAvIHRvdGFsc3VwcGx5fVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlRWTCA6IHt2YXVsdHVzZGN9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IGV4cG8gPT0gMSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBMb25nPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiB7bG9uZ2xldmVyYWdlfTwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgVFZMIDp7XCIgXCJ9XG4gICAgICAgICAgICB7bG9uZ2NvbGxhdGVyYWwgKyAobG9uZ3NpemUgKiAobG9uZ2F2Z3ByaWNlIC0gcHJpY2VzKSkgLyBwcmljZXN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBTaGFyZSBQcmljZSA6e1wiIFwifVxuICAgICAgICAgICAgeyhsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlcykvdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBTaG9ydDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDoge3Nob3J0bGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBUVkwgOntcIiBcIn1cbiAgICAgICAgICAgIHtzaG9ydGNvbGxhdGVyYWwgKyAoc2hvcnRzaXplICogKHByaWNlcy1zaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBTaGFyZSBQcmljZSA6e1wiIFwifVxuICAgICAgICAgICAgeyhzaG9ydGNvbGxhdGVyYWwgKyAoc2hvcnRzaXplICogKHByaWNlcy1zaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXMpL3RvdGFsc3VwcGx5fVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICl9ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIlRleHQiLCJCb3giLCJIU3RhY2siLCJTdGFjayIsIlN3aXRjaCIsIkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlQ29sb3JNb2RlIiwiSWNvbkJ1dHRvbiIsImNvbG9yTW9kZSIsIlRhYmxlIiwiVGhlYWQiLCJUciIsIlRkIiwiVGJvZHkiLCJUaCIsIkljb24iLCJBQklTIiwiQUREUkVTUyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImV0aGVycyIsInRpbWVzdGFtcGNvbnZlcnQiLCJGYVdhbGxldCIsIkRhdGEiLCJ0b3RhbHN1cHBseSIsInNoYXJlcHJpY2UiLCJuYXZjYWxjdWxhdGVkIiwidmF1bHR1c2RjIiwibG9uZ3NpemUiLCJsb25nY29sbGF0ZXJhbCIsImxvbmdkZWx0YSIsImxvbmdsZXZlcmFnZSIsImxvbmdhdmdwcmljZSIsImluY3JlYXNlUG9zaXRpb24iLCJkZWNyZWFzZVBvc2l0aW9uIiwic2hvcnRzaXplIiwic2hvcnRjb2xsYXRlcmFsIiwic2hvcnRhdmdwcmljZSIsInNob3J0ZGVsdGEiLCJzaG9ydGxldmVyYWdlIiwiZXhwbyIsInByaWNlcyIsInNldFByaWNlcyIsImxhdW5jaGVkIiwic2V0TGF1bmNoZWQiLCJnZXRHbXhQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJpY2Vmb3JtYXQiLCJwYXJzZUludCIsIldFVEgiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlIiwiZmluYWxseSIsInNldFRpbWVvdXQiLCJ3IiwiYm94U2hhZG93IiwicCIsImJnIiwiYm9yZGVyUmFkaXVzIiwiZGlyZWN0aW9uIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibXIiLCJoIiwibWUiLCJiZ0NvbG9yIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwibXQiLCJhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});