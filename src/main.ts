import "normalize.css"

import { createApp } from 'vue'
import App from './App.vue'
import Pinia from './stores/install'
import Router from './router'
import ElementPlus from './plugin/element-plus'

const app = createApp(App)
app.use(Pinia)
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
