import configdata from './config'
import cache from './cache'

module.exports = {
	config: function(name) {
		var info = null;
		if (name) {
			var name2 = name.split("."); //字符分割
			if (name2.length > 1) {
				info = configdata[name2[0]][name2[1]] || null;
			} else {
				info = configdata[name] || null;
			}
			if (info == null) {
				let web_config = cache.get("web_config");
				if (web_config) {
					if (name2.length > 1) {
						info = web_config[name2[0]][name2[1]] || null;
					} else {
						info = web_config[name] || null;
					}
				}
			}
		}
		return info;
	},
	post: function(url, data, header) {
		var userInfo = cache.get("app_user_info");
		header = header || "application/json";
		url = this.config("APIHOST")+url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "POST",
				header: {
					"content-type": header,
					"token": userInfo.token
				},
				success: function(result) {
					// token 验证失败 自动退出
					if (result.data.code == 1004 || result.data.code == 1104 || result.data.code == 1003 || result.data.code == 1006) {
                        console.log("token 验证失败 自动退出");
						cache.remove('app_user_info');

						uni.showToast({
							icon: 'none',
							title: '请先登陆'
						});
                        
                        setTimeout(function(){
                            uni.navigateTo({
                            	url: '/pages/login/login'
                            })
                        },2000)
					}
					succ.call(self, result.data)
				},
				fail: function(e) {
					error.call(self, e)
				}
			})
		})
	},
	upload: function(url, filePath, name, formData) {
		var userInfo = cache.get("app_user_info");
		url = this.config("APIHOST")+url;
		return new Promise((succ, error) => {
			uni.uploadFile({
				url: url,
				filePath: filePath,
				name: name,
				formData: formData,
				header: {
					"token": userInfo.token
				},
				success: function(result) {
					console.log(result);
					// token 验证失败 自动退出
					if (result.data.code == 1004 || result.data.code == 1104 || result.data.code == 1003 || result.data.code == 1006) {
						cache.remove('app_user_info');
						uni.navigateTo({
							url: '/pages/login/login'
						})
						uni.showToast({
							icon: 'none',
							title: '请先登陆'
						});
					}
					succ.call(self, JSON.parse(result.data));
				},
				fail: function(e) {
					error.call(self, e)
				}
			})
		})
	},
	get: function(url, data, header) {
		var userInfo = cache.get("app_user_info");
		header = header || "application/json";
		url = this.config("APIHOST")+url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "GET",
				header: {
					"content-type": header,
					"token": userInfo.token
				},
				success: function(result) {
					// token 验证失败 自动退出
					if (result.data.code == 1004 || result.data.code == 1104 || result.data.code == 1003 || result.data.code == 1006) {
						cache.remove('app_user_info');
						uni.navigateTo({
							url: '/pages/login/login'
						})
						uni.showToast({
							icon: 'none',
							title: '请先登陆'
						});
					}
					succ.call(self, result.data)
				},
				fail: function(e) {
					error.call(self, e)
				}
			})
		})
	}
}
