<template>
  <!--分类页面-->
  <view class="category">

    <view class="headBox">
      <!-- 首页头部 -->
      <image class="bgImg" src="../../static/ga005_26_1.png" mode="widthFix"></image>
      <view class="contentBox">
        <view class="con_text">
          <h2>OPAY</h2>
          <view class="con_buttom">
            <uni-icon type="arrowleft" size="30" color="white"></uni-icon>
            <view class="searchNav">
              <image class="search-icon" src="../../static/2019_a005_27.png" mode="widthFix"></image>
              <input type="text" value="" class="search-input" disabled="true" />
            </view>
            <text>搜索</text>
          </view>
        </view>
      </view>
    </view>

    <view class="cate-main">
      <view class="page-body">
        <scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
          <view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
            v-for="(item,index) in categoryList">
            {{item.NAME}}
          </view>
        </scroll-view>
        <scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'"
          scroll-with-animation>
          <view class="nva-right-img">
            <image src="../../static/ga005_50.png"></image>
          </view>
          <view class="category-list">
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_42.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_41.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_43.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_44.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_45.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_46.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_47.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_42.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>
            <view class="category-li" @tap="toDetail">
              <view class="category-li-image">
                <image src="../../static/ga005_40.png" mode="aspectFit"></image>
              </view>
              <view class="cate-li-right">
                <view class="li-r-top">
                  <view class="li-r-top-left">
                    <text>￥199</text>
                    <text class=" text-del-style text-sx-size">￥199</text>
                  </view>
                  <view class="li-r-top-right">
                    <text class="good-text">秒杀</text>
                    <text class="good-text">秒杀</text>
                  </view>
                </view>
                <view class="li-r-bottom">
                  <h3>我的标题.....</h3>
                  <p>.............</p>
                  <p>.............</p>
                </view>
              </view>
            </view>

          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
  import uniIcon from '@/components/uni-icon/uni-icon.vue'
  export default {
    data() {
      return {
        categoryList: [],
        subCategoryList: [],
        height: 0,
        categoryActive: 0,
        scrollTop: 0,
        scrollHeight: 0,
        name: "七月_"
      }
    },
    methods: {
      scroll(e) {
        this.scrollHeight = e.detail.scrollHeight;
      },
      categoryClickMain(categroy, index) {
        this.categoryActive = index;
        this.subCategoryList = categroy.subCategoryList;
        this.scrollTop = -this.scrollHeight * index;
      },
      getCategory() {
        for (var i = 1; i < 31; i++) {
          var subList = [];
          for (var j = 1; j < 31; j++) {
            subList.push({
              "NAME": "分类" + i + ":商品" + j,
              "LOGO": "http://placehold.it/50x50"
            })
          }
          this.categoryList.push({
            "NAME": "分类" + i,
            "subCategoryList": subList
          })
        }
        this.subCategoryList = this.categoryList[0].subCategoryList;
      }
    },
    onLoad: function() {
      this.getCategory();
      this.height = uni.getSystemInfoSync().windowHeight - 140;
    },
    components: {
      uniIcon
    }
  }
</script>

<style lang="scss">
  .text-sx-size {
    font-size: 16upx;
    margin-left: 10upx;
  }

  /* 头部的样式*/
  .headBox {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    .bgImg {
      width: 100%;
    }

    .contentBox {
      position: absolute;
      left: 0;
      right: 0;
      top: 100upx;

      .con_text {
        padding: 0 30upx;
        color: white;

        .con_buttom {
          margin-top: 20upx;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .searchNav {
            display: flex;
            align-items: center;
            background: white;
            width: 500upx;
            height: 50upx;
            padding: 0 10upx;
            border-radius: 10upx;

            .search-icon {
              width: 40upx;
            }

            .search-input {
              flex: 1;
              margin-left: 10upx;
              color: black;
            }
          }
        }
      }
    }
  }

  .cate-main {
    background: #F7F5F4;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin-top: 230upx;
    padding: 10upx;
    overflow: hidden;

    /* 分类导航样式*/
    .page-body {
      display: flex;
    }

    .nav {
      display: flex;
      width: 100%;
    }

    .nav-left {
      width: 30%;
    }

    .nav-left-item {
      height: 80upx;
      background: white;
      margin-top: 20upx;
      font-size: 30upx;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .active {
      color: white;
      background: lightblue;
    }

    .nav-right {
      width: 70%;
      padding: 0 20upx;

      .nva-right-img {
        margin-bottom: 20upx;
        height: 200upx;
      }

      .category-li {
        background: white;
        display: flex;
        height: 160upx;
        margin-bottom: 20upx;
        border-radius: 10upx;

        .category-li-image {
          box-sizing: border-box;
          width: 30%;
          height: 100%;
          padding: 10upx;
          border-right: 1px solid #F7F5F4;
        }

        .cate-li-right {
          flex: 1;
          box-sizing: border-box;
          padding: 20upx 20upx;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .li-r-top {
            display: flex;
            align-items: center;

            .li-r-top-right {
              display: flex;
              align-items: center;
              margin-left: 20upx;
            }
          }
        }
      }
    }
  }
</style>
