
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const PRODUCTS_LOADED = 'PRODUCTS_LOADED'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export function loadProducts() {
    return {
        type: LOAD_PRODUCTS
    }
}

export function productsLoaded(products) {
    return {
        type: PRODUCTS_LOADED,
        products
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function removeProduct(id) {
    return {
        type: REMOVE_PRODUCT,
        id
    }
}