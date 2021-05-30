const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
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
    config.module.rules.push({
      test: /\.(ts|tsx)?$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        target: 'es2015',
        tsconfigRaw: require('../tsconfig.json'),
      },
    });

    config.resolve.extensions.push('.ts', '.tsx');

    Object.assign(config.resolve.alias, {
      '@design-system/ui': path.resolve(__dirname, '../packages/ui/src'),
      '@design-system/utils': path.resolve(__dirname, '../packages/utils/src'),
    });

    return config;
  },
};
