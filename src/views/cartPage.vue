<template>
  <div class="cartPage">
    <NavBar></NavBar>
    <div v-if="products" class="row">
      <!-- cart item -->
      <div v-for="product in products" :key="product.id" class="col-lg-3 mt-3">
        <div class="card border-0 shadow-sm text-center">
          <img :src="product.image" :alt="product.id" />
          <h4>
            <a href="">{{ product.name }}</a>
          </h4>
          <h2>{{ product.price }}</h2>
        </div>
      </div>
    </div>
    <div v-else>
      <empty-cart></empty-cart>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
import EmptyCart from "@/components/emptyCart.vue";
export default {
  name: "cartPage",
  components: { NavBar, EmptyCart },
  data() {
    return {
      products: null,
    };
  },
  created() {
    this.products = JSON.parse(localStorage.getItem("productCart"));
  },
};
</script>
