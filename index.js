module.exports = {
  plugins: [].concat(
    require('babel-preset-es2015').plugins,
    require('babel-preset-react').plugins,
    require('babel-preset-stage-0').plugins
  )
}
