<template>
	<view class="article">
		<view class="article-title">{{ articleDataMain.articleTitle }}</view>
		<view 
		class="article-img" 
		:style="{ backgroundImage: 'url(https://lightliang.top/img/lightliangNormalImg' + articleDataImg + '.jpg)' }"></view>
		<view class="article-compound">
			<text>{{ articleDataMain.articleCommentNum }}</text>
			<text>{{ articleDataMain.articleDate | detaFilter }}</text>
		</view>
		<rich-text class="article-content" :nodes="htmlContent" />

		<uni-goods-nav 
		class="article-bottom" 
		:fill="true" 
		:options="options" 
		:buttonGroup="buttonGroup" 
		@click="onClick" 
		@buttonClick="buttonClick" />
	</view>
</template>

<script>
	import {
		detaFormatChange
	} from "../../utils/api.js"
	import marked from "marked"
	import UniGoodsNav from '@/components/uni-goods-nav/UniGoodsNav.vue'

	export default {
		data() {
			return {
				articleDataMain: {},
				articleDataImg: 0,
				htmlContent: '',
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		components: {
			UniGoodsNav
		},
		methods: {
			async getArticleData(value) {
				await this.$myRequest({
					url: '/api/article',
					data: {
						id: value
					},
					method: 'GET'
				}).then(res => {
					this.articleDataImg = res.data.articleArticle.articleContentImg
					this.articleDataMain = res.data.articleArticle.articleContentMainbody
					this.htmlContent = marked(this.articleDataMain.articleContent);
				}).catch(err => {
					console.log(err)
				})
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		filters: {
			detaFilter(value) {
				return detaFormatChange(value)
			}
		},
		onLoad(value) {
			this.getArticleData(value.id)
		}
	}
</script>

<style lang="scss">
	.article {
		padding: 15rpx;
		padding-bottom: 50px;

		.article-title {
			font-size: 35rpx;
			text-align: center;
			letter-spacing: 10rpx;
		}

		.article-img {
			height: 500rpx;
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			padding: 10rpx;
		}

		.article-compound {
			padding: 20rpx;
			display: flex;
			justify-content: space-between;

			text {
				padding: 10rpx;
			}
		}

		.article-content {
			padding: 30rpx;
		}
		
		.article-bottom {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
		}
	}
</style>
