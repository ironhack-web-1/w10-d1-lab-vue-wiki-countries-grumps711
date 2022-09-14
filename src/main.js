import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).mount('#app')


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
