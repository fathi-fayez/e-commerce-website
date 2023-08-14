<template>
  <navBar />
  <slider-section />
  <category-pro-section />
  <latest-pro-section />
  <footer-section />
  <router-view />
</template>
<script>
import CategoryProSection from "./components/categoryProSection,.vue";
import FooterSection from "./components/footerSection.vue";
import LatestProSection from "./components/latestProSection.vue";
import navBar from "./components/navBar.vue";
import SliderSection from "./components/sliderSection.vue";
export default {
  name: "app",
  components: {
    navBar,
    SliderSection,
    CategoryProSection,
    LatestProSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// header section
nav {
  padding: 30px;
  a.navbar-brand img {
    height: 40px;
  }

  form.search-form {
    width: 300px px;
    margin-right: 50px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// sections style
.section-container {
  padding: 100px 0;
}

.section-title h2 {
  text-shadow: 1px 1px 2px #4444;
}
</style>
