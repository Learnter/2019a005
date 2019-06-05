<template>
	<view class="systemNotice">
    <navigator open-type="navigateBack" hover-class="none">
        <image class="returnBtn" src="../../../../static/ga005_64.png" mode="widthFix"></image>
    </navigator>
    <view class="notice-main">
      我是系统公告主内容
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

.returnBtn{
  left:40upx;
  top:40upx;
}

</style>
