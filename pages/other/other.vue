<template>
	<view class="other">
		<hot-articles  ref="hotArticles"/>
	</view> 
</template>

<script>
	import HotArticles from '../../components/index/hotarticles/HotArticles.vue'
	
	export default {
		data() {
			return {
				articlesList: []
			}
		},
		methods: {
			
		},
		components: {
			HotArticles
		},
		onReachBottom() {
			this.$refs.hotArticles.getArticlesData()
		}
	}
</script>

<style lang="scss">
</style>
