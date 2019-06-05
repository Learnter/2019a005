<template>
	<view>
    <image class="returnBtn" src="../../static/ga005_64.png" mode="widthFix"></image>
		<image class="newsImg" src="../../static/ga005_120.png" mode="widthFix"></image>
    <view class="newsContent">
      <view class="newsTip">
        <h3>我是标题栏</h3>
        <h5>我是标题内容</h5>
      </view>
      <view class="textBox">
        <textarea value="" placeholder="正文内容..............."  placeholder-style="font-size:8upx" />
      </view>
    </view>
    <view class="discussBox uni-inline-item">
      <input type="text" value="" placeholder="发表您的评论" placeholder-style="text-align:center"/>
      <view class="disImg">
        <image src="../../static/ga005_95.png" mode="widthFix"></image>
        <image src="../../static/ga005_130.png" mode="widthFix"></image>
      </view>
    </view>  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
    .returnBtn{
      position:absolute;
      top:20px;
      left:20px;
      z-index:1;
      width:66upx;
    }
    .newsContent{
      margin-top:16upx;
      padding:20upx 30upx;
      width:100%;
      box-sizing:border-box;
     
    }
      
    .newsTip{
      background:white;
      color: #2C405A;
      display:flex;
      flex-direction:column; 
      justify-content:space-between;
      margin-bottom:20upx;
      padding: 10upx 20upx;
      h3{
        margin-bottom:16upx;
      }

    }
    .textBox{
      background:white;
      padding: 10upx 20upx;
      box-sizing:border-box;
      margin-bottom:20upx;
    }
    .textBox textarea{
      width:100%;
    }
    .discussBox{
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      height:80upx;
      background:white;
      padding:0 20upx;
      justify-content:space-between;
    }
    .discussBox input{
      background:#E6E6E6;
      border-radius:10upx;
      padding:0 14upx;
      box-sizing:border-box;
      overflow:hidden;
    }
    .disImg{
      display:flex;
      align-items:center;
      image{
        width:40upx;
        &:nth-child(1){
          margin-right:30upx;
        }
      }
    }
</style>
