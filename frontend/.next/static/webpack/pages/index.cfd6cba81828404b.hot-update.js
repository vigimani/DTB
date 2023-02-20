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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            console.log(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]);\n            setPrices(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 10000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            getGmxPrices();\n            setLaunched(true);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                w: \"100%\",\n                children: prices\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                w: \"100%\",\n                children: [\n                    \"Total \",\n                    prices\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Data, \"B9Hk/Qsm+83FQ3UAppfnG3CAxAE=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQW1CMEI7QUFDMEI7QUFDUjtBQUNvQjtBQUNoQztBQUN5QjtBQUNpQjtBQUUzRCxTQUFTMEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFdBQVUsRUFDVkMsY0FBYSxFQUNiQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsZUFBYyxFQUNkQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLGlCQUFnQixFQUNoQkMsVUFBUyxFQUNUQyxnQkFBZSxFQUNmQyxjQUFhLEVBQ2JDLFdBQVUsRUFDVkMsY0FBYSxFQUNkLEdBQUdwQiw2RUFBbUJBO0lBRXZCLE1BQU0sQ0FBQ3FCLFFBQVFDLFVBQVUsR0FBR3hCLCtDQUFRQTtJQUNwQyxNQUFNLENBQUN5QixVQUFVQyxZQUFZLEdBQUcxQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlDLGVBQWUyQixlQUFlO1FBQzVCLE1BQU1DLE1BQU0sNkJBQ1RDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiRSxRQUFRQyxHQUFHLENBQUNILEdBQUcsQ0FBQy9CLHVEQUFZLENBQUM7WUFDN0J5QixVQUFVTSxHQUFHLENBQUMvQix1REFBWSxDQUFDO1FBQzdCLEdBQ0NvQyxLQUFLLENBQUMsQ0FBQ0MsSUFBTUosUUFBUUMsR0FBRyxDQUFDRyxJQUN6QkMsT0FBTyxDQUFDLElBQU07WUFDYkMsV0FBV1gsY0FBYztRQUMzQjtJQUNKO0lBRUExQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDd0IsVUFBVTtZQUNiRTtZQUNBRCxZQUFZLElBQUk7UUFDbEIsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQzdDLGtEQUFJQTtnQkFBQzBELEdBQUU7MEJBQVFoQjs7Ozs7OzBCQUNoQiw4REFBQzFDLGtEQUFJQTtnQkFBQzBELEdBQUU7O29CQUFPO29CQUFPaEI7Ozs7Ozs7OztBQUc1QixDQUFDO0dBakR1QmpCOztRQWtCbEJKLHlFQUFtQkE7OztLQWxCREkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL0RhdGEuanN4PzZlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgSFN0YWNrLFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG4gIEljb25CdXR0b24sXG4gIGNvbG9yTW9kZSxcbiAgVGFibGUsXG4gIFRoZWFkLFxuICBUcixcbiAgVGQsXG4gIFRib2R5LFxuICBUaCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEFCSVMsIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQGNvbmZpZ1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB0aW1lc3RhbXBjb252ZXJ0IH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuaW1wb3J0IHsgdXNlV2ViU29ja2V0IH0gZnJvbSBcInJlYWN0LXVzZS13ZWJzb2NrZXQvZGlzdC9saWIvdXNlLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhKCkge1xuICBjb25zdCB7XG4gICAgdG90YWxzdXBwbHksXG4gICAgc2hhcmVwcmljZSxcbiAgICBuYXZjYWxjdWxhdGVkLFxuICAgIHZhdWx0dXNkYyxcbiAgICBsb25nc2l6ZSxcbiAgICBsb25nY29sbGF0ZXJhbCxcbiAgICBsb25nZGVsdGEsXG4gICAgbG9uZ2xldmVyYWdlLFxuICAgIGxvbmdhdmdwcmljZSxcbiAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgc2hvcnRzaXplLFxuICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICBzaG9ydGF2Z3ByaWNlLFxuICAgIHNob3J0ZGVsdGEsXG4gICAgc2hvcnRsZXZlcmFnZVxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuXG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbGF1bmNoZWQsIHNldExhdW5jaGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEdteFByaWNlcygpIHtcbiAgICBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdteC5pby9wcmljZXNcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc1tBRERSRVNTLldFVEhdKTtcbiAgICAgICAgc2V0UHJpY2VzKHJlc1tBRERSRVNTLldFVEhdKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZ2V0R214UHJpY2VzLCAxMDAwMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsYXVuY2hlZCkge1xuICAgICAgZ2V0R214UHJpY2VzKClcbiAgICAgIHNldExhdW5jaGVkKHRydWUpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3PVwiMTAwJVwiPntwcmljZXN9PC9GbGV4PlxuICAgICAgPEZsZXggdz1cIjEwMCVcIj5Ub3RhbCB7cHJpY2VzfTwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZsZXgiLCJUZXh0IiwiQm94IiwiSFN0YWNrIiwiU3RhY2siLCJTd2l0Y2giLCJCdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZUNvbG9yTW9kZSIsIkljb25CdXR0b24iLCJjb2xvck1vZGUiLCJUYWJsZSIsIlRoZWFkIiwiVHIiLCJUZCIsIlRib2R5IiwiVGgiLCJBQklTIiwiQUREUkVTUyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImV0aGVycyIsInRpbWVzdGFtcGNvbnZlcnQiLCJ1c2VXZWJTb2NrZXQiLCJEYXRhIiwidG90YWxzdXBwbHkiLCJzaGFyZXByaWNlIiwibmF2Y2FsY3VsYXRlZCIsInZhdWx0dXNkYyIsImxvbmdzaXplIiwibG9uZ2NvbGxhdGVyYWwiLCJsb25nZGVsdGEiLCJsb25nbGV2ZXJhZ2UiLCJsb25nYXZncHJpY2UiLCJpbmNyZWFzZVBvc2l0aW9uIiwiZGVjcmVhc2VQb3NpdGlvbiIsInNob3J0c2l6ZSIsInNob3J0Y29sbGF0ZXJhbCIsInNob3J0YXZncHJpY2UiLCJzaG9ydGRlbHRhIiwic2hvcnRsZXZlcmFnZSIsInByaWNlcyIsInNldFByaWNlcyIsImxhdW5jaGVkIiwic2V0TGF1bmNoZWQiLCJnZXRHbXhQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIldFVEgiLCJjYXRjaCIsImUiLCJmaW5hbGx5Iiwic2V0VGltZW91dCIsInciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});