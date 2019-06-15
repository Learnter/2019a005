<template>
  <view class="homePage">
    
    <banner-view></banner-view>

    <!-- 首页内容区 -->
    <view class="home-main">

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
              <navigator class="uni-ellipsis">{{item.title}}</navigator>
            </swiper-item>
          </swiper>
        </view>
      </view>

      <view class="seckill">
        <!-- 秒杀区 -->
        <view class="s_title">
          <h2>秒杀精品</h2>
          <navigator url="/pages/category/stGoods/stGoods">
            <image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
          </navigator>
        </view>

        <view class="s_list">
          <view class="s_li" v-for="(item,index) in spikeGoodsList" :key="index">
            <navigator :url="'/pages/category/detail/detail?id='+ item.goods_id ">
              <view class="s_li_head">
                <image lazy-load :src="item.picture" class="fImg"></image>
                <text class="textSize uni-ellipsis">￥{{item.shop_price * 1}}</text>
              </view>
              <text class="text-del-style uni-ellipsis">￥{{item.market_price }}</text>
            </navigator>
          </view>
        </view>
      </view>

      <view class="seckill">
        <!-- 发现区 -->
        <view class="s_title">
          <h2>发现好货</h2>
          <navigator url="/pages/category/stGoods/stGoods">
            <image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
          </navigator>
        </view>
        <view class="s_list">
          <view class="s_li" v-for="(item,index) in goodGoodsList" :key="index">
             <navigator :url="'/pages/category/detail/detail?id='+ item.goods_id ">
              <view class="s_li_head">
                <image lazy-load :src="item.picture" class="fImg"></image>
                <text class="textSize uni-ellipsis">￥{{item.shop_price * 1}}</text>
              </view>
              <text class="text-del-style uni-ellipsis">￥{{item.market_price}}</text>
            </navigator>
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
              <navigator url="/pages/packet/packet">
                <image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
              </navigator>
            </view>
            <p style="color:red;" class="tickets-p">天天换礼品</p>
          </view>
          <view class="titleList">
            <view class="list_Top">
              <view class="top_Teft">
                <image src="../../../static/ga005_49.png" mode="widthFix" class="tickets-Icon"></image>
                <h2>红包专区</h2>
              </view>
              <navigator url="/pages/packet/packet">
                <image src="../../../static/2019_a005_43.png" mode="widthFix" class="more-Icon"></image>
              </navigator>
            </view>
            <p style="color:green" class="tickets-p">日日有红包</p>
          </view>
        </view>

        <view class="s_list">
          <view class="s_list_item">
            <view class="s_item_li" v-for="(item,index) in giftPackageGoodsList" :key="index">
               <navigator :url="'/pages/category/detail/detail?id='+ item.goods_id ">
                <image lazy-load :src="item.picture" class="fImg"></image>
                <view class="giftImg uni-ellipsis">
                  <image src="../../../static/ga005_48.png" mode="widthFix" class="tickets-Icon"></image>
                  <text class="textSize uni-ellipsis">￥{{item.shop_price * 1}}</text>
                </view>
                <text class="text-del-style uni-ellipsis">￥{{item.market_price}}</text>
              </navigator>
            </view>
          </view>
          <view class="s_list_item">
            <view class="s_item_li" v-for="(item,index) in redEnvelopeGoodsList" :key="index">
               <navigator :url="'/pages/category/detail/detail?id='+ item.goods_id ">
                <image lazy-load :src="item.picture" class="fImg"></image>
                <view class="giftImg uni-ellipsis">
                  <image src="../../../static/ga005_49.png" mode="widthFix" class="tickets-Icon"></image>
                  <text class="textSize uni-ellipsis">￥{{item.shop_price * 1}}</text>
                </view>
                <text class="text-del-style uni-ellipsis">￥{{item.market_price}}</text>
              </navigator>
            </view>
          </view>
        </view>
      </view>


      <view class="pitureBox">
        <!-- 广告区 -->
        <image src="../../../static/ga005_50.png" mode="widthFix"></image>
      </view>


      <view class="goodsBox">
        <!-- 商品列表区 -->
        <view class="goodLi" v-for="(item,index) in goodsList" :key="index">
          <navigator :url="'/pages/category/detail/detail?id='+ item.goods_id " hover-class="none">
            <view class="goodImg">
              <image lazy-load :src="item.picture" mode="aspectFill"></image>
            </view>
            <view class="text-bg-green" style="height:14upx;">
            </view>
            <view class="goodTips">
              <h3 class="uni-ellipsis">{{item.goods_name}}</h3>
              <view>
                <view class="tipTop">
                  <view class="t_top_left uni-ellipsis">
                    <text class="tip-text-margin">￥{{item.shop_price * 1}}</text>
                    <text class="good-text" v-if="item.is_spike">秒杀</text>
                  </view>
                  <text class="t_top_right" >购买</text>
                </view>
                <text class="text-del-style">￥{{item.market_price}}</text>
              </view>
            </view>
          </navigator>
        </view>
      </view>
    </view>
    <uni-load-more :status="status" color="#cccc" />
  </view>
