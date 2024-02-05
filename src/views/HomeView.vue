<template>
  <div class="home">
    <headerSection />
    <testimonials />
  </div>
</template>

<script>
import headerSection from "@/components/headerSection.vue";
import Testimonials from "@/components/testimonials.vue";
export default {
  name: "homeView",
  components: { headerSection, Testimonials },
  methods: {},
};
</script>
