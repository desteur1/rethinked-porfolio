<template>
  <div class="tab">
    <RouterLink to="/" @click="handleScrollToTop"
      ><img src="/images/desteur-logo .png" alt="Desteur's logo"
    /></RouterLink>
    <RouterLink to="/#section2">presentation</RouterLink>
    <RouterLink to="/#section1">creations</RouterLink>
    <RouterLink to="/#contact">contact</RouterLink>
  </div>

  <Router-view />
</template>

<script>
import { scrollToTop } from "@/utils/scroll";

export default {
  name: "App",

  methods: {
    handleScrollToTop() {
      scrollToTop();
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
}

.tab {
  position: fixed;
  width: 98.7%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  background: #000;
  padding: 20px 0;
  font-family: "Roboto", sans-serif;
}
.tab a {
  text-decoration: none;
  color: #fff;
  display: flex;
}

.tab a:hover {
  text-decoration: underline greenyellow;
}
.tab a:first-of-type {
  width: 75px;
  height: 75px;
  object-fit: contain;
  cursor: zoom-in;
}

@media (max-width: 810px) {
  .tab {
    width: 100%;
    font-size: 0.5rem;
    position: unset;
  }
  .tab a:first-of-type {
    width: 30px;
    height: 30px;
  }
}
</style>
