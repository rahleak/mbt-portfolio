webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/blogs.js":
/*!*******************************!*\
  !*** ./src/sections/blogs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/block-title */ \"./src/components/block-title.js\");\n/* harmony import */ var components_cards_blog_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/blog-card */ \"./src/components/cards/blog-card.js\");\n/* harmony import */ var assets_mission_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/mission.jpg */ \"./src/assets/mission.jpg\");\n/* harmony import */ var assets_mission_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_mission_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_social_change_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/social-change.jpg */ \"./src/assets/social-change.jpg\");\n/* harmony import */ var assets_social_change_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_social_change_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_vision_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/vision.jpg */ \"./src/assets/vision.jpg\");\n/* harmony import */ var assets_vision_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_vision_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _blogs_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogs.module.css */ \"./src/sections/blogs.module.css\");\n/* harmony import */ var _blogs_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blogs_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/rahwaleakemariam/moonbeam-portfolio/src/sections/blogs.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar BLOG_DATA = [{\n  image: assets_mission_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  title: 'Mission',\n  description: 'Your companys mission statement',\n  path: '/',\n  linkLabel: null\n}, {\n  image: assets_social_change_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  title: 'Social Change',\n  description: '',\n  path: '/',\n  linkLabel: null\n}, {\n  image: assets_vision_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  title: 'Vision',\n  description: 'Our vision is to have a positive social impact wherever we do business.',\n  path: '/',\n  linkLabel: null\n}];\nvar masonryOptions = {\n  transitionDuration: 0\n};\n\nvar Blogs = function Blogs() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    as: \"section\",\n    id: \"mission-vision\",\n    sx: styles.blogs,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      className: _blogs_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(components_block_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"Mission/Vision\",\n        text: null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(\"div\", {\n        className: _blogs_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.blogWrapper,\n        children: BLOG_DATA.map(function (_ref, index) {\n          var image = _ref.image,\n              title = _ref.title,\n              description = _ref.description,\n              path = _ref.path,\n              linkLabel = _ref.linkLabel;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[\"jsxDEV\"])(components_cards_blog_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            image: image,\n            title: title,\n            description: description,\n            path: path,\n            linkLabel: linkLabel\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Blogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogs);\nvar styles = {\n  blogs: {\n    pt: ['80px', null, null, null, '80px', null, '100px'],\n    pb: ['40px', null, null, null, '140px', null, '100px']\n  },\n  blogWrapper: {\n    mx: '-15px'\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Blogs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2dzLmpzP2QyNGIiXSwibmFtZXMiOlsiQkxPR19EQVRBIiwiaW1hZ2UiLCJibG9nSW1hZ2UxIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJsaW5rTGFiZWwiLCJibG9nSW1hZ2UyIiwiYmxvZ0ltYWdlMyIsIm1hc29ucnlPcHRpb25zIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiQmxvZ3MiLCJzdHlsZXMiLCJibG9ncyIsImNsYXNzZXMiLCJjb250YWluZXIiLCJibG9nV3JhcHBlciIsIm1hcCIsImluZGV4IiwicHQiLCJwYiIsIm14Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDaEI7QUFDRUMsT0FBSyxFQUFFQyx5REFEVDtBQUVFQyxPQUFLLEVBQUUsU0FGVDtBQUdFQyxhQUFXLEVBQ1QsaUNBSko7QUFLRUMsTUFBSSxFQUFFLEdBTFI7QUFNRUMsV0FBUyxFQUFFO0FBTmIsQ0FEZ0IsRUFTaEI7QUFDRUwsT0FBSyxFQUFFTSwrREFEVDtBQUVFSixPQUFLLEVBQUUsZUFGVDtBQUdFQyxhQUFXLEVBQUUsRUFIZjtBQUlFQyxNQUFJLEVBQUUsR0FKUjtBQUtFQyxXQUFTLEVBQUU7QUFMYixDQVRnQixFQWdCaEI7QUFDRUwsT0FBSyxFQUFFTyx3REFEVDtBQUVFTCxPQUFLLEVBQ0gsUUFISjtBQUlFQyxhQUFXLEVBQUUseUVBSmY7QUFLRUMsTUFBSSxFQUFFLEdBTFI7QUFNRUMsV0FBUyxFQUFFO0FBTmIsQ0FoQmdCLENBQWxCO0FBMEJBLElBQU1HLGNBQWMsR0FBRztBQUNyQkMsb0JBQWtCLEVBQUU7QUFEQyxDQUF2Qjs7QUFJQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLHNCQUNFLHFFQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBa0IsTUFBRSxFQUFDLGdCQUFyQjtBQUFzQyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBakQ7QUFBQSwyQkFDRSxxRUFBQyxrREFBRDtBQUFXLGVBQVMsRUFBRUMsd0RBQU8sQ0FBQ0MsU0FBOUI7QUFBQSw4QkFDRSxxRUFBQyw4REFBRDtBQUNFLGFBQUssRUFBQyxnQkFEUjtBQUVFLFlBQUksRUFBRTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsRUFBRUQsd0RBQU8sQ0FBQ0UsV0FBeEI7QUFBQSxrQkFDR2hCLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FDQyxnQkFBaURDLEtBQWpEO0FBQUEsY0FBR2pCLEtBQUgsUUFBR0EsS0FBSDtBQUFBLGNBQVVFLEtBQVYsUUFBVUEsS0FBVjtBQUFBLGNBQWlCQyxXQUFqQixRQUFpQkEsV0FBakI7QUFBQSxjQUE4QkMsSUFBOUIsUUFBOEJBLElBQTlCO0FBQUEsY0FBb0NDLFNBQXBDLFFBQW9DQSxTQUFwQztBQUFBLDhCQUNFLHFFQUFDLGtFQUFEO0FBRUUsaUJBQUssRUFBRUwsS0FGVDtBQUdFLGlCQUFLLEVBQUVFLEtBSFQ7QUFJRSx1QkFBVyxFQUFFQyxXQUpmO0FBS0UsZ0JBQUksRUFBRUMsSUFMUjtBQU1FLHFCQUFTLEVBQUVDO0FBTmIsYUFDT1ksS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBQUEsU0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0F6QkQ7O0tBQU1QLEs7QUEyQlNBLG9FQUFmO0FBRUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE9BQUssRUFBRTtBQUNMTSxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsTUFBM0IsRUFBbUMsSUFBbkMsRUFBeUMsT0FBekMsQ0FEQztBQUVMQyxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsT0FBM0IsRUFBb0MsSUFBcEMsRUFBMEMsT0FBMUM7QUFGQyxHQURNO0FBS2JKLGFBQVcsRUFBRTtBQUNYSyxNQUFFLEVBQUU7QUFETztBQUxBLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvYmxvZ3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jsb2NrLXRpdGxlJztcbmltcG9ydCBCbG9nQ2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL2Jsb2ctY2FyZCc7XG5pbXBvcnQgYmxvZ0ltYWdlMSBmcm9tICdhc3NldHMvbWlzc2lvbi5qcGcnO1xuaW1wb3J0IGJsb2dJbWFnZTIgZnJvbSAnYXNzZXRzL3NvY2lhbC1jaGFuZ2UuanBnJztcbmltcG9ydCBibG9nSW1hZ2UzIGZyb20gJ2Fzc2V0cy92aXNpb24uanBnJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vYmxvZ3MubW9kdWxlLmNzcydcblxuY29uc3QgQkxPR19EQVRBID0gW1xuICB7XG4gICAgaW1hZ2U6IGJsb2dJbWFnZTEsXG4gICAgdGl0bGU6ICdNaXNzaW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdZb3VyIGNvbXBhbnlzIG1pc3Npb24gc3RhdGVtZW50JyxcbiAgICBwYXRoOiAnLycsXG4gICAgbGlua0xhYmVsOiBudWxsLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IGJsb2dJbWFnZTIsXG4gICAgdGl0bGU6ICdTb2NpYWwgQ2hhbmdlJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgcGF0aDogJy8nLFxuICAgIGxpbmtMYWJlbDogbnVsbCxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBibG9nSW1hZ2UzLFxuICAgIHRpdGxlOlxuICAgICAgJ1Zpc2lvbicsXG4gICAgZGVzY3JpcHRpb246ICdPdXIgdmlzaW9uIGlzIHRvIGhhdmUgYSBwb3NpdGl2ZSBzb2NpYWwgaW1wYWN0IHdoZXJldmVyIHdlIGRvIGJ1c2luZXNzLicsXG4gICAgcGF0aDogJy8nLFxuICAgIGxpbmtMYWJlbDogbnVsbCxcbiAgfSxcbl07XG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG59O1xuXG5jb25zdCBCbG9ncyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwibWlzc2lvbi12aXNpb25cIiBzeD17c3R5bGVzLmJsb2dzfT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxCbG9ja1RpdGxlXG4gICAgICAgICAgdGl0bGU9XCJNaXNzaW9uL1Zpc2lvblwiXG4gICAgICAgICAgdGV4dD17bnVsbH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ1dyYXBwZXJ9PlxuICAgICAgICAgIHtCTE9HX0RBVEEubWFwKFxuICAgICAgICAgICAgKHsgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcGF0aCwgbGlua0xhYmVsIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxCbG9nQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICBsaW5rTGFiZWw9e2xpbmtMYWJlbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ3M7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYmxvZ3M6IHtcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBwYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE0MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gIH0sXG4gIGJsb2dXcmFwcGVyOiB7XG4gICAgbXg6ICctMTVweCcsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/blogs.js\n");

/***/ })

})