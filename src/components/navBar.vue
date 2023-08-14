<!-- eslint-disable -->
<template>
  <nav class="navbar navbar-expand-lg shadow p-3">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/ecommerce-logo-png-11.png" alt="" />
      </a>
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
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Shop</a>
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
            <a class="nav-link" href="#">
              <i class="fa-regular fa-heart"></i
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link position-relative" href="#">
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                1
              </span>
              <i class="fa-solid fa-cart-shopping"> </i>
            </a>
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
              <li><a class="dropdown-item" href="#">Login</a></li>
              <li><a class="dropdown-item" href="#">Register</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "navBar",
};
</script>
<!-- eslint-disable -->
<style lang="scss">
button.search-btn {
  background-color: #e26329;
  color: #fff;
  border: none;
}
ul.action-menu .nav-item .nav-link {
  margin: 0 10px;
}
</style>
