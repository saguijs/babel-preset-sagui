var core = require('babel-core')
var path = require('path')

core.transformFileSync(path.join(__dirname, 'fixture.js'), {
  presets: [
    require('..')
  ]
})
