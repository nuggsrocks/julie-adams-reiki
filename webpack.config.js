module.exports = {
	entry: {
		main: './src/js/index.js'
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: '[name].js'
	},
	mode: 'development',
	target: 'web',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader'
			},
			{
				test: /\.txt/i,
				loader: 'raw-loader'
			}
		]
	}
}
