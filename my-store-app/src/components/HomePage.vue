<template>
  <div class="home-container">
    <h1>Главная страница</h1>
    <div class="products-list">
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="'/product/' + product.id" class="product-link">
            <div class="product-info">
              <div class="product-title-wrapper">
                <p class="product-title">{{ product.title }}</p>
              </div>
              <div class="product-image">
                <img :src="product.image" alt="Product Image" />
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss" scoped>
@import './HomePage.scss';
</style>
