const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    inline: true
  }
};
