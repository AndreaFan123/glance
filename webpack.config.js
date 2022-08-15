const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { webpack } = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name][contenthash].js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "Glance | Simplified work space",
      filename: "index.html",
      template: "./src/index.html",
      favicon: "./src/assets/favicon.png",
    }),
    new Dotenv(),
  ],

  devServer: {
    port: 8000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      process: "process/browser",
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(png|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            limit: 2500,
            name: "[path][name].[ext]",
          },
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader",
          options: {
            limit: 10000,
            encoding: "base64",
          },
        },
      },
    ],
  },
};
