<template>
	<view>
   <!-- <return-nav>
      <text>确认付款</text>
    </return-nav> -->
		<view class="block">
			<view class="content">
				<view class="orderinfo">
					<view class="row">
						<view class="nominal">订单金额:</view><view class="text">{{orderInfo.orderAmount}}元</view>
					</view>
          <view class="row">
          	<view class="nominal">订单名称:</view><view class="text">{{orderInfo.orderSn}}</view>
          </view>
          <view class="row">
          	<view class="nominal">生成时间:</view><view class="text">{{orderInfo.add_time}}</view>
          </view>
				</view>
			</view>
		</view>
		<view class="block">
			<view class="title">
				选择支付方式
			</view>
			<view class="content">
				<view class="pay-list">
					<view class="row"  v-for="(item,index) in payMethodsInfo" :key="index">
							<view class="left">
								<image :src="item.logo"></image>
							</view>
							<view class="center" v-if="item.amount">
								<view class="nominal">余额:</view><view style="margin-left:10upx;color:#00d693">{{item.amount}}</view>
							</view>
							<view class="right" @tap="payType = item.type">
								<radio :checked="payType == item.type" color="#f06c7a" />
							</view>
					</view>
				</view>
			</view>
      <view class="findPswordinput">
         <input class="finInput" type="password" v-model="passWord"  placeholder="请输入支付密码"/>
      </view>
		</view>
		<view class="pay">
			<view class="btn" @tap="doDeposit">立即支付</view>
			<view class="tis">
				点击立即支付，即代表您同意<view class="terms">
					《条款协议》
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        orderInfo:"",//订单信息
        payMethodsInfo:"",//支付方式信息
        passWord:"", //支付密码
        payType:"" //支付类型
			};
		},
		onLoad(e){
      this.fetchOrderInfo(e);
      this.payMethods();
		},
		methods:{
      //获取订单信息
      fetchOrderInfo(e){
		  
        let url = "order/payOrderInfo";
        let data = {}
		
		//判断传入的订单号，还是订单id;
		e.orderSn ? data["master_order_sn"] = e.orderSn : data["order_id"] = e.orderId;
		
        this.$Request.get(url,data).then( res => {
          if(res && res.code == 200){
            this.orderInfo = res.data;
          }
        })
      },
      //获取支付方式
      payMethods(){
        let url = "order/payMethod";
        this.$Request.get(url).then( res => {
          if(res && res.code == 200){
            // console.log(res);
            this.payMethodsInfo = res.data;
          }
        })
      },
      //支付订单
			doDeposit(){
        if(!this.payType){
          uni.showModal({
            content:"请选择支付方式",
            showCancel:false
          })
          return;
        }else if(this.passWord.trim().length == 0){
           uni.showModal({
            content:"请输入密码",
            showCancel:false
          })
          return;
        }
        
        let url = "order/payOrder";
        let data = {
          "master_order_sn":this.orderInfo.orderSn,
          "pay_password":this.passWord,
          "pay_type":this.payType,
        }
        this.$Request.post(url,data).then(res => {
              uni.showToast({
                icon:"none",
                title:res.msg
              })
           if(res && res.code == 200){
             setTimeout(function(){
               uni.redirectTo({
                 url: '/pages/tabBar/shCart/user-orders/user-orders'
               });
             },1000) 
           }
        })
			}
		}
	}
</script>

<style lang="scss" scoped>

.block{
		width: 94%;
		padding: 0 3% 40upx 3%;
    background:white;
    margin-top:10upx;
		.title{
			width: 100%;
			font-size: 34upx;
		}
		.content{
			.orderinfo{
				width: 100%;
				border-bottom: solid 1upx #eee;
				.row{
					width: 100%;
					height: 80upx;
					display: flex;
					align-items: center;
					.nominal{
						flex-shrink: 0;
						font-size: 32upx;
						color: #7d7d7d;
					}
					.text{
						width: 70%;
						margin-left: 10upx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						font-size: 32upx;
					}
				}
			}
			.pay-list{
				width: 100%;
				border-bottom: solid 1upx #eee;
				.row{
					width: 100%;
					height: 120upx;
					display: flex;
					align-items: center;
					.left{
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						align-items: center;
						image{
							width: 80upx;
							height: 80upx;
						}
					}
					.center{
						width: 100%;
						font-size: 30upx;
            display:flex;
            align-items:center;
					}
					.right{
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						justify-content: flex-end;
					}
				}
			}
		}
    .findPswordinput{
      display:flex;
      align-items:center;
      .finInput{
        flex:1;
        padding: 0upx 20upx;
        margin: 0upx;
        height: 76upx;
        line-height: 76upx;
        font-size: 14upx;
        color: #333333;
        border: 1px solid #F1F1F1;
        background: #ffffff;
      } 
    }   
	}
	.pay{
		margin-top: 20upx;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.btn{
			width: 70%;
			height: 80upx;
			border-radius: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: #f06c7a;
			box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.2);
		}
		.tis{
			margin-top: 10upx;
			width: 100%;
			font-size: 24upx;
			display: flex;
			justify-content: center;
			align-items: baseline;
			color: #999;
			.terms{
				color: #5a9ef7;
			}
		}
	}
</style>
