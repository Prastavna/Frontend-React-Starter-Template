/* eslint-disable @typescript-eslint/no-explicit-any */

const storage = {
    local: {
        get: (key: string) => {
            return JSON.parse(localStorage.getItem(key) || 'null')
        },
        set: (key: string, value: any) => {
            localStorage.setItem(key, JSON.stringify(value))
        },
        remove: (key: string) => {
            localStorage.removeItem(key)
        },
        clear: () => {
            localStorage.clear()
        }
    },
    session: {
        get: (key: string) => {
            return JSON.parse(sessionStorage.getItem(key) || 'null')
        },
        set: (key: string, value: any) => {
            sessionStorage.setItem(key, JSON.stringify(value))
        },
        remove: (key: string) => {
            sessionStorage.removeItem(key)
        },
        clear: () => {
            sessionStorage.clear()
        }
    }
}

export default storage
