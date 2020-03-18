<template>
	<div class="buycart-main">
		<view class="tis" v-if="productList.length==0">购物车是空的哦~</view>
		<checkbox-group>
			<view class="product-card" v-for="item in productList" :key="item.skuId">

				<view class="info-block">
					
					<label @tap="handleItem(item.skuId)">
						<checkbox :value="item.skuId"  :checked="item.selected"/><text></text>
					</label>
					<navigator class="nav" url="/pages/buyCart/index">
						<image class="cover-img" :src="item.coverImg" mode=""></image>
						<view class="info-text">
							<view class="gname">{{item.gname}}</view>
							<view class="code">
								<text>价格: ¥{{item.price}}</text>
							</view>
							<view>规格: {{item.color_text}}</view>
						</view>
					</navigator>
				</view>
				

				<view class="buy-count-steps">
					<text class="step-reduce" @tap.stop="btnReduce(item)">-</text>
					<text class="step-text">{{item.count}}</text>
					<text class="step-add" @tap.stop="btnAdd(item)">+</text>
				</view>
			</view>
		</checkbox-group>

		
		<view class="footer" v-if="!productList.length==0" >
			<view class="checkbox-box">
				<checkbox-group @change="selAll">
				<label>
					<checkbox value="0" :checked="checkboxAll" />
					<text>全选</text>
				</label>
				</checkbox-group>
			</view>
			<view class="settlement">
				<view class="sum">合计:<view class="money">￥{{ allPrices | toFixed }}</view></view>
				<view class="btn" @tap="goPay">结算({{productCount}})</view>
			</view>
		</view>
	</div>
</template>

<script>
	import {checkLogin} from "../../utils/common.js"
	export default {
		name: 'BuyCart',
		components: {

		},
		data() {
			return {
                isSelAll: false,
				skuList:[],
				productList: [],
				checkbox: [],// 没有v-model双向响应,所以这里只能手动保存数据
				allPrices:"",
				productCount:"",
			};
		},
		onLoad() {
			checkLogin(()=>{
				this.productList = uni.getStorageSync('leju-buycart');
				if(this.productList.length<1){
					return this.productList=[]
				}
			})
		},
		onShow() {
			checkLogin(()=>{
				this.productList = uni.getStorageSync('leju-buycart');
				if(this.productList.length<1){
					return this.productList=[]
				}
			})
			this.totalPrices()
		},
		computed: {
			checkboxAll(){
				return this.productList.every(item =>item.selected==true)
				
			},
		
		},
		filters: {
			toFixed:function(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		
		methods: {
			btnReduce(item) {
				if(item.count == 1) return ;
				item.count --;
				// 需要重新同步到ls中的
				uni.setStorageSync('leju-buycart',this.productList);
				this.totalPrices()
			},
			btnAdd(item) {
				item.count ++;
				console.log(item);
				// 需要重新同步到ls中的
				uni.setStorageSync('leju-buycart',this.productList);
				this.totalPrices()
			},
			// 计算总价格
			totalPrices(){
				if(this.productList.length<1){
								this.allPrices=0
						return 	this.productCount=0
				}
				var selectedArr = this.productList.filter(item => item.selected == true)
				 this.allPrices = selectedArr.reduce((total,current) =>{
					 return  total+=current.count*current.price
				 },0)
				 this.productCount = selectedArr.length
			},
			//item选中
			handleItem(id){
				console.log(id);
				var index = this.productList.findIndex(item => item.skuId == id)
				this.productList[index].selected = !this.productList[index].selected
				this.totalPrices()
				uni.setStorageSync('leju-buycart',this.productList);
			},
            goPay(){
                // 1.构建对象
				var selectedArr = this.productList.filter(item => item.selected == true)
              
                // 总数量
                var totalCount = 0 ;
                // 总价格
                var totalPrice = 0;
                selectedArr.forEach(item => {
                    totalCount += item.count;
                    totalPrice += item.price*item.count;
                });
				//构建订单对象
				var orderObj = {
					userId: this.$store.getters.userId,
					count: totalCount, // 因为商品详情页 只有一个sku 所以sku的count就是总count
					freight: 0, // 运费 , 见api
					price: totalPrice,  // 总价格
					orderDetailList: selectedArr
				}
				//存入vuex
				this.$store.commit('order/ADD_ORDER_TEMP',orderObj)
				
				// 跳转到订单确认页面
				uni.navigateTo({
					url:'/pages/mine/order/index?from=cart'
				})
				
            },
            selAll(){
				console.log(this.checkboxAll);
				if(this.checkboxAll){
					this.productList.forEach(item =>item.selected=false)
				}else{
					console.log("zzzz");
					this.productList.forEach(item =>item.selected=true)
					console.log(this.productList);
					
				}
				this.totalPrices()
				uni.setStorageSync('leju-buycart',this.productList);
            }
		},
	};
</script>

<style scoped lang="scss">
	.buycart-main {
		.tis{
			padding-top: 300rpx;
			text-align: center;
			font-size: 35rpx;
			color:  red;
		}
		.product-card {
			width: 672rpx;
			margin: 50rpx auto;
			background-color: #fff;
			border-radius: 24rpx;
			padding: 20rpx 20rpx;
			box-sizing: border-box;

			.info-block {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				.nav {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					.cover-img {
						width: 136rpx;
						height: 136rpx;
						flex-shrink: 1;
					}

					.info-text {
						font-size: 22rpx;
						color: #8D8D8D;
						margin-left: 46rpx;

						.gname {
							font-size: 26rpx;
							color: #3E3E3E;
						}

						.price {
							display: flex;
							justify-content: space-between;
							align-items: center;
						}

					}
				}

			}

			.buy-count-steps {
				display: flex;
				justify-content: flex-end;

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
		.footer{
			width: 90%;
			padding: 0 5%;
			background-color: #fbfbfb;
			height: 100upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28upx;
			position: fixed;
			bottom: 100upx;
			z-index: 5;
			.delBtn{
				border: solid 1upx #f06c7a;
				color: #f06c7a;
				padding: 0 30upx;
				height: 50upx;
				border-radius: 30upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.settlement{
				width: 60%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.sum{
					width: 50%;
					font-size: 28upx;
					margin-right: 10upx;
					display: flex;
					justify-content: flex-end;
					.money{
						font-weight: 600;
					}
				}
				.btn{
					padding: 0 30upx;
					height: 50upx;
					background-color: #f06c7a;
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					
					border-radius: 30upx;
				}
			}
		}
	}
</style>
