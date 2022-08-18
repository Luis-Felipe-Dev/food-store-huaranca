export const plates = [
    { category: 'Especialidades', title: 'Apanado de Lomo', description: 'Lomo fino apanado, acompañado con papas fritas amarillas', price: 48.00, pictureUrl: '/images/carnes.png', stock: 20 },
    { category: 'Especialidades', title: 'Chuletas de Cerdo a Nuestro Estilo', description: 'Deliciosas chuletas a la parrilla, bañadas con salsa de durazno y acompañadas con puré de papas de la casa', price: 39.00, pictureUrl: '/images/carnes2.png', stock: 20 },
    { category: 'Especialidades', title: 'Estofado de Nonna', description: 'Una gran receta de la abuela a base de carne de res y estofado en vino tinto con champiñones, cebolla charlot y tocino, acompañados con fettuccine a la crema', price: 49.00, pictureUrl: '/images/carnes.png', stock: 20 },
    { category: 'Especialidades', title: 'Lomo a lo Pobre al Estilo LongHorn', description: 'Lomo Fino en salsa de vino tinto, acompañado con nuestro inconfundible tacu tacu de pallares verdes con huevo y plátano frito', price: 62.00, pictureUrl: '/images/carnes2.png', stock: 20 },
    { category: 'Especialidades', title: 'Pepper Steak', description: 'Nuestra tradicional salsa de pimienta que baña a un lomito fino humeante', price: 62.00, pictureUrl: '/images/carnes.png', stock: 20 },
    { category: 'Especialidades', title: 'Salmón a la Parrilla', description: 'Salmón,fresco, preparado en nuestra parrilla, acompañado de una ensalada fresca a la limoneta', price: 59.00, pictureUrl: '/images/carnes2.png', stock: 20 },
    { category: 'Especialidades', title: 'Apanado de Pollo', description: 'Pechuga de pollo apanado, acompañado con papas fritas amarillas', price: 32.00, pictureUrl: '/images/carnes.png', stock: 20 },
    { category: 'Especialidades', title: 'Costillas LongHorn en salsa BBQ', description: 'Las mejores costillas con la mejor salsa BBQ, una receta insuperable', price: 64.00, pictureUrl: '/images/carnes2.png', stock: 20 },
    { category: 'Especialidades', title: 'Filet Mignon', description: 'Inconfundible lomo fino con nuestra tradicional salsa de champiñones con vino tinto cabernet sauvignon', price: 62.00, pictureUrl: '/images/carnes.png', stock: 20 },
    { category: 'Especialidades', title: 'Lomo de la Casa', description: 'Lomo Fino con queso gratinado en una humeante salsa de champiñones y papas fritas amarillas', price: 62.00, pictureUrl: '/images/carnes2.png', stock: 20 },
    { category: 'Ensaladas', title: 'Ensalada Cesar', description: 'Tiernas lechugas romanas, crocantes crutones de pan y parmesano del dìa, acompañado de la tradicional salsa de anchoas, aceite de oliva y mostaza', price: 29.00, pictureUrl: '/images/ensaladas.jpg', stock: 25 },
    { category: 'Ensaladas', title: 'Ensalada de Pollo  Crocantes LongHorn', description: 'Selección de lechugas mixtas, palta, espárragos, pecanas acarameladas, tomate cherry, tomate italiano, arúgula, pollo empanizado, queso roquefort, aliñada con salsa de miel y mostaza', price: 42.00, pictureUrl: '/images/ensaladas.jpg', stock: 25 },
    { category: 'Ensaladas', title: 'Ensalada Parrillera Chica', description: 'Las más frescas lechugas, rabanitos,  cebollas y tomates con el aliño de la casa', price: 18.00, pictureUrl: '/images/ensaladas.jpg', stock: 25 },
    { category: 'Ensaladas', title: 'Ensalada Cesar de Pollo', description: 'Lechugas romanas, crocantes crutones de pan y parmesano del dìa, con salsa de anchoas, aceite de oliva y mostaza con pechuga de pollo a la parrilla', price: 36.00, pictureUrl: '/images/ensaladas.jpg', stock: 25 },
    { category: 'Ensaladas', title: 'Ensalada de Quinua al Estilo LongHorn', description: 'La mejor selección de quinua, pollo a la parrilla en cortes largos, pimiento, palta, tomate, aceituna negra, verde, queso fresco  y cebolla blanca, choclo y huevo; aliñada con salsa de limoneta', price: 35.00, pictureUrl: '/images/ensaladas.jpg', stock: 25 },
    { category: 'Ensaladas', title: 'Ensalada Parrillera Grande', description: 'Las más frescas lechugas, rabanitos,  cebollas y tomates con el aliño de la casa', price: 26.00, pictureUrl: '/images/ensaladas.jpg', stock: 25 },
    { category: 'Pastas', title: 'Canelones de Ricota y Espinaca a los 4 Quesos', description: 'Las inconfundibles,rellenos con espinaca, queso ricota y parmesano, bañados con salsa a los 4 quesos', price: 36.00, pictureUrl: '/images/pastas.jpg', stock: 25 },
    { category: 'Pastas', title: 'Fettuccine ', description: 'Pídelo con la salsa de tu elección: huancaína pesto, Alfredo, mediterraneo, putanesca y bolognesa y primavera ', price: 37.00, pictureUrl: '/images/pastas.jpg', stock: 25 },
    { category: 'Pastas', title: 'Lasagna de Carne', description: 'La Tradicional con nuestro secreto', price: 38.00, pictureUrl: '/images/pastas.jpg', stock: 25 },
    { category: 'Pastas', title: 'Ravioles de 2 quesos ', description: 'Rellenos con queso de cabra y queso ricotta, bañados de una deliciosa salsa de pesto o al Alfredo ', price: 34.00, pictureUrl: '/images/pastas.jpg', stock: 25 }
]

export const mock = () => {
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(plates), 2000)
    })
    return task
}
export const getItem = (plateId) => {
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(plates), 2000)
    })
    return task
}
export const getPlatesCategory = (categoryId) => {
    const task = new Promise((resolve) => {
        setTimeout(() => resolve(plates), 2000)
    })
    return task
}