<!-- eslint-disable -->
<template>
  <div class="slider">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-lg-6 slider-text mt-5">
              <h2 class="text-success">
                Order <span class="lighten">Online</span>,<br />
                Save Your <br />
                <span class="lighten">Time</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                itaque optio architecto consequuntur harum, illum dolorem sint,
                voluptate tempore totam magni.
              </p>
              <a href="" class="btn rounded-pill"
                >ORDER NOW <i class="fa-solid fa-arrow-right-long"></i
              ></a>
            </div>
            <div class="col-lg-6 slider-image">
              <img
                src="../assets/images/product/f1.png"
                class="d-block w-100"
                alt="product/f1"
              />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col-lg-6 slider-text mt-5">
              <h2 class="text-success">
                Order <span class="lighten">Online</span>,<br />
                Save Your <br />
                <span class="lighten">Time</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                itaque optio architecto consequuntur harum, illum dolorem sint,
                voluptate tempore totam magni.
              </p>
              <a href="" class="btn rounded-pill"
                >ORDER NOW <i class="fa-solid fa-arrow-right-long"></i
              ></a>
            </div>
            <div class="col-lg-6 slider-image">
              <img
                src="../assets/images/product/f3.png"
                class="d-block w-100"
                alt="product/f1"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "sliderSection",
};
</script>
<!-- eslint-disable -->
<style lang="scss">
.slider {
  background: #f7f7f7;
  padding: 100px 50px;
  h2 {
    font-size: 50px;
    font-weight: 600;
    .lighten {
      color: #e26329;
    }
  }
  a.btn {
    font-size: 18px;
    background: #fd7e145e;
    padding: 10px 50px;
    color: #ff7400;
    font-weight: 600;
    &:hover {
      box-shadow: 2px 2px 5px #ff9944;
    }
  }
}
</style>
