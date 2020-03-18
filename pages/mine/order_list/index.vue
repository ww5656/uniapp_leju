<template>
	<div class="order-main">
		<radio-group class="head-bar" @change="headChange">
			<label class="label"  v-for="item in headItems" :class="{'active':item.value==current}" :key="item.value">
				<radio :value="item.value" :checked="item.value === current" />
				<view>{{item.name}}</view>
			</label>
		</radio-group>

		<div class="card-list">
			<div class="card" v-for="item in orderListCom" :key="item.orderId">
				<div class="order-title">
					<text>订单编号: {{item.orderId}}</text>
					
					<text class="status" v-if="item.process">{{orderBackText(item.process)}}</text>
					<text class="status" v-else>{{orderStatusText}}</text>
				</div>
				<!-- skublock -->
				<div class="sku-block" v-for="(sku,index) in item.subList" :key="index">
					<image class="img" :src="sku.cover_img" mode=""></image>
					<div class="info">
						<div class="p1">
							<text class="title">{{sku.gname}}</text>
							<text class="price">¥{{sku.price}}</text>
						</div>
						<div class="p2">
							<text>编号：{{sku.sku_code}}</text>
							<text>x 1</text>
						</div>
						<div class="p3">
							<text>规格：{{sku.color_text}}</text>

						</div>
						<div @tap="goOrderBack(sku)" class="p4" v-if="current==2">
							<text>退货</text>
						</div>

					</div>

				</div>
				<div class="total-price">
					<table>时间: {{item.addTime}}</table>
					<!-- 退款显示 -->
					<text v-if="item.order_price">合计: {{item.order_price}}</text>
					<text v-else>合计: 200</text>
				</div>
				<!-- buttons -->
				<div class="btns">
					<!-- 订单状态:  未付款: 0 ;  已付款: 1; 已发货: 2; 已收货: 3;  申请退款: 9; 结束订单: statusend: 1-->
					<div class="btn" @click="delOrderPre(item.orderId)" v-if="current==0">取消订单</div>
					<div class="btn btn-pay" @tap="goPay(item.orderId,item.totalPrice)" v-if="current==0">付款</div>
					<div class="btn btn-receive" v-if="current==2" @tap="allDone(item.orderId)">确认收货</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {orderList,delOrderPre,allDone,orderBackList} from "../../../api/mine/order.js"
	import {isLogin} from '@/utils/common.js';
	export default {
		name: 'Order',
		data() {
			return {
				orderList: [],
				orderBackList:[], //退单列表
				current: '0',
				// <!-- 订单状态  1 已付款 ;  2 已发货; 3: 已收货;   9 申请退款 -->
				headItems: [{
						name: '待付款',
						value: '0'
					}, {
						name: '已付款',
						value: '1'
					},
					{
						name: '等待收货',
						value: '2'
					},
					{
						name: '已收货',
						value: '3'
					},
					{
						name: '申请退款',
						value: '9'
					}
				],
				orderListLocal: [], // 未支付订单
			}
		},
		onLoad(option) {
			this.current = option.type;
			if(isLogin()){
				this.getOrderList();
				this.getOrderBackList();
			}else{
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能查看',
					success: (res) => {
						if (res.confirm) {
							uni.navigateTo({
								url: '../login/login'
							});
						}
					}
				});
			}
		},
		computed: {
			orderListCom() {
				/**
				 * 问题: 如果一个订单是合并订单,有3个sku. 如果退了其中一个,会导致订单列表无法显示哪一个被退了,这是api不完善
				 * 知道有这个情况,暂时不用处理
				 * 可以把status = 9 的状态暂时归并为  	等待发货 状态 或者暂时不处理.
				 * 
				 */
				// 退单列表 应该单独获取 而不应该对原来的订单列表数据进行 filter过滤 
				if(this.current == '9'){
					return  this.orderBackList;
				}
				// 如果申请退货了 肯定是收到货了  对之前的bug进行修正 但是还是有的问题 ,比如会造成重复退货
				if(this.current == '2'){
					return this.orderList.filter(item => (item.status == 2||item.status == 9));
				}
				return this.orderList.filter(item => item.status == this.current);
			},
			orderStatusText() {
				var text = '未付款';
				switch (this.current) {
					case '0':
						text = '未付款'
						break;
					case '1':
						text = '等待发货'
						break;
					case '2':
						text = '已发货'
						break;
					case '3':
						text = '已收货'
						break;
					
					default:
						break;
				}
				return text;
			},
			
		},
		methods: {
			async getOrderList() {
				var userId = this.$store.getters.userId;
				// 通过网络获取orderList
				var res = await orderList({
					userId
				});
				// 获取本地未支付订单
				this.orderListLocal = uni.getStorageSync('leju_order');
				
				this.orderList = res.data.list;

			},
			headChange(e) {
				this.current = e.detail.value;
			},
			delOrderPre(orderId){
				delOrderPre({
					orderId
				}).then(res=>{
					if(res.code=='S'){
						uni.showToast({
							title: '删除成功!',
							duration:800
						})
						//重新刷新列表
						this.getOrderList()
					}else{
						uni.showToast({
							title: '删除失败!',
							duration:800
						})
					}
				})
			},
			//已收货
			allDone(orderId){
				allDone({
					id: orderId
				}).then(res=>{
					if(res.code=='S'){
						uni.showToast({
							title: '确认收货成功!',
							duration:800
						})
						//重新刷新列表
						this.getOrderList()
					}else{
						uni.showToast({
							title: '确认收货失败!',
							duration:800
						})
					}
				})
			},
			//去支付
			goPay(orderId,price){
				uni.navigateTo({
					url: '/pages/mine/pay/payment/payment?price=' + price+'&orderId='+orderId
				})
			},
			//跳转售后页面
			goOrderBack(sku){
				// 通过vuex保存交互数据
				console.log('sku',sku);
				this.$store.commit('order/ADD_TEMP_ORDER_BACK',sku);
				uni.navigateTo({
					url:'./orderBack/index'
				})
			},
			//退单列表
			getOrderBackList(){
				orderBackList({
					userId: this.$store.getters.userId
				}).then(res=>{
					// 对数据格式进行变换 拼装为符合渲染条件的数据格式
					var backList = res.data;
					for(var i = 0 ; i < backList.length ; i ++){
						var orderBackObj = backList[i];
						var obj = {
							orderId: orderBackObj.orderId,
							addTime: orderBackObj.addtime,
							order_price: orderBackObj.order_price,
							process: orderBackObj.process,  // 退单状态
							subList: [{
								...orderBackObj
							}]
						}
						// 添加的到退单列表
						this.orderBackList.push(obj);
					}
				})
			},
			// 退款进度
			// process 进度: 0 等待处理 ; 1 确认退货,等待收货; 2 : 确认收货,已退款 ; 9 : 拒绝退货
			orderBackText(process){
				var text = '未付款';
				switch (process) {
					case '0':
						text = '等待处理'
						break;
					case '1':
						text = '确认退货,等待收货'
						break;
					case '2':
						text = '确认收货,已退款'
						break;
					case '9':
						text = '拒绝退货'
						break;
					
					default:
						break;
				}
				return text;
			}
		}

	}
</script>

<style lang="scss" scoped>
	.order-main {
		.head-bar {
			width: 100%;
			overflow-y: auto;
			position: fixed;
			left: 0;
			top: 0;
			// #ifdef H5
			top: 80rpx;
			// #endif
			display: flex;
			justify-content: space-around;
			width: 100%;
			height: 62rpx;
			padding-top: 14rpx;
			background-color: #354E44;
			color: #fff;
			font-size: 30rpx;
			line-height: 62rpx;
			z-index: 999;

			.label {
				radio {
					display: none;
				}

				&.active {
					border-bottom: 2rpx solid #DD524D;
					color: #DD524D;
				}

			}
		}

		.card-list {
			margin-top: 30rpx;
			margin-top: 130rpx;
			.card {
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
					display: flex;
					justify-content: space-between;
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
	}
</style>
