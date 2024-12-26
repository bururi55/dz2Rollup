/*import { defineConfig } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default defineConfig({
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        name: 'MyBundle'
    },
    plugins: [
        postcss({
            extract: true,
            minimize: true,
            use: ['sass']
        }),
        image(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
        }),
        serve({
            open: true,
            contentBase: '',
            host: 'localhost',
            port: 3000,
        }),
        livereload()
    ]
});

*/
// rollup.config.mjs
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        name: 'MyBundle'
    },
    plugins: [
        postcss({
            extract: true,
            minimize: true,
            use: ['sass']
        }),
        image(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
        }),
        serve({
            open: true,
            contentBase: '',
            host: 'localhost',
            port: 3000,
        }),
        livereload()
    ]
};