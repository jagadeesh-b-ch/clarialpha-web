const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
//var helpers = require('./helpers');

module.exports = {
  entry:{
    'app':'./source/app.module.ts',
    'polyfills':'./dependencies/polyfills.ts'
  },
  output: {
    filename: '[name].js',
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
    // Workaround for angular/angular#11580
	/*new webpack.ContextReplacementPlugin(
		// The (\\|\/) piece accounts for path separators in *nix and Windows
		/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
		helpers.root('./source'), // location of your src
		{} // a map of your routes
	),*/
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};