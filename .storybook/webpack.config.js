const path = require("path");
const webpack = require('webpack');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  entry: [
    require.resolve('react-error-overlay'),
  ],
  module: {
    rules: [
      // {
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      //   test: /\.(js|jsx)$/,
      //   options: {
      //     presets: ["@babel/react"],
      //     plugins: [
      //       ['import', {
      //         libraryName: "antd",
      //         libraryDirectory: 'es',
      //         style: true
      //       }]
      //     ]
      //   },
      // },
      {
        test: /\.less$/,
        loaders: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
                modifyVars: {"@primary-color": "#1DA57A"},
                javascriptEnabled: true
            }
          }
        ],
        include: [
          path.resolve(__dirname, "../"),
          /[\\/]node_modules[\\/].*antd/
        ]
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                parser: 'babylon',
                printWidth: 80,
                tabWidth: 2,
                bracketSpacing: true,
                trailingComma: 'es5',
                singleQuote: true,
              },
            },
          },
        ],
        enforce: 'pre',
      }
    ]
  },
  target: 'web',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: [
    // Define free variables
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
    }),
  ],
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
};
