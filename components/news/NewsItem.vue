<template>
	<view class="news_item" @click="goArticle">
		<view 
		class="news_item-img" 
		:style="{ backgroundImage: 'url(https://lightliang.top/img/lightliangNormalImg' + newItemObj.cardImgId + '.jpg)' }"></view>
		<view class="news_item-text">
			<view class="news_item-text-title">{{ newItemObj.cardTitle }}</view>
			<view class="news_item-text-other">
				<text>{{ newItemObj.cardDate | detaFilter }}</text>
				<text>留言：{{ newItemObj.cardMessage }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { detaFormatChange } from "../../utils/api.js"
	
	export default {
		props: {
			newItemObj: {
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
			goArticle() {
				uni.navigateTo({
					url: '/pages/article/article?&id=' + this.newItemObj.cardImgId
				})
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
		display: flex;
		height: 250rpx;
		margin: 20rpx 0;
		border: 1px solid #eee;
		box-shadow: 0 0 15rpx black;
		
		.news_item-img {
			flex: 1;
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
		}
		
		.news_item-text {
			flex: 2;
			overflow: hidden;
			position: relative;
			
			.news_item-text-title {
				font-size: 30rpx;	
				text-align: center;
				padding: 20rpx;
			}
			
			.news_item-text-other {
				display: flex;
				width: 100%;
				padding: 20rpx;
				position: absolute;
				left: 0;
				bottom: 0;
				
				text:nth-child(1) {
					flex: 2;
				}
				
				text:nth-of-type(2) {
					flex: 1;
				}
			}
		}
	}
</style>
