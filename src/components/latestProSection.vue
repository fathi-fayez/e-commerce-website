<!-- eslint-disable -->
<template>
  <navBar :cratCount="cratCount" />
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
            <h4>
              <a href="">{{ product.name }}</a>
            </h4>
            <div class="rating">
              <i
                v-for="star in product.stars"
                :key="star.id"
                class="fa-solid fa-star"
                style="color: #ffb301"
              ></i>
            </div>
            <h2>{{ product.price }}</h2>
            <button
              @click="addToCard(product)"
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
import navBar from "@/components/navBar.vue";
import sourceData from "@/data.json";
export default {
  name: "latestProSection",
  components: { navBar },
  data() {
    return {
      products: sourceData.products,
      arrayOfCarts: [],
    };
  },
  methods: {
    addToCard(product) {
      // console.log(this.arrayOfCarts);
      this.arrayOfCarts.push(product);
      localStorage.setItem("productCart", JSON.stringify(this.arrayOfCarts));
      // console.log(JSON.parse(localStorage.getItem("productCart")));
    },
  },
};
</script>
<!-- eslint-disable -->
<style lang="scss">
.card {
  img {
    height: 190px;
    object-fit: contain;
    transition: 0.6s;
  }
  h4 {
    font-weight: 600;
    margin-top: 20px;
    a {
      text-decoration: none;
    }
  }
  .rating {
    margin: 5px 0;
  }
  .btn {
    margin: 50px auto 10px;
    color: white;
    font-weight: bold;
  }
  &:hover img {
    transform: scale(1.1);
  }
}
</style>
