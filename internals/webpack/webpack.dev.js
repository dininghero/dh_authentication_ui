const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: [
    './app/app.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}../../../build`,
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true,
      favicon: 'app/images/favicon.ico',
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
  devServer: {
    contentBase: './build',
    watchContentBase: true,
    port: 8080,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
