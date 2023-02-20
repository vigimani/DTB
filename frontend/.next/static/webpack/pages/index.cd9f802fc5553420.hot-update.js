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

/***/ "./components/user/Deposit.jsx":
/*!*************************************!*\
  !*** ./components/user/Deposit.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Deposit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _assets_abi_MyVault_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/abi-MyVault.json */ \"./assets/abi-MyVault.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Deposit() {\n    _s();\n    const { usdcBalance , updateUsdcBalance , updatePlpBalance , signer , updateData  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.useContractProvider)();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useToast)();\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const deposit = async ()=>{\n        setIsLoading(true);\n        try {\n            let keepersFee = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseEther(\"0.0001\");\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(\"0x95401dc811bb5740090279Ba06cfA8fcF6113778\", _assets_abi_MyVault_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            let depositAmountUSDC = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseEther(depositAmount).div(10 ** 12);\n            console.log(depositAmount);\n            console.log(depositAmountUSDC.toString());\n            let fees = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseEther(\"100\");\n            let usdc = await new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_5__.ADDRESS.USDC, _utils_config__WEBPACK_IMPORTED_MODULE_5__.ABIS.ERC20, signer);\n            let a = await usdc.approve(\"0x95401dc811bb5740090279Ba06cfA8fcF6113778\", depositAmountUSDC);\n            await a.wait(1);\n            let transaction = await contract.deposit(_utils_config__WEBPACK_IMPORTED_MODULE_5__.ADDRESS.USDC, depositAmountUSDC, {\n                value: keepersFee,\n                gasLimit: 1000000\n            });\n            await transaction.wait(1);\n            await updateUsdcBalance();\n            await updatePlpBalance();\n            await updateData();\n            toast({\n                title: \"Congratulations!\",\n                description: \"Your have sent \" + String(depositAmount) + \" usdc to the vault\",\n                status: \"success\",\n                duration: 9000,\n                isClosable: true\n            });\n        } catch (e) {\n            toast({\n                title: \"Error\",\n                description: \"An error occured, please try again...\",\n                status: \"error\",\n                duration: 9000,\n                isClosable: true\n            });\n            console.error(e);\n        }\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                borderWidth: \"1px\",\n                borderColor: \"#594B7E\",\n                borderRadius: \"8px\",\n                p: \"5px\",\n                bg: \"#F4F6FE\",\n                w: \"100%\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        p: \"5\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                borderRadius: \"8px\",\n                                bg: \"#2775CA\",\n                                alignItems: \"center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                    boxSize: \"50px\",\n                                    objectFit: \"cover\",\n                                    src: \"https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png\",\n                                    alt: \"USDC\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                ml: \"1rem\",\n                                direction: \"column\",\n                                h: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                        fontFamily: \"Kanit\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                                w: \"100px\",\n                                                type: \"number\",\n                                                fontSize: \"md\",\n                                                placeholder: \"0\",\n                                                borderColor: \"transparent\",\n                                                onChange: (e)=>setDepositAmount(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                                ml: \"1rem\",\n                                                alignSelf: \"center\",\n                                                children: \"USDC\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                                        fontSize: \"xs\",\n                                        children: [\n                                            \"Max \",\n                                            usdcBalance,\n                                            \" USDC\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        p: \"5\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                mb: \"1rem\",\n                alignItems: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    _hover: {\n                        bg: \"#594B7E\",\n                        color: \"white\"\n                    },\n                    w: \"100%\",\n                    mt: \"1rem\",\n                    onClick: ()=>deposit(),\n                    children: \"Deposit\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                mb: \"1rem\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.InfoIcon, {\n                        color: \"#594B7E\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                        ml: \"1rem\",\n                        fontSize: \"xs\",\n                        children: \"For the moment you can only deposit USDC!\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Deposit, \"OQPOc3c7glk2n8hEUNiyR8TKOTM=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.useContractProvider,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useToast\n    ];\n});\n_c = Deposit;\nvar _c;\n$RefreshReg$(_c, \"Deposit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVsRCw4REFBQzdELGtEQUFJQTtnREFBQ21GLElBQUc7Z0RBQU9TLFdBQVc7MERBQVU7Ozs7Ozs7Ozs7OztrREFJdkMsOERBQUM1RixrREFBSUE7d0NBQUN3RixVQUFVOzs0Q0FBTTs0Q0FBSzNEOzRDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUczQyw4REFBQzdCLGtEQUFJQTt3QkFBQzBFLEdBQUU7Ozs7Ozs7Ozs7OzswQkFjViw4REFBQzFFLGtEQUFJQTtnQkFBQzZGLElBQUc7Z0JBQU9mLFlBQVk7MEJBQzFCLDRFQUFDeEUsb0RBQU1BO29CQUNMd0YsUUFBUTt3QkFDTm5CLElBQUk7d0JBQ0pvQixPQUFPO29CQUNUO29CQUNBbkIsR0FBRTtvQkFDRm9CLElBQUc7b0JBQ0hDLFNBQVMsSUFBTTFEOzhCQUNoQjs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUN2QyxrREFBSUE7Z0JBQUM2RixJQUFHO2dCQUFPZixZQUFZOztrQ0FDMUIsOERBQUN4RCxzREFBUUE7d0JBQUN5RSxPQUFNOzs7Ozs7a0NBQ2hCLDhEQUFDOUYsa0RBQUlBO3dCQUFDa0YsSUFBRzt3QkFBT0ssVUFBVTtrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7QUFNeEMsQ0FBQztHQXZJdUI1RDs7UUFFcEJULHlFQUFtQkE7UUFDUEssc0RBQVFBOzs7S0FIQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL0RlcG9zaXQuanN4PzhlZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgSFN0YWNrLFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG4gIEljb25CdXR0b24sXG4gIGNvbG9yTW9kZSxcbiAgVGFiLFxuICBUYWJzLFxuICBUYWJQYW5lbCxcbiAgVGFiUGFuZWxzLFxuICBUYWJMaXN0LFxuICBJbnB1dCxcbiAgTnVtYmVySW5wdXRGaWVsZCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5mb0ljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IGFiaVZhdWx0IGZyb20gXCIuLi8uLi9hc3NldHMvYWJpLU15VmF1bHQuanNvblwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQUREUkVTUywgQUJJUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcG9zaXQoKSB7XG4gIGNvbnN0IHsgdXNkY0JhbGFuY2UsIHVwZGF0ZVVzZGNCYWxhbmNlLCB1cGRhdGVQbHBCYWxhbmNlLCBzaWduZXIsIHVwZGF0ZURhdGEgfSA9XG4gICAgdXNlQ29udHJhY3RQcm92aWRlcigpO1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbiAgY29uc3QgW2RlcG9zaXRBbW91bnQsIHNldERlcG9zaXRBbW91bnRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBsZXQga2VlcGVyc0ZlZSA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFwiMC4wMDAxXCIpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WQVVMVEFERFJFU1MsXG4gICAgICAgIGFiaVZhdWx0LFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG4gICAgICBsZXQgZGVwb3NpdEFtb3VudFVTREMgPSBldGhlcnMudXRpbHNcbiAgICAgICAgLnBhcnNlRXRoZXIoZGVwb3NpdEFtb3VudClcbiAgICAgICAgLmRpdigxMCAqKiAxMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlcG9zaXRBbW91bnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGRlcG9zaXRBbW91bnRVU0RDLnRvU3RyaW5nKCkpXG4gICAgICBsZXQgZmVlcyA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFwiMTAwXCIpO1xuICAgICAgbGV0IHVzZGMgPSBhd2FpdCBuZXcgZXRoZXJzLkNvbnRyYWN0KEFERFJFU1MuVVNEQywgQUJJUy5FUkMyMCwgc2lnbmVyKTtcbiAgICAgIGxldCBhID0gYXdhaXQgdXNkYy5hcHByb3ZlKFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WQVVMVEFERFJFU1MsXG4gICAgICAgIGRlcG9zaXRBbW91bnRVU0RDXG4gICAgICApO1xuICAgICAgYXdhaXQgYS53YWl0KDEpO1xuICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuZGVwb3NpdChcbiAgICAgICAgQUREUkVTUy5VU0RDLFxuICAgICAgICBkZXBvc2l0QW1vdW50VVNEQyxcbiAgICAgICAgeyB2YWx1ZToga2VlcGVyc0ZlZSwgZ2FzTGltaXQ6IDEwMDAwMDAgfVxuICAgICAgKTtcbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoMSk7XG4gICAgICBhd2FpdCB1cGRhdGVVc2RjQmFsYW5jZSgpO1xuICAgICAgYXdhaXQgdXBkYXRlUGxwQmFsYW5jZSgpO1xuICAgICAgYXdhaXQgdXBkYXRlRGF0YSgpO1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJDb25ncmF0dWxhdGlvbnMhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiWW91ciBoYXZlIHNlbnQgXCIgKyBTdHJpbmcoZGVwb3NpdEFtb3VudCkgKyBcIiB1c2RjIHRvIHRoZSB2YXVsdFwiLFxuICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgICAgICBkdXJhdGlvbjogOTAwMCxcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW4gZXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4uLlwiLFxuICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgZHVyYXRpb246IDkwMDAsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsZXhcbiAgICAgICAgYm9yZGVyV2lkdGg9e1wiMXB4XCJ9XG4gICAgICAgIGJvcmRlckNvbG9yPXtcIiM1OTRCN0VcIn1cbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiOHB4XCJcbiAgICAgICAgcD1cIjVweFwiXG4gICAgICAgIGJnPVwiI0Y0RjZGRVwiXG4gICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPEZsZXggcD1cIjVcIiBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICA8RmxleCBib3JkZXJSYWRpdXM9XCI4cHhcIiBiZz1cIiMyNzc1Q0FcIiBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBib3hTaXplPVwiNTBweFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzY0eDY0LzM0MDgucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiVVNEQ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCBtbD1cIjFyZW1cIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPEZsZXggZm9udEZhbWlseT17XCJLYW5pdFwifT5cbiAgICAgICAgICAgICAgey8qIDxJbnB1dCB2YWx1ZT17ZGVwb3NpdEFtb3VudH0gdz1cIjEwMHB4XCIgdHlwZT1cIm51bWJlclwiIGZvbnRTaXplPXtcIm1kXCJ9IGg9XCIzMnB4XCIgcGxhY2Vob2xkZXI9JzAnIGJvcmRlckNvbG9yPXtcInRyYW5zcGFyZW50XCJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVwb3NpdEFtb3VudChlLnRhcmdldC52YWx1ZSl9Lz4gKi99XG5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdz1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17XCJtZFwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e1widHJhbnNwYXJlbnRcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcG9zaXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8RmxleCBtbD1cIjFyZW1cIiBhbGlnblNlbGY9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgIFVTRENcbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEZsZXggZm9udFNpemU9e1wieHNcIn0+TWF4IHt1c2RjQmFsYW5jZX0gVVNEQzwvRmxleD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEZsZXggcD1cIjVcIj5cbiAgICAgICAgICB7LyogPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD17XCIxcHhcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e1wiIzU5NEI3RVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXtcIkthbml0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMnhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHNldERlcG9zaXRBbW91bnQodXNkY0JhbGFuY2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBNQVhcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggbWI9XCIxcmVtXCIgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgIGJnOiBcIiM1OTRCN0VcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgbXQ9XCIxcmVtXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZXBvc2l0KCl9XG4gICAgICAgID5cbiAgICAgICAgICBEZXBvc2l0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggbWI9XCIxcmVtXCIgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+XG4gICAgICAgIDxJbmZvSWNvbiBjb2xvcj1cIiM1OTRCN0VcIiAvPlxuICAgICAgICA8VGV4dCBtbD1cIjFyZW1cIiBmb250U2l6ZT17XCJ4c1wifT5cbiAgICAgICAgICBGb3IgdGhlIG1vbWVudCB5b3UgY2FuIG9ubHkgZGVwb3NpdCBVU0RDIVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0ZsZXg+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJGbGV4IiwiVGV4dCIsIkJveCIsIkhTdGFjayIsIlN0YWNrIiwiU3dpdGNoIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VDb2xvck1vZGUiLCJJY29uQnV0dG9uIiwiY29sb3JNb2RlIiwiVGFiIiwiVGFicyIsIlRhYlBhbmVsIiwiVGFiUGFuZWxzIiwiVGFiTGlzdCIsIklucHV0IiwiTnVtYmVySW5wdXRGaWVsZCIsIkxpbmsiLCJ1c2VDb250cmFjdFByb3ZpZGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbmZvSWNvbiIsImFiaVZhdWx0IiwidXNlVG9hc3QiLCJldGhlcnMiLCJBRERSRVNTIiwiQUJJUyIsIkRlcG9zaXQiLCJ1c2RjQmFsYW5jZSIsInVwZGF0ZVVzZGNCYWxhbmNlIiwidXBkYXRlUGxwQmFsYW5jZSIsInNpZ25lciIsInVwZGF0ZURhdGEiLCJ0b2FzdCIsImRlcG9zaXRBbW91bnQiLCJzZXREZXBvc2l0QW1vdW50IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGVwb3NpdCIsImtlZXBlcnNGZWUiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1ZBVUxUQUREUkVTUyIsImRlcG9zaXRBbW91bnRVU0RDIiwiZGl2IiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwiZmVlcyIsInVzZGMiLCJVU0RDIiwiRVJDMjAiLCJhIiwiYXBwcm92ZSIsIndhaXQiLCJ0cmFuc2FjdGlvbiIsInZhbHVlIiwiZ2FzTGltaXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiU3RyaW5nIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwiZSIsImVycm9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInAiLCJiZyIsInciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3hTaXplIiwib2JqZWN0Rml0Iiwic3JjIiwiYWx0IiwibWwiLCJkaXJlY3Rpb24iLCJoIiwiZm9udEZhbWlseSIsInR5cGUiLCJmb250U2l6ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJhbGlnblNlbGYiLCJtYiIsIl9ob3ZlciIsImNvbG9yIiwibXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user/Deposit.jsx\n"));

/***/ })

});