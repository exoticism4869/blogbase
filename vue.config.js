const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	productionSourceMap: false,
	publicPath: '/',
	outputDir: 'docs',
	configureWebpack: (config) => {
		//调试JS
		config.devtool = 'source-map'
	}
})
