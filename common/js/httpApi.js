/**
 * API接口配置文件
 */
module.exports = {
    common: {
        config: "config/getInfo" // 获取服务端配置
    },
    login: {
        phoneLogin: "user/registerOrLogin", // 手机号登陆
        weChatLogin: "user/weChatRegisterOrLogin", // 微信登陆
        logout: "user/logout" // 会员退出
    },
	transferShop: {
		index: 'shop/homeShopInfo',
		transferShopDetail: 'shop/transferShopDetail',
		collectTransferShop: 'shop/collectTransferShop',
		unCollectTransferShop: 'shop/unCollectTransferShop',
		seekingList: 'shop/seekingList',
		seekingDetail: 'shop/seekingDetail',
		transferShopList: 'shop/transferShopList',
		transferShopListByType: 'shop/transferShopListByType',
		searchTransferShopList: 'shop/getTransferShopList',
		collectionList: 'shop/collectionList',
		seekIngCollection: 'shop/seekIngCollection',
		releaseSeeking: 'shop/releaseSeeking',
		releaseTransferShop: 'shop/releaseTransferShop',
		getReleaseTransferShopDraft: 'shop/getReleaseTransferShopDraft',
		cancelCollection: 'shop/unCollectTransferShop',
		browseList: 'shop/browseList',
		browseDel: 'shop/browseDel',
		releaseList: 'shop/releaseList',
		releaseDel: 'shop/releaseDel',
        releaseSeekDel: 'shop/releaseSeekDel',
		releaseListSeek: 'shop/releaseListSeek',
		getNearbyStores: 'shop/getNearbyStores',
		errorCorrection: 'shop/errorCorrection'
	},
	webNotice: {
		noticeList: 'message/webNoticeList',
		noticeDetail: 'message/webNoticeDetail'
	},
    userMessage: {
        postMessage: "user/sendMessage", // 发布反馈信息
    },
    sendVerifyCode: 'sendPhoneVerifyCode' ,// 发送手机验证码
	uploadImage: 'uploadImage', // 上传图片
	uploadVideo: 'uploadVideo', // 上传视频
    NoticeList: {
        getNoticeList: "notice/noticeList", // 获取公告信息
        getNoticeDetail: "notice/noticeDetail", // 发布反馈信息
    },
    problem: {
        getProblemDetail: "problem/detail" // 获取常见问题
    },
    HelpList: {
        getHelpList: "help/getHelpList", // 获取公告信息
    },
    PartnerList: {
        getPartnerList: "shop/getPartnerList", // 获取公告信息
    },
    selection: {
        getDataList: "selection/getDataList", // 获取公告信息
        selectionDetail: "selection/selectionDetail", // 获取公告信息
    }
};