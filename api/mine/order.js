import request from "../request.js"

export function addOrderBatch(data) {
	return request({
		url: "/api/leju/front/order/addOrderBatch",
		data,
		method:"POST"
	})
}
export function payConfirm(data) {
	return request({
		url: "/api/leju/front/order/payConfirm",
		data,
	})
}



export function orderList(data){
	return request({
		url: '/api/leju/front/order/list',
		method: 'get',
		data
	})
}
// 废弃
 export function addOrders(data){
	return request({
		url: '/api/leju/front/order/addOrders',
		method: 'post',
		data
	})
}
 
 
 export function allDone(data){
	return request({
		url: '/api/leju/front/order/allDone',
		method: 'get',
		data
	})
}
// 取消未付款订单 仅当状态为0(未付款)时允许取消
 export function delOrderPre(data){
	return request({
		url: '/api/leju/front/order/delOrderPre',
		method: 'get',
		data
	})
}
// 退单
 export function backOrder(data){
	return request({
		url: '/api/leju/front/order/backOrder',
		method: 'post',
		data
	})
}
 export function orderBackList(data){
	return request({
		url: '/api/leju/front/order/orderBackList',
		method: 'get',
		data
	})
}


