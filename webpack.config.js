// https://github.com/serverless/examples/blob/v3/legacy/aws-nodejs-ecma-script/webpack.config.js

const path = require('path')
const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.join(__dirname, '.webpack')
  },
  resolve: {
    alias: {
      '@libs': path.resolve(__dirname, 'src/libs/'),
      '@functions': path.resolve(__dirname, 'src/functions/')
    }
  },
  // mode: 'development',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        include: __dirname,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current'
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
}
