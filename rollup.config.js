import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import cleanup from 'rollup-plugin-cleanup';
import clear from 'rollup-plugin-clear';
import pkg from './package.json';
import visualizer from 'rollup-plugin-visualizer';
import sizes from 'rollup-plugin-sizes';
import replace from 'rollup-plugin-replace';

const externalReg = new RegExp(
  '^(' + Object.keys(pkg.dependencies).join('|') + ')(/|$)'
);

export default {
  input: 'src/index.js',
  output: {
    dir: 'lib/',
    format: 'es'
  },
  plugins: [
    clear({
      targets: ['lib']
    }),
    cleanup(),
    alias({
      resolve: ['.vue', '/index.js', '/index.vue'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      extensions: ['.js', '.vue']
    }),
    commonjs({
      include: /node_modules/
    }),
    babel({
      runtimeHelpers: true
    }),
    vue({
      css: false, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
      template: {
        compilerOptions: {
          preserveWhitespace: false // 丢弃模版空格
        }
      }
    }),
    json(),
    postcss({
      minimize: true
    }),
    sizes(),
    visualizer({
      filename: './stat/statistics.html'
    })
  ],
  external: (id) => externalReg.test(id)
};
