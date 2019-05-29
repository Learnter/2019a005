<template>
	<view class="homePage">

		<view class="headBox">
			<!-- 首页头部 -->
			<image class="bgImage" src="../../../static/ga005_26.png" mode="widthFix"></image>
			<view class="contentBox">
				<view class="con_text">
					<!-- <text>OPAY</text> -->
					<h2>OPAY</h2>
					<view class="con_buttom">
						<view class="conImg">
							<image src="../../../static/2019_a005_27.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 首页内容区 -->
		<view class="home-main">

			<view class="bannerBox">
				<!-- 轮播组件 -->
				<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles">
					<swiper class="swiper-box" @change="change" autoplay="true" circular="true">
						<swiper-item v-for="(item ,index) in info" :key="index">
							<view :class="item.colorClass" class="swiper-item">
								<image :src="item.url" mode="widthFix" style="width:100%" />
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>

			<view class="iconBox">
				<!-- 分类区 -->
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_28.png" mode="widthFix"></image>
					</view>
					<text>会员</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_29.png" mode="widthFix"></image>
					</view>
					<text>女装</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_30.png" mode="widthFix"></image>
					</view>
					<text>男装</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_31.png" mode="widthFix"></image>
					</view>
					<text>母婴</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_32.png" mode="widthFix"></image>
					</view>
					<text>食品</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_33.png" mode="widthFix"></image>
					</view>
					<text>百货</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_34.png" mode="widthFix"></image>
					</view>
					<text>手机</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_35.png" mode="widthFix"></image>
					</view>
					<text>电器</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_36.png" mode="widthFix"></image>
					</view>
					<text>家居</text>
				</view>
				<view class="iconli">
					<view class="iconImg">
						<image src="../../../static/2019_a005_37.png" mode="widthFix"></image>
					</view>
					<text>其他</text>
				</view>
			</view>

			<view class="noticeBox">
				<!-- 公告栏 -->
				<view class="uni-swiper-msg">
					<view class="uni-swiper-msg-icon">
						<image src="../../../static/2019_a005_39.png" mode="widthFix" style="width:40upx;"></image>
					</view>
					<swiper vertical="true" autoplay="true" circular="true" interval="3000">
						<swiper-item v-for="(item, index) in msg" :key="index">
							<navigator>{{item}}</navigator>
						</swiper-item>
					</swiper>
				</view>
			</view>

			<view class="seckill">
				<!-- 秒杀区 -->
				<view class="s_title">
					<h2>秒杀精品</h2>
					<image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
				</view>
        
				<view class="s_list">
					<view class="s_li">
            <view class="s_li_head">
              <image src="../../../static/ga005_38.png" class="fImg"></image>
              <text class="textSize">￥2000</text>
            </view>
            <text class="text-del-style">￥1000</text>
					</view>
          
          
					<view class="s_li">
					  <view class="s_li_head">
					    <image src="../../../static/ga005_38.png" class="fImg"></image>
					    <text class="textSize">￥2000</text>
					  </view>
					  <text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
					  <view class="s_li_head">
					    <image src="../../../static/ga005_38.png" class="fImg"></image>
					    <text class="textSize">￥2000</text>
					  </view>
					  <text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
					  <view class="s_li_head">
					    <image src="../../../static/ga005_38.png" class="fImg"></image>
					    <text class="textSize">￥2000</text>
					  </view>
					  <text class="text-del-style">￥1000</text>
					</view>
				</view>
			</view>

			<view class="seckill">
				<!-- 发现区 -->
				<view class="s_title">
					<h2>发现好货</h2>
					<image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
				</view>
				<view class="s_list">
					<view class="s_li">
					  <view class="s_li_head">
					    <image src="../../../static/ga005_38.png" class="fImg"></image>
					    <text class="textSize">￥2000</text>
					  </view>
					  <text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
					  <view class="s_li_head">
					    <image src="../../../static/ga005_38.png" class="fImg"></image>
					    <text class="textSize">￥2000</text>
					  </view>
					  <text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
					  <view class="s_li_head">
					    <image src="../../../static/ga005_38.png" class="fImg"></image>
					    <text class="textSize">￥2000</text>
					  </view>
					  <text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
					  <view class="s_li_head">
					    <image src="../../../static/ga005_38.png" class="fImg"></image>
					    <text class="textSize">￥2000</text>
					  </view>
					  <text class="text-del-style">￥1000</text>
					</view>
				</view>
			</view>

			<view class="seckill">
				<!-- 礼包专区 -->
				<view class="s_title">
					<view class="titleList">
						<view class="list_Top">
							<view class="top_Teft">
								<image src="../../../static/ga005_48.png" mode="widthFix" class="tickets-Icon"></image>
								<h2>礼包专区</h2>
							</view>
							<image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
						</view>
						<p style="color:red;" class="tickets-p">天天换礼品</p>
					</view>
					<view class="titleList">
						<view class="list_Top">
							<view class="top_Teft">
								<image src="../../../static/ga005_49.png" mode="widthFix" class="tickets-Icon"></image>
								<h2>红包专区</h2>
							</view>
							<image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
						</view>
						<p style="color:green" class="tickets-p">日日有红包</p>
					</view>
				</view>
				<view class="s_list">
					<view class="s_li">
						<image src="../../../static/ga005_38.png" class="fImg"></image>
						<view class="giftImg">
							<image src="../../../static/ga005_48.png" mode="widthFix" class="tickets-Icon"></image>
							<text class="textSize">￥2000</text>
						</view>
						<text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
						<image src="../../../static/ga005_38.png" class="fImg"></image>
						<view class="giftImg">
							<image src="../../../static/ga005_48.png" mode="widthFix" class="tickets-Icon"></image>
							<text class="textSize">￥2000</text>
						</view>
						<text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
						<image src="../../../static/ga005_38.png" class="fImg"></image>
						<view class="giftImg">
							<image src="../../../static/ga005_49.png" mode="widthFix" class="tickets-Icon"></image>
							<text class="textSize">￥2000</text>
						</view>
						<text class="text-del-style">￥1000</text>
					</view>
					<view class="s_li">
						<image src="../../../static/ga005_38.png" class="fImg"></image>
						<view class="giftImg">
							<image src="../../../static/ga005_49.png" mode="widthFix" class="tickets-Icon"></image>
							<text class="textSize">￥2000</text>
						</view>
						<text class="text-del-style">￥1000</text>
					</view>
				</view>
			</view>


			<view class="pitureBox">
				<!-- 广告区 -->
				<image src="../../../static/ga005_50.png" mode="widthFix"></image>
			</view>


			<view class="goodsBox">
				<!-- 商品列表区 -->
				<view class="goodLi">
					<view class="goodImg">
						<image src="../../../static/ga005_53.png" mode="widthFix"></image>
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
						<image src="../../../static/ga005_53.png" mode="widthFix"></image>
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
						<image src="../../../static/ga005_53.png" mode="widthFix"></image>
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
						<image src="../../../static/ga005_53.png" mode="widthFix"></image>
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
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'

	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				msg: [
					"公告A",
					"公告B",
					"公告C"
				],
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				mode: 'long',
				dotsStyles: {
					backgroundColor: 'rgba(83, 200, 249,0.3)',
					border: '1px rgba(83, 200, 249,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
					selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
					width: 10,
					height: 2
				}
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			}
		},
		components: {
			uniSwiperDot
		}
	}
