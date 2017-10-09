const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'eval',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],

  output: {
    filename: 'bundle.js',
    publicPath: 'build',
    path: path.resolve(__dirname, 'build')
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    modules: ['src', 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.scss?$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
