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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lineChartData\": function() { return /* binding */ lineChartData; },\n/* harmony export */   \"lineChartOptions\": function() { return /* binding */ lineChartOptions; }\n/* harmony export */ });\nlet ethperf = [\n    8.77,\n    12.31\n];\nlet begin = 100;\nlet dataeth = [];\ndataeth[0] = 100;\nethperf.forEach((e)=>console.log(index));\nconst lineChartData = [\n    {\n        name: \"PLP Decentralized Trading Bot\",\n        data: [\n            100,\n            40,\n            300,\n            220,\n            500,\n            250,\n            400,\n            230,\n            500\n        ]\n    },\n    {\n        name: \"Ethereum\",\n        data: [\n            begin,\n            parseInt(begin * (1 + ethperf[0] / 100)).toFixed(0),\n            40,\n            140,\n            290,\n            290,\n            340,\n            230,\n            400\n        ]\n    }\n];\nconst lineChartOptions = {\n    chart: {\n        toolbar: {\n            show: false\n        }\n    },\n    tooltip: {\n        theme: \"dark\"\n    },\n    dataLabels: {\n        enabled: false\n    },\n    stroke: {\n        curve: \"smooth\"\n    },\n    xaxis: {\n        type: \"date\",\n        categories: [\n            \"Feb\",\n            \"Mar\",\n            \"Apr\",\n            \"May\",\n            \"Jun\",\n            \"Jul\",\n            \"Aug\",\n            \"Sep\",\n            \"Oct\",\n            \"Nov\",\n            \"Dec\",\n            \"Jan\"\n        ],\n        labels: {\n            style: {\n                colors: \"#c8cfca\",\n                fontSize: \"12px\"\n            }\n        }\n    },\n    yaxis: {\n        labels: {\n            style: {\n                colors: \"#c8cfca\",\n                fontSize: \"12px\"\n            }\n        }\n    },\n    legend: {\n        show: false\n    },\n    grid: {\n        strokeDashArray: 5\n    },\n    fill: {\n        type: \"gradient\",\n        gradient: {\n            shade: \"light\",\n            type: \"vertical\",\n            shadeIntensity: 0.5,\n            gradientToColors: undefined,\n            inverseColors: true,\n            opacityFrom: 0.8,\n            opacityTo: 0,\n            stops: []\n        },\n        colors: [\n            \"#9face6\",\n            \"#ecf0f1\"\n        ]\n    },\n    colors: [\n        \"#9face6\",\n        \"#3c3c3d\"\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVFLElBQUlBLFVBQVU7SUFBQztJQUFNO0NBQU07QUFDM0IsSUFBSUMsUUFBUTtBQUNaLElBQUlDLFVBQVUsRUFBRTtBQUNoQkEsT0FBTyxDQUFDLEVBQUUsR0FBRztBQUNiRixRQUFRRyxPQUFPLENBQUMsQ0FBQ0MsSUFBTUMsUUFBUUMsR0FBRyxDQUFDQztBQUM1QixNQUFNQyxnQkFBZ0I7SUFDM0I7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO1lBQUM7WUFBSztZQUFJO1lBQUs7WUFBSztZQUFLO1lBQUs7WUFBSztZQUFLO1NBQUk7SUFDcEQ7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07WUFBQ1Q7WUFBT1UsU0FBU1YsUUFBTyxLQUFHRCxPQUFPLENBQUMsRUFBRSxHQUFDLEdBQUcsR0FBSVksT0FBTyxDQUFDO1lBQUk7WUFBSTtZQUFLO1lBQUs7WUFBSztZQUFLO1lBQUs7U0FBSztJQUNuRztDQUNELENBQUM7QUFFSyxNQUFNQyxtQkFBbUI7SUFDOUJDLE9BQU87UUFDTEMsU0FBUztZQUNQQyxNQUFNLEtBQUs7UUFDYjtJQUNGO0lBQ0FDLFNBQVM7UUFDUEMsT0FBTztJQUNUO0lBQ0FDLFlBQVk7UUFDVkMsU0FBUyxLQUFLO0lBQ2hCO0lBQ0FDLFFBQVE7UUFDTkMsT0FBTztJQUNUO0lBQ0FDLE9BQU87UUFDTEMsTUFBTTtRQUNOQyxZQUFZO1lBQ1Y7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsUUFBUTtZQUNOQyxPQUFPO2dCQUNMQyxRQUFRO2dCQUNSQyxVQUFVO1lBQ1o7UUFDRjtJQUNGO0lBQ0FDLE9BQU87UUFDTEosUUFBUTtZQUNOQyxPQUFPO2dCQUNMQyxRQUFRO2dCQUNSQyxVQUFVO1lBQ1o7UUFDRjtJQUNGO0lBQ0FFLFFBQVE7UUFDTmYsTUFBTSxLQUFLO0lBQ2I7SUFDQWdCLE1BQU07UUFDSkMsaUJBQWlCO0lBQ25CO0lBQ0FDLE1BQU07UUFDSlYsTUFBTTtRQUNOVyxVQUFVO1lBQ1JDLE9BQU87WUFDUFosTUFBTTtZQUNOYSxnQkFBZ0I7WUFDaEJDLGtCQUFrQkM7WUFDbEJDLGVBQWUsSUFBSTtZQUNuQkMsYUFBYTtZQUNiQyxXQUFXO1lBQ1hDLE9BQU8sRUFBRTtRQUNYO1FBQ0FmLFFBQVE7WUFBQztZQUFXO1NBQVU7SUFDaEM7SUFDQUEsUUFBUTtRQUFDO1FBQVc7S0FBVTtBQUNoQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9kYXRhLmpzPzY3ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIFxuICBsZXQgZXRocGVyZiA9IFs4Ljc3LCAxMi4zMV1cbiAgbGV0IGJlZ2luID0gMTAwXG4gIGxldCBkYXRhZXRoID0gW11cbiAgZGF0YWV0aFswXSA9IDEwMCBcbiAgZXRocGVyZi5mb3JFYWNoKChlKSA9PiBjb25zb2xlLmxvZyhpbmRleCkpXG4gIGV4cG9ydCBjb25zdCBsaW5lQ2hhcnREYXRhID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUExQIERlY2VudHJhbGl6ZWQgVHJhZGluZyBCb3RcIixcbiAgICAgIGRhdGE6IFsxMDAsIDQwLCAzMDAsIDIyMCwgNTAwLCAyNTAsIDQwMCwgMjMwLCA1MDBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJFdGhlcmV1bVwiLFxuICAgICAgZGF0YTogW2JlZ2luLCBwYXJzZUludChiZWdpbiooMSsoZXRocGVyZlswXS8xMDApKSkudG9GaXhlZCgwKSwgNDAsIDE0MCwgMjkwLCAyOTAsIDM0MCwgMjMwLCA0MDAsXSxcbiAgICB9LFxuICBdO1xuICBcbiAgZXhwb3J0IGNvbnN0IGxpbmVDaGFydE9wdGlvbnMgPSB7XG4gICAgY2hhcnQ6IHtcbiAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdGhlbWU6IFwiZGFya1wiLFxuICAgIH0sXG4gICAgZGF0YUxhYmVsczoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBzdHJva2U6IHtcbiAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICBcIkZlYlwiLFxuICAgICAgICBcIk1hclwiLFxuICAgICAgICBcIkFwclwiLFxuICAgICAgICBcIk1heVwiLFxuICAgICAgICBcIkp1blwiLFxuICAgICAgICBcIkp1bFwiLFxuICAgICAgICBcIkF1Z1wiLFxuICAgICAgICBcIlNlcFwiLFxuICAgICAgICBcIk9jdFwiLFxuICAgICAgICBcIk5vdlwiLFxuICAgICAgICBcIkRlY1wiLFxuICAgICAgICBcIkphblwiLFxuICAgICAgXSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGNvbG9yczogXCIjYzhjZmNhXCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHlheGlzOiB7XG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBjb2xvcnM6IFwiI2M4Y2ZjYVwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsZWdlbmQ6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgc3Ryb2tlRGFzaEFycmF5OiA1LFxuICAgIH0sXG4gICAgZmlsbDoge1xuICAgICAgdHlwZTogXCJncmFkaWVudFwiLFxuICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgc2hhZGU6IFwibGlnaHRcIixcbiAgICAgICAgdHlwZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBzaGFkZUludGVuc2l0eTogMC41LFxuICAgICAgICBncmFkaWVudFRvQ29sb3JzOiB1bmRlZmluZWQsIC8vIG9wdGlvbmFsLCBpZiBub3QgZGVmaW5lZCAtIHVzZXMgdGhlIHNoYWRlcyBvZiBzYW1lIGNvbG9yIGluIHNlcmllc1xuICAgICAgICBpbnZlcnNlQ29sb3JzOiB0cnVlLFxuICAgICAgICBvcGFjaXR5RnJvbTogMC44LFxuICAgICAgICBvcGFjaXR5VG86IDAsXG4gICAgICAgIHN0b3BzOiBbXSxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFtcIiM5ZmFjZTZcIiwgXCIjZWNmMGYxXCJdLFxuICAgIH0sXG4gICAgY29sb3JzOiBbXCIjOWZhY2U2XCIsIFwiIzNjM2MzZFwiXSxcbiAgfTtcbiAgIl0sIm5hbWVzIjpbImV0aHBlcmYiLCJiZWdpbiIsImRhdGFldGgiLCJmb3JFYWNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImxpbmVDaGFydERhdGEiLCJuYW1lIiwiZGF0YSIsInBhcnNlSW50IiwidG9GaXhlZCIsImxpbmVDaGFydE9wdGlvbnMiLCJjaGFydCIsInRvb2xiYXIiLCJzaG93IiwidG9vbHRpcCIsInRoZW1lIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJzdHJva2UiLCJjdXJ2ZSIsInhheGlzIiwidHlwZSIsImNhdGVnb3JpZXMiLCJsYWJlbHMiLCJzdHlsZSIsImNvbG9ycyIsImZvbnRTaXplIiwieWF4aXMiLCJsZWdlbmQiLCJncmlkIiwic3Ryb2tlRGFzaEFycmF5IiwiZmlsbCIsImdyYWRpZW50Iiwic2hhZGUiLCJzaGFkZUludGVuc2l0eSIsImdyYWRpZW50VG9Db2xvcnMiLCJ1bmRlZmluZWQiLCJpbnZlcnNlQ29sb3JzIiwib3BhY2l0eUZyb20iLCJvcGFjaXR5VG8iLCJzdG9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/data.js\n"));

/***/ })

});