import Vue from 'vue'
import App from './App'
import httpApi from './common/js/httpApi'
import HttpRequest from './common/js/httpRequest'
import HttpCache from './common/js/cache'

Vue.config.productionTip = false

Vue.prototype.$api = httpApi
Vue.prototype.$Request = HttpRequest
Vue.prototype.$Sysconf = HttpRequest.config
Vue.prototype.$SysCache = HttpCache

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
