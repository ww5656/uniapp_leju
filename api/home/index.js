import request from "../request.js"

export function getBannerList() {
	return request({
		url: "/api/leju/front/home/banners",
		data: {
			use: 0,
		},
	})
}
export function getBrandList() {
	return request({
		url: "/api/leju/front/home/brandList",
		
		
	})
}
export function gethotList() {
	return request({
		url: "/api/leju/front/home/hotList",
		
		
	})
}
