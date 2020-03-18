import request from '../request.js'
export function getProductList(data){
	return request({
		url:"/api/leju/front/product/list",
		data,
	})
}

