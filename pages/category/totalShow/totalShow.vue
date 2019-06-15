<template>
	<view class="totalShow">

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
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
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
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥199</text>
                   <text class=" text-del-style text-sx-size ">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥199</text>
                   <text class=" text-del-style text-sx-size ">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size  ">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size ">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size  ">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
             </view>
           </view>
         </view>
         
         <view class="category-li" @tap="toDetail">
           <view class="category-li-item">
             <image src="../../../static/ga005_40.png" mode="widthFix"></image>
             <view class="cate-li-right">
               <view class="li-r-top">
                 <view class="li-r-top-left">
                   <text>￥19999</text>
                   <text class=" text-del-style text-sx-size ">￥199</text>
                 </view>
                 <view class="li-r-top-right">
                   <text class="good-text">秒杀</text>
                   <text class="good-text">秒杀</text>
                 </view> 
               </view>
               <view class="li-r-bottom">
                 <h3 class="uni-ellipsis">我的标题.....</h3>
               </view>
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
  
  h3{
    font-size:20upx;
  }
  
  /* 促销样式  例如-秒杀*/
  .good-text {
  	font-size:16upx;
  	color: white;
  	background: red;
  	margin-right:6upx;
  }
   
   .text-sx-size{
     font-size:12upx;
     margin:0 upx;
   }
   
  .main{
    padding: 50upx 20upx 0;
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
    
    .category-list{
      display:flex;
      flex-wrap:wrap;
    .category-li{
      width:33.33%;
      box-sizing:border-box;
      padding:10upx;
      .category-li-item{
        display:flex;
        flex-direction:column;
        background:white;
        border-radius: 0 10upx 10upx 0;
        image{
          border-bottom:2upx solid #E6E6E6;
        }
        .cate-li-right{
          display:flex;
          flex-direction:column-reverse;
          justify-content:space-between;
          padding:10upx 0 10upx 10upx;
          .li-r-top{
            display:flex;
            flex-direction:column;
            .li-r-top-left{
              
             /*  #ifdef H5 */
              margin:10upx 0;
            /*  #endif  */
            
              margin-top:10upx;
              font-size:20upx;
              display:flex;
              align-items:center;
              overflow:hidden;
              flex-shrink:0;
            }
          }
        }
      }  
    }
   }
 } 

</style>