const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
  return path.join(__dirname, '/demo', dir);
}

module.exports = {
  mode: 'development',
  entry: [resolve('index.js')],
  output: {
    path: resolve('dist'),
    filename: `[name].[chunkhash].js`,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 5001,
    contentBase: resolve('dist'),
    historyApiFallback: true,
    compress: true,
    clientLogLevel: 'silent',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      publicPath: '/',
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src', '../../node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, '/src'),
      '@components': path.join(__dirname, '/src/components'),
      '@root': path.join(__dirname, '../..'),
      '@rootImages': path.join(__dirname, '../../assets/images'),
      '@rootData': path.join(__dirname, '../../assets/data'),
      '@demo': path.join(__dirname, '/demo'),
    },
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
};
