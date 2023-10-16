import './assets/main.css'

import { createApp } from 'vue'

// Required for the Router
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
//import FoodItem from './components/FoodItem.vue'
//import CompOne from './components/CompOne.vue'
//import HttpCallExample from'./components/HttpCallExample.vue'
//import FormExample from'./components/FormExample.vue'
//import MessageExample from'./components/MessageExample.vue'

// Routing Example Components
import FoodItems from'./routingexample/FoodItems.vue'
import AnimalCollection from'./routingexample/AnimalCollection.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});
// End Routing Example

const app = createApp(App)
app.use(router);
app.mount('#app')

//app.component('food-item', FoodItem);
//app.component('teleport-example', CompOne);
//app.component('http-call', HttpCallExample);
//app.component('form-example', FormExample);
//app.component('message-example', MessageExample);





