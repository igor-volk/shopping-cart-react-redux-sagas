import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { TestApp } from './App';

describe('<App />', () => {
    it('should render "To Pay" if cart is NOT empty and calculate total price', () => {
        const props = {
            loadProducts: () => {},
            products: [
                {
                    id: 2,
                    name: 'Milk',
                    price: 1.25
                }
            ],
            cart: [
                {
                    id: 2,
                    name: 'Milk',
                    price: 1.25,
                    quantity: 2
                }
            ],
            total: '£2.50'
        };
        const wrapper = shallow(<TestApp {...props} />);
        expect(wrapper.find('h1').length).to.equal(3);
        expect(wrapper.find('h1').at(0).text()).to.equal('Products:');
        expect(wrapper.find('h1').at(1).text()).to.equal('Cart:');
        expect(wrapper.find('h1').at(2).text()).to.equal('To pay: £2.50');
    });

    it('should NOT render "To Pay" if cart is empty', () => {
        const props = {
            loadProducts: () => {},
            products: [
                {
                    id: 2,
                    name: 'Milk',
                    price: 1.25
                }
            ],
            cart: []
        };
        const wrapper = shallow(<TestApp {...props} />);
        expect(wrapper.find('h1').length).to.equal(2);
    });
});