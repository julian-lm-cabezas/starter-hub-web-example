import { VueWrapper, mount } from '@vue/test-utils'
import { useRoute } from 'vue-router'
import Navbar from '@/components/navigation/Navbar.vue'
import { MHeading } from '@mozaic-ds/vue-3'
import { vi, describe, it, expect } from 'vitest'

vi.mock('vue-router', () => ({
    useRoute: vi.fn(()=> ({name: 'name'})),
    useRouter: vi.fn(()=> ({push: vi.fn()})),
}))


describe('Navbar.vue', () => {
  it('mounts correctly', () => {
    const wrapper: VueWrapper = mount(Navbar)
    expect(wrapper).toBeDefined()
    expect(wrapper.findComponent(MHeading).exists()).toBeTruthy()
  })

  it('getPageName returns correct route name', () => {
    const wrapper: VueWrapper<Navbar> = mount(Navbar)
    expect(wrapper.vm.getPageName()).toEqual('name')
  })
})
