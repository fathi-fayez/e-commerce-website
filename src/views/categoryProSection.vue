<!-- eslint-disable -->
<template>
  <div class="container section-container">
    <h2 class="mb-5">Categorys Products</h2>
    <div class="Categorys">
      <div class="row justify-content-around">
        <div class="col-lg-3">
          <div class="card px-2 border-0 shadow-sm text-center flex-row">
            <h3>Vegetables</h3>
            <button
              @click="selectCategory('Vegetables')"
              class="btn rounded-pill bg-success"
            >
              view All <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card px-2 border-0 shadow-sm text-center flex-row">
            <h3>Fruits</h3>
            <button
              @click="selectCategory('Fruits')"
              class="btn rounded-pill bg-success"
            >
              view All <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div v-if="cartItemsCategoty.length > 0" class="category-section">
      <div class="products">
        <div class="row">
          <div
            v-for="product in cartItemsCategoty"
            :key="product.id"
            class="col-lg-3 mt-3"
          >
            <div class="card border-0 shadow-sm text-center">
              <img :src="product.image" :alt="product.id" />
              <h4>{{ product.name }}</h4>
              <div class="rating">
                <i
                  v-for="star in product.stars"
                  :key="star.id"
                  class="fa-solid fa-star"
                  style="color: #ffb301"
                ></i>
              </div>
              <h2>{{ product.price }} $</h2>
              <button
                @click="addToCart(product)"
                class="btn rounded-pill w-50 bg-success"
                href=""
              >
                Add To Card <i class="fa-solid fa-cart-shopping"> </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import sourceData from "@/data.json";
import store from "@/store";
export default {
  name: "categoryProSection",
  components: {},
  data() {
    return {
      selectedCategory: "",
      products: sourceData.products,
      filteredProducts: [],
    };
  },
  methods: {
    addToCart(product) {
      store.dispatch("addToCart", product);
    },
    selectCategory(category) {
      // Set the selected category
      this.selectedCategory = category;
      this.filteredProducts = this.products.filter(
        (item) => item.category === this.selectedCategory
      );
      store.state.cartItemsCategoty = this.filteredProducts;
    },
  },
  computed: {
    cartItemsCategoty() {
      return store.state.cartItemsCategoty;
    },
  },
};
</script>
<!-- eslint-disable -->
<style lang="scss">
.card {
  background: #eee !important;
  overflow: hidden;
  img {
    width: 100px;
    height: 100px;
    margin: auto;
    object-fit: contain;
    transition: 0.6s;
  }
  h3 {
    font-weight: 600;
    margin-top: 20px;
  }
  .btn {
    margin: 20px auto;
    color: white;
    font-weight: bold;
  }
  &:hover img {
    transform: scale(1.1);
  }
}
</style>
