'use strict'

var path = require('path')

module.exports = {
  devServer: {
    contentBase:       'src/',
    port:               9000,
    publicPath:         '/app/'
  },
  entry: './src/app/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve('src/app/')
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', 'jsx', 'tsx']
  },
  module: {
    loaders: [
      {
        loaders: [
          'html',
        ],
        test: /\.html$/,
      },
      {
        loaders: [
          'ng-annotate',
          'ts',
        ],
        test: /\.tsx?$/,
      },
      {
        loaders: [
          "style",
          "css",
          "sass",
        ],
        test: /\.scss$/,
      }
    ]
  }
}
