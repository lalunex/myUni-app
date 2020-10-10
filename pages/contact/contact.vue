<template>
	<view class="contact">
		<view class="contact-img"/>
		<view class="contact-content">
			<view @click="makePhone">
				联系电话：18715723137（点击拨打）
			</view>
			<view>
				联系地址：中国四川省南充市营山县
			</view>
		</view>
		<map class="contact-map" :longitude="longitude" 
		:latitude="latitude" 
		:scale="scale" 
		:markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 118.28200,
				latitude: 35.118000,
				scale: 20,
				markers: [
					{
						longitude: 118.28200,
						latitude: 35.118000,
						iconPath: '/static/icon/location.png',
						alpha: 0.5,
						width: 50,
						height: 50
						
					}
				]
			}
		},
		methods: {
			makePhone() {
				uni.makePhoneCall({
					phoneNumber: '18715723137'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		width: 750rpx;
		overflow: hidden;
		.contact-img {
			background-image: url('https://lightliang.top/img/lightliangHeaderImg0.jpg');
			width: 100%;
			height: 360rpx;
			background-repeat: no-repeat;
			background-position: center center;
			background-over: over;
		}
		
		.contact-content {
			margin: 20rpx 0;
			font-size: 40rpx;
			line-height: 100rpx;
			padding-left: 20rpx;
		}
		
		.contact-map {
			margin: 20rpx auto;
			width: 700rpx;
			height: 500rpx;
		}
	}
</style>
