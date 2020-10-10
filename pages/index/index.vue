<template>
	<view class="home">
		<my-swiper :imgArr='swipers'/>
		<my-nav/>
		<hot-articles ref="hotArticles"/>
	</view>
</template>

<script>
	import MySwiper from '../../components/index/swiper/MySwiper.vue'
	import MyNav from '../../components/index/nav/MyNav.vue'
	import HotArticles from '../../components/index/hotarticles/HotArticles.vue'
	
	export default {
		data() {
			return {
				swipers: []
			}
		},
		components: {
			MySwiper,
			MyNav,
			HotArticles
		},
		methods: {
			async getSwiperDatas() {
				await this.$myRequest({
					url: '/api/appcomponents',
					method: 'GET'
				}).then(res => {
					this.swipers = res.data.appComponentsAside.asideContentAdvertisesements
				}).catch(err => {
					console.log(err)
				})
			},
			async getDataAgain() {
				await this.getSwiperDatas()
				this.$refs.hotArticles.page = 1
				await this.$refs.hotArticles.getArticlesData()
			}
		},
		onLoad() {
			this.getSwiperDatas()
		},
		async onPullDownRefresh() {
			await this.getDataAgain()
			uni.stopPullDownRefresh()
		},
		onReachBottom() {
			this.$refs.hotArticles.getArticlesData()
		}
	}
</script>

<style lang="scss">
	
</style>
