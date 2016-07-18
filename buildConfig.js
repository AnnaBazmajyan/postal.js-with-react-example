module.exports = {
    webpackConfig: {
        debug: require('./webpack.config.js'),
        productionAlpha: require('./webpack.config.prod.alpha.js'),
        productionBeta: require('./webpack.config.prod.beta.js'),
        productionMaster: require('./webpack.config.prod.master.js'),
    },
    devServer: {
        // settings for webpack-dev-server
        proxy: {
            // put your custom proxy routes here, e.g.:
            // '/api/': 'http://localhost:8081'
        },
        headers: {
            // put your custom headers here, e.g.:
            // 'X-TEST': 1,
        },
    },
};
