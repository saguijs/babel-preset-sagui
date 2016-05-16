module.exports = {
  presets: [
    require('babel-preset-react'),
    require('babel-preset-stage-0')
  ],
  /**
   * babel-preset-es2015 plugins
   *
   * We need to import all plugin explicitly to be able to use
   * loose mode for babel-plugin-transform-es2015-classes
   *
   * @see https://babeljs.io/docs/usage/caveats/
   */
  plugins: [
    require('babel-plugin-transform-es2015-template-literals'),
    require('babel-plugin-transform-es2015-literals'),
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-es2015-block-scoped-functions'),
    [require('babel-plugin-transform-es2015-classes'), { loose: true }],
    require('babel-plugin-transform-es2015-object-super'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-duplicate-keys'),
    require('babel-plugin-transform-es2015-computed-properties'),
    require('babel-plugin-transform-es2015-for-of'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-check-es2015-constants'),
    require('babel-plugin-transform-es2015-spread'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-block-scoping'),
    require('babel-plugin-transform-es2015-typeof-symbol'),
    require('babel-plugin-transform-es2015-modules-commonjs'),
    require('babel-plugin-transform-proto-to-assign'),
    [require('babel-plugin-transform-regenerator'), { async: false, asyncGenerators: false }],
  ]
}
