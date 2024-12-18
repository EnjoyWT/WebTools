import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './store/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

pinia.use(piniaPluginPersistedstate)

app
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .mount('#app')
