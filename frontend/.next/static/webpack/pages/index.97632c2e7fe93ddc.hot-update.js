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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Data; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-websocket/dist/lib/use-websocket */ \"./node_modules/react-use-websocket/dist/lib/use-websocket.js\");\n/* harmony import */ var react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_websocket_dist_lib_use_websocket__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Data() {\n    _s();\n    const { isConnected , isOwner , vaultAddress , controllerAddres , signer , provider  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider)();\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // useEffect(() => {\n    //   updatetransactions();\n    // }, []);\n    // useEffect(() => {\n    //     const contract = new ethers.Contract(\n    //       ADDRESS.MYVAULT,\n    //       ABIS.MYVAULT,\n    //       provider\n    //     );\n    //     contract.on(\"depositEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     contract.on(\"withdrawEvent\", () => {\n    //         updatetransactions();\n    //     });\n    //     return () => {\n    //       contract.removeAllListeners();\n    //     };\n    //   }, []);\n    // let socket = new WebSocket(\"wss://stream.binance.com:9443/ws/eurusdt@ticker\");\n    // socket.onopen = function(e) {\n    //   alert(\"[open] Connection established\");\n    //   alert(\"Sending to server\");\n    //   socket.send(\"My name is John\");\n    // };\n    // socket.onmessage = function(event) {\n    //   try {\n    //   let msg = JSON.parse(event.data);\n    //   console.log(msg)\n    // } catch (e) {\n    //   console.log(e)\n    // }\n    // };\n    // const WS_url = \"https://api.gmx.io/prices\"\n    // const {message } = useWebSocket(WS_url, {\n    //   onOpen: () => {\n    //     console.log(\"c'est ok\")\n    //   }\n    // })\n    fetch(\"https://api.gmx.io/prices\").then((data)=>data.json()).then((actualData)=>console.log(actualData)).catch((err)=>console.log(err.message));\n    // console.log(message)\n    async function getGmxPrices() {\n        try {\n            const result = await fetch(\"https://api.gmx.io/prices\");\n            const data = await result.json();\n            setState(data.x);\n        } catch (e) {\n            console.error(e);\n        }\n        clearTimeout(timer);\n        setTimer(setTimeout(updateDevicePosition, 200));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!isMounted) {\n            updateDevicePosition();\n            setIsMounted(true);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            w: \"100%\"\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Data.jsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Data, \"Q++fi6n2nFLjjckxj9v6JPeF428=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_3__.useContractProvider\n    ];\n});\n_c = Data;\nvar _c;\n$RefreshReg$(_c, \"Data\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQW1CMEI7QUFDMEI7QUFDUjtBQUNvQjtBQUNoQztBQUN5QjtBQUNpQjtBQUUzRCxTQUFTMEIsT0FBTzs7SUFDN0IsTUFBTSxFQUNKQyxZQUFXLEVBQ1hDLFFBQU8sRUFDUEMsYUFBWSxFQUNaQyxpQkFBZ0IsRUFDaEJDLE9BQU0sRUFDTkMsU0FBUSxFQUNULEdBQUdWLDZFQUFtQkE7SUFDdkIsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNlLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLFVBQVU7SUFFVixvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUZBQWlGO0lBQ2pGLGdDQUFnQztJQUNoQyw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxLQUFLO0lBQ0wsdUNBQXVDO0lBQ3ZDLFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsSUFBSTtJQUNKLEtBQUs7SUFFTCw2Q0FBNkM7SUFDN0MsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsTUFBTTtJQUNOLEtBQUs7SUFDTHFCLE1BQU0sNkJBQ0hDLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLElBQ3hCRixJQUFJLENBQUMsQ0FBQ0csYUFBZUMsUUFBUUMsR0FBRyxDQUFDRixhQUNqQ0csS0FBSyxDQUFDLENBQUNDLE1BQVFILFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSUMsT0FBTztJQUN6Qyx1QkFBdUI7SUFFdkIsZUFBZUMsZUFBZ0I7UUFDN0IsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTVgsTUFBTTtZQUMzQixNQUFNRSxPQUFPLE1BQU1TLE9BQU9SLElBQUk7WUFDOUJTLFNBQVNWLEtBQUtXLENBQUM7UUFDakIsRUFBRSxPQUFPQyxHQUFHO1lBQ1ZULFFBQVFVLEtBQUssQ0FBQ0Q7UUFDaEI7UUFDQUUsYUFBYXBCO1FBQ2JDLFNBQVNvQixXQUFXQyxzQkFBc0I7SUFDNUM7SUFFQXRDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNrQixXQUFXO1lBQ2JvQjtZQUNBbkIsYUFBYSxJQUFJO1FBQ3BCLENBQUM7SUFDSDtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDdkMsa0RBQUlBO1lBQUMyRCxHQUFFOzs7Ozs7O0FBR2QsQ0FBQztHQW5GdUJsQzs7UUFRbEJKLHlFQUFtQkE7OztLQVJESSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvRGF0YS5qc3g/NmUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZSxcbiAgRmxleCxcbiAgVGV4dCxcbiAgQm94LFxuICBIU3RhY2ssXG4gIFN0YWNrLFxuICBTd2l0Y2gsXG4gIEJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIHVzZUNvbG9yTW9kZSxcbiAgSWNvbkJ1dHRvbixcbiAgY29sb3JNb2RlLFxuICBUYWJsZSxcbiAgVGhlYWQsXG4gIFRyLFxuICBUZCxcbiAgVGJvZHksXG4gIFRoLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgQUJJUywgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdFByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9Db250cmFjdENvbnRleHRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHRpbWVzdGFtcGNvbnZlcnQgfSBmcm9tIFwiQC91dGlscy91dGlsc2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyB1c2VXZWJTb2NrZXQgfSBmcm9tIFwicmVhY3QtdXNlLXdlYnNvY2tldC9kaXN0L2xpYi91c2Utd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGEoKSB7XG4gIGNvbnN0IHtcbiAgICBpc0Nvbm5lY3RlZCxcbiAgICBpc093bmVyLFxuICAgIHZhdWx0QWRkcmVzcyxcbiAgICBjb250cm9sbGVyQWRkcmVzLFxuICAgIHNpZ25lcixcbiAgICBwcm92aWRlcixcbiAgfSA9IHVzZUNvbnRyYWN0UHJvdmlkZXIoKTtcbiAgY29uc3QgW3RyYW5zYWN0aW9ucywgc2V0VHJhbnNhY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHVwZGF0ZXRyYW5zYWN0aW9ucygpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgLy8gICAgICAgQUREUkVTUy5NWVZBVUxULFxuICAvLyAgICAgICBBQklTLk1ZVkFVTFQsXG4gIC8vICAgICAgIHByb3ZpZGVyXG4gIC8vICAgICApO1xuICAvLyAgICAgY29udHJhY3Qub24oXCJkZXBvc2l0RXZlbnRcIiwgKCkgPT4ge1xuICAvLyAgICAgICAgIHVwZGF0ZXRyYW5zYWN0aW9ucygpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICBjb250cmFjdC5vbihcIndpdGhkcmF3RXZlbnRcIiwgKCkgPT4ge1xuICAvLyAgICAgICAgIHVwZGF0ZXRyYW5zYWN0aW9ucygpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgICBjb250cmFjdC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgLy8gICAgIH07XG4gIC8vICAgfSwgW10pO1xuICAvLyBsZXQgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzczovL3N0cmVhbS5iaW5hbmNlLmNvbTo5NDQzL3dzL2V1cnVzZHRAdGlja2VyXCIpO1xuICAvLyBzb2NrZXQub25vcGVuID0gZnVuY3Rpb24oZSkge1xuICAvLyAgIGFsZXJ0KFwiW29wZW5dIENvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XG4gIC8vICAgYWxlcnQoXCJTZW5kaW5nIHRvIHNlcnZlclwiKTtcbiAgLy8gICBzb2NrZXQuc2VuZChcIk15IG5hbWUgaXMgSm9oblwiKTtcbiAgLy8gfTtcbiAgLy8gc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICBsZXQgbXNnID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgLy8gICBjb25zb2xlLmxvZyhtc2cpXG4gIC8vIH0gY2F0Y2ggKGUpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyB9XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgV1NfdXJsID0gXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCJcbiAgLy8gY29uc3Qge21lc3NhZ2UgfSA9IHVzZVdlYlNvY2tldChXU191cmwsIHtcbiAgLy8gICBvbk9wZW46ICgpID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiYydlc3Qgb2tcIilcbiAgLy8gICB9XG4gIC8vIH0pXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkuZ214LmlvL3ByaWNlc1wiKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbigoYWN0dWFsRGF0YSkgPT4gY29uc29sZS5sb2coYWN0dWFsRGF0YSkpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XG4gIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0R214UHJpY2VzICgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5nbXguaW8vcHJpY2VzXCIpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxuICAgICAgc2V0U3RhdGUoZGF0YS54KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIHNldFRpbWVyKHNldFRpbWVvdXQodXBkYXRlRGV2aWNlUG9zaXRpb24sIDIwMCkpXG4gIH1cbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc01vdW50ZWQpIHtcbiAgICAgICB1cGRhdGVEZXZpY2VQb3NpdGlvbigpXG4gICAgICAgc2V0SXNNb3VudGVkKHRydWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleCB3PVwiMTAwJVwiPjwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZsZXgiLCJUZXh0IiwiQm94IiwiSFN0YWNrIiwiU3RhY2siLCJTd2l0Y2giLCJCdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZUNvbG9yTW9kZSIsIkljb25CdXR0b24iLCJjb2xvck1vZGUiLCJUYWJsZSIsIlRoZWFkIiwiVHIiLCJUZCIsIlRib2R5IiwiVGgiLCJBQklTIiwiQUREUkVTUyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImV0aGVycyIsInRpbWVzdGFtcGNvbnZlcnQiLCJ1c2VXZWJTb2NrZXQiLCJEYXRhIiwiaXNDb25uZWN0ZWQiLCJpc093bmVyIiwidmF1bHRBZGRyZXNzIiwiY29udHJvbGxlckFkZHJlcyIsInNpZ25lciIsInByb3ZpZGVyIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwicHJpY2VzIiwic2V0UHJpY2VzIiwidGltZXIiLCJzZXRUaW1lciIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwiYWN0dWFsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJnZXRHbXhQcmljZXMiLCJyZXN1bHQiLCJzZXRTdGF0ZSIsIngiLCJlIiwiZXJyb3IiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidXBkYXRlRGV2aWNlUG9zaXRpb24iLCJ3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user/Data.jsx\n"));

/***/ })

});