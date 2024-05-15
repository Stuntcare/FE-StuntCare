<<<<<<< HEAD
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
<<<<<<< HEAD
            loader: "style-loader",
          },
          {
            loader: "css-loader",
=======
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
<<<<<<< HEAD
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
=======
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
<<<<<<< HEAD
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    // new WorkboxWebpackPlugin.GenerateSW({
    //   swDest: './sw.bundle.js',
    //   runtimeCaching: [
    //     {
    //       urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'restaurant-data',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'restaurant-image-data',
    //       },
    //     },
    //   ],
    // }),
=======
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-data',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-image-data',
          },
        },
      ],
    }),
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
  ],
};
