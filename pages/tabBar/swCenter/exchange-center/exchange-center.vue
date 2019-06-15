<template>
    <!-- 兑换中心页面-->
	<view class="exchange-center">
    
    <return-nav>
      <text>兑换中心</text>
    </return-nav>
    
    
    <!--账号余额-->
    <view class="accountInfo">
      <view class="account-left">
        <image src="../../../../static/ga005_118.png" mode="widthFix"></image>
        <text class="account-balance">我的余额</text>
      </view>       
    </view>
    
    
    <view class="convertBox">
      
      <view class="convert-info">
        <view class="convert-item">
          <view class="convert-info-packets convert-item-li">
            <text>转换成红包</text>
            <input type="text" value="" />
          </view>
          <view class="convert-info-password convert-item-li">
            <text>二级密码</text>
            <input type="password" value="" />
          </view>
           <text class="convert-tips">
             每日钱包最高兑换金额以转入钱包的总金额为准
           </text>
        </view> 
      </view>
      
      <button type="primary" class="convert-btn">提交</button>
      
    </view>
      
      
    
     <view class="sw-main">
      
      <!-- 资产日志-->
      <view class="assets-log">
        <text>兑换日志</text>
      </view>
    
    
      <!-- 排序列表-->
      <view class="sortBox">
        <view class="sort-item">
          <text>分类</text>
          <image src="../../../../static/ga005_68.png" mode="widthFix"></image>
        </view>
        <view class="sort-item">
          <text>日期</text>
          <image src="../../../../static/ga005_68.png" mode="widthFix"></image>
        </view>
        <view class="sort-item">
          <text>排序</text>
          <image src="../../../../static/ga005_68.png" mode="widthFix"></image>
        </view>
      </view>
      
      <!-- 信息列表-->
      <view class="uni-list">
      	<view class="uni-list-cell" hover-class="uni-list-cell-hover" >
      		<view class="uni-media-list">
      			<view class="uni-media-list-logo">
      				<image  src="../../../../static/ga005_119.png" mode="widthFix" ></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
        			<image  src="../../../../static/ga005_119.png" mode="widthFix"></image>
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
				
			};
		}
	}
</script>

<style lang="scss" scoped>

  /* 账号信息样式 */
  .accountInfo {
    background: white;
    box-sizing: border-box;
    padding: 30upx 40upx;
    display: flex;
    justify-content:center;
    align-items:center;
    margin:10upx 0;
    .account-left {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      image {
        width:160upx;
      }
      .account-balance {
        position: absolute;
        font-size: 20upx;
        top: 100upx;
      }
    }   
  }
  
  /* 红包转换盒子的样式*/
  .convertBox{
    padding:0 1% 20upx;
    .convert-info{
      background:white;
      padding:40upx 0;
      .convert-item{
        width:80%; 
        margin:0 auto;
        .convert-item-li{
            padding:20upx 0 20upx;
            font-size:32upx;
             input{
               background:#E7E4E2;
               height:70upx;
               margin-top:20upx;
               padding-left:5px;
               box-sizing:border-box;
             }
          } 
          .convert-tips{
            font-size:20upx;
            &::before{
              content:".";
              display:inline; 
              position:relative;
              top:-10upx;
            }
          }
        }  
      }     
    .convert-btn{
      margin:40upx auto;
      width:400upx;
      font-size:30upx;
      background:#41A069;
      letter-spacing:10px;
    }
  }
  
  
  .sw-main {
    box-sizing:borde-box;
    padding: 0 1%;
    
    .assets-log{
      background:#E6E6E6;
      height:70upx;
      line-height:70upx;
      font-size: 28upx;
      margin-bottom:10upx;
      text-align:center;
      
    }   
  
    /* 排序列表样式*/
    .sortBox {
      box-sizing: border-box;
      padding: 16upx 30upx;
      display: flex;
      justify-content: space-between;
      background: white;
  
      .sort-item {
        font-size:28upx;
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
      margin-top:8upx;
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
          height:60upx;
        }
        
        .uni-media-list-text-top{
          font-size:22upx;
        }
        
        .uni-media-list-text-bottom{
          font-size:16upx;
        }
     } 
  }

</style>
