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
