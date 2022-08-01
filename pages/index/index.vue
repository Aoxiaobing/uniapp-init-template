<template>
	<view class="content">
		<u-button @click="handleGoUcharts">柱状图</u-button>
		<u-button @click="handleGoRadar">雷达图</u-button>
		<u-button @click="handleGoPoster">海报</u-button>
		<u-icon name="photo" color="#2979ff" size="28"></u-icon>
		<text class="iconfont icon-aixin"></text>
		<text class="iconfont icon-aixin1"></text>
	</view>
</template>

<script>
import { apiGet, apiPostAnything } from '../../api';


export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	
	onLoad() {
		this.requestAll();
	},
	methods: {
		async requestAll() {
			const res = await Promise.all([apiGet(), apiPostAnything()]);
			console.log('res', res);
			console.log('this.$store.state.token = ', this.$store.state.token);
			console.log('this.$store.state.name = ', this.$store.state.name);
			console.log('新建一个commit');
		},
		handleGoPoster() {
			uni.navigateTo({
				url: '/pages/poster/index'
			});
		},
		handleGoUcharts(){
			uni.navigateTo({
				url: '/pages/ucharts/index'
			})
		},
		handleGoRadar(){
			uni.navigateTo({
				url: '/pages/ucharts/radar'
			})
		}
	}
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
