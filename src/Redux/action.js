export const SHOW_DATA = "SHOW_DATA"
export const FILTER_ANIML = "FILTER_ANIML"

export const showData = (payload) => ({
    type: SHOW_DATA,
    payload
})

export const filterAnimal = (payload) => ({
    type: FILTER_ANIML,
    payload
})
