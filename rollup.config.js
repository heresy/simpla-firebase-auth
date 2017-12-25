const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');

export default [{
  input: 'dist/src/auth.js',
  output: {
    file: 'dist/auth.js',
    format: 'umd',
    name: 'FirebaseAuth'
  },
  plugins: [resolve(), commonjs(), uglify()]
}];