</script>

<style lang="scss">
  
	.tickets-p {
		margin-top: 20upx;
		margin-bottom: 10upx;
		font-size: 22upx;
	}

	.textSize {
		font-size: 26upx;
	}

	.tickets-Icon {
		width: 30upx;
		margin-right: 6upx;
	}

	.headBox {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		width: 100%;

		.bgImage {
			width: 100%;
			z-index: 1;
		}

		.contentBox {
			position: absolute;
			left: 0;
			top: 100upx;
			right: 0;
			z-index: 2;

			.con_text {
				padding: 0 30upx;
				color: white;

				.con_buttom {
					background-color: white;
					width: 100%;
					box-sizing: border-box;
					padding: 10upx 0 10upx 20upx;
					height: 50upx;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					border-radius: 10upx;
					margin-top: 30upx;

					.conImg {
						height: 30upx;
						width: 30upx;
					}
				}
			}
		}
	}

	.home-main {
		padding: 480upx 20upx 0;
		position:relative;
		z-index: 10;

		.bannerBox {
			width: 100%;
			border-radius: 20upx;
			overflow: hidden;
			box-shadow: 0upx 10upx 10upx rgba(0, 0, 0, 0.2);
			margin-bottom: 20upx;
			margin-top: -240upx;

			.swiper-box {
				height: 300upx;
			}
		}

		.iconBox {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 16upx;

			.iconli {
				width: 20%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 16upx;

				.iconImg {
					width: 80upx;
					height: 80upx;
					overflow: hidden;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 10upx;
				}
			}
		}

		/* 公告栏样式 */
		.noticeBox {
			margin-bottom: 10upx;

			.uni-swiper-msg {
				background: white;
				display: flex;
				align-items: center;
				overflow: hidden;
				box-sizing: border-box;
				border-radius: 20upx 20upx 0 0;
				padding-left: 20upx;
			}
		}


		.seckill {
			display: flex;
			flex-direction: column;
			background-color: white;
			padding: 20upx 30upx;
			margin-bottom: 16upx;

			.s_title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10upx;


				.titleList {
					width: 49%;
					display: flex;
					flex-direction: column;

					.list_Top,
					.top_Teft {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				}
			}

			.s_list {
				display: flex;
				justify-content: space-between;
				overflow: hidden;


				.s_li {
					width: 23%; 
          .s_li_head{
            display: flex;
            flex-direction: column;
          }

					.giftImg {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						margin-top: 20upx;
						margin-bottom: 8upx;
					}

					.fImg {
						width: 100%;
						height: 170upx;
						border: 2upx solid rgba(0, 0, 0, 0.1);
						box-sizing: border-box;
						margin-bottom: 6upx;
					}
				}
			}
		}

		/*广告专区*/
		.pitureBox {
			width: 100%;
			margin-bottom: 10upx;

			image {
				width: 100%;
				border-radius: 20upx;
				box-shadow: 0 0 20upx rgba(0, 0, 0, 0.3);
			}
		}

		/*商品列表区 */
		.goodsBox {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.goodLi {
				width: 48%;
				overflow: hidden;
				background: white;
				margin-bottom: 20upx;
				border-radius: 20upx;
				box-shadow: 0 0 20upx rgba(0, 0, 0, 0.3);

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
