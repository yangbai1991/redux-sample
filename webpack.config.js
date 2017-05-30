var path = require('path');

const { resolve } = path;

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'stage-3', 'es2015']
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'common': resolve('src/common'),
			'components': resolve('src/components')
		}
	}
};