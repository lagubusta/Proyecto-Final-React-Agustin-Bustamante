const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.apple.com/autopush/ww/search/modules/iphone/image__cnyoqnzvxxaq_large_2x.jpg?',
        stcok: 25,
        description: 'Descripción de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 1500,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_908935-MLA73951078803_012024-O.webp',
        stcok: 10,
        description: 'Descripción de Samsung S21'
    },
    {
        id: '3',
        name: 'Nokia 1100',
        price: 500,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_945186-MLA78245478047_082024-O.webp',
        stcok: 300,
        description: 'Descripción de Nokia 1100'
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
