import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/components/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  // All the used libs needs to be here
  external: [
    'react',
    'styled-components',
    'react-proptypes'
  ],
  plugins: [
    resolve({preferBuiltins: false}),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}