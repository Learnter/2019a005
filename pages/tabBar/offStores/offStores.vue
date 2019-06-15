<template>
	<view class="offStores">
    <!-- 线下门店页面 -->
		
    <banner-view></banner-view>
    
    <view class="main">
      <view class="sortBox">
        <view class="sort-item" @tap="sortBtn" >
          <text class="text-xm-size">区域</text>
          <image v-if="index == 0" src="../../../static/ga005_131.png" mode="widthFix"></image>
          <image v-if="index == 1" src="../../../static/ga005_132.png" mode="widthFix"></image>
          <image v-if="index == 2" src="../../../static/ga005_133.png" mode="widthFix"></image>
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
        <view class="store-item" v-for="(item,index) in 6" :key="index">
          <image src="../../../static/ga005_79.png" mode="widthFix"></image>
          <view class="item-tips">
            <view class="i-t-top">
              <h3>标题111111111111111111111111111111111111111111111111111111111111111111</h3>
              <p>地址.......</p>
              <p class="uni-inline-item">评价:<uni-rate :disabled="true" :size="18" :is-fill="false" :value="3.5"/></p>
            </view>
            <view class="i-t-bottom">
              <text>服务好</text>
              <text>质量好</text>
            </view>
          </view>
        </view>
      </view>
      
     <uni-load-more :status="status" color="#007aff" />
    </view>
	</view>
</template>

<script>
  import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
  import uniRate from '@/components/uni-rate/uni-rate.vue';
  import bannerView from '@/components/bannerView.vue';
	export default {
		data() {
			return {
        status:"more",
        index:0
			}
		},
		methods: {
      sortBtn(){
        this.index >= 2 ? this.index = 0 : this.index++;
      }
		},
		components: {
      uniLoadMore,
      uniRate,
      bannerView
		},
     onReachBottom() {
      console.log("上拉加载");
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
