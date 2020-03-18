<template>
	<view class="register">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
				<view type="primary" class="but-fail" @tap="handleFail">
					<image src="../../../static/icons/modify.png" mode=""></image>
					上传头像
				</view>
			</view>
			<!-- 主体 -->
			<view class="main">
				<wInput v-model="username" type="text" maxlength="11" placeholder="用户名"></wInput>
				<wInput v-model="passData" type="password" maxlength="11" placeholder="登录密码" isShowPass></wInput>
				<wInput v-model="phoneData" type="text" maxlength="11" placeholder="手机号"></wInput>
				<wInput v-model="mailbox" type="text" maxlength="11" placeholder="邮箱"></wInput>

				<wInput v-model="verCode" type="number" maxlength="4" placeholder="验证码" isShowCode ref="runCode" @setCode="getVerCode()"></wInput>
			</view>

			<wButton text="注 册" :rotate="isRotate" @click.native="startReg()"></wButton>

			<!-- 底部信息 -->
			<view class="footer">
				<text @tap="isShowAgree" class="cuIcon" :class="showAgree ? 'cuIcon-radiobox' : 'cuIcon-round'">同意</text>
				<!-- 协议地址 -->
				<navigator url="" open-type="navigate">《协议》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
import {baseUrl} from "../../../api/config.js"
import {register} from "../../../api/mine/user.js"
var _this;
import wInput from '@/components/watch-login/watch-input.vue'; //input
import wButton from '@/components/watch-login/watch-button.vue'; //button

export default {
	data() {
		return {
			//logo图片 base64
			logoImage:"",
			phoneData: '', // 用户/电话
			passData: '', //密码
			verCode: '', //验证码
			username: '',
			mailbox:"",
			showAgree: true, //协议是否选择
			isRotate: false //是否加载旋转
		};
	},
	components: {
		wInput,
		wButton
	},
	mounted() {
		_this = this;
	},
	methods: {
		isShowAgree() {
			//是否选择协议
			_this.showAgree = !_this.showAgree;
		},
		getVerCode() {
			//获取验证码
			if (_this.phoneData.length != 11) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '手机号不正确'
				});
				return false;
			}
			console.log('获取验证码');
			this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
			uni.showToast({
				icon: 'none',
				position: 'bottom',
				title: '模拟倒计时触发'
			});

			setTimeout(function() {
				_this.$refs.runCode.$emit('runCode', 0); //假装模拟下需要 终止倒计时
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '模拟倒计时终止'
				});
			}, 3000);
		},
		handleFail(){
			uni.chooseImage({
			    count: 1, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
			       var file = res.tempFilePaths[0];
					uni.uploadFile({
					            url: baseUrl+'/api/leju/admin/material/uploadImg', //仅为示例，非真实的接口地址
					            filePath: file,
					            name: 'file',
					            success: (uploadFileRes) => {
					                console.log(uploadFileRes.data);
									var resObj = JSON.parse(uploadFileRes.data);
									_this.logoImage = resObj.ossUrl
					            }
					        });
			    }
			});
		},
		startReg() {
			//注册
			if (this.isRotate) {
				//判断是否加载中，避免重复点击请求
				return false;
			}
			if (this.showAgree == false) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '请先同意《协议》'
				});
				return false;
			}
			if (this.phoneData.length != 11) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '手机号不正确'
				});
				return false;
			}
			if (this.passData.length < 6) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '密码不正确'
				});
				return false;
			}
			if (this.verCode.length != 4) {
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '验证码不正确'
				});
				return false;
			}
			register({
				username:this.username,
				password:this.passData,
				nickname:this.username,
				tel:this.phoneData,
				email:this.mailbox,
				avatar:this.logoImage
				
				
				
			}).then(res=>{
				console.log(res);
				if(res.code=="S"){
					uni.showToast({
						title:"注册成功"
					})
					setTimeout(()=>{
						uni.navigateTo({
							url:"./login"
						})
					},200)
				}
			})
		
		}
	}
};
</script>

<style>
@import url('../../../components/watch-login/css/icon.css');
@import url('./css/main.css');
</style>
