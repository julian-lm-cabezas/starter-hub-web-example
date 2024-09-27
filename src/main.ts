import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// LM theme
import '@mozaic-ds/vue-3/dist/mozaic-vue.css'
// Adeo theme
//import '@mozaic-ds/vue-3/dist/mozaic-vue.adeo.css'

import { createI18n } from 'vue3-i18n'

import * as ES from '@/assets/lang/es.json'
import * as EN from '@/assets/lang/en.json'

const locale = navigator.language?.substring(0,2)
const i18n = createI18n({
    locale: ['es','en'].includes(locale)? locale: 'en',
    messages: {  es : ES, en: EN }
})

const app = createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
