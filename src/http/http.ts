// import { Cookies } from 'js-cookie';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import cookies from 'js-cookie'

export const http = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api'
})

export const updateHeaders = () => {
    http.interceptors.request.use((config: AdaptAxiosRequestConfig) => {
        const token = cookies.get('userToken')
        if (token) {
            config.headers!['Authorization'] = `Bearer ${token}`
        }
        return config
    })
}

// http.interceptors.request.use((config: AdaptAxiosRequestConfig) => {
//     const token = cookies.get('userToken')
//     // if (token) {
//     //     config.headers!['Authorization'] = `Bearer ${token}`
//     // }
//     config.headers!.Authorization = `Bearer ${token}`
//     return config
// })


updateHeaders()

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders;
}
