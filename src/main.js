import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from '/@/router'
import pinia from './stores'
import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)

// 注册图标组件
for (const i in Icons) {
    app.component(i, Icons[i])
  }

app.use(pinia)
setupRouter(app)
app.mount('#app')
