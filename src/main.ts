import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from "pinia"

const pinia = createPinia()

//createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
createApp(App).use(VueAxios, axios).use(router).use(pinia).mount('#app')