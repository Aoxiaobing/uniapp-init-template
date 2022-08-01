<template>
	<div><canvas canvas-id="ucharts" id="ucharts" class="charts" @click="tap" /></div>
</template>

<script>
import uCharts from '@qiun/ucharts';
var uChartsInstance = {};
export default {
	data() {
		return {
			cWidth: 750,
			cHeight: 500
		};
	},
	onReady() {
		//这里的 750 对应 css .charts 的 width
		this.cWidth = uni.upx2px(750);
		//这里的 500 对应 css .charts 的 height
		this.cHeight = uni.upx2px(500);
		this.getServerData();
	},
	methods: {
		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ['维度1', '维度2', '维度3', '维度4', '维度5', '维度6'],
					series: [
						{
							name: '',
							data: [90, 110, 165, 195, 187, 172]
						},
						// {
						// 	name: '',
						// 	data: [190, 210, 105, 35, 27, 102]
						// }
					]
				};
				this.drawCharts('ucharts', res);
			}, 500);
		},
		drawCharts(id, data) {
			const ctx = uni.createCanvasContext(id, this);
			uChartsInstance[id] = new uCharts({
				type: 'radar',
				context: ctx,
				width: this.cWidth,
				height: this.cHeight,
				categories: data.categories,
				series: data.series,
				animation: true,
				background: '#FFFFFF',
				color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
				padding: [5, 5, 5, 5],
				dataLabel: false,
				dataPointShape: true,
				legend: {
					show: false,
					position: 'right',
					lineHeight: 25
				},
				extra: {
					radar: {
						gridType: 'radar',
						gridColor: '#CCCCCC',
						gridCount: 3,
						opacity: 0.2,
						max: 200,
						border: true
					}
				}
			});
		},
		tap(e) {
			uChartsInstance[e.target.id].touchLegend(e);
			uChartsInstance[e.target.id].showToolTip(e);
		}
	}
};
</script>

<style scoped>
.charts {
	width: 750px;
	height: 500px;
}
</style>
