<template>
  <div class="home">
    <headerSection />
    <newsletterSection></newsletterSection>
    <testimonials />
  </div>
</template>

<script>
import headerSection from "@/components/headerSection.vue";
import Testimonials from "@/components/testimonials.vue";
import newsletterSection from "@/components/newsletter.vue";
export default {
  name: "homeView",
  components: { headerSection, Testimonials, newsletterSection },
  methods: {},
};
</script>
