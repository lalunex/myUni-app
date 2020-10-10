<template>
	<scroll-view class="catagory-right" scroll-y="true">
		<article-item v-for="item in ItemRight" 
		:articleValue="item" 
		@sendImgInfo="imgChange"/>
	</scroll-view>
</template>

<script>
	import ArticleItem from "../index/hotarticles/ArticleItem.vue"
	
	export default {
		props: {
			ItemRight: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			ArticleItem
		},
		methods: {
			imgChange(value) {
				let arr = this.ItemRight.map(item => {
					return 'https://lightliang.top/img/lightliangNormalImg' + item.cardImgId + '.jpg'
				})
				uni.previewImage({
					current: 'https://lightliang.top/img/lightliangNormalImg' + value.current + '.jpg',
					urls: arr,
					loop: true
				})
			}
		}
	}
</script>

<style lang="scss">
	.catagory-right {
		height: 100%;
		padding-left: 107rpx;
	}
</style>
