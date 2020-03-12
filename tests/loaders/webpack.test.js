import fs from 'fs'
import path from 'path'
import test from 'ava'
import webpack from 'webpack'

const config = {
        entry: './tests/stubs/baleada.txt',
        output: {
          path: path.resolve('tests/loader-output'),
          filename: 'webpack.js'
        },
        module: {
          rules: [            
            {
              test: /\.txt$/,
              use: [
                { loader: 'raw-loader' },
                {
                  loader: path.resolve('src/webpack.js'),
                  options: {
                    transform: (source, { resourcePath }) => `${resourcePath}${source.toString()}`
                  }
                },
              ]
            }
          ]
        }
      },
      withFilePathRegexp = new RegExp('tests/stubs/baleada.txtBaleada: a toolkit for building web apps')

test('uses the transform callback', t => {
  webpack(
    config,
    (err, stats) => { // Stats Object
      if (err || stats.hasErrors()) {
        console.log(stats.compilation.errors)
      }
    })

  const value = fs.readFileSync('./tests/loader-output/webpack.js', 'utf8')

  t.assert(withFilePathRegexp.test(value))
})
