<script>
	import { authLogin } from './config/util.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			authLogin()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
