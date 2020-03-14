const { exec, empty } = require('@baleada/prepare')

module.exports = function(buildTool) {
  // fs.unlinkSync('index.js')
  // fs.unlinkSync('webpack.js')
  // fs.unlinkSync('rollup.js')
  exec(`npx babel src/${buildTool}.js -o ${buildTool}.js`)
}
