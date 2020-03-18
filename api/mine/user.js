import request from "../request.js"

export function doLogin(data) {
	return request({
		url: "/api/leju/front/user/doLogin",
		data,
		method:"POST"
	})
}
export function doLogout() {
	return request({
		url: "/api/leju/front/user/doLogout",
	})
}
export function register(data) {
	return request({
		url: "/api/leju/front/user/register",
		data,
		method:"POST"
		
	})
}



