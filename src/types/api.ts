/* eslint-disable @typescript-eslint/no-explicit-any */
type Get = {
    url: string
    params?: any
    config?: any
}

type Post = Omit<Get, 'params'> & { data?: any }
type Put = Post
type Delete = Get

export type { Get, Post, Put, Delete }
