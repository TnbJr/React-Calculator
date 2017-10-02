const webpack = require('webpack')
const path = require('path')


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      { 
      test: /\.css$/, 
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!sass-loader'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
