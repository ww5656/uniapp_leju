import {baseUrl} from "./config.js"
function request(options) {
	return new Promise((reslove, reject) => {
		uni.request({
			url: baseUrl+options.url, //仅为示例，并非真实接口地址。
			data:options.data || '',
			method:options.method || 'get',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				reslove(res.data);
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}

 

export default request
