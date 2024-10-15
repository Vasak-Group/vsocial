import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
  faUserPlus,
  faGear,
  faHouse,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

library.add(
  faRightToBracket,
  faRightFromBracket,
  faUserPlus,
  faGear,
  faHouse,
  faMoon,
  faSun
);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.mount("#app");
