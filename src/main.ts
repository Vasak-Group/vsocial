import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
  faUserPlus,
  faGear,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

library.add(faRightToBracket, faRightFromBracket, faUserPlus, faGear, faHouse);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
