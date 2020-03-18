<template>
	<view>
		<!-- 收货地址 -->
		<view class="addr" @tap="selectAddress">
			<view class="icon"><image src="../../../static/icons/addricon.png" mode=""></image></view>
			<view class="right">
				<view class="tel-name">
					<view class="name">{{ recinfo.name }}</view>
					<view class="tel">{{ recinfo.tel }}</view>
				</view>
				<view class="addres">{{ recinfo.cityStr }} {{ recinfo.cityBak }}</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row, index) in buylist.orderDetailList" :key="index">
				<view class="goods-info">
					<view class="img"><image :src="row.coverImg"></image></view>
					<view class="info">
						<view class="title">{{ row.gname }}</view>
						<view class="spec">选择 : {{ row.color_text }} 数量×{{ row.count }}</view>
						<view class="price-number">
							<view class="price">￥{{ row.price * row.count }}</view>
							<view class="number"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 提示-备注 -->
		<view class="order">
			<view class="row">
				<view class="left">积分 :</view>
				<view class="right">已扣除{{ int }}积分抵扣{{ deduction | toFixed }}元</view>
			</view>
			<view class="row">
				<view class="left">备注 :</view>
				<view class="right"><input placeholder="选填,备注内容" v-model="note" /></view>
			</view>
		</view>
		<!-- 明细 -->
		<view class="detail">
			<view class="row">
				<view class="nominal">商品金额</view>
				<view class="content">￥{{ buylist.price | toFixed }}</view>
			</view>
			<view class="row">
				<view class="nominal">运费</view>
				<view class="content">￥+{{ buylist.freight | toFixed }}</view>
			</view>
		</view>
		<view class="blck"></view>
		<view class="footer">
			<view class="settlement">
				<view class="sum">
					合计:
					<view class="money">￥{{ Number(buylist.price)+Number(buylist.freight) | toFixed }}</view>
				</view>
				<view class="btn" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
import {addOrderBatch} from "../../../api/mine/order.js"
export default {
	data() {
		return {
			goodsPrice:0.0,	//商品合计价格
			sumPrice:0.0,	//用户付款价格
			freight:12.00,	//运费
			note:'',		//备注
			int:1200,		//抵扣积分
			deduction:0,	//抵扣价格
			froms:"",
			recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{"label":"广东省-深圳市-福田区","value":[18,2,1],"cityCode":"440304"},detailed:'深南大道1111号无名摩登大厦6楼A2'},isDefault:true}

		};
	},
	onLoad(option) {
		console.log(option);
		this.froms = option.from
	},
	onShow() {
		console.log(this.buylist);
		if(!this.buylist.orderDetailList){	
			uni.switchTab({
				url: '../../category/index'
			});
		}
		uni.getStorage({
			key:'selectAddress',
			success: (e) => {
				console.log(e);
				this.recinfo = e.data;
				uni.removeStorage({
					key:'selectAddress'
				})
			},
			fail:(f)=>{
			var data = uni.getStorageSync("ADDRESS_USE")
				this.recinfo = data;
				console.log(data);
			}
		})
	},
	onHide() {

	},
	onBackPress() {
		//页面后退时候，清除订单信息
		this.clearOrder();
	},
	filters: {
		toFixed:function(x) {
			return parseFloat(x).toFixed(2);
		}
	},
	computed:{
		buylist() {
		 return this.$store.state.order.tempOrder
		}
			
	},
	methods: {
		clearOrder(){
			uni.removeStorage({
				key: 'buylist',
				success: (res)=>{
					this.buylist = [];
					console.log('remove buylist success');
				}
			});
		},
		toPay(){
			uni.showLoading({
				title: '正在提交订单...'
			})
			var skuList = {};
			for(var i = 0 ; i < this.buylist.orderDetailList.length; i ++){
				var sku = this.buylist.orderDetailList[i];
					skuList['orderDetail['+i+'].skuId'] = sku.skuId;
					skuList['orderDetail['+i+'].price'] = sku.price;
					skuList['orderDetail['+i+'].count'] = sku.count;
			}
			var postData = {
				userId: this.buylist.userId,
				addressId: this.recinfo.id,
				count: this.buylist.count,
				price: this.buylist.price,
				...skuList
			}
			//本地模拟订单提交UI效果
			// uni.showLoading({
			// 	title:'正在提交订单...'
			// })
			addOrderBatch(postData).then(res=>{
				if(res.code == 'S'){
					uni.hideLoading();
					// 获取返回的订单id
					if(this.froms=="cart"){
						uni.removeStorageSync("leju-buycart")
					}
					this.froms = "";
					var orderId = res.orderId;
					uni.navigateTo({
						url: '../pay/payment/payment?price=' + this.buylist.price+'&orderId='+orderId
					})
				}else{
					uni.hideLoading();
					uni.showToast({
						title:'提交失败!'
					})
				}
			})
			

		},
		//选择收货地址
		selectAddress(){
			uni.navigateTo({
				url:'../address/address?type=select'
			})
		}
	}
}
</script>

