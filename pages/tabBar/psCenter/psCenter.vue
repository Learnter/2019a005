<template>
	<view>
    <view class="headBg">
      <image src="../../../static/ga005_26.png" mode="widthFix" ></image>
      <image class="bgImage" src="../../../static/ga005_125.png" mode="widthFix" ></image>
      <view class="useInfo">
        <view class="info-left">
           <image class="use-logo" src="" mode=""></image>
           <view class="text-big">
             <p class="use-phone">账号:<text>123456789</text></p>
             <p>[会员]<text class="textColor">[推荐码]</text></p>
           </view>
        </view>
       
        <view class="info-right">
            <image src="../../../static/ga005_91.png" mode="widthFix" style="width:60upx;" ></image>
            <p class="textColor text-small">客服</p>
        </view>
      </view>
      <view class="userBox">
        <view class="useLeft">
          <text>注册会员</text>
          <text>马上抽取加速红包</text>
        </view>
        
        <view class="useRight">
           <text>立刻领取
              <image src="../../../static/ga005_128.png" mode="widthFix" style="width:8upx;margin-left:10upx"></image>
           </text>
        </view>  
      </view>
    </view>
    <view class="ps_main">
         <view class="orders">
           <view class="order-item" >
            <view class="item-left">
              <view class="left-li">
                <image src="../../../static/ga005_92.png" mode="widthFix" style="width:50upx;"></image>
                <p>待付款</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_93.png" mode="widthFix" style="width:50upx;"></image>
                <p>待发货</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_95.png" mode="widthFix" style="width:50upx;"></image>
                <p>待收货</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_96.png" mode="widthFix" style="width:50upx;"></image>
                <p>待评价</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_97.png" mode="widthFix" style="width:50upx;"></image>
                <p>已完成</p>
              </view>
            </view>
             
             <view class="item-right">
               <image src="../../../static/ga005_98.png"  style="width:20upx;height:100upx;"></image>
               <view class="right-logo">
                  <image src="../../../static/ga005_99.png" mode="widthFix"></image>
                  <p>我的订单</p>
               </view>
             </view>
           </view>
           
           <view class="order-item" >
            <view class="item-left">
              <view class="left-li">
                <image src="../../../static/ga005_92.png" mode="widthFix" style="width:50upx;"></image>
                <p>总资产</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_93.png" mode="widthFix" style="width:50upx;"></image>
                <p>日收入</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_95.png" mode="widthFix" style="width:50upx;"></image>
                <p>月收入</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_96.png" mode="widthFix" style="width:50upx;"></image>
                <p>总收入</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_97.png" mode="widthFix" style="width:50upx;"></image>
                <p>余额</p>
              </view>
            </view>
             
             <view class="item-right">
               <image src="../../../static/ga005_98.png"  style="width:20upx;height:100upx;"></image>
               <view class="right-logo">
                  <image src="../../../static/ga005_100.png" mode="widthFix"></image>
                  <p>我的钱包</p>
               </view>
             </view>
           </view>
           
           <view class="order-item" >
            <view class="item-left">
              <view class="left-li">
                <image src="../../../static/ga005_101.png" mode="widthFix" style="width:50upx;"></image>
                <p>兑换</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_102.png" mode="widthFix" style="width:50upx;"></image>
                <p>交换</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_103.png" mode="widthFix" style="width:50upx;"></image>
                <p>银行卡</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_104.png" mode="widthFix" style="width:50upx;"></image>
                <p>收款码</p>
              </view><view class="left-li">
                <image src="../../../static/ga005_105.png" mode="widthFix" style="width:50upx;"></image>
                <p>转账</p>
              </view>
            </view>
             
             <view class="item-right">
               <image src="../../../static/ga005_98.png"  style="width:20upx;height:100upx;"></image>
               <view class="right-logo">
                  <image src="../../../static/ga005_106.png" mode="widthFix"></image>
                  <p>我的账单</p>
               </view>
             </view>
           </view>
         </view>
         <view>
           B
         </view>
         <view>
           C
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
<style lang="scss">
   
  .headBg{
    position:absolute;
    left:0;
    top:0;
    right:0;
    z-index:2;
    image{
      width:100%;
    } 
    .bgImage{
     width:102%;
     position:absolute;
     left:-1%;
     right:-1%;
     bottom:-1%;
     z-index:1;
    }
    .userBox{
      background:#C98631;
      position:absolute;
      bottom:0;
      width:90%;
      height:120upx;
      display:flex;
      justify-content:space-between;
      padding:30upx 40upx 0;
      box-sizing:border-box;
      left:50%;
      transform:translateX(-50%);
      border-radius:20upx;
      font-weight:500;
      .useLeft{
        text{
          padding: 0 10upx;
          color:white;
          &:nth-child(1){
            border-right:4upx solid white;
          }
        } 
      }
      .useRight{
        text{
          color:#FF6100;
          padding:0 20upx;
          border-radius:20upx;
          background:white;
          
        }
      }
    }
    .useInfo{
      position:absolute;
      width:90%;
      top:150upx;
      left:50%;
      transform:translateX(-50%);
      display:flex;
      justify-content:space-between;
      align-items:center;
      .textColor{
        color:white;
      }
      .text-big{
        font-size:32upx;
      }
      .text-small{
        font-size:16upx;
      }
      
      .info-left{
        display:flex;
        align-items:center;
        .use-logo{
           width:120upx;
           height:120upx;
           background:#E6E6E6;
           border-radius:50%;
           margin-right:40upx;
        }
        .use-phone{
          margin-bottom:20upx;
        }
      }
      
      .info-right{
        display:flex;
        flex-direction:column;
        align-items:center;
        image{
         width:40upx;
         height:40upx;
         border-radius:border-box;
         margin-bottom:10upx;
        }
      } 
    }
  } 
  .ps_main{
    padding:500upx 16upx 0;
    .orders{
      .order-item{
        display:flex;
        box-sizing: border-box;
        padding: 30upx 20upx 10upx 20upx;
        margin-bottom:20upx;
        background:white;
        border-radius:20upx;
        box-shadow: 0 0 10upx rgba(0,0,0,0.2);
        .item-left{
          width:78%;
          height:120upx;
          display:flex;
          justify-content:space-around;
          box-sizing: border-box;
          padding-top: 10upx;
          
          .left-li{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            font-size:18upx;
            color:#C1C1C1;
          }
        }
        .item-right{
          width:22%;
          height:100upx;
          display:flex;
          justify-content:space-between;
          .right-logo{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center; 
            box-sizing:border-box;
            padding-top:16upx;
            font-size:24upx;
            image{
              width:40upx;
            }
          }
        }
      }
    } 
  }
</style>
