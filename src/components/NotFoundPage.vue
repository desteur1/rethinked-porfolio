<template>
  <div class="not-found">
    <figure>
      <img src="/images/404.jpeg" alt="404 image" />
      <figcaption>404</figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
}
figure img {
  width: 40%;
  object-fit: contain;
  padding-top: 150px;
}
figcaption {
  font-size: 4rem;
  color: red;
  padding: 0 0 50px 0;
}

@media (max-width: 810px) {
  figure {
    margin: 100px 0;
    background: #fff;
  }
}
</style>
