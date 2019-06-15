<template>
  <view class="orderDetails">
    
    <view class="orderTop">
      <uni-steps :options="list1" :active="active" />
    </view>

    <view class="orderzhutBox">
      <view class="orderzhut">
        <text class="text_1">订单状态</text>
        <text class="text_1" v-if="detailInfo.status">{{detailInfo.status.name}}</text>
      </view>
      <view class="orderzhut">
        <text class="text_1">下单时间</text>
        <text>{{detailInfo.add_time}}</text>
      </view>
      <view class="orderzhut">
        <text class="text_1">订单编号</text>
        <text>{{detailInfo.master_order_sn}}</text>
      </view>
      <view class="orderzhut">
        <text class="text_1">收货地址</text>
        <text>{{detailInfo.province}}&nbsp;{{detailInfo.city}}&nbsp;{{detailInfo.district}}&nbsp;&nbsp;{{detailInfo.address}}</text>
      </view>
      <view class="orderzhut">
        <text class="text_1">收货人</text>
        <text>{{detailInfo.consignee}}</text>
      </view>
    </view>

    <view class="uni-flex orderdetspBox" v-for="(item,index) in detailInfo.goods_list" :key="index">
      <view class="mechantspImg likeA">
        <image :src="item.picture"
          alt=""></image>
        </view>
      <view class="uni-flex-item">
        <view class="mechanttext uni-ellipsis">{{item.goods_name}}</view>
        <view class="orderdetspjys">￥&nbsp;{{item.goods_price}}&nbsp;X&nbsp;{{item.goods_num}}</view>
      </view>
    </view>
    
    <view class="uni-flex orderdettonj">
		<view class="uni-flex-item">
			<text>商品总金额:</text>
			<text class="text_1">￥{{detailInfo.goods_amount}}</text>
		</view>
		<view>
			<text>实付金额:</text>
			<text class="text_1">￥{{detailInfo.order_amount}}</text>
		</view>
	</view>

  </view>
</template>

<script>
  import uniSteps from '@/components/uni-steps/uni-steps.vue'
  export default {
    data() {
      return {
          list1: [{ //交易的状态栏
          	title: '提交订单'
          }, {
          	title: '配送中'
          }, {
          	title: '完成交易'
          }],
          detailInfo:""//订单详情数据
      };
    },
    onLoad(e){
      this.fetchDetails(e);
    },
    computed:{
      //返回交易的状态
      active(){
        let tips;
        if(this.detailInfo.status){
          tips = this.detailInfo.status.value;
        }
        switch (tips){
          case 1:
            return 0;
          case 2:
            return 0;
          case 3:
            return 1;
          case 6:
            return 2;
          case 9:
            return 2;        
        }
      }
    },
    methods:{
      fetchDetails(e){
        
        let url = "order/orderDetail";
        let data = {"id":e.orderId};
        
        this.$Request.get(url,data).then( res => {
          console.log(res);
          if(res && res.code === 200){
            this.detailInfo = res.data;
          }
        })
      }
    },
    components:{
      uniSteps
    }
  }
</script>

<style lang="scss">
  
  .orderTop{
    padding:10upx;
    background: #ffffff;
    border-top:2px solid #F7F5F4;
  }
  
  .orderzhutBox {
    border-top: 1px solid #F1F1F1;
    border-bottom: 1px solid #F1F1F1;
    padding: 20upx;
    // font-size: 0.9em;
    color: #666666;
    background: #ffffff;

    .orderzhut {
      padding: 10upx 0px;

      .text_1 {
        margin-right: 10px;
      }
    }
  }

  .orderdetspBox {
    padding: 20upx;
    color: #333333;
    border-bottom: 1px dashed #F1F1F1;
    background: #ffffff;

    .mechantspImg {
      width: 140upx;
      height: 140upx;
      margin-right: 24upx;
      overflow: hidden;
      border: 1px solid #F1F1F1;
    }

    .uni-flex-item {

      .mechanttext {
        margin-bottom: 6upx;
        line-height:44upx;
        height: 88upx;
      }

      .orderdetspjys {
        color: #00d693;
        font-size:24upx;
      }
    }
  }
  
  .orderdettonj{
    padding: 20upx;
    border-bottom: 1px solid #F1F1F1;
    color: #333333;
    background: #ffffff;
    .text_1{
      color: #00d693;
      font-size:24upx;
    }
  }
</style>
