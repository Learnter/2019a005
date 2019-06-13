<template>
  <!-- 支付页面-->
  <view class="playment">

   <return-nav>
     <text>结算</text>
   </return-nav>

    <!-- 收货人地址-->
    <view class="play-main" @tap="showAddre">
      <view class="user-info" v-if="userInfo !== ''">
        <view class="user-person">
          <text class="user-person-name">收件人: {{userInfo.username}}</text>
          <text>联系电话: {{userInfo.mobile}}</text>
        </view>
        <view class="user-addre uni-ellipsis">
          <text>邮寄地址: {{defAddres}}</text>
        </view> 
      </view>
      
      <view class="address-content" v-else>
        <view class="null-content">
          <image src="../../../../static/ga005_67.png" mode="widthFix" style="width:160upx"></image>
          <text>你现在好没有添加地址!请点击添加!</text>
        </view>
      </view>

    </view>

    <!-- 购买商品清单-->
    <view class="productBox">
      <text class="product-title">购物清单</text>
      <view class="product-items">
        <view class="uni-list">
          <view class="uni-list-cell" v-for="(item,index) in selectList" :key="index">
            <view class="uni-media-list">
              <view class="uni-media-list-logo">
                <image :src="item.picture"></image>
              </view>
              <view class="uni-media-list-body">
                <view class="uni-media-list-body-left">
                  <view class="uni-media-list-text-top uni-ellipsis">{{item.goods_name}}</view>
                  <view class="uni-media-list-text-bottom uni-ellipsis">{{item.spec_name}}</view>
                </view>
                <text class="pay-money">共{{item.goods_num}}件,小计:￥{{item.goods_price}} </text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="pay-box">
       <!-- 总支付金额-->
      <view class="total-money">
        <label>合计:<text style="color:red">￥{{toatleMoney}}</text></label>
      </view>
      
      <!-- 支付按钮-->
      <button class="pay-btn text-bg-green" @tap="payment">立即支付</button>
    </view>
    
  </view>
</template>

<script>
  export default {
    data() {
      return {
          userInfo:'',
          selectList:[]
      };
    },
    onLoad() {
     this.fetchData();
     uni.getStorage({
       key:'buylist',
       success: (res) => {
         console.log(res);
         this.selectList = res.data;
       }
     })
    },
    computed:{
      defAddres(){
        let province = this.userInfo.province;
        let city = this.userInfo.city;
        let district = this.userInfo.district;
        let address = this.userInfo.address;
        return province+city+district+address;
      },
      toatleMoney(){
        let money = 0;
        this.selectList.forEach(item => {
          money += parseInt(item.goods_price);
        })
        return money;
      }
    },
    methods:{
       payment(){
        uni.navigateTo({
          url:"/pages/tabBar/shCart/payment/payment"
        })
      },
      //获取默认地址信息
      fetchData(){
        let url = "address/defaultAddress";
        this.$Request.get(url).then( res => {
         if(res && res.code == 200){
           this.userInfo = res.data;
          }
        })
      },
       //切换到地址页面
       showAddre(){
         uni.navigateTo({
           url:"/pages/address/address"
         })
       }
    }
  }
</script>

<style lang="scss" scoped>
  
  
  /* 收件人信息样式 */
  .play-main {
    padding: 0 1%;
    margin:10upx 0 10upx;
    .user-info {
      background: white;
      padding: 0 30upx;
      border-radius:20upx;
      box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
      .user-person {
        padding: 20upx 0 10upx;
        display:flex;
        .user-person-name {
          margin-right: 20upx;
          width:40%;
        }
      }

      .user-addre {
        padding: 10upx 0 20upx;
      }
    }

    /* 空地址栏样式 */
      .address-content {
        background: white;
        min-height: 300upx;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:20upx;
        box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
        .null-content {
          display: flex;
          align-items: center;
          font-size: 22upx;
          color: #C1C1C1;

          image {
            margin-right: 30upx;
          }
        }
      }
    }
  
  
  .productBox{
    margin-bottom:200upx;
  /* 购物清单列表的样式 */
  .product-title {
    display: block;
    padding: 0 30upx;
    background: white;
    height:70upx;
    line-height:70upx;
  }

  .uni-media-list-logo {
    border: 2upx solid #C1C1C1;
  }

  .uni-media-list-body {
    flex-direction: row;
    align-items: flex-end;

    .uni-media-list-body-left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }
    /* 右边的单物品金额的样式*/
    .pay-money {
      font-size: 20upx;
      flex-shrink: 0;
    }
  }
}

 .pay-box{
      position:fixed;
      left:0;
      right:0;
      bottom:0;
      background:white;
      z-index:999;
      
       /* 物品总金额的样式*/
      .total-money {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30upx 0;
      }
      
      /* 支付按钮的样式*/
      .pay-btn {
        width: 340upx;
        font-size: 28upx;
        color: white;
        margin-bottom: 30upx;
      }
    }

 
</style>
