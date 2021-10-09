import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, message, Modal } from 'ant-design-vue'

const app = createApp(App)
app.use(router).use(store).use(Button).mount('#app')

app.config.globalProperties.$message = message
app.config.globalProperties.$confirm = Modal.confirm 