</template>

<script>
  import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
  import bannerView from '@/components/bannerView.vue';
  export default {
    data() {
      return {
        status: "noMore",
        dataInfo: '',
        msg: [], //公告栏数据
        swiperInfo: [], //轮播数据
      }
    },
    onLoad() {
      this.fetchGoodData();
      this.fetchNoticeData();
    },
    computed: {
      goodsList() { //推荐商品数据
        return this.dataInfo.goodsList;
      },
      redEnvelopeGoodsList() { //红包商品数据
        return this.dataInfo.redEnvelopeGoodsList;
      },
      giftPackageGoodsList() { //礼包商品数据

        return this.dataInfo.giftPackageGoodsList;
      },
      goodGoodsList() { //好货推荐数据
        return this.dataInfo.goodGoodsList;
      },
      spikeGoodsList() { //秒杀产品数据
        return this.dataInfo.spikeGoodsList;
      }
    },
    methods: {
      //手动切换轮播
      toggleSwiper(e) {
        this.current = e.detail.current
      },
      //获取轮播图数据
      fetchData() {
        var url = "config/getInfo"
        this.$Request.get(url).then(res => {
          if (res.code == 200 && res.data.ads.user_index) {
            this.swiperInfo = res.data.ads.user_index;
          }
        })
      },
      //获取页面其他资源的数据
      fetchGoodData() {
        var url = "goods/index"; //后台地址
        this.$Request.get(url).then(res => {
          if (res.code == 200 && res.data) {
            this.dataInfo = res.data;
          }
        })
      },
      //获取公告栏数据
      fetchNoticeData() {
        var url = "goods/noticeList"; //公告栏地址
        this.$Request.get(url).then(res => {
          if (res.code == 200 && res.data) {
            this.msg = res.data;
          }
        })
      }
     },
    components: {
      uniLoadMore,
      bannerView
    }
  }
</script>

<style lang="scss" scoped>
  .s_list_item {
    width: 49%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .s_item_li {
      width: 48%;

      .fImg {
        width: 100%;
        height: 170upx;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        margin-bottom: 6upx;
      }
    }
  }

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


  .home-main {
    margin-top:60upx;
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
        padding: 0 20upx;
        height: 80upx;
      }
    }


    .seckill {
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 20upx 30upx;
      margin-bottom: 16upx;

      .s_list_item {
        width: 49%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .s_item_li {
          width: 48%;
        }
      }

      .fImg {
        width: 100%;
        height: 170upx;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        margin-bottom: 6upx;
      }

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

          .s_li_head {
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
        }
      }
    }

    /*广告专区*/
    .pitureBox {
      overflow: hidden;
      margin-bottom: 10upx;

      image {
        width: 100%;
        border-radius: 20upx;
        box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);
      }
    }

    /*商品列表区 */
    .goodsBox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .goodLi {
        width: 49%;
        overflow: hidden;
        background: white;
        margin-bottom: 20upx;
        border-radius: 20upx;
        box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);

        .goodImg {
          box-sizing: border-box;
          padding: 16upx;
          height: 300upx;
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
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-radius: 10upx;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }
</style>
