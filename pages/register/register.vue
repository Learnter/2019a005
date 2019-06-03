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
              <input type="text" placeholder-style="color:#BFDFCB" placeholder="会员手机号" maxlength="11" v-model="user.mobile" >
          </view>
          <view class="forinpuBox">
              <image src="../../static/ga005_123.png" mode="widthFix"></image>
              <input type="password" placeholder-style="color:#BFDFCB" placeholder="会员密码" v-model="user.password">
          </view>
          <view class="forinpuBox">
              <image src="../../static/ga005_123.png" mode="widthFix"></image>
              <input type="password" placeholder-style="color:#BFDFCB" placeholder="再次输入密码" v-model="user.again_psd">
          </view>
          <view class="forinpuBox">
              <image src="../../static/ga005_124.png" mode="widthFix"></image>
              <input type="text" placeholder-style="color:#BFDFCB" placeholder="输入邀请码" v-model="user.reg_code">          
          </view>
          <button class=" forinpuBox btn" formType="submit">立即注册</button>
        </form>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        user:{
          mobile:'',
          password:'',
          again_psd:'',
          reg_code:''
        }
      };
    },
    methods:{
      formSubmit(){
        
        var url,data;
        data = this.user;
        url = "user/reg";
        
        /*输入框非空判断*/
        if(!(/^1[34578]\d{9}$/).test(data.mobile)){
          uni.showToast({
            title:"请输入有效的手机号码",
            icon:"none"
          })
          return false;
        }else if(!(/^[a-zA-Z0-9]{6,}$/).test(data.password)){
          uni.showToast({
            title:"密码格式最少需要字母*数字!",
            icon:"none"
          })
          return false;
        }else if(data.again_psd !== data.password){
          uni.showToast({
            title:"两次密码输入不一致!",
            icon:"none"
          })
          return false;
        }else if(!(/^[a-zA-Z0-9]{4}$/).test(data.reg_code)){
          uni.showToast({
            title:"邀请码输入有误!",
            icon:"none"
          })
          return false;
        } 
        this.$Request.post(url, data).then( res => {
          if(res && res.code === 200){
            uni.showToast({
              title:"注册成功",
              icon:"success"
            })
            /* 注册成功后页面跳转*/
            setTimeout(function() {
              uni.switchTab({
               url: "/pages/tabBar/onGoods/onGoods"
             })
            }, 500)
            
          }else{
            // 注册错误信息
            uni.showToast({
              title:res.msg,
              icon:"none"
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  page {
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
    padding-top: 220upx;
  }

  .reglogo {
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
    background:#7FBE98;
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
    padding: 0upx 20upx 0upx 100upx;
  }
  
 
 .btn {
   margin-top:80upx;
   background: #7FBE98;
   font-size: 30upx;
   color: #BFDFCB;
   letter-spacing: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
 }

</style>
