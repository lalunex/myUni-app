<template>
	<view class="news">
		<news-item 
		:newItemObj="item" 
		v-for="item in newsData" 
		:key="item.cardImgId"/>
	</view>
</template>

<script>
	import NewsItem from '../../components/news/NewsItem.vue'
	
	export default {
		data() {
			return {
				page: 1,
				newsData: []
			}
		},
		methods: {
			async getNewsData() {
				await this.$myRequest({
					url: '/api/home',
					data: {
						t: 'learning',
						p: this.page++
					},
					method: 'GET'
				}).then(res => {
					this.newsData.push(...res.data.homeCards)
				}).catch(err => {
					console.log(err)
				})
			}
		},
		components: {
			NewsItem
		},
		onReachBottom() {
			this.getNewsData()
		},
		onLoad() {
			this.getNewsData()
		}
	}
</script>

<style lang="scss">
</style>
