<template>
    <m-sidebar id="sidebar" :home="getHome()" :features="getPages()" :userFeatures="getUserFeatures()"
        :user="{firstName: user?.ldap, title: user?.name}" :open="open"
         @update:modelValue="change" @open-status="open=$event"/>    
</template>
<script lang="ts" setup>
import {ref, type Ref, inject, nextTick} from 'vue'
import { useRoute, useRouter } from 'vue-router'

// components
import { MSidebar } from '@mozaic-ds/vue-3'
import {SidebarItem} from '@/domain/mozaic'
// models
import {User} from '@/domain/user'
// services
import { useI18n } from 'vue3-i18n'
import { logout } from '@/services/auth'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const user: Ref<User>| undefined = inject<Ref<User>>('user')
const open: Ref = ref<boolean>(false)

// Get home.
const getHome = ():SidebarItem => new SidebarItem('home', t('sidebar.home'), 'DisplayHome24')

// Get navigation options.
const getPages = (): Array<SidebarItem> => [ new SidebarItem('about', t('sidebar.about'), 'View36024') ]

// Get user options.
const getUserFeatures = (): Array<SidebarItem> =>  [ new SidebarItem('logout', t('sidebar.logout')) ]

/**
 * Redirect to router page.
 * @param name 
 */
const goToPage = async(name: string): Promise<void> => {
    if(route.name!=name)
        router.push({name: name})
    await nextTick()
    open.value = false
}

/**
 * Handles Sidebar selection.
 * @param event 
 */
const change = async (event: any): Promise<void> => {
    const selection: string = event.lv1?.code ?? event.lv0?.code ?? ''
    switch(selection){
        case 'logout': logout(); break;
        default: goToPage(selection); break;
    }    
}

</script>
