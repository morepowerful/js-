// import webpack from 'webpack';
// import { resolve } from 'path';
var resolve = require('path').resolve;
var webpack = require('webpack');
module.exports = {
    entry: {
        bundel: ['./src/js-DoublyLinkedList.js','./src/js-LinkedList.js','./src/js-Queue.js','./src/js-Stack.js']
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