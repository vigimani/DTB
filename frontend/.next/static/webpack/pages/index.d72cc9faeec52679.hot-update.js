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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Deposit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/ContractContext */ \"./context/ContractContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _assets_abi_MyVault_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/abi-MyVault.json */ \"./assets/abi-MyVault.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/@config */ \"./utils/@config.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/utilsfunction */ \"./utils/utilsfunction.js\");\n/* harmony import */ var _utils_utilsfunction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Deposit(param) {\n    let { bgCard , colortext , colorfond2  } = param;\n    _s();\n    const { usdcBalance , updateUsdcBalance , updatePlpBalance , signer , updateData  } = (0,_context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.useContractProvider)();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useToast)();\n    const [depositAmount, setDepositAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const deposit = async ()=>{\n        setIsLoading(true);\n        try {\n            let keepersFee = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseEther(\"0.0001\");\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(\"0x95401dc811bb5740090279Ba06cfA8fcF6113778\", _assets_abi_MyVault_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            let depositAmountUSDC = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseEther(depositAmount).div(10 ** 12);\n            console.log(depositAmount);\n            console.log(depositAmountUSDC.toString());\n            let fees = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.parseEther(\"100\");\n            let usdc = await new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_utils_config__WEBPACK_IMPORTED_MODULE_5__.ADDRESS.USDC, _utils_config__WEBPACK_IMPORTED_MODULE_5__.ABIS.ERC20, signer);\n            let a = await usdc.approve(\"0x95401dc811bb5740090279Ba06cfA8fcF6113778\", depositAmountUSDC);\n            await a.wait(1);\n            let transaction = await contract.deposit(_utils_config__WEBPACK_IMPORTED_MODULE_5__.ADDRESS.USDC, depositAmountUSDC, {\n                value: keepersFee,\n                gasLimit: 1000000\n            });\n            await transaction.wait(1);\n            await updateUsdcBalance();\n            await updatePlpBalance();\n            await updateData();\n            toast({\n                title: \"Congratulations!\",\n                description: \"Your have sent \" + String(depositAmount) + \" usdc to the vault\",\n                status: \"success\",\n                duration: 9000,\n                isClosable: true\n            });\n        } catch (e) {\n            toast({\n                title: \"Error\",\n                description: \"An error occured, please try again...\",\n                status: \"error\",\n                duration: 9000,\n                isClosable: true\n            });\n            console.error(e);\n        }\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                borderWidth: \"1px\",\n                borderColor: \"#594B7E\",\n                borderRadius: \"8px\",\n                fontFamily: \"Kanit\",\n                fontSize: \"xl\",\n                p: \"5px\",\n                bg: \"#F4F6FE\",\n                w: \"100%\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                        p: \"5\",\n                        alignItems: \"center\",\n                        h: \"100%\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                                borderRadius: \"8px\",\n                                bg: \"#2775CA\",\n                                alignItems: \"center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n                                    boxSize: \"50px\",\n                                    objectFit: \"cover\",\n                                    src: \"https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png\",\n                                    alt: \"USDC\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                                ml: \"1rem\",\n                                direction: \"column\",\n                                h: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                                        fontFamily: \"Kanit\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                w: \"100px\",\n                                                type: \"number\",\n                                                fontSize: \"md\",\n                                                placeholder: \"0\",\n                                                borderColor: \"transparent\",\n                                                onChange: (e)=>setDepositAmount(e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                                                ml: \"1rem\",\n                                                alignSelf: \"center\",\n                                                children: \"USDC\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                                lineNumber: 126,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                                        fontSize: \"xs\",\n                                        children: [\n                                            \"Max \",\n                                            (0,_utils_utilsfunction__WEBPACK_IMPORTED_MODULE_6__.numberWithSpaces)(usdcBalance.toFixed(0)),\n                                            \" USDC\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                        p: \"5\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                mb: \"1rem\",\n                alignItems: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    _hover: {\n                        bg: \"#594B7E\",\n                        color: \"white\"\n                    },\n                    w: \"100%\",\n                    mt: \"1rem\",\n                    onClick: ()=>deposit(),\n                    children: \"Deposit\"\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                mb: \"1rem\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__.InfoIcon, {\n                        color: colortext\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                        ml: \"1rem\",\n                        fontSize: \"xs\",\n                        children: \"For the moment you can only deposit USDC!\"\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                        lineNumber: 162,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ubuntu/alyra-training/FP/frontend/components/user/Deposit.jsx\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Deposit, \"OQPOc3c7glk2n8hEUNiyR8TKOTM=\", false, function() {\n    return [\n        _context_ContractContext__WEBPACK_IMPORTED_MODULE_2__.useContractProvider,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useToast\n    ];\n});\n_c = Deposit;\nvar _c;\n$RefreshReg$(_c, \"Deposit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO2dEQUNMYixVQUFVO2dEQUNWYyxhQUFZO2dEQUNaakIsYUFBYTtnREFDYmtCLFVBQVUsQ0FBQ3JCLElBQU1qQyxpQkFBaUJpQyxFQUFFc0IsTUFBTSxDQUFDOUIsS0FBSzs7Ozs7OzBEQUVsRCw4REFBQ2pFLGtEQUFJQTtnREFBQzBGLElBQUc7Z0RBQU9NLFdBQVc7MERBQVU7Ozs7Ozs7Ozs7OztrREFJdkMsOERBQUNoRyxrREFBSUE7d0NBQUMrRSxVQUFVOzs0Q0FBTTs0Q0FBS25ELHNFQUFnQkEsQ0FBQ0ssWUFBWWdFLE9BQU8sQ0FBQzs0Q0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHeEUsOERBQUNqRyxrREFBSUE7d0JBQUNnRixHQUFFOzs7Ozs7Ozs7Ozs7MEJBY1YsOERBQUNoRixrREFBSUE7Z0JBQUNrRyxJQUFHO2dCQUFPZCxZQUFZOzBCQUMxQiw0RUFBQzlFLG9EQUFNQTtvQkFDTDZGLFFBQVE7d0JBQ05sQixJQUFJO3dCQUNKbUIsT0FBTztvQkFDVDtvQkFDQWxCLEdBQUU7b0JBQ0ZtQixJQUFHO29CQUNIQyxTQUFTLElBQU0zRDs4QkFDaEI7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDM0Msa0RBQUlBO2dCQUFDa0csSUFBRztnQkFBT2QsWUFBWTs7a0NBQzFCLDhEQUFDOUQsc0RBQVFBO3dCQUFDOEUsT0FBT3JFOzs7Ozs7a0NBQ2pCLDhEQUFDOUIsa0RBQUlBO3dCQUFDeUYsSUFBRzt3QkFBT1gsVUFBVTtrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7QUFNeEMsQ0FBQztHQXpJdUJsRDs7UUFFcEJWLHlFQUFtQkE7UUFDUEssc0RBQVFBOzs7S0FIQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyL0RlcG9zaXQuanN4PzhlZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW1hZ2UsXG4gIEZsZXgsXG4gIFRleHQsXG4gIEJveCxcbiAgSFN0YWNrLFxuICBTdGFjayxcbiAgU3dpdGNoLFxuICBCdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICB1c2VDb2xvck1vZGUsXG4gIEljb25CdXR0b24sXG4gIGNvbG9yTW9kZSxcbiAgVGFiLFxuICBUYWJzLFxuICBUYWJQYW5lbCxcbiAgVGFiUGFuZWxzLFxuICBUYWJMaXN0LFxuICBJbnB1dCxcbiAgTnVtYmVySW5wdXRGaWVsZCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUNvbnRyYWN0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L0NvbnRyYWN0Q29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5mb0ljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuaW1wb3J0IGFiaVZhdWx0IGZyb20gXCIuLi8uLi9hc3NldHMvYWJpLU15VmF1bHQuanNvblwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQUREUkVTUywgQUJJUyB9IGZyb20gXCIuLi8uLi91dGlscy9AY29uZmlnXCI7XG5pbXBvcnQgeyBudW1iZXJXaXRoU3BhY2VzIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNmdW5jdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVwb3NpdCh7YmdDYXJkLCBjb2xvcnRleHQsIGNvbG9yZm9uZDJ9KSB7XG4gIGNvbnN0IHsgdXNkY0JhbGFuY2UsIHVwZGF0ZVVzZGNCYWxhbmNlLCB1cGRhdGVQbHBCYWxhbmNlLCBzaWduZXIsIHVwZGF0ZURhdGEgfSA9XG4gICAgdXNlQ29udHJhY3RQcm92aWRlcigpO1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbiAgY29uc3QgW2RlcG9zaXRBbW91bnQsIHNldERlcG9zaXRBbW91bnRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBsZXQga2VlcGVyc0ZlZSA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFwiMC4wMDAxXCIpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WQVVMVEFERFJFU1MsXG4gICAgICAgIGFiaVZhdWx0LFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG4gICAgICBsZXQgZGVwb3NpdEFtb3VudFVTREMgPSBldGhlcnMudXRpbHNcbiAgICAgICAgLnBhcnNlRXRoZXIoZGVwb3NpdEFtb3VudClcbiAgICAgICAgLmRpdigxMCAqKiAxMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlcG9zaXRBbW91bnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGRlcG9zaXRBbW91bnRVU0RDLnRvU3RyaW5nKCkpXG4gICAgICBsZXQgZmVlcyA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFwiMTAwXCIpO1xuICAgICAgbGV0IHVzZGMgPSBhd2FpdCBuZXcgZXRoZXJzLkNvbnRyYWN0KEFERFJFU1MuVVNEQywgQUJJUy5FUkMyMCwgc2lnbmVyKTtcbiAgICAgIGxldCBhID0gYXdhaXQgdXNkYy5hcHByb3ZlKFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WQVVMVEFERFJFU1MsXG4gICAgICAgIGRlcG9zaXRBbW91bnRVU0RDXG4gICAgICApO1xuICAgICAgYXdhaXQgYS53YWl0KDEpO1xuICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuZGVwb3NpdChcbiAgICAgICAgQUREUkVTUy5VU0RDLFxuICAgICAgICBkZXBvc2l0QW1vdW50VVNEQyxcbiAgICAgICAgeyB2YWx1ZToga2VlcGVyc0ZlZSwgZ2FzTGltaXQ6IDEwMDAwMDAgfVxuICAgICAgKTtcbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoMSk7XG4gICAgICBhd2FpdCB1cGRhdGVVc2RjQmFsYW5jZSgpO1xuICAgICAgYXdhaXQgdXBkYXRlUGxwQmFsYW5jZSgpO1xuICAgICAgYXdhaXQgdXBkYXRlRGF0YSgpXG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIkNvbmdyYXR1bGF0aW9ucyFcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJZb3VyIGhhdmUgc2VudCBcIiArIFN0cmluZyhkZXBvc2l0QW1vdW50KSArIFwiIHVzZGMgdG8gdGhlIHZhdWx0XCIsXG4gICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gICAgICAgIGR1cmF0aW9uOiA5MDAwLFxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBbiBlcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluLi4uXCIsXG4gICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgICAgICBkdXJhdGlvbjogOTAwMCxcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmxleFxuICAgICAgICBib3JkZXJXaWR0aD17XCIxcHhcIn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e1wiIzU5NEI3RVwifVxuICAgICAgICBib3JkZXJSYWRpdXM9XCI4cHhcIlxuICAgICAgICBmb250RmFtaWx5PXtcIkthbml0XCJ9XG4gICAgICAgIGZvbnRTaXplPXtcInhsXCJ9XG4gICAgICAgIHA9XCI1cHhcIlxuICAgICAgICBiZz1cIiNGNEY2RkVcIlxuICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn1cbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxGbGV4IHA9XCI1XCIgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0gaD1cIjEwMCVcIj5cbiAgICAgICAgICA8RmxleCBib3JkZXJSYWRpdXM9XCI4cHhcIiBiZz1cIiMyNzc1Q0FcIiBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBib3hTaXplPVwiNTBweFwiXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzY0eDY0LzM0MDgucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiVVNEQ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCBtbD1cIjFyZW1cIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPEZsZXggZm9udEZhbWlseT17XCJLYW5pdFwifT5cbiAgICAgICAgICAgICAgey8qIDxJbnB1dCB2YWx1ZT17ZGVwb3NpdEFtb3VudH0gdz1cIjEwMHB4XCIgdHlwZT1cIm51bWJlclwiIGZvbnRTaXplPXtcIm1kXCJ9IGg9XCIzMnB4XCIgcGxhY2Vob2xkZXI9JzAnIGJvcmRlckNvbG9yPXtcInRyYW5zcGFyZW50XCJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVwb3NpdEFtb3VudChlLnRhcmdldC52YWx1ZSl9Lz4gKi99XG5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdz1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17XCJtZFwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e1widHJhbnNwYXJlbnRcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcG9zaXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8RmxleCBtbD1cIjFyZW1cIiBhbGlnblNlbGY9e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgIFVTRENcbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPEZsZXggZm9udFNpemU9e1wieHNcIn0+TWF4IHtudW1iZXJXaXRoU3BhY2VzKHVzZGNCYWxhbmNlLnRvRml4ZWQoMCkpfSBVU0RDPC9GbGV4PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8RmxleCBwPVwiNVwiPlxuICAgICAgICAgIHsvKiA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoPXtcIjFweFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj17XCIjNTk0QjdFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9e1wiS2FuaXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIyeHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoPVwiMzBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gc2V0RGVwb3NpdEFtb3VudCh1c2RjQmFsYW5jZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1BWFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBtYj1cIjFyZW1cIiBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwiIzU5NEI3RVwiLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlcG9zaXQoKX1cbiAgICAgICAgPlxuICAgICAgICAgIERlcG9zaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBtYj1cIjFyZW1cIiBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgICAgPEluZm9JY29uIGNvbG9yPXtjb2xvcnRleHR9IC8+XG4gICAgICAgIDxUZXh0IG1sPVwiMXJlbVwiIGZvbnRTaXplPXtcInhzXCJ9PlxuICAgICAgICAgIEZvciB0aGUgbW9tZW50IHlvdSBjYW4gb25seSBkZXBvc2l0IFVTREMhXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvRmxleD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkZsZXgiLCJUZXh0IiwiQm94IiwiSFN0YWNrIiwiU3RhY2siLCJTd2l0Y2giLCJCdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZUNvbG9yTW9kZSIsIkljb25CdXR0b24iLCJjb2xvck1vZGUiLCJUYWIiLCJUYWJzIiwiVGFiUGFuZWwiLCJUYWJQYW5lbHMiLCJUYWJMaXN0IiwiSW5wdXQiLCJOdW1iZXJJbnB1dEZpZWxkIiwiTGluayIsInVzZUNvbnRyYWN0UHJvdmlkZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkluZm9JY29uIiwiYWJpVmF1bHQiLCJ1c2VUb2FzdCIsImV0aGVycyIsIkFERFJFU1MiLCJBQklTIiwibnVtYmVyV2l0aFNwYWNlcyIsIkRlcG9zaXQiLCJiZ0NhcmQiLCJjb2xvcnRleHQiLCJjb2xvcmZvbmQyIiwidXNkY0JhbGFuY2UiLCJ1cGRhdGVVc2RjQmFsYW5jZSIsInVwZGF0ZVBscEJhbGFuY2UiLCJzaWduZXIiLCJ1cGRhdGVEYXRhIiwidG9hc3QiLCJkZXBvc2l0QW1vdW50Iiwic2V0RGVwb3NpdEFtb3VudCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRlcG9zaXQiLCJrZWVwZXJzRmVlIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19WQVVMVEFERFJFU1MiLCJkZXBvc2l0QW1vdW50VVNEQyIsImRpdiIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsImZlZXMiLCJ1c2RjIiwiVVNEQyIsIkVSQzIwIiwiYSIsImFwcHJvdmUiLCJ3YWl0IiwidHJhbnNhY3Rpb24iLCJ2YWx1ZSIsImdhc0xpbWl0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIlN0cmluZyIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImUiLCJlcnJvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJwIiwiYmciLCJ3IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaCIsImJveFNpemUiLCJvYmplY3RGaXQiLCJzcmMiLCJhbHQiLCJtbCIsImRpcmVjdGlvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYWxpZ25TZWxmIiwidG9GaXhlZCIsIm1iIiwiX2hvdmVyIiwiY29sb3IiLCJtdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/Deposit.jsx\n"));

/***/ })

});