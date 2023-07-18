import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { Plugin } from 'vue'
import { ElLoading } from 'element-plus'

const install: Plugin = app => {
  app.use(ElLoading)
}

export default install
