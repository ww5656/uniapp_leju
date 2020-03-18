import request from "../request.js"

export function addressList(data) {
	return request({
		url: "/api/leju/front/address/list",
		data,
	})
}
export function addressSave(data) {
	return request({
		url: "/api/leju/front/address/save",
		data,
		method:"POST"
	})
}
export function addressUpdate(data) {
	return request({
		url: "/api/leju/front/address/update",
		data,
		method:"POST"
	})
}
export function addressDel(data) {
	return request({
		url: "/api/leju/front/address/del",
		data,
	})
}


