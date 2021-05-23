const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (env, argv) {
  return {
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "eval",
    devServer: {
      open: true,
      historyApiFallback: true,
    },
    entry: {
      index: "./src/index.ts",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
