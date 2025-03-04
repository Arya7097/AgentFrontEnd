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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ag_charts_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-charts-react */ \"(app-pages-browser)/./node_modules/ag-charts-react/dist/package/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LineChartComponent = (param)=>{\n    let { type, data } = param;\n    var _data_meta, _data_meta1;\n    _s();\n    if (type !== 'lineChartData') return null;\n    const ITEMS_PER_PAGE = 50;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const totalItems = data.labels.length;\n    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);\n    // Calculate the data slice for the current page\n    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;\n    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);\n    const paginatedLabels = data.labels.slice(startIndex, endIndex);\n    const paginatedData = data.datasets[0].data.slice(startIndex, endIndex);\n    const agChartOptions = {\n        title: {\n            text: data.datasets[0].label || 'Line Chart'\n        },\n        // Use paginated data instead of full dataset\n        data: paginatedLabels.map((label, index)=>({\n                x: label,\n                y: paginatedData[index]\n            })),\n        series: [\n            {\n                type: 'line',\n                xKey: 'x',\n                yKey: 'y',\n                tooltip: {\n                    enabled: true\n                },\n                stroke: data.datasets[0].borderColor || '#8884d8',\n                marker: {\n                    enabled: true,\n                    size: 6\n                }\n            }\n        ],\n        axes: [\n            {\n                type: 'category',\n                position: 'bottom',\n                title: {\n                    text: ((_data_meta = data.meta) === null || _data_meta === void 0 ? void 0 : _data_meta.header) || 'Categories'\n                },\n                label: {\n                    rotation: 90\n                }\n            },\n            {\n                type: 'number',\n                position: 'left',\n                title: {\n                    text: ((_data_meta1 = data.meta) === null || _data_meta1 === void 0 ? void 0 : _data_meta1.valueName) || 'Values'\n                },\n                min: 0\n            }\n        ],\n        legend: {\n            enabled: true,\n            position: 'top'\n        },\n        padding: {\n            top: 40,\n            right: 40,\n            bottom: 40,\n            left: 40\n        }\n    };\n    // Pagination handlers\n    const goToPreviousPage = ()=>{\n        setCurrentPage((prev)=>Math.max(prev - 1, 1));\n    };\n    const goToNextPage = ()=>{\n        setCurrentPage((prev)=>Math.min(prev + 1, totalPages));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-white h-full p-4 rounded-lg shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '100%',\n                    height: '600px'\n                },\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_charts_react__WEBPACK_IMPORTED_MODULE_2__.AgCharts, {\n                    options: agChartOptions\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-mt-15\",\n                children: totalItems > ITEMS_PER_PAGE && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: goToPreviousPage,\n                            disabled: currentPage === 1,\n                            className: \"px-4 py-2 bg-gray-200 rounded disabled:opacity-50\",\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Page \",\n                                currentPage,\n                                \" of \",\n                                totalPages,\n                                \"(Showing \",\n                                startIndex + 1,\n                                \" - \",\n                                endIndex,\n                                \" of \",\n                                totalItems,\n                                \" items)\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: goToNextPage,\n                            disabled: currentPage === totalPages,\n                            className: \"px-4 py-2 bg-gray-200 rounded disabled:opacity-50\",\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LineChartComponent, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = LineChartComponent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartComponent);\nvar _c;\n$RefreshReg$(_c, \"LineChartComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvVXBsb2FkL0xpbmVDaGFydENvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNVO0FBZ0IzQyxNQUFNRSxxQkFBcUI7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBcUM7UUE0QzdEQSxZQVVBQTs7SUFyRGQsSUFBSUQsU0FBUyxpQkFBaUIsT0FBTztJQUVyQyxNQUFNRSxpQkFBaUI7SUFDdkIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLGFBQWFKLEtBQUtLLE1BQU0sQ0FBQ0MsTUFBTTtJQUNyQyxNQUFNQyxhQUFhQyxLQUFLQyxJQUFJLENBQUNMLGFBQWFIO0lBRTFDLGdEQUFnRDtJQUNoRCxNQUFNUyxhQUFhLENBQUNSLGNBQWMsS0FBS0Q7SUFDdkMsTUFBTVUsV0FBV0gsS0FBS0ksR0FBRyxDQUFDRixhQUFhVCxnQkFBZ0JHO0lBRXZELE1BQU1TLGtCQUFrQmIsS0FBS0ssTUFBTSxDQUFDUyxLQUFLLENBQUNKLFlBQVlDO0lBQ3RELE1BQU1JLGdCQUFnQmYsS0FBS2dCLFFBQVEsQ0FBQyxFQUFFLENBQUNoQixJQUFJLENBQUNjLEtBQUssQ0FBQ0osWUFBWUM7SUFFOUQsTUFBTU0saUJBQTBDO1FBQzlDQyxPQUFPO1lBQ0xDLE1BQU1uQixLQUFLZ0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ0ksS0FBSyxJQUFJO1FBQ2xDO1FBQ0EsNkNBQTZDO1FBQzdDcEIsTUFBTWEsZ0JBQWdCUSxHQUFHLENBQUMsQ0FBQ0QsT0FBT0UsUUFBVztnQkFDM0NDLEdBQUdIO2dCQUNISSxHQUFHVCxhQUFhLENBQUNPLE1BQU07WUFDekI7UUFDQUcsUUFBUTtZQUNOO2dCQUNFMUIsTUFBTTtnQkFDTjJCLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFNBQVM7b0JBQ1BDLFNBQVM7Z0JBQ1g7Z0JBQ0FDLFFBQVE5QixLQUFLZ0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ2UsV0FBVyxJQUFJO2dCQUN4Q0MsUUFBUTtvQkFDTkgsU0FBUztvQkFDVEksTUFBTTtnQkFDUjtZQUNGO1NBQ0Q7UUFDREMsTUFBTTtZQUNKO2dCQUNFbkMsTUFBTTtnQkFDTm9DLFVBQVU7Z0JBQ1ZqQixPQUFPO29CQUNMQyxNQUFNbkIsRUFBQUEsYUFBQUEsS0FBS29DLElBQUksY0FBVHBDLGlDQUFBQSxXQUFXcUMsTUFBTSxLQUFJO2dCQUM3QjtnQkFDQWpCLE9BQU87b0JBQ0xrQixVQUFVO2dCQUNaO1lBQ0Y7WUFDQTtnQkFDRXZDLE1BQU07Z0JBQ05vQyxVQUFVO2dCQUNWakIsT0FBTztvQkFDTEMsTUFBTW5CLEVBQUFBLGNBQUFBLEtBQUtvQyxJQUFJLGNBQVRwQyxrQ0FBQUEsWUFBV3VDLFNBQVMsS0FBSTtnQkFDaEM7Z0JBQ0EzQixLQUFLO1lBQ1A7U0FDRDtRQUNENEIsUUFBUTtZQUNOWCxTQUFTO1lBQ1RNLFVBQVU7UUFDWjtRQUNBTSxTQUFTO1lBQ1BDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLE1BQU07UUFDUjtJQUNGO0lBRUEsc0JBQXNCO0lBQ3RCLE1BQU1DLG1CQUFtQjtRQUN2QjNDLGVBQWUsQ0FBQzRDLE9BQVN2QyxLQUFLd0MsR0FBRyxDQUFDRCxPQUFPLEdBQUc7SUFDOUM7SUFFQSxNQUFNRSxlQUFlO1FBQ25COUMsZUFBZSxDQUFDNEMsT0FBU3ZDLEtBQUtJLEdBQUcsQ0FBQ21DLE9BQU8sR0FBR3hDO0lBQzlDO0lBRUEscUJBQ0UsOERBQUMyQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NFLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLFFBQVE7Z0JBQ1Y7Z0JBQ0FILFdBQVU7MEJBRVYsNEVBQUN0RCxxREFBUUE7b0JBQUMwRCxTQUFTdEM7Ozs7Ozs7Ozs7OzBCQUlyQiw4REFBQ2lDO2dCQUFJQyxXQUFVOzBCQUNaL0MsYUFBYUgsZ0NBQ1osOERBQUNpRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUNDQyxTQUFTWDs0QkFDVFksVUFBVXhELGdCQUFnQjs0QkFDMUJpRCxXQUFVO3NDQUNYOzs7Ozs7c0NBSUQsOERBQUNROztnQ0FBSztnQ0FDRXpEO2dDQUFZO2dDQUFLSztnQ0FBVztnQ0FDeEJHLGFBQWE7Z0NBQUU7Z0NBQUlDO2dDQUFTO2dDQUFLUDtnQ0FBVzs7Ozs7OztzQ0FHeEQsOERBQUNvRDs0QkFDQ0MsU0FBU1I7NEJBQ1RTLFVBQVV4RCxnQkFBZ0JLOzRCQUMxQjRDLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0F6SE1yRDtLQUFBQTtBQTJITixpRUFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE11a2VzaC5rYXNpbWFoYW50aGlcXERlc2t0b3BcXHZpc3VsaXphdGlvblxcYWlBZ2VudEZyb250ZW5kQ29kZVxcc3JjXFxhcHBcXHBhZ2VzXFxVcGxvYWRcXExpbmVDaGFydENvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBZ0NoYXJ0cyB9IGZyb20gJ2FnLWNoYXJ0cy1yZWFjdCc7XHJcbmltcG9ydCB7IEFnQ2FydGVzaWFuQ2hhcnRPcHRpb25zIH0gZnJvbSAnYWctY2hhcnRzLWNvbW11bml0eSc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnREYXRhIHtcclxuICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gIGRhdGFzZXRzOiBbe1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBudW1iZXJbXTtcclxuICAgIGJvcmRlckNvbG9yPzogc3RyaW5nO1xyXG4gIH1dO1xyXG4gIG1ldGE/OiB7XHJcbiAgICBoZWFkZXI/OiBzdHJpbmc7XHJcbiAgICB2YWx1ZU5hbWU/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgTGluZUNoYXJ0Q29tcG9uZW50ID0gKHsgdHlwZSwgZGF0YSB9OiB7IHR5cGU6IHN0cmluZzsgZGF0YTogQ2hhcnREYXRhIH0pID0+IHtcclxuICBpZiAodHlwZSAhPT0gJ2xpbmVDaGFydERhdGEnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgSVRFTVNfUEVSX1BBR0UgPSA1MDtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBkYXRhLmxhYmVscy5sZW5ndGg7XHJcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gSVRFTVNfUEVSX1BBR0UpO1xyXG5cclxuICAvLyBDYWxjdWxhdGUgdGhlIGRhdGEgc2xpY2UgZm9yIHRoZSBjdXJyZW50IHBhZ2VcclxuICBjb25zdCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBJVEVNU19QRVJfUEFHRTtcclxuICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWluKHN0YXJ0SW5kZXggKyBJVEVNU19QRVJfUEFHRSwgdG90YWxJdGVtcyk7XHJcbiAgXHJcbiAgY29uc3QgcGFnaW5hdGVkTGFiZWxzID0gZGF0YS5sYWJlbHMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG4gIGNvbnN0IHBhZ2luYXRlZERhdGEgPSBkYXRhLmRhdGFzZXRzWzBdLmRhdGEuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG5cclxuICBjb25zdCBhZ0NoYXJ0T3B0aW9uczogQWdDYXJ0ZXNpYW5DaGFydE9wdGlvbnMgPSB7XHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0ZXh0OiBkYXRhLmRhdGFzZXRzWzBdLmxhYmVsIHx8ICdMaW5lIENoYXJ0JyxcclxuICAgIH0sXHJcbiAgICAvLyBVc2UgcGFnaW5hdGVkIGRhdGEgaW5zdGVhZCBvZiBmdWxsIGRhdGFzZXRcclxuICAgIGRhdGE6IHBhZ2luYXRlZExhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKHtcclxuICAgICAgeDogbGFiZWwsXHJcbiAgICAgIHk6IHBhZ2luYXRlZERhdGFbaW5kZXhdXHJcbiAgICB9KSksXHJcbiAgICBzZXJpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICB4S2V5OiAneCcsXHJcbiAgICAgICAgeUtleTogJ3knLFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJva2U6IGRhdGEuZGF0YXNldHNbMF0uYm9yZGVyQ29sb3IgfHwgJyM4ODg0ZDgnLFxyXG4gICAgICAgIG1hcmtlcjoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHNpemU6IDYsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBheGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgdGV4dDogZGF0YS5tZXRhPy5oZWFkZXIgfHwgJ0NhdGVnb3JpZXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgIHJvdGF0aW9uOiA5MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgdGV4dDogZGF0YS5tZXRhPy52YWx1ZU5hbWUgfHwgJ1ZhbHVlcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbGVnZW5kOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHRvcDogNDAsXHJcbiAgICAgIHJpZ2h0OiA0MCxcclxuICAgICAgYm90dG9tOiA0MCxcclxuICAgICAgbGVmdDogNDAsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vIFBhZ2luYXRpb24gaGFuZGxlcnNcclxuICBjb25zdCBnb1RvUHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UoKHByZXYpID0+IE1hdGgubWF4KHByZXYgLSAxLCAxKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ29Ub05leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UoKHByZXYpID0+IE1hdGgubWluKHByZXYgKyAxLCB0b3RhbFBhZ2VzKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIGgtZnVsbCBwLTQgcm91bmRlZC1sZyBzaGFkb3dcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnNjAwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEFnQ2hhcnRzIG9wdGlvbnM9e2FnQ2hhcnRPcHRpb25zfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBQYWdpbmF0aW9uIENvbnRyb2xzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nLW10LTE1Jz5cclxuICAgICAgICB7dG90YWxJdGVtcyA+IElURU1TX1BFUl9QQUdFICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9QcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBQYWdlIHtjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9IFxyXG4gICAgICAgICAgICAgIChTaG93aW5nIHtzdGFydEluZGV4ICsgMX0gLSB7ZW5kSW5kZXh9IG9mIHt0b3RhbEl0ZW1zfSBpdGVtcylcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9OZXh0UGFnZX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktMjAwIHJvdW5kZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0Q29tcG9uZW50OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFnQ2hhcnRzIiwiTGluZUNoYXJ0Q29tcG9uZW50IiwidHlwZSIsImRhdGEiLCJJVEVNU19QRVJfUEFHRSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ0b3RhbEl0ZW1zIiwibGFiZWxzIiwibGVuZ3RoIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwibWluIiwicGFnaW5hdGVkTGFiZWxzIiwic2xpY2UiLCJwYWdpbmF0ZWREYXRhIiwiZGF0YXNldHMiLCJhZ0NoYXJ0T3B0aW9ucyIsInRpdGxlIiwidGV4dCIsImxhYmVsIiwibWFwIiwiaW5kZXgiLCJ4IiwieSIsInNlcmllcyIsInhLZXkiLCJ5S2V5IiwidG9vbHRpcCIsImVuYWJsZWQiLCJzdHJva2UiLCJib3JkZXJDb2xvciIsIm1hcmtlciIsInNpemUiLCJheGVzIiwicG9zaXRpb24iLCJtZXRhIiwiaGVhZGVyIiwicm90YXRpb24iLCJ2YWx1ZU5hbWUiLCJsZWdlbmQiLCJwYWRkaW5nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZ29Ub1ByZXZpb3VzUGFnZSIsInByZXYiLCJtYXgiLCJnb1RvTmV4dFBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Upload/LineChartComponent.tsx\n"));

/***/ })

});