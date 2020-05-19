const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + '/server.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
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
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './dist/index.html',
            filename: './dist/index.html',
            excludeChunks: ['server']
        })
    ]
}