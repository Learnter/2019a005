<template>
  <view>
    <!-- 产品详情页面-->
    <view class="detailPage">
      
      <view class="big-Piture">
        <navigator open-type="navigateBack" hover-class="none">
            <image class="returnBtn" src="../../../static/ga005_64.png" mode="widthFix"></image>
        </navigator>
        <image class="b-p-photo"  :src="detailInfo.picture" mode="scaleToFill"></image>
      </view>

      <view class="detailNav" v-if="specPrice">
        <view class="nav-left">
          <text class="nav-l-price">￥{{specPrice.shop_price}}</text>
          <text class="text-del-style">￥{{specPrice.market_price}}</text>
        </view>
        <view class="nav-right">
          <text v-if="detailInfo.is_spike">秒杀</text>
          <text v-if="detailInfo.is_new">新品</text>
        </view>
      </view>
      <view class="detailBox">
        <view class="detail-photos">
          <image v-for="(item,index) in detailInfo.goods_img " :src="item" mode="aspectFill"></image>
        </view>
        <h2 class="detail-title" v-text="detailInfo.goods_name">
           标题.......
        </h2>
      </view>
      
      <view class="seleBtn uni-inline-item" @click="toggleSpec">
        <view>
          已选择:
          <text class="selected-text text-color-red" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
          	{{sItem.name}}
          </text>
        </view>
          
         <uni-icon type="arrowdown" size="20"></uni-icon>
      </view>
        
      <view class="commentBtn uni-inline-item">
        <text style="color:#00d693">评价</text>
        <view>
          <navigator :url="'/pages/category/comment/comment?id=' + detailInfo.goods_id" hover-class="none">
            <text style="margin-right:0">查看全部评论</text>
            <uni-icon type="arrowright" size="20"></uni-icon>
          </navigator>
        </view>
      </view>
      
      <view class="detailBox">
        <view class="detail-introduction" v-html="detailInfo.content" >
          详情..................
        </view>
      </view>
        
    </view>

    <view class="bottom-shop">
      <view class="shop-logo">
        <image src="../../../static/2019_a005_58_1.png" mode="widthFix"></image>
        <text>购物车</text>
      </view>
      <view class="shop-btn">
        <view @tap="insertCart">
          <text style="background:#E8651B;">加入购物车</text>
        </view>
        <view>
          <navigator url="/pages/tabBar/shCart/shCart" open-type="switchTab">
             <text style="background: #DF0024;">立即购买</text>
          </navigator>
        </view>
      </view>
    </view>
    
    <!-- 规格-模态层弹窗 -->
    <view 
    	class="popup spec" 
    	:class="specClass"
    	@touchmove.stop.prevent="stopPrevent"
    	@click="toggleSpec"
    >
    	<!-- 遮罩层 -->
    	<view class="mask"></view>
    	<view class="layer attr-content" @click.stop="stopPrevent">
    		<view class="a-t">
    			<image :src="detailInfo.picture" ></image>
    			<view class="right" v-if="specPrice">
    				<text class="price">¥{{specPrice.shop_price}}</text>
    				<text class="stock">库存:{{specPrice.stock}}</text>
    				<view class="selected">
    					已选:
    					<text class="selected-text text-color-red" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
    						{{sItem.name}}
    					</text>
    				</view>
    			</view>
    		</view>
    		<view v-for="(item,parentIndex) in detailInfo.spec_data" :key="parentIndex" class="attr-list">
    			<text>{{item.name}}</text>
    			<view class="item-list">
    				<text 
    					v-for="(childItem, childIndex) in item.child" 
    					:key="childIndex" class="tit"
              :class="{selected: childItem.selected}"
    					@click="selectSpec(childIndex,childItem.id,parentIndex)"
    				>
    					{{childItem.name}}
    				</text>
    			</view>
    		</view>
        <view class="buyCount">
            <text>购买数量</text>
            <uni-number-box @change="buyCount"></uni-number-box>
        </view>
    		<button class="btn" @click="toggleSpec">完成</button>
    	</view>
    </view>
  </view>
</template>

