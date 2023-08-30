<template>
  <div class="home">
    <navBar />
    <slider-section />
  </div>
</template>

<script>
import navBar from "../components/navBar.vue";
import SliderSection from "@/components/sliderSection.vue";
export default {
  name: "homeView",
  components: { SliderSection, navBar },
};
</script>
