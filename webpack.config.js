'use strict';

const ServerlessCopyWebpackPlugin = require('serverless-copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');


module.exports = {
  entry: slsw.lib.entries,
  target: 'node12',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: ['dev', 'test'].includes(slsw.lib.serverless.variables.options.environment),
  },
  plugins: [
    new ServerlessCopyWebpackPlugin(),
  ],
  externals: [nodeExternals()],
};
