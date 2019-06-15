<template>
  <!--搜索页面 -->
  <view class="searchPage">

    <view class="headBox">
      <!-- 首页头部 -->
      <image class="bgImg" src="../../static/ga005_26_1.png" mode="widthFix"></image>
      
      <view class="contentBox">
        <view class="con-main">
          <text class="con-main-title">OPAY</text>
          <view class="con-main-search">
            
             <uni-icon type="arrowleft" size="30" color="white" @tap="returnBack" ></uni-icon>
                
            <view class="searchNav">
              <image class="search-img" src="../../static/2019_a005_27.png" mode="widthFix"></image>
              <input type="text" value="" class="search-input" focus="true" />
            </view>
            
            <text>搜索</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 主内容 -->
    <view class="search-main">

      <view class="search-history">
        <h2>搜索发现</h2>
        <view class="history-items">
          <view class="tag-view">
            <uni-tag :inverted="true" :circle="true" text="标签" />
          </view>
          <view class="tag-view">
            <uni-tag :inverted="true" :circle="true" text="我的标签标签" />
          </view>
          <view class="tag-view">
            <uni-tag :inverted="true" :circle="true" text="历史1的标签" />
          </view>
          <view class="tag-view">
            <uni-tag :inverted="true" :circle="true" text="历史2的标签" />
          </view>
          <view class="tag-view">
            <uni-tag :inverted="true" :circle="true" text="历史4的标签" />
          </view>
          <view class="tag-view">
            <uni-tag :inverted="true" :circle="true" text="历史3的标签" />
          </view>
          <view class="tag-view">
            <uni-tag :inverted="true" :circle="true" text="历史3的标签" />
          </view>
        </view>
      </view>

      <view class="referrals">
        <h2>好货推介</h2>
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
          <view class="category-li">
            <view class="category-li-image">
              <image src="../../static/ga005_40.png" mode="aspectFit"></image>
            </view>
            <view class="cate-li-right">
              <view class="li-r-top">
                <view class="li-r-top-left">
                  <text>￥199</text>
                  <text class="text-del-style text-sx-size">￥199</text>
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
          <view class="category-li">
            <view class="category-li-image">
              <image src="../../static/ga005_41.png" mode="aspectFit"></image>
            </view>
            <view class="cate-li-right">
              <view class="li-r-top">
                <view class="li-r-top-left">
                  <text>￥199</text>
                  <text class="text-sx-size text-del-style">￥199</text>
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
          <view class="category-li">
            <view class="category-li-image">
              <image src="../../static/ga005_44.png" mode="aspectFit"></image>
            </view>
            <view class="cate-li-right">
              <view class="li-r-top">
                <view class="li-r-top-left">
                  <text>￥199</text>
                  <text class="text-sx-size text-del-style">￥199</text>
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
      </view>
    </view>
  </view>
</template>

<script>
  import uniTag from '@/components/uni-tag/uni-tag.vue'
  import uniIcon from '@/components/uni-icon/uni-icon.vue'
  export default {
    data() {
      return {

      };
    },
    methods:{
      returnBack(){
        uni.navigateBack();
      }
    },
    components: {
      uniTag,
      uniIcon
    }
  }
</script>

<style lang="scss" scoped>
  
  /* 标签的样式*/
  .tag-view {
    margin: 0 20upx 20upx 0;
  }
  
  h2 {
    font-weight: 200;
  }
  
  /* 促销价格的样式*/
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
      z-index:999;
      .con-main {
        padding: 0 30upx;
        color: white;
        
        .con-main-title{
          font-size:36upx;
        }

        .con-main-search {
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

            .search-img {
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
  
  /* 搜索的主内容样式*/
  .search-main {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding-top: 230upx;
  

  .search-history {
    background: #F7F5F4;
    box-sizing: border-box;
    padding: 20upx 30upx;

    .history-items {
      margin-top: 20upx;
      min-height: 200upx;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }
  }

  .referrals {
    box-sizing: border-box;
    padding: 0 20upx;

    .category-list {
      margin-top: 16upx;
    }
  }

  .category-li {
    display: flex;
    background: white;
    height: 200upx;
    margin-bottom: 20upx;
    border-radius: 0 10upx 10upx 0;

    .category-li-image {
      box-sizing: border-box;
      width: 30%;
      height: 100%;
      padding: 10upx;
      border-right: 1upx solid #C1C1C1;
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
</style>
