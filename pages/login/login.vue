<template>
  <view>
    <image src="../../static/ga005_121.png" mode="widthFix" class="pgetopBg"></image>
    <view class="registerPage">
      <view class="reglogoBox">
        <image src="../../static/ga005_71_1.png" mode="widthFix" class="reglogo"></image>
      </view>
      <view class="fordlBox">
        <form @submit="formSubmit">
          <view class="forinpuBox">
              <image src="../../static/ga005_122.png" mode=""></image>
              <input type="text" placeholder-style="color:RGBA(202, 219, 200, 1)" placeholder="会员手机号" maxlength="11">
          </view>
          <view class="forinpuBox">
              <image src="../../static/ga005_123.png" mode=""></image>
              <input type="password" placeholder-style="color:RGBA(202, 219, 200, 1)" placeholder="会员密码">
          </view>
          <view class="fortextBox">
            <text>注册</text>
            <text>忘记密码</text>
          </view>
          <view class="forinpuBox subBtn">
              <button class="btn">立即登录</button>
          </view>
        </form>
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
  page {
    background: RGBA(65, 160, 105, 1);
    position: relative;
  }

  .pgetopBg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }

  .reglogoBox {
    text-align: center;
    padding-top: 250upx;
  }

  .reglogo {
    // width: 40px;
    width:80upx;
  }

  .fordlBox {
    width: 74%;
    margin: 0 auto;
    margin-top:60upx;
    display:flex;
    flex-direction:column;
    justify-content:center;
  }

  .forinpuBox {
    height: 100upx;
    background: RGBA(137, 185, 147, 1);
    border-radius: 20upx;
    margin-bottom: 20upx;
    position: relative;
    overflow:hidden;
  }

  .forinpuBox image {
    width: 60upx;
    height: 60upx;
    position: absolute;
    top: 20upx;
    left: 30upx;
  }

  .forinpuBox input {
    height: 100%;
    line-height: 100upx;
    border: none;
    background: none;
    margin: 0upx;
    padding: 0upx 20upx 0upx 100upx;
    color:#ffffff;
  }
  .fortextBox{
    display:flex;
    justify-content:space-between;
    padding:0 20upx;
    font-size:20upx;
    color:RGBA(202, 219, 200, 1);
  }
 .forinpuBox .btn{
   background: RGBA(137, 185, 147, 1);
   height:100%;
   font-size:30upx;
   line-height:100upx;
   color:RGBA(202, 219, 200, 1);
 }
 
 .subBtn{
   margin-top:80upx;
 }

</style>
