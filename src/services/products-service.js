export default function () {
    return new Promise((resolve) => {
        const products = [
            {
                id: 0,
                name: 'Apples',
                price: 25
            },
            {
                id: 1,
                name: 'Oranges',
                price: 30
            },
            {
                id: 2,
                name: 'Garlic',
                price: 15
            },
            {
                id: 3,
                name: 'Papayas',
                price: 50
            }
        ]
        resolve(products);
    })
}
