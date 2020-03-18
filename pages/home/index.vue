<template>
	<view class="home-main">
		<!-- 头部 -->
		<navBar class="navBar" :background-color="headColor">
			<view class="title">
				<text class="title-item" :class="{ active: show == 1 }" @tap="show = 1">推荐</text>
				<text class="title-item" :class="{ active: show == 2 }" @tap="show = 2">品牌</text>
			</view>
			<view slot="left"><image class="icon icon-chat" src="../../static/icons/chat.png"></image></view>
			<view slot="right">
				<image class="icon icon-search" src="../../static/icons/search.png" mode=""></image>
				<image class="icon icon-cart" src="../../static/icons/cart.png" mode="" @tap="goCart" ></image>
			</view>
		</navBar>
		<!-- 首页推荐 -->
		<view v-show="show==1" class="home-recommend">
			<view class="recommend-banner">
				<swiper class="recommend-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
					<swiper-item v-for="item in bannerList" :key="item.id">
						<view class="swiper-item"><image :src="item.img_url" mode=""></image></view>
					</swiper-item>
				</swiper>
			</view>

			<view class="recommend-category">
				<view class="t-name">
					<h3>品类推荐</h3>
					<navigator url="../category/index" class="navigator" open-type="reLaunch">
						<span>更多</span>
						<image :src="rightIcon" mode=""></image>
					</navigator>
				</view>
				<view class="classify">
					<ul>
						<li v-for="(item, index) in classifyList" :key="index">
							<view class="classify_image"><image :src="item.image" alt /></view>
							<view class="classify_text">{{ item.text }}</view>
							<view class="classify_en">{{ item.en }}</view>
						</li>
					</ul>
				</view>
			</view>
			<view class="recommend-good">
				<view class="t-name">
					<h3>特色优选</h3>
					<navigator url="../category/index" class="navigator" open-type="reLaunch">
						<span>更多</span>
						<image :src="rightIcon" mode=""></image>
					</navigator>
				</view>
				<swiper class="good-swiper" :interval="3000" :duration="1000"  next-margin="120rpx" circular="true">
					<swiper-item class="swiper-item-view" v-for="item in hotList" :key="item.id">
						<navigator :url="'/pages/category/detail/index?productId='+item.id" class="swiper-item">
								
								<view class="swiper-item">
									<image class="feature_image" :src="item.cover_img" mode=""></image>
									<view class="bottom">
										<p class="feature_title">{{ item.gname }}</p>
										<p class="feature_en">{{ item.detail_desc }}</p>
										<p class="feature_dolt">
											<span class="span1"></span>
											<span class="span2"></span>
											<span class="span3"></span>
										</p>
										<p class="feature_text">{{ item.descr }}</p>
									</view>
								</view>
						</navigator>
						
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 首页品牌 -->
		<view v-show="show==2" class="home-brand">
				<view class="brand-item" v-for="item in brandList" :key="item.id">
					<view class="brand-image">
						
					<image :src="item.coverImg" ></image>
					</view>
					<view class="brand-info">
						<view class="brand-title">
							{{item.cname}} {{item.ename}}
						</view>
						<view class="brand-text">
							{{item.descr}}
						</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
import { getBannerList , getBrandList,gethotList} from '@/api/home/index.js';
import navBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: { navBar },
	data() {
		return {
			show: 1,
			bannerList: [],
			brandList:[],
			hotList:[],
			rightIcon: require('@/static/home/recommend/right-icon.png'),
			classifyList: [
				{
					image: require('@/static/home/recommend/image1.png'),
					text: '沙发系列',
					en: 'by Adrianne'
				},
				{
					image: require('@/static/home/recommend/image2.png'),
					text: '木质系列',
					en: 'by Hanna'
				},
				{
					image: require('@/static/home/recommend/image3.png'),
					text: '创意系列',
					en: 'by adais'
				}
			]
		};
	},
	onLoad() {
		this.getBanners();
		this.getBrand();
		this.getHot();
	},
	computed:{
		headColor(){
			return  this.show==1?'transparent': '#354E44';
		}
	},
	methods: {
		async getBanners() {
			var { data } = await getBannerList();
			this.bannerList = data;
			console.log(data);
		},
		 async getBrand(){
				var { data } = await getBrandList();
				this.brandList = data
		},
		async getHot(){
				var { data } = await gethotList();
				this.hotList = data
		},
		goCart(){
				uni.reLaunch({
					url:"../find/index"
				})
		}
	}
};
</script>

