<template>
	<scroll-view class="catagory-left" scroll-y="true">
		<view 
		:class="{ active: index === currentItem }" 
		v-for="(item, index) in labelsLeft" 
		:key="item"
		@click="getCurrent(index)">{{ item }}</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				currentItem: 0
			}
		},
		props: {
			labelsLeft: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			getCurrent(value) {
				if (value !==this.currentItem) {
					this.currentItem = value
					this.$emit('getChangeType', {
						click: this.currentItem
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.catagory-left {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid rgba(100, 100, 100, .5);
		
		view {
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid rgba(100, 100, 100, .3);
		}
	}
	
	.active {
		background-color: $shop-color;
		color: white;
	}
</style>
