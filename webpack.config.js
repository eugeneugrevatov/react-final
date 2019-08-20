const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://www.anapioficeandfire.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
};