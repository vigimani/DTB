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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { isConnected , isOwner , vaultAddress , controllerAddres , signer , provider  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // useEffect(() => {\n    //   updatetransactions();\n    // }, []);\n    // useEffect(() => {\n    //     const contract = new ethers.Contract(\n    //       ADDRESS.MYVAULT,\n    //       ABIS.MYVAULT,\n    //       provider\n    //     );\n    //     contract.on(\"depositEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     contract.on(\"withdrawEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     return () => {\n    //       contract.removeAllListeners();\n    //     };\n    //   }, []);\n    // let socket = new WebSocket(\"wss://stream.binance.com:9443/ws/eurusdt@ticker\");\n    // socket.onopen = function(e) {\n    //   alert(\"[open] Connection established\");\n    //   alert(\"Sending to server\");\n    //   socket.send(\"My name is John\");\n    // };\n    // socket.onmessage = function(event) {\n    //   try {\n    //   let msg = JSON.parse(event.data);\n    //   console.log(msg)\n    // } catch (e) {\n    //   console.log(e)\n    // }\n    // };\n    // const WS_url = \"https://api.gmx.io/prices\"\n    // const {message } = useWebSocket(WS_url, {\n    //   onOpen: () => {\n    //     console.log(\"c'est ok\")\n    //   }\n    // })\n    // fetch(\"https://api.gmx.io/prices\")\n    //   .then((data) => data.json())\n    //   .then((actualData) => console.log(actualData))\n    //   .catch((err) => console.log(err.message));\n    // // console.log(message)\n    async function getGmxPrices() {\n        await fetch(\"https://api.gmx.io/prices\").then((res)=>res.json()).then((res)=>{\n            console.log(res);\n        }).catch((e)=>console.log(e)).finally(()=>{\n            setTimeout(getGmxPrices, 500);\n        });\n    }\n    // useEffect(() => {\n    //   if (!isMounted) {\n    //     getGmxPrices()\n    //      setIsMounted(true)\n    //   }\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            w: \"100%\"\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"H5SjtcyIWusB0VVp8U/3zbvldlw=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQW1CMEI7QUFDMEI7QUFDUjtBQUNvQjtBQUNoQztBQUN5QjtBQUNpQjtBQUUzRCxTQUFTMEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFFBQU8sRUFDUEMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLE9BQU0sRUFDTkMsU0FBUSxFQUNULEdBQUdWLDZFQUFtQkE7SUFDdkIsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLFVBQVU7SUFFVixvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUZBQWlGO0lBQ2pGLGdDQUFnQztJQUNoQyw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxLQUFLO0lBQ0wsdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsSUFBSTtJQUNKLEtBQUs7SUFFTCw2Q0FBNkM7SUFDN0MsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLEtBQUs7SUFDTCxxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLG1EQUFtRDtJQUNuRCwrQ0FBK0M7SUFDL0MsMEJBQTBCO0lBRTFCLGVBQWVxQixlQUFnQjtRQUM3QixNQUFNQyxNQUFNLDZCQUE2QkMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLElBQUlGLElBQUksQ0FBRUMsQ0FBQUEsTUFDdkU7WUFBQ0UsUUFBUUMsR0FBRyxDQUFDSDtRQUFJLEdBQUdJLEtBQUssQ0FBQ0MsQ0FBQUEsSUFBS0gsUUFBUUMsR0FBRyxDQUFDRSxJQUFJQyxPQUFPLENBQUMsSUFBSztZQUMxREMsV0FBV1YsY0FBYztRQUMzQjtJQUFFO0lBR0osb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLE1BQU07SUFDTixLQUFLO0lBQ0wscUJBQ0U7a0JBQ0UsNEVBQUN4QyxrREFBSUE7WUFBQ21ELEdBQUU7Ozs7Ozs7QUFHZCxDQUFDO0dBOUV1QjFCOztRQVFsQkoseUVBQW1CQTs7O0tBUkRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlci9EYXRhLmpzeD82ZTM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEltYWdlLFxuICBGbGV4LFxuICBUZXh0LFxuICBCb3gsXG4gIEhTdGFjayxcbiAgU3RhY2ssXG4gIFN3aXRjaCxcbiAgQnV0dG9uLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgdXNlQ29sb3JNb2RlLFxuICBJY29uQnV0dG9uLFxuICBjb2xvck1vZGUsXG4gIFRhYmxlLFxuICBUaGVhZCxcbiAgVHIsXG4gIFRkLFxuICBUYm9keSxcbiAgVGgsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBBQklTLCBBRERSRVNTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0Bjb25maWdcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdGltZXN0YW1wY29udmVydCB9IGZyb20gXCJAL3V0aWxzL3V0aWxzZnVuY3Rpb25cIjtcbmltcG9ydCB7IHVzZVdlYlNvY2tldCB9IGZyb20gXCJyZWFjdC11c2Utd2Vic29ja2V0L2Rpc3QvbGliL3VzZS13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YSgpIHtcbiAgY29uc3Qge1xuICAgIGlzQ29ubmVjdGVkLFxuICAgIGlzT3duZXIsXG4gICAgdmF1bHRBZGRyZXNzLFxuICAgIGNvbnRyb2xsZXJBZGRyZXMsXG4gICAgc2lnbmVyLFxuICAgIHByb3ZpZGVyLFxuICB9ID0gdXNlQ29udHJhY3RQcm92aWRlcigpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2FjdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgdXBkYXRldHJhbnNhY3Rpb25zKCk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAvLyAgICAgICBBRERSRVNTLk1ZVkFVTFQsXG4gIC8vICAgICAgIEFCSVMuTVlWQVVMVCxcbiAgLy8gICAgICAgcHJvdmlkZXJcbiAgLy8gICAgICk7XG4gIC8vICAgICBjb250cmFjdC5vbihcImRlcG9zaXRFdmVudFwiLCAoKSA9PiB7XG4gIC8vICAgICAgICAgdXBkYXRldHJhbnNhY3Rpb25zKCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGNvbnRyYWN0Lm9uKFwid2l0aGRyYXdFdmVudFwiLCAoKSA9PiB7XG4gIC8vICAgICAgICAgdXBkYXRldHJhbnNhY3Rpb25zKCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICAgIGNvbnRyYWN0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAvLyAgICAgfTtcbiAgLy8gICB9LCBbXSk7XG4gIC8vIGxldCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vc3RyZWFtLmJpbmFuY2UuY29tOjk0NDMvd3MvZXVydXNkdEB0aWNrZXJcIik7XG4gIC8vIHNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbihlKSB7XG4gIC8vICAgYWxlcnQoXCJbb3Blbl0gQ29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgLy8gICBhbGVydChcIlNlbmRpbmcgdG8gc2VydmVyXCIpO1xuICAvLyAgIHNvY2tldC5zZW5kKFwiTXkgbmFtZSBpcyBKb2huXCIpO1xuICAvLyB9O1xuICAvLyBzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgLy8gICB0cnkge1xuICAvLyAgIGxldCBtc2cgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAvLyAgIGNvbnNvbGUubG9nKG1zZylcbiAgLy8gfSBjYXRjaCAoZSkge1xuICAvLyAgIGNvbnNvbGUubG9nKGUpXG4gIC8vIH1cbiAgLy8gfTtcblxuICAvLyBjb25zdCBXU191cmwgPSBcImh0dHBzOi8vYXBpLmdteC5pby9wcmljZXNcIlxuICAvLyBjb25zdCB7bWVzc2FnZSB9ID0gdXNlV2ViU29ja2V0KFdTX3VybCwge1xuICAvLyAgIG9uT3BlbjogKCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJjJ2VzdCBva1wiKVxuICAvLyAgIH1cbiAgLy8gfSlcbiAgLy8gZmV0Y2goXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIpXG4gIC8vICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAvLyAgIC50aGVuKChhY3R1YWxEYXRhKSA9PiBjb25zb2xlLmxvZyhhY3R1YWxEYXRhKSlcbiAgLy8gICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiAgLy8gLy8gY29uc29sZS5sb2cobWVzc2FnZSlcblxuICBhc3luYyBmdW5jdGlvbiBnZXRHbXhQcmljZXMgKCkge1xuICAgIGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKCByZXMgPT4gXG4gICAge2NvbnNvbGUubG9nKHJlcyl9KS5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKS5maW5hbGx5KCgpPT4ge1xuICAgICAgc2V0VGltZW91dChnZXRHbXhQcmljZXMsIDUwMClcbiAgICB9KX1cblxuICBcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoIWlzTW91bnRlZCkge1xuICAvLyAgICAgZ2V0R214UHJpY2VzKClcbiAgLy8gICAgICBzZXRJc01vdW50ZWQodHJ1ZSlcbiAgLy8gICB9XG4gIC8vIH0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IHc9XCIxMDAlXCI+PC9GbGV4PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRmxleCIsIlRleHQiLCJCb3giLCJIU3RhY2siLCJTdGFjayIsIlN3aXRjaCIsIkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlQ29sb3JNb2RlIiwiSWNvbkJ1dHRvbiIsImNvbG9yTW9kZSIsIlRhYmxlIiwiVGhlYWQiLCJUciIsIlRkIiwiVGJvZHkiLCJUaCIsIkFCSVMiLCJBRERSRVNTIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiZXRoZXJzIiwidGltZXN0YW1wY29udmVydCIsInVzZVdlYlNvY2tldCIsIkRhdGEiLCJpc0Nvbm5lY3RlZCIsImlzT3duZXIiLCJ2YXVsdEFkZHJlc3MiLCJjb250cm9sbGVyQWRkcmVzIiwic2lnbmVyIiwicHJvdmlkZXIiLCJ0cmFuc2FjdGlvbnMiLCJzZXRUcmFuc2FjdGlvbnMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJ0aW1lciIsInNldFRpbWVyIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwiZ2V0R214UHJpY2VzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJmaW5hbGx5Iiwic2V0VGltZW91dCIsInciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});