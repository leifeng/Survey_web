var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/entry'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    externals: {

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.less/,
                loader: "style!css!less!postcss"
            }, {
                test: /\.css/,
                loader: "style!css!postcss"
            }
        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
};