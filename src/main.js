import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

// Import Font Awesome icon components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import specific icons
import {
  faUser,
  faUserPen,
  faPaperPlane,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(faUser, faUserPen, faPaperPlane, faComment);

const app = createApp(App);

app.use(router);

// Register Font Awesome icon component
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
