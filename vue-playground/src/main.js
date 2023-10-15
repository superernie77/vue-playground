import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import CompOne from './components/CompOne.vue'
import HttpCallExample from'./components/HttpCallExample.vue'
import FormExample from'./components/FormExample.vue'
import MessageExample from'./components/MessageExample.vue'

// Routing Example Components
import MessageExample from'./routingexample/FoodItems.vue'
import MessageExample from'./routingexample/AnimalCollection.vue'

const app = createApp(App)
app.component('food-item', FoodItem);
app.component('teleport-example', CompOne);
app.component('http-call', HttpCallExample);
app.component('form-example', FormExample);
app.component('message-example', MessageExample);

// Routing example
app.component('food-items', FoodItems);
app.component('animal-collection', AnimalCollection);


app.mount('#app')


