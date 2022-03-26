const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: (config) => {
		//调试JS
		config.devtool = 'source-map'
	}
})
