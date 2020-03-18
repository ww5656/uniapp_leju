let order = {
	namespaced:true,
	state:{
		tempOrder:{}
	},
	mutations:{
		ADD_ORDER_TEMP(state,data){
			state.tempOrder =data
		},
		
	},
	actions:{
		
	},
	getters:{},
}
export default order