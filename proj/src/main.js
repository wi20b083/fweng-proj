import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router';
import {store} from './store/index';
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)


app.use(store)
app.use(router)
app.use(Toaster)


app.mount('#app')




