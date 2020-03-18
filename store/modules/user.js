import {LEJU_USER} from '../../api/config.js'
import {doLogout} from "../../api/mine/user.js"
let user = {
	namespaced:true,
	state:{
		userInfo:{}
	},
	mutations:{
		SET_USER_INFO(state,data){
			state.userInfo =data
			uni.setStorageSync("LEJU_USER",data)
		},
		REMOVE_USER_INFO(state){
			state.userInfo ={}
			uni.removeStorageSync("LEJU_USER")
		}
	},
	actions:{
		logout({commit}){
			doLogout()
			commit("REMOVE_USER_INFO")
		}
	},
	getters:{},
}
export default user