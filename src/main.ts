import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@mozaic-ds/vue-3/dist/mozaic-vue.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
