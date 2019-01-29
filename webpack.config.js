const path = require('path');
const {BannerPlugin} = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isImportableModule = false;

const config = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [/src/],
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimizer: []
    },
    plugins: [
        new BannerPlugin(require('@meldcx/copyright-statement')),
        new CopyWebpackPlugin([
            {from: 'public'}
        ])
    ]
};

if (isImportableModule) config.output.libraryTarget = 'commonjs2';

module.exports = config;