<script>
  import uniIcon from '@/components/uni-icon/uni-icon.vue';
  import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
  export default {
    data() {
      return {
        productId:" ", //产品Id
        detailInfo:" ", //页面数据 
        specClass: 'none', //遮罩层切换
        specSelected:[], //产品规格
        buyNum:1, //购买数量,
        specPriceData:{} //规格价格
      };
    },
    onLoad(e){
      this.productId = e.id;
      this.fetchData(); 
    },
    computed:{
      /* 缓存购买的产品规格*/
      goodsSpec(){
        let goodsSpec = [];
        this.specSelected.forEach(item => {
          goodsSpec.push(item.id);
        })
       return goodsSpec.join("_");
      },
      /*遮罩层 产品规格变换渲染不同的价格 及 库存*/
      specPrice(){   
       let specPrice  = this.specPriceData[this.goodsSpec];
       return specPrice;
      }
    },
    methods:{
      //获取详情页面数据
      fetchData(){
        let url = "goods/detail";
        let data = {
          id:this.productId
        }  
        this.$Request.get(url,data).then( res => {
          
          if(res && res.code == 200 && res.data ){
            
            this.detailInfo = res.data.goodsInfo;
            
            /* 规格价格信息*/
            this.specPriceData = res.data.specPriceData;
            
            /* 获取产品规格的初始值*/
            res.data.goodsInfo.spec_data.forEach(item => {
                item.child[0].selected = true;
                this.specSelected.push(item.child[0]);
            })
          }
        })
      },
      //规格弹窗开关
      toggleSpec() {
      	if(this.specClass === 'show'){
      		this.specClass = 'hide';
      		setTimeout(() => {
      			this.specClass = 'none';
      		}, 250);
      	}else if(this.specClass === 'none'){
      		this.specClass = 'show';
      	}
      },
      //选择规格
      selectSpec(childIndex,childId,parentIndex){
         
       let list = this.detailInfo.spec_data[parentIndex].child;

				// 按钮点击切换
        list.forEach( item => {
           item.id === childId ? this.$set(item,'selected',true) : this.$set(item,'selected',false);
        })
				
				//存储已选择
				// 每次点击按钮 先清空specSelected  再遍历child中selected为true的对象  添加到specSelected数组中
				this.specSelected = []; 
				this.detailInfo.spec_data.forEach(item=>{ 
					item.child.forEach( childItem => {
						 if(childItem.selected === true){
							 	this.specSelected.push(childItem); 
						 }
					})
				})
      },
			//选择购买数量
			buyCount(e){
				this.buyNum = e ;
			},
			//加入购物车
			insertCart(){
        let url = "cart/addCart";
        let data = {
          goods_id:this.productId, 
          buy_num:this.buyNum,
          goods_spec:this.goodsSpec
        }
        
        this.$Request.post(url,data).then( res => {
          if(res && res.code == 200){
            uni.showToast({
              title:res.msg,
              icon:"success"
            })
          }else{
            uni.showToast({
              title:res.msg,
              icon:"none"
            })
          }
        })
			},
      stopPrevent(){}
    },
    components:{
      uniIcon,
      uniNumberBox
    }
  }
</script>

