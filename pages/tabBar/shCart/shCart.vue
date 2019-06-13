<template>
  <view class="shCart">

    <return-nav>
      <text>购物车</text>
    </return-nav>

    <!-- 商品列表 -->
    <view class="goods-list">

      <view class="tis" v-if="goodsList.length==0">购物车是空的哦~</view>

      <view class="goods-list-item" v-for="(item,storeIndex) in goodsList " :key="storeIndex">

        <view class="goods-list-store">
          <!-- checkbox -->
          <view class="checkbox-box" @tap="selectedStore(storeIndex)">
            <view class="checkbox">
              <view :class="[item.selected?'on':'']"></view>
            </view>
          </view>

          <view class="store-info">
            {{item.name}}
          </view>

        </view>

        <view class="row" v-for="(row,index) in item.goods_list" :key="index">
          <!-- 删除按钮 -->
          <view class="menu" @tap.stop="deleteGoods(row.id,storeIndex)">
            <view class="icon shanchu"></view>
          </view>
          <!-- 商品 -->
          <view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']" @touchstart="touchStart(index,$event)"
            @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
            <!-- checkbox -->
            <view class="checkbox-box" @tap="selected(index,storeIndex)">
              <view class="checkbox">
                <view :class="[row.selected?'on':'']"></view>
              </view>
            </view>
            <!-- 商品信息 -->
            <view class="goods-info">
              <view class="img">
                <image :src="row.picture"></image>
              </view>
              <view class="info">
                <view class="title">{{row.goods_name}}</view>
                <view class="price">￥{{row.goods_price}}</view>
                <view class="price-number">
                  <view class="number">
                    <view class="sub" @tap.stop="sub(index,storeIndex)">
                      <view class="icon jian"></view>
                    </view>
                    <view class="input" @tap.stop="discard">
                      <input type="number" v-model="row.goods_num" @input="sum($event,index)" disabled="true" />
                    </view>
                    <view class="add" @tap.stop="add(index,storeIndex)">
                      <view class="icon jia"></view>
                    </view>
                  </view>
                  <view class="order-price">合计:
                    <text class="price">￥{{row.goods_price * row.goods_num}}</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 脚部菜单 -->
    <view class="footer" :style="{bottom:footerbottom}">
      <view class="checkbox-box" @tap="allSelect">
        <view class="checkbox">
          <view :class="[isAllselected?'on':'']"></view>
        </view>
        <view class="text">全选</view>
      </view>
      <!-- <view class="delBtn" @tap="deleteList">删除</view> -->
      <view class="settlement">
        <view class="sum">合计:<view class="money">￥{{sumPrice}}</view>
        </view>
        <view class="btn" @tap="toConfirmation">结算({{seleCount}})</view>
      </view>
    </view>
  </view>
</template>

