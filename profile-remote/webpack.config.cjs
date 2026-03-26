const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: 'http://localhost:3002/',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { modules: false }],
                            '@babel/preset-react',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'profileapp',
            filename: 'remoteEntry.js',
            exposes: {
                './ProfileCard': './src/components/ProfileCard.jsx',
            },
            shared: {
                react: {
                    singleton: true,
                    eager: false,
                    requiredVersion: '^19.0.0',
                },
                'react-dom': {
                    singleton: true,
                    eager: false,
                    requiredVersion: '^19.0.0',
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Profile Remote',
        }),
    ],
    devServer: {
        port: 3002,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};
