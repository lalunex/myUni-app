<template>
	<view class="hot_articles">
		<text 
		class="hot_articles-text" 
		v-show="showArticleTitle">推荐文章</text>
		
		<view class="hot_articles-list">
			<article-item 
			v-for="item in articlesList" 
			:key="item.cardImgId" 
			:articleValue="item"/>
		</view>
		
		<view class="hot_articles-motion" v-if="showNotMotion">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import ArticleItem from "./ArticleItem.vue"
	
	export default {
		data() {
			return {
				articlesList: [],
				page: 1,
				showArticleTitle: false,
				showNotMotion: false
			}
		},
		components: {
			ArticleItem
		},
		created() {
			this.getArticlesData()
		},
		methods: {
			async getArticlesData() {
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				let currentPage = page.route;
				let regexp1 = /pages\/(.*)\/(.*)/
				regexp1.exec(currentPage)
				if (RegExp.$1 === 'index') {
					this.showArticleTitle = true
				}
				let path = ''
				if (RegExp.$1 === 'other') {
					path = 'foodsandculture'
				} else if (RegExp.$1 === 'life'){
					path = 'life'
				} else {
					path = 'learning'
				}
				await this.$myRequest({
					url: '/api/home',
					data: {
						t: path,
						p: this.page++
					},
					method: "GET"
				}).then(res => {
					if (JSON.stringify(this.articlesList).indexOf(JSON.stringify(res.data.homeCards[0])) === -1) {
						this.articlesList.push(...res.data.homeCards)
					} else {
						this.articlesList = res.data.homeCards
					}
					this.showNotMotion = res.data.isDone
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss">
	.hot_articles {
		width: 750rpx;
		text-align: center;
		margin-top: 10px 0;
		
		.hot_articles-text {
			display: block;
			width: 100%;
			border-bottom: 7px solid #eee;
			border-top: 7px solid #eee;
			letter-spacing: 20px;
			background-color: white;
			color: $shop-color;
			font-size: 50rpx;
			height: 50px;
			line-height: 50px;
		}
		
		.hot_articles-list {
			padding: 0 15rpx;
			background-color: #FFF;
			display: flex;
			flex-flow: wrap row;
			justify-content: space-around;
		}
		
		.hot_articles-motion {
			height: 100rpx;
			line-height: 100rpx;
			letter-spacing: 5rpx;
			font-size: 35rpx;
		}
	}
</style>
