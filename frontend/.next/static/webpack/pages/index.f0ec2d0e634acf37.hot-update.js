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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { isConnected , isOwner , vaultAddress , controllerAddres , signer , provider  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // useEffect(() => {\n    //   updatetransactions();\n    // }, []);\n    // useEffect(() => {\n    //     const contract = new ethers.Contract(\n    //       ADDRESS.MYVAULT,\n    //       ABIS.MYVAULT,\n    //       provider\n    //     );\n    //     contract.on(\"depositEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     contract.on(\"withdrawEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     return () => {\n    //       contract.removeAllListeners();\n    //     };\n    //   }, []);\n    // let socket = new WebSocket(\"wss://stream.binance.com:9443/ws/eurusdt@ticker\");\n    // socket.onopen = function(e) {\n    //   alert(\"[open] Connection established\");\n    //   alert(\"Sending to server\");\n    //   socket.send(\"My name is John\");\n    // };\n    // socket.onmessage = function(event) {\n    //   try {\n    //   let msg = JSON.parse(event.data);\n    //   console.log(msg)\n    // } catch (e) {\n    //   console.log(e)\n    // }\n    // };\n    // const WS_url = \"https://api.gmx.io/prices\"  \n    // const {message } = useWebSocket(WS_url, {\n    //   onOpen: () => {\n    //     console.log(\"c'est ok\")\n    //   }\n    // })\n    fetch(\"https://api.gmx.io/prices\").then((data1)=>data1.json()).then(console.log(data.json())).catch((err)=>console.log(err.message));\n    // console.log(message)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            w: \"100%\"\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"b/7g9nYwIA2j42d5XBgkYMhL8IE=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQW1CNEI7QUFDMEI7QUFDUjtBQUNvQjtBQUNoQztBQUN5QjtBQUNpQjtBQUUzRCxTQUFTMEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFFBQU8sRUFDUEMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLE9BQU0sRUFDTkMsU0FBUSxFQUNULEdBQUdWLDZFQUFtQkE7SUFDdkIsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLFVBQVU7SUFFVixvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUZBQWlGO0lBQ2pGLGdDQUFnQztJQUNoQyw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxLQUFLO0lBQ0wsdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsSUFBSTtJQUNKLEtBQUs7SUFFTCwrQ0FBK0M7SUFDL0MsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLEtBQUs7SUFDTGUsTUFBTSw2QkFBNkJDLElBQUksQ0FBQyxDQUFDQyxRQUFTQSxNQUFLQyxJQUFJLElBQUlGLElBQUksQ0FBQ0csUUFBUUMsR0FBRyxDQUFDSCxLQUFLQyxJQUFJLEtBQUtHLEtBQUssQ0FBQyxDQUFDQyxNQUFPSCxRQUFRQyxHQUFHLENBQUNFLElBQUlDLE9BQU87SUFDbkksdUJBQXVCO0lBQ3ZCLHFCQUNFO2tCQUVFLDRFQUFDMUMsa0RBQUlBO1lBQUMyQyxHQUFFOzs7Ozs7O0FBTWQsQ0FBQztHQTlEdUJsQjs7UUFRbEJKLHlFQUFtQkE7OztLQVJESSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3g/NmUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEltYWdlLFxuICAgIEZsZXgsXG4gICAgVGV4dCxcbiAgICBCb3gsXG4gICAgSFN0YWNrLFxuICAgIFN0YWNrLFxuICAgIFN3aXRjaCxcbiAgICBCdXR0b24sXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gICAgdXNlQ29sb3JNb2RlLFxuICAgIEljb25CdXR0b24sXG4gICAgY29sb3JNb2RlLFxuICAgIFRhYmxlLFxuICAgIFRoZWFkLFxuICAgIFRyLFxuICAgIFRkLFxuICAgIFRib2R5LFxuICAgIFRoLFxuICB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG4gIGltcG9ydCB7IEFCSVMsIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQGNvbmZpZ1wiO1xuICBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4gIGltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuICBpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG4gIGltcG9ydCB7IHRpbWVzdGFtcGNvbnZlcnQgfSBmcm9tIFwiQC91dGlscy91dGlsc2Z1bmN0aW9uXCI7XG4gIGltcG9ydCB7IHVzZVdlYlNvY2tldCB9IGZyb20gXCJyZWFjdC11c2Utd2Vic29ja2V0L2Rpc3QvbGliL3VzZS13ZWJzb2NrZXRcIjtcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzQ29ubmVjdGVkLFxuICAgICAgaXNPd25lcixcbiAgICAgIHZhdWx0QWRkcmVzcyxcbiAgICAgIGNvbnRyb2xsZXJBZGRyZXMsXG4gICAgICBzaWduZXIsXG4gICAgICBwcm92aWRlcixcbiAgICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuICAgIGNvbnN0IFt0cmFuc2FjdGlvbnMsIHNldFRyYW5zYWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgIHVwZGF0ZXRyYW5zYWN0aW9ucygpO1xuICAgIC8vIH0sIFtdKTtcbiAgXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIC8vICAgICAgIEFERFJFU1MuTVlWQVVMVCxcbiAgICAvLyAgICAgICBBQklTLk1ZVkFVTFQsXG4gICAgLy8gICAgICAgcHJvdmlkZXJcbiAgICAvLyAgICAgKTtcbiAgICAvLyAgICAgY29udHJhY3Qub24oXCJkZXBvc2l0RXZlbnRcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgdXBkYXRldHJhbnNhY3Rpb25zKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBjb250cmFjdC5vbihcIndpdGhkcmF3RXZlbnRcIiwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgdXBkYXRldHJhbnNhY3Rpb25zKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByZXR1cm4gKCkgPT4ge1xuICAgIC8vICAgICAgIGNvbnRyYWN0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIC8vICAgICB9O1xuICAgIC8vICAgfSwgW10pO1xuICAgIC8vIGxldCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vc3RyZWFtLmJpbmFuY2UuY29tOjk0NDMvd3MvZXVydXNkdEB0aWNrZXJcIik7XG4gICAgLy8gc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgIGFsZXJ0KFwiW29wZW5dIENvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XG4gICAgLy8gICBhbGVydChcIlNlbmRpbmcgdG8gc2VydmVyXCIpO1xuICAgIC8vICAgc29ja2V0LnNlbmQoXCJNeSBuYW1lIGlzIEpvaG5cIik7XG4gICAgLy8gfTtcbiAgICAvLyBzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICBsZXQgbXNnID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKG1zZylcbiAgICAvLyB9IGNhdGNoIChlKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAgIC8vIH1cbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc3QgV1NfdXJsID0gXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIgIFxuICAgIC8vIGNvbnN0IHttZXNzYWdlIH0gPSB1c2VXZWJTb2NrZXQoV1NfdXJsLCB7XG4gICAgLy8gICBvbk9wZW46ICgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjJ2VzdCBva1wiKVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIpLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKS50aGVuKGNvbnNvbGUubG9nKGRhdGEuanNvbigpKSkuY2F0Y2goKGVycik9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXG4gICAgLy8gY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgXG4gICAgICAgIDxGbGV4IHc9XCIxMDAlXCI+XG5cbiAgICAgICAgPC9GbGV4PlxuICAgIFxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICAiXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGQiLCJUYm9keSIsIlRoIiwiQUJJUyIsIkFERFJFU1MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRyYWN0UHJvdmlkZXIiLCJldGhlcnMiLCJ0aW1lc3RhbXBjb252ZXJ0IiwidXNlV2ViU29ja2V0IiwiRGF0YSIsImlzQ29ubmVjdGVkIiwiaXNPd25lciIsInZhdWx0QWRkcmVzcyIsImNvbnRyb2xsZXJBZGRyZXMiLCJzaWduZXIiLCJwcm92aWRlciIsInRyYW5zYWN0aW9ucyIsInNldFRyYW5zYWN0aW9ucyIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsInciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});