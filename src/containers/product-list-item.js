import React, { Component, PropTypes } from 'react'

export default class ProductListItem extends Component {
    render() {
        const { name, price, currency, onAdd } = this.props
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '260px', margin: '5px'}}>
                <div>{name} - {price}p each</div>
                <button onClick={onAdd}>Add</button>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    name: PropTypes.string,
    action: React.PropTypes.node
}
