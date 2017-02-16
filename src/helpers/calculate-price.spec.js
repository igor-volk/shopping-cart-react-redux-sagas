import { expect } from 'chai';
import calculatePrice from './calculate-price'

describe('Calculate Price', () => {
    it('should calculate price', () => {
        const cart = [
            {
                id: 1,
                name: 'Plum',
                price: 40,
                quantity: 3
            }
        ];
        const price = calculatePrice(cart);
        console.log(price)
        expect(price).to.equal('£1.20')
    })

    it('should calculate price and apply discount if product is Papaya', () => {
        const cart = [
            {
                id: 1,
                name: 'Papayas',
                price: 40,
                quantity: 3
            }
        ];
        const price = calculatePrice(cart);
        console.log(price)
        expect(price).to.equal('80p')
    })
})
