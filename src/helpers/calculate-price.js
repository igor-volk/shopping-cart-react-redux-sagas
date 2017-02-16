export default function (cart) {
    return toPounds(cart.reduce((a, prod) => {
        if(prod.name === 'Papayas') {
            return a + applyDiscount(prod.price, prod.quantity);
        } else {
            return a + (prod.price * prod.quantity);
        }
    }, 0));
}

function applyDiscount(price, quantity) {
    const timesDiscount = Math.floor(quantity / 3);
    return (price * quantity) - (price * timesDiscount);
}

function toPounds (price) {
    return (price < 100) ? `${price}p` : `£${(price / 100).toFixed(2)}`;
}