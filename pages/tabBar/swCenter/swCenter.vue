<template>
  <!-- 交换中心页面-->
  <view class="swCenter">

    <!-- 头部返回栏-->
    <view class="returnTitle">
      <image class="returnBtn" src="../../../static/ga005_64.png" mode="widthFix"></image>
      <text>交换中心</text>
    </view>

    <!--账号余额-->
    <view class="accountInfo">
      <view class="account-left">
        <image src="../../../static/ga005_118.png" mode="widthFix"></image>
        <text class="account-balance">我的余额</text>
      </view>
      <view class="account-right">
        <view class="account-r-item">
          <text>订单列表</text>
          <text>￥88888</text>
        </view>
        <view class="account-r-item">
          <text>交易记录</text>
          <text>￥88888</text>
        </view>
        <view class="account-r-item">
          <text>总红包</text>
          <text>￥88888</text>
        </view>
        <view class="account-r-item">
          <text>总余额</text>
          <text>￥88888</text>
        </view>
      </view>
    </view>

    <view class="sw-main">
      
      <!-- 买/买家列表-->
      <view class="vendorBox">
        <text>买家列表</text>
        <text>卖家列表</text>
      </view>


      <!-- 排序列表-->
      <view class="sortBox">
        <view class="sort-item">
          <text>分类</text>
          <image src="../../../static/ga005_68.png" mode="widthFix"></image>
        </view>
        <view class="sort-item">
          <text>日期</text>
          <image src="../../../static/ga005_68.png" mode="widthFix"></image>
        </view>
        <view class="sort-item">
          <text>排序</text>
          <image src="../../../static/ga005_68.png" mode="widthFix"></image>
        </view>
      </view>
      
      <!-- 信息列表-->
      <view class="uni-list">
      	<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
      		<view class="uni-media-list">
      			<view class="uni-media-list-logo">
      				<image  src="../../../static/ga005_119.png" mode="widthFix" ></image>
      			</view>
      			<view class="uni-media-list-body">
      				<view class="uni-media-list-text-top">标题</view>
      				<view class="uni-media-list-text-bottom uni-ellipsis">标题内容122222222222222222222222222222222222222</view>
      			</view>
      		</view>
      	</view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" >
        	<view class="uni-media-list">
        		<view class="uni-media-list-logo">
        			<image  src="../../../static/ga005_119.png" mode="widthFix"></image>
        		</view>
        		<view class="uni-media-list-body">
        			<view class="uni-media-list-text-top">标题</view>
        			<view class="uni-media-list-text-bottom uni-ellipsis">标题内容.......</view>
        		</view>
        	</view>
        </view>
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
  
   /* 头部返回栏样式*/
  .returnTitle {
    position: relative;
    background: white;
    font-size: 32upx;
    padding: 30upx 0;
    text-align: center;
    .returnBtn {
      left: 30upx;
      top: 50%;
      transform: translateY(-50%);
    }
  }

   /* 账号信息样式 */
  .accountInfo {
    background: white;
    box-sizing: border-box;
    padding: 30upx 40upx;
    display: flex;
    margin:10upx 0;
    .account-left {
      position: relative;
      width:50%;
      display: flex;
      align-items: center;
      justify-content: center;
      image {
        width:160upx;
      }
      .account-balance {
        position: absolute;
        font-size: 20upx;
        top: 108upx;
      }
    }

    .account-right {
      width: 50%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .account-r-item {
        width:50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
        padding:16upx 0;
        text{
          &:nth-child(1){
            font-size:24upx;
          };
          &:nth-child(2){
            font-size:22upx;
            color:green;
          }
        }
      }
    }
  }


  .sw-main {
    box-sizing:borde-box;
    padding: 0 1%;
    
    /* 卖家--买家列表样式*/
    .vendorBox {
      display: flex;
      font-size: 32upx;
      margin-bottom:12upx;
      text {
        width: 50%;
        padding: 20upx 0;
        text-align: center;

        &:nth-child(1) {
          background: #E6E6E6;
        }

        ;

        &:nth-child(2) {
          background: #CCCCCC;
        }
      }
    }

    /* 排序列表样式*/
    .sortBox {
      box-sizing: border-box;
      padding: 20upx 40upx;
      display: flex;
      justify-content: space-between;
      background: white;

      .sort-item {
        display: flex;
        align-items: center;
        height:40upx;
        image {
          width: 16upx;
          margin-left: 6upx;
        }
      }
    }
    
    /* 信息列表样式*/
    .uni-list{
      margin-top:10upx;
      background:none;
      &::before,&::after{
        display:none;
      }
      .uni-list-cell{
         &::after{
           display:none;
         }
         background:white;
         margin-bottom:10upx;
      }
        
        .uni-media-list-logo{
          width:60upx;
          height:60upx;
          display:flex;
          align-items:center;
        }
        
          
        .uni-media-list-body{
          height:70upx;
        }
        
        .uni-media-list-text-top{
          font-size:24upx;
        }
        
        .uni-media-list-text-bottom{
          font-size:20upx;
        }
     } 
  }
</style>
