(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/register/register"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      user: {
        mobile: '',
        password: '',
        again_psd: '',
        reg_code: '' } };


  },
  methods: {
    formSubmit: function formSubmit() {

      var url, data;
      data = this.user;
      url = "user/reg";

      /*输入框非空判断*/
      if (!/^1[34578]\d{9}$/.test(data.mobile)) {
        uni.showToast({
          title: "请输入有效的手机号码",
          icon: "none" });

        return false;
      } else if (!/^[a-zA-Z0-9]{6,}$/.test(data.password)) {
        uni.showToast({
          title: "密码格式最少需要字母*数字!",
          icon: "none" });

        return false;
      } else if (data.again_psd !== data.password) {
        uni.showToast({
          title: "两次密码输入不一致!",
          icon: "none" });

        return false;
      } else if (!/^[a-zA-Z0-9]{4}$/.test(data.reg_code)) {
        uni.showToast({
          title: "邀请码输入有误!",
          icon: "none" });

        return false;
      }
      this.$Request.post(url, data).then(function (res) {
        if (res && res.code === 200) {
          uni.showToast({
            title: "注册成功",
            icon: "success" });

          /* 注册成功后页面跳转*/
          setTimeout(function () {
            uni.switchTab({
              url: "/pages/tabBar/onGoods/onGoods" });

          }, 500);

        } else {
          // 注册错误信息
          uni.showToast({
            title: res.msg,
            icon: "none" });

        }
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=template&id=406c990e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue?vue&type=template&id=406c990e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue":
/*!**********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_406c990e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=406c990e& */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=template&id=406c990e&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&lang=scss& */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_406c990e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_406c990e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=template&id=406c990e&":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/register/register.vue?vue&type=template&id=406c990e& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_406c990e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=406c990e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\register\\register.vue?vue&type=template&id=406c990e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_406c990e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_406c990e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\main.js?{\"page\":\"pages%2Fregister%2Fregister\"}","common/runtime","common/vendor"]]]);