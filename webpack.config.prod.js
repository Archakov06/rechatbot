const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  devServer: {
    historyApiFallback: true,
    outputPath: path.join(__dirname, '')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, ''),
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: false
    }),
    new CopyWebpackPlugin(['src/index.html'])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|pcss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [
                require('postcss-cssnext')({
                  warnForDuplicates: false
                }),
                require('postcss-nested')(),
                require('postcss-color-function')(),
                require('cssnano')()
              ],
              build: { autoprefixer: true }
            }
          }
        ]
      }
    ]
  }
};
