const products = [
    {
        id: '1',
        name: 'Camiseta Boston Celtics',
        price: '$125000',
        category: 'NBA',
        img: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-swingman-jersey-jayson-tatum-unisex_ss4_p-13392523+u-7mwh2m6ziymrtks2cguq+v-7aa99caf5eee4073adec36d5b839f13e.jpg?_hv=2&w=340',
        stock: 10,
        description: 'Camiseta Boston Celtics Nike Icon Swingman - Jayson Tatum - Unisex'
    },

    {
        id: '2',
        name: 'Camiseta Inter Miami',
        price: '$124000',
        category: 'Futbol',
        img: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2023-the-heart-beat-kit-replica-jersey_ss5_p-200282037+u-3sem8zmxl5p7jwlweru7+v-e8nnyqqlnhlml6lxh32x.jpg?_hv=2&w=340',
        stock: 10,
        description: 'Camiseta Inter Miami CF Messi Adidas Pink 2023'
    }
    ,
    {
        id: '3',
        name: 'Camiseta Broncos Denver Champ Bailey',
        price: '$54000',
        category: 'NFL',
        img: 'https://fanatics.frgimages.com/denver-broncos/mens-nike-champ-bailey-orange-denver-broncos-game-retired-player-jersey_pi3974000_ff_3974159-642392345491d2420709_full.jpg?_hv=2&w=340',
        stock: 10,
        description: 'Camiseta Juego Oficial Denver Broncos Champ Bailey Retired'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id === productId))
    }, 500)
    
    })

   
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })
}

/*.toLowerCase() por las mayusculas y minusculas en las categorias*/
