<template>
	<view class="order-back">
		<div class="services">
			<div class="title">服务类型</div>
			<radio-group class="btns" name="status" @change="statusChange">
				<label class="btn" :class="{active:status=='1'}">
					<!-- 状态: '1' 退货 ;  '2' 仅退款 ; -->
					<radio value="1" /><text>退货</text>
				</label>
				<label class="btn" :class="{active:status=='2'}">
					<radio value="2" /><text>仅退款</text>
				</label>
			</radio-group>
		</div>
		<div class="card">
			<div class="order-title">
				<text>订单编号: {{product.orderId}}</text>
			</div>
			<!-- skublock -->
			<div class="sku-block">
				<navigator :url="'/pages/kind/detail/index?productId='+product.product_id"><image class="img" :src="product.cover_img" mode=""></image></navigator>
				<div class="info">
					<div class="p1">
						<text class="title">{{product.gname}}</text>
						<text class="price">¥{{product.price}}</text>
					</div>
					<div class="p2">
						<text>编号：{{product.sku_code}}</text>
						<text>x 1</text>
					</div>
					<div class="p3">
						<text>规格：{{product.color_text}}</text>

					</div>
				</div>

			</div>
			<div class="total-price">
				<!-- <table>时间: {{product.addTime}} </table> -->
				<text>合计: ¥{{product.count*product.price}}</text>
			</div>
		</div>
		<div class="bak">
			<div class="title">问题描述</div>
			<textarea class="text-area" @blur="textareaBlur" placeholder="请输入问题描述" />
		</div>
		<view class="btn-sub" @tap="doBack">提交</view>
	</view>
</template>

<script>
	import orderApi from '@/api/order/index.js'
	export default {
		data(){
			return {
				product:{},
				status: '1',
				reason:''
			}
		},
		onLoad(){
			console.log(this.$store.state.order.tempOrderBack)
			this.product = this.$store.state.order.tempOrderBack
		},
		methods:{
			statusChange(e){
				this.status = e.detail.value;
			},
			textareaBlur(e){
				this.reason = e.detail.value;
			},
			doBack(){
				orderApi.backOrder({
					userId: this.$store.getters.userId,
					orderId: this.product.orderId,
					skuId: this.product.skuId,
					reason: this.reason,
					status: this.status,
					count: this.product.count
				}).then(res=>{
					if(res.code =='S'){
						uni.navigateTo({
							url:'../index'
						})
					}else{
						uni.showToast({
							title: '提交失败!',
							duration: 800
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-back{
		box-sizing: border-box;
		padding:  30rpx 30rpx;
		.services{
			.title{
				color: #3E3E3E;
				font-size: 32rpx;
				line-height: 46rpx;
			}
			.btns{
				display: flex;
				justify-content: flex-start;
				.btn{
					
					width: 124rpx;
					height: 50rpx;
					border: 1px solid #354E44;
					border-radius: 10rpx;
					font-size: 22rpx;
					color: #354E44;
					text-align: center;
					line-height: 50rpx;
					margin: 10rpx 20rpx;
					
					&.active{
						background-color: #354E44;
						color: #fff;
					}
					radio{
						display: none;
					}
				}
			}
		}
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
					justify-content: flex-end;
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
						&.btn-closed{
							width: auto;
							padding: 0 1em;
							border-color: #DD524D;
						}
					}
				}
		
			}
			.bak{
				.title{
					margin: 20rpx auto;
				}
				.text-area{
					width: 100%;
					background-color: #fff;
					text-indent: 1em;
				}
				
			}
			.btn-sub{
				margin: 120rpx auto;
				width: 536rpx;
				height: 94rpx;
				font-size: 30rpx;
				text-align: center;
				line-height: 94rpx;
				background: #354E44;
				color: #fff;
				border-radius: 14px;
				border-radius: 14px;
			}
		}
</style>
