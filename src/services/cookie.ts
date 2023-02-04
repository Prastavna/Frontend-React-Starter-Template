const cookie = {
    set: (name: string, value: string, days = 1) => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString()
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'
    },
    get: (name: string) => {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '')
    },
    remove: (name: string) => {
        cookie.set(name, '', -1)
    },
    clear: () => {
        document.cookie.split('; ').forEach((c) => {
            cookie.remove(c.split('=')[0])
        })
    }
}

export default cookie
