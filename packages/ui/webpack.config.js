const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (env, argv) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval',
    entry: {
      index: './src/index.tsx',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
            tsconfigRaw: require('./tsconfig.json'),
          },
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: "sass-loader",
              options: {
                // Prefer `dart-sass`
                implementation: require("sass"),
              },
            }
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        linkType: false,
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ],
    optimization: {
      minimize: env.production ? true : false,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2015',
        }),
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@design-system/utils': path.resolve(__dirname, '../utils/src'),
      },
    },
    stats: {
      assetsSort: 'size',
      children: false,
      chunksSort: 'size',
      excludeAssets: /.js.map/,
      modules: false,
    },
  };
};
