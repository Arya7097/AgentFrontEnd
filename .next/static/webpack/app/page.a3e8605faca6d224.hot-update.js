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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ag_charts_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-charts-react */ \"(app-pages-browser)/./node_modules/ag-charts-react/dist/package/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LineChartComponent = (param)=>{\n    let { type, data } = param;\n    var _data_meta, _data_meta1;\n    _s();\n    if (type !== 'lineChartData') return null;\n    const ITEMS_PER_PAGE = 10;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const totalItems = data.labels.length;\n    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);\n    // Calculate the data slice for the current page\n    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;\n    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);\n    const paginatedLabels = data.labels.slice(startIndex, endIndex);\n    const paginatedData = data.datasets[0].data.slice(startIndex, endIndex);\n    const agChartOptions = {\n        title: {\n            text: data.datasets[0].label || 'Line Chart'\n        },\n        data: paginatedLabels.map((label, index)=>({\n                x: label,\n                y: paginatedData[index]\n            })),\n        series: [\n            {\n                type: 'line',\n                xKey: 'x',\n                yKey: 'y',\n                tooltip: {\n                    enabled: true\n                },\n                stroke: data.datasets[0].borderColor || '#8884d8',\n                marker: {\n                    enabled: true,\n                    size: 6\n                }\n            }\n        ],\n        axes: [\n            {\n                type: 'category',\n                position: 'bottom',\n                title: {\n                    text: ((_data_meta = data.meta) === null || _data_meta === void 0 ? void 0 : _data_meta.header) || 'Categories'\n                },\n                label: {\n                    rotation: totalItems > 50 ? 90 : 0\n                }\n            },\n            {\n                type: 'number',\n                position: 'left',\n                title: {\n                    text: ((_data_meta1 = data.meta) === null || _data_meta1 === void 0 ? void 0 : _data_meta1.valueName) || 'Values'\n                },\n                min: 0\n            }\n        ],\n        legend: {\n            enabled: true,\n            position: 'top'\n        },\n        padding: {\n            top: 40,\n            right: 40,\n            bottom: 40,\n            left: 40\n        }\n    };\n    // Pagination handlers\n    const goToPreviousPage = ()=>{\n        setCurrentPage((prev)=>Math.max(prev - 1, 1));\n    };\n    const goToNextPage = ()=>{\n        setCurrentPage((prev)=>Math.min(prev + 1, totalPages));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-white p-4 rounded-lg shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '100%',\n                    height: '600px'\n                },\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ag_charts_react__WEBPACK_IMPORTED_MODULE_2__.AgCharts, {\n                    options: agChartOptions\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            totalItems > ITEMS_PER_PAGE && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: goToPreviousPage,\n                        disabled: currentPage === 1,\n                        className: \"px-4 py-2 bg-gray-200 rounded disabled:opacity-50\",\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Page \",\n                            currentPage,\n                            \" of \",\n                            totalPages,\n                            \"(Showing \",\n                            startIndex + 1,\n                            \" - \",\n                            endIndex,\n                            \" of \",\n                            totalItems,\n                            \" items)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: goToNextPage,\n                        disabled: currentPage === totalPages,\n                        className: \"px-4 py-2 bg-gray-200 rounded disabled:opacity-50\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mukesh.kasimahanthi\\\\Desktop\\\\visulization\\\\aiAgentFrontendCode\\\\src\\\\app\\\\pages\\\\Upload\\\\LineChartComponent.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LineChartComponent, \"6xAUoJ2motYJ38x4zeUWisA+X/4=\");\n_c = LineChartComponent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChartComponent);\nvar _c;\n$RefreshReg$(_c, \"LineChartComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvVXBsb2FkL0xpbmVDaGFydENvbXBvbmVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNVO0FBZ0IzQyxNQUFNRSxxQkFBcUI7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBK0I7UUEyQ3ZEQSxZQVVBQTs7SUFwRGQsSUFBSUQsU0FBUyxpQkFBaUIsT0FBTztJQUVyQyxNQUFNRSxpQkFBaUI7SUFDdkIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLGFBQWFKLEtBQUtLLE1BQU0sQ0FBQ0MsTUFBTTtJQUNyQyxNQUFNQyxhQUFhQyxLQUFLQyxJQUFJLENBQUNMLGFBQWFIO0lBRTFDLGdEQUFnRDtJQUNoRCxNQUFNUyxhQUFhLENBQUNSLGNBQWMsS0FBS0Q7SUFDdkMsTUFBTVUsV0FBV0gsS0FBS0ksR0FBRyxDQUFDRixhQUFhVCxnQkFBZ0JHO0lBRXZELE1BQU1TLGtCQUFrQmIsS0FBS0ssTUFBTSxDQUFDUyxLQUFLLENBQUNKLFlBQVlDO0lBQ3RELE1BQU1JLGdCQUFnQmYsS0FBS2dCLFFBQVEsQ0FBQyxFQUFFLENBQUNoQixJQUFJLENBQUNjLEtBQUssQ0FBQ0osWUFBWUM7SUFFOUQsTUFBTU0saUJBQTBDO1FBQzlDQyxPQUFPO1lBQ0xDLE1BQU1uQixLQUFLZ0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ0ksS0FBSyxJQUFJO1FBQ2xDO1FBQ0FwQixNQUFNYSxnQkFBZ0JRLEdBQUcsQ0FBQyxDQUFDRCxPQUFZRSxRQUE0QjtnQkFDakVDLEdBQUdIO2dCQUNISSxHQUFHVCxhQUFhLENBQUNPLE1BQU07WUFDekI7UUFDQUcsUUFBUTtZQUNOO2dCQUNFMUIsTUFBTTtnQkFDTjJCLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFNBQVM7b0JBQ1BDLFNBQVM7Z0JBQ1g7Z0JBQ0FDLFFBQVE5QixLQUFLZ0IsUUFBUSxDQUFDLEVBQUUsQ0FBQ2UsV0FBVyxJQUFJO2dCQUN4Q0MsUUFBUTtvQkFDTkgsU0FBUztvQkFDVEksTUFBTTtnQkFDUjtZQUNGO1NBQ0Q7UUFDREMsTUFBTTtZQUNKO2dCQUNFbkMsTUFBTTtnQkFDTm9DLFVBQVU7Z0JBQ1ZqQixPQUFPO29CQUNMQyxNQUFNbkIsRUFBQUEsYUFBQUEsS0FBS29DLElBQUksY0FBVHBDLGlDQUFBQSxXQUFXcUMsTUFBTSxLQUFJO2dCQUM3QjtnQkFDQWpCLE9BQU87b0JBQ0xrQixVQUFVbEMsYUFBYSxLQUFLLEtBQUs7Z0JBQ25DO1lBQ0Y7WUFDQTtnQkFDRUwsTUFBTTtnQkFDTm9DLFVBQVU7Z0JBQ1ZqQixPQUFPO29CQUNMQyxNQUFNbkIsRUFBQUEsY0FBQUEsS0FBS29DLElBQUksY0FBVHBDLGtDQUFBQSxZQUFXdUMsU0FBUyxLQUFJO2dCQUNoQztnQkFDQTNCLEtBQUs7WUFDUDtTQUNEO1FBQ0Q0QixRQUFRO1lBQ05YLFNBQVM7WUFDVE0sVUFBVTtRQUNaO1FBQ0FNLFNBQVM7WUFDUEMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTUMsbUJBQW1CO1FBQ3ZCM0MsZUFBZSxDQUFDNEMsT0FBU3ZDLEtBQUt3QyxHQUFHLENBQUNELE9BQU8sR0FBRztJQUM5QztJQUVBLE1BQU1FLGVBQWU7UUFDbkI5QyxlQUFlLENBQUM0QyxPQUFTdkMsS0FBS0ksR0FBRyxDQUFDbUMsT0FBTyxHQUFHeEM7SUFDOUM7SUFFQSxxQkFDRSw4REFBQzJDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFDQ0UsT0FBTztvQkFDTEMsT0FBTztvQkFDUEMsUUFBUTtnQkFDVjtnQkFDQUgsV0FBVTswQkFFViw0RUFBQ3RELHFEQUFRQTtvQkFBQzBELFNBQVN0Qzs7Ozs7Ozs7Ozs7WUFJcEJiLGFBQWFILGdDQUNaLDhEQUFDaUQ7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSzt3QkFDQ0MsU0FBU1g7d0JBQ1RZLFVBQVV4RCxnQkFBZ0I7d0JBQzFCaUQsV0FBVTtrQ0FDWDs7Ozs7O2tDQUlELDhEQUFDUTs7NEJBQUs7NEJBQ0V6RDs0QkFBWTs0QkFBS0s7NEJBQVc7NEJBQ3hCRyxhQUFhOzRCQUFFOzRCQUFJQzs0QkFBUzs0QkFBS1A7NEJBQVc7Ozs7Ozs7a0NBR3hELDhEQUFDb0Q7d0JBQ0NDLFNBQVNSO3dCQUNUUyxVQUFVeEQsZ0JBQWdCSzt3QkFDMUI0QyxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXRITXJEO0tBQUFBO0FBd0hOLGlFQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVrZXNoLmthc2ltYWhhbnRoaVxcRGVza3RvcFxcdmlzdWxpemF0aW9uXFxhaUFnZW50RnJvbnRlbmRDb2RlXFxzcmNcXGFwcFxccGFnZXNcXFVwbG9hZFxcTGluZUNoYXJ0Q29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFnQ2hhcnRzIH0gZnJvbSAnYWctY2hhcnRzLXJlYWN0JztcclxuaW1wb3J0IHsgQWdDYXJ0ZXNpYW5DaGFydE9wdGlvbnMgfSBmcm9tICdhZy1jaGFydHMtY29tbXVuaXR5JztcclxuXHJcbmludGVyZmFjZSBDaGFydERhdGEge1xyXG4gIGxhYmVsczogc3RyaW5nW107XHJcbiAgZGF0YXNldHM6IFt7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIGRhdGE6IG51bWJlcltdO1xyXG4gICAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XHJcbiAgfV07XHJcbiAgbWV0YT86IHtcclxuICAgIGhlYWRlcj86IHN0cmluZztcclxuICAgIHZhbHVlTmFtZT86IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBMaW5lQ2hhcnRDb21wb25lbnQgPSAoeyB0eXBlLCBkYXRhIH06IHsgdHlwZTogc3RyaW5nOyBkYXRhOiBhbnkgfSkgPT4ge1xyXG4gIGlmICh0eXBlICE9PSAnbGluZUNoYXJ0RGF0YScpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBJVEVNU19QRVJfUEFHRSA9IDEwO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgdG90YWxJdGVtcyA9IGRhdGEubGFiZWxzLmxlbmd0aDtcclxuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBJVEVNU19QRVJfUEFHRSk7XHJcblxyXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGF0YSBzbGljZSBmb3IgdGhlIGN1cnJlbnQgcGFnZVxyXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIElURU1TX1BFUl9QQUdFO1xyXG4gIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCArIElURU1TX1BFUl9QQUdFLCB0b3RhbEl0ZW1zKTtcclxuICBcclxuICBjb25zdCBwYWdpbmF0ZWRMYWJlbHMgPSBkYXRhLmxhYmVscy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcbiAgY29uc3QgcGFnaW5hdGVkRGF0YSA9IGRhdGEuZGF0YXNldHNbMF0uZGF0YS5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XHJcblxyXG4gIGNvbnN0IGFnQ2hhcnRPcHRpb25zOiBBZ0NhcnRlc2lhbkNoYXJ0T3B0aW9ucyA9IHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHRleHQ6IGRhdGEuZGF0YXNldHNbMF0ubGFiZWwgfHwgJ0xpbmUgQ2hhcnQnLFxyXG4gICAgfSxcclxuICAgIGRhdGE6IHBhZ2luYXRlZExhYmVscy5tYXAoKGxhYmVsOiBhbnksIGluZGV4OiBzdHJpbmcgfCBudW1iZXIpID0+ICh7XHJcbiAgICAgIHg6IGxhYmVsLFxyXG4gICAgICB5OiBwYWdpbmF0ZWREYXRhW2luZGV4XSxcclxuICAgIH0pKSxcclxuICAgIHNlcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgIHhLZXk6ICd4JyxcclxuICAgICAgICB5S2V5OiAneScsXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0cm9rZTogZGF0YS5kYXRhc2V0c1swXS5ib3JkZXJDb2xvciB8fCAnIzg4ODRkOCcsXHJcbiAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgc2l6ZTogNixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGF4ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXHJcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICB0ZXh0OiBkYXRhLm1ldGE/LmhlYWRlciB8fCAnQ2F0ZWdvcmllcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgcm90YXRpb246IHRvdGFsSXRlbXMgPiA1MCA/IDkwIDogMCwgLy8gQWRqdXN0IHJvdGF0aW9uIGJhc2VkIG9uIGRhdGEgc2l6ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICB0ZXh0OiBkYXRhLm1ldGE/LnZhbHVlTmFtZSB8fCAnVmFsdWVzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBsZWdlbmQ6IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgfSxcclxuICAgIHBhZGRpbmc6IHtcclxuICAgICAgdG9wOiA0MCxcclxuICAgICAgcmlnaHQ6IDQwLFxyXG4gICAgICBib3R0b206IDQwLFxyXG4gICAgICBsZWZ0OiA0MCxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgLy8gUGFnaW5hdGlvbiBoYW5kbGVyc1xyXG4gIGNvbnN0IGdvVG9QcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZSgocHJldikgPT4gTWF0aC5tYXgocHJldiAtIDEsIDEpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnb1RvTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZSgocHJldikgPT4gTWF0aC5taW4ocHJldiArIDEsIHRvdGFsUGFnZXMpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIGhlaWdodDogJzYwMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxBZ0NoYXJ0cyBvcHRpb25zPXthZ0NoYXJ0T3B0aW9uc30gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUGFnaW5hdGlvbiBDb250cm9scyAqL31cclxuICAgICAge3RvdGFsSXRlbXMgPiBJVEVNU19QRVJfUEFHRSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtnb1RvUHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBQYWdlIHtjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9IFxyXG4gICAgICAgICAgICAoU2hvd2luZyB7c3RhcnRJbmRleCArIDF9IC0ge2VuZEluZGV4fSBvZiB7dG90YWxJdGVtc30gaXRlbXMpXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17Z29Ub05leHRQYWdlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTIwMCByb3VuZGVkIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnRDb21wb25lbnQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWdDaGFydHMiLCJMaW5lQ2hhcnRDb21wb25lbnQiLCJ0eXBlIiwiZGF0YSIsIklURU1TX1BFUl9QQUdFIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInRvdGFsSXRlbXMiLCJsYWJlbHMiLCJsZW5ndGgiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJtaW4iLCJwYWdpbmF0ZWRMYWJlbHMiLCJzbGljZSIsInBhZ2luYXRlZERhdGEiLCJkYXRhc2V0cyIsImFnQ2hhcnRPcHRpb25zIiwidGl0bGUiLCJ0ZXh0IiwibGFiZWwiLCJtYXAiLCJpbmRleCIsIngiLCJ5Iiwic2VyaWVzIiwieEtleSIsInlLZXkiLCJ0b29sdGlwIiwiZW5hYmxlZCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwibWFya2VyIiwic2l6ZSIsImF4ZXMiLCJwb3NpdGlvbiIsIm1ldGEiLCJoZWFkZXIiLCJyb3RhdGlvbiIsInZhbHVlTmFtZSIsImxlZ2VuZCIsInBhZGRpbmciLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJnb1RvUHJldmlvdXNQYWdlIiwicHJldiIsIm1heCIsImdvVG9OZXh0UGFnZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Upload/LineChartComponent.tsx\n"));

/***/ })

});