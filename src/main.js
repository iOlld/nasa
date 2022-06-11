import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import componentsPlugin from './plugins/components'

import './assets/scss/index.scss'

import 'primevue/resources/themes/saga-blue/theme.css'	//theme
import 'primevue/resources/primevue.min.css'	//core css
import 'primeicons/primeicons.css'	//icons

const app = createApp(App)
	.use(router)
	.use(store)
	.use(PrimeVue)
	.use(componentsPlugin)

app.mount("#app");
