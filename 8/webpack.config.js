const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './old/src/script.js',
  output: {
    path: path.resolve(__dirname, 'final'), // выходной путь
    filename: 'bundle.js', // выходной файл
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // обработка css
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './old/src/index.html', // путь старый проект
      filename: 'index.html', // файл
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'final'),
    },
    compress: true,
    port: 3001,
  },
};
