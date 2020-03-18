<template>
	<view class="category-main">
		<!-- 头部 -->
		<navBar class="navBar" background-color="#435950">
			<view class="title">分类</view>
			<view slot="left"><image class="icon icon-chat" src="../../static/icons/chat.png"></image></view>
			<view slot="right">
				<image class="icon icon-search" src="../../static/icons/search.png" mode=""></image>
				<image class="icon icon-cart" src="../../static/icons/cart.png" mode=""></image>
			</view>
		</navBar>
		<view class="category-content" v-if="categoryList.length > 0">
			<navigator class="originality" :url="'./product/index?id='+categoryList[0].id" >
				<view class="title">
					<view class="ctitle">{{ categoryList[0].ctitle }}</view>
					<view class="etitle">{{ categoryList[0].etitle }}</view>
				</view>
				<image :src="categoryList[0].img" mode="scaleToFill"></image>
			</navigator>
			<navigator class="decorations" :url="'./product/index?id='+categoryList[1].id">
				<view class="title">
					<view class="ctitle">{{ categoryList[1].ctitle }}</view>
					<view class="etitle">{{ categoryList[1].etitle }}</view>
				</view>
				<image :src="categoryList[1].img" mode="scaleToFill"></image>
			</navigator>
			<view class="f-d">
				<navigator class="styles" :url="'./product/index?id='+categoryList[2].id">
					<view class="title">
						<view class="ctitle">{{ categoryList[2].ctitle }}</view>
						<view class="etitle">{{ categoryList[2].etitle }}</view>
					</view>
					<image :src="categoryList[2].img" mode="scaleToFill"></image>
				</navigator>
				<navigator class="lamp" :url="'./product/index?id='+categoryList[3].id">
					<view class="title">
						<view class="ctitle">{{ categoryList[3].ctitle }}</view>
						<view class="etitle">{{ categoryList[3].etitle }}</view>
					</view>
					<image :src="categoryList[3].img" mode="scaleToFill"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
import { getCategoryList } from '@/api/category/index.js';
import navBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: {
		navBar
	},
	data() {
		return {
			categoryList: []
		};
	},
	onLoad() {
		this.getCategory();
	},
	methods: {
		async getCategory() {
			var { data } = await getCategoryList();
			console.log(data);
			this.categoryList = data;
		}
	}
};
</script>

<style scoped lang="scss">
.category-main {
	.navBar {
		position: fixed;
		top: 0rpx;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		z-index: 999;
		.title {
			width: 100%;
			margin-right: 30rpx;
			display: flex;
			justify-content: center;
			color: #ffffff;
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
			&.icon-cart {
				margin-right: 21rpx;
			}
		}
	}
	.category-content {
		padding: 80rpx 0 30rpx 0;
		.originality,
		.decorations {
			position: relative;
			width: 670rpx;
			height: 302rpx;
			margin: 45rpx auto;
			.title {
				position: absolute;
				left: 58rpx;
				bottom: 40rpx;
				z-index: 999;
				.ctitle {
					font-size: 48rpx;
					color: #3e3e3e;
					letter-spacing: 3.43rpx;
				}
				.etitle {
					font-family: PingFangSC-Regular;
					font-size: 30rpx;
					color: #7f7f7f;
					letter-spacing: 2.14rpx;
				}
			}
			image {
				width: 100%;
				height: 100%;
			}
		}
		.f-d {
			width: 670rpx;
			height: 442rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.lamp,
			.styles {
				position: relative;
				width: 312rpx;
				height: 100%;
				.title {
					position: absolute;
					left: 58rpx;
					bottom: 40rpx;
					z-index: 2;
					.ctitle {
						font-size: 48rpx;
						color: #3e3e3e;
						letter-spacing: 3.43rpx;
					}
					.etitle {
						font-family: PingFangSC-Regular;
						font-size: 30rpx;
						color: #7f7f7f;
						letter-spacing: 2.14rpx;
					}
				}
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
