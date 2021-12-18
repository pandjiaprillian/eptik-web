import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router/router';
import App from './App.vue'

createApp(App).use(router).mount('#app')
