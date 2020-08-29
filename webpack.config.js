module.exports = {
	mode: 'development',
	entry: './js/index.js',
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js'
	},
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
				loader: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: 'source-map',
	target: 'web',
	watch: true
}