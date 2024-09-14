import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/main.scss";

const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId:
    "884599400137-gf06hcdou1nt44pkv5t8j2nfvg4qn9am.apps.googleusercontent.com",
});
app.use(store);
app.mount("#app");
