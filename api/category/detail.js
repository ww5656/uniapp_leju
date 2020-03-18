import request from '../request.js'

export function getProductDetail(data){
	return request({
		url:"/api/leju/front/product/detail",
		data
	})
}

