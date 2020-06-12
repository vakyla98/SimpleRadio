// require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/SimpleRadio/dist' : '/dist',
    transpileDependencies: ['vuetify'],
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: true,
        },
    },
}
