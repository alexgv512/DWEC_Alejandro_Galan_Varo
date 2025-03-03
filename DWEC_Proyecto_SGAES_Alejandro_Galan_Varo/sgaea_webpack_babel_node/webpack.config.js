const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
entry: ['@babel/polyfill', './src/main.js'],
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
},
module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader'
        }
    },
    {
        test: /\.ttf$/,
        type: 'asset/resource'
    }
    ]
},
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    template: './index.html'
    })
],
mode: 'production'
};