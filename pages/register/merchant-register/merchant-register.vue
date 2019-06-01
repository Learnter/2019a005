<template>
  <!-- 商家注册页面-->
  <view class="merchant-register">
    <image src="../../../static/ga005_121.png" mode="widthFix" class="pgetopBg"></image>
    <view class="registerPage">
      <view class="reglogoBox">
        <image src="../../../static/ga005_71_1.png" mode="widthFix" class="reglogo"></image>
      </view>
      <view class="fordlBox">
        <em class="fordTips">
          WELCOME REGISTER OPAY
        </em>
        <form @submit="formSubmit">
          <view class="forinpuBox">
              <image src="../../../static/ga005_136.png" mode="widthFix"></image>
              <input type="text" placeholder-style="color:#BFDFCB" placeholder="商家邮箱" maxlength="11" name="userPhone">
          </view>
          <view class="forinpuBox">
              <image src="../../../static/ga005_123.png" mode="widthFix"></image>
              <input type="password" placeholder-style="color:#BFDFCB" placeholder="商家密码" name="userPassword">
          </view>
          <view class="forinpuBox">
              <image src="../../../static/ga005_123.png" mode="widthFix"></image>
              <input type="password" placeholder-style="color:#BFDFCB"  placeholder="再次输入商家密码" name="agianPassword">
          </view>
          
          <!-- 商家上传资料-->
          <view class="upFileBox">
             <view class="file-item">
               <image src="../../../static/ga005_137.png" mode="widthFix" ></image>
               <text>上传身份证</text>
             </view> 
             <view class="file-item">
               <image src="../../../static/ga005_137.png" mode="widthFix" ></image>
               <text>上传营业执照</text>
             </view>
             <view class="file-item">
               <image src="../../../static/ga005_137.png" mode="widthFix"  ></image>
               <text>上传其他材料</text>
             </view>          
          </view>
          <button class="forinpuBox btn" formType="submit">立即注册</button>
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
     text-align:center;
     color:white;
     font-size:24upx;
   }
   
  .forinpuBox {
    height:80upx;
    background: #7FBE98;
    border-radius: 16upx;
    margin-top: 20upx;
    position: relative;
  }

  .forinpuBox image {
    width:40upx;
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
    padding: 0upx 20upx 0upx 80upx;
  }
  
  .btn{
   margin-top:80upx;
   background: #7FBE98;
   font-size:30upx;
   color:#BFDFCB;
   letter-spacing:5px;
   &::after{
     display:none;
   }
 }
 
 /* 商家上传图片样式*/
 .upFileBox{
   margin-top:30upx;
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   overflow:hidden;
   .file-item{
     width:31%;
     height:160upx;
     box-sizing:border-box;
     padding:30upx 0;
     background:#7FBE98; 
     display:flex;
     flex-direction:column;
     justify-content:space-between;
     align-items:center;
     font-size:18upx;
     color:#BFDFCB;
     border-radius:4px;
     image{
       width:44upx;
     }
   }
 }
</style>