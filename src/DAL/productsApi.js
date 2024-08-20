import { instance } from './api'

export const ProductsAPI = {
    getAllProducts: () => {
        return instance.get(`products`).then(res => res.data)
    },
    addProduct: (product) => {
        return instance.post(`products`, { ...product }).then(res => res.data)
    }
}