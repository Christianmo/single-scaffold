module.exports = {
  context: `${__dirname}/src/js`,
  entry: ['babel-polyfill', './script.js'],
  output: {
    path: `${__dirname}/public/statics/js`,
    filename: 'script.js',
  },
  devtool: 'source-map',
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
};
