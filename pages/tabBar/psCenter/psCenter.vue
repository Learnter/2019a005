<template>
  <!-- 个人中心页面-->
  <view>
    <!-- 顶部背景模块-->
    <view class="headBg">
      <image src="/static/ga005_26.png" mode="widthFix"></image>
      <image class="bgImage" src="/static/ga005_125.png" mode="widthFix"></image>
      <view class="useInfo">
        <view class="info-left">
          <image class="use-logo" src="" mode=""></image>
          <view class="text-big">
            <p class="use-phone">账号:<text>123456789</text></p>
            <p>[会员]<text class="text-w-color">[推荐码]</text></p>
          </view>
        </view>

        <view class="info-right">
          <image src="/static/ga005_91.png" mode="widthFix"></image>
          <p class="text-w-color text-xm-size">客服</p>
        </view>
      </view>
      <view class="userBox">
        <view class="uni-list-cell">
          <view class="useLeft">
            <text class="text-w-color">注册会员</text>
            <text class="text-w-color">马上抽取加速红包</text>
          </view>
          
          <view class="useRight">
            <p>立刻领取
              <image src="/static/ga005_128.png" mode="widthFix"></image>
            </p>
          </view>
        </view>   
      </view>
    </view>
    
    
    <view class="ps_main">
      
      <!--订单状态模块 -->
      <view class="orders">
        <view class="order-item">
          <view class="item-left">
            <view class="left-li">
              <image src="../../../static/ga005_92.png" mode="widthFix"></image>
              <p class="text-xm-size">待付款</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_93.png" mode="widthFix"></image>
              <p class="text-xm-size">待发货</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_95.png" mode="widthFix"></image>
              <p class="text-xm-size">待收货</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_96.png" mode="widthFix"></image>
              <p class="text-xm-size">待评价</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_97.png" mode="widthFix"></image>
              <p class="text-xm-size">已完成</p>
            </view>
          </view>

          <view class="item-right">
            <image class="item-right-img" src="../../../static/ga005_98.png" ></image>
            <navigator url="/pages/tabBar/shCart/user-orders/user-orders" hover-class="none">
              <view class="right-logo">
                <image src="../../../static/ga005_99.png" mode="widthFix"></image>
                <p class="text-sm-size">我的订单</p>
              </view>
           </navigator> 
          </view>
        </view>

        <view class="order-item">
          <view class="item-left">
            <view class="left-li">
              <text>88</text>
              <p class="text-xm-size">总资产</p>
            </view>
            <view class="left-li">
              <text>88</text>
              <p class="text-xm-size">日收入</p>
            </view>
            <view class="left-li">
              <text>88</text>
              <p class="text-xm-size">月收入</p>
            </view>
            <view class="left-li">
             <text>88</text>
              <p class="text-xm-size">总收入</p>
            </view>
            <view class="left-li">
              <text>88</text>
              <p class="text-xm-size">余额</p>
            </view>
          </view>

          <view class="item-right">
            <image class="item-right-img" src="../../../static/ga005_98.png"></image>
            <navigator url="/pages/tabBar/swCenter/user-assets/user-assets" hover-class="none">
                <view class="right-logo">
                  <image src="../../../static/ga005_100.png" mode="widthFix"></image>
                  <p class="text-sm-size">我的钱包</p>
                </view>
            </navigator>
          </view>
        </view>
        
        <!-- 用户操作模块-->
        <view class="order-item">
          <view class="item-left">
            <view class="left-li">
              <image src="../../../static/ga005_101.png" mode="widthFix" ></image>
              <p class="text-xm-size">兑换</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_102.png" mode="widthFix" ></image>
              <p class="text-xm-size">交换</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_103.png" mode="widthFix" ></image>
              <p class="text-xm-size">银行卡</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_104.png" mode="widthFix" ></image>
              <p class="text-xm-size">收款码</p>
            </view>
            <view class="left-li">
              <image src="../../../static/ga005_105.png" mode="widthFix" ></image>
              <p class="text-xm-size">转账</p>
            </view>
          </view>

          <view class="item-right">
            <image class="item-right-img" src="../../../static/ga005_98.png"></image>
            <navigator url="/pages/tabBar/swCenter/user-bill/user-bill" hover-class="none">
              <view class="right-logo">
                <image src="../../../static/ga005_106.png" mode="widthFix"></image>
                <p class="text-sm-size">我的账单</p>
              </view>
           </navigator> 
          </view>
        </view>
      </view>

        <!-- 工具服务模块-->
      <view class="severBox">
        <h3>工具服务</h3>
        <view class="sever-list">
          <view class="sever-li">
            <image src="../../../static/ga005_107.png" mode="widthFix"></image>
            <p class="text-xm-size">个人资料</p>
          </view>
          <view class="sever-li">
            <image src="../../../static/ga005_108.png"  mode="widthFix"></image>
            <p class="text-xm-size">我的伙伴</p>
          </view>
          <view class="sever-li">
            <image src="../../../static/ga005_109.png" mode="widthFix"></image>
            <p class="text-xm-size">绑定微信</p>
          </view>
          <view class="sever-li">
            <image src="../../../static/ga005_110.png"  mode="widthFix"></image>
            <p class="text-xm-size">绑定支付宝</p>
          </view>
          <view class="sever-li">
            <image src="../../../static/ga005_111.png"  mode="widthFix"></image>
            <p class="text-xm-size">支付密码</p>
          </view>
          <view class="sever-li">
            <image src="../../../static/ga005_112.png"  mode="widthFix"></image>
            <p class="text-xm-size">修改密码</p>
          </view>
          <view class="sever-li">
            <image src="../../../static/ga005_113.png"  mode="widthFix"></image>
            <p class="text-xm-size">留言反馈</p>
          </view>
          <view class="sever-li">
            <image src="../../../static/ga005_114.png"  mode="widthFix"></image>
            <p class="text-xm-size">帮助中心</p>
          </view>
        </view>
      </view>
      
      <view class="noc-item">
          <view class="severBox">
              <!-- 平台公告模块-->
              <view class="sever-top">
                <h3>平台公告</h3>
                <navigator url="/pages/tabBar/psCenter/systemNotice/systemNotice">
                  <image src="../../../static/ga005_115.png" mode="widthFix" class="more-Icon"></image>
                </navigator>
              </view>
              <view class="noc-item">
                <view class="noc-item-li" v-for="(item,index) in noticeInfo " :key="index">
                  <navigator class="nav-to uni-inline-item " :url="'/pages/tabBar/psCenter/systemNotice/systemNotice?id=' + item.id " >
                    <image :src="item.thumb" mode="scaleToFill" ></image>
                    <view class="noc-introduces">
                      <h3>{{item.title}}</h3>
                      <p>{{item.desc}}</p>
                    </view>
                  </navigator>
                </view>
              </view> 
            </view>
          </view>
          
          <!-- 新闻资讯模块-->
          <view class="severBox">
              <view class="sever-top">
                <h3>新闻资讯</h3>
                <navigator url="/pages/news/news">
                    <image src="../../../static/ga005_115.png" mode="widthFix" class="more-Icon"></image>
                </navigator>
              </view>
              <view class="noc-item">
                <view class="noc-item-li" v-for="(item,index) in newsInfo" :key="index">
                  <navigator class="nav-to uni-inline-item " :url="'/pages/news/news?id=' + item.id ">
                      <image :src="item.thumb" mode="scaleToFill" ></image>
                      <view class="noc-introduces">
                       <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                      </view>
                  </navigator>
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
          newsInfo:"",
          noticeInfo:""
      }
    },
    onLoad() {
      this.fetchNewData();
      this.fetchNoticeData();
    },
    methods: {
      fetchNewData(){
        var url = "news/getList";
        var data = {
          page:1,
          rows:2
        }
        this.$Request.get(url,data).then(res => {
          if(res && res.code == 200 && res.data.length !== 0){
            this.newsInfo = res.data;
            console.log(res);
          }
        })
      },
      fetchNoticeData(){
        var url = "notice/getList";
        var data = {
          page:1,
          row:10
        };
         this.$Request.get(url,data).then(res => {
          if(res && res.code == 200 && res.data.length !== 0){
            this.noticeInfo = res.data;
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  
 .uni-list-cell{
   position:static;
 }
  
  .text-w-color{
    color:white;
  }
  
  .sever-top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:16upx;
  }
 
  .headBg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;
    overflow:hidden;

    .bgImage {
      width: 102%;
      position: absolute;
      left: -1%;
      right: -1%;
      bottom: -1%;
      z-index: 1;
    }

    .userBox {
      background: #C98631;
      position: absolute;
      bottom: 0;
      width: 90%;
      height: 120upx;
      padding: 30upx 40upx 0;
      box-sizing: border-box;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 20upx;
      font-weight: 500;

      .useLeft {
        text {
          padding: 0 10upx;
          color: white;

          &:nth-child(1) {
            border-right: 4upx solid white;
          }
        }
      }

      .useRight {
        p{
          color: #FF6100;
          padding: 6upx 20upx;
          border-radius: 20upx;
          background: white;
          image{
            width:8upx;
            margin-left:10upx;
          }
        }
      }
    }

    .useInfo {
      position: absolute;
      width: 90%;
      top: 150upx;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .info-left {
        display: flex;
        align-items: center;

        .use-logo {
          width: 120upx;
          height: 120upx;
          background: #E6E6E6;
          border-radius: 50%;
          margin-right: 40upx;
        }

        .use-phone {
          margin-bottom: 20upx;
        }
      }

      .info-right {
        display: flex;
        flex-direction: column;
        align-items: center;

        image {
          width: 40upx;
          height: 40upx;
          margin-bottom: 10upx;
        }
      }
    }
  }

  .ps_main {
    padding: 500upx 16upx 0;

      .order-item {
        display: flex;
        box-sizing: border-box;
        padding: 30upx 20upx 10upx 20upx;
        margin-bottom: 20upx;
        background: white;
        border-radius: 20upx;
        box-shadow: 0 0 10upx rgba(0, 0, 0, 0.2);

        .item-left {
          width: 78%;
          height: 100upx;
          display: flex;
          justify-content: space-around;
          box-sizing: border-box;

          .left-li {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            .text-xm-size{
              margin:20upx 0;
            }
            image{
              width:50upx;
            }
          }
        }

        .item-right {
          width: 22%;
          height: 100upx;
          display: flex;
          justify-content: space-between;
          
          .item-right-img{
            width:20upx;
            height:100upx;
          }

          .right-logo {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding-top: 16upx;
            font-size: 24upx;

            image {
              width: 40upx;
            }
          }
        }
     }     
    .severBox{
      background:white;
      border-radius:30upx;
      display:flex;
      flex-direction:column;
      padding:30upx 40upx;
      margin-bottom:30upx;
      .sever-list{
         display:flex;
         flex-wrap:wrap;
         .sever-li{
           width:25%;
           display:flex;
           flex-direction:column;
           align-items:center;
           margin:20upx 0;
           image{
             width:80upx;
             margin-bottom:20upx;
           }
         }
      } 
        
      .noc-item{
        display:flex;
        flex-direction:column;
        .noc-item-li{
          display:flex;
          align-items:center;
          height:160upx;
          border:1px solid #C1C1C1;
          margin-bottom:16upx;
          border-radius: 0 10upx 10upx 0;
          .nav-to{
            width:100%;
            height:100%;
            image{
             width:200upx;
             border-right:1px solid #C1C1C1;
            }
            .noc-introduces{  
              flex:1;
              height:100%;
              box-sizing:border-box;
              padding:30upx;
              display:flex;
              flex-direction:column;
              justify-content:space-between;
            }
          } 
        }
      }    
    }
  }
</style>
