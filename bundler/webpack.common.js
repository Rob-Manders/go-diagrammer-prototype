
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management'
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
		clean: true
	}
}