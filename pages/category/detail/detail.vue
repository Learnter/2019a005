<template>
  <view>
    <view class="detailPage">

      <view class="big-Piture">
        <image class="returnBtn" src="../../../static/ga005_64.png" mode="widthFix"></image>
        <image class="b-p-photo" src="../../../static/ga005_77.png" mode="widthFix"></image>
      </view>

      <view class="detailNav">
        <view class="nav-left">
          <text class="nav-l-price">￥99</text>
          <text class="text-del-style">￥199</text>
        </view>
        <view class="nav-right">
          <text>秒杀</text>
          <text>新品</text>
        </view>
      </view>

      <view class="detailBox">
        <view class="detail-photos">
          <image src="../../../static/ga005_44.png" mode="aspectFill"></image>
          <image src="../../../static/ga005_44.png" mode="aspectFill"></image>
          <image src="../../../static/ga005_44.png" mode="aspectFill"></image>
          <image src="../../../static/ga005_44.png" mode="aspectFill"></image>
          <image src="../../../static/ga005_44.png" mode="aspectFill"></image>
        </view>
        <h2 class="detail-title">
          标题....................
        </h2>
        <view class="detail-introduction">
          详情................................................................................................
        </view>
      </view>
    </view>


    <view class="bottom-shop">
      <view class="shop-logo">
        <image src="../../../static/2019_a005_58_1.png" mode="widthFix"></image>
        <text>购物车</text>
      </view>
      <view class="shop-btn">
        <text>加入购物车</text>
        <text>立即购买</text>
      </view>

    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .text-del-style {
    color: #E2E0DD;
  }

  .detailPage {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 120upx;
    overflow: auto;
  }

  .big-Piture {
    width: 97%;
    left: 1%;
    top: 1%;
    box-sizing: border-box;
    padding: 10upx 10upx 6upx;
    background: white;
    z-index: 10;
    position: relative;

    .b-p-photo {
      border: 1px solid #E6E6E6;
    }

    .returnBtn {
      position: absolute;
      top: 12upx;
      left: 12upx;
      z-index: 10;
      width: 66upx;
    }
  }

  .detailNav {
    background: #BAD0BA;
    display: flex;
    align-items: center;
    color: white;

    .nav-left {
      width: 75%;
      box-sizing: border-box;
      background: #41A069;
      padding: 20upx 0;
      overflow: hidden;

      .nav-l-price {
        font-size: 44upx;
        margin: 0 10upx 0 40upx;
      }
    }

    .nav-right {
      width: 25%;
      font-size: 24upx;

      text {
        margin-left: 10upx;
        padding: 6upx 14upx;
        background: #41A069;
      }
    }
  }

  .detailBox {
    box-sizing: border-box;
    padding: 20upx 26upx;

    .detail-photos {
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin-bottom: 20upx;

      image {
        width: 17%;
        height: 120upx;
      }
    }

    .detail-title {
      padding: 30upx 40upx;
      background: white;
      margin-bottom: 20upx;
      overflow: hidden;
      word-wrap: break-word
    }

    .detail-introduction {
      background: white;
      padding: 30upx 40upx;
      min-height: 300upx;
      overflow: hidden;
      word-wrap: break-word
    }
  }

  .bottom-shop {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 120upx;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30upx;

    .shop-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20upx;
      color: #41A069;

      image {
        width: 50upx;
        margin-bottom: 6upx;
      }
    }

    .shop-btn {
      color: white;

      text {
        padding: 8upx 20upx;
        background: #BAD0BA;
        border-radius: 30upx;
        margin-left: 20upx;

        &:nth-child(1) {
          background: #E8651B;
        }

        ;

        &:nth-child(2) {
          background: #DF0024;
        }
      }
    }
  }
</style>
