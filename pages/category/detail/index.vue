<template>
	<view class="detail-main">
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in swiperList" :key="swiper"><image :src="swiper"></image></swiper-item>
			</swiper>
			<view class="indicator">{{ currentSwiper + 1 }}/{{ swiperList.length }}</view>
		</view>
		<!-- 价格名字 -->
		<view class="info-box goods-info">
			<view class="price">￥{{ product.price_now }}</view>
			<view class="title">{{ product.detail_title }}</view>
		</view>
		<!-- 服务-规则选择 -->
		<view class="info-box spec">
			<view class="row" @tap="open">
				<view class="text">服务</view>
				<view class="content">
					<view class="serviceitem" v-for="(item, index) in goodsData.service" :key="index">{{ item.name }}</view>
				</view>
				<view class="arrow"><image src="../../../static/home/recommend/right-icon.png" mode=""></image></view>
			</view>
			<view class="row" @tap="openChoose">
				<view class="text">选择</view>
				<view class="content">
					<view>选择规格：</view>
					<view class="sp">
						<view v-for="item in product.skuList" :key="item.id"   class="sp-item" :class="{active:item.id==skuList.id}">{{ item.color_text }}</view>
					</view>
				</view>
				<view class="arrow"><image src="../../../static/home/recommend/right-icon.png" mode=""></image></view>
			</view>
		</view>
		<!-- 评价 -->
		<view class="info-box comments" id="comments">
			<view class="row">
				<view class="text">商品评价({{goodsData.comment.number}})</view>
				<view class="arrow" @tap="toRatings">
					<view class="show" >
						查看全部
					</view>
				</view>
			</view>
			<view class="comment" @tap="toRatings">
				<view class="user-info">
					<view class="face"><image :src="goodsData.comment.userface"></image></view>
					<view class="username">{{goodsData.comment.username}}</view>
				</view>
				<view class="content">
					{{goodsData.comment.content}}
				</view>
			</view>
		</view>
		<!-- 详情 -->
		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content"><rich-text :nodes="descriptionStr"></rich-text></view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box" @tap="openShare" >
					<view class="icon">
						<image src="../../../static/icons/share.png" mode=""></image>
						
					</view>
					<view class="text">分享</view>
				</view>
				<view class="box" >
					<view class="icon">
						<image src="../../../static/icons/kefu.png" mode=""></image>
						
					</view>
					<view class="text">客服</view>
					<button class="box-but" type="primary" open-type="contact"></button>
				</view>
				<view class="box" @tap="handleKeep">
					<view class="icon" v-if="isKeep">
						<image src="../../../static/icons/keep_active.png" mode=""></image>
					</view>
					<view class="icon" v-else>
						<image src="../../../static/icons/keep.png" mode=""></image>
					</view>
					<view class="text">{{isKeep?"已":""}}收藏</view>
				</view>
			</view>
			<view class="btn">
				<view class="joinCart" @tap="addCarts">加入购物车</view>
				<view class="buy" @tap="handleBuy">立即购买</view>
			</view>
		</view>
		<!-- 服务弹出层 -->
		<uni-popup ref="popup" type="bottom" >
			<view class="layer">
				<view class="content">
					<view class="row" v-for="(item, index) in goodsData.service" :key="index">
						<view class="title">{{ item.name }}</view>
						<view class="description">{{ item.description }}</view>
					</view>
				</view>
				<view class="btn"><view class="button" @tap="close">完成</view></view>
			</view>
		</uni-popup>
		<!-- 选择弹出层 -->
		<uni-popup ref="popup1" type="bottom" >
			<view class="card">
				<view class="card-top">
					<image class="img" :src="product.cover_img" mode=""></image>
					<view class="title-count">
						<view class="title">{{product.gname}}</view>
						<view class="sku-count">库存数量: {{skuList.count}}</view>
						<view class="sku-count">价格: ¥{{skuList.price}}</view>
					</view>
					<image src="../../../static/icons/x.png" class="close" @tap="closeChoose"></image>
				</view>
				<view class="card-center">
					<view class="common-title">颜色分类</view>
					<radio-group class="colors" @change="handleColors">
							<label class="color-item" :class="{active:item.id==skuList.id}" v-for="item in product.skuList" :key="item.id">
								<radio  :value="item.id" /><text>{{item.color_text}}</text>
							</label>
					</radio-group>
				</view>
				<view class="card-bottom">
					<view class="common-title">购买数量</view>
					<view class="buy-count-steps">
						<text class="step-reduce" @tap="btnReduce">-</text>
						<text class="step-text">{{skuNubmer}}</text>
						<text class="step-add" @tap="btnAdd">+</text>
					</view>
				</view>
				<view class="btn">
					<view class="joinCart" @tap="addCarts">加入购物车</view>
					<view class="buy" @tap="handleBuy">立即购买</view>
				</view>
			</view>
		</uni-popup>
		<!-- 底部分享弹窗 -->
		<uni-popup ref="showshare" type="bottom" >
			<view class="uni-share">
				<text class="uni-share-title">分享到</text>
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">{{ item.text }}</text>
					</view>
				</view>
				<text class="uni-share-btn" @tap="cancel">取消分享</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import {checkLogin} from '@/utils/common.js'
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import { getProductDetail } from '../../../api/category/detail.js';
export default {
	components: { uniPopup },
	data() {
		return {
			productId: '',
			isKeep:false,
			keepUrl:"../../../static/icons/keep.png",
			//轮播主图数据
			swiperList: [],
			//轮播图下标
			currentSwiper: 0,
			bottomData: [{
					text: '微信',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
					name: 'wx'
				},
				{
					text: '支付宝',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
					name: 'wx'
				},
				{
					text: 'QQ',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
					name: 'qq'
				},
				{
					text: '新浪',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
					name: 'sina'
				},
				{
					text: '百度',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
					name: 'copy'
				},
				{
					text: '其他',
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
					name: 'more'
				}
			],
			goodsData: {
				id: 1,
				name: '商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
				price: '127.00',
				number: 1,
				service: [
					{ name: '正品保证', description: '此商品官方保证为正品' },
					{ name: '极速退款', description: '此商品享受退货极速退款服务' },
					{ name: '7天退换', description: '此商品享受7天无理由退换服务' }
				],
				spec: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
				comment: {
					number: 102,
					userface: '../../../static/logo.png',
					username: '老王',
					content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
				}
			},
			selectSpec: null, //选中规格
			specClass: '', //规格弹窗css类，控制开关动画
			product: {},
			skuList:[],
			skuNubmer:"1",
			//富文本
			descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>'
		};
	},
	onLoad(option) {
		console.log(option);
		this.productId = option.productId;
		this.getDetail();
		var keepList =  uni.getStorageSync("LEJU_KEEP")
		console.log(keepList);
		this.isKeep = keepList.some(item => item.id==this.productId)
		console.log(this.productId);
		
	},
	onShow() {
		
	},
	onReady() {
		
	},
	methods: {
		async getDetail() {
			const res = await getProductDetail({ productId: this.productId });
			this.product = res.data;
			this.swiperList = res.data.imgs.split(',');
			console.log(res);
		},
		//轮播图指示器
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
		},
	
		openShare(){
			this.$refs.showshare.open();
		},
		cancel(){
			this.$refs.showshare.close();
		},
		
		open() {
			this.$refs.popup.open();
		},
		close(){
			this.$refs.popup.close();
		},
		openChoose() {
			this.$refs.popup1.open();
			if(!this.skuList){
				this.skuList = this.product.skuList.length==0?this.product.skuList[0]:{};
			}
			console.log(this.skuList);
		},
		closeChoose(){
			this.$refs.popup1.close();
		},
		//商品评论
		toRatings(){
			uni.navigateTo({
				url:'../ratings/ratings'
			})
		},
		handleColors(e){
			this.skuList = this.product.skuList.filter(item=>item.id == e.detail.value)[0];
			console.log(this.skuList);
			
		},
		btnReduce(){
			if(this.skuNubmer>1){
				this.skuNubmer--
			}
		},
		btnAdd(){
			if(this.skuNubmer<this.skuList.count){
				this.skuNubmer++
			}else{
				uni.showToast({
					title:'库存只有'+this.skuList.count+'个了!',
					duration: 1000,
					icon:'none'
				})
			}
		},
		// 购买
		handleBuy(){
			checkLogin(()=>{
				console.log("打开购买",this);
				if(this.skuList.length<1){
					this.openChoose()
				}else{
					var orderObj = {
						userId:this.$store.getters.userId,
						addressId:uni.getStorageSync("ADDRESS_USE").id,
						count:this.skuNubmer,
						freight:"10",
						price:this.skuList.price*this.skuNubmer,
						orderDetailList: [
							{
								skuCode: this.skuList.product_id,
								gname: this.product.gname,
								coverImg: this.product.cover_img,
								color_text: this.skuList.color_text,
								skuId: this.skuList.id,
								price: this.skuList.price,
								count:this.skuNubmer
							}
						]
					}
					this.$store.commit("order/ADD_ORDER_TEMP",orderObj)
					console.log(orderObj);
					uni.navigateTo({
						url:"../../mine/order/index"
					})
				}
			})
		},
		// 加入购物车
		addCarts(){
			checkLogin(()=>{
				if(this.skuList.length<1){
					this.openChoose()
				}else{
					var skuObj = {
						skuCode: this.skuList.product_id,
						gname: this.product.gname,
						coverImg: this.product.cover_img,
						color_text: this.skuList.color_text,
						skuId: this.skuList.id,
						price: this.skuList.price,
						count:this.skuNubmer,
						selected:false
					}
					
					var cartArr = uni.getStorageSync('leju-buycart');
					if(!cartArr){
						cartArr = [];
					}
					var item = cartArr.find(item=> item.skuId==skuObj.skuId)
					console.log(skuObj);
					if(item){
						item.count= Number(skuObj.count)+Number(item.count)
					}else{
						
					cartArr.push(skuObj);	
					}
					uni.setStorageSync('leju-buycart',cartArr)
					this.closeChoose()
					uni.showToast({
						title:"加入购物车成功",
						duration:1000
					})
				}
			})
		},
		// 加入收藏
		handleKeep(){
			checkLogin(()=>{
				this.isKeep = this.isKeep?false:true;
				if(this.isKeep){
					this.keepUrl ="../../../static/icons/keep_active.png"
					var skuObj = {
						gname: this.product.gname,
						coverImg: this.product.cover_img,
						price:this.product.price_now,
						pcode:this.product.pcode,
						id:this.product.id
					}
					this.$store.commit("keep/ADD_KEEP_TEMP",skuObj)
					
				}else{
					this.keepUrl ="../../../static/icons/keep.png"
					this.$store.commit("keep/REMOVE_USER_INFO",this.productId)
				}
			})
			
		},
	}
};
</script>

