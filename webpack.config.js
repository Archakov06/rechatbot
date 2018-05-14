const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, ''),
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3333
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'src/'),
        from: 'index.html',
        to: path.resolve(__dirname, '')
      }
    ])
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
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
              build: { autoprefixer: false }
            }
          }
        ]
      }
    ]
  }
};
