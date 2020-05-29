import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export const getRollupConfig = (moduleId, input, pkg = {}) => [
	{
		input,
		output: {
			dir: `../dist/${moduleId}`,
			format: 'esm',
			entryFileNames: '[name].client.js',
		},
		plugins: [
      svelte({ hydratable: true }),
			resolve(),
			commonjs(),
			terser({ module: true }),
		],
	},
	{
    input,
		output: {
      dir: `../dist/${moduleId}`,
			format: 'cjs',
      entryFileNames: '[name].server.js',
		},
		plugins: [
			svelte({ generate: 'ssr' }),
			resolve(),
			commonjs(),
			terser({ module: true }),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),
	}
]
