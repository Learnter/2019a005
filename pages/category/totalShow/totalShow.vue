<template>
	<view class="totalShow">
		<view class="headBox">
			<!-- 首页头部 -->
			<image class="bgImage" src="../../../static/ga005_26.png" mode="widthFix"></image>
			<view class="contentBox">
				<view class="con_text">
					<!-- <text>OPAY</text> -->
					<h2>OPAY</h2>
					<view class="con_buttom">
						<view class="conImg">
							<image src="../../../static/2019_a005_27.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
    <view class="main">
      
      <view class="bannerBox">
      	<!-- 轮播组件 -->
      	<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles">
      		<swiper class="swiper-box" @change="change" autoplay="true" circular="true">
      			<swiper-item v-for="(item ,index) in info" :key="index">
      				<view :class="item.colorClass" class="swiper-item">
      					<image :src="item.url" mode="widthFix" style="width:100%" />
      				</view>
      			</swiper-item>
      		</swiper>
      	</uni-swiper-dot>
      </view>
      
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
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				msg: [
					"公告A",
					"公告B",
					"公告C"
				],
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'long',
				dotsStyles: {
					backgroundColor: 'rgba(83, 200, 249,0.3)',
					border: '1px rgba(83, 200, 249,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
					selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
					width: 10,
					height: 2
				}
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
      toDetail(){
        //跳转到详情页面
        uni.navigateTo({
          url:"detail/detail"
        })
      }
		},
		components: {
			uniSwiperDot
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
   
  .headBox {
  	position: absolute;
  	left:0;
  	top:0;
  	right:0;
  	width:100%;
  
  	.bgImage {
  		width: 100%;
  		z-index: 1;
  	}
  
  	.contentBox {
  		position: absolute;
  		left: 0;
  		top: 100upx;
  		right: 0;
  		z-index: 2;
  
  		.con_text {
  			padding: 0 30upx;
  			color: white;
  
  			.con_buttom {
  				background-color: white;
  				width: 100%;
  				box-sizing: border-box;
  				padding: 10upx 0 10upx 20upx;
  				height: 50upx;
  				display: flex;
  				justify-content: flex-start;
  				align-items: center;
  				border-radius: 10upx;
  				margin-top: 30upx;
  
  				.conImg {
  					height: 30upx;
  					width: 30upx;
  				}
  			}
  		}
  	}
  } 
  
  .main{
    padding: 480upx 20upx 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    .bannerBox {
			width: 100%;
			border-radius: 20upx;
			overflow: hidden;
			box-shadow: 0upx 10upx 10upx rgba(0, 0, 0, 0.2);
			margin-bottom: 20upx;
			margin-top: -240upx;

			.swiper-box {
				height: 300upx;
			}
		}

    .sortBox{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top:40upx;
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