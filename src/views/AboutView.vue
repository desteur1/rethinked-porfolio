<template>
  <article class="slider">
    <img
      src="/images/my-profile.jpg"
      class="slider-background"
      alt="my profile picture"
    />

    <div class="slider-content">
      <h1>desteur piepenche fall</h1>
      <p>developpeur web et web mobile</p>
    </div>
  </article>
  <section class="about-me d-10" id="section2">
    <div class="w20">
      <h2>a propos de moi</h2>
    </div>
    <div class="w10">
      <p>
        <strong>Bonjour, je suis Desteur ! </strong><br />J'ai trouvé ma voix en
        tant que Developpeur web. A ce jour je maîtrise le frontend et je vise
        full stack pour très bientôt. En tant que personne impliquée, passionnée
        et rigoureuse, je saurais mettre en forme vos projets francophones comme
        anglophones. <br />A très vite pour nos futures collaborations.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutView",
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
}
.slider {
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
}
.slider-background {
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 20px 50px 30px 50px;
  filter: brightness(50%);

  border-radius: 50%;
}

.slider-content {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: greenyellow;
  font-size: 3rem;
  text-transform: uppercase;
}
h2 {
  font-size: 3rem;
  text-transform: uppercase;
  color: greenyellow;
}
.slider-content p {
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  padding-top: 30px;
}
.about-me {
  padding: 200px 100px 100px 100px;
  display: flex;
}
.d-10 {
  background: #000;
}

.w20 {
  width: 40%;
  display: flex;
}
.w10 {
  width: 60%;
  color: #fff;
  font-size: 1.5rem;
  text-align: justify;
  gap: 5px;
  line-height: 50px;
}

.w10 strong {
  color: greenyellow;
  font-size: 2.5rem;
}

@media (max-width: 810px) {
  .slider {
    padding: 20px 0 20px 0;
  }
  .slider-background {
    width: 100px;
    height: 100px;
    padding: 20px;
  }
  h1 {
    font-size: 1rem;
  }
  .slider-content p {
    font-size: 0.7rem;
  }
  .about-me {
    padding: 20px 15px 20px 15px;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  .w10 {
    width: 50%;
    font-size: 0.7rem;
    line-height: 25px;
  }
  .w10 strong {
    font-size: 0.8rem;
    filter: brightness(60%);
  }
}
</style>
