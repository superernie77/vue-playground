import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import CompOne from './components/CompOne.vue'
import HttpCallExample from'./components/HttpCallExample.vue'
import FormExample from'./components/FormExample.vue'

const app = createApp(App)
app.component('food-item', FoodItem);
app.component('teleport-example', CompOne);
app.component('http-call', HttpCallExample);
app.component('form-example', FormExample);
app.mount('#app')
