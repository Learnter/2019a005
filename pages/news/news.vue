<template>
	<view>
     <!-- 返回按钮-->
    <return-back></return-back>
    
    <view class="newsImg">
      <image :src="detailInfo.thumb" mode="widthFix"></image>
    </view>
    <view class="newsContent">
      <view class="newsTip">
        <h3>{{detailInfo.title}}</h3>
        <h5>{{detailInfo.desc}}</h5>
      </view>
      <view class="textBox" v-html="detailInfo.content">
          正文内容.................
      </view>
    </view>
    <view class="discussBox uni-inline-item">
      <input type="text" value="" placeholder="发表您的评论" placeholder-style="text-align:center"/>
      <view class="disImg">
        <image src="/static/ga005_95.png" mode="widthFix"></image>
        <image src="/static/ga005_130.png" mode="widthFix"></image>
      </view>
    </view>  
	</view>
</template>

<script>
  import returnBack from "@/components/returnBack.vue";
	export default {
		data() {
			return {
				ID:0,
        detailInfo:""
			}
		},
		methods: {
			fetchData(){
         var url= "notice/detail";
         var data= {
           'id':this.ID
         }
        this.$Request.get(url,data).then(res => {
         if(res && res.code == 200 && res.data.length !== 0){
           console.log(res.data);
           this.detailInfo = res.data;
          }
        })
      },
      errLoad(e){
        console.log(e);
      }
		},
    onLoad(options) {
     this.ID = options.id;
     this.fetchData();
    },
    components:{
      returnBack
    }
	}
</script>

<style lang="scss" scoped>
  
  .newsImg{
    width:100%;
    min-height:650upx;
    background:#E6E6E6;
  }
  
    .returnBtn{
      position:absolute;
      top:20px;
      left:20px;
      z-index:1;
      width:66upx;
    }
    .newsContent{
      margin:20upx 10upx 100upx;
    }
      
    .newsTip{
      background:white;
      display:flex;
      flex-direction:column; 
      justify-content:space-between;
      margin-bottom:20upx;
      padding: 10upx 20upx;
      min-height:70upx;
      h3{
        margin-bottom:16upx;
        font-size:32upx;
      }
    }
    
    .textBox{
      background:white;
      padding: 30upx 20upx;
      box-sizing:border-box;
      min-height:400upx;
    }
    
    .discussBox{
      position:fixed;
      bottom:0;
      left:0;
      right:0;
      height:80upx;
      background:white;
      padding:0 20upx;
      justify-content:space-between;
    }
    .discussBox input{
      background:#E6E6E6;
      border-radius:10upx;
      padding:0 14upx;
      box-sizing:border-box;
      overflow:hidden;
    }
    .disImg{
      display:flex;
      align-items:center;
      image{
        width:60upx;
        &:nth-child(1){
          margin-right:30upx;
        }
      }
    }
</style>
