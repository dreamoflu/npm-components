import vuePlugin from 'rollup-plugin-vue' // 处理vue 文件
import css from 'rollup-plugin-css-only' // css 单独提取
import typescript from 'rollup-plugin-typescript2' // 处理typescript 执行此方法 会自动获取tsconfig 文件
import {
    nodeResolve
} from '@rollup/plugin-node-resolve' // 处理rollup 不能处理引入绝对路劲文件的问题  例如 import moment from 'moment'
import {
    terser
} from "rollup-plugin-terser"; // 压缩代码
import postcss from 'rollup-plugin-postcss' // 处理css  less scss 
import alias from '@rollup/plugin-alias';
import pkg, {
    name
} from '../package.json'
const deps = Object.keys(pkg.dependencies)
import {
    resolve
} from 'path';
const file = type => `dist/${name}.${type}.js`


const overrides = {
    compilerOptions: {
        declaration: true
    }, // 修改tsconfig.json 配置  生成typescript 声明文件
    exclude: [
        "node_modules",
        "src/App.vue"
    ]
}
export {
    name,
    file
}

function pathResolve(dir) {
    console.log('--------------------------------------')
    console.log(__dirname)
    return resolve(__dirname, '../', dir);
}
export default {
    input: 'src/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript({
            tsconfigOverride: overrides
        }),
        vuePlugin(),
        css({
            output: 'bundle.css'
        }),
        terser(),
        postcss(),
        // less(),
        alias({
            entries: [{
                find: /\/@\//,
                replacement: resolve(__dirname, '../src'),
            }]
        })
    ],
    external: (id) => {
        return /^vue/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
    }
}