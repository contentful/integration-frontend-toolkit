/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');
// const { compilerOptions } = require('../tsconfig.json');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
    "@storybook/addon-a11y",
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
  
  webpackFinal: async (config, { configType }) => {
    // config.resolve.modules = [
    //   // path.resolve(__dirname, 'node_modules'),
    //   path.resolve(__dirname, "src/")
    // ]
    config.resolve.alias = {
      ...config.resolve.alias,
      "helpers": path.resolve(__dirname, "../src/helpers") // how do broadly???
    };

    return config;
  }
  
};

export default config;
