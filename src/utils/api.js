const productos = [
    { id: 1, title: 'Xiaomi', description: 'Redmi note 11 128GB Aluminio', price: 'S/ 909', pictureUrl: '/images/1.png' },
    { id: 2, title: 'Samsung', description: 'Samsung Galaxy A32 128GB Negro N + Audífonos - IT Fit', price: 'S/ 1089', pictureUrl: '/images/2.png' },
    { id: 3, title: 'ZTE', description: 'Blade A51 32GB Gris', price: 'S/ 409', pictureUrl: '/images/3.png' },
    { id: 4, title: 'Apple', description: 'iPhone 13 Pro 512GB Silver', price: 'S/ 6789', pictureUrl: '/images/4.png' },
    { id: 5, title: 'Apple', description: 'iPhone 13 128GB Rosa', price: 'S/ 4139', pictureUrl: '/images/5.png' },
    { id: 6, title: 'Samsung', description: 'Galaxy Z Fold 3 Negro 256GB 5G + Galaxy Tab Tab A7 Lite', price: 'S/ 6549', pictureUrl: '/images/6.png' }
]

const plates = [
    { id: 1, category: 1, title: 'Apanado de Lomo', description: 'Lomo fino apanado, acompañado con papas fritas amarillas', price: 'S/ 48.00', pictureUrl: '/images/carnes.png' },
    { id: 2, category: 1, title: 'Chuletas de Cerdo a Nuestro Estilo', description: 'Deliciosas chuletas a la parrilla, bañadas con salsa de durazno y acompañadas con puré de papas de la casa', price: 'S/ 39.00', pictureUrl: '/images/carnes2.png' },
    { id: 3, category: 1, title: 'Estofado de Nonna', description: 'Una gran receta de la abuela a base de carne de res y estofado en vino tinto con champiñones, cebolla charlot y tocino, acompañados con fettuccine a la crema', price: 'S/ 49.00', pictureUrl: '/images/carnes.png' },
    { id: 4, category: 1, title: 'Lomo a lo Pobre al Estilo LongHorn', description: 'Lomo Fino en salsa de vino tinto, acompañado con nuestro inconfundible tacu tacu de pallares verdes con huevo y plátano frito', price: 'S/ 62.00', pictureUrl: '/images/carnes2.png' },
    { id: 5, category: 1, title: 'Pepper Steak', description: 'Nuestra tradicional salsa de pimienta que baña a un lomito fino humeante', price: 'S/ 62.00', pictureUrl: '/images/carnes.png' },
    { id: 6, category: 1, title: 'Salmón a la Parrilla', description: 'Salmón,fresco, preparado en nuestra parrilla, acompañado de una ensalada fresca a la limoneta', price: 'S/ 59.00', pictureUrl: '/images/carnes2.png' },
    { id: 7, category: 1, title: 'Apanado de Pollo', description: 'Pechuga de pollo apanado, acompañado con papas fritas amarillas', price: 'S/ 32.00', pictureUrl: '/images/carnes.png' },
    { id: 8, category: 1, title: 'Costillas LongHorn en salsa BBQ', description: 'Las mejores costillas con la mejor salsa BBQ, una receta insuperable', price: 'S/ 64.00', pictureUrl: '/images/carnes2.png' },
    { id: 9, category: 1, title: 'Filet Mignon', description: 'Inconfundible lomo fino con nuestra tradicional salsa de champiñones con vino tinto cabernet sauvignon', price: 'S/ 62.00', pictureUrl: '/images/carnes.png' },
    { id: 10, category: 1, title: 'Lomo de la Casa', description: 'Lomo Fino con queso gratinado en una humeante salsa de champiñones y papas fritas amarillas', price: 'S/ 62.00', pictureUrl: '/images/carnes2.png' },
    { id: 11, category: 2, title: 'Ensalada Cesar', description: 'Tiernas lechugas romanas, crocantes crutones de pan y parmesano del dìa, acompañado de la tradicional salsa de anchoas, aceite de oliva y mostaza', price: 'S/ 29.00', pictureUrl: '/images/ensaladas.jpg' },
    { id: 12, category: 2, title: 'Ensalada de Pollo  Crocantes LongHorn', description: 'Selección de lechugas mixtas, palta, espárragos, pecanas acarameladas, tomate cherry, tomate italiano, arúgula, pollo empanizado, queso roquefort, aliñada con salsa de miel y mostaza', price: 'S/ 42.00', pictureUrl: '/images/ensaladas.jpg' },
    { id: 13, category: 2, title: 'Ensalada Parrillera Chica', description: 'Las más frescas lechugas, rabanitos,  cebollas y tomates con el aliño de la casa', price: 'S/ 18.00', pictureUrl: '/images/ensaladas.jpg' },
    { id: 14, category: 2, title: 'Ensalada Cesar de Pollo', description: 'Lechugas romanas, crocantes crutones de pan y parmesano del dìa, con salsa de anchoas, aceite de oliva y mostaza con pechuga de pollo a la parrilla', price: 'S/ 36.00', pictureUrl: '/images/ensaladas.jpg' },
    { id: 15, category: 2, title: 'Ensalada de Quinua al Estilo LongHorn', description: 'La mejor selección de quinua, pollo a la parrilla en cortes largos, pimiento, palta, tomate, aceituna negra, verde, queso fresco  y cebolla blanca, choclo y huevo; aliñada con salsa de limoneta', price: 'S/ 35.00', pictureUrl: '/images/ensaladas.jpg' },
    { id: 16, category: 2, title: 'Ensalada Parrillera Grande', description: 'Las más frescas lechugas, rabanitos,  cebollas y tomates con el aliño de la casa', price: 'S/ 26.00', pictureUrl: '/images/ensaladas.jpg' },
    { id: 17, category: 3, title: 'Canelones de Ricota y Espinaca a los 4 Quesos', description: 'Las inconfundibles,rellenos con espinaca, queso ricota y parmesano, bañados con salsa a los 4 quesos', price: 'S/ 36.00', pictureUrl: '/images/pastas.jpg' },
    { id: 18, category: 3, title: 'Fettuccine ', description: 'Pídelo con la salsa de tu elección: huancaína pesto, Alfredo, mediterraneo, putanesca y bolognesa y primavera ', price: 'S/ 37.00', pictureUrl: '/images/pastas.jpg' },
    { id: 19, category: 3, title: 'Lasagna de Carne', description: 'La Tradicional con nuestro secreto', price: 'S/ 38.00', pictureUrl: '/images/pastas.jpg' },
    { id: 20, category: 3, title: 'Ravioles de 2 quesos ', description: 'Rellenos con queso de cabra y queso ricotta, bañados de una deliciosa salsa de pesto o al Alfredo ', price: 'S/ 34.00', pictureUrl: '/images/pastas.jpg' }
]
const category = [
    { id: 1, description: 'Especialidades' },
    { id: 2, description: 'Ensaladas' },
    { id: 3, description: 'Pastas' },
]

export const mock = () => {
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(plates), 2000)
    })
    return task
}
export const getItem = () => {
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(plates[0]), 2000)
    })
    return task
}