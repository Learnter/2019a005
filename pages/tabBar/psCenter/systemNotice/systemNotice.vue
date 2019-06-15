<template>
	<view class="systemNotice">
     <!-- 返回按钮-->
    <return-back></return-back>
    
    <view class="notice-main">
      我是系统公告主内容
    </view>
	</view>
</template>

<script>
  import returnBack from "@/components/returnBack.vue";
	export default {
		data() {
			return {
				
			};
		},
    components:{
      returnBack
    }
	}
</script>

<style lang="scss">

</style>
