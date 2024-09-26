
import About from '@/views/About.vue'
import { VueWrapper, mount } from '@vue/test-utils'
import { vi, describe, it, expect } from 'vitest'


describe('About view', ()=>{

    it('mounts correctly', () => {
        const wrapper: VueWrapper<Home> = mount(About)
        expect(wrapper).toBeDefined()
        expect(wrapper.find('h2').text()).toEqual('This is an about page')
    })
})