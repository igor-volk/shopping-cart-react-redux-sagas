import { expect } from 'chai';
import reducer  from './';
import {
    PRODUCTS_LOADED,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    RATES_LOADED
} from '../actions'

describe('reducers', () => {
    it('should set products data when loaded successfully', () => {
        const finalState = reducer({}, {
            type: PRODUCTS_LOADED,
            products: [1,2,3]
        });

        expect(finalState.products).to.deep.equal([1, 2, 3]);
    });

    it('should add a new product to cart', () => {
        const productToAdd = {
            id: 1,
            name: 'Mango',
            price: 90
        }
        const finalState = reducer({}, {
            type: ADD_PRODUCT,
            product: productToAdd
        });
        const expectdCartItem = {...productToAdd, quantity: 1}
        expect(finalState.cart).to.deep.equal([expectdCartItem]);
    })

    it('should remove a product from cart', () => {
        const initState = {
            cart: [
                {
                    id: 1,
                    name: 'Mango',
                    price: 90,
                    quantity: 1
                }
            ]
        };
        const finalState = reducer(initState, {
            type: REMOVE_PRODUCT,
            id: 1
        });
        expect(finalState.cart).to.deep.equal([]);
    })
})