import { mount,shallowMount, flushPromises, VueWrapper } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { vi, describe, it, expect } from 'vitest'
import Router from "@/router"
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

import {User} from '@/domain/User'
import { beforeEach } from 'node:test'

vi.mock("@/services/auth", ()=>{
    return {
        checkAuth: ()=> new User({ldap: 'ldap', name: name})
    }
})
const router = createRouter({
    history: createWebHistory(),
    routes: Router.options.routes
})


describe('Router tests', () =>{

    it('/ redirects to /main/home', async () => {
      router.push('/')  
      await router.isReady()
      const wrapper = shallowMount(App, {
        global: { plugins: [router] }
      })
      await flushPromises()
      expect(router.currentRoute.value.path).toContain('/main/home')
    })

    it('/home loads Home views', async () => {
        router.push('/main/home')  
        await router.isReady()
        const wrapper = mount(App, { global: { 
            plugins: [router],
            stubs: { 
                Sidebar: { template: '<div id="sidebar"></div>'},
                Navbar: { template: '<div id="navbar"></div>'}
            } 
        } })
        await flushPromises()
        expect(wrapper.findComponent(Home).exists()).toBeTruthy()
    })

    it('/about loads About view', async () => {
        router.push('/main/about')  
        await router.isReady()
        const wrapper = mount(App, { global: { 
            plugins: [router],
            stubs: { 
                Sidebar: { template: '<div id="sidebar"></div>'},
                Navbar: { template: '<div id="navbar"></div>'}
            } 
        } })
        await flushPromises()
        expect(wrapper.findComponent(About).exists()).toBeTruthy()
    })

    it('/invented-route redirects to /home', async () => {
        router.push('/invented-route')  
        await router.isReady()
        const wrapper = shallowMount(App, {
          global: { plugins: [router] }
        })
        await flushPromises()
        expect(router.currentRoute.value.path).toContain('/home')
      })

})
