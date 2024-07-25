<template>
  <div class="b-nav">
    <nav>
      <a href="https://github.com/desteur1" target="_blank"
        ><img src="/images/github.jpg" alt="github image" class="itm-10"
      /></a>
      <a
        href="https://www.linkedin.com/in/piepenche-fall-desteur-3715032ab/"
        target="_blank"
        ><img src="/images/linkedin.jpg" alt="linedin  image" class="itm-10"
      /></a>
      <a href="https://x.com/falldesteur" target="_blank"
        ><img src="/images/twitter.png" alt="twitter image" class="itm-10"
      /></a>
    </nav>
    <p>
      <small>mis à jour le<time datetime="2024-05-21"></time> 21-05-2024</small>
    </p>
  </div>
</template>
<script>
export default {
  name: "FooterEdge",
};
</script>
<style scoped>
.itm-10 {
  width: 20px;
  height: 20px;
  gap: 50px;
  margin-top: 10px;
}
.b-nav {
  width: 97.7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: black;
  color: #fff;
  position: fixed;
  bottom: 0;
  margin: 10px 0 10px 0;
}
nav a {
  padding: 20px 30px;
}
p {
  font-size: 20px;
}

@media (min-width: 490px) and (max-width: 810px) {
  .b-nav {
    width: 94%;
  }
}

@media (max-width: 490px) {
  .itm-10 {
    width: 18px;
    height: 18px;
  }
  .b-nav {
    width: 91%;
    font-size: 0.5rem;
    margin: 0;
  }
  nav a {
    padding: 0 5px;
  }
}
@media (min-width: 811px) and (max-width: 1300px) {
  .b-nav {
    width: 95%;
  }
}
</style>
