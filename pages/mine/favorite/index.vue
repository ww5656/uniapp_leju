<template>
  <view class="Favorite-main">
		<view class="Favorite-item" v-for="item in FavoriteList" :key="item.id">
			<image :src="item.coverImg" mode=""></image>
			<view class="good-info">
				<view class="title">{{item.gname}}</view>
				<view class="goodsNum">商品编号 : {{item.id}}</view>
				<view class="favorite-price">
					<view class="favorite">
						收藏 : {{item.pcode}}
					</view>
					<view class="price">
						¥{{item.price}}
					</view>
				</view>
				
			</view>
			
		</view>
	
  </view>
</template>

<script>
export default {
  name: "Favorite",
  props: {},
  data() {
    return {
      FavoriteList: []
    };
  },
  onLoad() {
  	this.FavoriteList = uni.getStorageSync("LEJU_KEEP")
	console.log(this.FavoriteList);
  },
  computed: {},
  created() {},
  mounted() {
  
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.Favorite-main {
	.Favorite-item{
		width: 672rpx;
		height: 208rpx;
		margin:  50rpx auto 0 auto;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 8px 16px 0 rgba(83,66,49,0.08);
		border-radius: 24px;
		border-radius: 24px;
		image{
			width: 140rpx;
			height: 140rpx;
		}
		.good-info{
			width: 400rpx;
			height: 140rpx;
			display: flex;
			flex-direction:column;
			justify-content: space-around;
			.title{
				font-size: 26rpx;
				color: #3E3E3E;
				letter-spacing: 1.86rpx;
				font-weight: bold;
			}
			.goodsNum{
				font-size: 22rpx;
				color: #8D8D8D;
				letter-spacing: 1.57rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.favorite-price{
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				color: #3E3E3E;
				letter-spacing: 1.71rpx;
			}
		}
	}
}
</style>
