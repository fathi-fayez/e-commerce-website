<!-- eslint-disable -->
<template>
  <nav class="navbar navbar-expand-lg shadow p-3 sticky-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/ecommerce-logo-png-11.png" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="categorys">Categorys</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link to="products">Products</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 action-menu">
          <form class="search-form d-flex" role="search">
            <input
              class="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success search-btn rounded-pill"
              type="submit"
            >
              Search
            </button>
          </form>
          <li class="nav-item">
            <router-link
              to="/cartPage"
              class="nav-link position-relative"
              href="#"
            >
              <span
                v-show="count"
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ count }}
              </span>
              <i class="fa-solid fa-cart-shopping"> </i>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa-solid fa-user"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="LoginPage"
                  >Log In</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="signupPage"
                  >Register</router-link
                >
              </li>
              <li>
                <button
                  @click="logOutButtonPressed"
                  v-if="isLoggedIn"
                  class="dropdown-item"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable -->
<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";
import store from "../store";
export default {
  name: "navBar",
  data() {
    return {
      isLoggedIn: false,
      auth: "",
    };
  },
  methods: {
    logOutButtonPressed() {
      signOut(this.auth).then(() => {
        router.push("/LoginPage");
      });
    },
  },
  computed: {
    count() {
      return store.state.cartItemsCount;
    },
  },
  mounted() {
    if (localStorage.length > 0) {
    }
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
};
</script>
<!-- eslint-disable -->
<style lang="scss">
.navbar {
  background: #673ab7;
}
.router-link-exact-active {
  color: #e26329 !important;
  font-size: 18px;
}

button.search-btn {
  background-color: #e26329;
  color: #fff;
  border: none;
}
ul.action-menu .nav-item .nav-link {
  margin: 0 10px;
}
.nav-item a {
  text-decoration: none;
}
</style>
