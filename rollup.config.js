import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts', // 入口文件为 TypeScript 文件
  output: [
    {
      file: 'dist/uni-route-plugins.cjs.js', // CommonJS 格式
      format: 'cjs',
      sourcemap: false,
      globals: {
        uni: 'uni',   // 将 uni 映射为全局变量 uni
      },
    },
    {
      file: 'dist/uni-route-plugins.esm.js', // ES模块格式
      format: 'esm',
      sourcemap: false,
      globals: {
        uni: 'uni',   // 将 uni 映射为全局变量 uni
      },
    },
  ],
  treeshake: false,
  plugins: [
    peerDepsExternal(), 
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          importHelpers: true, // 确保导入 tslib
          declaration: true, 
          declarationMap: false,
        }
      }
    }), 
   
  ],
  external: ['uni'], // 将 uni 和 vue 作为外部依赖
};
