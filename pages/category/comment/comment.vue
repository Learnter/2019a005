<template>
  <!-- 评论页面-->
	<view class="comment">
		<return-nav>
		  <text>评论详情</text>
		</return-nav>
    
      <!--导航切换按钮 -->
      <view class="nav-list" >
        <view class="nav-list-li" v-for="(item,index) in comTab" :key="index" @tap="toggleNav(index,item.type)">
           <text :class="tabIndex == index ? 'nav-text' : '' ">{{item.name}}({{item.count}})</text>
        </view>
      </view>
      
      <view class="com-main" v-if="comData.length !== 0">
          <!-- 评论信息-->
        <view class="comment-list">
           <view class="comment-item" v-for="(item,index) in comData" :key="index">
             <view class="com-item-head uni-inline-item">
               <view class="item-head-left uni-inline-item">
                 <text>{{item.username}}</text>
                 <text class="member-level">({{item.user_level}})</text>
                 <uni-rate :disabled="true" :value="item.score" :size="18"></uni-rate>
               </view>
               <text>{{item.add_time}}</text>
             </view>
             <view class="com-item-content">
               <view class="item-content-word">
                 {{item.content}}
               </view>
               <view>
                 <view class="item-content-img" v-for="(piItem,piIndex) in item.comment_picture" :key="piIndex">
                   <image  :src="piItem" ></image>
                 </view>
               </view>
             </view>
           </view>
        </view>
        <uni-load-more :status="status" color="#007aff" />
      </view>  
        <!--没有评论信息-->
       <view class="mescroll-empty" v-else>
        <image class="empty-icon" src="../../../static/ga005_67.png" mode="widthFix"></image>
        <p class="empty-tip">暂无评论</p>
      </view>
	</view>
</template>

<script>
  import uniRate from '@/components/uni-rate/uni-rate.vue';
  import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		data() {
			return {
        status:'end',
        goods_id:'',
        tabIndex:0,//导航栏切换
				comTab:[],//导航栏数据
        comData:[],//评论数据
        type:0, //评论的类型
        rows:1, //评论第几页
        page:10,//每页的数量 
			};
		},
    onLoad(e) {
      this.goods_id = e.id; 
      this.fetchNum();
      this.fetchData();
    },
    methods:{
      //请求导航数据
      fetchNum(){
        let url = "goods/commentNum";
        let data = {
          goods_id:this.goods_id
        };
        this.$Request.get(url,data).then( res => {
           if(res && res.code==200 && res.data){
             this.comTab = res.data;
           }
        })
      },
      //请求评论数据
      fetchData(){
        uni.showLoading({
              title:'努力加载中....'
          })
        let url = "goods/commentList"
        let data = {
          goods_id:this.goods_id,
          type:this.type,
          rows:this.rows,
          page:this.page
        }
        this.$Request.get(url,data).then( res => {
          if(res && res.code == 200 && res.data){
              this.comData = res.data;
              uni.hideLoading(); //隐藏加载提示
          }
        })
      },
      //切换评论导航按钮
      toggleNav(index,type){
        this.tabIndex = index;
        this.type = type;
        this.fetchData();
      }
    },
    components:{
      uniRate,
      uniLoadMore
    }
	}
</script>

<style lang="scss" scoped>
  
  //导航栏样式
  .nav-list{
    height:80upx;
    background:white;
    display:flex;
    justify-content:space-around;
    align-items:center;
    bottom:10upx;
    .nav-text{
      padding-bottom:8upx;
      border-bottom:2upx solid #00d693;
      font-weight:700;
    }
  }
  
  //空数据的样式
  .mescroll-empty{
    width: 100%;
    padding-top: 40upx;
    text-align: center;
    padding-bottom: 40upx;
    background: #ffffff;
    margin-top: 10upx;
    .empty-icon{
      width: 30% !important;
      margin-bottom: 20upx;
      margin-top: 12%;
    }
    .empty-tip{
      margin-top: 12upx;
      font-size: 28upx;
      color: #E7E4E2;
    }
  }
  
  //评论数据的样式
  .comment-list{
    margin:20upx 16upx;
    .comment-item{
        background:white;
        padding:10upx;
        margin:10upx 0;
        border-radius:10upx;
        .com-item-head{
          justify-content:space-between;
          margin-bottom:10upx;
          text{
            margin:0;
            padding:0;
          }
          .item-head-left{
            flex:1;
            .member-level{
              margin:0 6upx;
            }
          }
        }
        .item-content-img{
          width:128upx;
          height:128upx;
          text-align: center;
          border: 1px solid #F1F1F1;
          display: inline-block;
          margin: 10upx 10upx 0 0;
        }
    }
 }
</style>
