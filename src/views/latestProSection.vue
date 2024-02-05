<!-- eslint-disable -->
<template>
  <div class="container section-container">
    <div class="section-title text-center">
      <h2>Latest Products</h2>
      <p class="text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="products">
      <div class="row">
        <div
          v-for="product in products"
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
</template>
<!-- eslint-disable -->
<script>
import sourceData from "@/data.json";
import store from "../store";
export default {
  name: "latestProSection",
  components: {},
  data() {
    return {
      products: sourceData.products,
    };
  },
  methods: {
    addToCart(product) {
      store.dispatch("addToCart", product);
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
