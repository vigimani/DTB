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

/***/ "./pages/api/data.js":
/*!***************************!*\
  !*** ./pages/api/data.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lineChartData\": function() { return /* binding */ lineChartData; },\n/* harmony export */   \"lineChartOptions\": function() { return /* binding */ lineChartOptions; }\n/* harmony export */ });\n//start feb22\nlet ethperf = [\n    12.31,\n    -16.91,\n    -28.80,\n    -44.95,\n    57.15,\n    -7.43,\n    -14.56,\n    18.37,\n    -17.70,\n    -7.63,\n    +32.58\n];\nlet dataeth = [];\ndataeth[0] = 100;\nethperf.forEach((e, index)=>{\n    dataeth[index + 1] = parseInt((dataeth[index] * (1 + e / 100)).toFixed(0));\n});\nlet botperf = [\n    12.31,\n    -16.91,\n    -28.80,\n    -44.95,\n    57.15,\n    -7.43,\n    -14.56,\n    18.37,\n    -17.70,\n    -7.63,\n    +32.58\n];\nconst lineChartData = [\n    {\n        name: \"PLP Decentralized Trading Bot\",\n        data: [\n            100,\n            40,\n            300,\n            220,\n            500,\n            250,\n            400,\n            230,\n            500\n        ]\n    },\n    {\n        name: \"Ethereum\",\n        data: dataeth\n    }\n];\nconst lineChartOptions = {\n    chart: {\n        toolbar: {\n            show: false\n        }\n    },\n    tooltip: {\n        theme: \"dark\"\n    },\n    dataLabels: {\n        enabled: false\n    },\n    stroke: {\n        curve: \"smooth\"\n    },\n    xaxis: {\n        type: \"date\",\n        categories: [\n            \"Feb\",\n            \"Mar\",\n            \"Apr\",\n            \"May\",\n            \"Jun\",\n            \"Jul\",\n            \"Aug\",\n            \"Sep\",\n            \"Oct\",\n            \"Nov\",\n            \"Dec\",\n            \"Jan\"\n        ],\n        labels: {\n            style: {\n                colors: \"#c8cfca\",\n                fontSize: \"12px\"\n            }\n        }\n    },\n    yaxis: {\n        labels: {\n            style: {\n                colors: \"#c8cfca\",\n                fontSize: \"12px\"\n            }\n        }\n    },\n    legend: {\n        show: false\n    },\n    grid: {\n        strokeDashArray: 5\n    },\n    fill: {\n        type: \"gradient\",\n        gradient: {\n            shade: \"light\",\n            type: \"vertical\",\n            shadeIntensity: 0.5,\n            gradientToColors: undefined,\n            inverseColors: true,\n            opacityFrom: 0.8,\n            opacityTo: 0,\n            stops: []\n        },\n        colors: [\n            \"#9face6\",\n            \"#ecf0f1\"\n        ]\n    },\n    colors: [\n        \"#9face6\",\n        \"#3c3c3d\"\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNFLGFBQWE7QUFDYixJQUFJQSxVQUFVO0lBQUM7SUFBTyxDQUFDO0lBQU8sQ0FBQztJQUFNLENBQUM7SUFBTTtJQUFNLENBQUM7SUFBSyxDQUFDO0lBQU07SUFBTSxDQUFDO0lBQU0sQ0FBQztJQUFLLENBQUM7Q0FBTTtBQUN6RixJQUFJQyxVQUFVLEVBQUU7QUFDaEJBLE9BQU8sQ0FBQyxFQUFFLEdBQUc7QUFDYkQsUUFBUUUsT0FBTyxDQUFDLENBQUNDLEdBQUdDLFFBQVU7SUFDNUJILE9BQU8sQ0FBQ0csUUFBTSxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0osT0FBTyxDQUFDRyxNQUFNLEdBQUUsS0FBRUQsSUFBRSxHQUFFLENBQUMsRUFBR0csT0FBTyxDQUFDO0FBQ2pFO0FBRUEsSUFBSUMsVUFBVTtJQUFDO0lBQU8sQ0FBQztJQUFPLENBQUM7SUFBTSxDQUFDO0lBQU07SUFBTSxDQUFDO0lBQUssQ0FBQztJQUFNO0lBQU0sQ0FBQztJQUFNLENBQUM7SUFBSyxDQUFDO0NBQU07QUFDbEYsTUFBTUMsZ0JBQWdCO0lBQzNCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtZQUFDO1lBQUs7WUFBSTtZQUFLO1lBQUs7WUFBSztZQUFLO1lBQUs7WUFBSztTQUFJO0lBQ3BEO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNVDtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1VLG1CQUFtQjtJQUM5QkMsT0FBTztRQUNMQyxTQUFTO1lBQ1BDLE1BQU0sS0FBSztRQUNiO0lBQ0Y7SUFDQUMsU0FBUztRQUNQQyxPQUFPO0lBQ1Q7SUFDQUMsWUFBWTtRQUNWQyxTQUFTLEtBQUs7SUFDaEI7SUFDQUMsUUFBUTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQUMsT0FBTztRQUNMQyxNQUFNO1FBQ05DLFlBQVk7WUFDVjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxRQUFRO1lBQ05DLE9BQU87Z0JBQ0xDLFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFDQUMsT0FBTztRQUNMSixRQUFRO1lBQ05DLE9BQU87Z0JBQ0xDLFFBQVE7Z0JBQ1JDLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFDQUUsUUFBUTtRQUNOZixNQUFNLEtBQUs7SUFDYjtJQUNBZ0IsTUFBTTtRQUNKQyxpQkFBaUI7SUFDbkI7SUFDQUMsTUFBTTtRQUNKVixNQUFNO1FBQ05XLFVBQVU7WUFDUkMsT0FBTztZQUNQWixNQUFNO1lBQ05hLGdCQUFnQjtZQUNoQkMsa0JBQWtCQztZQUNsQkMsZUFBZSxJQUFJO1lBQ25CQyxhQUFhO1lBQ2JDLFdBQVc7WUFDWEMsT0FBTyxFQUFFO1FBQ1g7UUFDQWYsUUFBUTtZQUFDO1lBQVc7U0FBVTtJQUNoQztJQUNBQSxRQUFRO1FBQUM7UUFBVztLQUFVO0FBQ2hDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2RhdGEuanM/NjdkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLy9zdGFydCBmZWIyMlxuICBsZXQgZXRocGVyZiA9IFsxMi4zMSwgLTE2LjkxLCAtMjguODAsLTQ0Ljk1LDU3LjE1LC03LjQzLC0xNC41NiwxOC4zNywtMTcuNzAsLTcuNjMsKzMyLjU4XVxuICBsZXQgZGF0YWV0aCA9IFtdXG4gIGRhdGFldGhbMF0gPSAxMDAgXG4gIGV0aHBlcmYuZm9yRWFjaCgoZSwgaW5kZXgpID0+IHtcbiAgICBkYXRhZXRoW2luZGV4KzFdID0gcGFyc2VJbnQoKGRhdGFldGhbaW5kZXhdKigxK2UvMTAwKSkudG9GaXhlZCgwKSlcbiAgfSlcblxuICBsZXQgYm90cGVyZiA9IFsxMi4zMSwgLTE2LjkxLCAtMjguODAsLTQ0Ljk1LDU3LjE1LC03LjQzLC0xNC41NiwxOC4zNywtMTcuNzAsLTcuNjMsKzMyLjU4XVxuICBleHBvcnQgY29uc3QgbGluZUNoYXJ0RGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlBMUCBEZWNlbnRyYWxpemVkIFRyYWRpbmcgQm90XCIsXG4gICAgICBkYXRhOiBbMTAwLCA0MCwgMzAwLCAyMjAsIDUwMCwgMjUwLCA0MDAsIDIzMCwgNTAwXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiRXRoZXJldW1cIixcbiAgICAgIGRhdGE6IGRhdGFldGgsXG4gICAgfSxcbiAgXTtcbiAgXG4gIGV4cG9ydCBjb25zdCBsaW5lQ2hhcnRPcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICB0b29sYmFyOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHRoZW1lOiBcImRhcmtcIixcbiAgICB9LFxuICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgc3Ryb2tlOiB7XG4gICAgICBjdXJ2ZTogXCJzbW9vdGhcIixcbiAgICB9LFxuICAgIHhheGlzOiB7XG4gICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgXCJGZWJcIixcbiAgICAgICAgXCJNYXJcIixcbiAgICAgICAgXCJBcHJcIixcbiAgICAgICAgXCJNYXlcIixcbiAgICAgICAgXCJKdW5cIixcbiAgICAgICAgXCJKdWxcIixcbiAgICAgICAgXCJBdWdcIixcbiAgICAgICAgXCJTZXBcIixcbiAgICAgICAgXCJPY3RcIixcbiAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgXCJEZWNcIixcbiAgICAgICAgXCJKYW5cIixcbiAgICAgIF0sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBjb2xvcnM6IFwiI2M4Y2ZjYVwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB5YXhpczoge1xuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgY29sb3JzOiBcIiNjOGNmY2FcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHN0cm9rZURhc2hBcnJheTogNSxcbiAgICB9LFxuICAgIGZpbGw6IHtcbiAgICAgIHR5cGU6IFwiZ3JhZGllbnRcIixcbiAgICAgIGdyYWRpZW50OiB7XG4gICAgICAgIHNoYWRlOiBcImxpZ2h0XCIsXG4gICAgICAgIHR5cGU6IFwidmVydGljYWxcIixcbiAgICAgICAgc2hhZGVJbnRlbnNpdHk6IDAuNSxcbiAgICAgICAgZ3JhZGllbnRUb0NvbG9yczogdW5kZWZpbmVkLCAvLyBvcHRpb25hbCwgaWYgbm90IGRlZmluZWQgLSB1c2VzIHRoZSBzaGFkZXMgb2Ygc2FtZSBjb2xvciBpbiBzZXJpZXNcbiAgICAgICAgaW52ZXJzZUNvbG9yczogdHJ1ZSxcbiAgICAgICAgb3BhY2l0eUZyb206IDAuOCxcbiAgICAgICAgb3BhY2l0eVRvOiAwLFxuICAgICAgICBzdG9wczogW10sXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjOWZhY2U2XCIsIFwiI2VjZjBmMVwiXSxcbiAgICB9LFxuICAgIGNvbG9yczogW1wiIzlmYWNlNlwiLCBcIiMzYzNjM2RcIl0sXG4gIH07XG4gICJdLCJuYW1lcyI6WyJldGhwZXJmIiwiZGF0YWV0aCIsImZvckVhY2giLCJlIiwiaW5kZXgiLCJwYXJzZUludCIsInRvRml4ZWQiLCJib3RwZXJmIiwibGluZUNoYXJ0RGF0YSIsIm5hbWUiLCJkYXRhIiwibGluZUNoYXJ0T3B0aW9ucyIsImNoYXJ0IiwidG9vbGJhciIsInNob3ciLCJ0b29sdGlwIiwidGhlbWUiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInN0cm9rZSIsImN1cnZlIiwieGF4aXMiLCJ0eXBlIiwiY2F0ZWdvcmllcyIsImxhYmVscyIsInN0eWxlIiwiY29sb3JzIiwiZm9udFNpemUiLCJ5YXhpcyIsImxlZ2VuZCIsImdyaWQiLCJzdHJva2VEYXNoQXJyYXkiLCJmaWxsIiwiZ3JhZGllbnQiLCJzaGFkZSIsInNoYWRlSW50ZW5zaXR5IiwiZ3JhZGllbnRUb0NvbG9ycyIsInVuZGVmaW5lZCIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/data.js\n"));

/***/ })

});