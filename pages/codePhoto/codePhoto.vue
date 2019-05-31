<template>
  <!-- 二维码页面-->
  <view class="codePhoto">
    <image class="returnBtn" src="../../static/ga005_64.png" mode="widthFix"></image>

    <view class="code-main">
      <view class="codeBox">
        <image class="code-view-head" src="../../static/ga005_71_1.png" mode="widthFix"></image>
        <view class="code-view">

        </view>
        <view class="code-tips">
          <text>OPAY TOKEN</text>
          <text>共享计算 链接无限</text>
        </view>
      </view>
      <button class="code-btn">保存二维码</button>
      <button class="code-btn">分享二维码</button>
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
  
  .returnBtn {
    left: 35upx;
    top: 40upx;
  }

  .codeBox {
    background: #47A16B;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    .code-view-head {
      width: 70upx;
      margin: 140upx 0 60upx;
    }

    .code-view {
      width: 200upx;
      height: 200upx;
      background: white;
      margin-bottom: 100upx;
    }

    .code-tips {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30upx;
      font-size: 24upx;
      line-height: 1.3;
    }
  }

  .code-btn {
    color: white;
    background: #47A16B;
    margin-top: 40upx;
    width: 300upx;
    font-size: 24upx;
  }
</style>
