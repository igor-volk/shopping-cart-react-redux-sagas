import { combineReducers } from 'redux'
import {
    PRODUCTS_LOADED,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from '../actions'

function addProductById(state, productToAdd) {
    let inCart = false;
    const newState = state.map((product, index) => {
        if(product.id === productToAdd.id) {
            inCart = true;
            product.quantity++;
        }
        return product;
    })
    if(!inCart) {
        const newProduct = {...productToAdd, quantity: 1};
        newState.push(newProduct);
    }
    return newState;
}

function removeProductById(state, id) {
    return state.map((product, index) => {
        if(product.id === id) {
            product.quantity--;
        }
        return product;
    }).filter((product, index) => {
        if(product.quantity > 0) {
            return true;
        } else {
            return false;
        }
    })
}

function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductById(state, action.product);
        case REMOVE_PRODUCT:
            return removeProductById(state, action.id);
        default:
            return state;
    }
}

function productsReducer(state = [], action) {
    switch (action.type) {
        case PRODUCTS_LOADED:
            return action.products;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export default rootReducer