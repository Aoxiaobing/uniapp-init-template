<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
import { apiGet, apiPostAnything } from "../../api";

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
