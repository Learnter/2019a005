<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import './common/css/uni.css';
	page {
		height: auto;
		min-height: 100%;
    background:#F7F5F4;  
    letter-spacing:1px;
    overflow:auto;
    }
    
    view{
        line-height:1;        
    }
      
    image{
      width:100%;
    }
    
    .returnBtn {
      position: absolute;
      z-index: 10;
      width: 60upx;
    }
    
    /* 公共的更多icon样式*/
    .more-Icon {
    	width: 40upx;
    	padding: 6upx 18upx;
    	border: 2upx solid rgba(0, 0, 0, 0.12);
    	border-radius: 8upx;
    	z-index: 10;
    }
    
   h2 {
   	font-size: 32upx;
   	font-weight: 700;
   }
   
   h3{
     font-size:26upx;
     font-weight:700;
   } 
   
    /*小号字体 */
   .text-xm-size{ 
     font-size:24upx;
   }
   
   /* 中号字体*/
   .text-sm-size{
     font-size:26upx;
   }
   
     /*浅暗色-*/
   .text-color-gray{
     color: #C1C1C1;
   }
   
   .text-color-red{
     color:red;
   }
   
   /* 促销样式  例如-秒杀*/
   .good-text {
   	font-size: 14upx;
   	color: white;
   	background: red;
   	margin-right: 8upx;
   	padding: 2upx 6upx;
   }
   
   /* 删除下划线样式*/
   .text-del-style {
    position:relative;
   	font-size: 28upx;
   	margin-top: 4upx;
    color: rgba(0, 0, 0, 0.2);
    &::after{
      content:"";
      display:block;
      width:100%;
      border:1upx solid rgba(0, 0, 0, 0.2);
      position:absolute;
      top:50%;
      left:0;
      right:0;
     }
   }  	
</style>
