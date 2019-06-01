<template>
	<view class="search">
    <view class="historyBox">
      <h3>搜索发现</h3>
      <view class="history-tab">
        
      </view>
    </view>
    <view class="referrals">
      <h3>好货推介</h3>
      <view class="category-list">
         <view class="category-li" @tap="toDetail">
           <image src="../../static/ga005_40.png" mode="widthFix" ></image>
           <view class="cate-li-right">
             <view class="li-r-top">
               <view class="li-r-top-left">
                 <text>￥199</text>
                 <text class=" text-del-style text-sx-size">￥199</text>
               </view>
               <view class="li-r-top-right">
                 <text class="good-text">秒杀</text>
                 <text class="good-text">秒杀</text>
               </view> 
             </view>
             <view class="li-r-bottom">
               <h3>我的标题.....</h3>
               <p>.............</p>
               <p>.............</p>
             </view>
           </view>
         </view>
         <view class="category-li">
           <image src="../../static/ga005_40.png" mode="widthFix" style="width:30%"></image>
           <view class="cate-li-right">
             <view class="li-r-top">
               <view class="li-r-top-left">
                 <text>￥199</text>
                 <text class="text-del-style text-sx-size">￥199</text>
               </view>
               <view class="li-r-top-right">
                 <text class="good-text">秒杀</text>
                 <text class="good-text">秒杀</text>
               </view> 
             </view>
             <view class="li-r-bottom">
               <h3>我的标题.....</h3>
               <p>.............</p>
               <p>.............</p>
             </view>
           </view>
         </view>
         <view class="category-li">
           <image src="../../static/ga005_40.png" mode="widthFix" style="width:30%"></image>
           <view class="cate-li-right">
             <view class="li-r-top">
               <view class="li-r-top-left">
                 <text>￥199</text>
                 <text class="text-sx-size text-del-style">￥199</text>
               </view>
               <view class="li-r-top-right">
                 <text class="good-text">秒杀</text>
                 <text class="good-text">秒杀</text>
               </view> 
             </view>
             <view class="li-r-bottom">
               <h3>我的标题.....</h3>
               <p>.............</p>
               <p>.............</p>
             </view>
           </view>
         </view>
         <view class="category-li">
           <image src="../../static/ga005_40.png" mode="widthFix" style="width:30%"></image>
           <view class="cate-li-right">
             <view class="li-r-top">
               <view class="li-r-top-left">
                 <text>￥199</text>
                 <text class="text-sx-size text-del-style">￥199</text>
               </view>
               <view class="li-r-top-right">
                 <text class="good-text">秒杀</text>
                 <text class="good-text">秒杀</text>
               </view> 
             </view>
             <view class="li-r-bottom">
               <h3>我的标题.....</h3>
               <p>.............</p>
               <p>.............</p>
             </view>
           </view>
         </view>
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
  
  image{
    width:120px;
    height:80px;
  }
  
  .historyBox{
    box-sizing:border-box;
    padding:20upx 30upx;
    .history-tab{
      margin-top:16upx;
      min-height:200upx;
      border:1px solid black;
    }
  }
  
  .referrals{
    box-sizing:border-box;
    padding:0 20upx;
    .category-list{
      margin-top:16upx;
    }
  }
  
  .category-li{
      display:flex;
      background:white;
      border:1px solid lightgray;
      margin-bottom:16upx;
      border-radius: 0 10upx 10upx 0;
      .cate-li-right{
        flex:1;
        box-sizing:border-box;
        padding:10upx 20upx;
        border-left:1px solid lightgray;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        .li-r-top{
          display:flex;
          align-items:center;
        }
      }
    }
</style>
