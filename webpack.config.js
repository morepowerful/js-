// import webpack from 'webpack';
// import { resolve } from 'path';
var resolve = require('path').resolve;
var webpack = require('webpack');
module.exports = {
    entry: {
        bundel: './index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: resolve(__dirname, './src'),
                use: 'babel-loader',
            }
        ]
    }
}