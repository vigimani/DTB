/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/ContractContext.jsx":
/*!*************************************!*\
  !*** ./context/ContractContext.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContractProvider\": () => (/* binding */ ContractProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useContractProvider\": () => (/* binding */ useContractProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _assets_abi_MyVault_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/abi-MyVault.json */ \"./assets/abi-MyVault.json\");\n/* harmony import */ var _assets_token_list_arbitrum_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/token-list-arbitrum.json */ \"./assets/token-list-arbitrum.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_3__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_3__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst ContractContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction useContractProvider() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ContractContext);\n    if (!context) {\n        throw new Error(\"useContractProvider must be used within a ContractProvider\");\n    }\n    return context;\n}\nconst ContractProvider = ({ children  })=>{\n    const vaultAddress = \"0x95401dc811bb5740090279Ba06cfA8fcF6113778\";\n    const controllerAddres = \"0x998abeb3E57409262aE5b751f60747921B33613E\";\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useProvider)();\n    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)();\n    //chakraUI\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    //Dapp ownership\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [usdcBalance, setusdcBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isConnected) {\n            checkOwner();\n            updateUsdcBalance();\n            toast({\n                title: \"Connected\",\n                description: \"Welcome, you are connected with the address : \" + address,\n                status: \"success\",\n                duration: 5000,\n                isClosable: true\n            });\n        }\n    }, [\n        address,\n        isConnected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isConnected) {\n            checkOwner();\n            updateUsdcBalance();\n        }\n    }, []);\n    const checkOwner = async ()=>{\n        const contract = await new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(vaultAddress, _assets_abi_MyVault_json__WEBPACK_IMPORTED_MODULE_5__, provider);\n        let owner = await contract.owner();\n        if (address == owner) {\n            setIsOwner(true);\n        } else {\n            setIsOwner(false);\n        }\n    };\n    const updateUsdcBalance = async ()=>{\n        if (isConnected) {\n            let usdc = await new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_assets_token_list_arbitrum_json__WEBPACK_IMPORTED_MODULE_6__[3].address, wagmi__WEBPACK_IMPORTED_MODULE_3__.erc20ABI, provider);\n            let balance = parseInt((await usdc.balanceOf(address)).toString()) / 10 ** 6;\n            setusdcBalance(balance);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContractContext.Provider, {\n        value: {\n            vaultAddress,\n            controllerAddres,\n            isConnected,\n            isOwner,\n            signer,\n            // deposit,\n            updateUsdcBalance,\n            usdcBalance,\n            provider\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ubuntu/alyra-training/FP/frontend/context/ContractContext.jsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContractContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NvbnRyYWN0Q29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStEO0FBQy9CO0FBQ3VDO0FBQzNCO0FBQ1g7QUFDaUI7QUFDUztBQUUzRCxNQUFNYSxnQ0FBa0JiLDBEQUFtQixDQUFDLElBQUk7QUFDekMsU0FBU2Usc0JBQXNCO0lBQ3BDLE1BQU1DLFVBQVVkLGlEQUFVQSxDQUFDVztJQUMzQixJQUFJLENBQUNHLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQ1IsOERBQ0E7SUFDSixDQUFDO0lBQ0QsT0FBT0Q7QUFDVCxDQUFDO0FBRU0sTUFBTUUsbUJBQW1CLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDaEQsTUFBTUMsZUFBZUMsNENBQW9DO0lBQ3pELE1BQU1HLG1CQUFtQkgsNENBQXlDO0lBQ2xFLE1BQU0sRUFBRUssUUFBTyxFQUFFQyxZQUFXLEVBQUUsR0FBR3RCLGlEQUFVQTtJQUMzQyxNQUFNdUIsV0FBV3JCLGtEQUFXQTtJQUM1QixNQUFNLEVBQUVzQixNQUFNQyxPQUFNLEVBQUUsR0FBR3RCLGdEQUFTQTtJQUVsQyxVQUFVO0lBQ1YsTUFBTXVCLFFBQVF0QiwwREFBUUE7SUFFdEIsZ0JBQWdCO0lBQ2hCLE1BQU0sQ0FBQ3VCLFNBQVNDLFdBQVcsR0FBRzlCLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxDQUFDK0IsYUFBYUMsZUFBZSxHQUFHaEMsK0NBQVFBLENBQUM7SUFFL0NGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJMEIsYUFBYTtZQUNmUztZQUNBQztZQUNBTixNQUFNO2dCQUNKTyxPQUFPO2dCQUNQQyxhQUFhLG1EQUFtRGI7Z0JBQ2hFYyxRQUFRO2dCQUNSQyxVQUFVO2dCQUNWQyxZQUFZLElBQUk7WUFDbEI7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDaEI7UUFBU0M7S0FBWTtJQUV6QjFCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJMEIsYUFBYTtZQUNmUztZQUNBQztRQUNGLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxNQUFNRCxhQUFhLFVBQVk7UUFDN0IsTUFBTU8sV0FBVyxNQUFNLElBQUl2QyxtREFBZSxDQUN4Q2dCLGNBQ0FULHFEQUFRQSxFQUNSaUI7UUFFRixJQUFJaUIsUUFBUSxNQUFNRixTQUFTRSxLQUFLO1FBQ2hDLElBQUluQixXQUFXbUIsT0FBTztZQUNwQlosV0FBVyxJQUFJO1FBQ2pCLE9BQU87WUFDTEEsV0FBVyxLQUFLO1FBQ2xCLENBQUM7SUFDSDtJQUVBLE1BQU1JLG9CQUFvQixVQUFZO1FBQ3BDLElBQUlWLGFBQWE7WUFDZixJQUFJbUIsT0FBTyxNQUFNLElBQUkxQyxtREFBZSxDQUFDUSx3RUFBb0IsRUFBRUYsMkNBQVFBLEVBQUVrQjtZQUNyRSxJQUFJbUIsVUFDRkMsU0FBUyxDQUFDLE1BQU1GLEtBQUtHLFNBQVMsQ0FBQ3ZCLFFBQU8sRUFBR3dCLFFBQVEsTUFBTSxNQUFNO1lBQy9EZixlQUFlWTtRQUNqQixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ2xDLGdCQUFnQnNDLFFBQVE7UUFDdkJDLE9BQU87WUFDTGhDO1lBQ0FJO1lBQ0FHO1lBQ0FLO1lBQ0FGO1lBQ0EsV0FBVztZQUNYTztZQUNBSDtZQUNBTjtRQUNGO2tCQUVDVDs7Ozs7O0FBR1AsRUFBRTtBQUVGLGlFQUFlTixlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb250ZXh0L0NvbnRyYWN0Q29udGV4dC5qc3g/ODdjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQmFsYW5jZSwgdXNlUHJvdmlkZXIsIHVzZVNpZ25lciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZXJjMjBBQkkgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCBhYmlWYXVsdCBmcm9tIFwiLi4vYXNzZXRzL2FiaS1NeVZhdWx0Lmpzb25cIjtcbmltcG9ydCBUb2tlbkxpc3QgZnJvbSBcIi4uL2Fzc2V0cy90b2tlbi1saXN0LWFyYml0cnVtLmpzb25cIjtcblxuY29uc3QgQ29udHJhY3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250cmFjdFByb3ZpZGVyKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb250cmFjdENvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcInVzZUNvbnRyYWN0UHJvdmlkZXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENvbnRyYWN0UHJvdmlkZXJcIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBDb250cmFjdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB2YXVsdEFkZHJlc3MgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WQVVMVEFERFJFU1M7XG4gIGNvbnN0IGNvbnRyb2xsZXJBZGRyZXMgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HTVhDT05UUk9MQUREUkVTUztcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2lnbmVyIH0gPSB1c2VTaWduZXIoKTtcblxuICAvL2NoYWtyYVVJXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICAvL0RhcHAgb3duZXJzaGlwXG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZGNCYWxhbmNlLCBzZXR1c2RjQmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgY2hlY2tPd25lcigpO1xuICAgICAgdXBkYXRlVXNkY0JhbGFuY2UoKTtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiQ29ubmVjdGVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldlbGNvbWUsIHlvdSBhcmUgY29ubmVjdGVkIHdpdGggdGhlIGFkZHJlc3MgOiBcIiArIGFkZHJlc3MsXG4gICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbYWRkcmVzcywgaXNDb25uZWN0ZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgY2hlY2tPd25lcigpO1xuICAgICAgdXBkYXRlVXNkY0JhbGFuY2UoKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGVja093bmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIHZhdWx0QWRkcmVzcyxcbiAgICAgIGFiaVZhdWx0LFxuICAgICAgcHJvdmlkZXJcbiAgICApO1xuICAgIGxldCBvd25lciA9IGF3YWl0IGNvbnRyYWN0Lm93bmVyKCk7XG4gICAgaWYgKGFkZHJlc3MgPT0gb3duZXIpIHtcbiAgICAgIHNldElzT3duZXIodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzT3duZXIoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVVc2RjQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIGxldCB1c2RjID0gYXdhaXQgbmV3IGV0aGVycy5Db250cmFjdChUb2tlbkxpc3RbM10uYWRkcmVzcywgZXJjMjBBQkksIHByb3ZpZGVyKTtcbiAgICAgIGxldCBiYWxhbmNlID1cbiAgICAgICAgcGFyc2VJbnQoKGF3YWl0IHVzZGMuYmFsYW5jZU9mKGFkZHJlc3MpKS50b1N0cmluZygpKSAvIDEwICoqIDY7XG4gICAgICBzZXR1c2RjQmFsYW5jZShiYWxhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udHJhY3RDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB2YXVsdEFkZHJlc3MsXG4gICAgICAgIGNvbnRyb2xsZXJBZGRyZXMsXG4gICAgICAgIGlzQ29ubmVjdGVkLFxuICAgICAgICBpc093bmVyLFxuICAgICAgICBzaWduZXIsXG4gICAgICAgIC8vIGRlcG9zaXQsXG4gICAgICAgIHVwZGF0ZVVzZGNCYWxhbmNlLFxuICAgICAgICB1c2RjQmFsYW5jZSxcbiAgICAgICAgcHJvdmlkZXJcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udHJhY3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJhY3RDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZXRoZXJzIiwidXNlQWNjb3VudCIsInVzZUJhbGFuY2UiLCJ1c2VQcm92aWRlciIsInVzZVNpZ25lciIsInVzZVRvYXN0IiwiZXJjMjBBQkkiLCJhYmlWYXVsdCIsIlRva2VuTGlzdCIsIkNvbnRyYWN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwiY29udGV4dCIsIkVycm9yIiwiQ29udHJhY3RQcm92aWRlciIsImNoaWxkcmVuIiwidmF1bHRBZGRyZXNzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1ZBVUxUQUREUkVTUyIsImNvbnRyb2xsZXJBZGRyZXMiLCJORVhUX1BVQkxJQ19HTVhDT05UUk9MQUREUkVTUyIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsInByb3ZpZGVyIiwiZGF0YSIsInNpZ25lciIsInRvYXN0IiwiaXNPd25lciIsInNldElzT3duZXIiLCJ1c2RjQmFsYW5jZSIsInNldHVzZGNCYWxhbmNlIiwiY2hlY2tPd25lciIsInVwZGF0ZVVzZGNCYWxhbmNlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJvd25lciIsInVzZGMiLCJiYWxhbmNlIiwicGFyc2VJbnQiLCJiYWxhbmNlT2YiLCJ0b1N0cmluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/ContractContext.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__, _context_ContractContext__WEBPACK_IMPORTED_MODULE_9__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_6__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__, _context_ContractContext__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)(// [goerli],\n[\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.hardhat\n], [\n    //alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Decentralized Trading Bot\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n            client: wagmiClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n                chains: chains,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContractContext__WEBPACK_IMPORTED_MODULE_9__.ContractProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/_app.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/_app.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/_app.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ubuntu/alyra-training/FP/frontend/pages/_app.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDYTtBQUNvQztBQUNaO0FBQ3BCO0FBQ1c7QUFDRjtBQUNOO0FBQ1c7QUFFN0QsTUFBTSxFQUFFVyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHVixzREFBZUEsQ0FDMUMsWUFBWTtBQUNaO0lBQUNHLGlEQUFPQTtDQUFDLEVBQ1Q7SUFDRSxzREFBc0Q7SUFDdERHLHNFQUFjQTtDQUNmO0FBR0gsTUFBTSxFQUFFSyxXQUFVLEVBQUUsR0FBR2IseUVBQWlCQSxDQUFDO0lBQ3ZDYyxTQUFTO0lBQ1RIO0FBQ0Y7QUFDQSxNQUFNSSxjQUFjWixtREFBWUEsQ0FBQztJQUMvQmEsYUFBYSxJQUFJO0lBQ2pCSDtJQUNBRDtBQUNGO0FBRWUsU0FBU0ssSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3BELHFCQUNFLDhEQUFDViw0REFBY0E7a0JBQ2IsNEVBQUNMLDhDQUFXQTtZQUFDZ0IsUUFBUUw7c0JBQ25CLDRFQUFDZCxzRUFBa0JBO2dCQUFDVSxRQUFRQTswQkFDNUIsNEVBQUNELHNFQUFnQkE7OEJBQ2YsNEVBQUNRO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0V2FsbGV0cywgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgaGFyZGhhdCwgZ29lcmxpIH0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9hbGNoZW15XCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBDb250cmFjdFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dCc7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICAvLyBbZ29lcmxpXSxcbiAgW2hhcmRoYXRdLFxuICBbXG4gICAgLy9hbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfSUQgfSksXG4gICAgcHVibGljUHJvdmlkZXIoKSxcbiAgXVxuKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiRGVjZW50cmFsaXplZCBUcmFkaW5nIEJvdFwiLFxuICBjaGFpbnMsXG59KTtcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICA8Q29udHJhY3RQcm92aWRlcj5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9Db250cmFjdFByb3ZpZGVyPlxuICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgIDwvV2FnbWlDb25maWc+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiaGFyZGhhdCIsImdvZXJsaSIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJDb250cmFjdFByb3ZpZGVyIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ }),

/***/ "./assets/abi-MyVault.json":
/*!*********************************!*\
  !*** ./assets/abi-MyVault.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"NewTokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"TokenRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"GMX_controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"acceptToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateral","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deltavalue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"exposition","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExposition","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGMX_controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNetAssetValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gmxVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"isAccepted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidatePositions","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"netAssetValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openPosition","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"removeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_exposition","type":"uint8"}],"name":"setExposition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setGMX_controller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenAccepted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateNetAssetValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ "./assets/token-list-arbitrum.json":
/*!*****************************************!*\
  !*** ./assets/token-list-arbitrum.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Dai Stablecoin","address":"0x6B175474E89094C44Da98b954EedeAC495271d0F","symbol":"DAI","decimals":18},{"name":"Ethereum","address":"0x0000000000000000000000000000000000000000","symbol":"ETH","decimals":18},{"name":"Wrapped Ether","address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","symbol":"WETH","decimals":18},{"name":"USDCoin","address":"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8","symbol":"USDC","decimals":6}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();