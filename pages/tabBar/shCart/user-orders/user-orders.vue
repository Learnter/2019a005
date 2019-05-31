<template>
  <!-- 用户订单页面-->
	<view class="user-orders">
    
		  <!-- 头部返回栏-->
		<view class="returnTitle">
		  <image class="returnBtn" src="../../../../static/ga005_64.png" mode="widthFix"></image>
		  <text>我的订单</text>
		</view>
    
    <view class="orderBox">
      <view class="order-navs">
         <text>待付款</text>
         <text>待发货</text>
         <text>待收货</text>
         <text>待评价</text>
         <text>已完成</text>
      </view>
      <view class="order-detail">
        <view class="not-order">
          <image class="not-order-img" src="../../../../static/ga005_67.png" mode="widthFix"></image>
          <text>您目前还没有订单哦!</text>
        </view>
      </view>
    </view>
    
    <view class="recommendBox">
      
      <view class="recommend-info">
        <image src="../../../../static/ga005_135.png" mode="widthFix" style="width:30upx"></image>
        <text class="recommend-info-title">为您推荐</text>
      </view>
      
      <view class="recommend-goods">
        
        <view class="goodLi">
        	<view class="goodImg">
        		<image src="../../../../static/ga005_53.png" mode="widthFix"></image>
        	</view>
        	<view class="uni-bg-green" style="height:20upx;">
        	</view>
        	<view class="goodTips">
        		<h2>标题.....</h2>
        		<view>
        			<view class="tipTop">
        				<view class="t_top_left">
        					<text class="tip-text-margin">￥200</text>
        					<text class="good-text">秒杀</text>
        				</view>
        				<text class="t_top_right">购买</text>
        			</view>
        			<text class="text-del-style">￥1000</text>
        		</view>
        	</view>
        </view>
        <view class="goodLi">
        	<view class="goodImg">
        		<image src="../../../../static/ga005_53.png" mode="widthFix"></image>
        	</view>
        	<view class="uni-bg-green" style="height:20upx;">
        	</view>
        	<view class="goodTips">
        		<h2>标题.....</h2>
        		<view>
        			<view class="tipTop">
        				<view class="t_top_left">
        					<text class="tip-text-margin">￥200</text>
        					<text class="good-text">秒杀</text>
        				</view>
        				<text class="t_top_right">购买</text>
        			</view>
        			<text class="text-del-style">￥1000</text>
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
				
			};
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
    margin-bottom:10upx;
    .returnBtn {
      left: 30upx;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  
  .orderBox{
    
     .order-navs{
       display:flex;
       justify-content:space-around;
       background:white;
       height:80upx;
       line-height:80upx;
       margin-bottom:10upx;
     }
     
     .order-detail{
       position:relative;
       background:white;
       min-height:500upx;
       
       .not-order{
         position:absolute;
         left:50%;
         top:50%;
         transform:translate(-50%,-50%);
         display:flex;
         flex-direction:column;
         align-items:center;
         color:#C2BEBE;
         font-size:32upx;
         .not-order-img{
            width:200upx;
            margin-bottom:20upx;
         }
       }      
     }
  }
  
  .recommendBox{
    display:flex;
    flex-direction:column;
    justify-content:center;
    
    .recommend-info{
      display:flex;
      justify-content:center;
      align-items:center;
      height:80upx;
      .recommend-info-title{
        margin-left:20upx;
      }
    }
    .recommend-goods{
      padding:0 30upx;
      display:flex;
      justify-content:space-between;
      flex-wrap: wrap;

      .goodLi {
      	width: 48%;
      	overflow: hidden;
      	background: white;
      	margin-bottom: 20upx;
      	border-radius: 20upx;
      	box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);
      
      	.goodImg {
      		padding: 5% 5% 0;
      		box-sizing: border-box;
      		overflow: hidden;
      	}
      
      	.goodTips {
      		height: 200upx;
      		display: flex;
      		flex-direction: column;
      		justify-content: space-between;
      		padding: 5% 5%;
          box-sizing:border-box;
      
      		.tipTop {
      			display: flex;
      			justify-content: space-between;
      			align-items: center;
      
      			.t_top_left {
      				display: flex;
      				align-items: center;
      
      				.tip-text-margin {
      					margin-right: 10upx;
      				}
              
      			}
      
      			.t_top_right {
      				font-size: 22upx;
      				padding: 2upx 10upx;
      				border: 2upx solid rgba(0, 0, 0, 0.1);
      				border-radius: 10upx;
      			}
      		}
      	}
      }
    }
  }

</style>
