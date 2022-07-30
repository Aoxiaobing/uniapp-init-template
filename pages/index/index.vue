<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<u-button @click="handleGoUcharts">uCharts</u-button>
		<u-button @click="handleGoRadar">radar</u-button>
		<u-button @click="handleGoDetail">Detail</u-button>
		<u-icon name="photo" color="#2979ff" size="28"></u-icon>
		<!-- <uni-icons custom-prefix="iconfont" type="icon-aixin1" size="30" color="#ff0066"></uni-icons> -->
		<!-- <uni-icons type="cart" size="30"></uni-icons> -->
		<!-- <uni-icons type="cart"></uni-icons> -->
		<text class="iconfont icon-aixin"></text>
		<text class="iconfont icon-aixin1"></text>

		<!-- <u-icon custom-prefix="iconfont" name="icon-aixin" size="30" color="#ff0066"></u-icon> -->
		<!-- <view id="echarts" ref="echarts"></view> -->
	</view>
</template>

<script>
import { apiGet, apiPostAnything } from '../../api';
// import echarts from '@/static/vendor/echarts.min.js'
// console.log('echarts', echarts.init({}));
// import * as echarts from 'echarts/core';
// import { } from "echarts/echarts";


export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	
	onReady() {
		
	},
		
	onLoad() {
		this.requestAll();

		// 注册必须的组件
		// echarts.use([
		// 	TitleComponent,
		// 	TooltipComponent,
		// 	GridComponent,
		// 	DatasetComponent,
		// 	TransformComponent,
		// 	BarChart,
		// 	LabelLayout,
		// 	UniversalTransition,
		// 	CanvasRenderer
		// ]);

		// 接下来的使用就跟之前一样，初始化图表，设置配置项
		// console.log("this.$refs.echarts = ", this.$refs.echarts)
		// var myChart = echarts.init(this.$refs.echarts);
		// myChart.setOption({
		// 	xAxis: {
		// 		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		// 	},
		// 	yAxis: {},
		// 	series: [
		// 		{
		// 			type: 'bar',
		// 			data: [23, 24, 18, 25, 27, 28, 25]
		// 		}
		// 	]
		// });
	},
	methods: {
		async requestAll() {
			const res = await Promise.all([apiGet(), apiPostAnything()]);
			console.log('res', res);
			// this.$store.commit("SET_TOKEN", { token: "123123123" });
			// this.$store.commit("SET_NAME", { name: "zhaoheng" });
			console.log('this.$store.state.token = ', this.$store.state.token);
			console.log('this.$store.state.name = ', this.$store.state.name);
		},
		handleGoDetail() {
			uni.navigateTo({
				url: '/pages/detail/index'
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
