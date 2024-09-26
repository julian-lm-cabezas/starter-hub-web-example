
import Base from '@/views/Base.vue'
import { VueWrapper, flushPromises, mount, shallowMount } from '@vue/test-utils'
import { vi, describe, it, expect } from 'vitest'
import { User} from '@/domain/user'

vi.mock('vue-router', () => ({
    useRoute: vi.fn(()=> ({name: 'name'})),
    useRouter: vi.fn(()=> ({push: vi.fn()})),
}))

vi.mock('vue3-i18n', () => ({
    useI18n: vi.fn(()=> ({t: vi.fn(val => val)})),
}))

vi.mock('@/services/auth', ()=>({
    checkAuth: vi.fn()
}))

import * as auth from '@/services/auth'
import Navbar from '@/components/navigation/Navbar.vue'
import SideBar from '@/components/navigation/SideBar.vue'
import { MOverlayLoader } from '@mozaic-ds/vue-3'


// CONTENT_GOES_HERE

describe('Base.vue', () => {
  it('mounts correctly', () => {
    const wrapper: VueWrapper<Base> = mount(Base)
    expect(wrapper).toBeDefined()
  })

  it('onMount is loading', async () => {
    const wrapper: VueWrapper<Base> = mount(Base)
    expect(wrapper.vm.loading).toBeTruthy()
    expect(wrapper.findComponent(MOverlayLoader).exists()).toBeTruthy()
    expect(wrapper.findComponent(Navbar).exists()).toBeFalsy()
    
  })

  it('initializes user and loading correctly', async () => {
    vi.spyOn(auth, 'checkAuth').mockResolvedValueOnce(new User({ldap: 'example', name: 'Mr example'}))
    const wrapper: VueWrapper<Base> = shallowMount(Base)
    await flushPromises()
    expect(wrapper.vm.user).toEqual(new User({ldap: 'example', name: 'Mr example'}))
    expect(wrapper.vm.loading).toBeFalsy()
    expect(wrapper.findComponent(MOverlayLoader).exists()).toBeFalsy()
    expect(wrapper.findComponent(Navbar).exists()).toBeTruthy()
  })

  it('initializes example user and loading correctly', async () => {
    vi.spyOn(auth, 'checkAuth').mockRejectedValueOnce(new Error('error'))
    const wrapper: VueWrapper<Base> = shallowMount(Base)
    await flushPromises()
    expect(wrapper.vm.user).toEqual(new User({ldap: 'example', name: 'Mr example'}))
    expect(wrapper.vm.loading).toBeFalsy()
    expect(wrapper.findComponent(MOverlayLoader).exists()).toBeFalsy()
    expect(wrapper.findComponent(Navbar).exists()).toBeTruthy()
  })
})
