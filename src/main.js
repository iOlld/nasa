import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import componentsPlugin from './plugins/components'

// import 'maz-ui/css/main.css'
import './assets/scss/index.scss'

const app = createApp(App)
	.use(router)
	.use(store)
	.use(componentsPlugin)

app.mount("#app");
