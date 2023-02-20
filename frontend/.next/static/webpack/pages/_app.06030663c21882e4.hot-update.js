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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContractProvider\": function() { return /* binding */ ContractProvider; },\n/* harmony export */   \"useContractProvider\": function() { return /* binding */ useContractProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst ContractContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction useContractProvider() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ContractContext);\n    if (!context) {\n        throw new Error(\"useContractProvider must be used within a ContractProvider\");\n    }\n    return context;\n}\n_s(useContractProvider, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst ContractProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const provider = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useProvider)();\n    const { data: signer  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSigner)();\n    //chakraUI\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    //Dapp ownership\n    const [isOwner, setIsOwner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [usdcBalance, setusdcBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [plpBalance, setplpBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [expo, setExpo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isConnected) {\n            checkOwner();\n            updateUsdcBalance();\n            updatePlpBalance();\n            updateData();\n            toast({\n                title: \"Connected\",\n                description: \"Welcome, you are connected with the address : \" + address,\n                status: \"success\",\n                duration: 5000,\n                isClosable: true\n            });\n        }\n    }, [\n        address,\n        isConnected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isConnected) {\n            checkOwner();\n            updateData();\n            updateUsdcBalance();\n            updatePlpBalance();\n            getExpo();\n        }\n    }, []);\n    const checkOwner = async ()=>{\n        const myvaultContract = await new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.MYVAULT, provider);\n        let owner = await myvaultContract.owner();\n        if (address == owner) {\n            setIsOwner(true);\n        } else {\n            setIsOwner(false);\n        }\n    };\n    const updateUsdcBalance = async ()=>{\n        if (isConnected) {\n            let usdc = await new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.USDC, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.ERC20, provider);\n            let balance = parseInt((await usdc.balanceOf(address)).toString()) / 10 ** 6;\n            setusdcBalance(balance);\n        }\n    };\n    const updatePlpBalance = async ()=>{\n        if (isConnected) {\n            let plp = await new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.ERC20, provider);\n            let balance = parseInt((await plp.balanceOf(address)).toString()) / 10 ** 18;\n            setplpBalance(balance);\n        }\n    };\n    const setExposition = async (value)=>{\n        try {\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.MYVAULT, signer);\n            let tx = await contract.setExposition(value);\n            await tx.wait(1);\n            setExpo(value);\n            toast({\n                title: \"Succes!\",\n                description: \"Exposition changed\",\n                status: \"success\",\n                duration: 9000,\n                isClosable: true\n            });\n        } catch (e) {\n            toast({\n                title: \"Error\",\n                description: \"An error occured, please try again...\",\n                status: \"error\",\n                duration: 9000,\n                isClosable: true\n            });\n        }\n    };\n    const getExpo = async ()=>{\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.MYVAULT, signer);\n        let tx = await contract.getExposition();\n        setExpo(tx);\n    };\n    //data\n    const [increasePosition, setIncreasePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [decreasePosition, setDecreasePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [totalsupply, setTotalsupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [vaultusdc, setVaultusdc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [navcalculated, setNavcalculated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shareprice, setShareprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longsize, setLongsize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longcollateral, setLongcollateral] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longavgprice, setLongavgprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longdelta, setLongdelta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [longleverage, setLongleverage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortsize, setShortsize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortcollateral, setShortcollateral] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortavgprice, setShortavgprice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortdelta, setShortdelta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [shortleverage, setShortleverage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const getPositions = async (_addr, _isLong)=>{\n        let collateralToken = _isLong ? _utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.WETH : _utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.USDC;\n        const GMX_READER = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.GMX_READER, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.GMX_READER, provider);\n        let response = await GMX_READER.getPositions(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.GMX_VAULT, _addr, [\n            collateralToken\n        ], [\n            \"0x82aF49447D8a07e3bd95BD0d56f35241523fBab1\"\n        ], [\n            _isLong\n        ]);\n        return response;\n    };\n    const updateData = async ()=>{\n        let responseLong = await getPositions(\"0x998abeb3E57409262aE5b751f60747921B33613E\", true);\n        let responseShort = await getPositions(\"0x998abeb3E57409262aE5b751f60747921B33613E\", false);\n        const VAULTCONTRACT = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.MYVAULT, signer);\n        const GMX_POSITION_ROUTER = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.GMX_POSITION_ROUTER, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.GMX_POSITION_ROUTER, signer);\n        const USDC = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.USDC, _utils_config__WEBPACK_IMPORTED_MODULE_2__.ABIS.ERC20, signer);\n        let totalSupply = parseInt((await VAULTCONTRACT.totalSupply()).toString());\n        setTotalsupply(totalSupply / 10 ** 18);\n        let expo = parseInt((await VAULTCONTRACT.getExposition()).toString());\n        setExpo(expo);\n        let balanceUSDC = parseInt((await USDC.balanceOf(_utils_config__WEBPACK_IMPORTED_MODULE_2__.ADDRESS.MYVAULT)).toString());\n        setVaultusdc(balanceUSDC / 10 ** 6);\n        let NAV = parseInt(responseLong[1].toString()) + parseInt(responseShort[1].toString()) + parseInt(responseShort[8].toString()) + parseInt(responseLong[8].toString()) + parseInt(balanceUSDC.toString());\n        setNavcalculated(NAV / 10 ** 30);\n        let shareprice = totalSupply == 0 ? 0 : NAV / totalSupply / 10 ** 12;\n        setShareprice(shareprice);\n        setLongsize((parseInt(responseLong[0].toString()) / 10 ** 30).toFixed(2));\n        setLongcollateral((parseInt(responseLong[1].toString()) / 10 ** 30).toFixed(2));\n        setLongavgprice(parseInt(responseLong[2].toString()) / 10 ** 30);\n        setLongdelta((parseInt(responseLong[8].toString()) / 10 ** 30).toFixed(2));\n        let longlev = parseInt(responseLong[0].toString()) / parseInt(responseLong[1].toString());\n        setLongleverage(longlev.toFixed(2));\n        setShortsize((parseInt(responseShort[0].toString()) / 10 ** 30).toFixed(2));\n        setShortcollateral((parseInt(responseShort[1].toString()) / 10 ** 30).toFixed(2));\n        setShortavgprice(parseInt(responseShort[2].toString()) / 10 ** 30);\n        setShortdelta((parseInt(responseShort[8].toString()) / 10 ** 30).toFixed(2));\n        let shortlev = parseInt(responseShort[0].toString()) / parseInt(responseShort[1].toString());\n        setShortleverage(shortlev.toFixed(2));\n        let x = await (\"getRequestQueueLengths\", await GMX_POSITION_ROUTER.getRequestQueueLengths());\n        setDecreasePosition(parseInt(x[3].toString()) - parseInt(x[2].toString()));\n        setIncreasePosition(parseInt(x[1].toString()) - parseInt(x[0].toString()));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContractContext.Provider, {\n        value: {\n            isConnected,\n            isOwner,\n            signer,\n            updateUsdcBalance,\n            updatePlpBalance,\n            usdcBalance,\n            plpBalance,\n            provider,\n            totalsupply,\n            shareprice,\n            navcalculated,\n            vaultusdc,\n            longsize,\n            longcollateral,\n            longdelta,\n            longleverage,\n            longavgprice,\n            increasePosition,\n            decreasePosition,\n            shortsize,\n            shortcollateral,\n            shortavgprice,\n            shortdelta,\n            shortleverage,\n            expo,\n            setExposition,\n            updateData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ubuntu/alyra-training/FP/frontend/context/ContractContext.jsx\",\n        lineNumber: 231,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ContractProvider, \"ji08EugNORzQKlyyB7RvjAHEqe8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useProvider,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSigner,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useToast\n    ];\n});\n_c = ContractProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContractContext);\nvar _c;\n$RefreshReg$(_c, \"ContractProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtZQUNBRTtZQUNBRTtZQUNBRTtZQUNBRTtZQUNBNUQ7WUFDQXdCO1lBQ0FuQjtRQUNGO2tCQUVDbEI7Ozs7OztBQUdQLEVBQUU7SUFyUFdEOztRQUNzQmQsNkNBQVVBO1FBQzFCRSw4Q0FBV0E7UUFDSEMsNENBQVNBO1FBR3BCQyxzREFBUUE7OztLQU5YVTtBQXVQYiwrREFBZUwsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L0NvbnRyYWN0Q29udGV4dC5qc3g/ODdjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQmFsYW5jZSwgdXNlUHJvdmlkZXIsIHVzZVNpZ25lciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZXJjMjBBQkkgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7QUJJUywgQUREUkVTU30gZnJvbSBcIi4vLi4vdXRpbHMvQGNvbmZpZ1wiXG5pbXBvcnQgeyBudW1iZXJXaXRoU3BhY2VzIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuXG5jb25zdCBDb250cmFjdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRyYWN0UHJvdmlkZXIoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRyYWN0Q29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwidXNlQ29udHJhY3RQcm92aWRlciBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ29udHJhY3RQcm92aWRlclwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IENvbnRyYWN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgcHJvdmlkZXIgPSB1c2VQcm92aWRlcigpO1xuICBjb25zdCB7IGRhdGE6IHNpZ25lciB9ID0gdXNlU2lnbmVyKCk7XG5cbiAgLy9jaGFrcmFVSVxuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbiAgLy9EYXBwIG93bmVyc2hpcFxuICBjb25zdCBbaXNPd25lciwgc2V0SXNPd25lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2RjQmFsYW5jZSwgc2V0dXNkY0JhbGFuY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwbHBCYWxhbmNlLCBzZXRwbHBCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZXhwbywgc2V0RXhwb10gPSB1c2VTdGF0ZSgwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIGNoZWNrT3duZXIoKTtcbiAgICAgIHVwZGF0ZVVzZGNCYWxhbmNlKCk7XG4gICAgICB1cGRhdGVQbHBCYWxhbmNlKCk7XG4gICAgICB1cGRhdGVEYXRhKCk7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIkNvbm5lY3RlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lLCB5b3UgYXJlIGNvbm5lY3RlZCB3aXRoIHRoZSBhZGRyZXNzIDogXCIgKyBhZGRyZXNzLFxuICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2FkZHJlc3MsIGlzQ29ubmVjdGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgIGNoZWNrT3duZXIoKTtcbiAgICAgIHVwZGF0ZURhdGEoKTtcbiAgICAgIHVwZGF0ZVVzZGNCYWxhbmNlKCk7XG4gICAgICB1cGRhdGVQbHBCYWxhbmNlKCk7XG4gICAgICBnZXRFeHBvKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hlY2tPd25lciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBteXZhdWx0Q29udHJhY3QgPSBhd2FpdCBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgQUREUkVTUy5NWVZBVUxULFxuICAgICAgQUJJUy5NWVZBVUxULFxuICAgICAgcHJvdmlkZXJcbiAgICApO1xuICAgIGxldCBvd25lciA9IGF3YWl0IG15dmF1bHRDb250cmFjdC5vd25lcigpO1xuICAgIGlmIChhZGRyZXNzID09IG93bmVyKSB7XG4gICAgICBzZXRJc093bmVyKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc093bmVyKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVXNkY0JhbGFuY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICBsZXQgdXNkYyA9IGF3YWl0IG5ldyBldGhlcnMuQ29udHJhY3QoQUREUkVTUy5VU0RDLCBBQklTLkVSQzIwLCBwcm92aWRlcik7XG4gICAgICBsZXQgYmFsYW5jZSA9XG4gICAgICAgIHBhcnNlSW50KChhd2FpdCB1c2RjLmJhbGFuY2VPZihhZGRyZXNzKSkudG9TdHJpbmcoKSkgLyAxMCAqKiA2O1xuICAgICAgc2V0dXNkY0JhbGFuY2UoYmFsYW5jZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB1cGRhdGVQbHBCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgbGV0IHBscCA9IGF3YWl0IG5ldyBldGhlcnMuQ29udHJhY3QoQUREUkVTUy5NWVZBVUxULCBBQklTLkVSQzIwLCBwcm92aWRlcik7XG4gICAgICBsZXQgYmFsYW5jZSA9XG4gICAgICAgIHBhcnNlSW50KChhd2FpdCBwbHAuYmFsYW5jZU9mKGFkZHJlc3MpKS50b1N0cmluZygpKSAvIDEwICoqIDE4O1xuICAgICAgc2V0cGxwQmFsYW5jZShiYWxhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0RXhwb3NpdGlvbiA9IGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgIEFERFJFU1MuTVlWQVVMVCxcbiAgICAgICAgQUJJUy5NWVZBVUxULFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG4gICAgICBsZXQgdHggPSBhd2FpdCBjb250cmFjdC5zZXRFeHBvc2l0aW9uKHZhbHVlKTtcbiAgICAgIGF3YWl0IHR4LndhaXQoMSk7XG4gICAgICBzZXRFeHBvKHZhbHVlKTtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiU3VjY2VzIVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFeHBvc2l0aW9uIGNoYW5nZWRcIixcbiAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgZHVyYXRpb246IDkwMDAsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW4gZXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4uLlwiLFxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgZHVyYXRpb246IDkwMDAsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldEV4cG8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KEFERFJFU1MuTVlWQVVMVCwgQUJJUy5NWVZBVUxULCBzaWduZXIpO1xuICAgIGxldCB0eCA9IGF3YWl0IGNvbnRyYWN0LmdldEV4cG9zaXRpb24oKTtcbiAgICBzZXRFeHBvKHR4KTtcbiAgfTtcblxuICAvL2RhdGFcbiAgY29uc3QgW2luY3JlYXNlUG9zaXRpb24sIHNldEluY3JlYXNlUG9zaXRpb25dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2RlY3JlYXNlUG9zaXRpb24sIHNldERlY3JlYXNlUG9zaXRpb25dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3RvdGFsc3VwcGx5LCBzZXRUb3RhbHN1cHBseV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ZhdWx0dXNkYywgc2V0VmF1bHR1c2RjXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbmF2Y2FsY3VsYXRlZCwgc2V0TmF2Y2FsY3VsYXRlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NoYXJlcHJpY2UsIHNldFNoYXJlcHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb25nc2l6ZSwgc2V0TG9uZ3NpemVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb25nY29sbGF0ZXJhbCwgc2V0TG9uZ2NvbGxhdGVyYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb25nYXZncHJpY2UsIHNldExvbmdhdmdwcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvbmdkZWx0YSwgc2V0TG9uZ2RlbHRhXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbG9uZ2xldmVyYWdlLCBzZXRMb25nbGV2ZXJhZ2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG9ydHNpemUsIHNldFNob3J0c2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Nob3J0Y29sbGF0ZXJhbCwgc2V0U2hvcnRjb2xsYXRlcmFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvcnRhdmdwcmljZSwgc2V0U2hvcnRhdmdwcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Nob3J0ZGVsdGEsIHNldFNob3J0ZGVsdGFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG9ydGxldmVyYWdlLCBzZXRTaG9ydGxldmVyYWdlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGdldFBvc2l0aW9ucyA9IGFzeW5jIChfYWRkciwgX2lzTG9uZykgPT4ge1xuICAgIGxldCBjb2xsYXRlcmFsVG9rZW4gPSBfaXNMb25nID8gQUREUkVTUy5XRVRIIDogQUREUkVTUy5VU0RDO1xuICAgIGNvbnN0IEdNWF9SRUFERVIgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgQUREUkVTUy5HTVhfUkVBREVSLFxuICAgICAgQUJJUy5HTVhfUkVBREVSLFxuICAgICAgcHJvdmlkZXJcbiAgICApO1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IEdNWF9SRUFERVIuZ2V0UG9zaXRpb25zKFxuICAgICAgQUREUkVTUy5HTVhfVkFVTFQsXG4gICAgICBfYWRkcixcbiAgICAgIFtjb2xsYXRlcmFsVG9rZW5dLFxuICAgICAgW1wiMHg4MmFGNDk0NDdEOGEwN2UzYmQ5NUJEMGQ1NmYzNTI0MTUyM2ZCYWIxXCJdLFxuICAgICAgW19pc0xvbmddXG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlTG9uZyA9IGF3YWl0IGdldFBvc2l0aW9ucyhcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dNWENPTlRST0xBRERSRVNTLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgbGV0IHJlc3BvbnNlU2hvcnQgPSBhd2FpdCBnZXRQb3NpdGlvbnMoXG4gICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HTVhDT05UUk9MQUREUkVTUyxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICBjb25zdCBWQVVMVENPTlRSQUNUID0gbmV3IGV0aGVycy5Db250cmFjdChBRERSRVNTLk1ZVkFVTFQsIEFCSVMuTVlWQVVMVCwgc2lnbmVyKTtcbiAgICBjb25zdCBHTVhfUE9TSVRJT05fUk9VVEVSID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIEFERFJFU1MuR01YX1BPU0lUSU9OX1JPVVRFUixcbiAgICAgIEFCSVMuR01YX1BPU0lUSU9OX1JPVVRFUixcbiAgICAgIHNpZ25lclxuICAgICk7XG4gICAgY29uc3QgVVNEQyA9IG5ldyBldGhlcnMuQ29udHJhY3QoQUREUkVTUy5VU0RDLCBBQklTLkVSQzIwLCBzaWduZXIpO1xuXG4gICAgbGV0IHRvdGFsU3VwcGx5ID0gcGFyc2VJbnQoKGF3YWl0IFZBVUxUQ09OVFJBQ1QudG90YWxTdXBwbHkoKSkudG9TdHJpbmcoKSk7XG4gICAgc2V0VG90YWxzdXBwbHkoKHRvdGFsU3VwcGx5IC8gMTAgKiogMTgpKTtcblxuICAgIGxldCBleHBvID0gcGFyc2VJbnQoKGF3YWl0IFZBVUxUQ09OVFJBQ1QuZ2V0RXhwb3NpdGlvbigpKS50b1N0cmluZygpKTtcbiAgICBzZXRFeHBvKGV4cG8pO1xuICAgIGxldCBiYWxhbmNlVVNEQyA9IHBhcnNlSW50KChhd2FpdCBVU0RDLmJhbGFuY2VPZihBRERSRVNTLk1ZVkFVTFQpKS50b1N0cmluZygpKTtcbiAgICBzZXRWYXVsdHVzZGMoYmFsYW5jZVVTREMvMTAqKjYpO1xuXG4gICAgbGV0IE5BViA9XG4gICAgICBwYXJzZUludChyZXNwb25zZUxvbmdbMV0udG9TdHJpbmcoKSkgK1xuICAgICAgcGFyc2VJbnQocmVzcG9uc2VTaG9ydFsxXS50b1N0cmluZygpKSArXG4gICAgICBwYXJzZUludChyZXNwb25zZVNob3J0WzhdLnRvU3RyaW5nKCkpICtcbiAgICAgIHBhcnNlSW50KHJlc3BvbnNlTG9uZ1s4XS50b1N0cmluZygpKSArXG4gICAgICBwYXJzZUludChiYWxhbmNlVVNEQy50b1N0cmluZygpKTtcbiAgICBzZXROYXZjYWxjdWxhdGVkKCgoTkFWLzEwKiozMCkpKTtcblxuICAgIGxldCBzaGFyZXByaWNlID0gdG90YWxTdXBwbHkgPT0gMCA/IDAgOiAoTkFWIC8gdG90YWxTdXBwbHkpLzEwKioxMjtcbiAgICBzZXRTaGFyZXByaWNlKHNoYXJlcHJpY2UpO1xuXG4gICAgc2V0TG9uZ3NpemUoXG4gICAgICAoXG4gICAgICAgIChwYXJzZUludChyZXNwb25zZUxvbmdbMF0udG9TdHJpbmcoKSkgLyAxMCAqKiAzMCkudG9GaXhlZCgyKVxuICAgICAgKVxuICAgICk7XG4gICAgc2V0TG9uZ2NvbGxhdGVyYWwoXG4gICAgICAocGFyc2VJbnQocmVzcG9uc2VMb25nWzFdLnRvU3RyaW5nKCkpIC8gMTAgKiogMzApLnRvRml4ZWQoMilcbiAgICApO1xuICAgIHNldExvbmdhdmdwcmljZShwYXJzZUludChyZXNwb25zZUxvbmdbMl0udG9TdHJpbmcoKSkgLyAxMCAqKiAzMCk7XG4gICAgc2V0TG9uZ2RlbHRhKChwYXJzZUludChyZXNwb25zZUxvbmdbOF0udG9TdHJpbmcoKSkgLyAxMCAqKiAzMCkudG9GaXhlZCgyKSk7XG4gICAgbGV0IGxvbmdsZXYgPVxuICAgICAgcGFyc2VJbnQocmVzcG9uc2VMb25nWzBdLnRvU3RyaW5nKCkpIC9cbiAgICAgIHBhcnNlSW50KHJlc3BvbnNlTG9uZ1sxXS50b1N0cmluZygpKTtcbiAgICBzZXRMb25nbGV2ZXJhZ2UobG9uZ2xldi50b0ZpeGVkKDIpKTtcblxuICAgIHNldFNob3J0c2l6ZShcbiAgICAgIChcbiAgICAgICAgKHBhcnNlSW50KHJlc3BvbnNlU2hvcnRbMF0udG9TdHJpbmcoKSkgLyAxMCAqKiAzMCkudG9GaXhlZCgyKVxuICAgICAgKVxuICAgICk7XG4gICAgc2V0U2hvcnRjb2xsYXRlcmFsKFxuICAgICAgKHBhcnNlSW50KHJlc3BvbnNlU2hvcnRbMV0udG9TdHJpbmcoKSkgLyAxMCAqKiAzMCkudG9GaXhlZCgyKVxuICAgICk7XG4gICAgc2V0U2hvcnRhdmdwcmljZShwYXJzZUludChyZXNwb25zZVNob3J0WzJdLnRvU3RyaW5nKCkpIC8gMTAgKiogMzApO1xuICAgIHNldFNob3J0ZGVsdGEoXG4gICAgICAocGFyc2VJbnQocmVzcG9uc2VTaG9ydFs4XS50b1N0cmluZygpKSAvIDEwICoqIDMwKS50b0ZpeGVkKDIpXG4gICAgKTtcbiAgICBsZXQgc2hvcnRsZXYgPVxuICAgICAgcGFyc2VJbnQocmVzcG9uc2VTaG9ydFswXS50b1N0cmluZygpKSAvXG4gICAgICBwYXJzZUludChyZXNwb25zZVNob3J0WzFdLnRvU3RyaW5nKCkpO1xuICAgIHNldFNob3J0bGV2ZXJhZ2Uoc2hvcnRsZXYudG9GaXhlZCgyKSk7XG5cbiAgICBsZXQgeCA9IGF3YWl0IChcImdldFJlcXVlc3RRdWV1ZUxlbmd0aHNcIixcbiAgICBhd2FpdCBHTVhfUE9TSVRJT05fUk9VVEVSLmdldFJlcXVlc3RRdWV1ZUxlbmd0aHMoKSk7XG4gICAgc2V0RGVjcmVhc2VQb3NpdGlvbihwYXJzZUludCh4WzNdLnRvU3RyaW5nKCkpIC0gcGFyc2VJbnQoeFsyXS50b1N0cmluZygpKSk7XG4gICAgc2V0SW5jcmVhc2VQb3NpdGlvbihwYXJzZUludCh4WzFdLnRvU3RyaW5nKCkpIC0gcGFyc2VJbnQoeFswXS50b1N0cmluZygpKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbnRyYWN0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNDb25uZWN0ZWQsXG4gICAgICAgIGlzT3duZXIsXG4gICAgICAgIHNpZ25lcixcbiAgICAgICAgdXBkYXRlVXNkY0JhbGFuY2UsXG4gICAgICAgIHVwZGF0ZVBscEJhbGFuY2UsXG4gICAgICAgIHVzZGNCYWxhbmNlLFxuICAgICAgICBwbHBCYWxhbmNlLFxuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgdG90YWxzdXBwbHksXG4gICAgICAgIHNoYXJlcHJpY2UsXG4gICAgICAgIG5hdmNhbGN1bGF0ZWQsXG4gICAgICAgIHZhdWx0dXNkYyxcbiAgICAgICAgbG9uZ3NpemUsXG4gICAgICAgIGxvbmdjb2xsYXRlcmFsLFxuICAgICAgICBsb25nZGVsdGEsXG4gICAgICAgIGxvbmdsZXZlcmFnZSxcbiAgICAgICAgbG9uZ2F2Z3ByaWNlLFxuICAgICAgICBpbmNyZWFzZVBvc2l0aW9uLFxuICAgICAgICBkZWNyZWFzZVBvc2l0aW9uLFxuICAgICAgICBzaG9ydHNpemUsXG4gICAgICAgIHNob3J0Y29sbGF0ZXJhbCxcbiAgICAgICAgc2hvcnRhdmdwcmljZSxcbiAgICAgICAgc2hvcnRkZWx0YSxcbiAgICAgICAgc2hvcnRsZXZlcmFnZSxcbiAgICAgICAgZXhwbywgXG4gICAgICAgIHNldEV4cG9zaXRpb24sXG4gICAgICAgIHVwZGF0ZURhdGFcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udHJhY3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJhY3RDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZXRoZXJzIiwidXNlQWNjb3VudCIsInVzZUJhbGFuY2UiLCJ1c2VQcm92aWRlciIsInVzZVNpZ25lciIsInVzZVRvYXN0IiwiZXJjMjBBQkkiLCJBQklTIiwiQUREUkVTUyIsIm51bWJlcldpdGhTcGFjZXMiLCJDb250cmFjdENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udHJhY3RQcm92aWRlciIsImNvbnRleHQiLCJFcnJvciIsIkNvbnRyYWN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsInByb3ZpZGVyIiwiZGF0YSIsInNpZ25lciIsInRvYXN0IiwiaXNPd25lciIsInNldElzT3duZXIiLCJ1c2RjQmFsYW5jZSIsInNldHVzZGNCYWxhbmNlIiwicGxwQmFsYW5jZSIsInNldHBscEJhbGFuY2UiLCJleHBvIiwic2V0RXhwbyIsImNoZWNrT3duZXIiLCJ1cGRhdGVVc2RjQmFsYW5jZSIsInVwZGF0ZVBscEJhbGFuY2UiLCJ1cGRhdGVEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImdldEV4cG8iLCJteXZhdWx0Q29udHJhY3QiLCJDb250cmFjdCIsIk1ZVkFVTFQiLCJvd25lciIsInVzZGMiLCJVU0RDIiwiRVJDMjAiLCJiYWxhbmNlIiwicGFyc2VJbnQiLCJiYWxhbmNlT2YiLCJ0b1N0cmluZyIsInBscCIsInNldEV4cG9zaXRpb24iLCJ2YWx1ZSIsImNvbnRyYWN0IiwidHgiLCJ3YWl0IiwiZ2V0RXhwb3NpdGlvbiIsImluY3JlYXNlUG9zaXRpb24iLCJzZXRJbmNyZWFzZVBvc2l0aW9uIiwiZGVjcmVhc2VQb3NpdGlvbiIsInNldERlY3JlYXNlUG9zaXRpb24iLCJ0b3RhbHN1cHBseSIsInNldFRvdGFsc3VwcGx5IiwidmF1bHR1c2RjIiwic2V0VmF1bHR1c2RjIiwibmF2Y2FsY3VsYXRlZCIsInNldE5hdmNhbGN1bGF0ZWQiLCJzaGFyZXByaWNlIiwic2V0U2hhcmVwcmljZSIsImxvbmdzaXplIiwic2V0TG9uZ3NpemUiLCJsb25nY29sbGF0ZXJhbCIsInNldExvbmdjb2xsYXRlcmFsIiwibG9uZ2F2Z3ByaWNlIiwic2V0TG9uZ2F2Z3ByaWNlIiwibG9uZ2RlbHRhIiwic2V0TG9uZ2RlbHRhIiwibG9uZ2xldmVyYWdlIiwic2V0TG9uZ2xldmVyYWdlIiwic2hvcnRzaXplIiwic2V0U2hvcnRzaXplIiwic2hvcnRjb2xsYXRlcmFsIiwic2V0U2hvcnRjb2xsYXRlcmFsIiwic2hvcnRhdmdwcmljZSIsInNldFNob3J0YXZncHJpY2UiLCJzaG9ydGRlbHRhIiwic2V0U2hvcnRkZWx0YSIsInNob3J0bGV2ZXJhZ2UiLCJzZXRTaG9ydGxldmVyYWdlIiwiZ2V0UG9zaXRpb25zIiwiX2FkZHIiLCJfaXNMb25nIiwiY29sbGF0ZXJhbFRva2VuIiwiV0VUSCIsIkdNWF9SRUFERVIiLCJyZXNwb25zZSIsIkdNWF9WQVVMVCIsInJlc3BvbnNlTG9uZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HTVhDT05UUk9MQUREUkVTUyIsInJlc3BvbnNlU2hvcnQiLCJWQVVMVENPTlRSQUNUIiwiR01YX1BPU0lUSU9OX1JPVVRFUiIsInRvdGFsU3VwcGx5IiwiYmFsYW5jZVVTREMiLCJOQVYiLCJ0b0ZpeGVkIiwibG9uZ2xldiIsInNob3J0bGV2IiwieCIsImdldFJlcXVlc3RRdWV1ZUxlbmd0aHMiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/ContractContext.jsx\n"));

/***/ })

});