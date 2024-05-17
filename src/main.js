import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import coffee from './components/coffee.vue'
import noncoffee from './components/noncoffee.vue'
import tea from './components/tea.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component('coffee', coffee)
app.component('noncoffee', noncoffee)
app.component('tea', tea)