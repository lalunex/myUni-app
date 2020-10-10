<template>
	<view class="my_nav">
		<nav-item 
		v-for="item in navdata" 
		:nav_itemObj="item" 
		:key="item.text" 
		class="nav_item" 
		@click.native="navitageChange(item.path)"/>
	</view>
</template>

<script>
	import NavItem from './NavItem.vue'
	
	export default {
		data() {
			return {
				navdata: [
					{
						class: 'iconfont icon-xuexi',
						text: '学习',
						path: '/pages/learn/learn'
					},
					{
						class: 'iconfont icon-icon',
						text: '生活',
						path: '/pages/life/life'
					},
					{
						class: 'iconfont icon-qita',
						text: '其他',
						path: '/pages/other/other'
					},
					{
						class: 'iconfont icon-lianxiwomen',
						text: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						class: 'iconfont icon-guanyuwomen',
						text: '关于我们',
						path: '/pages/about/about'
					},
					{
						class: 'iconfont icon-ziyuan',
						text: '分类',
						path: '/pages/catagory/catagory'
					}
				]
			}
		},
		components: {
			NavItem
		},
		methods: {
			navitageChange(value) {
				uni.navigateTo({
					url: value,
					success() {
						return uni.showToast({
							image: '/static/icon/success.png',
							title: '跳转成功'
						})
					},
					fail() {
						return uni.showToast({
							image: '/static/icon/fail.png',
							title: '跳转失败'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.my_nav {
		display: flex;
		width: 750rpx;
		margin: 15rpx 0;
		
		.nav_item {
			flex: 1;
			text-align: center;
		}
	}
</style>
