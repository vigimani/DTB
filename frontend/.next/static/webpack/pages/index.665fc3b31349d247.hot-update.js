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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { totalsupply , shareprice , navcalculated , vaultusdc , longsize , longcollateral , longdelta , longleverage , longavgprice , increasePosition , decreasePosition , shortsize , shortcollateral , shortavgprice , shortdelta , shortleverage , expo  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [launched, setLaunched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // async function getGmxPrices() {\n    //   await fetch(\"https://api.gmx.io/prices\")\n    //     .then((res) => res.json())\n    //     .then((res) => {\n    //       // let price = (res[ADDRESS.WETH])\n    //       console.log(res[ADDRESS.WETH]);\n    //       setPrices(res[ADDRESS.WETH]);\n    //     })\n    //     .catch((e) => console.log(e))\n    //     .finally(() => {\n    //       setTimeout(getGmxPrices, 100000);\n    //     });\n    // }\n    // useEffect(() => {\n    //   if (!launched) {\n    //     try {\n    //       getGmxPrices();\n    //       setLaunched(true);\n    //     } catch (e) {\n    //       console.log(\"error\");\n    //     }\n    //   }\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(Data, \"xSjfSXlHjGulUr6eLqadfkAUlc8=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBbUIwQjtBQUMwQjtBQUNSO0FBQ29CO0FBQ2hDO0FBQ3lCO0FBQ2lCO0FBRTNELFNBQVMwQixPQUFPOztJQUM3QixNQUFNLEVBQ0pDLFlBQVcsRUFDWEMsV0FBVSxFQUNWQyxjQUFhLEVBQ2JDLFVBQVMsRUFDVEMsU0FBUSxFQUNSQyxlQUFjLEVBQ2RDLFVBQVMsRUFDVEMsYUFBWSxFQUNaQyxhQUFZLEVBQ1pDLGlCQUFnQixFQUNoQkMsaUJBQWdCLEVBQ2hCQyxVQUFTLEVBQ1RDLGdCQUFlLEVBQ2ZDLGNBQWEsRUFDYkMsV0FBVSxFQUNWQyxjQUFhLEVBQ2JDLEtBQUksRUFDTCxHQUFHckIsNkVBQW1CQTtJQUV2QixNQUFNLENBQUNzQixRQUFRQyxVQUFVLEdBQUd6QiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDMEIsVUFBVUMsWUFBWSxHQUFHM0IsK0NBQVFBLENBQUMsS0FBSztJQUU5QyxrQ0FBa0M7SUFDbEMsNkNBQTZDO0lBQzdDLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsMkNBQTJDO0lBQzNDLHdDQUF3QztJQUN4QyxzQ0FBc0M7SUFDdEMsU0FBUztJQUNULG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLFVBQVU7SUFDVixJQUFJO0lBRUosb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixNQUFNO0lBQ04sVUFBVTtJQUVWLHFCQUNFO0FBaURKLENBQUM7R0FuR3VCTTs7UUFtQmxCSix5RUFBbUJBOzs7S0FuQkRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci9EYXRhLmpzeD82ZTM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEltYWdlLFxuICBGbGV4LFxuICBUZXh0LFxuICBCb3gsXG4gIEhTdGFjayxcbiAgU3RhY2ssXG4gIFN3aXRjaCxcbiAgQnV0dG9uLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgdXNlQ29sb3JNb2RlLFxuICBJY29uQnV0dG9uLFxuICBjb2xvck1vZGUsXG4gIFRhYmxlLFxuICBUaGVhZCxcbiAgVHIsXG4gIFRkLFxuICBUYm9keSxcbiAgVGgsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBBQklTLCBBRERSRVNTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0Bjb25maWdcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdGltZXN0YW1wY29udmVydCB9IGZyb20gXCJAL3V0aWxzL3V0aWxzZnVuY3Rpb25cIjtcbmltcG9ydCB7IHVzZVdlYlNvY2tldCB9IGZyb20gXCJyZWFjdC11c2Utd2Vic29ja2V0L2Rpc3QvbGliL3VzZS13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YSgpIHtcbiAgY29uc3Qge1xuICAgIHRvdGFsc3VwcGx5LFxuICAgIHNoYXJlcHJpY2UsXG4gICAgbmF2Y2FsY3VsYXRlZCxcbiAgICB2YXVsdHVzZGMsXG4gICAgbG9uZ3NpemUsXG4gICAgbG9uZ2NvbGxhdGVyYWwsXG4gICAgbG9uZ2RlbHRhLFxuICAgIGxvbmdsZXZlcmFnZSxcbiAgICBsb25nYXZncHJpY2UsXG4gICAgaW5jcmVhc2VQb3NpdGlvbixcbiAgICBkZWNyZWFzZVBvc2l0aW9uLFxuICAgIHNob3J0c2l6ZSxcbiAgICBzaG9ydGNvbGxhdGVyYWwsXG4gICAgc2hvcnRhdmdwcmljZSxcbiAgICBzaG9ydGRlbHRhLFxuICAgIHNob3J0bGV2ZXJhZ2UsXG4gICAgZXhwbyxcbiAgfSA9IHVzZUNvbnRyYWN0UHJvdmlkZXIoKTtcblxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xhdW5jaGVkLCBzZXRMYXVuY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gZ2V0R214UHJpY2VzKCkge1xuICAvLyAgIGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKVxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgICAgLy8gbGV0IHByaWNlID0gKHJlc1tBRERSRVNTLldFVEhdKVxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNbQUREUkVTUy5XRVRIXSk7XG4gIC8vICAgICAgIHNldFByaWNlcyhyZXNbQUREUkVTUy5XRVRIXSk7XG4gIC8vICAgICB9KVxuICAvLyAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgLy8gICAgIC5maW5hbGx5KCgpID0+IHtcbiAgLy8gICAgICAgc2V0VGltZW91dChnZXRHbXhQcmljZXMsIDEwMDAwMCk7XG4gIC8vICAgICB9KTtcbiAgLy8gfVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKCFsYXVuY2hlZCkge1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgZ2V0R214UHJpY2VzKCk7XG4gIC8vICAgICAgIHNldExhdW5jaGVkKHRydWUpO1xuICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiB7ZXhwbyA9PSAwID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IE5ldXRyYWwgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiAwPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG4gICAgICAgICAgICBQTFAgc2hhcmUgcHJpY2UgOiB7dG90YWxzdXBwbHkgPT0gMCA/IDAgOiB2YXVsdHVzZGMgLyB0b3RhbHN1cHBseX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5UVkwgOiB7dmF1bHR1c2RjfTwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlBMUCBUb3RhbCBzdXBwbHkgOiB7dG90YWxzdXBwbHl9PC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBleHBvID09IDEgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5FeHBvc2l0aW9uIDogTG9uZzwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPkxldmVyYWdlIDoge2xvbmdsZXZlcmFnZX08L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5wcmljZXMgOiB7cHJpY2VzfTwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgUExQIHNoYXJlIHByaWNlIDp7XCIgXCJ9XG4gICAgICAgICAgICB7cHJpY2VzID09IFwiXCJcbiAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgIDogbG9uZ2NvbGxhdGVyYWwgKyAobG9uZ3NpemUgKiAobG9uZ2F2Z3ByaWNlIC0gcHJpY2VzKSkgLyBwcmljZXN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+QXZnIHByaWNlIDoge2xvbmdhdmdwcmljZX08L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFRWTCA6e1wiIFwifVxuICAgICAgICAgICAge3RvdGFsc3VwcGx5ICpcbiAgICAgICAgICAgICAgKGxvbmdjb2xsYXRlcmFsICsgKGxvbmdzaXplICogKGxvbmdhdmdwcmljZSAtIHByaWNlcykpIC8gcHJpY2VzKX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5QTFAgVG90YWwgc3VwcGx5IDoge3RvdGFsc3VwcGx5fTwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+RXhwb3NpdGlvbiA6IFNob3J0PC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+TGV2ZXJhZ2UgOiB7c2hvcnRsZXZlcmFnZX08L0ZsZXg+XG4gICAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cbiAgICAgICAgICAgIFBMUCBzaGFyZSBwcmljZSA6e1wiIFwifVxuICAgICAgICAgICAge3Nob3J0Y29sbGF0ZXJhbCArIChzaG9ydHNpemUgKiAocHJpY2VzIC0gc2hvcnRhdmdwcmljZSkpIC8gcHJpY2VzfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiPlxuICAgICAgICAgICAgVFZMIDp7XCIgXCJ9XG4gICAgICAgICAgICB7dG90YWxzdXBwbHkgKlxuICAgICAgICAgICAgICAoc2hvcnRjb2xsYXRlcmFsICtcbiAgICAgICAgICAgICAgICAoc2hvcnRzaXplICogKHByaWNlcyAtIHNob3J0YXZncHJpY2UpKSAvIHByaWNlcyl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+UExQIFRvdGFsIHN1cHBseSA6IHt0b3RhbHN1cHBseX08L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICAgKX0gKi99XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGQiLCJUYm9keSIsIlRoIiwiQUJJUyIsIkFERFJFU1MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRyYWN0UHJvdmlkZXIiLCJldGhlcnMiLCJ0aW1lc3RhbXBjb252ZXJ0IiwidXNlV2ViU29ja2V0IiwiRGF0YSIsInRvdGFsc3VwcGx5Iiwic2hhcmVwcmljZSIsIm5hdmNhbGN1bGF0ZWQiLCJ2YXVsdHVzZGMiLCJsb25nc2l6ZSIsImxvbmdjb2xsYXRlcmFsIiwibG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwibG9uZ2F2Z3ByaWNlIiwiaW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzaG9ydHNpemUiLCJzaG9ydGNvbGxhdGVyYWwiLCJzaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJleHBvIiwicHJpY2VzIiwic2V0UHJpY2VzIiwibGF1bmNoZWQiLCJzZXRMYXVuY2hlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});