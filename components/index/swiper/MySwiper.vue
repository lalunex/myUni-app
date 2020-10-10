<template>
	<view class="my_swiper">
		<swiper indicator-dots="true"
		circular="true" 
		indicator-color="#ccc" 
		autoplay="true">
			<swiper-item 
			v-for="item in imgArr" 
			:key="item.text.substr(0, 3)">
				<image :src="'https://lightliang.top/img/lightliangAdvertisementImg' + item.imgSrc + '.jpg'"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			imgArr: {
				type: Array,
				default() {
					return []
				} 
			}
		}
	}
</script>

<style lang="scss">
	.my_swiper {
		width: 750rpx;
		height: 300rpx;
		
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
