<template>
  <body>
    <main>
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
            <strong>Bonjour, je suis Desteur ! </strong><br />J'ai trouvé ma
            voix en tant que Developpeur web. A ce jour je maîtrise le frontend
            et je vise full stack pour très bientôt. En tant que personne
            impliquée, passionnée et rigoureuse, je saurais mettre en forme vos
            projets francophones comme anglophones. <br />A très vite pour nos
            futures collaborations.
          </p>
        </div>
      </section>
      <section id="section1" class="exper">
        <div class="w20 mz-11">
          <h2>mes creations</h2>
        </div>
        <!-- v-for="(src, key) in imageSources": This loop iterates over each key-value pair in the imageSources object. During each iteration:
src is assigned the value (URL) from the imageSources object.
key is assigned the corresponding key (e.g., cv, dynamic, form). -->

        <!-- "v-for="(src, key) in imageSources": Iterates over each item in the imageSources  -->

        <!-- src is the image URL, and key is the key name (e.g., cv, dynamic, form). -->
        <!-- :key="key": Provides a unique key for each item in the loop, which helps Vue to optimize rendering. -->
        <div v-for="(src, key) in imageSources" :key="key" class="image-sizing">
          <!-- This syntax binds the src attribute of the img element to the src
          variable from the v-for loop. This means each image will use the
          corresponding URL from the imageSources object.
          src is just a variable name used in the loop. You could indeed choose a different name if you wanted to. -->
          <img
            :src="src"
            :alt="`${key} image`"
            @click="openModal(key)"
            class="image-size"
          />
          <!-- :key attribute in the v-for loop is used to provide a unique identifier for each item in the loop.
           :alt="${key} image" uses a template string to include the key variable in the alt text, making it unique for each image. -->

          <DynamicModal :isVisible="modals[key]" @close="closeModal(key)">
            <template v-if="key === 'cv'">
              <h2>CV Details</h2>
              <p>Some details about the CV...</p>
            </template>
            <template v-else-if="key === 'dynamic'">
              <h2>Dynamic Content</h2>
              <p>Some details about dynamic content...</p>
            </template>
            <template v-else-if="key === 'form'">
              <h2>Form Content</h2>
              <p>Some details about the form...</p>
            </template>
          </DynamicModal>
        </div>
      </section>
    </main>
  </body>
  <ContactForm></ContactForm>
</template>

<script>
import DynamicModal from "@/components/MyModals.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {
    DynamicModal,
    ContactForm,
  },
  data() {
    return {
      imageSources: {
        cv: "images/cv.jpg",
        dynamic: "images/dynamic.jpg",
        form: "images/form.jpg",
      },
      modals: {
        cv: false,
        dynamic: false,
        form: false,
      },
    };
  },
  methods: {
    openModal(key) {
      this.modals[key] = true;
    },
    closeModal(key) {
      this.modals[key] = false;
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

/*****************MAIN*************/
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
.w20 {
  padding-bottom: 10px;
}
.mz-11 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* image sizing */
.image-sizing {
  display: inline-block;
  margin: 10px;
}
.image-size {
  height: 200px;
  width: 200px;
}
.me-2 {
  height: 210px;
  width: 210px;
  object-fit: cover;
  border: 5px solid;
}
.me-2:hover {
  box-shadow: 10px 10px 10px rgba(6, 240, 41, 0.514);
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
.mt-10 {
  display: flex;
  gap: 60px;
}
figure {
  position: relative;
}

.fig-9 {
  color: #fff;
  text-transform: uppercase;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
}
.exper {
  display: flex;
  background: #000;
  padding: 200px 100px 200px 100px;
}
.me {
  color: #fff;
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
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  .w10 {
    font-size: 0.7rem;
    line-height: 25px;
  }
  .w10 strong {
    font-size: 0.8rem;
    filter: brightness(60%);
  }
  .mt-10 {
    gap: 10px;
  }
  .exper {
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    align-items: center;
  }

  .fig-9 {
    padding: 10px 0 5px 0;
  }
}
</style>
