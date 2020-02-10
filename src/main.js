import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import icons from "./plugins/icons";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  icons,
  render: h => h(App)
}).$mount("#app");
