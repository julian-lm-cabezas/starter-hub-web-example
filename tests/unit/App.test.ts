import { mount,shallowMount, flushPromises } from '@vue/test-utils'
import { RouterView, createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'
import App from '@/App.vue'
import Router from "@/router"

describe('App vue', ()=>{
    it('starts with loader', async ()=>{

        const router = createRouter({
            history: createWebHistory(),
            routes: Router.options.routes
        })
        const wrapper = shallowMount(App,{ global: { plugins: [router] }})
        expect(wrapper.findComponent(RouterView).exists()).toBeTruthy()
    })
})