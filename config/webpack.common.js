const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const srcDir = path.join(__dirname, '../src');

module.exports = {
  entry: {
    main: path.join(srcDir, '/index.tsx'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({ FONT_BASE: 14 }),
    new HtmlWebpackPlugin({
      title: 'template',
      template: `${srcDir}/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
