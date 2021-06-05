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
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    optimization: {
      minimize: env.production ? true : false,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2015',
        }),
        new MiniCssExtractPlugin({
          filename: 'tailwind.css',
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
