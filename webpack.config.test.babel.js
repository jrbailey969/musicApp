'use strict';

const path = require('path');
//import path from 'path';
const webpack = require('webpack');

module.exports = {
    context:  path.join(__dirname,'/app'),
    devtool: 'inline-source-map',
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'eslint-loader',
        //         exclude: /(node_modules)/
        //     }
        // ],
        loaders: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap&sourceComments'
        }, {
            test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
            loader: 'url-loader?limit=300'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.html$/,
            loader: 'ng-cache-loader?prefix=[dir]/[dir]'
        }, {
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015',
            exclude: /node_modules/
        }],
    },
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, "app"), "node_modules"]
        //root: path.resolve('./app')
    }
};