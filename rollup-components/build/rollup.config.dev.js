import basicConfig, {
    name,
    file
} from "./rollup.config";
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    ...basicConfig,    
    output: {
        name,
        file: file("esm"),
        format: "es",
        sourcemap: true
    },
    plugins: [
        ...basicConfig.plugins,
        serve(),
        livereload()
    ]
};