<style lang="scss" scoped>
  
  .buyCount{
    margin: 8px 0px;
    padding: 8px 0px;
    border-top: 1px solid #F1F1F1;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  
  
  /* 规格选择弹窗 */
  .attr-content{
    box-sizing:border-box;
  	padding: 10upx 30upx;
  	.a-t{
  		display: flex;
  		image{
  			width: 170upx;
  			height: 170upx;
  			flex-shrink: 0;
  			margin-top: -40upx;
  			border-radius: 8upx;;
  		}
  		.right{
  			display: flex;
  			flex-direction: column;
  			padding-left: 24upx;
  			line-height: 42upx;
  			.price{
  				color: $uni-color-primary;
  				margin-bottom: 10upx;
  			}
  			.selected-text{
  				margin-right: 10upx;
  			}
  		}
  	}
  	.attr-list{
  		display: flex;
  		flex-direction: column;
  		padding-top: 30upx;
  		padding-left: 10upx;
  	}
  	.item-list{
  		padding: 20upx 0 0;
  		display: flex;
  		flex-wrap: wrap;
  		text{
  			display: flex;
  			align-items: center;
  			justify-content: center;
  			background: #eee;
  			margin-right: 20upx;
  			margin-bottom: 20upx;
  			border-radius: 100upx;
  			min-width: 60upx;
  			height: 60upx;
  			padding: 0 20upx;
  		}
  		.selected{
  			background: #fbebee;
  			color: $uni-color-primary;
  		}
  	}
  }
  
  /*  弹出层 */
  .popup {
  	position: fixed;
  	left: 0;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	z-index: 99;
  	
  	&.show {
  		display: block;
  		.mask{
  			animation: showPopup 0.2s linear both;
  		}
  		.layer {
  			animation: showLayer 0.2s linear both;
  		}
  	}
  	&.hide {
  		.mask{
  			animation: hidePopup 0.2s linear both;
  		}
  		.layer {
  			animation: hideLayer 0.2s linear both;
  		}
  	}
  	&.none {
  		display: none;
  	}
  	.mask{
  		position: fixed;
  		top: 0;
  		width: 100%;
  		height: 100%;
  		z-index: 1;
  		background-color: rgba(0, 0, 0, 0.4);
  	}
  	.layer {
  		position: fixed;
  		z-index: 99;
  		bottom: 0;
  		width: 100%;
  		min-height: 40vh;
  		border-radius: 10upx 10upx 0 0;
  		background-color: #fff;
  		.btn{
  			height: 66upx;
  			line-height: 66upx;
  			border-radius: 100upx;
  			background: $uni-color-primary;
  			color: #fff;
  			margin: 30upx auto 20upx;
  		}
  	}
  	@keyframes showPopup {
  		0% {
  			opacity: 0;
  		}
  		100% {
  			opacity: 1;
  		}
  	}
  	@keyframes hidePopup {
  		0% {
  			opacity: 1;
  		}
  		100% {
  			opacity: 0;
  		}
  	}
  	@keyframes showLayer {
  		0% {
  			transform: translateY(120%);
  		}
  		100% {
  			transform: translateY(0%);
  		}
  	}
  	@keyframes hideLayer {
  		0% {
  			transform: translateY(0);
  		}
  		100% {
  			transform: translateY(120%);
  		}
  	}
  }


    
 .returnBtn{
   width:60upx;
   height:60upx;
 }
  
  .text-del-style {
    color: #E2E0DD;
  }

  .detailPage {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 120upx;
    overflow: auto;
  }

  .big-Piture {
    width: 97%;
    left: 1%;
    top: 1%;
    box-sizing: border-box;
    padding: 10upx 10upx 6upx;
    background: white;
    z-index: 10;
    position: relative;

    .b-p-photo {
      border: 1px solid #E6E6E6;
      height:700upx;
    }

    .returnBtn {
      top: 12upx;
      left: 12upx;
    }
  }

  .detailNav {
    background: #BAD0BA;
    display: flex;
    align-items: center;
    color:white;
    height:100upx;
    .nav-left {
      width: 70%;
      height:100%;
      line-height:100upx;
      box-sizing: border-box;
      background: #41A069;
      overflow: hidden;

      .nav-l-price {
        font-size: 44upx;
        margin: 0 10upx 0 40upx;
      }
    }

    .nav-right {
      flex:1;
      font-size: 24upx;
      display:flex;
      justify-content:space-around;
      text {
        padding: 6upx 14upx;
        background: #41A069;
      }
    }
  }

  .detailBox {
    box-sizing: border-box;
    padding: 20upx 26upx;

    .detail-photos {
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin-bottom: 20upx;

      image {
        width: 17%;
        height: 120upx;
      }
    }

    .detail-title {
      padding: 30upx 40upx;
      background: white;
      margin-bottom: 20upx;
      overflow: hidden;
      word-wrap: break-word
    } 
  }
  
  .seleBtn{
    justify-content:space-between;
    padding:20upx 26upx;
    background:#F0F0F0;
    .selected-text{
      margin:0;
      margin-left:10upx;
    }
  }
  
  .commentBtn{
    justify-content:space-between;
    padding:20upx 26upx;
    background:#F0F0F0;
  }
  
  .detail-introduction {
    background: #ffffff;
    padding:30upx 20upx;
    line-height:1.5;
    border: 1px solid #F1F1F1;
    overflow: hidden;
    word-wrap: break-word; 
  }
  

  .bottom-shop {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 120upx;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30upx;

    .shop-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 20upx;
      color: #41A069;

      image {
        width: 50upx;
        margin-bottom: 6upx;
      }
    }

    .shop-btn {
      color: white;
      display: flex;
      align-items: center;
      text {
        padding: 8upx 20upx;
        border-radius: 30upx;
        margin-left: 20upx;
      }
    }
  }
</style>
