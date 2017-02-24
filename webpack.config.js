const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/styles.css')
  ]
};
