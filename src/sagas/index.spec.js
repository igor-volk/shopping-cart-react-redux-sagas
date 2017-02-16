/* eslint-disable no-constant-condition */
import { takeEvery, put, call } from 'redux-saga/effects'
import { expect } from 'chai';
import { startup } from './'
import productsService from '../services/products-service';
import {
    productsLoaded,
} from '../actions'

describe('Sagas', () => {
    it('should fetch products and dispatch them', () => {
        const iterator = startup();
        const prods = iterator.next().value;
        expect(prods).to.deep.equal(call(productsService));
        const action = iterator.next().value;
        expect(action).to.deep.equal(put(productsLoaded()));
    });
});
