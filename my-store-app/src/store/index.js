import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [], 
    selectedProduct: null, 
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product
    },
  },
  actions: {
    async fetchProducts({ commit }) {
        try {
          const response = await axios.get('https://fakestoreapi.com/products')
          const products = response.data
          commit('setProducts', products)
        } catch (error) {
          console.error('Ошибка при загрузке списка продуктов:', error)
        }
      },
      async fetchProductDetails({ commit }, productId) {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
          const product = response.data
          commit('setSelectedProduct', product)
        } catch (error) {
          console.error('Ошибка при загрузке деталей продукта:', error)
        }
      },
  },
})
