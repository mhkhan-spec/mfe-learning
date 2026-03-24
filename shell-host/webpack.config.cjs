const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:3000/',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'shellhost',
            remotes: {
                productapp: 'productapp@http://localhost:3001/remoteEntry.js',
                profileapp: 'profileapp@http://localhost:3002/remoteEntry.js',
            },
            shared: {
                vue: {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^3.0.0',
                },
                'vue-router': {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^4.0.0',
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'MFE Storefront Shell',
        }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
