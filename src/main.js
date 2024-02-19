import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {autoClose: 3000});
Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
