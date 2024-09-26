import { config } from '@vue/test-utils';
import { createI18n} from "vue3-i18n"
import ES from '@/assets/lang/es.json'

const i18n = createI18n({
    locale:'es',
    messages: { es : ES }
})

config.global.plugins = {...config.global.plugins, ...i18n }
config.global.mocks = { $t: (msg: string) => msg  };