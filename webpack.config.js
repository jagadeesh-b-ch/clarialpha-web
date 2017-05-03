const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: './source/app.module.ts',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
	  rules: [
		{
			test: /\.ts$/,
			loader: 'awesome-typescript-loader'
		}
	]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './source/index.html'})
  ]
};