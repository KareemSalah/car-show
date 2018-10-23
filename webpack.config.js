const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: ['./', 'node_modules']
  },
  output: {
    path: path.resolve(__dirname),
    publicPath: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname,
    port: 3000,
    publicPath: "http://localhost:3000/",
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
