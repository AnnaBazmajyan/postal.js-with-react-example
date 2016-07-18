const CopyWebpackPlugin = require('copy-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'https://widgets.coursika.de/',
        library: 'Widgets',
        libraryTarget: 'umd',
        filename: 'widgets.min.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        packageMains: ['style', 'main'],
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules'],
    },
    node: {
        fs: 'empty',
    },
    module: {
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
                                return 'https://api.coursika.de';
                            }
                        },
                        {
                            pattern: /@shopURL/ig,
                            replacement() {
                                return 'https://shop.coursika.de';
                            }
                        },
                        {
                            pattern: /@facebookAppID/ig,
                            replacement() {
                                return '754983891213405';
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
                loader: 'url?limit=1000&mimetype=image/png',
            },
            {
                test: /\.gif$/,
                loader: 'url?limit=1000&mimetype=image/gif'
            }
        ],
    },
    plugins: [
        new StringReplacePlugin(),
        new CopyWebpackPlugin([
            {
                from: 'web.config'
            },
        ])
    ]
};
