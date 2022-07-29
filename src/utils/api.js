const productos = [
    { id: 1, title: 'Xiaomi', description: 'Redmi note 11 128GB Aluminio', price: 'S/ 909', pictureUrl: '/images/1.png' },
    { id: 2, title: 'Samsung', description: 'Samsung Galaxy A32 128GB Negro N + Audífonos - IT Fit', price: 'S/ 1089', pictureUrl: '/images/2.png' },
    { id: 3, title: 'ZTE', description: 'Blade A51 32GB Gris', price: 'S/ 409', pictureUrl: '/images/3.png' },
    { id: 4, title: 'Apple', description: 'iPhone 13 Pro 512GB Silver', price: 'S/ 6789', pictureUrl: '/images/4.png' },
    { id: 5, title: 'Apple', description: 'iPhone 13 128GB Rosa', price: 'S/ 4139', pictureUrl: '/images/5.png' },
    { id: 6, title: 'Samsung', description: 'Galaxy Z Fold 3 Negro 256GB 5G + Galaxy Tab Tab A7 Lite', price: 'S/ 6549', pictureUrl: '/images/6.png' }
]

export const mock = () => {
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(productos), 2000)
    })
    return task
}
export const getItem = () => {
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(productos[0]), 2000)
    })
    return task
}