<style lang="scss" scoped>
	page {
		background-color: #f8f8f8;
	}
.uniPopup {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 300rpx;
	background-color: pink;
}

.swiper-box {
	position: relative;
	width: 100%;
	height: 634rpx;
	swiper {
		width: 100%;
		height: 634rpx;
		swiper-item {
			width: 100%;
			height: 634rpx;
			image {
				width: 100%;
				height: 634rpx;
			}
		}
	}
	.indicator {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	}
}
.info-box {
	width: 92%;
	padding: 20upx 4%;
	background-color: #fff;
	margin-bottom: 20upx;
}

.goods-info {
	.price {
		font-size: 46upx;
		font-weight: 600;
		color: #f47925;
	}
	.title {
		font-size: 30upx;
	}
}
.info-box {
	width: 92%;
	padding: 20upx 4%;
	background-color: #fff;
	margin-bottom: 20upx;
}

.goods-info {
	.price {
		font-size: 46upx;
		font-weight: 600;
		color: #f47925;
	}
	.title {
		font-size: 30upx;
	}
}
.spec {
	.row {
		width: 100%;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		.text {
			font-size: 24upx;
			color: #a2a2a2;
			margin-right: 20upx;
		}
		.content {
			font-size: 28upx;
			display: flex;
			flex-wrap: wrap;
			.serviceitem{
				margin-right: 10upx;
			}
			.sp {
				width: 100%;
				display: flex;
				.sp-item {
					background-color: #f6f6f6;
					padding: 10upx 15upx;
					color: #999;
					margin-right: 10upx;
					font-size: 20upx;
					border-radius: 5upx;
					&.active{
						border: solid 1upx red;
						box-sizing: border-box;
					}
				}
			}
		}
		.arrow {
			position: absolute;
			right: 4%;
				image{
					width: 30rpx;
					height: 30rpx;
				}
				color: #ccc;
		}
	}
}


