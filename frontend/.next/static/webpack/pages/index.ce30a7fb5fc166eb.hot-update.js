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

/***/ "./components/mainPanel/Graph.jsx":
/*!****************************************!*\
  !*** ./components/mainPanel/Graph.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _pages_api_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../pages/api/data */ \"./pages/api/data.js\");\n\n\n\n\nclass Graph extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    componentDidMount() {\n        this.setState({\n            chartData: _pages_api_data__WEBPACK_IMPORTED_MODULE_3__.lineChartData,\n            chartOptions: _pages_api_data__WEBPACK_IMPORTED_MODULE_3__.lineChartOptions\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children:  true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                options: this.state.chartOptions,\n                series: this.state.chartData,\n                type: \"area\",\n                width: \"100%\",\n                height: \"100%\"\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/mainPanel/Graph.jsx\",\n                lineNumber: 26,\n                columnNumber: 15\n            }, this) : /*#__PURE__*/ 0\n        }, void 0, false);\n    }\n    constructor(props){\n        super(props);\n        this.state = {\n            chartData: [],\n            chartOptions: {}\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYW5lbC9HcmFwaC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTBCO0FBQ29CO0FBQzJCO0FBRXpFLE1BQU1JLGNBQWNKLHdEQUFlO0lBVWpDTSxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDQyxRQUFRLENBQUM7WUFDWkMsV0FBV04sMERBQWFBO1lBQ3hCTyxjQUFjTiw2REFBZ0JBO1FBQ2hDO0lBQ0Y7SUFFQU8sU0FBUztRQUNQLHFCQUNFO3NCQUNDLEtBQWtCLGlCQUNYLDhEQUFDVCx3REFBY0E7Z0JBQ2ZVLFNBQVMsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVk7Z0JBQ2hDSSxRQUFRLElBQUksQ0FBQ0QsS0FBSyxDQUFDSixTQUFTO2dCQUM1Qk0sTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsUUFBTzs7Ozs7cUNBRVYsQ0FBTTs7SUFJZjtJQS9CQUMsWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLEtBQUssQ0FBQ0E7UUFFTixJQUFJLENBQUNOLEtBQUssR0FBRztZQUNYSixXQUFXLEVBQUU7WUFDYkMsY0FBYyxDQUFDO1FBQ2pCO0lBQ0Y7QUF5QkY7QUFFQSwrREFBZUwsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5QYW5lbC9HcmFwaC5qc3g/YWU0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcbmltcG9ydCB7IGxpbmVDaGFydERhdGEsIGxpbmVDaGFydE9wdGlvbnMgfSBmcm9tIFwiLi8uLi8uLi9wYWdlcy9hcGkvZGF0YVwiO1xuXG5jbGFzcyBHcmFwaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoYXJ0RGF0YTogW10sXG4gICAgICBjaGFydE9wdGlvbnM6IHt9LFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoYXJ0RGF0YTogbGluZUNoYXJ0RGF0YSxcbiAgICAgIGNoYXJ0T3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSAndW5kdGVlZmluZWQnPyAoXG4gICAgICAgICAgICAgIDxSZWFjdEFwZXhDaGFydFxuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmNoYXJ0T3B0aW9uc31cbiAgICAgICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLmNoYXJ0RGF0YX1cbiAgICAgICAgICAgICAgdHlwZT1cImFyZWFcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICApIDogKDw+PC8+KX1cblxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0QXBleENoYXJ0IiwibGluZUNoYXJ0RGF0YSIsImxpbmVDaGFydE9wdGlvbnMiLCJHcmFwaCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJjaGFydERhdGEiLCJjaGFydE9wdGlvbnMiLCJyZW5kZXIiLCJvcHRpb25zIiwic3RhdGUiLCJzZXJpZXMiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zdHJ1Y3RvciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainPanel/Graph.jsx\n"));

/***/ })

});