import { createApp } from 'vue'
import App from './App.vue'
import route from './router/index.js'
import store from './store/index.js'
import InlineSvg from 'vue-inline-svg'

const app = createApp(App)
app.component('inline-svg', InlineSvg)
app.use(route)
app.use(store)
app.mount('#app')
