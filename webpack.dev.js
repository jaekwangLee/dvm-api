/** @format */

const path = require("path");

module.exports = {
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  entry: {
    index: path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      "@constant": path.resolve(__dirname, "src/constants"),
      "@lib": path.resolve(__dirname, "src/libs"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@db": path.resolve(__dirname, "src/db"),
      "@types": path.resolve(__dirname, "src/types"),
      "@models": path.resolve(__dirname, "src/models"),
      "@controllers": path.resolve(__dirname, "src/controllers"),
      "@routes": path.resolve(__dirname, "src/routes"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    emitOnErrors: true,
  },
};
