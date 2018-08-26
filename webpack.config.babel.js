import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
        query: {
          presets: [
            'env',
            'stage-2',
            'react'
          ]
        }
      }
    ]
  }
}

const clientConfig = {
  ...common,

  name: 'client',
  target: 'web',

  entry: {
    client: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  optimization: {
    splitChunks: {
        name: "vendor",
        chunks: "all"
    }
  },

  devtool: 'cheap-module-source-map',

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
}

const serverConfig = {
  ...common,

  name: 'server',
  target: 'node',
  externals: [nodeExternals()],

  entry: {
    client: [
        'babel-polyfill',
        './src/ssr/server.js'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },

  devtool: 'cheap-module-source-map',

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  }
}

export default [clientConfig, serverConfig];