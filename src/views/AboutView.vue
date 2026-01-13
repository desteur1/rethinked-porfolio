<template>
  <article class="slider">
    <div></div>
    <div
      class="photo-frame"
      tabindex="0"
      @keydown.left="scrollLeft"
      @keydown.right="scrollRight"
    >
      <button class="nav left" @click="scrollLeft">&#9664;</button>
      <!-- ◀ -->

      <div class="photo-slider" ref="slider">
        <img src="/images/profile-1.jpg" alt="ma première photo de profil" />
        <img src="/images/profile-2.jpg" alt="ma deuxième photo de profil" />
      </div>
      <button class="nav right" @click="scrollRight">&#9654;</button>
      <!-- ▶ -->
    </div>
    <div class="slider-content">
      <h1>desteur piepenche fall</h1>
      <p>développeur web et web mobile</p>
    </div>
  </article>
  <section class="about-me d-10" id="section2">
    <div class="w20">
      <h2>a propos de moi</h2>
    </div>
    <div class="w10">
      <p>
        <strong>Bonjour, je suis Desteur !</strong><br />J'ai trouvé ma voie en
        tant que développeur web. Maîtrisant le frontend, je finalise ma montée
        en compétences full stack. J’ai déjà travaillé avec Python (Django),
        Node.js, Express, n8n et Docker, et il ne me reste plus qu’à finaliser
        PHP et Symfony. Sérieux, passionné et rigoureux, je mets mes compétences
        au service de tous vos projets anglophones comme francophones.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutView",
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    scrollLeft() {
      if (!this.$refs.slider) return;
      const width = this.$refs.slider.clientWidth;
      this.$refs.slider.scrollBy({
        left: -width,
        behavior: "smooth",
      });
    },
    scrollRight() {
      if (!this.$refs.slider) return;
      const width = this.$refs.slider.clientWidth;
      this.$refs.slider.scrollBy({
        left: width,
        behavior: "smooth",
      });
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
.photo-frame {
  position: relative;
  width: 320px;
  height: 350px;
  border: 5px solid transparent; /* pour éviter le saut lors du hover */
  border-radius: 16px;
  overflow: hidden;
  margin-top: 3rem;
  opacity: 0.8;
  transition: opacity 0.3s, border-color 0.3s, box-shadow 0.3s ease;
}
.photo-frame:focus {
  outline: none;
  box-shadow: 0 0 0 4px greenyellow;
  opacity: 1;
}
.photo-frame:hover {
  border: 5px solid greenyellow;
  box-shadow: 0 0 15px 4px rgba(173, 255, 47, 0.6);
  opacity: 1;
}
.photo-slider {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Firefox */
}
.photo-slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: center;
  flex-shrink: 0;
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.nav.left {
  left: 10px;
}
.nav.right {
  right: 10px;
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
  align-items: center;
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
@media (min-width: 811px) and (max-width: 1195px) {
  .photo-frame {
    width: 280px;
    height: 300px;
  }
  .about-me {
    flex-direction: column;
    align-items: center;
  }
  .w20 {
    width: 100%;
    justify-content: center;
    padding-bottom: 30px;
  }
}

@media (max-width: 810px) {
  .slider {
    padding: 20px 0 20px 0;
  }
  .photo-frame {
    width: 180px;
    height: 200px;
  }
  .nav {
    display: none;
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
  .w20 {
    width: 100%;
    justify-content: center;
  }

  .w10 {
    /* width: 100%; */
    font-size: 0.7rem;
    line-height: 25px;
  }
  .w10 strong {
    font-size: 0.8rem;
    filter: brightness(60%);
  }
}
</style>
