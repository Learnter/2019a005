<template>
  <view class="login">
    <image src="../../static/ga005_121.png" mode="widthFix" class="pgetopBg"></image>
    <view class="registerPage">
      <view class="reglogoBox">
        <image src="../../static/ga005_71_1.png" mode="widthFix" class="reglogo"></image>
      </view>
      <view class="fordlBox">
        <form @submit="formSubmit">
          <view class="forinpuBox">
            <image src="../../static/ga005_122.png" mode=""></image>
            <input type="text" placeholder-style="color:#BFDFCB" placeholder="会员手机号" maxlength="11" v-model="user.account">
          </view>
          <view class="forinpuBox">
            <image src="../../static/ga005_123.png" mode=""></image>
            <input type="password" placeholder-style="color:#BFDFCB" placeholder="会员密码" v-model="user.password">
          </view>
          <view class="fortextBox">
            <navigator url="/pages/register/register">注册</navigator>
            <text>忘记密码</text>
          </view>
          <button class="forinpuBox btn" formType="submit">立即登录</button>
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
          account:'',
          password:''
        }
      }  
    },
    methods: {
      formSubmit() {  
        
        /* 账号/密码非空判断*/
        if (!(/^1[34578]\d{9}$/).test(this.user.account) ) {
          uni.showToast({
            title: "请正确输入用户名!",
            icon: "none"
          })
          return false;
        } else if (!(/^[a-zA-Z0-9]{6,}$/).test(this.user.password)) {/* 密码规则最少需要6位数*/
          uni.showToast({
            title: "密码输入有误!",
            icon: "none"
          })
          return false;
        }

        let url = "user/login";
        this.$Request.post(url, this.user).then(res => {
          
          /* 请求成功的提示信息*/
          if (res && res.code === 200) {
            
            uni.showToast({
              title: "登录成功",
              icon: "success"
            })
            
            /* 设置缓存信息*/
            let token = res.data; //服务器返回的唯一标识符
            this.$SysCache.put("app_user_info",token,86400); //86400为一天时间
            
            /* 登录成功后的跳转页面*/
            setTimeout(function() {
              uni.switchTab({
               url: "/pages/tabBar/onGoods/onGoods"
             })
            }, 500)
            
          } else {
            /* 账号或密码有误*/
            uni.showToast({
              title: res.msg,
              icon: "none"
            })
          }
        });
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
    padding-top: 250upx;
  }

  .reglogo {
    width: 80upx;
  }

  .fordlBox {
    width: 74%;
    margin: 0 auto;
    margin-top: 60upx;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .forinpuBox {
    height: 100upx;
    background: #7FBE98;
    border-radius: 20upx;
    margin-bottom: 20upx;
    position: relative;
    overflow: hidden;
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
    padding: 0upx 20upx 0upx 100upx;
  }

  .fortextBox {
    display: flex;
    justify-content: space-between;
    padding: 0 20upx;
    font-size: 20upx;
    color: #BFDFCB;
    margin-bottom: 60upx;
  }

  .btn {
    background: #7FBE98;
    font-size: 30upx;
    color: #BFDFCB;
    letter-spacing: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