<style lang="scss" scoped>
.home-main {
	width: 100%;
	.navBar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		z-index: 999;
		border-bottom: none;
		::v-deep .uni-navbar--border{
				border-bottom: none;
		}
		.title {
			width: 100%;
			margin-right: 30rpx;;
			display: flex;
			justify-content: center;
			.title-item {
				position: relative;
				font-size: 32rpx;
				line-height: 45rpx;
				margin: 0 16rpx;
				color: #ffffff;
				padding-bottom: 13rpx;
				&.active::after {
					content: '';
					left: 0;
					bottom: 0;
					position: absolute;
					height: 6rpx;
					width: 100%;
					background-color: #ffffff;
					border-radius: 3rpx;
				}
			}
		}
		
		.icon {
			width: 36rpx;
			height: 36rpx;
			&.icon-chat {
				margin-left: 30rpx;
			}
			&.icon-search {
				padding-right: 28rpx;
			}
			&.icon-cart{
				margin-right: 21rpx;
			}
		}
	}
	.home-recommend {
		.recommend-banner {
			width: 100%;
			height: 362rpx;
			.recommend-swiper {
				width: 100%;
				height: 100%;
				.swiper-item {
					width: 750rpx;
					height: 362rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.recommend-category {
			.t-name {
				//  标题文字
				position: relative;
				margin: 40rpx 30rpx 0;
				h3 {
					width: 150rpx;
					height: 44rpx;
					font-size: 34rpx;
					font-family: PingFangSC-Semibold;
					color: #3e3e3e;
					line-height: 36rpx;
					margin-left: 20rpx;
				}
				.navigator{
					position: absolute;
					top: 0;
					right: 0;
					height: 36rpx;
					line-height: 36rpx;
					color: #8c8c8c;
					text-decoration: none;
					font-family: PingFangSC-Regular;
					font-size: 26rpx;
					display: flex;
					justify-content: center;
					align-content: center;
					span {
						font-size: 26rpx;
						color: #8c8c8c;
					}
					image {
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
			ul {
				padding: 40rpx 30rpx 0;
				display: flex;
				justify-content: space-between;
				list-style: none;
				li {
					width: 208rpx;
					height: 292rpx;
					.classify_image {
						position: relative;
						width: 100%;
						height: 140rpx;
						border-radius: 20rpx;
						background-color: #ffffff;
						display: flex;
						justify-content: center;
						image {
							margin-top: 52rpx;
							width: 144rpx;
							height: 124rpx;
						}
					}
					.classify_text {
						width: 208rpx;
						height: 36rpx;
						text-align: center;
						margin-top: 80rpx;
						font-family: PingFangSC-Semibold;
						font-size: 26rpx;
						color: #3e3e3e;
					}
					.classify_en {
						width: 208rpx;
						text-align: center;
						height: 28rpx;
						font-family: PingFangSC-Regular;
						font-size: 20rpx;
						color: #b0b0b0;
					}
				}
			}
		}
		.recommend-good {
			padding-bottom: 50rpx;
			.t-name {
				//  标题文字
				position: relative;
				margin: 40rpx 30rpx 0;
				h3 {
					width: 150rpx;
					height: 44rpx;
					font-size: 34rpx;
					font-family: PingFangSC-Semibold;
					color: #3e3e3e;
					line-height: 36rpx;
					margin-left: 20rpx;
				}
				.navigator{
					position: absolute;
					top: 0;
					right: 0;
					height: 36rpx;
					line-height: 36rpx;
					color: #8c8c8c;
					text-decoration: none;
					font-family: PingFangSC-Regular;
					font-size: 26rpx;
					display: flex;
					justify-content: center;
					align-content: center;
					span {
						font-size: 26rpx;
						color: #8c8c8c;
					}

					image {
						width: 32rpx;
						height: 32rpx;
					}
				}
			}
			.good-swiper {
				width: 100%;
				padding-top: 40rpx;
				.swiper-item-view {
					position: relative;
					left: 80rpx;
					width: 590rpx;
					height: 320rpx;
				}
				.swiper-item {
					position: relative;
					width: 590rpx;
					height: 320rpx;
					image {
						position: absolute;
						width: 230rpx;
						height: 300rpx;
						z-index: 8;
						left: 40rpx;
						bottom: 40rpx;
					}
					.bottom {
						position: absolute;
						width: 590rpx;
						height: 260rpx;
						bottom: 0;
						background-color: #ffffff;
						border-radius: 20rpx;
						
						.feature_title {
							position: absolute;
							left: 300rpx;
							top: 50rpx;
							line-height: 36rpx;
							height: 36rpx;
							font-family: PingFangSC-Semibold;
							font-size: 26rpx;
							color: #3e3e3e;
						}
						.feature_en {
							position: absolute;
							left: 300rpx;
							top: 84rpx;
							line-height: 26rpx;
							height: 26rpx;
							font-family: PingFangSC-Regular;
							font-size: 18rpx;
							color: #b0b0b0;
						}
						.feature_dolt {
							position: absolute;
							left: 300rpx;
							top: 128rpx;
							line-height: 26rpx;
							height: 26rpx;
							display: flex;
							width: 72rpx;
							justify-content: space-between;
							span {
								display: block;
								width: 20rpx;
								height: 20rpx;
								border-radius: 50%;
							}
							.span1 {
								background-color: #446675;
							}
							.span2 {
								background-color: #6a4826;
							}
							.span3 {
								background-color: #e7d8bb;
							}
						}
						.feature_text {
							position: absolute;
							left: 300rpx;
							top: 176rpx;
							line-height: 32rpx;
							height: 32rpx;
							width: 240rpx;
							font-family: PingFangSC-Regular;
							font-size: 22rpx;
							color: #3e3e3e;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
	.home-brand{
		margin-top: 136rpx;
		.brand-item{
			width: 670rpx;
			height: 612rpx;
			margin: 0 auto 56rpx auto;
			background-color: #FFFFFF;
			box-shadow: 0 8rpx 20rpx 0 rgba(122,98,75,0.08);
			border-radius: 20rpx;
			.brand-image{
				width: 100%;
				height: 426rpx;
				image{
				border-radius: 20rpx 20rpx 0 0;
					width: 100%;
					height: 100%;
				}
			}
		
			.brand-info{
				width: 100%;
				height: 186rpx;
				background-color: #FFFFFF;
				border-radius: 0 0 20rpx 20rpx;
				.brand-title{
					padding-top: 56rpx;
					margin-left: 56rpx;
					font-family: PingFangSC-Semibold;
					font-size: 32rpx;
					color: #3E3E3E;
					letter-spacing: 2.29rpx;
				}
				.brand-text{
					margin-top: 17rpx;
					margin-left: 56rpx;
					font-family: PingFangSC-Regular;
					font-size: 22rpx;
					color: #B1B1B1;
					letter-spacing: 1.57rpx;
					
				}
			}
		}
	}
}
</style>
