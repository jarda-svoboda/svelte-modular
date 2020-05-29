import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'

export const getRollupConfig = (moduleId, input) => [
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
		],
	}
]
