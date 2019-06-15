<template>
	<!-- 用户订单页面-->
	<view class="user-orders">

		<!-- <return-nav>
      <text>我的订单</text>
    </return-nav> -->
		<view class="order-navs">
			<view class="order-nav-item" :class="selected == item.value ? 'selected':''" v-for="(item,index) in orderStatus"
			 :key="index" @tap="toggleTab(item)">
				<text>{{item.name}}</text>
			</view>
		</view>

		<view class="orderBox">
			
			<view class="order-detail">

				<view class="not-order" v-if="orderList.length == 0">
					<image class="not-order-image" src="../../../../static/ga005_67.png" mode="widthFix"></image>
					<text>您目前还没有订单哦!</text>
				</view>

				<view class="mechantLst " v-for="(item,index) in orderList" :key="index"@tap.stop="orderDetal(item)">
					<view class="sactioncoTl uni-flex ">
						<view class="uni-flex-item">订单号：{{item.order_sn}}</view>
					</view>
					<view class="sactioncoztBox uni-flex">
						<view class="uni-flex-item">
							<view class="sactioncozttx">状态：
								<span class="span_1">{{item.status.name}}</span> </view>
							<view class="sactioncoztzj">总价：￥{{item.order_amount}}</view>
						</view>
						<view class="sactioncoztczBox">
							<view class="sactioncoztczBox" v-if="item.status.value === 1">
								<button class="btn" @tap.stop="payment(item)">去支付</button>
								<button class="btn" @tap.stop="cancleOrder(item)">取消订单</button>
							</view>
							<view class="sactioncoztczBox" v-if="item.status.value === 3" @tap.stop="confirmOrder(item)">
								<button class="btn">确认收货</button>
							</view>
							<view class="sactioncoztczBox" v-if="item.status.value === 9">
								<button class="btn">已完成</button>
							</view>
						</view>
					</view>
					<view class="uni-flex sactionsp" v-for="(childItem,childIndex) in item.goods_list" :key="childIndex">
						<view class="sactionspimage likeA">
							<image :src="childItem.picture" alt=""></image>
						</view>
						<view class="uni-flex-item">
							<view class="textove2 uni-flex-item">
								{{childItem.goods_name}}</view>
							<view class="uni-flex">
								<view class="sactionspms uni-flex-item">x{{childItem.goods_num}}</view>
								<view class="sactioncoztczBox" v-if="item.status.value === 6">
									<button class="btn">去评价</button>
								</view>
							</view>
						</view>
					</view>
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
					<view class="goodimage">
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
					<view class="goodimage">
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
				page: 1, //页码
				rows: 10, //每页显示的数量
				selected: 0, //选中导航的value值
				orderList: [], //订单列表的数据
				orderStatus: [], //导航栏的数据
			};
		},
		onLoad() {
			this.fetchData();
			this.fetchOrderList();
		},
		methods: {
			//获取导航状态栏信息
			fetchData() {
				let url = "order/orderStatus";
				this.$Request.get(url).then(res => {
					if (res && res.code == 200) {
						this.orderStatus = res.data;
					}
				})
			},
			//获取订单列表信息
			fetchOrderList() {
				let url = "order/orderList";
				let data = {
					status: this.selected,
					page: this.page,
					rows: this.rows
				}
				this.$Request.get(url, data).then(res => {
					if (res && res.code == 200) {
						this.orderList = res.data;
						// console.log(this.orderList);
					}
				})
			},
			//切换导航按钮
			toggleTab(item) {
				this.selected = item.value;
				this.fetchOrderList();
			},
			//确认收货
			confirmOrder(item) {

				let url = "order/confirmReceipt";
				let data = {
					id: item.order_id
				}
				this.$Request.post(url, data).then(res => {
					if (res && res.code === 200) {
						this.fetchOrderList();
					}
				})
			},
			//去支付页面
			payment(item) {

				let orderId = item.order_id;

				uni.navigateTo({
					url: "/pages/tabBar/shCart/payment/payment?orderId=" + orderId
				})

			},
      //去订单详情页
      orderDetal(item){
        
         let orderId = item.order_id;
         
        	uni.navigateTo({
            url: "/pages/tabBar/shCart/user-orders/orderDetails/orderDetails?orderId=" + orderId
        })
      },
			//取消订单
			cancleOrder(item) {

				uni.showModal({
					title: "温馨提示",
					content: "您确定要取消吗？",
					success: (res) => {
						if (res.confirm) {
							let url = "order/cancelOrder";
							let data = {
								"id": item.order_id
							};
							this.$Request.post(url, data).then(res => {
								if(res && res.code === 200){
									this.fetchOrderList();
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		margin-top: 0upx;
		position: relative;
	}
	
	.order-navs {
		position:fixed;
		width:100%;
		z-index:999;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: white;
		height: 80upx;
		line-height: 80upx;
		margin-bottom: 10upx;
		border-top:4upx solid rgba(0,0,0,0.1);
		.order-nav-item {
			padding: 10upx 0;
		}
	
		.selected {
			border-bottom: 4upx solid green;
		}
	}

	.orderBox {
		overflow: hidden;
		padding-top:90upx;
		.order-detail {
			position:relative;
			width: 96%;
			margin: 0 auto;
			min-height: 500upx;
			overflow: auto;
			.not-order {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #C2BEBE;
				font-size: 32upx;

				.not-order-image {
					width: 200upx;
					margin-bottom: 20upx;
				}
			}

			.mechantLst {
				background: #ffffff;
				border-radius: 4upx;
				margin-bottom: 10px;
				padding: 10upx 20upx;
				color: #333333;
				border: 1px solid #F1F1F1;
        
				.span_1 {
					color: #00d693;
				}

				.sactioncoTl {
					font-size: 0.9em;
					padding: 16upx 0px;
					border-bottom: 1px solid #F1F1F1;
					line-height: 44upx;
				}

				.sactioncoztBox {
					border-bottom: 1px solid #F1F1F1;
					font-size: 0.9em;
					padding: 20upx 0px;

					.sactioncoztzj {
						margin-top: 10upx;
					}
				}

				.sactionsp {
					margin: 20upx 0px;
					font-size: 0.8em;

					.sactionspimage {
						width: 150upx;
						height: 150upx;
						margin-right: 20upx;
						overflow: hidden;
						border: 1px solid #F1F1F1;
					}

					.textove2 {
						overflow: hidden;
						text-overflow: ellipsis;
						word-break: break-all;
					}

					.sactionspms {
						margin-top: 6upx;
					}
				}
			}
		}

		/* 右侧按钮的样式*/
		.sactioncoztczBox {
			display: flex;
			align-items: center;

			.btn {
				width: 150upx;
				height: 40upx;
				line-height: 40upx;
				padding: 0 10upx;
				font-size: 28upx;
				background: white;
				color: #00d693;

				&::after {
					border: 1px solid #00d693;
				}

				&:nth-child(2) {
					margin-left: 10upx;
				}
			}
		}
	}

	.recommendBox {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 94%;
		margin: 0 auto;

		.recommend-info {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;

			.recommend-info-title {
				margin-left: 20upx;
			}
		}

		.recommend-goods {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.goodLi {
				width: 48%;
				overflow: hidden;
				background: white;
				margin-bottom: 20upx;
				border-radius: 20upx;
				box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);

				.goodimage {
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
					box-sizing: border-box;

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
