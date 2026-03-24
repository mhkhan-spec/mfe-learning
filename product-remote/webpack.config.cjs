const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3001/',
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
      name: 'productapp',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList.vue',
      },
      shared: {
        vue: {
          singleton: true,
          eager: false,
          requiredVersion: '^3.0.0',
        },
        'vue-router': {
          singleton: true,
          eager: false,
          requiredVersion: '^4.0.0',
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Product Remote',
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
