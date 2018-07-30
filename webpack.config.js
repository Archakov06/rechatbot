const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'examples/form/index'),
  output: {
    path: path.resolve(__dirname, 'examples/form'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'examples/form'),
    host: '0.0.0.0',
    disableHostCheck: true
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
