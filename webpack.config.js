const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      { test: /\.html$/,
        exclude: /node_modules/,
        use: "html-loader"
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    disableHostCheck: true
  },
}
