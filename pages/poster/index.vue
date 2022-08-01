<template>
	<l-painter
		ref="painter"
		css="width: 750rpx; padding-bottom: 40rpx; background: linear-gradient(,#ff971b 0%, #ff5000 100%)"
	>
		<l-painter-image
			src="https://img.mvpcs.cn/avatar/0070-d003-dc8a-57f6-0691"
			css="margin-left: 40rpx; margin-top: 40rpx; width: 84rpx;  height: 84rpx; border-radius: 50%;"
		/>
		<l-painter-view css="margin-top: 40rpx; padding-left: 20rpx; display: inline-block">
			<l-painter-text
				text="隔壁老王"
				css="display: block; padding-bottom: 10rpx; color: #fff; font-size: 32rpx; fontWeight: bold"
			/>
			<l-painter-text text="为您挑选了一个好物" css="color: rgba(255,255,255,.7); font-size: 24rpx" />
		</l-painter-view>
		<l-painter-view
			css="margin-left: 40rpx; margin-top: 30rpx; padding: 32rpx; box-sizing: border-box; background: #fff; border-radius: 16rpx; width: 670rpx; box-shadow: 0 20rpx 58rpx rgba(0,0,0,.15)"
		>
			<l-painter-image
				src="https://m.360buyimg.com/babel/jfs/t1/196317/32/13733/288158/60f4ea39E6fb378ed/d69205b1a8ed3c97.jpg"
				css="object-fit: cover; object-position: 50% 50%; width: 606rpx; height: 606rpx; border-radius: 12rpx;"
			/>
			<l-painter-view css="margin-top: 32rpx; color: #FF0000; font-weight: bold; font-size: 28rpx; line-height: 1em;">
				<l-painter-text text="￥" css="vertical-align: bottom" />
				<l-painter-text text="39" css="vertical-align: bottom; font-size: 58rpx" />
				<l-painter-text text=".39" css="vertical-align: bottom" />
				<l-painter-text
					text="￥59.99"
					css="vertical-align: bottom; padding-left: 10rpx; font-weight: normal; text-decoration: line-through; color: #999999"
				/>
			</l-painter-view>
			<l-painter-view css="margin-top: 32rpx; font-size: 26rpx; color: #8c5400">
				<l-painter-text text="自营" css="color: #212121; background: #ffb400;" />
				<l-painter-text
					text="30天最低价"
					css="margin-left: 16rpx; background: #fff4d9; text-decoration: line-through;"
				/>
				<l-painter-text text="满减优惠" css="margin-left: 16rpx; background: #fff4d9" />
				<l-painter-text text="超高好评" css="margin-left: 16rpx; background: #fff4d9" />
			</l-painter-view>
			<l-painter-view css="margin-top: 30rpx">
				<l-painter-text
					css="line-clamp: 2; color: #333333; line-height: 1.8em; font-size: 36rpx; width: 478rpx; padding-right:32rpx; box-sizing: border-box"
					text="360儿童电话手表9X 智能语音问答定位支付手表 4G全网通20米游泳级防水视频通话拍照手表男女孩星空蓝"
				></l-painter-text>
				<l-painter-qrcode css="width: 128rpx; height: 128rpx;" text="limeui.qcoon.cn"></l-painter-qrcode>
			</l-painter-view>
		</l-painter-view>
	</l-painter>
</template>

<script>
export default {
	onLoad() {
		console.log('this.$refs.painter = ', this.$refs.painter);
		this.$refs.painter.canvasToTempFilePathSync({
			fileType: 'jpg',
			// 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
			pathType: 'url',
			quality: 1,
			success: res => {
				console.log(res.tempFilePath);
				// 非H5 保存到相册
				// H5 提示用户长按图另存
				uni.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: function() {
						console.log('save success');
					}
				});
			}
		});
	}
};
</script>
