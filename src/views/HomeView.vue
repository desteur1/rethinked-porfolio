<!-- using data instead of src in the v-for loop allows you to access both the image source and the tag for each item in imageSources. By structuring your data as an object with properties, you can easily manage multiple attributes related to each image -->

<template>
  <body>
    <main>
      <AboutView></AboutView>
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
        <div class="image-section">
          <div
            v-for="(data, key) in imageSources"
            :key="key"
            class="image-sizing"
          >
            <!-- This syntax binds the src attribute of the img element to the src
          variable from the v-for loop. This means each image will use the
          corresponding URL from the imageSources object.
          src is just a variable name used in the loop. You could indeed choose a different name if you wanted to. -->
            <img
              :src="data.src"
              :alt="`${key} image`"
              @click="openModal(key)"
              class="image-size"
            />
            <p class="image-text">{{ data.tag }}</p>
            <!-- :key attribute in the v-for loop is used to provide a unique identifier for each item in the loop.
           :alt="${key} image" uses a template string to include the key variable in the alt text, making it unique for each image. -->

            <DynamicModal :isVisible="modals[key]" @close="closeModal(key)">
              <template v-if="key === 'cv'">
                <div class="container">
                  <h2>CV EN LIGNE</h2>
                  <p>
                    à été créé le
                    <time datetime="2024-01-21">01 janvier 2024</time>
                  </p>

                  <div>
                    <h2>les langages utilisés</h2>
                    <ul>
                      <li>html</li>
                      <li>css</li>
                    </ul>
                  </div>
                  <div class="site-link">
                    <a href="https://desteur1.github.io/correction-CV/"
                      >lien vers mon site CV en ligne</a
                    >
                    <a href="https://github.com/desteur1/correction-CV"
                      >mon CV dans mon repository github</a
                    >
                  </div>
                </div>
              </template>
              <template v-else-if="key === 'dynamic'">
                <div class="container">
                  <h2>home space</h2>
                  <p>
                    à été créé le
                    <time datetime="2024-03-20">20 mars 2024</time>
                  </p>
                  <div>
                    <h2>les langages utilisés</h2>
                    <ul>
                      <li>html</li>
                      <li>css</li>
                    </ul>
                  </div>
                  <div class="site-link">
                    <a href="https://desteur1.github.io/my-home-space/"
                      >lien vers mon site my home space</a
                    >
                    <a href="https://github.com/desteur1/my-home-space"
                      >my home space sur github</a
                    >
                  </div>
                </div>
              </template>
              <template v-else-if="key === 'form'">
                <div class="container">
                  <h2>formulaire dynamique</h2>
                  <p>
                    a été créé le
                    <time datetime="2024-04-18">18 avril 2024</time>
                  </p>
                  <div>
                    <h2>les langages utilisés</h2>
                    <ul>
                      <li>html</li>
                      <li>css</li>
                      <li>javascript</li>
                    </ul>
                  </div>
                  <div class="site-link">
                    <a href=" https://desteur1.github.io/commentaire_dynamique/"
                      >lien vers mon site commentaire dynamique</a
                    >
                    <a href="https://github.com/desteur1/commentaire_dynamique"
                      >mon commentaire dynamique sur github</a
                    >
                  </div>
                </div>
              </template>
            </DynamicModal>
          </div>
        </div>
      </section>
    </main>
  </body>
  <ContactForm></ContactForm>
</template>

<script>
import DynamicModal from "@/components/MyModals.vue";
import ContactForm from "@/components/ContactForm.vue";
import AboutView from "./AboutView.vue";

export default {
  components: {
    DynamicModal,
    ContactForm,
    AboutView,
  },
  data() {
    return {
      imageSources: {
        cv: { src: "images/cv.jpg", tag: "My CV Project (Responsive)" },
        dynamic: {
          src: "images/dynamic.jpg",
          tag: "HomeSpace (Not Responsive)",
        },
        form: { src: "images/form.jpg", tag: "Form Project (Responsive)" },
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

.w20 h2 {
  font-size: 3rem;
  text-transform: uppercase;
  color: greenyellow;
}

/* image sizing */
.image-section {
  width: 60%;
}
.image-sizing {
  display: inline-block;
  margin: 5px;
}
.image-size {
  height: 250px;
  width: 250px;
}

.image-size:hover {
  box-shadow: 10px 10px 10px rgba(6, 240, 41, 0.514);
}
/* image-text */
.image-text {
  color: greenyellow;
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

.me-2:hover {
  box-shadow: 10px 10px 10px rgba(6, 240, 41, 0.514);
}

.w20 {
  width: 40%;
  display: flex;
  align-items: center;
}

.exper {
  display: flex;
  background: #000;
  padding: 200px 100px 100px 100px;
}
.me {
  color: #fff;
}
/* CV , homespace and dynamic form styling */
.container h2 {
  color: greenyellow;
  text-align: center;
  text-transform: uppercase;
}
.container p,
li {
  text-align: center;
  padding: 5px;
}
ul {
  list-style: none;
  text-transform: uppercase;
}

.site-link {
  display: flex;
  flex-direction: column;
}
.site-link a {
  text-decoration: none;
  padding: 5px;
  text-transform: capitalize;
}
.site-link a:active {
  color: red;
}
.site-link a:hover {
  color: greenyellow;
}
/* homespace styling */

@media (min-width: 811px) and (max-width: 1195px) {
  .exper {
    display: block;
    text-align: center;
  }
  .w20 {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
  .image-section {
    width: 100%;
  }
}

@media (max-width: 810px) {
  .w20 h2 {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  .image-size {
    height: 200px;
    width: 200px;
  }
  .image-section {
    width: 100%;
    text-align: center;
  }

  .exper {
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    align-items: center;
  }
  .w20 {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
}
</style>
