<template>
  <view class="merchant-login">
    <image src="../../../static/ga005_121.png" mode="widthFix" class="pgetopBg"></image>
    <view class="registerPage">
      <view class="reglogoBox">
        <image src="../../../static/ga005_71_1.png" mode="widthFix" class="reglogo"></image>
      </view>
      <view class="fordlBox">
        <form @submit="formSubmit">
          <view class="forinpuBox">
              <image src="../../../static/ga005_136.png" mode=""></image>
              <input type="text" placeholder-style="color:#BFDFCB" placeholder="商家邮箱" maxlength="11" v-model="account">
          </view>
          <view class="forinpuBox">
              <image src="../../../static/ga005_123.png" mode=""></image>
              <input type="password" placeholder-style="color:#BFDFCB" placeholder="商家密码" v-model="password">
          </view>
          <view class="fortextBox">
            <text>忘记密码</text>
          </view>
          <button class=" forinpuBox btn" formType="submit">立即登录</button>
        </form>
        <view class="merchant-reg">
          <text>申请注册商家</text>
          <text>查询申请结果</text>
        </view>
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    data() {
      return {
          account:"",
          password:""
      };
    },
    methods:{
      formSubmit(){        
        // 封装好的请求  
        var data = {
          account:"18888888888",
          password:"888888"
        }
        var url = "user/login"
        
      this.$Request.post(url,data).then((res) => {
         console.log(res.data.token);
      })
      }
    }
  }
</script>

<style lang="scss">
  
  page{
    background: #47A16B;
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
    height: 80upx;
    background: #7FBE98;
    border-radius: 16upx;
    margin-bottom: 20upx;
    position: relative;
    overflow:hidden;
  }

  .forinpuBox image {
    width:40upx;
    height:40upx;
    position: absolute;
    top: 20upx;
    left: 30upx;
  }

  .forinpuBox input {
    height: 100%;
    line-height: 100upx;
    border: none;
    background: none;
    padding: 0upx 20upx 0upx 80upx;
  }
  
  .fortextBox{
    display:flex;
    justify-content:flex-end;
    padding:0 20upx;
    font-size:20upx;
    color:#BFDFCB;
    margin-bottom:60upx;
  }
  
  .btn{
   background:#7FBE98;
   font-size:30upx;
   color:#BFDFCB;
   letter-spacing:5px;
   display:flex;
   justify-content:center;
   align-items:center;
 }
 
  /* 商家注册/查询样式*/
 .merchant-reg{
   display:flex;
   justify-content:center;
   margin-top:20upx;
   color:#BFDFCB;
   font-size:22upx;
   text{
     padding:0 10upx;
     &:nth-child(1){
       border-right:2upx solid white;
     }
   }
 }
</style>