<!-- eslint-disable -->
<template>
  <div class="container section-container">
    <div class="section-title text-center">
      <h2>Category Products</h2>
      <p class="text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="products">
      <div class="row">
        <div class="col-lg-3">
          <div class="card border-0 shadow-sm text-center">
            <img src="../assets/images/product/product20.png" alt="" />
            <h3>Tomatom</h3>
            <a class="btn rounded-pill w-50 bg-success" href=""
              >view All <i class="fa-solid fa-arrow-right-long"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card border-0 shadow-sm text-center">
            <img src="../assets/images/product/product21.png" alt="" />
            <h3>Rice</h3>
            <a class="btn rounded-pill w-50 bg-success" href=""
              >view All <i class="fa-solid fa-arrow-right-long"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card border-0 shadow-sm text-center">
            <img src="../assets/images/product/product22.png" alt="" />
            <h3>carot</h3>
            <a class="btn rounded-pill w-50 bg-success" href=""
              >view All <i class="fa-solid fa-arrow-right-long"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card border-0 shadow-sm text-center">
            <img src="../assets/images/product/product23.png" alt="" />
            <h3>Onion</h3>
            <a class="btn rounded-pill w-50 bg-success" href=""
              >view All <i class="fa-solid fa-arrow-right-long"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "categoryProSection",
};
</script>
<!-- eslint-disable -->
<style lang="scss">
.card {
  background: #eee !important;
  overflow: hidden;
  img {
    height: 190px;
    object-fit: contain;
    transition: 0.6s;
  }
  h3 {
    font-weight: 600;
    margin-top: 20px;
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
