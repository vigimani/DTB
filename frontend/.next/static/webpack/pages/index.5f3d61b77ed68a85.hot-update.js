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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let priceformat = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) / 10 ** 30;\n            console.log(priceformat);\n            setPrices(priceformat);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            boxShadow: \"md\",\n            p: \"25px\",\n            bg: \"white\",\n            borderRadius: \"30px\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                w: \"100%\",\n                direction: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        color: \"#594B7E\",\n                        fontFamily: \"Kanit\",\n                        fontSize: \"lg\",\n                        fontWeight: \"bold\",\n                        mb: \"6px\",\n                        children: \"Data\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                        children: \"test\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 81,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 80,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQW1CMEI7QUFDMEI7QUFDUjtBQUNvQjtBQUNoQztBQUN5QjtBQUNpQjtBQUUzRCxTQUFTMEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFdBQVUsRUFDVkMsY0FBYSxFQUNiQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsZUFBYyxFQUNkQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLGlCQUFnQixFQUNoQkMsVUFBUyxFQUNUQyxnQkFBZSxFQUNmQyxjQUFhLEVBQ2JDLFdBQVUsRUFDVkMsY0FBYSxFQUNiQyxLQUFJLEVBQ0wsR0FBR3JCLDZFQUFtQkE7SUFFdkIsTUFBTSxDQUFDc0IsUUFBUUMsVUFBVSxHQUFHekIsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQzBCLFVBQVVDLFlBQVksR0FBRzNCLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUMsZUFBZTRCLGVBQWU7UUFDNUIsTUFBTUMsTUFBTSw2QkFDVEMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ2Isa0NBQWtDO1lBQ2xDLElBQUlFLGNBQWNDLFNBQVNILEdBQUcsQ0FBQ2hDLHVEQUFZLENBQUMsSUFBRSxNQUFJO1lBQ2xEcUMsUUFBUUMsR0FBRyxDQUFDSjtZQUNaUixVQUFVUTtRQUNaLEdBQ0NLLEtBQUssQ0FBQyxDQUFDQyxJQUFNSCxRQUFRQyxHQUFHLENBQUNFLElBQ3pCQyxPQUFPLENBQUMsSUFBTTtZQUNiQyxXQUFXYixjQUFjO1FBQzNCO0lBQ0o7SUFFQTNCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUN5QixVQUFVO1lBQ2IsSUFBSTtnQkFDRkU7Z0JBQ0FELFlBQVksSUFBSTtZQUNsQixFQUFFLE9BQU9ZLEdBQUc7Z0JBQ1ZILFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHLDRFQUFDdEQsaURBQUdBO1lBQUMyRCxXQUFXO1lBQU1DLEdBQUU7WUFBT0MsSUFBRztZQUFRQyxjQUFjO3NCQUNyRCw0RUFBQ2hFLGtEQUFJQTtnQkFBQ2lFLEdBQUU7Z0JBQU9DLFdBQVU7O2tDQUN2Qiw4REFBQ2xFLGtEQUFJQTt3QkFDSG1FLE9BQU07d0JBQ05DLFlBQVk7d0JBQ1pDLFVBQVM7d0JBQ1RDLFlBQVc7d0JBQ1hDLElBQUc7a0NBQ0o7Ozs7OztrQ0FHRCw4REFBQ3RFLGtEQUFJQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENsQixDQUFDO0dBM0d1QndCOztRQW1CbEJKLHlFQUFtQkE7OztLQW5CREkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL0RhdGEuanN4PzZlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgSFN0YWNrLFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG4gIEljb25CdXR0b24sXG4gIGNvbG9yTW9kZSxcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUcixcbiAgVGQsXG4gIFRib2R5LFxuICBUaCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEFCSVMsIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQGNvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB0aW1lc3RhbXBjb252ZXJ0IH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuaW1wb3J0IHsgdXNlV2ViU29ja2V0IH0gZnJvbSBcInJlYWN0LXVzZS13ZWJzb2NrZXQvZGlzdC9saWIvdXNlLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhKCkge1xuICBjb25zdCB7XG4gICAgdG90YWxzdXBwbHksXG4gICAgc2hhcmVwcmljZSxcbiAgICBuYXZjYWxjdWxhdGVkLFxuICAgIHZhdWx0dXNkYyxcbiAgICBsb25nc2l6ZSxcbiAgICBsb25nY29sbGF0ZXJhbCxcbiAgICBsb25nZGVsdGEsXG4gICAgbG9uZ2xldmVyYWdlLFxuICAgIGxvbmdhdmdwcmljZSxcbiAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgc2hvcnRzaXplLFxuICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICBzaG9ydGF2Z3ByaWNlLFxuICAgIHNob3J0ZGVsdGEsXG4gICAgc2hvcnRsZXZlcmFnZSxcbiAgICBleHBvLFxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuXG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbGF1bmNoZWQsIHNldExhdW5jaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRHbXhQcmljZXMoKSB7XG4gICAgYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyBsZXQgcHJpY2UgPSAocmVzW0FERFJFU1MuV0VUSF0pXG4gICAgICAgIGxldCBwcmljZWZvcm1hdCA9IHBhcnNlSW50KHJlc1tBRERSRVNTLldFVEhdKS8xMCoqMzBcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2Vmb3JtYXQpO1xuICAgICAgICBzZXRQcmljZXMocHJpY2Vmb3JtYXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZ2V0R214UHJpY2VzLCAxMDAwMDApO1xuICAgICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGF1bmNoZWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdldEdteFByaWNlcygpO1xuICAgICAgICBzZXRMYXVuY2hlZCh0cnVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgPEJveCBib3hTaGFkb3c9e1wibWRcIn0gcD1cIjI1cHhcIiBiZz1cIndoaXRlXCIgYm9yZGVyUmFkaXVzPXtcIjMwcHhcIn0+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIGNvbG9yPVwiIzU5NEI3RVwiXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiS2FuaXRcIn1cbiAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgbWI9XCI2cHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEYXRhXG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8VGV4dD50ZXN0PC9UZXh0PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICB7Lyoge2V4cG8gPT0gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBOZXV0cmFsIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDogMDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgUExQIHNoYXJlIHByaWNlIDoge3RvdGFsc3VwcGx5ID09IDAgPyAwIDogdmF1bHR1c2RjIC8gdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+VFZMIDoge3ZhdWx0dXNkY308L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgVG90YWwgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApIDogZXhwbyA9PSAxID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IExvbmc8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5MZXZlcmFnZSA6IHtsb25nbGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBUVkwgOntcIiBcIn1cbiAgICAgICAgICAgIHtsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFNoYXJlIFByaWNlIDp7XCIgXCJ9XG4gICAgICAgICAgICB7KGxvbmdjb2xsYXRlcmFsICsgKGxvbmdzaXplICogKGxvbmdhdmdwcmljZSAtIHByaWNlcykpIC8gcHJpY2VzKS90b3RhbHN1cHBseX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgVG90YWwgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IFNob3J0PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiB7c2hvcnRsZXZlcmFnZX08L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFRWTCA6e1wiIFwifVxuICAgICAgICAgICAge3Nob3J0Y29sbGF0ZXJhbCArIChzaG9ydHNpemUgKiAocHJpY2VzLXNob3J0YXZncHJpY2UpKSAvIHByaWNlc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFNoYXJlIFByaWNlIDp7XCIgXCJ9XG4gICAgICAgICAgICB7KHNob3J0Y29sbGF0ZXJhbCArIChzaG9ydHNpemUgKiAocHJpY2VzLXNob3J0YXZncHJpY2UpKSAvIHByaWNlcykvdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKX0gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGQiLCJUYm9keSIsIlRoIiwiQUJJUyIsIkFERFJFU1MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRyYWN0UHJvdmlkZXIiLCJldGhlcnMiLCJ0aW1lc3RhbXBjb252ZXJ0IiwidXNlV2ViU29ja2V0IiwiRGF0YSIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJleHBvIiwicHJpY2VzIiwic2V0UHJpY2VzIiwibGF1bmNoZWQiLCJzZXRMYXVuY2hlZCIsImdldEdteFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcmljZWZvcm1hdCIsInBhcnNlSW50IiwiV0VUSCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJmaW5hbGx5Iiwic2V0VGltZW91dCIsImJveFNoYWRvdyIsInAiLCJiZyIsImJvcmRlclJhZGl1cyIsInciLCJkaXJlY3Rpb24iLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});