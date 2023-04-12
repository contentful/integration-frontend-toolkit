/** @type { import('@storybook/react-webpack5').StorybookConfig } */
// const path = require('path');
// const { compilerOptions } = require('../tsconfig.json');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
    "include": ["src", "test"],
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  // resolve: {
  //   modules: [
  //     path.resolve(__dirname, 'node_modules'),
  //     path.resolve(__dirname, compilerOptions.baseUrl),
  //   ],
  // },
  
};
export default config;

// module.exports = {
//   stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//   webpackFinal: async (config) => {
//     config.resolve.plugins.push(new TsconfigPathsPlugin({}));
//     return config;
//   },
// };
