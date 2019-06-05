(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/onGoods/onGoods"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniSwiperDot = function uniSwiperDot() {return __webpack_require__.e(/*! import() | components/uni-swiper-dot/uni-swiper-dot */ "components/uni-swiper-dot/uni-swiper-dot").then(__webpack_require__.bind(null, /*! @/components/uni-swiper-dot/uni-swiper-dot.vue */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\components\\uni-swiper-dot\\uni-swiper-dot.vue"));};var uniLoadMore = function uniLoadMore() {return __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\components\\uni-load-more\\uni-load-more.vue"));};var _default =


























































































































































































































































{
  data: function data() {
    return {
      status: "more",
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      modeIndex: -1,
      styleIndex: -1,
      current: 0,
      mode: 'long',
      dotsStyles: {
        backgroundColor: 'rgba(83, 200, 249,0.3)',
        border: '1px rgba(83, 200, 249,0.3) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
        selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
        width: 10,
        height: 2 },

      dataInfo: '',
      msg: [], //公告栏数据
      info: [] //轮播数据
    };
  },
  onLoad: function onLoad() {
    this.fetchData();
    this.fetchGoodData();
    this.fetchNoticeData();
  },
  computed: {
    goodsList: function goodsList() {//推荐商品数据
      return this.dataInfo.goodsList;
    },
    redEnvelopeGoodsList: function redEnvelopeGoodsList() {//红包商品数据
      var newArr;
      if (this.dataInfo.redEnvelopeGoodsList) {
        newArr = this.dataInfo.redEnvelopeGoodsList.slice(0, 2);
      }
      return newArr;
    },
    giftPackageGoodsList: function giftPackageGoodsList() {//礼包商品数据
      var newArr;
      if (this.dataInfo.giftPackageGoodsList) {
        newArr = this.dataInfo.giftPackageGoodsList.slice(0, 2);
      }
      return newArr;
    },
    goodGoodsList: function goodGoodsList() {//好货推荐数据
      return this.dataInfo.goodGoodsList;
    },
    spikeGoodsList: function spikeGoodsList() {//秒杀产品数据
      return this.dataInfo.spikeGoodsList;
    } },

  methods: {
    change: function change(e) {
      this.current = e.detail.current;
    },
    fetchData: function fetchData() {var _this = this;
      var url = "config/getInfo";
      this.$Request.get(url).then(function (res) {
        if (res.code == 200 && res.data.ads.user_index) {
          _this.info = res.data.ads.user_index;
        }
      });
    },
    fetchGoodData: function fetchGoodData() {var _this2 = this;
      var url = "goods/index"; //后台地址
      this.$Request.get(url).then(function (res) {
        if (res.code == 200 && res.data) {
          _this2.dataInfo = res.data;
        }
      });
    },
    fetchNoticeData: function fetchNoticeData() {var _this3 = this;
      var url = "goods/noticeList"; //公告栏地址
      this.$Request.get(url).then(function (res) {
        if (res.code == 200 && res.data) {
          console.log(res);
          _this3.msg = res.data;
        }
      });
    } },

  onReachBottom: function onReachBottom() {
    console.log("上拉加载");
  },
  components: {
    uniSwiperDot: uniSwiperDot,
    uniLoadMore: uniLoadMore } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=template&id=d33513c2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue?vue&type=template&id=d33513c2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue":
/*!***************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onGoods_vue_vue_type_template_id_d33513c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onGoods.vue?vue&type=template&id=d33513c2&scoped=true& */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=template&id=d33513c2&scoped=true&");
/* harmony import */ var _onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onGoods.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _onGoods_vue_vue_type_style_index_0_id_d33513c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true& */ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true&");
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _onGoods_vue_vue_type_template_id_d33513c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _onGoods_vue_vue_type_template_id_d33513c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d33513c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./onGoods.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_style_index_0_id_d33513c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=style&index=0&id=d33513c2&lang=scss&scoped=true&");
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_style_index_0_id_d33513c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_style_index_0_id_d33513c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_style_index_0_id_d33513c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_style_index_0_id_d33513c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_style_index_0_id_d33513c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=template&id=d33513c2&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/黄椿任文件夹/2019a005/pages/tabBar/onGoods/onGoods.vue?vue&type=template&id=d33513c2&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_template_id_d33513c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./onGoods.vue?vue&type=template&id=d33513c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\pages\\tabBar\\onGoods\\onGoods.vue?vue&type=template&id=d33513c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_template_id_d33513c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_MyDownloads_Download_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_onGoods_vue_vue_type_template_id_d33513c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\黄椿任文件夹\\2019a005\\main.js?{\"page\":\"pages%2FtabBar%2FonGoods%2FonGoods\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabBar/onGoods/onGoods.js.map