<script>
  import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
  export default {
    components: {
      uniNumberBox
    },
    data() {
      return {
        sumPrice: '0.00',
        headerPosition: "fixed",
        headerTop: null,
        statusTop: null,
        isAllselected: false,
        theIndex: null, //控制滑动效果
        oldIndex: null,
        isStop: false,
        goodsList: [],//购物车商品数据
        selectedList:[]
      }
    },
    onLoad() {
      //兼容H5下结算条位置
      // #ifdef H5
      this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px';
      // #endif
      // #ifdef APP-PLUS
      this.statusHeight = plus.navigator.getStatusbarHeight();
      // #endif 
      this.fetchData();
      
    },
    computed:{
      //返回选择的商品的数量
      seleCount(){
       let count = [] 
       this.goodsList.forEach( item => {
          item.goods_list.forEach( child => {
            if(child.selected == true){
              count.push(child);
            }   
          })
        })
       return count.length;
      }
    },
    methods: {
      //获取购物车数据
      fetchData(){
        let url = "cart/cartList";
        this.$Request.get(url).then( res => {
          if(res && res.code === 200){
            this.goodsList = res.data.cartList;
          }
        })
      },
      //加入商品 参数 goods:商品数据
      joinGoods(goods) {
        /*
         * 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
         * 在实际应用上，前端并不会直接插入记录到goodsList这一个动作，一般是更新列表和本地列表缓存。
         * 一般商城购物车的增删改动作是由后端来完成的,
         * 后端记录后返回前端更新前端缓存
         */
        let len = this.goodsList.length;
        let isFind = false; //是否找到ID一样的商品
        for (let i = 0; i < len; i++) {
          let row = this.goodsList[i];
          if (row.id == goods.id) { //找到商品一样的商品
            this.goodsList[i].number++; //数量自增
            isFind = true; //找到一样的商品
            break; //跳出循环
          }
        }
        if (!isFind) {
          //没有找到一样的商品，新增一行到购物车商品列表头部
          this.goodsList[i].unshift(goods);
        }
      },
      //控制左滑删除效果-begin
      touchStart(index, event) {
        //多点触控不触发
        if (event.touches.length > 1) {
          this.isStop = true;
          return;
        }
        this.oldIndex = this.theIndex;
        this.theIndex = null;
        //初始坐标
        this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
      },
      touchMove(index, event) {
        //多点触控不触发
        if (event.touches.length > 1) {
          this.isStop = true;
          return;
        }
        let moveX = event.touches[0].pageX - this.initXY[0];
        let moveY = event.touches[0].pageY - this.initXY[1];

        if (this.isStop || Math.abs(moveX) < 5) {
          return;
        }
        if (Math.abs(moveY) > Math.abs(moveX)) {
          // 竖向滑动-不触发左滑效果
          this.isStop = true;
          return;
        }

        if (moveX < 0) {
          this.theIndex = index;
          this.isStop = true;
        } else if (moveX > 0) {
          if (this.theIndex != null && this.oldIndex == this.theIndex) {
            this.oldIndex = index;
            this.theIndex = null;
            this.isStop = true;
            setTimeout(() => {
              this.oldIndex = null;
            }, 150)
          }
        }
      },
      touchEnd(index, $event) {
        //结束禁止触发效果
        this.isStop = false;
      },
      //跳转确认订单页面
      toConfirmation() {
        let tmpList = [];
        this.goodsList.forEach( item => {
        	 item.goods_list.forEach(childItem => {
        		 if(childItem.selected == true){
        			tmpList.push(childItem);
        		 } 
        	 })
        })
        if (tmpList.length < 1) {
          uni.showToast({
            title: '请选择商品结算',
            icon: 'none'
          });
          return;
        }
        uni.setStorage({
          key: 'buylist',
          data: tmpList,
          success: () => {
            uni.navigateTo({
              url: '/pages/tabBar/shCart/confirmation/confirmation'
            })
          }
        })
      },
      //删除商品
      deleteGoods(id,storeIndex) {
        
        // 根据父级索引 获取到商家店铺产品
        let goodsItem = this.goodsList[storeIndex].goods_list;
        
        let url = "cart/delCartInfo";
        let data = {
           "id":id
         }
         this.$Request.post(url,data).then(res => {
           
           if(res && res.code == 200){
             
             uni.showToast({
               title:res.msg,
               icon:"none"
             })
             
              for (let i = 0; i < goodsItem.length; i++) {
               //根据id获取具体产品
               if (id == goodsItem[i].id) { 
                 //删除具体产品
                   goodsItem.splice(i, 1);
                 break;
               }
             }
             
             //店铺商品删除完后 需要删除店铺信息
              if(goodsItem.length === 0){
               let del = this.goodsList.indexOf(this.goodsList[storeIndex]);
               this.goodsList.splice(del,1);
             }
             
             this.sum();
             this.oldIndex = null;
             this.theIndex = null;
           }
         }) 
      },
      // 选中商品
      selected(index,storeIndex) {
        
        this.goodsList[storeIndex].goods_list[index].selected = this.goodsList[storeIndex].goods_list[index].selected ? false : true;
        
                
        //门店商品全部点击完以后，需要将门店的选项按钮显示高亮
        let allSelect =  this.goodsList[storeIndex].goods_list.every( item => {
          return item.selected;
        })
        
        this.goodsList[storeIndex].selected = allSelect;
        
        this.sum();
      },
			//店铺按钮选择
			selectedStore(index) {
				
			 let storeSelecte =  this.goodsList[index].selected = !this.goodsList[index].selected;
			  
			  var goods = this.goodsList[index].goods_list;
			  
			  for(var i = 0; i < goods.length;i++){
			    
			    goods[i].selected = storeSelecte;
			    
			  }
				this.sum();
			},
      //全选
      allSelect() {

				let allSelect = this.isAllselected = !this.isAllselected;
				
				this.goodsList.forEach( item => {
					 item.selected = allSelect;
					 item.goods_list.forEach(childItem => {
						 childItem.selected = allSelect;
					 })
				})
				
        this.sum();
      },
      // 减少数量
      sub(index,storeIndex) {
        let li = this.goodsList[storeIndex].goods_list[index];
        if(!li.selected){
          uni.showToast({
            title:"请选择商品",
            icon:"none"
          })
          return;   
        }else{
           if (li.goods_num <= 1) {
            return;
          }
          li.goods_num--;
           let url = "cart/modifyCartInfo";
           let data = {
              "id":li.id,
              "selected":li.selected,
              "goods_num":li.goods_num
            }
            this.$Request.post(url,data).then(res => {
              if(res && res.code == 200){
                uni.showToast({
                  title:res.msg,
                  icon:"none"
                })
              }
            })
          }
       this.sum();
      },
      // 增加数量
      add(index,storeIndex) {
        
        let li = this.goodsList[storeIndex].goods_list[index];
        
        if(!li.selected){
           uni.showToast({
             title:"请选择商品",
             icon:"none"
           })
           return;   
           
         }else{
           
            li.goods_num++;
            let url = "cart/modifyCartInfo";
            let data = {
               "id":li.id,
               "selected":li.selected,
               "goods_num":li.goods_num
             }
             this.$Request.post(url,data).then(res => {
               if(res && res.code == 200){
                 uni.showToast({
                   title:res.msg,
                   icon:"none"
                 })
               }
             })
           }
        this.sum();
      },
      // 合计
      sum() {
        this.sumPrice = 0;		
            
				this.goodsList.forEach( item => {
					 item.goods_list.forEach(childItem => {
						 if(childItem.selected){
							 this.sumPrice += childItem.goods_num*childItem.goods_price;
						 } 
					 })
				})
				
      },
      discard() {
        //丢弃
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-list-item {
    margin-bottom: 30upx;
  }

  .goods-list-store {
    display: flex;
    align-items: center;
    height: 80upx;
    margin: 0 auto 10upx;
    background: white;

    .checkbox-box {
      padding-left: 20upx;
      flex-shrink: 0;
      margin-right: 20upx;
      align-items: flex-start;
    }
  }

  page {
    position: relative;
  }

  @font-face {
    font-family: "HMfont-home";
    src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOEAAsAAAAAB7wAAAM1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDAIJNATYCJAMQCwoABCAFhG0HPhu1BsiOw7jha84s8T+CgOyq6unevTlAeAkRhAhQBjj8eJfmMg/oB5whSgaFspy7AqbpwE3Py3/j9j+X07uGyFHr21lua9HYi9rUCzDeGtBYmw4o0AJJ0BvGLmiJxyEAC3yIQhSVPL9BF4U5TgBi7ChtQzfjQKFYWEdgrFiqEBsxoGurtMfAhuD74g8JQgcNg8ScWjf8xoPz7/nfD8iFpoV0eQi86XQAWwUSiAIUiJGVhgEaUSAKiYXau0kKoKOjwVRthd8PmExIBRvmWH95INCQIIyYqVYAJKGghO/5Dg4B3wtxaPD9QAoS4IOM1gEzYBbAMkT16iIQGPxsopS5ScAcK23LiaBDpzyk1aGLHtsvhVrL7adDD55016wPXnDfcr7T3lcE2TVcP2fNhZM7WeiEhVp44vx9C5vVD6+eEgaLTZvEot3HL1lawlnXLK3XnISDllbWwmrmGjlRLdxq2bpme1RAeqXtzWh6g0F//wCCnRiN2diwr2+Yse3iEs20g05Q5tT0BikOXwKf79vsoEvb6p6xjVhHP92nwDJmX+9hwsf26dXbPiNvZ/98x67/+5T+ev0aWxbXCwOX41zLxia+O73B6Y57fN1u6GvN+Zmbc8XITigTAcB0Rl6X8QB4hDgEpoXypZz2q37D5FVnVa9t1n/dUgHw8uKMq9BmWqjoJoP3zevM+zG8jmVKE5hKpRShw9WTFZW04D7TscAC+B0RcOD9FHLnzqkg0HFOQMMMb5DoBKGKGgUGLEkCIzq5YEEkpastcWQyDYQyByJYBkBgx2nQsOEaSOx4girqOzDgwj8wYickWNAiHLe0JESMsiicTLaQh84PBm6WKlst/TD9hXQV25wWBLQP4jJw435MXD58RynxFDPKT30golBxluAtOI3iOMOcs5Bc2fFF8sPd2OFVBO24WQJ9CmEIG4HwQAb4ARmFS0aK8qoL/cLnXyA0FTE23FBSZf+AYEqCzpF4YojrgN5J004lt/LKFD7RHDAVQYEMh8lIQErAICImJgOZWD0ohHARdhg5wJdzSKxVaXhX6c7y8uQN1wAWmLOU0IQUShiQo0fZTceadqaMdP2uXwEAAAAA') format('woff2');
  }

  .icon {
    font-family: "HMfont-home" !important;
    font-size: 60upx;
    font-style: normal;
    color: #000000;

    &.jia {
      &:before {
        content: "\e641";
      }
    }

    &.jian {
      &:before {
        content: "\e643";
      }
    }

    &.shanchu {
      &:before {
        content: "\e6a4";
      }
    }

  }

  .price {
    color: red;
  }

  .checkbox-box {
    display: flex;
    align-items: center;

    .checkbox {
      width: 35upx;
      height: 35upx;
      border-radius: 100%;
      border: solid 2upx #f06c7a;
      display: flex;
      justify-content: center;
      align-items: center;

      .on {
        width: 25upx;
        height: 25upx;
        border-radius: 100%;
        background-color: #f06c7a;
      }
    }

    .text {
      font-size: 28upx;
      margin-left: 10upx;
    }
  }

  .status {
    width: 100%;
    height: 0;
    position: fixed;
    z-index: 10;
    background-color: #fff;
    top: 0;
    /*  #ifdef  APP-PLUS  */
    height: var(--status-bar-height); //覆盖样式
    /*  #endif  */
  }

  .header {
    width: 92%;
    padding: 0 4%;
    height: 100upx;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #fff;
    /*  #ifdef  APP-PLUS  */
    top: var(--status-bar-height);

    /*  #endif  */
    .title {
      font-size: 36upx;
    }

  }

  .place {

    background-color: #ffffff;
    height: 100upx;
    /*  #ifdef  APP-PLUS  */
    margin-top: var(--status-bar-height);
    /*  #endif  */
  }

  .goods-list {
    width: calc(99%);
    margin: 0 auto;
    padding-bottom: 120upx;

    .tis {
      width: 100%;
      height: 60upx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32upx;
    }

    .row {
      height: calc(22vw + 40upx);
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      z-index: 4;
      border: 0;

      .menu {
        .icon {
          color: #fff;
        }

        position: absolute;
        width: 30%;
        height: 100%;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        color: #fff;
        z-index: 2;
      }

      .carrier {
        @keyframes showMenu {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-30%);
          }
        }

        @keyframes closeMenu {
          0% {
            transform: translateX(-30%);
          }

          100% {
            transform: translateX(0);
          }
        }

        &.open {
          animation: showMenu 0.25s linear both;
        }

        &.close {
          animation: closeMenu 0.15s linear both;
        }

        background-color: #fff;

        .checkbox-box {
          padding-left: 20upx;
          flex-shrink: 0;
          height: 22vw;
          margin-right: 20upx;
          align-items: flex-start;
        }

        position: absolute;
        width: 100%;
        padding: 0 0;
        height: 100%;
        z-index: 3;
        display: flex;
        align-items: center;

        .goods-info {
          width: 100%;
          display: flex;
          overflow: hidden;

          .img {
            width: 22vw;
            height: 22vw;
            border-radius: 10upx;
            overflow: hidden;
            flex-shrink: 0;
            margin-right: 10upx;
            border: 1px solid #f3f3f3;

            image {
              width: 22vw;
              height: 22vw;
            }
          }

          .info {
            width: 100%;
            height: 22vw;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10upx;
            box-sizing: border-box;

            .title {
              width: 100%;
              font-size: 28upx;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            .price-number {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;

              .order-price {
                flex-shrink: 0;
              }

              .number {
                display: flex;
                justify-content: center;
                align-items: center;

                .input {
                  width: 60upx;
                  height: 60upx;
                  margin: 0 10upx;
                  background-color: #f3f3f3;

                  input {
                    width: 60upx;
                    height: 60upx;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-size: 26upx;
                  }
                }

                .sub,
                .add {
                  width: 45upx;
                  height: 45upx;
                  background-color: #f3f3f3;
                  border-radius: 5upx;

                  .icon {
                    font-size: 22upx;
                    width: 45upx;
                    height: 45upx;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .footer {
    width: 92%;
    padding: 0 4%;
    background-color: #fbfbfb;
    height: 100upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28upx;
    position: fixed;
    bottom: 0upx;
    z-index: 5;

    .delBtn {
      border: solid 1upx #f06c7a;
      color: #f06c7a;
      padding: 0 30upx;
      height: 50upx;
      border-radius: 30upx;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .settlement {
      // width: 60%;
      flex:1;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .sum {
        width: 50%;
        font-size: 28upx;
        margin-right: 10upx;
        display: flex;
        justify-content: flex-end;

        .money {
          font-weight: 600;
        }
      }

      .btn {
        padding: 0 30upx;
        height: 50upx;
        background-color: #f06c7a;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 30upx;
      }
    }
  }
</style>
