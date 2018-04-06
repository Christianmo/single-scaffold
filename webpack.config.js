module.exports = {
  context: `${__dirname  }/assets/js`,
  entry: ['babel-polyfill', './script.js'],
  output: {
    path: `${__dirname  }/statics/js`,
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: '3000',
    inline: true,
  },
};
