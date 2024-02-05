<!-- eslint-disable -->
<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner fw-normal">
      <div class="carousel-item active" data-bs-interval="2000">
        <p class="testimonial-text">{{ testimonials[0].text }}</p>
        <div class="d-flex align-items-center gap-3">
          <img
            class="rounded"
            :src="testimonials[0].image"
            :alt="testimonials[0].text"
          />
          <h6 class="testimonial-author">{{ testimonials[0].author }}</h6>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <p class="testimonial-text">{{ testimonials[3].text }}</p>
        <div class="d-flex align-items-center gap-3">
          <img
            class="rounded"
            :src="testimonials[3].image"
            :alt="testimonials[3].text"
          />
          <h6 class="testimonial-author">{{ testimonials[3].author }}</h6>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <p class="testimonial-text">{{ testimonials[2].text }}</p>
        <div class="d-flex align-items-center gap-3">
          <img
            class="rounded"
            :src="testimonials[2].image"
            :alt="testimonials[2].text"
          />
          <h6 class="testimonial-author">{{ testimonials[2].author }}</h6>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <p class="testimonial-text">{{ testimonials[1].text }}</p>
        <div class="d-flex align-items-center gap-3">
          <img
            class="rounded"
            :src="testimonials[1].image"
            :alt="testimonials[1].text"
          />
          <h6 class="testimonial-author">{{ testimonials[0].author }}</h6>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text: "Lorem ipsumtque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!",
          author: "Steifany Crock",
          image: "images/blog/post-author1.png",
        },
        {
          text: "Lorem ipsumtque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!",
          author: "Sara Adams",
          image: "images/blog/post-author2.png",
        },
        {
          text: "Lorem ipsumtque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!",
          author: "John  Doe",
          image: "images/blog/post-author3.png",
        },
        {
          text: "Lorem ipsumtque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!",
          author: "sam Look",
          image: "images/blog/post-author4.png",
        },
      ],
    };
  },
};
</script>
<!-- eslint-disable -->
<style scoped>
.testimonial-text {
  font-size: 18px;
}

.testimonial-author {
  font-style: italic;
}
button span:hover {
  background-color: #a775ff;
}
</style>
