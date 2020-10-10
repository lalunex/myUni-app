<template>
	<view class="catagory">
		<catagory-left :labelsLeft="labels" @getChangeType="getInfo"/>
		<catagory-right :ItemRight="showItem"/>
	</view>
</template>

<script>
	import CatagoryLeft from '../../components/catagory/CatagoryLeft.vue'
	import CatagoryRight from '../../components/catagory/CatagoryRight.vue'
	
	export default {
		data() {
			return {
				labels: [],
				getPages: 1,
				showItem: []
			}
		},
		methods: {
			async getLabels() {
				await this.$myRequest({
					notChageUrl: false,
					url: '/api/labels',
					method: 'POST'
				}).then(res => {
					this.labels = res.data
				}).catch(err => {
					console.log(err)
				})
			},
			async getSearch(value) {
				await this.$myRequest({
					url: '/api/search',
					method: 'GET',
					data: {
						t: this.labels[value.click],
						p: this.getPages++
					}
				}).then(res => {
					if (res.data.searchCards) {
						this.showItem.push(...res.data.searchCards)
					} else {
						this.showItem = []
					}
				}).catch(err => {
					console.log(err)
				})
			},
			getInfo(value) {
				this.getPages = 1
				this.showItem = []
				this.getSearch(value)
			}
		},
		components: {
			CatagoryLeft,
			CatagoryRight
		},
		async onLoad() {
			await this.getLabels()
			await this.getSearch({ click: 0 })
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	
	.catagory {
		height: 100%;
		display: flex;
		overflow: hidden;
	}
	
</style>
