<template>
	<view class="returnNav">
    <!--头部返回栏-->
		<view class="returnTitle">
     <navigator open-type="navigateBack">
        <image class="returnBtn" src="/static/ga005_64.png" mode="widthFix"></image>
      </navigator>
      <slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
    name:"returnNav",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  /* 头部返回栏样式*/
  .returnTitle {
    position: relative;
    background: white;
    font-size: 32upx;
    padding: 30upx 0;
    text-align: center;
    margin-bottom:10upx;
    .returnBtn {
      left: 30upx;
      top: 50%;
      transform: translateY(-50%);
    }
  }

</style>
