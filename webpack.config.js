const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        hot: true,
        port: 9527,
        open: true
    },
    module: {
        rules: [{
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                //打包包括的文件
                include: path.resolve(__dirname, "./src"),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": ["stage-1"]
                    },
                }, ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?sourceMap'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader?sourceMap'},
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("mystyles.css"),
        new HtmlWebpackPlugin({
            template: './src/view/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
            },
            hash: true,
            inject: true
        })
    ]
};
