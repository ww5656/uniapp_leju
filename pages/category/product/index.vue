<template>
	<view class="product-main">
		<view class="head-bar">
			<radio-group class="radio-group" @change="handleChange">
				<label class="radio-label" :class="{active:radio==1}">
					<radio value="1" /><text>新品</text>
				</label>
				<label class="radio-label" :class="{active:radio==2}">
					<radio value="2" /><text>销量</text>
				</label><label class="radio-label" :class="{active:radio==3}">
					<radio value="3" /><text>价格</text>
				</label><label class="radio-label" :class="{active:radio==4}">
					<radio value="4" /><text>筛选</text>
				</label>
			</radio-group>
		</view>
		<view class="product-content">
			<navigator  :url="'../detail/index?productId='+item.id" class="product-item" v-for="item in productListCom" :key="item.id">
				<image :src="item.cover_img" mode="aspectFill"></image>
				<view class="text-area">
					<view class="descr">{{item.descr}}?</view>
					<view class="price-favorite">
						<text class="price">¥{{item.price_now?item.price_now:1}}</text>
						<text class="favorite">999已收藏</text>
	
					</view>
				</view>
				
			</navigator>
		</view>
			<uni-load-more :status="status"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import {getProductList} from '@/api/category/product.js'
	export default{
		components:{uniLoadMore},
		data(){
			return{
				kindId:"",
				radio:"1",
				productList:[],
				status:"more",
				page:{
					start:1,
					limit:10,
					lastPage:false
					
				}
			}
		},
		onLoad(option) {
			this.kindId = option.id
			console.log(option)
			this.getProduct()
		},
		onReachBottom(){
			if(!this.page.lastPage){
				this.page.start++
				this.getProduct()
			}
		
		},
		methods:{
			 async getProduct(){
				 var params = {
					 kindId:this.kindId,
					 start:this.page.start,
					 limit:this.page.limit
				 }
				var res = await getProductList({...params})
				this.page.lastPage = res.data.lastPage
				this.productList.push(...res.data.list) 
				if(this.page.lastPage){
					this.status="noMore"
				}
				console.log(res);
				var title = res.kind.ctitle
				uni.setNavigationBarTitle({
				    title: title
				});
				
			},
			// <radio-group> 中的选中项发生变化时触发 change 事件
			handleChange(e){
				this.radio = e.detail.value
			}
		},
		computed:{
			productListCom(){
				var res = this.productList;
				var obj = JSON.parse(JSON.stringify(this.productList));
				switch (this.radio){
					case '1': 
						res = this.productList;
						break;
					case '3': // 根据价格排序
						res = obj.sort((a,b)=>{
							return b.price_now-a.price_now;
						})
						break;
					default:
						break;
				}
				return res;
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.product-main{
		.head-bar{
			background-color: $uni-leju-color;
			padding-bottom: 15rpx;;
			.radio-group{
				display: flex;
				justify-content: space-around;
				.radio-label{
					font-size: 30rpx;
					color: #FFFFFF;
					letter-spacing: 2.14rpx;
					&.active{
						padding-bottom:10rpx ;
						border-bottom: 2rpx solid #DD524D;
						color: #DD524D;
					}
					radio{
						display: none;
					}
				}
			}
		}
		.product-content{
			overflow: hidden;
			margin: 16rpx 0 ;
			.product-item{
				width: 316rpx;
				height: 416rpx;
				background-color: #FFFFFF;
				box-shadow: 0 8rpx 16rpx 0 rgba(83,66,49,0.06);
				border-radius: 10rpx;
				margin: 56rpx 0rpx 0rpx 40rpx;
				float: left;
				image{
					width: 100%;
					height: 238rpx;
				}
				.text-area{
					margin:0  36rpx;
					.descr{
						margin: 28rpx 0;
						font-family: PingFangSC-Semibold;
						font-size: 26rpx;
						color: #3E3E3E;
						letter-spacing: 1.86rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.price-favorite{
						display: flex;
						justify-content: space-between;
						.price{
							color: red;
							font-size: 26rpx;
							letter-spacing: 1.86rpx;
						}
						.favorite{
							font-size: 22rpx;
							letter-spacing: 1.57rpx;
						}
					}
				}
			}
		}
	
	}
</style>
