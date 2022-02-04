const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: { path: path.join(__dirname, 'build'), filename: 'index.bundle.js' },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'css-modules-typescript-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      favicon: path.join(__dirname, 'src', 'favicon.png'),
    }),
  ],
};
