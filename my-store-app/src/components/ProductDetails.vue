<template>
    <div class="home-container">
      <h2>Детали продукта</h2>
      <div v-if="product" class="product-details">
        <h3>{{ product.title }}</h3>
        <div class="product-image">
          <img :src="product.image" alt="Product Image" />
        </div>
        <p class="product-category">{{ product.category }}</p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
      </div>
      <router-link to="/">Назад</router-link>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.selectedProduct;
      },
    },
    methods: {
      formatPrice(price) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
      },
    },
    created() {
      const productId = this.$route.params.id;
      this.$store.dispatch("fetchProductDetails", productId);
    },
  };
  </script>
  
  <style scoped>
  @import './ProductDetails.scss';
  </style>
  