<style lang="scss">
.addr {
	width: 86%;
	padding: 20upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	display: flex;
	.icon {
		width: 80upx;
		height: 80upx;
		display: flex;
		align-items: center;
		image {
			width: 60upx;
			height: 60upx;
		}
	}
	.tel-name {
		width: 100%;
		display: flex;
		font-size: 32upx;
		.tel {
			margin-left: 40upx;
		}
	}
	.addres {
		width: 100%;
		font-size: 26upx;
		color: #999;
	}
}
.buy-list {
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	.row {
		margin: 30upx 0;
		.goods-info {
			width: 100%;
			display: flex;
			.img {
				width: 22vw;
				height: 22vw;
				border-radius: 10upx;
				overflow: hidden;
				flex-shrink: 0;
				margin-right: 10upx;
				image {
					width: 22vw;
					height: 22vw;
				}
			}
			.info {
				width: 100%;
				height: 22vw;
				overflow: hidden;
				display: flex;
				flex-wrap: wrap;
				position: relative;
				.title {
					width: 100%;
					font-size: 28upx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					// text-align: justify;
					overflow: hidden;
				}
				.spec {
					font-size: 22upx;
					background-color: #f3f3f3;
					color: #a7a7a7;
					height: 40upx;
					display: flex;
					align-items: center;
					padding: 0 10upx;
					border-radius: 20upx;
					margin-bottom: 20vw;
				}
				.price-number {
					position: absolute;
					width: 100%;
					bottom: 0upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					font-size: 28upx;
					height: 40upx;
					.price {
						color: #f06c7a;
					}
					.number {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
	}
}
.order {
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	.row {
		margin: 20upx 0;
		height: 40upx;
		display: flex;
		.left {
			font-size: 28upx;
		}
		.right {
			margin-left: 40upx;
			font-size: 26upx;
			color: #999;
			input {
				font-size: 26upx;
				color: #999;
			}
		}
	}
}
.blck {
	width: 100%;
	height: 100upx;
}
.footer {
	width: 92%;
	padding: 0 4%;
	background-color: #fbfbfb;
	height: 100upx;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 28upx;
	position: fixed;
	bottom: 0upx;
	z-index: 5;

	.settlement {
		width: 80%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.sum {
			width: 50%;
			font-size: 28upx;
			margin-right: 10upx;
			display: flex;
			justify-content: flex-end;
			.money {
				font-weight: 600;
			}
		}
		.btn {
			padding: 0 30upx;
			height: 60upx;
			background-color: #f06c7a;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30upx;
			border-radius: 40upx;
		}
	}
}
.detail {
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	.row {
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nominal {
			font-size: 28upx;
		}
		.content {
			font-size: 26upx;
			color: #f06c7a;
		}
	}
}
</style>
