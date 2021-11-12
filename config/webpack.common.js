const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const srcDir = path.join(__dirname, '../src');

module.exports = {
  entry: {
    main: path.join(srcDir, '/index.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
  },
  resolve: {
    alias: { '@': srcDir },
    extensions: ['.js', '.jsx'],
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
        test: /\.(jsx|js)?$/,
        use: ['babel-loader'],
        include: srcDir,
      },
    ],
  },
};
