<template>
  <!--门店商品页面-->
	<view class="storeGoods">
    
    <banner-view></banner-view>
		
    <view class="main">
      <view class="sortBox">
        <view class="sort-item">
          <text class="text-xm-size">价格</text>
          <image src="../../../static/ga005_131.png" mode="widthFix"></image>
        </view>
        <view class="sort-item">
          <text class="text-xm-size">销量</text>
          <image src="../../../static/ga005_131.png" mode="widthFix"></image>
        </view>
        <view class="sort-item">
          <text class="text-xm-size">热度</text>
          <image src="../../../static/ga005_131.png" mode="widthFix"></image>
        </view>
        <view class="sort-item">
          <text class="text-xm-size">时间</text>
          <image src="../../../static/ga005_131.png" mode="widthFix"></image>
        </view>
      </view>
      
      <view class="category-list">
         <view class="category-li" @tap="toDetail">
           <image src="../../../static/ga005_40.png" mode="widthFix" style="width:30%"></image>
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
           <image src="../../../static/ga005_40.png" mode="widthFix" style="width:30%"></image>
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
           <image src="../../../static/ga005_40.png" mode="widthFix" style="width:30%"></image>
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
           <image src="../../../static/ga005_40.png" mode="widthFix" style="width:30%"></image>
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
	import bannerView from '@/components/bannerView.vue';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
      toDetail(){
        //跳转到详情页面
        uni.navigateTo({
          url:"detail/detail"
        })
      }
		},
		components: {
			bannerView
		}
	}
</script>

<style lang="scss" scoped>
   
   .text-sx-size{
     font-size:20upx;
     margin:0 8upx;
   }
   
  .main{
     padding:50upx 20upx 0;
    .sortBox{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:20upx;
      border:1px solid #E6E6E6;
      .sort-item{
        width:23%;
        background:white;
        display:flex;  
        justify-content:center;
        align-items:center;
        padding:16upx 0;
        image{
          width:16upx;
          margin-left:4upx;
        }
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
  }
  

</style>
