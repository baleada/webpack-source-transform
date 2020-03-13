import fs from 'fs'
import path from 'path'
import test from 'ava'
import webpack from 'webpack'

const config = {
        plugins: [
          {
            apply: compiler => {
              // compiler.hooks.environment.tap('log', () => console.log('environment'))
              // compiler.hooks.entryOption.tap('log', (context, entry) => console.log({ context, entry }))
              compiler.hooks.make.tap('log', compilation => console.log(compilation))
            }
          }
        ],
        entry: './tests/stubs/baleada.js',
        output: {
          path: path.resolve('tests/loader-output'),
          filename: 'webpack.js'
        },
        module: {
          rules: [            
            {
              test: /\.js$/,
              use: [
                {
                  loader: path.resolve('src/webpack.js'),
                  options: {
                    transform: ({ source, resourcePath }) => {
                      console.log('here')
                      return source.toString().replace(/Baleada/, `${resourcePath} - Baleada`)
                    }
                  }
                },
              ]
            }
          ]
        }
      },
      withFilePathRegexp = new RegExp('tests/stubs/baleada.js - Baleada: a toolkit for building web apps')

test('uses the transform callback', t => {
  webpack(
    config,
    (err, stats) => { // Stats Object
      if (err || stats.hasErrors()) {
        console.log({
          err,
          has: stats.hasErrors(),
          errors: stats.compilation.errors
        })
      }
    }
  )

  const value = fs.readFileSync('./tests/loader-output/webpack.js', 'utf8')

  t.assert(withFilePathRegexp.test(value))
})
