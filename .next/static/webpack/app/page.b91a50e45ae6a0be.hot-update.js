"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/pages/Upload/LineChartComponent.tsx":
/*!*****************************************************!*\
  !*** ./src/app/pages/Upload/LineChartComponent.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ag_charts_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-charts-react */ \"(app-pages-browser)/./node_modules/ag-charts-react/dist/package/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LineChartComponent = (param)=>{\n    let { type, data } = param;\n    var _data_meta, _data_meta1;\n    _s();\n    if (type !== 'lineChartData') return null;\n    const ITEMS_PER_PAGE = 50;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const totalItems = data.labels.length;\n    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);\n    // Calculate the data slice for the current page\n    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;\n    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);\n    const paginatedLabels = data.labels.slice(startIndex, endIndex);\n    const paginatedData = data.datasets[0].data.slice(startIndex, endIndex);\n    // Debug logging\n    console.log('Total items:', totalItems);\n    console.log('Current page:', currentPage);\n    console.log('Paginated labels:', paginatedLabels);\n    console.log('Paginated data:', paginatedData);\n    const agChartOptions = {\n        title: {\n            text: data.datasets[0].label || 'Line Chart'\n        },\n        // Use paginated data instead of full dataset\n        data: paginatedLabels.map((label, index)=>({\n                x: label,\n                y: paginatedData[index]\n            })),\n        series: [\n            {\n                type: 'line',\n                xKey: 'x',\n                yKey: 'y',\n                tooltip: {\n                    enabled: true\n                },\n                stroke: data.datasets[0].borderColor || '#8884d8',\n                marker: {\n                    enabled: true,\n                    size: 6\n                }\n            }\n        ],\n        axes: [\n            {\n                type: 'category',\n                position: 'bottom',\n                title: {\n                    text: ((_data_meta = data.meta) === null || _data_meta === void 0 ? void 0 : _data_meta.header) || 'Categories'\n                },\n                label: {\n                    rotation: 90\n                }\n            },\n            {\n                type: 'number',\n                position: 'left',\n                title: {\n                    text: ((_data_meta1 = data.meta) === null || _data_meta1 === void 0 ? void 0 : _data_meta1.valueName) || 'Values'\n                },\n                min: 0\n            }\n        ],\n        legend: {\n            enabled: true,\n            position: 'top'\n        },\n        padding: {\n            top: 40,\n            right: 40,\n            bottom: 40,\n            left: 40\n        }\n    };\n    // Pagination handlers\n    const goToPreviousPage = ()=>{\n        setCurrentPage((prev)=>Math.max(prev - 1, 1));\n    };\n    const goToNextPage = ()=>{\n        setCurrentPage((prev)=>Math.min(prev + 1, totalPages));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-white p-4 rounded-lg shadow flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '100%',\n                    height: '600px'\n                },\n                className: \"relative flex-grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_charts_react__WEBPACK_IMPORTED_MODULE_2__.AgCharts, {\n                    options: agChartOptions\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            totalItems > ITEMS_PER_PAGE && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: goToPreviousPage,\n                        disabled: currentPage === 1,\n                        className: \"px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300\",\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm\",\n                        children: [\n                            \"Page \",\n                            currentPage,\n                            \" of \",\n                            totalPages,\n                            \"(Showing \",\n                            startIndex + 1,\n                            \" - \",\n                            endIndex,\n                            \" of \",\n                            totalItems,\n                            \" items)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: goToNextPage,\n                        disabled: currentPage === totalPages,\n                        className: \"px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LineChartComponent, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = LineChartComponent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartComponent);\nvar _c;\n$RefreshReg$(_c, \"LineChartComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvVXBsb2FkL0xpbmVDaGFydENvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNVO0FBZ0IzQyxNQUFNRSxxQkFBcUI7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBK0I7UUFrRHZEQSxZQVVBQTs7SUEzRGQsSUFBSUQsU0FBUyxpQkFBaUIsT0FBTztJQUVyQyxNQUFNRSxpQkFBaUI7SUFDdkIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLGFBQWFKLEtBQUtLLE1BQU0sQ0FBQ0MsTUFBTTtJQUNyQyxNQUFNQyxhQUFhQyxLQUFLQyxJQUFJLENBQUNMLGFBQWFIO0lBRTFDLGdEQUFnRDtJQUNoRCxNQUFNUyxhQUFhLENBQUNSLGNBQWMsS0FBS0Q7SUFDdkMsTUFBTVUsV0FBV0gsS0FBS0ksR0FBRyxDQUFDRixhQUFhVCxnQkFBZ0JHO0lBRXZELE1BQU1TLGtCQUFrQmIsS0FBS0ssTUFBTSxDQUFDUyxLQUFLLENBQUNKLFlBQVlDO0lBQ3RELE1BQU1JLGdCQUFnQmYsS0FBS2dCLFFBQVEsQ0FBQyxFQUFFLENBQUNoQixJQUFJLENBQUNjLEtBQUssQ0FBQ0osWUFBWUM7SUFFOUQsZ0JBQWdCO0lBQ2hCTSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCZDtJQUM1QmEsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQmhCO0lBQzdCZSxRQUFRQyxHQUFHLENBQUMscUJBQXFCTDtJQUNqQ0ksUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkg7SUFFL0IsTUFBTUksaUJBQTBDO1FBQzlDQyxPQUFPO1lBQ0xDLE1BQU1yQixLQUFLZ0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ00sS0FBSyxJQUFJO1FBQ2xDO1FBQ0EsNkNBQTZDO1FBQzdDdEIsTUFBTWEsZ0JBQWdCVSxHQUFHLENBQUMsQ0FBQ0QsT0FBWUUsUUFBNEI7Z0JBQ2pFQyxHQUFHSDtnQkFDSEksR0FBR1gsYUFBYSxDQUFDUyxNQUFNO1lBQ3pCO1FBQ0FHLFFBQVE7WUFDTjtnQkFDRTVCLE1BQU07Z0JBQ042QixNQUFNO2dCQUNOQyxNQUFNO2dCQUNOQyxTQUFTO29CQUNQQyxTQUFTO2dCQUNYO2dCQUNBQyxRQUFRaEMsS0FBS2dCLFFBQVEsQ0FBQyxFQUFFLENBQUNpQixXQUFXLElBQUk7Z0JBQ3hDQyxRQUFRO29CQUNOSCxTQUFTO29CQUNUSSxNQUFNO2dCQUNSO1lBQ0Y7U0FDRDtRQUNEQyxNQUFNO1lBQ0o7Z0JBQ0VyQyxNQUFNO2dCQUNOc0MsVUFBVTtnQkFDVmpCLE9BQU87b0JBQ0xDLE1BQU1yQixFQUFBQSxhQUFBQSxLQUFLc0MsSUFBSSxjQUFUdEMsaUNBQUFBLFdBQVd1QyxNQUFNLEtBQUk7Z0JBQzdCO2dCQUNBakIsT0FBTztvQkFDTGtCLFVBQVU7Z0JBQ1o7WUFDRjtZQUNBO2dCQUNFekMsTUFBTTtnQkFDTnNDLFVBQVU7Z0JBQ1ZqQixPQUFPO29CQUNMQyxNQUFNckIsRUFBQUEsY0FBQUEsS0FBS3NDLElBQUksY0FBVHRDLGtDQUFBQSxZQUFXeUMsU0FBUyxLQUFJO2dCQUNoQztnQkFDQTdCLEtBQUs7WUFDUDtTQUNEO1FBQ0Q4QixRQUFRO1lBQ05YLFNBQVM7WUFDVE0sVUFBVTtRQUNaO1FBQ0FNLFNBQVM7WUFDUEMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTUMsbUJBQW1CO1FBQ3ZCN0MsZUFBZSxDQUFDOEMsT0FBU3pDLEtBQUswQyxHQUFHLENBQUNELE9BQU8sR0FBRztJQUM5QztJQUVBLE1BQU1FLGVBQWU7UUFDbkJoRCxlQUFlLENBQUM4QyxPQUFTekMsS0FBS0ksR0FBRyxDQUFDcUMsT0FBTyxHQUFHMUM7SUFDOUM7SUFFQSxxQkFDRSw4REFBQzZDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFDQ0UsT0FBTztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTtnQkFDVjtnQkFDQUgsV0FBVTswQkFFViw0RUFBQ3hELHFEQUFRQTtvQkFBQzRELFNBQVN0Qzs7Ozs7Ozs7Ozs7WUFJcEJmLGFBQWFILGdDQUNaLDhEQUFDbUQ7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFDQ0MsU0FBU1g7d0JBQ1RZLFVBQVUxRCxnQkFBZ0I7d0JBQzFCbUQsV0FBVTtrQ0FDWDs7Ozs7O2tDQUlELDhEQUFDUTt3QkFBS1IsV0FBVTs7NEJBQVU7NEJBQ2xCbkQ7NEJBQVk7NEJBQUtLOzRCQUFXOzRCQUN4QkcsYUFBYTs0QkFBRTs0QkFBSUM7NEJBQVM7NEJBQUtQOzRCQUFXOzs7Ozs7O2tDQUd4RCw4REFBQ3NEO3dCQUNDQyxTQUFTUjt3QkFDVFMsVUFBVTFELGdCQUFnQks7d0JBQzFCOEMsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0E3SE12RDtLQUFBQTtBQStITixpRUFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE11a2VzaC5rYXNpbWFoYW50aGlcXERlc2t0b3BcXHZpc3VsaXphdGlvblxcYWlBZ2VudEZyb250ZW5kQ29kZVxcc3JjXFxhcHBcXHBhZ2VzXFxVcGxvYWRcXExpbmVDaGFydENvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBZ0NoYXJ0cyB9IGZyb20gJ2FnLWNoYXJ0cy1yZWFjdCc7XHJcbmltcG9ydCB7IEFnQ2FydGVzaWFuQ2hhcnRPcHRpb25zIH0gZnJvbSAnYWctY2hhcnRzLWNvbW11bml0eSc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gIGRhdGFzZXRzOiBbe1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBudW1iZXJbXTtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gIH1dO1xyXG4gIG1ldGE/OiB7XHJcbiAgICBoZWFkZXI/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZU5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGluZUNoYXJ0Q29tcG9uZW50ID0gKHsgdHlwZSwgZGF0YSB9OiB7IHR5cGU6IHN0cmluZzsgZGF0YTogYW55IH0pID0+IHtcclxuICBpZiAodHlwZSAhPT0gJ2xpbmVDaGFydERhdGEnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgSVRFTVNfUEVSX1BBR0UgPSA1MDtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLmxhYmVscy5sZW5ndGg7XHJcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gSVRFTVNfUEVSX1BBR0UpO1xyXG5cclxuICAvLyBDYWxjdWxhdGUgdGhlIGRhdGEgc2xpY2UgZm9yIHRoZSBjdXJyZW50IHBhZ2VcclxuICBjb25zdCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBJVEVNU19QRVJfUEFHRTtcclxuICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWluKHN0YXJ0SW5kZXggKyBJVEVNU19QRVJfUEFHRSwgdG90YWxJdGVtcyk7XHJcbiAgXHJcbiAgY29uc3QgcGFnaW5hdGVkTGFiZWxzID0gZGF0YS5sYWJlbHMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG4gIGNvbnN0IHBhZ2luYXRlZERhdGEgPSBkYXRhLmRhdGFzZXRzWzBdLmRhdGEuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG5cclxuICAvLyBEZWJ1ZyBsb2dnaW5nXHJcbiAgY29uc29sZS5sb2coJ1RvdGFsIGl0ZW1zOicsIHRvdGFsSXRlbXMpO1xyXG4gIGNvbnNvbGUubG9nKCdDdXJyZW50IHBhZ2U6JywgY3VycmVudFBhZ2UpO1xyXG4gIGNvbnNvbGUubG9nKCdQYWdpbmF0ZWQgbGFiZWxzOicsIHBhZ2luYXRlZExhYmVscyk7XHJcbiAgY29uc29sZS5sb2coJ1BhZ2luYXRlZCBkYXRhOicsIHBhZ2luYXRlZERhdGEpO1xyXG5cclxuICBjb25zdCBhZ0NoYXJ0T3B0aW9uczogQWdDYXJ0ZXNpYW5DaGFydE9wdGlvbnMgPSB7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0ZXh0OiBkYXRhLmRhdGFzZXRzWzBdLmxhYmVsIHx8ICdMaW5lIENoYXJ0JyxcclxuICAgIH0sXHJcbiAgICAvLyBVc2UgcGFnaW5hdGVkIGRhdGEgaW5zdGVhZCBvZiBmdWxsIGRhdGFzZXRcclxuICAgIGRhdGE6IHBhZ2luYXRlZExhYmVscy5tYXAoKGxhYmVsOiBhbnksIGluZGV4OiBzdHJpbmcgfCBudW1iZXIpID0+ICh7XHJcbiAgICAgIHg6IGxhYmVsLFxyXG4gICAgICB5OiBwYWdpbmF0ZWREYXRhW2luZGV4XVxyXG4gICAgfSkpLFxyXG4gICAgc2VyaWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgeEtleTogJ3gnLFxyXG4gICAgICAgIHlLZXk6ICd5JyxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3Ryb2tlOiBkYXRhLmRhdGFzZXRzWzBdLmJvcmRlckNvbG9yIHx8ICcjODg4NGQ4JyxcclxuICAgICAgICBtYXJrZXI6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBzaXplOiA2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgYXhlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIHRleHQ6IGRhdGEubWV0YT8uaGVhZGVyIHx8ICdDYXRlZ29yaWVzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICByb3RhdGlvbjogOTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIHRleHQ6IGRhdGEubWV0YT8udmFsdWVOYW1lIHx8ICdWYWx1ZXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxlZ2VuZDoge1xyXG4gICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZzoge1xyXG4gICAgICB0b3A6IDQwLFxyXG4gICAgICByaWdodDogNDAsXHJcbiAgICAgIGJvdHRvbTogNDAsXHJcbiAgICAgIGxlZnQ6IDQwLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyBQYWdpbmF0aW9uIGhhbmRsZXJzXHJcbiAgY29uc3QgZ29Ub1ByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKChwcmV2KSA9PiBNYXRoLm1heChwcmV2IC0gMSwgMSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9OZXh0UGFnZSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKChwcmV2KSA9PiBNYXRoLm1pbihwcmV2ICsgMSwgdG90YWxQYWdlcykpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3cgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBoZWlnaHQ6ICc2MDBweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4LWdyb3dcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEFnQ2hhcnRzIG9wdGlvbnM9e2FnQ2hhcnRPcHRpb25zfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBQYWdpbmF0aW9uIENvbnRyb2xzICovfVxyXG4gICAgICB7dG90YWxJdGVtcyA+IElURU1TX1BFUl9QQUdFICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9QcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktMjAwIHJvdW5kZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBob3ZlcjpiZy1ncmF5LTMwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICBQYWdlIHtjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9IFxyXG4gICAgICAgICAgICAoU2hvd2luZyB7c3RhcnRJbmRleCArIDF9IC0ge2VuZEluZGV4fSBvZiB7dG90YWxJdGVtc30gaXRlbXMpXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17Z29Ub05leHRQYWdlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTAgaG92ZXI6YmctZ3JheS0zMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnRDb21wb25lbnQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWdDaGFydHMiLCJMaW5lQ2hhcnRDb21wb25lbnQiLCJ0eXBlIiwiZGF0YSIsIklURU1TX1BFUl9QQUdFIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsSXRlbXMiLCJsYWJlbHMiLCJsZW5ndGgiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJtaW4iLCJwYWdpbmF0ZWRMYWJlbHMiLCJzbGljZSIsInBhZ2luYXRlZERhdGEiLCJkYXRhc2V0cyIsImNvbnNvbGUiLCJsb2ciLCJhZ0NoYXJ0T3B0aW9ucyIsInRpdGxlIiwidGV4dCIsImxhYmVsIiwibWFwIiwiaW5kZXgiLCJ4IiwieSIsInNlcmllcyIsInhLZXkiLCJ5S2V5IiwidG9vbHRpcCIsImVuYWJsZWQiLCJzdHJva2UiLCJib3JkZXJDb2xvciIsIm1hcmtlciIsInNpemUiLCJheGVzIiwicG9zaXRpb24iLCJtZXRhIiwiaGVhZGVyIiwicm90YXRpb24iLCJ2YWx1ZU5hbWUiLCJsZWdlbmQiLCJwYWRkaW5nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZ29Ub1ByZXZpb3VzUGFnZSIsInByZXYiLCJtYXgiLCJnb1RvTmV4dFBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Upload/LineChartComponent.tsx\n"));

/***/ })

});