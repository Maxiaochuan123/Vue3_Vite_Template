/*
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-18
 */

// 样式重置
import 'normalize.css';
import '@assets/styles/reset/index.scss';

// 对应环境设置 网页标题
import '@plugins/documentTitle';

// Vue
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// Vue-Router
import router from './router';
app.use(router);

// Pinia
import { createPinia } from 'pinia';
import { piniaPersistence } from '@plugins/piniaPersistence';
const store = createPinia();
store.use(piniaPersistence()); // pinia 持久化
app.use(store);

app.mount('#app');
