export function notFound(resource = "Item") {
    return {
        type: "notFound", 
        message: `${resource} não foi encontrado`
    }
}

export function conflict(resource) {
    return {
        type: "conflict", 
        message: `${resource ? resource : "Item"} já existe!`
    }
}

export const errors = {notFound, conflict}