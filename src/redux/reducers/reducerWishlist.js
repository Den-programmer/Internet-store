import Sasik_External_Disk_500GB from '../../components/Home/MainArticle/Featured Products/img/Sasik_External_Disk_500GB.jpg'
import macbookPro from '../../components/Home/Sidebar/Hot Deals/productsPhotos/macbookPro.png'
import puma from '../../components/Home/Sidebar/NewProducts/img/puma.png'

const Wishlist = {
    products: [
        {
            id: 1,
            photo: Sasik_External_Disk_500GB,
            title: 'Sasik External Disk-500GB',
            price: '135.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: true,
            isInCard: true,
            isInStock: true
        },
        {
            id: 2,
            photo: macbookPro,
            title: 'Sasik External Disk-500GB',
            price: '1800.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: true,
            isInCard: false,
            isInStock: false
        },
        {
            id: 3,
            photo: puma,
            title: 'Sasik External Disk-500GB',
            price: '70.00',
            rating: 5,
            isNew: false,
            isSale: true,
            hovered: false,
            like: true,
            isInCard: true,
            isInStock: true
        },
    ]
}

const reducerWishlist = (state = Wishlist, action) => {
    switch (action.type) {
                    
        default:
            return state
    }
}

/* Action Creators! */

export default reducerWishlist