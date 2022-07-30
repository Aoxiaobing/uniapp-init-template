<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <u-button @click="handleGoDetail">Detail</u-button>
    <u-icon name="photo" color="#2979ff" size="28"></u-icon>
    <!-- <uni-icons custom-prefix="iconfont" type="icon-aixin1" size="30" color="#ff0066"></uni-icons> -->
    <!-- <uni-icons type="cart" size="30"></uni-icons> -->
    <!-- <uni-icons type="cart"></uni-icons> -->
    <text class="iconfont icon-aixin"></text>
    <text class="iconfont icon-aixin1"></text>

    <!-- <u-icon custom-prefix="iconfont" name="icon-aixin" size="30" color="#ff0066"></u-icon> -->
  </view>
</template>

<script>
import { apiGet, apiPostAnything } from "../../api";
import * as echarts from "echarts/core";
import { } from "echarts/echarts";

export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {
    this.requestAll();
  },
  methods: {
    async requestAll() {
      const res = await Promise.all([apiGet(), apiPostAnything()]);
      console.log("res", res);
      // this.$store.commit("SET_TOKEN", { token: "123123123" });
      // this.$store.commit("SET_NAME", { name: "zhaoheng" });
      console.log("this.$store.state.token = ", this.$store.state.token);
      console.log("this.$store.state.name = ", this.$store.state.name);
    },
    handleGoDetail() {
      uni.navigateTo({
        url: "/pages/detail/index",
      });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
