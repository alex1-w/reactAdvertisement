// import { Cookies } from 'js-cookie';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import cookies from 'js-cookie'

export const http = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
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

updateHeaders()

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders;
}
