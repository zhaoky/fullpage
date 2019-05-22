const path = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const _DEV_ = process.env.NODE_ENV === "development";

const config = {
  mode: process.env.NODE_ENV || "production",
  entry: _DEV_
    ? path.resolve(__dirname, "./src/index.js")
    : path.resolve(__dirname, "./src/lib/fullpage.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "fullpage.js",
    library: "fullpage",
    libraryTarget: "umd"
  },
  devtool: _DEV_ ? "eval-source-map" : "",
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`${packageJson.name} v${packageJson.version}`)
  ]
};
if (_DEV_) {
  config.devServer = {
    stats: "errors-only",
    contentBase: path.join(__dirname, "dist"),
    overlay: true
  };
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
  );
}

module.exports = config;
