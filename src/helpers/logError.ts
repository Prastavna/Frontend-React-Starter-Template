const logError = (error: Error) => {
    const isDebug = import.meta.env.DEV || window.location.search.includes('debug=true')
    if (isDebug) {
        console.error(error)
    } else {
        console.error('Something went wrong. Please try again later.')
    }
}

export default logError
