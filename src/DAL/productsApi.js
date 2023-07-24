import { instance } from './api'

export const ProductsAPI = {
    getAllProducts: () => {
        return instance.get(`products`).then(res => res.data)
    }
}