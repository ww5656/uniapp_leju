<template>
	<!-- 订单确认页 -->
	<div class="order-detail">
		<div class="order-status">等待支付</div>
		<navigator class="address-block" url="../../address/index?type=select">
			<div class="send-name">{{address.name}} tel: {{address.tel}}</div>
			<div class="address">收货地址: {{address.addressText}}</div>
		</navigator>
		<div class="order-card">
			<div class="order-title">
				<text>订单编号: {{orderCom.id}}</text>
				<text class="status">等待支付</text>
			</div>
			<div class="sku-block" v-for="item in orderCom.orderDetailList" :key="item.skuId">
				<image class="img" :src="item.coverImg" mode=""></image>
				<div class="info">
					<div class="p1">
						<text class="title">{{item.gname}}</text>
						<text class="price">¥{{item.price}}</text>
					</div>
					<div class="p2">
						<text>编号：{{item.skuCode}}</text>
						<text>x {{item.count}}</text>
					</div>
					<div class="p3">
						<text>规格：{{item.color_text}}</text>

					</div>
				</div>
			</div>
			
			

			<div class="total-price">
				<text>合计: {{orderCom.price}}</text>
			</div>
			<!-- buttons -->
			<div class="btns">
				<div class="btn" @click="doPay">确认付款</div>
			</div>
		</div>
	</div>
</template>

<script>
	import orderApi from '@/api/order/index.js'
	const LEJU_ORDER_KEY = 'leju_order';
	export default {
		name: 'OrderDetail',
		data() {
			return {
				order: {},
				address: {},
				from: '', // 是否从购物车列表跳转过来的标识 如果是从购物车跳转过来,需要在提交订单后删除购物车内容
			}
		},
		onShow(){
			console.log('onShow.......')
		},
		// 每次都会触发  重新选择地址 需要在这里重新赋值
		// onShow(){   
		// 	var addressObj = uni.getStorageSync("selectAddress");
		// 	this.address = {
		// 		id: addressObj.id,
		// 		name: addressObj.name,
		// 		tel: addressObj.tel,
		// 		addressText: addressObj.address.region.label + addressObj.address.region.detailed
		// 	}
		// },
		// 只在第一次触发
		onLoad(option) {
			this.form = option.from;
			var addressObj = uni.getStorageSync("leju-address");
			// 把对象解析为可以显示的内容
			this.address = {
				id: addressObj.id,
				name: addressObj.name,
				tel: addressObj.tel,
				addressText: addressObj.cityStr+addressObj.cityBak
			}
		},
		computed: {
			orderCom() {
				return this.$store.state.order.tempOrder
			},

		},
		methods: {
			doPay() {
				uni.showLoading({
					title: '正在提交订单...'
				})
				// 构建提交订单的数据对象   关键!!!
				var skuList = {};
				for(var i = 0 ; i < this.orderCom.orderDetailList.length; i ++){
					var sku = this.orderCom.orderDetailList[i];
						skuList['orderDetail['+i+'].skuId'] = sku.skuId;
						skuList['orderDetail['+i+'].price'] = sku.price;
						skuList['orderDetail['+i+'].count'] = sku.count;
				}
				// 必须和 api的数据结构一模一样
				// 注意: qs在app中经测试 不可用 所以 之前的中后台的 qs序列化方式 在这里无效.
				// orderDetail[0]:{price:xx,skuId:xx}  ==> orderDetail[0].price='xx',orderDetail[0].skuId='xx'
				var postData = {
					userId: this.orderCom.userId,
					addressId: this.address.id,
					count: this.orderCom.count,
					price: this.orderCom.price,
					...skuList
				}
				orderApi.addOrderBatch(postData)
					.then(res=>{
						if(res.code == 'S'){
							uni.hideLoading();
							// 删除本地的购物车相关内容  如果是从购物车跳转过来的需要处理  这里在购物车跳转的时候添加了 ?from=cart的标识
							if(this.from == 'cart'){
								var skuListLs = uni.getStorageSync('leju-buycart');
								// 过滤不包含在skuList中的数据 
								skuListLs = skuListLs.filter(item=>{
									return !skuList.some(one=>one.tempId==item.tempId);
								})
								uni.setStorageSync('leju-buycart',skuListLs);
							}
							
							// 获取返回的订单id
							var orderId = res.orderId;
							uni.navigateTo({
								url: '../../pay/payment/payment?price=' + this.orderCom.price+'&orderId='+orderId
							})
						}else{
							uni.hideLoading();
							uni.showToast({
								title:'提交失败!'
							})
						}
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-detail {
		.order-status {
			font-size: 36rpx;
			color: #494949;
			height: 88rpx;
			border-bottom: 1px solid #E5E5E5;
			line-height: 88rpx;
			margin: 0 60rpx;
			box-sizing: border-box;
		}

		.address-block {
			font-size: 28rpx;
			color: #494949;
			border-bottom: 1px solid #E5E5E5;
			margin: 0 60rpx;
			box-sizing: border-box;
			padding: 30rpx 0;
		}

		.order-card {
			width: 672rpx;
			box-sizing: border-box;
			padding: 36rpx;
			border-radius: 24rpx;
			background-color: #fff;
			margin: 30rpx auto;
			font-size: 24rpx;
			color: #3E3E3E;

			.order-title {
				line-height: 33rpx;
				display: flex;
				justify-content: space-between;

				.status {
					color: #034C46;
				}

				border-bottom: 1px solid #F1ECE7;
				padding-bottom: 30rpx;
			}

			.sku-block {
				display: flex;
				justify-content: flex-start;
				border-bottom: 1px solid #F1ECE7;
				padding: 30rpx 0;

				.img {
					width: 162rpx;
					height: 162rpx;
					flex-shrink: 0;
					background-color: #8F8F94;
				}

				.info {
					width: 470rpx;
					margin-left: 28rpx;

					.p1,
					.p2 {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					.p1 {
						font-size: 26rpx;
						line-height: 37px;

						.title {
							color: #3E3E3E;
						}

						.price {
							colro: #8D8D8D;
						}
					}

					.p2,
					.p3 {
						font-size: 22rpx;
						color: #8D8D8D;
						line-height: 30rpx;
						margin-top: 5rpx;
					}

					.p4 {
						text-align: right;
						margin-top: 10rpx;
						color: #8D8D8D;
						text-decoration: underline;
					}

				}
			}

			.total-price {
				font-size: 26rpx;
				line-height: 37rpx;
				text-align: right;
				margin-top: 14rpx;
			}

			.btns {
				margin-top: 20rpx;
				display: flex;
				justify-content: flex-end;

				.btn {
					width: 124rpx;
					height: 50rpx;
					border: 1px solid #2D4F43;
					font-size: 26rpx;
					border-radius: 10rpx;
					color: #2D4F43;
					text-align: center;
					line-height: 50rpx;
					margin-left: 32rpx;
				}
			}

		}
	}
</style>
