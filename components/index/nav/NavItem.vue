<template>
	<view>
		<view :class="nav_itemObj.class"></view>
		<text class="nav_item-text">{{ nav_itemObj.text }}</text>
	</view>
</template>

<script>
	export default {
		props: {
			nav_itemObj: Object,
			default() {
				return {}
			}
		}
	}
</script>

<style lang="scss">
	view[class ~= "iconfont"] {
		color: white;
		line-height: 100rpx;
		margin: 10rpx auto;
		font-size: 60rpx;
		width: 100rpx;
		height: 100rpx;
		background-color: #b50e03;
		border-radius: 50% 50%;
	}
	
	.nav_item-text {
		font-size: 27rpx;
	}
</style>
