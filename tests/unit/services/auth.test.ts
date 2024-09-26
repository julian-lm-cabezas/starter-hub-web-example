
import { checkAuth, logout } from '@/services/auth'
import {api} from '@/services/http'
import { User, IUser } from '@/domain/user'
import { vi, describe, it, expect } from 'vitest'

vi.mock('./http', () => ({
    api: vi.fn()
}))

describe('auth service', () => {
  it('checkAuth returns the correct user', async () => {
    
    const mockUser: IUser = { ldap: 'example', name: 'Mr example' }
    vi.spyOn(api, 'get').mockResolvedValue({ data: mockUser })

    const user = await checkAuth()

    expect(user).toEqual(new User(mockUser))
    expect(api.get).toHaveBeenCalledWith('/me')
  })
})

describe('logout', () => {
  it('is called correctly', async () => {
    vi.spyOn(api, 'get').mockResolvedValue({})
    await logout()

    expect(api.get).toHaveBeenCalledWith('/logout')
  })
})