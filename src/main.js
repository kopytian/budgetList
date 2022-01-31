import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@element-plus/icons';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
