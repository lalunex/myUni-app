import { BASE_URL } from './constName.js'
import { BASE_URL2 } from './constName.js'

export const myRequest = (options) => {
	if (options.notChageUrl === undefined) {
		options.notChageUrl = true
	}
	return new Promise((reslove, reject) => {
		uni.request({
			url: options.notChageUrl ? (BASE_URL + options.url) : (BASE_URL2 + options.url),
			method: options.method || 'GET',
			data: options.data || {},
			header: options.header || {},
			success(res) {
				if (res.statusCode !== 200) {
					return uni.showToast({
						image: '/static/icon/fail.png',
						title: '获取数据失败'
					})
				}
				reslove(res)
			},
			fail: (err) => {
				return uni.showToast({
					image: '/static/icon/fail.png',
					title: '获取数据失败'
				})
				reject(err)
			}
		})
	})
}

export const detaFormatChange = (value) => {
	if (!value) return ''
	const dateee = new Date(value).toJSON();
	const date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, '日 ').replace(/\.[\d]{3}Z/, '')
	return date.replace(/-/, '年').replace(/-/, '月')
}
