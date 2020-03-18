let keep = {
	namespaced:true,
	state:{
		tempKeep:[]
	},
	mutations:{
		ADD_KEEP_TEMP(state,data){
			state.tempKeep.push(data)
			uni.setStorageSync("LEJU_KEEP",state.tempKeep)
		},
		REMOVE_USER_INFO(state,id){
			
			var item = state.tempKeep.filter(item=>item.id ==id)
			uni.setStorageSync("LEJU_KEEP",state.tempKeep)
		}
		
	},
	actions:{
		
	},
	getters:{},
}
export default keep