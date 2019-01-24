'use strict'

var path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        }),
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader?url=false",
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ]
              }
            }
          ]
        }),
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 300000, // Max 300Kb,
              name: 'assets/css/img/[name].[ext]'
            }
          }
        ]
      },
      // {
      //   test: /\.(gif|svg|jpg|png|woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "file-loader",
      // }       
    ]
  },
  plugins: [
    new ExtractTextPlugin("assets/css/[name].css")
  ],
  target: 'web',
  stats: {
    warnings: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001
  }
}