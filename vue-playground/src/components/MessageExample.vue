<template>
    <div>
      <h2>{{ name }}</h2>
      <p>Message: {{ message }}</p>
      <p v-show="show2ndMessage"> Second Message: {{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Apples'
      }
    },
    props: {
        message : {
            type: String,
            required: true
        },
        show2ndMessage : Boolean
    }
  };
  </script>
  
  <style></style>