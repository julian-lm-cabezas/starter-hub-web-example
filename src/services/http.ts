import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'

/**
 * Create Axios instance of backend API
 */
export const api : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    withCredentials: true,
    responseType: 'json',
    timeout: 60000
})

/**
 * Interceptor for pingID redirection
 */
api.interceptors.response.use((resp: AxiosResponse<any,any>) =>resp, (error: AxiosError<any, any>)=>{
    if(error.response?.status==401 && error.response?.data?.url)
        window.location.href=error.response.data.url
    else return Promise.reject(error)
})