import store from '@/store/index.js'
import {
	LEJU_USER
} from '../api/config.js'
export function isLogin() {
	var userInfo = store.state.user.userInfo
	if (userInfo.username) {
		return true
	}
	var userData = uni.getStorageSync('LEJU_USER');
	if (userData.username) {
		store.state.user.userInfo = userData
		return true
	}
	return false
}
export function checkLogin(fn) {
	if (isLogin()) {
		fn();
	} else {
		uni.showModal({
			title: '未登录',
			content: '您未登录，需要登录后才能查看',
			success: (res) => {
				if (res.confirm) {
					uni.reLaunch({

						url: '/pages/mine/login/login'
					})
				} else if (res.cancel) {
					uni.navigateBack({
						delta: 1
					});
				}
			}
		});
	}
}
