
import Home from '@/views/Home.vue'
import { VueWrapper, mount } from '@vue/test-utils'
import { vi, describe, it, expect } from 'vitest'


describe('Home view', ()=>{

    it('mounts correctly', () => {
        const wrapper: VueWrapper<Home> = mount(Home)
        expect(wrapper).toBeDefined()
        expect(wrapper.find('h2').text()).toEqual('Welcome home')
    })
})