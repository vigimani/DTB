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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lineChartData\": function() { return /* binding */ lineChartData; },\n/* harmony export */   \"lineChartOptions\": function() { return /* binding */ lineChartOptions; }\n/* harmony export */ });\nlet ethperf = [\n    8.77,\n    12.31\n];\nlet begin = 100;\nlet dataeth = [];\ndataeth[0] = 100;\nethperf.forEach((e, index)=>{\n    console.log(index);\n});\nconst lineChartData = [\n    {\n        name: \"PLP Decentralized Trading Bot\",\n        data: [\n            100,\n            40,\n            300,\n            220,\n            500,\n            250,\n            400,\n            230,\n            500\n        ]\n    },\n    {\n        name: \"Ethereum\",\n        data: [\n            begin,\n            parseInt(begin * (1 + ethperf[0] / 100)).toFixed(0),\n            40,\n            140,\n            290,\n            290,\n            340,\n            230,\n            400\n        ]\n    }\n];\nconst lineChartOptions = {\n    chart: {\n        toolbar: {\n            show: false\n        }\n    },\n    tooltip: {\n        theme: \"dark\"\n    },\n    dataLabels: {\n        enabled: false\n    },\n    stroke: {\n        curve: \"smooth\"\n    },\n    xaxis: {\n        type: \"date\",\n        categories: [\n            \"Feb\",\n            \"Mar\",\n            \"Apr\",\n            \"May\",\n            \"Jun\",\n            \"Jul\",\n            \"Aug\",\n            \"Sep\",\n            \"Oct\",\n            \"Nov\",\n            \"Dec\",\n            \"Jan\"\n        ],\n        labels: {\n            style: {\n                colors: \"#c8cfca\",\n                fontSize: \"12px\"\n            }\n        }\n    },\n    yaxis: {\n        labels: {\n            style: {\n                colors: \"#c8cfca\",\n                fontSize: \"12px\"\n            }\n        }\n    },\n    legend: {\n        show: false\n    },\n    grid: {\n        strokeDashArray: 5\n    },\n    fill: {\n        type: \"gradient\",\n        gradient: {\n            shade: \"light\",\n            type: \"vertical\",\n            shadeIntensity: 0.5,\n            gradientToColors: undefined,\n            inverseColors: true,\n            opacityFrom: 0.8,\n            opacityTo: 0,\n            stops: []\n        },\n        colors: [\n            \"#9face6\",\n            \"#ecf0f1\"\n        ]\n    },\n    colors: [\n        \"#9face6\",\n        \"#3c3c3d\"\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVFLElBQUlBLFVBQVU7SUFBQztJQUFNO0NBQU07QUFDM0IsSUFBSUMsUUFBUTtBQUNaLElBQUlDLFVBQVUsRUFBRTtBQUNoQkEsT0FBTyxDQUFDLEVBQUUsR0FBRztBQUNiRixRQUFRRyxPQUFPLENBQUMsQ0FBQ0MsR0FBR0MsUUFBVTtJQUM1QkMsUUFBUUMsR0FBRyxDQUFDRjtBQUVkO0FBQ08sTUFBTUcsZ0JBQWdCO0lBQzNCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtZQUFDO1lBQUs7WUFBSTtZQUFLO1lBQUs7WUFBSztZQUFLO1lBQUs7WUFBSztTQUFJO0lBQ3BEO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO1lBQUNUO1lBQU9VLFNBQVNWLFFBQU8sS0FBR0QsT0FBTyxDQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUlZLE9BQU8sQ0FBQztZQUFJO1lBQUk7WUFBSztZQUFLO1lBQUs7WUFBSztZQUFLO1NBQUs7SUFDbkc7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCQyxPQUFPO1FBQ0xDLFNBQVM7WUFDUEMsTUFBTSxLQUFLO1FBQ2I7SUFDRjtJQUNBQyxTQUFTO1FBQ1BDLE9BQU87SUFDVDtJQUNBQyxZQUFZO1FBQ1ZDLFNBQVMsS0FBSztJQUNoQjtJQUNBQyxRQUFRO1FBQ05DLE9BQU87SUFDVDtJQUNBQyxPQUFPO1FBQ0xDLE1BQU07UUFDTkMsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0RDLFFBQVE7WUFDTkMsT0FBTztnQkFDTEMsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQUNBQyxPQUFPO1FBQ0xKLFFBQVE7WUFDTkMsT0FBTztnQkFDTEMsUUFBUTtnQkFDUkMsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQUNBRSxRQUFRO1FBQ05mLE1BQU0sS0FBSztJQUNiO0lBQ0FnQixNQUFNO1FBQ0pDLGlCQUFpQjtJQUNuQjtJQUNBQyxNQUFNO1FBQ0pWLE1BQU07UUFDTlcsVUFBVTtZQUNSQyxPQUFPO1lBQ1BaLE1BQU07WUFDTmEsZ0JBQWdCO1lBQ2hCQyxrQkFBa0JDO1lBQ2xCQyxlQUFlLElBQUk7WUFDbkJDLGFBQWE7WUFDYkMsV0FBVztZQUNYQyxPQUFPLEVBQUU7UUFDWDtRQUNBZixRQUFRO1lBQUM7WUFBVztTQUFVO0lBQ2hDO0lBQ0FBLFFBQVE7UUFBQztRQUFXO0tBQVU7QUFDaEMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvZGF0YS5qcz82N2RiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICBcbiAgbGV0IGV0aHBlcmYgPSBbOC43NywgMTIuMzFdXG4gIGxldCBiZWdpbiA9IDEwMFxuICBsZXQgZGF0YWV0aCA9IFtdXG4gIGRhdGFldGhbMF0gPSAxMDAgXG4gIGV0aHBlcmYuZm9yRWFjaCgoZSwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICBcbiAgfSlcbiAgZXhwb3J0IGNvbnN0IGxpbmVDaGFydERhdGEgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJQTFAgRGVjZW50cmFsaXplZCBUcmFkaW5nIEJvdFwiLFxuICAgICAgZGF0YTogWzEwMCwgNDAsIDMwMCwgMjIwLCA1MDAsIDI1MCwgNDAwLCAyMzAsIDUwMF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkV0aGVyZXVtXCIsXG4gICAgICBkYXRhOiBbYmVnaW4sIHBhcnNlSW50KGJlZ2luKigxKyhldGhwZXJmWzBdLzEwMCkpKS50b0ZpeGVkKDApLCA0MCwgMTQwLCAyOTAsIDI5MCwgMzQwLCAyMzAsIDQwMCxdLFxuICAgIH0sXG4gIF07XG4gIFxuICBleHBvcnQgY29uc3QgbGluZUNoYXJ0T3B0aW9ucyA9IHtcbiAgICBjaGFydDoge1xuICAgICAgdG9vbGJhcjoge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICB0aGVtZTogXCJkYXJrXCIsXG4gICAgfSxcbiAgICBkYXRhTGFiZWxzOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHN0cm9rZToge1xuICAgICAgY3VydmU6IFwic21vb3RoXCIsXG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICBjYXRlZ29yaWVzOiBbXG4gICAgICAgIFwiRmViXCIsXG4gICAgICAgIFwiTWFyXCIsXG4gICAgICAgIFwiQXByXCIsXG4gICAgICAgIFwiTWF5XCIsXG4gICAgICAgIFwiSnVuXCIsXG4gICAgICAgIFwiSnVsXCIsXG4gICAgICAgIFwiQXVnXCIsXG4gICAgICAgIFwiU2VwXCIsXG4gICAgICAgIFwiT2N0XCIsXG4gICAgICAgIFwiTm92XCIsXG4gICAgICAgIFwiRGVjXCIsXG4gICAgICAgIFwiSmFuXCIsXG4gICAgICBdLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgY29sb3JzOiBcIiNjOGNmY2FcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGNvbG9yczogXCIjYzhjZmNhXCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxlZ2VuZDoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBzdHJva2VEYXNoQXJyYXk6IDUsXG4gICAgfSxcbiAgICBmaWxsOiB7XG4gICAgICB0eXBlOiBcImdyYWRpZW50XCIsXG4gICAgICBncmFkaWVudDoge1xuICAgICAgICBzaGFkZTogXCJsaWdodFwiLFxuICAgICAgICB0eXBlOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIHNoYWRlSW50ZW5zaXR5OiAwLjUsXG4gICAgICAgIGdyYWRpZW50VG9Db2xvcnM6IHVuZGVmaW5lZCwgLy8gb3B0aW9uYWwsIGlmIG5vdCBkZWZpbmVkIC0gdXNlcyB0aGUgc2hhZGVzIG9mIHNhbWUgY29sb3IgaW4gc2VyaWVzXG4gICAgICAgIGludmVyc2VDb2xvcnM6IHRydWUsXG4gICAgICAgIG9wYWNpdHlGcm9tOiAwLjgsXG4gICAgICAgIG9wYWNpdHlUbzogMCxcbiAgICAgICAgc3RvcHM6IFtdLFxuICAgICAgfSxcbiAgICAgIGNvbG9yczogW1wiIzlmYWNlNlwiLCBcIiNlY2YwZjFcIl0sXG4gICAgfSxcbiAgICBjb2xvcnM6IFtcIiM5ZmFjZTZcIiwgXCIjM2MzYzNkXCJdLFxuICB9O1xuICAiXSwibmFtZXMiOlsiZXRocGVyZiIsImJlZ2luIiwiZGF0YWV0aCIsImZvckVhY2giLCJlIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibGluZUNoYXJ0RGF0YSIsIm5hbWUiLCJkYXRhIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwibGluZUNoYXJ0T3B0aW9ucyIsImNoYXJ0IiwidG9vbGJhciIsInNob3ciLCJ0b29sdGlwIiwidGhlbWUiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInN0cm9rZSIsImN1cnZlIiwieGF4aXMiLCJ0eXBlIiwiY2F0ZWdvcmllcyIsImxhYmVscyIsInN0eWxlIiwiY29sb3JzIiwiZm9udFNpemUiLCJ5YXhpcyIsImxlZ2VuZCIsImdyaWQiLCJzdHJva2VEYXNoQXJyYXkiLCJmaWxsIiwiZ3JhZGllbnQiLCJzaGFkZSIsInNoYWRlSW50ZW5zaXR5IiwiZ3JhZGllbnRUb0NvbG9ycyIsInVuZGVmaW5lZCIsImludmVyc2VDb2xvcnMiLCJvcGFjaXR5RnJvbSIsIm9wYWNpdHlUbyIsInN0b3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/data.js\n"));

/***/ })

});