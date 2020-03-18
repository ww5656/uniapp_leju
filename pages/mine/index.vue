<template>
    <view class="mine-main">
      <!-- 头部 -->
      <view class="header">
        <view class="avatar">
		  <image  :src="userInfo.avatar" mode=""></image>
          <view class="username" v-if="!userInfo.nickname">
            <p>hi~</p>
            <p>您还没有登陆呢</p>
          </view>
		  <view class="username" v-else>
		    <p>欢迎您:</p>
		    <p>{{userInfo.nickname}}</p>
		  </view>
        </view>
        <view class="set-icon" @tap="setting">
          <img :src="setIcon" alt />
        </view>
      </view>
      <!-- 登录注册 -->
      <view class="btns" v-if="!userInfo.nickname">
        <button  class="button registered" @tap="register">注册</button>
        <button  class="button login" @tap="login" >登录</button>
      </view>
      <!-- 订单菜单 -->
      <view class="menu-top">
        <navigator  url="./order_list/index?type=0" class="order">
          <p>我的订单</p>
          <span>
            <img src="../../static/home/recommend/right-icon.png" alt />
          </span>
        </navigator>
        <view class="menu-top-list">
          <navigator
            tag="li"
            :url="item.path"
            v-for="item in menuTopList"
            :key="item.id"
            class="menu-top-item"
          >
            <img :src="item.url" alt />
            <span>{{item.names}}</span>
          </navigator>
        </view>
      </view>
      <view class="menu-bot">
        <navigator
          v-for="item in menuBotList"
          :key="item.id"
          :url="item.path"
          class="menu-bot-item"
        >
          <img :src="item.url" alt />
          <span>{{item.names}}</span>
        </navigator>
      </view>
    </view>
</template>

<script>
import {LEJU_USER} from '../../api/config.js'
export default {
  name: "mine",
  props: {},
  data() {
    return {
      isLoading: false,
      setIcon: require("@/static/mine/setIcon.png"),
      menuTopList: [
        {
          id: 5461,
          url: require("@/static/mine/PendingPpayment.png"),
          names: "待付款",
          path: "./order_list/index?type=0"
        },
		{
		  id: 54629,
		  url: require("@/static/mine/PendingPpayment.png"),
		  names: "已付款",
		  path: "./order_list/index?type=1"
		},
        {
          id: 5462,
          url: require("@/static/mine/Receipt.png"),
          names: "待收货",
          path: "./order_list/index?type=2"
        },
        {
          id: 5463,
          url: require("@/static/mine/Finish.png"),
          names: "已完成",
          path: "./order_list/index?type=3"
        },
        {
          id: 5464,
          url: require("@/static/mine/AfterSale.png"),
          names: "售后",
          path: "./order_list/index?type=9"
        }
      ],
      menuBotList: [
        {
          id: 5465,
          url: require("@/static/mine/Favorite.png"),
          names: "收藏",
          path: "./favorite/index"
        },
        {
          id: 5466,
          url: require("@/static/mine/Brand.png"),
          names: "品牌",
          path: "/brand"
        },
        {
          id: 5467,
          url: require("@/static/mine/article.png"),
          names: "文章",
          path: "/article"
        },
        {
          id: 5468,
          url: require("@/static/mine/address.png"),
          names: "地址",
          path: "./address/address"
        },
        {
          id: 5469,
          url: require("@/static/mine/card.png"),
          names: "卡包",
          path: "/card"
        },
        {
          id: 54611,
          url: require("@/static/mine/CustomerService.png"),
          names: "客服",
          path: "/Favorite"
        },
        {
          id: 54612,
          url: require("@/static/mine/Safety.png"),
          names: "安全",
          path: "/safety"
        },
        {
          id: 56513,
          url: require("@/static/mine/about.png"),
          names: "关于",
          path: "/about"
        }
      ]
    };
  },
  methods:{
	  login(){
		  uni.navigateTo({
		  	url:"login/login"
		  })
	  },
	  register(){
		  uni.navigateTo({
			url:"login/register"
		  })
	  },
	  setting(){
		  uni.navigateTo({
		  	url:"setting/setting"
		  })
	  }
  },
  computed:{
	  userInfo(){
		return  this.$store.getters.user
	  }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.mine-main {
  width: 90%;
  margin: 0 auto;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 10rpx;
    .avatar {
      display: flex;
      align-items: center;
      image {
        width: 150rpx;
        height: 150rpx;
        border-radius: 100%;
      }
      .username {
        margin-left: 32rpx;
        p {
          line-height: 40rpx;
        }
      }
    }
    .set-icon {
      width: 50rpx;
      height: 50rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .btns {
    margin-top: 40rpx;
    display: flex;
    justify-content: center;
    .button {
      width: 182rpx;
      height: 72rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 30rpx;
      color: #ffffff;
      margin: 0 20rpx;
      border-radius: 10rpx;
      border: 2rpx solid #3d4c46;
    }
    & .drop {
      background: red;
      border: 2rpx solid red;
    }
    & .registered {
      color: #3d4c46;
    }
    & .login {
      background: #354e44;
      border: 2rpx solid #354e44;
    }
  }
  .menu-top {
    width: 100%;
    height: 208rpx;
    background-color: #fff;
    margin-top: 60rpx;
    .order {
      width: 80%;
      margin: 0 auto;
      height: 80rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1rpx solid #dddddd;
      p {
        font-size: 26rpx;
        color: #3e3e3e;
        line-height: 36rpx;
      }
      span {
        width: 26rpx;
        height: 26rpx;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .menu-top-list {
	margin: 0 auto;
      width: 80%;
      display: flex;
      justify-content: space-between;
      .menu-top-item {
        display: flex;
        width: 84rpx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 26rpx;
        color: #3e3e3e;
        img {
          width: 40rpx;
          height: 36rpx;
          margin-top: 20rpx;
        }
        span {
          margin-top: 20rpx;
        }
      }
    }
  }
  .menu-bot {
    width: 100%;
	
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40rpx;
    .menu-bot-item {
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      font-size: 26rpx;
      color: #3e3e3e;
      padding: 30rpx 0;
      img {
        width: 40rpx;
        height: 36rpx;
        margin-top: 20rpx;
      }
      span {
        margin-top: 20rpx;
      }
    }
  }
}
</style>
