<template>
	<view class="shCart">
    
    <!-- 头部返回栏-->
    <view class="returnTitle">
      <image class="returnBtn" src="../../../static/ga005_64.png" mode="widthFix"></image>
      <text>购物车</text>
    </view>
    
    <!-- 店铺产品-->
    <view class="sh-main">
      
      <view class="storeInfo">
        <!-- 店铺名称-->
        <view class="store-name">
            <checkbox-group class="checkbox-group">
            	<label>
            		<checkbox value="cb" ></checkbox>
            	</label>
            </checkbox-group>
            <text>店铺名称.....</text>
        </view>
        
        <!-- 产品列表信息 -->
        <view class="goods-list">
          <view class="goods-li">
            <view>
              <checkbox-group>
                <label>
                  <checkbox value="cb" ></checkbox>
                </label>
              </checkbox-group>
            </view>
            <view class="good-li-item">
              <image class="img-border" src="../../../static/ga005_65.png" mode="widthFix"></image>
              <view class="good-li-item-right">
                 <h2>标题......</h2>
                 <text>............</text>
                 <label><text class="text-color-red">￥99</text></label>
                 <view class="good-li-item-right-bottom">
                   <uni-number-box />
                   <label>合计:<text class="text-color-red">￥99</text></label>
                 </view>
              </view>
            </view>
          </view>
        </view>
        <view class="goods-list">
          <view class="goods-li">
            <view>
              <checkbox-group>
                <label>
                  <checkbox value="cb" ></checkbox>
                </label>
              </checkbox-group>
            </view>
            <view class="good-li-item">
              <image class="img-border" src="../../../static/ga005_65.png" mode="widthFix"></image>
              <view class="good-li-item-right">
                 <h2>标题......</h2>
                 <text>............</text>
                 <label><text class="text-color-red">￥99</text></label>
                 <view class="good-li-item-right-bottom">
                   <uni-number-box />
                   <label>合计:<text class="text-color-red">￥99</text></label>
                 </view>
              </view>
            </view>
          </view>
        </view>  
      </view> 
      
       <view class="storeInfo">
        <!-- 店铺名称-->
        <view class="store-name">
            <checkbox-group class="checkbox-group">
            	<label>
            		<checkbox value="cb" ></checkbox>
            	</label>
            </checkbox-group>
            <text>店铺名称.....</text>
        </view>
        
        <!-- 产品列表信息 -->
        <view class="goods-list">
          <view class="goods-li">
            <view>
              <checkbox-group>
                <label>
                  <checkbox value="cb" ></checkbox>
                </label>
              </checkbox-group>
            </view>
            <view class="good-li-item">
              <image class="img-border" src="../../../static/ga005_65.png" mode="widthFix"></image>
              <view class="good-li-item-right">
                 <h2>标题......</h2>
                 <text>............</text>
                 <label><text class="text-color-red">￥99</text></label>
                 <view class="good-li-item-right-bottom">
                   <uni-number-box />
                   <label>合计:<text class="text-color-red">￥99</text></label>
                 </view>
              </view>
            </view>
          </view>
        </view>
        <view class="goods-list">
          <view class="goods-li">
            <view>
              <checkbox-group>
                <label>
                  <checkbox value="cb"></checkbox>
                </label>
              </checkbox-group>
            </view>
            <view class="good-li-item">
              <image class="img-border" src="../../../static/ga005_65.png" mode="widthFix"></image>
              <view class="good-li-item-right">
                 <h2>标题......</h2>
                 <text>............</text>
                 <label><text class="text-color-red">￥99</text></label>
                 <view class="good-li-item-right-bottom">
                   <uni-number-box />
                   <label>合计:<text class="text-color-red">￥99</text></label>
                 </view>
              </view>
            </view>
          </view>
        </view>  
      </view> 
      
      <view class="selectAll">
         <view>
           <checkbox-group>
             <label>
               <checkbox value="cb"></checkbox>全选
             </label>
           </checkbox-group>
         </view>
         <view class="">
           <label>合计:<text class="text-color-red">￥99</text></label>
           <text class="settle-money">去结算(*)</text>
         </view>
      </view>
      
    </view>	 
	</view>
</template>

<script>
  
  import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
  
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
    components: {
    	uniNumberBox
    }
	}
</script>

<style lang="scss">
  
  .img-border{
    border:2upx solid #C1C1C1;
    width:200upx;
  }
  .text-color-red{
    font-size:32upx;
  }
  .checkbox-group{
    display:inline;     
  }   
  
   /* 头部返回栏样式*/ 
  .returnTitle {
    position: relative;
    background: white;
    font-size: 32upx;
    padding: 30upx 0;
    text-align: center;
    margin-bottom:10upx;
    .returnBtn {
      left: 30upx;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  
  /* 店铺产品样式*/
  .storeInfo{
    margin-bottom:30upx;
    .store-name{
        margin-bottom:10upx;
        box-sizing:border-box;
        background:white;
        font-size:30upx;
        color:#737373;
        height:88upx;  
        padding:20upx 30upx;
      }
      
      .goods-list{
       box-sizing:border-box;
       padding:20upx 30upx;
       background:white;
       .goods-li{
         display:flex;
       .good-li-item{
         flex: 1;
         display:flex;
         .good-li-item-right{
           flex:1;
           margin-left:30upx;
           box-sizing:border-box;
           padding-top:10upx;
           display:flex;
           flex-direction:column;
           justify-content:space-between;
           .good-li-item-right-bottom{
             display:flex;
             justify-content:space-between;
             align-items:center;
           }
         }
        }
      }   
    }
  }
  
  .selectAll{
    background: white;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height:100upx;
    .settle-money{
      margin-left:20upx;
      background:green;
      
    }
  }
</style>
