<template>
	<view class="good_item">
		<image 
		:src="'https://lightliang.top/img/lightliangNormalImg' + articleValue.cardImgId + '.jpg'" 
		class="good_item-img" 
		@click.stop="changeScale"></image>
		<view 
		class="good_item-price" 
		@click="goArticle">
			<text>{{ articleValue.cardDate | detaFilter }}</text>
			<text>{{ articleValue.cardMessage }}</text>
		</view>
		<view class="good_item-comment" @click="goArticle">
			<text>{{ articleValue.cardTitle }}</text>
		</view>
	</view>
</template>

<script>
	import { detaFormatChange } from "../../../utils/api.js"
	
	export default {
		props: {
			articleValue: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			detaFilter(value) {
				return detaFormatChange(value)
			}
		},
		methods: {
			changeScale() {
				this.$emit('sendImgInfo', {
					current: this.articleValue.cardImgId
				})
			},
			goArticle() {
				uni.navigateTo({
					url: '/pages/article/article?id=' + this.articleValue.cardImgId
				})
			}
		}
	}
</script>

<style lang="scss">
	.good_item {
		// margin: 0 auto;
		width: 335rpx;
		overflow: hidden;
		
		.good_item-img {
			width: 100%;
			overflow: hidden;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			margin: 10rpx 0;
			border-radius: 10rpx;
			/* #ifdef H5 */
			cursor: pointer;
			/* #endif */
		}
		
		.good_item-price {
			font-size: 20rpx;
			text-align: center;
			display: flex;
			
			text:nth-child(1) {
				color: $shop-color;
				flex: 9;
			}
			
			text:nth-of-type(2) {
				flex: 1;
				color: #ccc;
			}
		}
		
		.good_item-comment {
			font-size: 28rpx;
			padding: 2rpx 10rpx;
			display: -webkit-box;
			overflow: hidden;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
		}
	}
</style>
