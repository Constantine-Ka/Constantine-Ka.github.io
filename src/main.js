import "./style.css";
/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router/index.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faBars, faPhone);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)

  .mount("#app");
