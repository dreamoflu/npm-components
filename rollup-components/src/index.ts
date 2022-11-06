import { App } from 'vue'

import HaloText from './components/Text'

const components = [
  HaloText
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}
export {
  HaloText,
  install
}
export default {
  install
}