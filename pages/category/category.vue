<template>
  <!--分类页面-->
	<view class="category">
		
    <view class="headBox">
    	<!-- 首页头部 -->
    	<image class="bgImage" src="../../static/ga005_26_1.png" mode="widthFix"></image>
    	<view class="contentBox">
    		<view class="con_text">
    			<!-- <text>OPAY</text> -->
    			<h2>OPAY</h2>
    			<view class="con_buttom">
            <uni-icon type="arrowleft" size="30" color="white"></uni-icon>
    				<view class="conImg">
    					<image src="../../static/2019_a005_27.png" mode="widthFix"></image>
    				</view>
            <text>搜索</text>
    			</view>
    		</view>
    	</view>
    </view>
    <view class="cate-main">
        <view class="page-body">
        	<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
        		<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
        		    v-for="(item,index) in categoryList">
        			{{item.NAME}}
        		</view>
        	</scroll-view>
        	<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
        		<view :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index">
        			<image :src="item.LOGO" />
        			<view>{{item.NAME}}</view>
        		</view>
        		<page-foot :name="name" v-if="subCategoryList.length > 1"></page-foot>
        	</scroll-view>
        </view>
    </view>
	</view>
</template>

<script>
  import uniIcon from '@/components/uni-icon/uni-icon.vue'
	export default {
		data() {
			return {
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
				name: "七月_"
			}
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight * index;
			},
			getCategory() {
				for (var i = 1; i < 21; i++) {
					var subList = [];
					for (var j = 1; j < 31; j++) {
						subList.push({
							"NAME": "分类" + i + ":商品" + j,
							"LOGO": "http://placehold.it/50x50"
						})
					}
					this.categoryList.push({
						"NAME": "分类" + i,
						"subCategoryList": subList
					})
				}
				this.subCategoryList = this.categoryList[0].subCategoryList;
			}
		},
		onLoad: function () {
			this.getCategory();
			this.height = uni.getSystemInfoSync().windowHeight -140;
		},
    components:{
      uniIcon
    }
	}
</script>

<style lang="scss">
  
  .category{
    box-sizing:border-box;
    overflow:hidden;
  }
  
  /* 头部的样式*/
  .headBox {
  	height:140px;
  
  	.bgImage {
  		width: 100%;
  		z-index: 1;
  	}
  
  	.contentBox {
  		position: absolute;
  		left: 0;
      right: 0;
  		top: 100upx;
  		z-index: 2;
  
  		.con_text {
  			padding: 0 30upx;
  			color: white;
        
  			.con_buttom {
          margin-top:20upx;
          display:flex;
          align-items:center;
          justify-content:space-between;
  				.conImg {
            background:white;
            width:500upx;
            height:50upx;
            padding-left:10upx;
            border-radius:10upx;
            image{
              position:relative;
              width:40upx;
              top:50%;
              transform:translateY(-50%);
            }
  				}
  			}
  		}
  	}
  }
  
  .cate-main{
    
  /* 分类导航样式*/
  .page-body {
    display: flex;
    margin:0upx 10upx 0upx 10upx;
  }
  
  .nav {
  	display: flex;
  	width: 100%;
  }
  
  .nav-left {
  	width: 30%;
    
  }
  
  .nav-left-item {
  	height: 100upx;
  	border-right: solid 1px #E0E0E0;
  	border-bottom: solid 1px #E0E0E0;
  	font-size: 30upx;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  }
  
  .nav-right {
  	width: 70%;
  }
  
  .nav-right-item {
  	width: 28%;
  	height: 220upx;
  	float: left;
  	text-align: center;
  	padding: 11upx;
  	font-size: 28upx;
  }
  
  .nav-right-item image {
  	width: 100upx;
  	height: 100upx;
  }
  
  .active {
  	color: #007AFF;
  }

}
</style>
