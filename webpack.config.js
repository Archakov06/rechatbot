const path = require('path');

const demoFolder = 'simple';

module.exports = {
  entry: path.resolve(__dirname, 'examples/' + demoFolder + '/index'),
  output: {
    path: path.resolve(__dirname, 'examples/' + demoFolder),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'examples/' + demoFolder),
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
