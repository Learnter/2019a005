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

<style>
	/*每个页面公共css */
  @import './common/uni.css';
	page {
		height: auto;
		min-height: 100%;
    background:#F7F5F4;  
    letter-spacing:1px;  
   font-family:微软雅黑 ;
    }
    view{
        line-height:1;
    }
</style>
