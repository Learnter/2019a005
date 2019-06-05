<template>
  <!-- 支付页面-->
  <view class="playment">

   <return-nav>
     <text>结算</text>
   </return-nav>

    <!-- 收货人地址-->
    <view class="play-main">

      <view class="user-info">
        <view class="user-person">
          <text class="user-person-name">收件人: ..............</text>
          <text>联系电话: ..............</text>
        </view>
        <view class="user-addre uni-ellipsis">
          <text>邮寄地址: ................</text>
        </view>
      </view>

      <view class="addressBox">
        <view class="address-nav">
          <view class="address-top">
            <view class="address-top-left">
              <text style="margin-right:10upx">地址簿</text>
              <image class="iconSize" src="../../../../static/ga005_68.png" mode="widthFix"></image>
            </view>
            <image class="iconSize" src="../../../../static/ga005_69.png" mode="widthFix"></image>
          </view>
        </view>

        <view class="address-content">
          <view class="null-content">
            <image src="../../../../static/ga005_67.png" mode="widthFix" style="width:160upx"></image>
            <text>你现在好没有添加地址!请点击添加!</text>
          </view>
        </view>
      </view>
    </view>


    <!-- 购买商品清单-->
    <view class="productBox">
      <text class="product-title">购物清单</text>
      <view class="product-items">
        <view class="uni-list">
          <view class="uni-list-cell">
            <view class="uni-media-list">
              <view class="uni-media-list-logo">
                <image src="../../../../static/ga005_45.png"></image>
              </view>
              <view class="uni-media-list-body">
                <view class="uni-media-list-body-left">
                  <view class="uni-media-list-text-top uni-ellipsis">标题</view>
                  <view class="uni-media-list-text-bottom uni-ellipsis">内容111111111111</view>
                </view>
                <text class="pay-money">共22件,小计:￥99 </text>
              </view>
            </view>
          </view>
          <view class="uni-list-cell">
            <view class="uni-media-list">
              <view class="uni-media-list-logo">
                <image src="../../../../static/ga005_45.png"></image>
              </view>
              <view class="uni-media-list-body">
                <view class="uni-media-list-body-left">
                  <view class="uni-media-list-text-top uni-ellipsis">标题</view>
                  <view class="uni-media-list-text-bottom uni-ellipsis">内容111111111111</view>
                </view>
                <text class="pay-money">共22件,小计:￥99 </text>
              </view>
            </view>
          </view>
          <view class="uni-list-cell">
            <view class="uni-media-list">
              <view class="uni-media-list-logo">
                <image src="../../../../static/ga005_45.png"></image>
              </view>
              <view class="uni-media-list-body">
                <view class="uni-media-list-body-left">
                  <view class="uni-media-list-text-top uni-ellipsis">标题</view>
                  <view class="uni-media-list-text-bottom uni-ellipsis">内容111111111111</view>
                </view>
                <text class="pay-money">共22件,小计:￥99 </text>
              </view>
            </view>
          </view>
          <view class="uni-list-cell">
            <view class="uni-media-list">
              <view class="uni-media-list-logo">
                <image src="../../../../static/ga005_45.png"></image>
              </view>
              <view class="uni-media-list-body">
                <view class="uni-media-list-body-left">
                  <view class="uni-media-list-text-top uni-ellipsis">标题</view>
                  <view class="uni-media-list-text-bottom uni-ellipsis">内容111111111111</view>
                </view>
                <text class="pay-money">共22件,小计:￥99 </text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 总支付金额-->
    <view class="total-money">
      <label>合计:<text style="color:red">￥99</text></label>
    </view>

    <!-- 支付按钮-->
    <button class="pay-btn text-bg-green">立即支付</button>

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

<style lang="scss" scoped>
  
  
  /* 收件人信息样式 */
  .play-main {
    padding: 0 1%;

    .user-info {
      background: white;
      padding: 0 30upx;
      margin-top: 20upx;

      .user-person {
        padding: 20upx 0 10upx;

        .user-person-name {
          margin-right: 20upx;
          ;
        }
      }

      .user-addre {
        padding: 10upx 0 20upx;
      }
    }

    /* 地址栏样式 */
    .addressBox {
      margin: 30upx 0;

      .address-nav {
        margin-bottom: 6upx;
        padding: 0 30upx;
        background: white;

        .address-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70upx;

          image {
            width: 30upx;
          }
        }
      }

      .address-content {
        background: white;
        min-height: 300upx;
        display: flex;
        justify-content: center;
        align-items: center;

        .null-content {
          display: flex;
          align-items: center;
          font-size: 22upx;
          color: #C1C1C1;

          image {
            margin-right: 30upx;
          }
        }
      }
    }
  }

  /* 购物清单列表的样式 */
  .product-title {
    display: block;
    padding: 0 30upx;
    background: white;
    height: 56upx;
    line-height: 56upx;
  }

  .uni-media-list-logo {
    border: 2upx solid #C1C1C1;
  }

  .uni-media-list-body {
    flex-direction: row;
    align-items: flex-end;

    .uni-media-list-body-left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    /* 右边的单物品金额的样式*/
    .pay-money {
      font-size: 20upx;
      flex-shrink: 0;
    }
  }

  /* 物品总金额的样式*/
  .total-money {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30upx 0;
  }

  /* 支付按钮的样式*/
  .pay-btn {
    width: 340upx;
    font-size: 28upx;
    color: white;
    margin-bottom: 30upx;
  }
</style>
