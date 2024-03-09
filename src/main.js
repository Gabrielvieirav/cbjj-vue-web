import 'primevue/resources/themes/lara-light-blue/theme.css'      
import 'primevue/resources/primevue.min.css'         
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.component('Button', Button)
app.component('InputText', InputText)
app.mount('#app')
