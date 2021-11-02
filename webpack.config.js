const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const srcDir = path.join(__dirname, '/src');

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(srcDir, '/index.js'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'template',
      template: `${srcDir}/index.html`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 8080,
    hot: true,
    open: false,
    historyApiFallback: true,
    compress: true,
    static: {
      directory: path.join(__dirname, 'src'),
    },
  },
};
