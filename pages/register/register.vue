<template>
  <view>
    <image src="../../static/ga005_121.png" mode="widthFix" class="pgetopBg"></image>
    <view class="registerPage">
      <view class="reglogoBox">
        <image src="../../static/ga005_71_1.png" mode="widthFix" class="reglogo"></image>
      </view>
      <view class="fordlBox">
        <em class="fordTips">
         WELCOME REGISTER OPAY
        </em>
        <form @submit="formSubmit">
          <view class="forinpuBox">
              <image src="../../static/ga005_122.png" mode="widthFix"></image>
              <input type="text" placeholder-style="color:RGBA(202, 219, 200, 1)" placeholder="会员手机号" maxlength="11" name="userPhone">
          </view>
          <view class="forinpuBox">
              <image src="../../static/ga005_123.png" mode="widthFix"></image>
              <input type="password" placeholder-style="color:RGBA(202, 219, 200, 1)" placeholder="会员密码" name="userPassword">
          </view>
          <view class="forinpuBox">
              <image src="../../static/ga005_123.png" mode="widthFix"></image>
              <input type="password" placeholder-style="color:RGBA(202, 219, 200, 1)" placeholder="再次输入密码" name="agianPassword">
          </view>
          <view class="forinpuBox">
              <image src="../../static/ga005_124.png" mode="widthFix"></image>
              <input type="text" placeholder-style="color:RGBA(202, 219, 200, 1)" placeholder="输入邀请码" name="InvitationCode">          
          </view>
          <view class="forinpuBox subBtn">
              <button class="btn" formType="submit">立即登录</button>
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
    },
    methods:{
      // http://2019a005api.jiafuw.com
      formSubmit(ev){
        uni.request({
         // url:"https://www.dshui.cc/goodswap/allCtgy?&token=",
         url:"http://2019a005api.jiafuw.com/v1/user/login",
         data:{
           token:""
         },
         success: (res) => {
          console.log("请求成功");
          console.log(res.data);
          },
         fail:function(res){
           console.log("请求失败");
         }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    padding-top: 220upx;
  }

  .reglogo {
    // width: 40px;
    width:80upx;
  }

  .fordlBox {
    width: 74%;
    margin: 0 auto;
    margin-top:100upx;
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
   .fordTips{
     margin-bottom:30upx;
     text-align:center;
     color:white;
   }
  .forinpuBox {
    height:100upx;
    background: RGBA(137, 185, 147, 1);
    border-radius: 16upx;
    margin-bottom: 20upx;
    position: relative;
  }

  .forinpuBox image {
    width: 60upx;
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
    // color:#ffffff;
  }
  
 .forinpuBox .btn{
   background: RGBA(137, 185, 147, 1);
   height:100%;
   font-size:30upx;
   line-height:100upx;
   color:RGBA(202, 219, 200, 1);
 }
 
 .subBtn{
   margin-top:100upx;
 }

</style>
