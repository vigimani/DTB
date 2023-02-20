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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Minicard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Minicard */ \"./components/user/Minicard.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            // let price = (res[ADDRESS.WETH])\n            let priceformat = parseInt(res[_utils_config__WEBPACK_IMPORTED_MODULE_1__.ADDRESS.WETH]) / 10 ** 30;\n            console.log(priceformat);\n            setPrices(priceformat);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 100000);\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!launched) {\n            try {\n                getGmxPrices();\n                setLaunched(true);\n            } catch (e) {\n                console.log(\"error\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            direction: \"raw\",\n            justifyContent: space,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Minicard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"K34oNgzcD8t9i6/Fe46DYy6JPU4=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBb0IwQjtBQUMwQjtBQUNSO0FBQ29CO0FBQ2hDO0FBQ3lCO0FBQ2Y7QUFDUjtBQUVuQixTQUFTNEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFdBQVUsRUFDVkMsY0FBYSxFQUNiQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsZUFBYyxFQUNkQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLGlCQUFnQixFQUNoQkMsVUFBUyxFQUNUQyxnQkFBZSxFQUNmQyxjQUFhLEVBQ2JDLFdBQVUsRUFDVkMsY0FBYSxFQUNiQyxLQUFJLEVBQ0wsR0FBR3RCLDZFQUFtQkE7SUFFdkIsTUFBTSxDQUFDdUIsUUFBUUMsVUFBVSxHQUFHMUIsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQzJCLFVBQVVDLFlBQVksR0FBRzVCLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUMsZUFBZTZCLGVBQWU7UUFDNUIsTUFBTUMsTUFBTSw2QkFDVEMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ2Isa0NBQWtDO1lBQ2xDLElBQUlFLGNBQWNDLFNBQVNILEdBQUcsQ0FBQ2pDLHVEQUFZLENBQUMsSUFBSSxNQUFNO1lBQ3REc0MsUUFBUUMsR0FBRyxDQUFDSjtZQUNaUixVQUFVUTtRQUNaLEdBQ0NLLEtBQUssQ0FBQyxDQUFDQyxJQUFNSCxRQUFRQyxHQUFHLENBQUNFLElBQ3pCQyxPQUFPLENBQUMsSUFBTTtZQUNiQyxXQUFXYixjQUFjO1FBQzNCO0lBQ0o7SUFFQTVCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUMwQixVQUFVO1lBQ2IsSUFBSTtnQkFDRkU7Z0JBQ0FELFlBQVksSUFBSTtZQUNsQixFQUFFLE9BQU9ZLEdBQUc7Z0JBQ1ZILFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDMUQsa0RBQUlBO1lBQUMrRCxXQUFVO1lBQU1DLGdCQUFnQkM7OzhCQUNwQyw4REFBQ3ZDLGlEQUFRQTs7Ozs7OEJBQ1QsOERBQUNBLGlEQUFRQTs7Ozs7OEJBQ1QsOERBQUNBLGlEQUFRQTs7Ozs7OEJBQ1QsOERBQUNBLGlEQUFRQTs7Ozs7OEJBQ1QsOERBQUNBLGlEQUFRQTs7Ozs7Ozs7Ozs7O0FBMkNqQixDQUFDO0dBcEd1QkM7O1FBbUJsQkwseUVBQW1CQTs7O0tBbkJESyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3g/NmUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZSxcbiAgRmxleCxcbiAgVGV4dCxcbiAgQm94LFxuICBIU3RhY2ssXG4gIFN0YWNrLFxuICBTd2l0Y2gsXG4gIEJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZUNvbG9yTW9kZSxcbiAgSWNvbkJ1dHRvbixcbiAgY29sb3JNb2RlLFxuICBUYWJsZSxcbiAgVGhlYWQsXG4gIFRyLFxuICBUZCxcbiAgVGJvZHksXG4gIFRoLFxuICBJY29uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9Db250cmFjdENvbnRleHRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHRpbWVzdGFtcGNvbnZlcnQgfSBmcm9tIFwiQC91dGlscy91dGlsc2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBGYVdhbGxldCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IE1pbmljYXJkIGZyb20gXCIuL01pbmljYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGEoKSB7XG4gIGNvbnN0IHtcbiAgICB0b3RhbHN1cHBseSxcbiAgICBzaGFyZXByaWNlLFxuICAgIG5hdmNhbGN1bGF0ZWQsXG4gICAgdmF1bHR1c2RjLFxuICAgIGxvbmdzaXplLFxuICAgIGxvbmdjb2xsYXRlcmFsLFxuICAgIGxvbmdkZWx0YSxcbiAgICBsb25nbGV2ZXJhZ2UsXG4gICAgbG9uZ2F2Z3ByaWNlLFxuICAgIGluY3JlYXNlUG9zaXRpb24sXG4gICAgZGVjcmVhc2VQb3NpdGlvbixcbiAgICBzaG9ydHNpemUsXG4gICAgc2hvcnRjb2xsYXRlcmFsLFxuICAgIHNob3J0YXZncHJpY2UsXG4gICAgc2hvcnRkZWx0YSxcbiAgICBzaG9ydGxldmVyYWdlLFxuICAgIGV4cG8sXG4gIH0gPSB1c2VDb250cmFjdFByb3ZpZGVyKCk7XG5cbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsYXVuY2hlZCwgc2V0TGF1bmNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEdteFByaWNlcygpIHtcbiAgICBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdteC5pby9wcmljZXNcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vIGxldCBwcmljZSA9IChyZXNbQUREUkVTUy5XRVRIXSlcbiAgICAgICAgbGV0IHByaWNlZm9ybWF0ID0gcGFyc2VJbnQocmVzW0FERFJFU1MuV0VUSF0pIC8gMTAgKiogMzA7XG4gICAgICAgIGNvbnNvbGUubG9nKHByaWNlZm9ybWF0KTtcbiAgICAgICAgc2V0UHJpY2VzKHByaWNlZm9ybWF0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGdldEdteFByaWNlcywgMTAwMDAwKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxhdW5jaGVkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBnZXRHbXhQcmljZXMoKTtcbiAgICAgICAgc2V0TGF1bmNoZWQodHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwicmF3XCIganVzdGlmeUNvbnRlbnQ9e3NwYWNlfT5cbiAgICAgICAgPE1pbmljYXJkIC8+XG4gICAgICAgIDxNaW5pY2FyZCAvPlxuICAgICAgICA8TWluaWNhcmQgLz5cbiAgICAgICAgPE1pbmljYXJkIC8+XG4gICAgICAgIDxNaW5pY2FyZCAvPlxuICAgICAgPC9GbGV4PlxuICAgICAgey8qIHtleHBvID09IDAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5FeHBvc2l0aW9uIDogTmV1dHJhbCA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5MZXZlcmFnZSA6IDA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFBMUCBzaGFyZSBwcmljZSA6IHt0b3RhbHN1cHBseSA9PSAwID8gMCA6IHZhdWx0dXNkYyAvIHRvdGFsc3VwcGx5fVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlRWTCA6IHt2YXVsdHVzZGN9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IGV4cG8gPT0gMSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBMb25nPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiB7bG9uZ2xldmVyYWdlfTwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgVFZMIDp7XCIgXCJ9XG4gICAgICAgICAgICB7bG9uZ2NvbGxhdGVyYWwgKyAobG9uZ3NpemUgKiAobG9uZ2F2Z3ByaWNlIC0gcHJpY2VzKSkgLyBwcmljZXN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBTaGFyZSBQcmljZSA6e1wiIFwifVxuICAgICAgICAgICAgeyhsb25nY29sbGF0ZXJhbCArIChsb25nc2l6ZSAqIChsb25nYXZncHJpY2UgLSBwcmljZXMpKSAvIHByaWNlcykvdG90YWxzdXBwbHl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkV4cG9zaXRpb24gOiBTaG9ydDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDoge3Nob3J0bGV2ZXJhZ2V9PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBUVkwgOntcIiBcIn1cbiAgICAgICAgICAgIHtzaG9ydGNvbGxhdGVyYWwgKyAoc2hvcnRzaXplICogKHByaWNlcy1zaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBTaGFyZSBQcmljZSA6e1wiIFwifVxuICAgICAgICAgICAgeyhzaG9ydGNvbGxhdGVyYWwgKyAoc2hvcnRzaXplICogKHByaWNlcy1zaG9ydGF2Z3ByaWNlKSkgLyBwcmljZXMpL3RvdGFsc3VwcGx5fVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICl9ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIlRleHQiLCJCb3giLCJIU3RhY2siLCJTdGFjayIsIlN3aXRjaCIsIkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlQ29sb3JNb2RlIiwiSWNvbkJ1dHRvbiIsImNvbG9yTW9kZSIsIlRhYmxlIiwiVGhlYWQiLCJUciIsIlRkIiwiVGJvZHkiLCJUaCIsIkljb24iLCJBQklTIiwiQUREUkVTUyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImV0aGVycyIsInRpbWVzdGFtcGNvbnZlcnQiLCJGYVdhbGxldCIsIk1pbmljYXJkIiwiRGF0YSIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJleHBvIiwicHJpY2VzIiwic2V0UHJpY2VzIiwibGF1bmNoZWQiLCJzZXRMYXVuY2hlZCIsImdldEdteFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwcmljZWZvcm1hdCIsInBhcnNlSW50IiwiV0VUSCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJmaW5hbGx5Iiwic2V0VGltZW91dCIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50Iiwic3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});