/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios'
import { Get, Post, Put, Delete } from '@/types'

const errorHandler = async (promise: Promise<AxiosResponse>) => {
    try {
        const result = await promise
        return { result, err: null }
    } catch (err) {
        return { result: null, err }
    }
}

const api = {
    init: (baseUrl: string) => {
        axios.defaults.baseURL = baseUrl
    },

    get: ({ url, params, config }: Get) => {
        return errorHandler(axios.get(url, { params, ...config }))
    },

    post: ({ url, data, config }: Post) => {
        return errorHandler(axios.post(url, data, config))
    },

    put: ({ url, data, config }: Put) => {
        return errorHandler(axios.put(url, data, config))
    },

    delete: ({ url, params, config }: Delete) => {
        return errorHandler(axios.delete(url, { params, ...config }))
    }
}

export default api
