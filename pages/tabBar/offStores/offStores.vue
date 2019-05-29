<template>
	<view class="storePage">
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
          <text class="text-xm-size">区域</text>
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
      
      <!-- 商家店铺列表 -->
      <view class="storeBox">
        <view class="store-item">
          <image src="../../../static/ga005_79.png" mode="widthFix"></image>
          <view class="item-tips">
            <view class="i-t-top">
              <h3>标题111111111111111111111111111111111111111111111111111111111111111111</h3>
              <p>地址.......</p>
              <p>评价:......</p>
            </view>
            <view class="i-t-bottom">
              <text>服务好</text>
              <text>质量好</text>
            </view>
          </view>
        </view>
        
        <view class="store-item">
          <image src="../../../static/ga005_80.png" mode="widthFix"></image>
          <view class="item-tips">
            <view class="i-t-top">
              <h3>标题111111111111111111111111111111111111111111111111111111111111111111</h3>
              <p>地址.......</p>
              <p>评价:......</p>
            </view>
            <view class="i-t-bottom">
              <text>服务好</text>
              <text>质量好</text>
            </view>
          </view>
        </view>
        
        <view class="store-item">
          <image src="../../../static/ga005_81.png" mode="widthFix"></image>
          <view class="item-tips">
            <view class="i-t-top">
              <h3>标题111111111111111111111111111111111111111111111111111111111111111111</h3>
              <p>地址.......</p>
              <p>评价:......</p>
            </view>
            <view class="i-t-bottom">
              <text>服务好</text>
              <text>质量好</text>
            </view>
          </view>
        </view>
        
        <view class="store-item">
          <image src="../../../static/ga005_82.png" mode="widthFix"></image>
          <view class="item-tips">
            <view class="i-t-top">
              <h3>标题.........</h3>
              <p>地址.......</p>
              <p>评价:......</p>
            </view>
            <view class="i-t-bottom">
              <text>服务好</text>
              <text>质量好</text>
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
			}
		},
		components: {
			uniSwiperDot
		}
	}
</script>

<style lang="scss">
   
   .text-sx-size{
     font-size:20upx;
     margin:0 8upx;
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
    position:relative;
    z-index: 10;
    .bannerBox {
			width: 100%;
			border-radius: 20upx;
			overflow: hidden;
			box-shadow: 0upx 10upx 10upx rgba(0, 0, 0, 0.2);
			margin-bottom: 20upx;
			margin-top: -240upx;

			.swiper-box {
				min-height: 300upx;
			}
		}

    .sortBox{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top:40upx;
      border-top:1px solid #E6E6E6;
      border-bottom:1px solid #E6E6E6;
      .sort-item{
        width:23%;
        background:white;
        display:flex;  
        justify-content:center;
        align-items:center;
        padding:16upx 0;
        border-left:1px solid #E6E6E6;
        border-right:1px solid #E6E6E6;
        image{
          width:16upx;
          margin-left:4upx;
        }
      }
    }
    
    /* 店铺列表*/
    .storeBox{
      display:flex;
      flex-wrap:wrap;
      margin-top:16upx;
      justify-content:space-between;
      .store-item{
        background:white;
        width:49%;
        display:flex;
        flex-direction:column;
        margin-bottom:20upx;
        image{
          min-height:360upx;
        }
        .item-tips{
          box-sizing:border-box;
          padding:10upx 14upx;
          overflow:hidden;
          .i-t-top{
            display:flex;
            flex-direction: column;
            align-items:flex-start;
            h3,p{
              width:100%;
              margin-bottom:10upx;
              overflow:hidden;
              white-space:nowrap;
              text-overflow:ellipsis;
            }
          }
          .i-t-bottom{
            display:flex;
            align-items:center;
            text{
              box-sizing:border-box;
              padding:6upx 8upx;
              margin-right:10upx; 
              color:white;
              font-size:10upx;
              &:nth-child(odd){
                background:red;
              };
              &:nth-child(even){
                background:green;
              }
            }
          }
        }
      }
    }
  }
</style>
