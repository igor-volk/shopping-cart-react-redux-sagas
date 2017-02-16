/* eslint-disable no-constant-condition */

import { takeEvery, put, call } from 'redux-saga/effects'
import { 
    LOAD_PRODUCTS,
    productsLoaded,
} from '../actions'
import productsService from '../services/products-service'

export function * startup() {
    const products = yield call(productsService)
    yield put(productsLoaded(products))
}

export default function * root() {
    yield [
        takeEvery(LOAD_PRODUCTS, startup)
    ]
}
