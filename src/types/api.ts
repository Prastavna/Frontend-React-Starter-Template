/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios'

type Get = {
    url: string
    params?: Record<string, any>
    config?: AxiosRequestConfig
}

type Post = Omit<Get, 'params'> & { data?: any }
type Put = Post
type Delete = Get

export type { Get, Post, Put, Delete }
