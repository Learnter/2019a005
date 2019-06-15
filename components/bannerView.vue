<template>
	<view class="bannerView">
    <!-- 头部背景 + 轮播图-->
		<view class="headBox">
      
      <!-- 背景图-->
		  <image class="bgImage" src="../../../static/ga005_26.png" mode="widthFix"></image>
      
      <!-- 搜索框-->
		  <view class="contentBox">
		    <view class="con_text">
		      <h2>OPAY</h2>
		      <view class="con_buttom" @tap="toSearch">
		        <view class="conImg">
		          <image src="../../../static/2019_a005_27.png" mode="widthFix"></image>
		        </view>
		      </view>
		    </view>
		  </view>
      
      <!-- 轮播图-->
        <uni-swiper-dot class="bannerBox" :info="swiperInfo" :current="current" :mode="mode" :dots-styles="dotsStyles">
          <swiper class="swiper-box" @change="toggleSwiper" :autoplay="autoplay" circular="true">
            <swiper-item v-for="(item ,index) in swiperInfo" :key="index">
              <view class="swiper-item">
                <image :src="item.url" mode="widthFix" />
              </view>
            </swiper-item>
          </swiper>
        </uni-swiper-dot>
        
		</view>
	</view>
</template>

<script>
  import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
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
				},
        swiperInfo:[], //轮播数据
			};
		},
    created() {
      this.fetchData();
    },
    methods:{
        //手动切换轮播
      toggleSwiper(e) {
        this.current = e.detail.current
      },
      //获取轮播图数据
      fetchData(){
        var url = "config/getInfo"
        this.$Request.get(url).then(res => {
          if (res.code == 200 && res.data.ads.user_index) {
            console.log(res);
            this.swiperInfo = res.data.ads.user_index;
          }
        })
      },
      //去搜索页面
      toSearch(){
        uni.navigateTo({
          url:"/pages/search/search"
        })
      }  
    },
    components:{
      uniSwiperDot
    }
	}
</script>

<style lang="scss">
  
  .headBox {
    
    .contentBox {
      position: absolute;
      width:100%;
      top: 100upx;
      z-index:999;
  
      .con_text {
       width:96%;
       margin:0 auto;
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
  
  .bannerBox {
    position:absolute;
    top:230upx;
    z-index:999;
    .swiper-box {
      width:96%;
      margin:5px auto;
      height:280upx;
      overflow:hidden;
      border-radius: 20upx;
      box-shadow: 0upx 10upx 10upx rgba(0, 0, 0, 0.2);
    }
  }

</style>
