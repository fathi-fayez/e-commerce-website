<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col col-lg-6 text-start fw-bold">
        <div className="testimonial">
          <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
          <h2 className="testimonial__title mb-4">
            What our <span>customers</span> are saying
          </h2>
          <auto-slider></auto-slider>
        </div>
      </div>
      <div class="testimonial-image col col-lg-6">
        <img
          src="../assets/images/images.jpg"
          alt="testimonial-img"
          className="w-100"
        />
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->
<script>
import autoSlider from "./autoSlider.vue";
export default {
  components: { autoSlider },
  name: "testimonials",
};
</script>
<!-- eslint-disable -->
<style lang="scss" scoped>
.container {
  padding: 150px 50px;
}
h5,
span {
  color: #673ab7;
}
@media (max-width: 992px) {
  .testimonial-image {
    display: none;
  }
}
</style>
