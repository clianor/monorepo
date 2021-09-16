const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: 'storybook-addon-turbo-build',
      options: {
        optimizationLevel: 2,
      },
    },
  ],
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.(ts|tsx)?$/,
    //   loader: 'esbuild-loader',
    //   options: {
    //     loader: 'tsx',
    //     target: 'es2015',
    //     tsconfigRaw: require('../tsconfig.json'),
    //   },
    // });

    config.module.rules.push({
      test: /\.(sa|sc)ss$/i,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        {
          loader: "sass-loader",
          options: {
            // Prefer `dart-sass`
            implementation: require("sass"),
          },
        }
      ],
    });

    config.plugins.push(new MiniCssExtractPlugin({
      linkType: false,
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }));

    // config.resolve.extensions.push('.ts', '.tsx');
    Object.assign(config.resolve.alias, {
      '@design-system/ui': path.resolve(__dirname, '../packages/ui/src'),
      '@design-system/utils': path.resolve(__dirname, '../packages/utils/src'),
    });

    return config;
  },
};
