<template>
	<view class="returnBack">
		<!-- 返回上一层 -->
      <!-- 返回按钮-->
    <view class="returnImg">
      <navigator open-type="navigateBack" hover-class="none">
          <image src="/static/ga005_64.png" mode="widthFix"></image>
      </navigator>
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
  .returnImg{
    position:fixed;
    z-index:999;
    left:30upx;
    top:30upx;
    width:60upx;
    height:60upx;
  }
</style>
