const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    path.resolve(__dirname, './src/index.js')
  ],
  devServer: {
    contentBase: '/dist',
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,

        loader: 'url-loader',
        options: {
          publicPath: 'assets'
        }
      }
    ]
  }
};
