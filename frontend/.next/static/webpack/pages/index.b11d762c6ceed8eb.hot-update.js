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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { isConnected , isOwner , vaultAddress , controllerAddres , signer , provider  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // useEffect(() => {\n    //   updatetransactions();\n    // }, []);\n    // useEffect(() => {\n    //     const contract = new ethers.Contract(\n    //       ADDRESS.MYVAULT,\n    //       ABIS.MYVAULT,\n    //       provider\n    //     );\n    //     contract.on(\"depositEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     contract.on(\"withdrawEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     return () => {\n    //       contract.removeAllListeners();\n    //     };\n    //   }, []);\n    // let socket = new WebSocket(\"wss://stream.binance.com:9443/ws/eurusdt@ticker\");\n    // socket.onopen = function(e) {\n    //   alert(\"[open] Connection established\");\n    //   alert(\"Sending to server\");\n    //   socket.send(\"My name is John\");\n    // };\n    // socket.onmessage = function(event) {\n    //   try {\n    //   let msg = JSON.parse(event.data);\n    //   console.log(msg)\n    // } catch (e) {\n    //   console.log(e)\n    // }\n    // };\n    // const WS_url = \"https://api.gmx.io/prices\"  \n    // const {message } = useWebSocket(WS_url, {\n    //   onOpen: () => {\n    //     console.log(\"c'est ok\")\n    //   }\n    // })\n    fetch(\"https://api.gmx.io/prices\").then((data)=>console.log(data.json())).catch(err);\n    // console.log(message)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            w: \"100%\"\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"b/7g9nYwIA2j42d5XBgkYMhL8IE=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQW1CNEI7QUFDMEI7QUFDUjtBQUNvQjtBQUNoQztBQUN5QjtBQUNpQjtBQUUzRCxTQUFTMEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFFBQU8sRUFDUEMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLE9BQU0sRUFDTkMsU0FBUSxFQUNULEdBQUdWLDZFQUFtQkE7SUFDdkIsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLFVBQVU7SUFFVixvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUZBQWlGO0lBQ2pGLGdDQUFnQztJQUNoQyw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxLQUFLO0lBQ0wsdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsSUFBSTtJQUNKLEtBQUs7SUFFTCwrQ0FBK0M7SUFDL0MsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLEtBQUs7SUFDTGUsTUFBTSw2QkFBNkJDLElBQUksQ0FBQyxDQUFDQyxPQUFTQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLElBQUksS0FBS0MsS0FBSyxDQUFFQztJQUNuRix1QkFBdUI7SUFDdkIscUJBQ0U7a0JBRUUsNEVBQUN6QyxrREFBSUE7WUFBQzBDLEdBQUU7Ozs7Ozs7QUFNZCxDQUFDO0dBOUR1QmpCOztRQVFsQkoseUVBQW1CQTs7O0tBUkRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci9EYXRhLmpzeD82ZTM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgSW1hZ2UsXG4gICAgRmxleCxcbiAgICBUZXh0LFxuICAgIEJveCxcbiAgICBIU3RhY2ssXG4gICAgU3RhY2ssXG4gICAgU3dpdGNoLFxuICAgIEJ1dHRvbixcbiAgICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgICB1c2VDb2xvck1vZGUsXG4gICAgSWNvbkJ1dHRvbixcbiAgICBjb2xvck1vZGUsXG4gICAgVGFibGUsXG4gICAgVGhlYWQsXG4gICAgVHIsXG4gICAgVGQsXG4gICAgVGJvZHksXG4gICAgVGgsXG4gIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbiAgaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG4gIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbiAgaW1wb3J0IHsgdXNlQ29udHJhY3RQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvQ29udHJhY3RDb250ZXh0XCI7XG4gIGltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbiAgaW1wb3J0IHsgdGltZXN0YW1wY29udmVydCB9IGZyb20gXCJAL3V0aWxzL3V0aWxzZnVuY3Rpb25cIjtcbiAgaW1wb3J0IHsgdXNlV2ViU29ja2V0IH0gZnJvbSBcInJlYWN0LXVzZS13ZWJzb2NrZXQvZGlzdC9saWIvdXNlLXdlYnNvY2tldFwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGEoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNDb25uZWN0ZWQsXG4gICAgICBpc093bmVyLFxuICAgICAgdmF1bHRBZGRyZXNzLFxuICAgICAgY29udHJvbGxlckFkZHJlcyxcbiAgICAgIHNpZ25lcixcbiAgICAgIHByb3ZpZGVyLFxuICAgIH0gPSB1c2VDb250cmFjdFByb3ZpZGVyKCk7XG4gICAgY29uc3QgW3RyYW5zYWN0aW9ucywgc2V0VHJhbnNhY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgdXBkYXRldHJhbnNhY3Rpb25zKCk7XG4gICAgLy8gfSwgW10pO1xuICBcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgLy8gICAgICAgQUREUkVTUy5NWVZBVUxULFxuICAgIC8vICAgICAgIEFCSVMuTVlWQVVMVCxcbiAgICAvLyAgICAgICBwcm92aWRlclxuICAgIC8vICAgICApO1xuICAgIC8vICAgICBjb250cmFjdC5vbihcImRlcG9zaXRFdmVudFwiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICB1cGRhdGV0cmFuc2FjdGlvbnMoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGNvbnRyYWN0Lm9uKFwid2l0aGRyYXdFdmVudFwiLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICB1cGRhdGV0cmFuc2FjdGlvbnMoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gICAgLy8gICAgICAgY29udHJhY3QucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgLy8gICAgIH07XG4gICAgLy8gICB9LCBbXSk7XG4gICAgLy8gbGV0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9zdHJlYW0uYmluYW5jZS5jb206OTQ0My93cy9ldXJ1c2R0QHRpY2tlclwiKTtcbiAgICAvLyBzb2NrZXQub25vcGVuID0gZnVuY3Rpb24oZSkge1xuICAgIC8vICAgYWxlcnQoXCJbb3Blbl0gQ29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgICAvLyAgIGFsZXJ0KFwiU2VuZGluZyB0byBzZXJ2ZXJcIik7XG4gICAgLy8gICBzb2NrZXQuc2VuZChcIk15IG5hbWUgaXMgSm9oblwiKTtcbiAgICAvLyB9O1xuICAgIC8vIHNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgIC8vICAgdHJ5IHtcbiAgICAvLyAgIGxldCBtc2cgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIC8vICAgY29uc29sZS5sb2cobXNnKVxuICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gfVxuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBXU191cmwgPSBcImh0dHBzOi8vYXBpLmdteC5pby9wcmljZXNcIiAgXG4gICAgLy8gY29uc3Qge21lc3NhZ2UgfSA9IHVzZVdlYlNvY2tldChXU191cmwsIHtcbiAgICAvLyAgIG9uT3BlbjogKCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImMnZXN0IG9rXCIpXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgICBmZXRjaChcImh0dHBzOi8vYXBpLmdteC5pby9wcmljZXNcIikudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YS5qc29uKCkpKS5jYXRjaCgoZXJyKSlcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICBcbiAgICAgICAgPEZsZXggdz1cIjEwMCVcIj5cblxuICAgICAgICA8L0ZsZXg+XG4gICAgXG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gICJdLCJuYW1lcyI6WyJJbWFnZSIsIkZsZXgiLCJUZXh0IiwiQm94IiwiSFN0YWNrIiwiU3RhY2siLCJTd2l0Y2giLCJCdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZUNvbG9yTW9kZSIsIkljb25CdXR0b24iLCJjb2xvck1vZGUiLCJUYWJsZSIsIlRoZWFkIiwiVHIiLCJUZCIsIlRib2R5IiwiVGgiLCJBQklTIiwiQUREUkVTUyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImV0aGVycyIsInRpbWVzdGFtcGNvbnZlcnQiLCJ1c2VXZWJTb2NrZXQiLCJEYXRhIiwiaXNDb25uZWN0ZWQiLCJpc093bmVyIiwidmF1bHRBZGRyZXNzIiwiY29udHJvbGxlckFkZHJlcyIsInNpZ25lciIsInByb3ZpZGVyIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJ3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});