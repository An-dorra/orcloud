import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'
import './styles/main.css'

// Register the router before mounting so route components render immediately.
createApp(App).use(router).mount('#app')
