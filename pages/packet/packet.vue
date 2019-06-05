<template>
  <!-- 红包/礼包专区-->
	<view class="packetPage">
    <navigator open-type="navigateBack" hover-class="none" style="display:block;">
      <image class="returnBtn" src="../../static/ga005_64.png" mode="widthFix"></image>
    </navigator>
    <image src="../../static/ga005_72.png" mode="widthFix"></image>
    <button class="packet-btn">红包专区</button>
    <view class="packet-main">
      <view class="packet-item">
          <view class="packet-item-li" v-for="(item,index) in 20 " :key="index"> 
            <navigator url="/pages/category/detail/detail">
              <view class="packet-view">
                <image class="paket-view-image" src="../../static/ga005_41.png" mode="aspectFill" ></image>
              </view>
              <view class="packet-item-li-bottom">
                <view class="packet-itme-li-bottom-top">
                  <image class="packet-bg" src="../../static/ga005_48.png" mode="widthFix"></image>
                  <text>￥688</text>
                </view>
                 <label>原价:<text>￥300</text></label>
              </view>
            </navigator>  
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

<style lang="scss" scoped>
  .returnBtn {
    left: 35upx;
    top: 40upx;
  }
  
  .packet-btn{
    position:absolute;
    z-index:5;
    top:80upx;
    left:50%;
    transform:translateX(-50%);
    width:180upx;
    height:180upx;
    line-height:180upx;
    border-radius:50%;
    font-size:28upx;
    background:#FFAA3B;
    font-family:楷体;
  }
  
  .packet-main{
   position:absolute;
   z-index:2;
   top:0;
   left:0;
   right:0;
   bottom:0;
   .packet-item{
    padding:280upx 30upx 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
     .packet-item-li{
       width:170upx;
       margin-bottom:20upx;
       display: flex;
       flex-direction: column;
       .packet-view{
         height:170upx;
         padding:10upx;
         margin:12upx 0;
         .paket-view-image{
            border:1px solid #C1C1C1;
            height:100%;
         }
       }
     }
     .packet-item-li-bottom{
        display: flex;
        flex-direction: column;
        font-size:22upx;
        padding: 0 10upx;
       .packet-itme-li-bottom-top{
         margin-bottom:10upx;
         font-size:24upx;
         .packet-bg{
           width:30upx;
           margin-right:10upx;
         } 
       }
     }
   }
  }
  
</style>
