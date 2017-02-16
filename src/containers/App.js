import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadProducts, addProduct, removeProduct } from '../actions'
import ProductListItem from './product-list-item'
import CartItem from './cart-item'
import calculatePrice from '../helpers/calculate-price'

class App extends Component {
    constructor(props) {
        super(props);
        this.renderProduct = this.renderProduct.bind(this);
        this.renderCartItem = this.renderCartItem.bind(this);
        this.renderToPay = this.renderToPay.bind(this);
    }

    componentWillMount () {
        this.props.loadProducts();
    }

    renderProduct (product, index) {
        return (
            <ProductListItem key={index} name={product.name} price={product.price} onAdd={() => this.props.addProduct(product)} />
        )
    }

    renderCartItem (item, index) {
        return (
            <CartItem key={index} name={item.name} price={item.price} quantity={item.quantity} onRemove={() => this.props.removeProduct(item.id)} />
        )
    }

    renderToPay() {
        return (
            <div>
                <hr></hr>
                <h1>To pay: {this.props.total}</h1>
            </div>
        )
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <div style={{width: '100%'}}>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignitems: 'center', justifyContent: 'space-between'}}>
                        <h1>Products:</h1>
                    </div>
                    <div>
                        {this.props.products.map(this.renderProduct)}
                    </div>
                </div>
                <div style={{width: '100%'}}>
                    <h1>Cart:</h1>
                    <div>
                        {this.props.cart.map(this.renderCartItem)}
                    </div>
                    {this.props.cart.length > 0 && this.renderToPay()}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    products: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired,
    total: PropTypes.string.isRequired
}

function mapStateToProps(state) {
    const toReturn = {
        products: state.products,
        cart: state.cart,
        total: calculatePrice(state.cart)
    }
    return toReturn;
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => dispatch(loadProducts()),
        addProduct: (id) => dispatch(addProduct(id)),
        removeProduct: (id) => dispatch(removeProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
export { App as TestApp}