import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import keep from "./modules/keep";
import order from "./modules/order";
order
import {LEJU_USER} from '../api/config.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
	getters:{
		user(state){
			let userInfo = state.user.userInfo
			if(userInfo.username){
				return userInfo
			}else{
				return uni.getStorageSync("LEJU_USER")
			}
		},
		userId(state,getters){
			var user = getters.user
			if(user.username){
				return user.id
			}
			return ''
		}
	},
	modules:{
		user,
		order,
		keep
	}
})
export default store