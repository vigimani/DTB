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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { isConnected , isOwner , vaultAddress , controllerAddres , signer , provider  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [, setVar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    // useEffect(() => {\n    //   updatetransactions();\n    // }, []);\n    // useEffect(() => {\n    //     const contract = new ethers.Contract(\n    //       ADDRESS.MYVAULT,\n    //       ABIS.MYVAULT,\n    //       provider\n    //     );\n    //     contract.on(\"depositEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     contract.on(\"withdrawEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     return () => {\n    //       contract.removeAllListeners();\n    //     };\n    //   }, []);\n    // let socket = new WebSocket(\"wss://stream.binance.com:9443/ws/eurusdt@ticker\");\n    // socket.onopen = function(e) {\n    //   alert(\"[open] Connection established\");\n    //   alert(\"Sending to server\");\n    //   socket.send(\"My name is John\");\n    // };\n    // socket.onmessage = function(event) {\n    //   try {\n    //   let msg = JSON.parse(event.data);\n    //   console.log(msg)\n    // } catch (e) {\n    //   console.log(e)\n    // }\n    // };\n    // const WS_url = \"https://api.gmx.io/prices\"\n    // const {message } = useWebSocket(WS_url, {\n    //   onOpen: () => {\n    //     console.log(\"c'est ok\")\n    //   }\n    // })\n    // fetch(\"https://api.gmx.io/prices\")\n    //   .then((data) => data.json())\n    //   .then((actualData) => console.log(actualData))\n    //   .catch((err) => console.log(err.message));\n    // // console.log(message)\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            console.log(res);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 500);\n        });\n    }\n    // useEffect(() => {\n    //   if (!isMounted) {\n    //     getGmxPrices()\n    //      setIsMounted(true)\n    //   }\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            w: \"100%\"\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"6oomSOjNsn/bdnsywlGAmw1xQsA=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQW1CMEI7QUFDMEI7QUFDUjtBQUNvQjtBQUNoQztBQUN5QjtBQUNpQjtBQUUzRCxTQUFTMEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFFBQU8sRUFDUEMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLE9BQU0sRUFDTkMsU0FBUSxFQUNULEdBQUdWLDZFQUFtQkE7SUFDdkIsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sR0FBR2lCLE9BQU8sR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzVCLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUVWLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUztJQUNULDBDQUEwQztJQUMxQyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsU0FBUztJQUNULFlBQVk7SUFDWixpRkFBaUY7SUFDakYsZ0NBQWdDO0lBQ2hDLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLEtBQUs7SUFDTCx1Q0FBdUM7SUFDdkMsVUFBVTtJQUNWLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixJQUFJO0lBQ0osS0FBSztJQUVMLDZDQUE2QztJQUM3Qyw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixNQUFNO0lBQ04sS0FBSztJQUNMLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsbURBQW1EO0lBQ25ELCtDQUErQztJQUMvQywwQkFBMEI7SUFHMUIsZUFBZWtCLGVBQWU7UUFDNUIsTUFBTUMsTUFBTSw2QkFDVEMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQyxNQUFRO1lBQ2JFLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDZCxHQUNDSSxLQUFLLENBQUMsQ0FBQ0MsSUFBTUgsUUFBUUMsR0FBRyxDQUFDRSxJQUN6QkMsT0FBTyxDQUFDLElBQU07WUFDYkMsV0FBV1YsY0FBYztRQUMzQjtJQUNKO0lBRUEsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLE1BQU07SUFDTixLQUFLO0lBQ0wscUJBQ0U7a0JBQ0UsNEVBQUNyQyxrREFBSUE7WUFBQ2dELEdBQUU7Ozs7Ozs7QUFHZCxDQUFDO0dBbkZ1QnZCOztRQVFsQkoseUVBQW1CQTs7O0tBUkRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci9EYXRhLmpzeD82ZTM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEltYWdlLFxuICBGbGV4LFxuICBUZXh0LFxuICBCb3gsXG4gIEhTdGFjayxcbiAgU3RhY2ssXG4gIFN3aXRjaCxcbiAgQnV0dG9uLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgdXNlQ29sb3JNb2RlLFxuICBJY29uQnV0dG9uLFxuICBjb2xvck1vZGUsXG4gIFRhYmxlLFxuICBUaGVhZCxcbiAgVHIsXG4gIFRkLFxuICBUYm9keSxcbiAgVGgsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBBQklTLCBBRERSRVNTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0Bjb25maWdcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdGltZXN0YW1wY29udmVydCB9IGZyb20gXCJAL3V0aWxzL3V0aWxzZnVuY3Rpb25cIjtcbmltcG9ydCB7IHVzZVdlYlNvY2tldCB9IGZyb20gXCJyZWFjdC11c2Utd2Vic29ja2V0L2Rpc3QvbGliL3VzZS13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YSgpIHtcbiAgY29uc3Qge1xuICAgIGlzQ29ubmVjdGVkLFxuICAgIGlzT3duZXIsXG4gICAgdmF1bHRBZGRyZXNzLFxuICAgIGNvbnRyb2xsZXJBZGRyZXMsXG4gICAgc2lnbmVyLFxuICAgIHByb3ZpZGVyLFxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2FjdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFssIHNldFZhcl0gPSB1c2VTdGF0ZSgwKVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHVwZGF0ZXRyYW5zYWN0aW9ucygpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgLy8gICAgICAgQUREUkVTUy5NWVZBVUxULFxuICAvLyAgICAgICBBQklTLk1ZVkFVTFQsXG4gIC8vICAgICAgIHByb3ZpZGVyXG4gIC8vICAgICApO1xuICAvLyAgICAgY29udHJhY3Qub24oXCJkZXBvc2l0RXZlbnRcIiwgKCkgPT4ge1xuICAvLyAgICAgICAgIHVwZGF0ZXRyYW5zYWN0aW9ucygpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICBjb250cmFjdC5vbihcIndpdGhkcmF3RXZlbnRcIiwgKCkgPT4ge1xuICAvLyAgICAgICAgIHVwZGF0ZXRyYW5zYWN0aW9ucygpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgICBjb250cmFjdC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgLy8gICAgIH07XG4gIC8vICAgfSwgW10pO1xuICAvLyBsZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzczovL3N0cmVhbS5iaW5hbmNlLmNvbTo5NDQzL3dzL2V1cnVzZHRAdGlja2VyXCIpO1xuICAvLyBzb2NrZXQub25vcGVuID0gZnVuY3Rpb24oZSkge1xuICAvLyAgIGFsZXJ0KFwiW29wZW5dIENvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XG4gIC8vICAgYWxlcnQoXCJTZW5kaW5nIHRvIHNlcnZlclwiKTtcbiAgLy8gICBzb2NrZXQuc2VuZChcIk15IG5hbWUgaXMgSm9oblwiKTtcbiAgLy8gfTtcbiAgLy8gc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICBsZXQgbXNnID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgLy8gICBjb25zb2xlLmxvZyhtc2cpXG4gIC8vIH0gY2F0Y2ggKGUpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyB9XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgV1NfdXJsID0gXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCJcbiAgLy8gY29uc3Qge21lc3NhZ2UgfSA9IHVzZVdlYlNvY2tldChXU191cmwsIHtcbiAgLy8gICBvbk9wZW46ICgpID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiYydlc3Qgb2tcIilcbiAgLy8gICB9XG4gIC8vIH0pXG4gIC8vIGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKVxuICAvLyAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgLy8gICAudGhlbigoYWN0dWFsRGF0YSkgPT4gY29uc29sZS5sb2coYWN0dWFsRGF0YSkpXG4gIC8vICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XG4gIC8vIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG5cblxuICBhc3luYyBmdW5jdGlvbiBnZXRHbXhQcmljZXMoKSB7XG4gICAgYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZ2V0R214UHJpY2VzLCA1MDApO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghaXNNb3VudGVkKSB7XG4gIC8vICAgICBnZXRHbXhQcmljZXMoKVxuICAvLyAgICAgIHNldElzTW91bnRlZCh0cnVlKVxuICAvLyAgIH1cbiAgLy8gfSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXggdz1cIjEwMCVcIj48L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFibGUiLCJUaGVhZCIsIlRyIiwiVGQiLCJUYm9keSIsIlRoIiwiQUJJUyIsIkFERFJFU1MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRyYWN0UHJvdmlkZXIiLCJldGhlcnMiLCJ0aW1lc3RhbXBjb252ZXJ0IiwidXNlV2ViU29ja2V0IiwiRGF0YSIsImlzQ29ubmVjdGVkIiwiaXNPd25lciIsInZhdWx0QWRkcmVzcyIsImNvbnRyb2xsZXJBZGRyZXMiLCJzaWduZXIiLCJwcm92aWRlciIsInRyYW5zYWN0aW9ucyIsInNldFRyYW5zYWN0aW9ucyIsInByaWNlcyIsInNldFByaWNlcyIsInNldFZhciIsImdldEdteFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlIiwiZmluYWxseSIsInNldFRpbWVvdXQiLCJ3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});