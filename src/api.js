let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
  getCategories: async () => {
    //get /categories
    const res = await fetch(BASE + '/categories')
    const json = await res.json()

    return json
  },

  getProducts: async () => {
    //get /products
    const res = await fetch(BASE + '/products')
    const json = await res.json()

    return json
  }
}