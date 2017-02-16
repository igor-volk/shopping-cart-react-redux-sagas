import React, { Component, PropTypes } from 'react'

export default class CartItem extends Component {
    render() {
        const { name, price, quantity, onRemove } = this.props
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '260px', margin: '5px'}}>
                <div>{name} x {quantity} @ {price}p each</div>
                <button onClick={onRemove}>Remove</button>
            </div>
        )
    }
}

CartItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    onRemove: React.PropTypes.func
}
