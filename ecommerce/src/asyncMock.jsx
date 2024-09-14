const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.apple.com/autopush/ww/search/modules/iphone/image__cnyoqnzvxxaq_large_2x.jpg?',
        stock: 25,
        description: 'Descripción de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 1500,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_908935-MLA73951078803_012024-O.webp',
        stock: 10,
        description: 'Descripción de Samsung S21'
    },
    {
        id: '3',
        name: 'Nokia 1100',
        price: 500,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_945186-MLA78245478047_082024-O.webp',
        stock: 300,
        description: 'Descripción de Nokia 1100'
    },
    {
        id: '4',
        name: 'Samsung Galaxy Tab A9',
        price: 30000,
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_892038-MLU74328290469_012024-O.webp',
        stock: 30,
        description: 'Descripción de Tab A9'
    },
    {
        id: '5',
        name: 'Tablet 8 Enova',
        price: 30000,
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_707929-MLU75756520240_042024-O.webp',
        stock: 30,
        description: 'Descripción de Tablet 8 Enova'
    },
    {
        id: '6',
        name: 'Tablet 99 Enova',
        price: 30000,
        category: 'tablet',
        img: 'https://http2.mlstatic.com/D_NQ_NP_911153-MLA76738801750_062024-O.webp',
        stock: 30,
        description: 'Descripción de Tablet 99 Enova'
    },
    {
        id: '7',
        name: 'Noblex',
        price: 465999,
        category: 'notebook',
        img: 'https://http2.mlstatic.com/D_NQ_NP_889355-MLU76657843668_062024-O.webp',
        stock: 30,
        description: 'Descripción de Tablet 99 Enova'
    },
    {
        id: '8',
        name: 'Inspiron 3525',
        price: 1151999,
        category: 'notebook',
        img: 'https://http2.mlstatic.com/D_NQ_NP_603759-MLU70002502488_062023-O.webp',
        stock: 30,
        description: 'Descripción de Tablet 99 Enova'
    },
    {
        id: '9',
        name: 'Asus 156',
        price: 651556,
        category: 'notebook',
        img: 'https://http2.mlstatic.com/D_NQ_NP_648682-MLU75872650796_042024-O.webp',
        stock: 30,
        description: 'Descripción de Tablet 99 Enova'
    },


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}