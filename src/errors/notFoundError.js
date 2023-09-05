export function notFoundError(resource) {
    return {
        type: "notFound", 
        message: `${resource} não foi encontrado`
    }
}