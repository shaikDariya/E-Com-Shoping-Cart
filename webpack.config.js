'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    // @Overide Default Entry ./src/index.js
    entry: './src/index.ts',
    devServer: {
      hot: true,
      proxy: {
        "/api": {
          "target": "http://localhost:5000",
          "changeOrigin": true,
          "pathRewrite": {
              "^/api/": "/"
          }
        }
      },
    },
    module: {
      rules: [
        // Css loader
        {
          test: /\.css$/i,
          include: [/\.index\.css$/],
          exclude:[/node-modules/],
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.css$/i,
          use: ['style-loader', {loader:'css-loader', options: {
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          }}],
          exclude: [/\.index\.css$/],
        },
        //TS loader
        {
          test: /\.(js|mjs|jsx|ts|tsx)?$/,
          exclude:[/node-modules/],
          use: [
            {loader:'babel-loader', options: {babelrc: true}}  
          ]
        },
      ]
        
      },
      plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        
      ],
      resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      }
}
