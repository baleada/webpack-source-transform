const path = require('path')

module.exports = {
  mode: 'none',
  entry: './tests/stubs/baleada.js',
  output: {
    path: path.resolve('tests/loader-output'),
    filename: 'webpack.js'
  },
  module: {
    rules: [            
      {
        test: /\.js$/,
        use: {
          loader: path.resolve('lib/webpack.js'),
          options: {
            transform: ({ source, resourcePath }) => source.replace(/Baleada/, `${resourcePath} - Baleada`)
          },
        },
      },
    ],
  },
}