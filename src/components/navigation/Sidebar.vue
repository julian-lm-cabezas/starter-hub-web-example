<template>
    <m-sidebar id="sidebar" ref="sidebar" :home="getHome()" :features="getPages()" 
        :user="{firstName: user?.ldap, title: user?.name}" :open="open"
        :userFeatures="getUserFeatures()" @update:modelValue="change" @open-status="open=$event"/>    
</template>
<script lang="ts" setup>
import {ref, type Ref, inject, nextTick} from 'vue'
import { MSidebar } from '@mozaic-ds/vue-3'
import { useRoute, useRouter } from 'vue-router'

import {SidebarItem} from '@/domain/mozaic'
import {User} from '@/domain/user'
import { useI18n } from 'vue3-i18n'
import { getVersion } from '@/services/utils'
import { logout } from '@/services/auth'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const user: Ref<User>| undefined = inject<Ref<User>>('user')
const loading: Ref = ref<boolean>(false)

const open: Ref = ref<boolean>(false)

const lang: Ref = ref<string>('es')
const langOpen: Ref = ref<boolean>(false)
const langs: Ref = ref([
  { val: 'es', img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Spain_flag_icon.svg'},
  { val: 'en', img: 'https://freesvg.org/img/united_kingdom.png'}/*,
  { val: 'fr', img: 'https://image.pngaaa.com/324/1388324-middle.png'}*/
])

const sidebar: Ref = ref()

const getHome = ():SidebarItem => new SidebarItem('home', t('sidebar.home'), 'DisplayHome24')
const getPages = (): Array<SidebarItem> => [
    new SidebarItem('about', t('sidebar.about'), 'View36024')
]


const getUserFeatures = (): Array<SidebarItem> =>  [
    new SidebarItem('logout', t('sidebar.logout'))
]

const goToPage = async(name: string): Promise<void> => {
    if(route.name!=name)
        router.push({name: name})
    await nextTick()
    open.value = false
}

const change = async (event: any): Promise<void> => {
    const selection: string = event.lv1?.code ?? event.lv0?.code ?? ''
    switch(selection){
        case 'logout': logout(); break;
        default: goToPage(selection); break;
    }    
}

</script>
