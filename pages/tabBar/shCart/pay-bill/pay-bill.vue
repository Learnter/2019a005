<template>
  <!-- 发布买单/卖单页面-->
  <view class="pay-bill">
    <image class="returnBtn" src="../../../../static/ga005_64.png" mode="widthFix"></image>
    <image src="../../../../static/ga005_26_1.png" mode="widthFix"></image>
    <image class="bgImage" src="../../../../static/ga005_125.png" mode="widthFix"></image>
    <view class="pay-box">
      <view class="pay-item">
        <button class="pay-item-btn text-bg-green" >买</button>
        <text class="pay-tips">发布买单</text>
      </view>
      <view class="pay-item">
        <button class="pay-item-btn text-bg-orange">卖</button>
        <text class="pay-tips">发布卖单</text>
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

<style lang="scss" scoped>
  
  .pay-bill{
    overflow:hidden;
  }
  
  .text-bg-green {
    background: #47A16B;
  }

  .text-bg-orange {
    background: #FFAA3B;
  }

  .pay-tips {
    font-size: 24upx;
    color: #818181;
  }

  .returnBtn {
    left: 35upx;
    top: 40upx;
  }

  .bgImage {
    width: 102%;
    position: relative;
    left: -1%;
    right: -1%;
    top: -40upx;
    z-index: 1;
  }

  .pay-box {
    margin-top: 120upx;

    .pay-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 100upx;

      .pay-item-btn {
        width: 160upx;
        height: 160upx;
				line-height: 160upx;
        font-size: 50upx;
        border-radius: 50%;
        color:white;
        margin-bottom: 30upx;
      }
    }
  }
</style>
