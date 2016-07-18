const path = require('path');
const webpack = require('webpack');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    context: path.resolve(__dirname),
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        library: 'Widgets',
        libraryTarget: 'umd',
        filename: 'widgets.min.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules'],
    },
    node: {
        fs: 'empty',
    },
    eslint: {
        configFile: path.join(__dirname, '.eslintrc'),
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint'
            },
        ],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
            },
            {
                test: /\.styl$/,
                loaders: ['style', 'css', 'stylus'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [StringReplacePlugin.replace({
                    replacements: [
                        {
                            pattern: /@apiURL/ig,
                            replacement() {
                                return 'http://fitogram-webapi-alpha.azurewebsites.net';
                            }
                        },
                        {
                            pattern: /@shopURL/ig,
                            replacement() {
                                return 'http://fitogram-shop-alpha.azurewebsites.net';
                            }
                        },
                        {
                            pattern: /@facebookAppID/ig,
                            replacement() {
                                return '759051517473309';
                            }
                        }
                    ]}), 'babel'],
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml',
            },
            {
                test: /\.png$/,
                loader: 'url?limit=10000&mimetype=image/png',
            },
            {
                test: /\.gif$/,
                loader: 'url?limit=10000&mimetype=image/gif'
            }
        ],
    },
    plugins: [
        new StringReplacePlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
