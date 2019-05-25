<template>
  <view class="homeBox">
                                
    <view class="home-head"> <!-- 首页头部 -->
      <view class="bgImage">
        <image src="../../../static/2019_a005_26.png"  mode="widthFix"></image>
      </view>
      <view class="contentBox">
        <view class="con_text">
          <text>OPAY</text>
          <view class="con_buttom">
            <!-- <img src="../../../static/2019_a005_27.png" alt="加载失败"> -->
            <view class="conImg">
              <image src="../../../static/2019_a005_27.png" mode="widthFix"></image>
            </view>
          </view>
        </view>
      </view>
    </view>
    
     <!-- 首页内容区 -->
    <view class="home-main">  
    
      <view class="bannerBox">  <!-- 轮播组件 -->
        <uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles">
          <swiper class="swiper-box" @change="change" autoplay="true" circular="true">
            <swiper-item v-for="(item ,index) in info" :key="index">
              <view :class="item.colorClass" class="swiper-item">
                <image :src="item.url" mode="aspectFill" style="width:100%;" />
              </view>
            </swiper-item>
          </swiper>
        </uni-swiper-dot>
      </view>
      
      <view class="iconBox"><!-- 分类区 -->
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_28.png" alt="加载失败">
          </view>
          <text>会员</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_29.png" alt="加载失败">
          </view>
          <text>女装</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_30.png" alt="加载失败">
          </view>
          <text>男装</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_31.png" alt="加载失败">
          </view>
          <text>母婴</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_32.png" alt="加载失败">
          </view>
          <text>食品</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_33.png" alt="加载失败">
          </view>
          <text>百货</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_34.png" alt="加载失败">
          </view>
          <text>手机</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_35.png" alt="加载失败">
          </view>
          <text>电器</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_36.png" alt="加载失败">
          </view>
          <text>家居</text>
        </view>
        <view class="iconli">
          <view class="iconImg">
            <img src="../../../static/2019_a005_37.png" alt="加载失败">
          </view>
          <text>其他</text>
        </view>
      </view>
      
      <view class="noticeBox"> <!-- 公告栏 -->
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
      
      <view class="seckill"> <!-- 秒杀区 -->
        <view class="s_title">
          <text>秒杀精品</text>
          <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
        </view>
        <view class="s_list">
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <span>￥2000</span>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <text>￥2000</text>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <text>￥2000</text>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <text>￥2000</text>
            <del>￥100000</del>
          </view>
        </view>
      </view>
      
      <view class="seckill"> <!-- 发现区 -->
        <view class="s_title">
          <text>发现好货</text>
          <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
        </view>
        <view class="s_list">
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <span>￥2000</span>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <text>￥2000</text>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <text>￥2000</text>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <text>￥2000</text>
            <del>￥100000</del>
          </view>
        </view>
      </view>
      
      <view class="seckill"> <!-- 礼包专区 -->
        <view class="s_title">
          <view class="titleList">
            <view class="list_Top">
              <view class="top_Teft">
                <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
                <text>礼包专区</text>
              </view>
              <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
            </view>
            <p>天天换礼品</p>
          </view>
          <view class="titleList">
            <view class="list_Top">
              <view class="top_Teft">
                <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
                <text>红包专区</text>
              </view>
              <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
            </view>
            <p>日日有红包</p>
          </view>
        </view>
        <view class="s_list">
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <view class="giftImg">
              <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
              <span>￥2000</span>
            </view>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <view class="giftImg">
              <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
              <span>￥2000</span>
            </view>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <view class="giftImg">
              <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
              <span>￥2000</span>
            </view>
            <del>￥100000</del>
          </view>
          <view class="s_li">
            <image src="../../../static/ga005_38.png" class="fImg"></image>
            <view class="giftImg">
              <image src="../../../static/2019_a005_43.png" mode="widthFix" class="moreIcon"></image>
              <span>￥2000</span>
            </view>
            <del>￥100000</del>
          </view>
        </view>
      </view>


      <view class="pitureBox"> <!-- 广告区 -->
        <image src="../../../static/ga005_50.png" mode="widthFix"></image>
      </view>


      <view class="goodsBox">  <!-- 商品列表区 -->
        <view class="goodLi">
          <view class="goodImg">
            <image src="../../../static/ga005_53.png" mode="widthFix"></image>
          </view>
          <view class="uni-bg-green" style="height:20upx;">
          </view>
          <view class="goodTips">
            <text>标题.....</text>
            <view>
              <view class="tipTop">
                <view class="t_top_left">
                  <text>￥200</text>
                  <text>秒杀</text>
                </view>
                <view class="t_top_right">
                  <text>购买</text>
                </view>
              </view>
              <del>￥1000</del>
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
            <text>标题.....</text>
            <view>
              <view class="tipTop">
                <view class="t_top_left">
                  <text>￥200</text>
                  <text>秒杀</text>
                </view>
                <view class="t_top_right">
                  <text>购买</text>
                </view>
              </view>
              <del>￥1000</del>
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
            <text>标题.....</text>
            <view>
              <view class="tipTop">
                <view class="t_top_left">
                  <text>￥200</text>
                  <text>秒杀</text>
                </view>
                <view class="t_top_right">
                  <text>购买</text>
                </view>
              </view>
              <del>￥1000</del>
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
            <text>标题.....</text>
            <view>
              <view class="tipTop">
                <view class="t_top_left">
                  <text>￥200</text>
                  <text>秒杀</text>
                </view>
                <view class="t_top_right">
                  <text>购买</text>
                </view>
              </view>
              <del>￥1000</del>
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
          dotsStyles:{
            backgroundColor: 'rgba(83, 200, 249,0.3)',
            border: '1px rgba(83, 200, 249,0.3) solid',
            color: '#fff',
            selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
            selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
            width:10,
            height:2
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
  .homeBox {
    background: #F7F7F7;
    width: 100%;
    min-height: 100%;
    color: #4F4F4F;
    overflow-y: scroll;

    .home-head {
      width: 100%;
      height:250px;
      position: relative;
      .bgImage{
        height:100%;
        overflow:hidden;
        image{
          height:100%;
          width:100%;
        }
      }
      .contentBox {
        position: absolute;
        left: 0;
        top: 50px;
        right: 0;

        .con_text {
          padding: 0 15px;
          color: white;

          .con_buttom {
            background-color: white;
            width: 100%;
            box-sizing: border-box;
            padding: 5px 0 5px 10px;
            height: 50upx;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-radius: 10px;
            margin-top: 20px;
           .conImg{
             height:20px;
             width:20px;
             image{
               width:100%;
             }
            }
          }
        }
      }
    }

    .home-main {
      padding: 0 15px;
      
      .bannerBox{
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,0.8);
        margin-bottom: 10px;
        margin-top: -120px;
      }

      /*分类样式 */
      .moreIcon {
        width: 40upx;
        padding: 2px 8px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 5px;
      }
      .iconBox {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 8px;

        .iconli {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 8px;

          .iconImg {
            width: 80upx;
            height: 80upx;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;

            img {
              height: 100%;
            }
          }
        }
      }

      /* 公告栏样式 */
      .noticeBox {
        margin-bottom: 5px;

        .uni-swiper-msg {
          background: white;
          display: flex;
          align-items: center;
          overflow: hidden;
          box-sizing: border-box;
          border-radius: 10px 10px 0 0;
          padding-left: 15px;
        }
      }

      
      .seckill {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 10px 15px;
        margin-bottom: 8px;

        .s_title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3px;

          text {
            font-size: 15px;
            font-weight: 700;
          }

          .titleList {
            width: 49%;
            display: flex;
            flex-direction: column;

            p {
              font-size: 8px;
            }

            .list_Top {
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
            display: flex;
            flex-direction: column;
            font-size: 4px;
            line-height:1.2;

            del {
              color: rgba(0, 0, 0, 0.2);
            }

            .giftImg {
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }

            .fImg {
              width: 100%;
              height: 170upx;
              border: 1px solid rgba(0, 0, 0, 0.1);
              box-sizing: border-box;
              margin-bottom: 3px;
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
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

          .goodImg {
            padding: 5% 5% 0;
            box-sizing: border-box;
            overflow: hidden;

            image {
              width: 100%;
            }
          }

          .goodTips {
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5% 5%;

            .tipTop {
              display: flex;
              justify-content: space-between;

              .t_top_right {
                font-size: 1px;
                padding: 0 5px;
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 5px;
              }
            }
          }
        }

      }
    }
  }
</style>
