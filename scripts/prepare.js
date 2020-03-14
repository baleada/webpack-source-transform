const babelify = require('./babelify')

function prepare () {
  babelify('webpack')
  babelify('rollup')
  babelify('index')
}

prepare()
