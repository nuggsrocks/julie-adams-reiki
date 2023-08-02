const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const autoprefixer = require('autoprefixer')


const isProduction = process.env.NODE_ENV === 'production'

const styleLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/icon.png'
  }),
  isProduction ? new CssMinimizerPlugin() : false,
  isProduction ? new MiniCssExtractPlugin() : false
]

module.exports = {
  entry: './src/index.js',
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'inline-source-map',
  devServer: {
    host: 'localhost'
  },
  output: {
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          styleLoader, 
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif|wav|mp3|ico)/,
        type: 'asset'
      }
    ]
  },
  plugins: plugins.filter(Boolean)
}

