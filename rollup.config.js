import TypescriptPlugin from "@rollup/plugin-typescript";
import { cleandir as CleandirPlugin } from "rollup-plugin-cleandir";
import { dts } from 'rollup-plugin-dts';
import { terser as TerserPlugin } from "rollup-plugin-terser";

const PLUGINS = [
	TypescriptPlugin(),
	TerserPlugin({
		compress: { drop_console: false },
		format: { comments: false }
	})
];

export default [
	{
		input: "src/index.ts",
		output: { file: "dist/index.js", format: "es" },
		plugins: [ ...PLUGINS, CleandirPlugin("dist") ]
	},
	{
		input: "src/index.ts",
		output: { file: "dist/index.d.ts", format: "es" },
		plugins: [ dts() ],
	}
];