<template>
  <div class="cartPage">
    <div
      v-if="cartItems.length > 0"
      class="row align-items-center justify-content-around my-5"
    >
      <h1 class="mb-5">Carts Container</h1>
      <!-- container for items -->
      <div class="cart-rewiew col-10 col-lg-5 col-md-4 mb-4">
        <!-- item -->
        <div
          v-for="product in cartItems"
          :key="product.id"
          class="item-control d-flex align-items-center justify-content-around rounded mt-3 px-3 shadow-sm"
        >
          <img :src="product.image" :alt="product.id" />
          <h6>
            {{ product.name }}
          </h6>
          <div class="d-flex align-items-center justify-content-around mx-1">
            <button
              @click="deleteItem(product)"
              class="btn btn-outline-secondary"
            >
              -
            </button>
            <h6 class="m-3">{{ product.quantity }}</h6>
            <button
              @click="addToCart(product)"
              class="btn btn-outline-secondary"
            >
              +
            </button>
          </div>
          <!--********* Search if there is a peter way to calcuaue th price of item *********-->
          <h6>{{ product.price }} $</h6>
          <h6>{{ product.quantity * product.price }} $</h6>
        </div>
      </div>
      <!-- container of details -->
      <div
        class="cart-details col-10 col-lg-5 col-md-4 card bg-primary text-while rounded-0 border-0"
      >
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5>Cart Details</h5>
            <i class="fa-solid fa-cart-shopping"> </i>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <p class="mb-2">total</p>
            <p class="mb-2">{{ totalPrice }} $</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="mb-2">Shipping</p>
            <p class="mb-2">{{ shippingCost }} $</p>
          </div>
          <hr />
          <div class="d-flex justify-content-between mb-4">
            <p class="mb-2">Subtotal</p>
            <p class="mb-2">{{ subTotalPrice }} $</p>
          </div>
          <button
            @click="showSweetAlert"
            class="btn mt-2 btn-info btn-block btn-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <empty-cart></empty-cart>
    </div>
  </div>
</template>

<script>
import EmptyCart from "@/components/emptyCart.vue";
import store from "@/store";
import Swal from "sweetalert2";
export default {
  name: "cartPage",
  components: { EmptyCart },
  data() {
    return {
      shippingCost: store.state.shippingCost,
    };
  },
  computed: {
    cartItems() {
      return store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      store.state.cartItems.map((el) => (price += el.quantity * el.price));
      return price;
    },
    subTotalPrice() {
      let price = this.shippingCost;
      store.state.cartItems.map((el) => (price += el.quantity * el.price));
      return price;
    },
  },
  methods: {
    deleteItem(product) {
      store.dispatch("deleteItem", product);
    },
    addToCart(product) {
      store.dispatch("addToCart", product);
    },
    showSweetAlert() {
      Swal.fire({
        title: "Done!",
        text: "Your  order has been placed.",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.item-control {
  background-color: #cbcbcb;
}
</style>
