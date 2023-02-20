"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/ContractContext.jsx":
/*!*************************************!*\
  !*** ./context/ContractContext.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContractProvider\": function() { return /* binding */ ContractProvider; },\n/* harmony export */   \"useContractProvider\": function() { return /* binding */ useContractProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst ContractContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction useContractProvider() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ContractContext);\n    if (!context) {\n        throw new Error(\"useContractProvider must be used within a ContractProvider\");\n    }\n    return context;\n}\n_s(useContractProvider, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst ContractProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useProvider)();\n    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)();\n    //chakraUI\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    //Dapp ownership\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [usdcBalance, setusdcBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [plpBalance, setplpBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isConnected) {\n            checkOwner();\n            updateUsdcBalance();\n            updatePlpBalance();\n            toast({\n                title: \"Connected\",\n                description: \"Welcome, you are connected with the address : \" + address,\n                status: \"success\",\n                duration: 5000,\n                isClosable: true\n            });\n        }\n    }, [\n        address,\n        isConnected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isConnected) {\n            checkOwner();\n            updateData();\n            updateUsdcBalance();\n            updatePlpBalance();\n        }\n    }, []);\n    const checkOwner = async ()=>{\n        const myvaultContract = await new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.MYVAULT, provider);\n        let owner = await myvaultContract.owner();\n        if (address == owner) {\n            setIsOwner(true);\n        } else {\n            setIsOwner(false);\n        }\n    };\n    const updateUsdcBalance = async ()=>{\n        if (isConnected) {\n            let usdc = await new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.USDC, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.ERC20, provider);\n            let balance = parseInt((await usdc.balanceOf(address)).toString()) / 10 ** 6;\n            setusdcBalance(balance);\n        }\n    };\n    const updatePlpBalance = async ()=>{\n        if (isConnected) {\n            let plp = await new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.ERC20, provider);\n            let balance = parseInt((await plp.balanceOf(address)).toString()) / 10 ** 18;\n            setplpBalance(balance);\n        }\n    };\n    //data\n    const [increasePosition, setIncreasePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [decreasePosition, setDecreasePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [totalsupply, setTotalsupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [vaultusdc, setVaultusdc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [navcalculated, setNavcalculated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shareprice, setShareprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longsize, setLongsize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longcollateral, setLongcollateral] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longavgprice, setLongavgprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longdelta, setLongdelta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longleverage, setLongleverage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortsize, setShortsize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortcollateral, setShortcollateral] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortavgprice, setShortavgprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortdelta, setShortdelta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortleverage, setShortleverage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const getPositions = async (_addr, _isLong)=>{\n        let collateralToken = _isLong ? _utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.WETH : _utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.USDC;\n        const GMX_READER = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.GMX_READER, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.GMX_READER, provider);\n        let response = await GMX_READER.getPositions(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.GMX_VAULT, _addr, [\n            collateralToken\n        ], [\n            \"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1\"\n        ], [\n            _isLong\n        ]);\n        return response;\n    };\n    const updateData = async ()=>{\n        let responseLong = await getPositions(\"0x998abeb3E57409262aE5b751f60747921B33613E\", true);\n        let responseShort = await getPositions(\"0x998abeb3E57409262aE5b751f60747921B33613E\", false);\n        const VAULTCONTRACT = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.MYVAULT, signer);\n        const GMX_POSITION_ROUTER = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.GMX_POSITION_ROUTER, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.GMX_POSITION_ROUTER, signer);\n        const USDC = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.USDC, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.ERC20, signer);\n        let totalSupply = parseInt((await VAULTCONTRACT.totalSupply()).toString());\n        setTotalsupply(numberWithSpaces(totalSupply / 10 ** 18));\n        let expo = parseInt((await VAULTCONTRACT.getExposition()).toString());\n        setExpo(expo);\n        let balanceUSDC = parseInt((await USDC.balanceOf(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT)).toString());\n        setVaultusdc(balanceUSDC / 10 ** 6);\n        let NAV = parseInt(responseLong[1].toString()) + parseInt(responseShort[1].toString()) + parseInt(responseShort[8].toString()) + parseInt(responseLong[8].toString()) + parseInt(balanceUSDC.toString());\n        setNavcalculated(numberWithSpaces((NAV / 10 ** 30).toFixed(2)));\n        let shareprice = totalSupply == 0 ? 0 : NAV / totalSupply / 10 ** 12;\n        setShareprice(shareprice);\n        setLongsize(numberWithSpaces((parseInt(responseLong[0].toString()) / 10 ** 30).toFixed(2)));\n        setLongcollateral((parseInt(responseLong[1].toString()) / 10 ** 30).toFixed(2));\n        setLongavgprice(parseInt(responseLong[2].toString()) / 10 ** 30);\n        setLongdelta((parseInt(responseLong[8].toString()) / 10 ** 30).toFixed(2));\n        let longlev = parseInt(responseLong[0].toString()) / parseInt(responseLong[1].toString());\n        setLongleverage(longlev.toFixed(2));\n        setShortsize(numberWithSpaces((parseInt(responseShort[0].toString()) / 10 ** 30).toFixed(2)));\n        setShortcollateral((parseInt(responseShort[1].toString()) / 10 ** 30).toFixed(2));\n        setShortavgprice(parseInt(responseShort[2].toString()) / 10 ** 30);\n        setShortdelta((parseInt(responseShort[8].toString()) / 10 ** 30).toFixed(2));\n        let shortlev = parseInt(responseShort[0].toString()) / parseInt(responseShort[1].toString());\n        setShortleverage(shortlev.toFixed(2));\n        let x = await (\"getRequestQueueLengths\", await GMX_POSITION_ROUTER.getRequestQueueLengths());\n        setDecreasePosition(parseInt(x[3].toString()) - parseInt(x[2].toString()));\n        setIncreasePosition(parseInt(x[1].toString()) - parseInt(x[0].toString()));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContractContext.Provider, {\n        value: {\n            isConnected,\n            isOwner,\n            signer,\n            updateUsdcBalance,\n            updatePlpBalance,\n            usdcBalance,\n            plpBalance,\n            provider,\n            totalsupply,\n            shareprice,\n            navcalculated,\n            vaultusdc,\n            longsize,\n            longcollateral,\n            longdelta,\n            longleverage,\n            longavgprice,\n            increasePosition,\n            decreasePosition,\n            shortsize,\n            shortcollateral\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ubuntu/alyra-training/FP/frontend/context/ContractContext.jsx\",\n        lineNumber: 194,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ContractProvider, \"RlVtM5Zt0LALKp2OBXboHx5wtf0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useProvider,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = ContractProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractContext);\nvar _c;\n$RefreshReg$(_c, \"ContractProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TVgsb0JBQW9CWSxzQkFBc0IsRUFBRTtRQUNsRHZELG9CQUFvQlAsU0FBUzZELENBQUMsQ0FBQyxFQUFFLENBQUMzRCxRQUFRLE1BQU1GLFNBQVM2RCxDQUFDLENBQUMsRUFBRSxDQUFDM0QsUUFBUTtRQUN0RUcsb0JBQW9CTCxTQUFTNkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQzNELFFBQVEsTUFBTUYsU0FBUzZELENBQUMsQ0FBQyxFQUFFLENBQUMzRCxRQUFRO0lBQ3hFO0lBQ0EscUJBQ0UsOERBQUN0QyxnQkFBZ0JtRyxRQUFRO1FBQ3ZCQyxPQUFPO1lBQ0w1RjtZQUNBSztZQUNBRjtZQUNBUztZQUNBQztZQUNBTjtZQUNBRTtZQUNBUjtZQUNBbUM7WUFDQU07WUFDQUY7WUFDQUY7WUFDQU07WUFDQUU7WUFDQUk7WUFDQUU7WUFDQUo7WUFDQWhCO1lBQ0FFO1lBQ0FvQjtZQUNBRTtRQUNGO2tCQUVDMUQ7Ozs7OztBQUdQLEVBQUU7SUEzTVdEOztRQUNzQmIsNkNBQVVBO1FBQzFCRSw4Q0FBV0E7UUFDSEMsNENBQVNBO1FBR3BCQyxzREFBUUE7OztLQU5YUztBQTZNYiwrREFBZUwsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L0NvbnRyYWN0Q29udGV4dC5qc3g/ODdjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQmFsYW5jZSwgdXNlUHJvdmlkZXIsIHVzZVNpZ25lciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZXJjMjBBQkkgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7QUJJUywgQUREUkVTU30gZnJvbSBcIi4vLi4vdXRpbHMvQGNvbmZpZ1wiXG5cbmNvbnN0IENvbnRyYWN0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udHJhY3RQcm92aWRlcigpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29udHJhY3RDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJ1c2VDb250cmFjdFByb3ZpZGVyIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDb250cmFjdFByb3ZpZGVyXCJcbiAgICApO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgY29uc3QgQ29udHJhY3RQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCBwcm92aWRlciA9IHVzZVByb3ZpZGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2lnbmVyIH0gPSB1c2VTaWduZXIoKTtcblxuICAvL2NoYWtyYVVJXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICAvL0RhcHAgb3duZXJzaGlwXG4gIGNvbnN0IFtpc093bmVyLCBzZXRJc093bmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZGNCYWxhbmNlLCBzZXR1c2RjQmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BscEJhbGFuY2UsIHNldHBscEJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICBjaGVja093bmVyKCk7XG4gICAgICB1cGRhdGVVc2RjQmFsYW5jZSgpO1xuICAgICAgdXBkYXRlUGxwQmFsYW5jZSgpO1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJDb25uZWN0ZWRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2VsY29tZSwgeW91IGFyZSBjb25uZWN0ZWQgd2l0aCB0aGUgYWRkcmVzcyA6IFwiICsgYWRkcmVzcyxcbiAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFthZGRyZXNzLCBpc0Nvbm5lY3RlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICBjaGVja093bmVyKCk7XG4gICAgICB1cGRhdGVEYXRhKCk7XG4gICAgICB1cGRhdGVVc2RjQmFsYW5jZSgpO1xuICAgICAgdXBkYXRlUGxwQmFsYW5jZSgpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoZWNrT3duZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbXl2YXVsdENvbnRyYWN0ID0gYXdhaXQgbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIEFERFJFU1MuTVlWQVVMVCxcbiAgICAgIEFCSVMuTVlWQVVMVCxcbiAgICAgIHByb3ZpZGVyXG4gICAgKTtcbiAgICBsZXQgb3duZXIgPSBhd2FpdCBteXZhdWx0Q29udHJhY3Qub3duZXIoKTtcbiAgICBpZiAoYWRkcmVzcyA9PSBvd25lcikge1xuICAgICAgc2V0SXNPd25lcih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SXNPd25lcihmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVzZGNCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgbGV0IHVzZGMgPSBhd2FpdCBuZXcgZXRoZXJzLkNvbnRyYWN0KEFERFJFU1MuVVNEQywgQUJJUy5FUkMyMCwgcHJvdmlkZXIpO1xuICAgICAgbGV0IGJhbGFuY2UgPVxuICAgICAgICBwYXJzZUludCgoYXdhaXQgdXNkYy5iYWxhbmNlT2YoYWRkcmVzcykpLnRvU3RyaW5nKCkpIC8gMTAgKiogNjtcbiAgICAgIHNldHVzZGNCYWxhbmNlKGJhbGFuY2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdXBkYXRlUGxwQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIGxldCBwbHAgPSBhd2FpdCBuZXcgZXRoZXJzLkNvbnRyYWN0KEFERFJFU1MuTVlWQVVMVCwgQUJJUy5FUkMyMCwgcHJvdmlkZXIpO1xuICAgICAgbGV0IGJhbGFuY2UgPVxuICAgICAgICBwYXJzZUludCgoYXdhaXQgcGxwLmJhbGFuY2VPZihhZGRyZXNzKSkudG9TdHJpbmcoKSkgLyAxMCAqKiAxODtcbiAgICAgIHNldHBscEJhbGFuY2UoYmFsYW5jZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vZGF0YVxuICBjb25zdCBbaW5jcmVhc2VQb3NpdGlvbiwgc2V0SW5jcmVhc2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZGVjcmVhc2VQb3NpdGlvbiwgc2V0RGVjcmVhc2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG90YWxzdXBwbHksIHNldFRvdGFsc3VwcGx5XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdmF1bHR1c2RjLCBzZXRWYXVsdHVzZGNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtuYXZjYWxjdWxhdGVkLCBzZXROYXZjYWxjdWxhdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hhcmVwcmljZSwgc2V0U2hhcmVwcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvbmdzaXplLCBzZXRMb25nc2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvbmdjb2xsYXRlcmFsLCBzZXRMb25nY29sbGF0ZXJhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvbmdhdmdwcmljZSwgc2V0TG9uZ2F2Z3ByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbG9uZ2RlbHRhLCBzZXRMb25nZGVsdGFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb25nbGV2ZXJhZ2UsIHNldExvbmdsZXZlcmFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Nob3J0c2l6ZSwgc2V0U2hvcnRzaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvcnRjb2xsYXRlcmFsLCBzZXRTaG9ydGNvbGxhdGVyYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG9ydGF2Z3ByaWNlLCBzZXRTaG9ydGF2Z3ByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvcnRkZWx0YSwgc2V0U2hvcnRkZWx0YV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Nob3J0bGV2ZXJhZ2UsIHNldFNob3J0bGV2ZXJhZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgZ2V0UG9zaXRpb25zID0gYXN5bmMgKF9hZGRyLCBfaXNMb25nKSA9PiB7XG4gICAgbGV0IGNvbGxhdGVyYWxUb2tlbiA9IF9pc0xvbmcgPyBBRERSRVNTLldFVEggOiBBRERSRVNTLlVTREM7XG4gICAgY29uc3QgR01YX1JFQURFUiA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBBRERSRVNTLkdNWF9SRUFERVIsXG4gICAgICBBQklTLkdNWF9SRUFERVIsXG4gICAgICBwcm92aWRlclxuICAgICk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgR01YX1JFQURFUi5nZXRQb3NpdGlvbnMoXG4gICAgICBBRERSRVNTLkdNWF9WQVVMVCxcbiAgICAgIF9hZGRyLFxuICAgICAgW2NvbGxhdGVyYWxUb2tlbl0sXG4gICAgICBbXCIweDgyYUY0OTQ0N0Q4YTA3ZTNiZDk1QkQwZDU2ZjM1MjQxNTIzZkJhYjFcIl0sXG4gICAgICBbX2lzTG9uZ11cbiAgICApO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzcG9uc2VMb25nID0gYXdhaXQgZ2V0UG9zaXRpb25zKFxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR01YQ09OVFJPTEFERFJFU1MsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBsZXQgcmVzcG9uc2VTaG9ydCA9IGF3YWl0IGdldFBvc2l0aW9ucyhcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dNWENPTlRST0xBRERSRVNTLFxuICAgICAgZmFsc2VcbiAgICApO1xuICAgIGNvbnN0IFZBVUxUQ09OVFJBQ1QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KEFERFJFU1MuTVlWQVVMVCwgQUJJUy5NWVZBVUxULCBzaWduZXIpO1xuICAgIGNvbnN0IEdNWF9QT1NJVElPTl9ST1VURVIgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgQUREUkVTUy5HTVhfUE9TSVRJT05fUk9VVEVSLFxuICAgICAgQUJJUy5HTVhfUE9TSVRJT05fUk9VVEVSLFxuICAgICAgc2lnbmVyXG4gICAgKTtcbiAgICBjb25zdCBVU0RDID0gbmV3IGV0aGVycy5Db250cmFjdChBRERSRVNTLlVTREMsIEFCSVMuRVJDMjAsIHNpZ25lcik7XG5cbiAgICBsZXQgdG90YWxTdXBwbHkgPSBwYXJzZUludCgoYXdhaXQgVkFVTFRDT05UUkFDVC50b3RhbFN1cHBseSgpKS50b1N0cmluZygpKTtcbiAgICBzZXRUb3RhbHN1cHBseShudW1iZXJXaXRoU3BhY2VzKHRvdGFsU3VwcGx5IC8gMTAgKiogMTgpKTtcblxuICAgIGxldCBleHBvID0gcGFyc2VJbnQoKGF3YWl0IFZBVUxUQ09OVFJBQ1QuZ2V0RXhwb3NpdGlvbigpKS50b1N0cmluZygpKTtcbiAgICBzZXRFeHBvKGV4cG8pO1xuICAgIGxldCBiYWxhbmNlVVNEQyA9IHBhcnNlSW50KChhd2FpdCBVU0RDLmJhbGFuY2VPZihBRERSRVNTLk1ZVkFVTFQpKS50b1N0cmluZygpKTtcbiAgICBzZXRWYXVsdHVzZGMoYmFsYW5jZVVTREMvMTAqKjYpO1xuXG4gICAgbGV0IE5BViA9XG4gICAgICBwYXJzZUludChyZXNwb25zZUxvbmdbMV0udG9TdHJpbmcoKSkgK1xuICAgICAgcGFyc2VJbnQocmVzcG9uc2VTaG9ydFsxXS50b1N0cmluZygpKSArXG4gICAgICBwYXJzZUludChyZXNwb25zZVNob3J0WzhdLnRvU3RyaW5nKCkpICtcbiAgICAgIHBhcnNlSW50KHJlc3BvbnNlTG9uZ1s4XS50b1N0cmluZygpKSArXG4gICAgICBwYXJzZUludChiYWxhbmNlVVNEQy50b1N0cmluZygpKTtcbiAgICBzZXROYXZjYWxjdWxhdGVkKG51bWJlcldpdGhTcGFjZXMoKE5BVi8xMCoqMzApLnRvRml4ZWQoMikpKTtcblxuICAgIGxldCBzaGFyZXByaWNlID0gdG90YWxTdXBwbHkgPT0gMCA/IDAgOiAoTkFWIC8gdG90YWxTdXBwbHkpLzEwKioxMjtcbiAgICBzZXRTaGFyZXByaWNlKHNoYXJlcHJpY2UpO1xuXG4gICAgc2V0TG9uZ3NpemUoXG4gICAgICBudW1iZXJXaXRoU3BhY2VzKFxuICAgICAgICAocGFyc2VJbnQocmVzcG9uc2VMb25nWzBdLnRvU3RyaW5nKCkpIC8gMTAgKiogMzApLnRvRml4ZWQoMilcbiAgICAgIClcbiAgICApO1xuICAgIHNldExvbmdjb2xsYXRlcmFsKFxuICAgICAgKHBhcnNlSW50KHJlc3BvbnNlTG9uZ1sxXS50b1N0cmluZygpKSAvIDEwICoqIDMwKS50b0ZpeGVkKDIpXG4gICAgKTtcbiAgICBzZXRMb25nYXZncHJpY2UocGFyc2VJbnQocmVzcG9uc2VMb25nWzJdLnRvU3RyaW5nKCkpIC8gMTAgKiogMzApO1xuICAgIHNldExvbmdkZWx0YSgocGFyc2VJbnQocmVzcG9uc2VMb25nWzhdLnRvU3RyaW5nKCkpIC8gMTAgKiogMzApLnRvRml4ZWQoMikpO1xuICAgIGxldCBsb25nbGV2ID1cbiAgICAgIHBhcnNlSW50KHJlc3BvbnNlTG9uZ1swXS50b1N0cmluZygpKSAvXG4gICAgICBwYXJzZUludChyZXNwb25zZUxvbmdbMV0udG9TdHJpbmcoKSk7XG4gICAgc2V0TG9uZ2xldmVyYWdlKGxvbmdsZXYudG9GaXhlZCgyKSk7XG5cbiAgICBzZXRTaG9ydHNpemUoXG4gICAgICBudW1iZXJXaXRoU3BhY2VzKFxuICAgICAgICAocGFyc2VJbnQocmVzcG9uc2VTaG9ydFswXS50b1N0cmluZygpKSAvIDEwICoqIDMwKS50b0ZpeGVkKDIpXG4gICAgICApXG4gICAgKTtcbiAgICBzZXRTaG9ydGNvbGxhdGVyYWwoXG4gICAgICAocGFyc2VJbnQocmVzcG9uc2VTaG9ydFsxXS50b1N0cmluZygpKSAvIDEwICoqIDMwKS50b0ZpeGVkKDIpXG4gICAgKTtcbiAgICBzZXRTaG9ydGF2Z3ByaWNlKHBhcnNlSW50KHJlc3BvbnNlU2hvcnRbMl0udG9TdHJpbmcoKSkgLyAxMCAqKiAzMCk7XG4gICAgc2V0U2hvcnRkZWx0YShcbiAgICAgIChwYXJzZUludChyZXNwb25zZVNob3J0WzhdLnRvU3RyaW5nKCkpIC8gMTAgKiogMzApLnRvRml4ZWQoMilcbiAgICApO1xuICAgIGxldCBzaG9ydGxldiA9XG4gICAgICBwYXJzZUludChyZXNwb25zZVNob3J0WzBdLnRvU3RyaW5nKCkpIC9cbiAgICAgIHBhcnNlSW50KHJlc3BvbnNlU2hvcnRbMV0udG9TdHJpbmcoKSk7XG4gICAgc2V0U2hvcnRsZXZlcmFnZShzaG9ydGxldi50b0ZpeGVkKDIpKTtcblxuICAgIGxldCB4ID0gYXdhaXQgKFwiZ2V0UmVxdWVzdFF1ZXVlTGVuZ3Roc1wiLFxuICAgIGF3YWl0IEdNWF9QT1NJVElPTl9ST1VURVIuZ2V0UmVxdWVzdFF1ZXVlTGVuZ3RocygpKTtcbiAgICBzZXREZWNyZWFzZVBvc2l0aW9uKHBhcnNlSW50KHhbM10udG9TdHJpbmcoKSkgLSBwYXJzZUludCh4WzJdLnRvU3RyaW5nKCkpKTtcbiAgICBzZXRJbmNyZWFzZVBvc2l0aW9uKHBhcnNlSW50KHhbMV0udG9TdHJpbmcoKSkgLSBwYXJzZUludCh4WzBdLnRvU3RyaW5nKCkpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Q29udHJhY3RDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBpc0Nvbm5lY3RlZCxcbiAgICAgICAgaXNPd25lcixcbiAgICAgICAgc2lnbmVyLFxuICAgICAgICB1cGRhdGVVc2RjQmFsYW5jZSxcbiAgICAgICAgdXBkYXRlUGxwQmFsYW5jZSxcbiAgICAgICAgdXNkY0JhbGFuY2UsXG4gICAgICAgIHBscEJhbGFuY2UsXG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICB0b3RhbHN1cHBseSxcbiAgICAgICAgc2hhcmVwcmljZSxcbiAgICAgICAgbmF2Y2FsY3VsYXRlZCxcbiAgICAgICAgdmF1bHR1c2RjLFxuICAgICAgICBsb25nc2l6ZSxcbiAgICAgICAgbG9uZ2NvbGxhdGVyYWwsXG4gICAgICAgIGxvbmdkZWx0YSxcbiAgICAgICAgbG9uZ2xldmVyYWdlLFxuICAgICAgICBsb25nYXZncHJpY2UsXG4gICAgICAgIGluY3JlYXNlUG9zaXRpb24sXG4gICAgICAgIGRlY3JlYXNlUG9zaXRpb24sXG4gICAgICAgIHNob3J0c2l6ZSxcbiAgICAgICAgc2hvcnRjb2xsYXRlcmFsLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250cmFjdENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cmFjdENvbnRleHQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJ1c2VBY2NvdW50IiwidXNlQmFsYW5jZSIsInVzZVByb3ZpZGVyIiwidXNlU2lnbmVyIiwidXNlVG9hc3QiLCJlcmMyMEFCSSIsIkFCSVMiLCJBRERSRVNTIiwiQ29udHJhY3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRyYWN0UHJvdmlkZXIiLCJjb250ZXh0IiwiRXJyb3IiLCJDb250cmFjdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJwcm92aWRlciIsImRhdGEiLCJzaWduZXIiLCJ0b2FzdCIsImlzT3duZXIiLCJzZXRJc093bmVyIiwidXNkY0JhbGFuY2UiLCJzZXR1c2RjQmFsYW5jZSIsInBscEJhbGFuY2UiLCJzZXRwbHBCYWxhbmNlIiwiY2hlY2tPd25lciIsInVwZGF0ZVVzZGNCYWxhbmNlIiwidXBkYXRlUGxwQmFsYW5jZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJ1cGRhdGVEYXRhIiwibXl2YXVsdENvbnRyYWN0IiwiQ29udHJhY3QiLCJNWVZBVUxUIiwib3duZXIiLCJ1c2RjIiwiVVNEQyIsIkVSQzIwIiwiYmFsYW5jZSIsInBhcnNlSW50IiwiYmFsYW5jZU9mIiwidG9TdHJpbmciLCJwbHAiLCJpbmNyZWFzZVBvc2l0aW9uIiwic2V0SW5jcmVhc2VQb3NpdGlvbiIsImRlY3JlYXNlUG9zaXRpb24iLCJzZXREZWNyZWFzZVBvc2l0aW9uIiwidG90YWxzdXBwbHkiLCJzZXRUb3RhbHN1cHBseSIsInZhdWx0dXNkYyIsInNldFZhdWx0dXNkYyIsIm5hdmNhbGN1bGF0ZWQiLCJzZXROYXZjYWxjdWxhdGVkIiwic2hhcmVwcmljZSIsInNldFNoYXJlcHJpY2UiLCJsb25nc2l6ZSIsInNldExvbmdzaXplIiwibG9uZ2NvbGxhdGVyYWwiLCJzZXRMb25nY29sbGF0ZXJhbCIsImxvbmdhdmdwcmljZSIsInNldExvbmdhdmdwcmljZSIsImxvbmdkZWx0YSIsInNldExvbmdkZWx0YSIsImxvbmdsZXZlcmFnZSIsInNldExvbmdsZXZlcmFnZSIsInNob3J0c2l6ZSIsInNldFNob3J0c2l6ZSIsInNob3J0Y29sbGF0ZXJhbCIsInNldFNob3J0Y29sbGF0ZXJhbCIsInNob3J0YXZncHJpY2UiLCJzZXRTaG9ydGF2Z3ByaWNlIiwic2hvcnRkZWx0YSIsInNldFNob3J0ZGVsdGEiLCJzaG9ydGxldmVyYWdlIiwic2V0U2hvcnRsZXZlcmFnZSIsImdldFBvc2l0aW9ucyIsIl9hZGRyIiwiX2lzTG9uZyIsImNvbGxhdGVyYWxUb2tlbiIsIldFVEgiLCJHTVhfUkVBREVSIiwicmVzcG9uc2UiLCJHTVhfVkFVTFQiLCJyZXNwb25zZUxvbmciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR01YQ09OVFJPTEFERFJFU1MiLCJyZXNwb25zZVNob3J0IiwiVkFVTFRDT05UUkFDVCIsIkdNWF9QT1NJVElPTl9ST1VURVIiLCJ0b3RhbFN1cHBseSIsIm51bWJlcldpdGhTcGFjZXMiLCJleHBvIiwiZ2V0RXhwb3NpdGlvbiIsInNldEV4cG8iLCJiYWxhbmNlVVNEQyIsIk5BViIsInRvRml4ZWQiLCJsb25nbGV2Iiwic2hvcnRsZXYiLCJ4IiwiZ2V0UmVxdWVzdFF1ZXVlTGVuZ3RocyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/ContractContext.jsx\n"));

/***/ })

});