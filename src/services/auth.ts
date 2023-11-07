import { api } from './http'
import {User, IUser} from '@/domain/user'

/**
 * Checks user is authenticated
 * @returns User
 */
export const checkAuth = async () : Promise<User> => {
    const {data} = await api.get<IUser>('/me')
    return new User(data)
}

/**
 * Logout
 * @returns 
 */
export const logout = async () : Promise<void> => api.get('/logout')