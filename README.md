# vue-playground


## How to create a new Vue project:

1. Download Node.js
2. create new blank proect with npm:
```
npm init vue@latest
```
3. download dependencies with npm:
```
npm install
```
3. run dev server:
```
npm run dev
```
4. app runs under localhot:5173

## How to create a new Component

1. create a new File (componentName.vue) in the components folder
```
<template>
    <div>
        <h2>I am new</h2>
    </div>
</template>
  
<script></script>
  
<style></style>
```
2. Register the component in the main.js fie:
```
import ComponentName from './components/componentName.vue'

const app = createApp(App)
app.component('component-name', ComponentName)
app.mount('#app')
```
3. The new component can be used by the <component-name> tag in your application