.layer {
	width: 92%;
	padding: 0 4%;
	height: 900rpx;
	border-radius: 20upx 20upx 0 0;
	background-color: #fff;
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	.content {
		width: 100%;
		padding: 20upx 0;
		.row{
			margin: 20rpx 0;
			.title{
				
			}
			.description{
				font-size: 30rpx;
				margin: 5rpx 0;
				color: #C0C0C0;
			}
		}
	}
	.btn {
		width: 100%;
		height: 100upx;
		.button {
			width: 100%;
			height: 80upx;
			border-radius: 40upx;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f47952;
			font-size: 28upx;
		}
	}
}
.comments {
	.row {
		width: 100%;
		height: 40upx;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		.text {
			font-size: 30upx;
		}
		.arrow {
			font-size: 28upx;
			position: absolute;
			right: 4%;
			color: #17e6a1;
			.show {
				display: flex;
				justify-content: center;
				align-items: center;
				color: #989592;
				.arrow {
					position: absolute;
					right: 4%;
						image{
							width: 30rpx;
							height: 30rpx;
						}
						color: #ccc;
				}
			}
		}
	}
	.comment {
		width: 100%;
		.user-info {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			.face {
				width: 40upx;
				height: 40upx;
				margin-right: 8upx;
				image {
					width: 40upx;
					height: 40upx;
					border-radius: 100%;
				}
			}
			.username {
				font-size: 24upx;
				color: #999;
			}
		}
		.content {
			margin-top: 10upx;
			font-size: 26upx;
		}
	}
}
.description {
	.title {
		width: 100%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		color: #999;
	}
}
.footer {
	position: fixed;
	bottom: 0upx;
	width: 92%;
	padding: 0 4%;
	height: 99upx;
	border-top: solid 1upx #eee;
	background-color: #fff;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.icons {
		display: flex;
		height: 80upx;
		margin-left: -4%;
		.box {
			position: relative;
			width: 90upx;
			height: 90upx;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.box-but{
				position: absolute;
				  top: 0;
				  left: 0;
				  width: 100%;
				  height: 100%;
				  opacity: 0
			}
			.icon {
				font-size: 40upx;
				color: #828282;
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
			.text {
				display: flex;
				justify-content: center;
				width: 100%;
				font-size: 22upx;
				color: #666;
			}
		}
	}
	.btn {
		height: 80upx;
		border-radius: 40upx;
		overflow: hidden;
		display: flex;
		margin-right: -2%;
		.joinCart,
		.buy {
			height: 80upx;
			padding: 0 40upx;
			color: #fff;
			display: flex;
			align-items: center;
			font-size: 28upx;
		}
		.joinCart {
			background-color: #f0b46c;
		}
		.buy {
			background-color: #f06c7a;
		}
	}
}
.card{
	width: 92%;
	padding: 0 4%;
	height: 950rpx;
	border-radius: 20upx 20upx 0 0;
	background-color: #fff;	
	.card-top{
		position: relative;
		width: 100%;
		display: flex;
		.img{
			margin-top: 20rpx;
			width: 200rpx;
			height: 200rpx;
		}
		.title-count{
			margin-left: 40rpx;;
			.title{
				margin-top: 42rpx;
				margin-bottom: 20rpx;
				font-size: 28rpx;
				color: #3E3E3E;
				letter-spacing: 2rpx;
				font-weight: bold;
			}
			.sku-count{
				font-size: 24rpx;
				color: #B0B0B0;
				letter-spacing: 1.71rpx;
			}
		}
		.close{
			position: absolute;
			top: 30rpx;
			right: 0rpx;
			width: 42rpx;
			height: 42rpx;
		}
	}
	.card-center{
		margin-top: 40rpx;
		.common-title{
			font-family: PingFangSC-Semibold;
			font-size: 28rpx;
			color: #3E3E3E;
			letter-spacing: 2rpx;
			font-weight: bold;
		}
		.colors{
			display: flex;
			flex-wrap: nowrap;
			.color-item{
				box-sizing: border-box;
				width: 242rpx;
				height: 60rpx;
				color: #3E3E3E;
				font-size: 26rpx;
				text-align: center;
				line-height: 60rpx;
				background: #F2F4F3;
				border-radius: 10px;
				border-radius: 10px;
				margin: 10rpx;
				radio{
					display: none;
				}
				&.active{
					border: 2rpx solid red;
					color: red;
				}
			}
			
		}
	}
	.card-bottom{
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
		.common-title{
			font-family: PingFangSC-Semibold;
			font-size: 28rpx;
			color: #3E3E3E;
			letter-spacing: 2rpx;
			font-weight: bold;
		}
		.buy-count-steps {
			display: flex;
			justify-content: center;
		
			.step-reduce,
			.step-add,
			.step-text {
				width: 60rpx;
				height: 60rpx;
				background: #F1ECE7;
				border-radius: 50%;
				text-align: center;
				line-height: 60rpx;
				font-size: 30rpx;
				margin: 0 6rpx;
			}
		
			.step-text {
				width: 90rpx;
				border-radius: 30rpx;
			}
		}
	}
	.btn {
		position: absolute;
		bottom: 20rpx;
		left: 0rpx;
		height: 80upx;
		width: 100%;
		border-radius: 40upx;
		overflow: hidden;
		display: flex;
		margin-right: -2%;
		.joinCart,
		.buy {
			flex: 1;
			height: 80upx;
			padding: 0 40upx;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 36upx;
			text-align: center;
		}
		.joinCart {
			background-color: #f0b46c;
		}
		.buy {
			background-color: #f06c7a;
		}
	}
}
	/* 底部分享 */
	.uni-share {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		background-color: #fff;
	}

	.uni-share-title {
		line-height: 60rpx;
		font-size: 24rpx;
		padding: 15rpx 0;
		text-align: center;
	}

	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 15px;
	}

	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		width: 200rpx;
	}

	.uni-share-content-image {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 60rpx;
		height: 60rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}

	.content-image {
		width: 60rpx;
		height: 60rpx;
	}

	.uni-share-content-text {
		font-size: 26rpx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}

	.uni-share-btn {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 14px;
		border-top-color: #f5f5f5;
		border-top-width: 1px;
		border-top-style: solid;
		text-align: center;
		color: #666;
	}
</style>
