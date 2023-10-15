<template>
  <h1>Food</h1>
  <!--<food-item food-name="Apple" food-desc="I like apples" v-bind:is-favorite="false" />
  <food-item food-name="Banana" v-bind:is-favorite="false" />
  <food-item food-name="Cherry" food-desc="Cherries are great" v-bind:is-favorite="true" @toggle-favorite="receiveEmit" />
  <teleport-example></teleport-example>
  <http-call/>
  <form-example/>

  <message-example message="new message" v-bind:show2ndMessage="true"/>-->

  <!--<p>Choose what part of this page you want to see:</p>
  <button @click="activeComp = 'animal-collection'">Animals</button>
  <button @click="activeComp = 'food-items'">Food</button><br>
  <div>
    <component :is="activeComp"></component>
  </div>-->
  <http-call/>
</template>

<script>
//export default {
//  methods: {
//    receiveEmit(foodName) {
//      alert('Hello '+ foodName);
//    }
//  }
//};
export default {
  data() {
      return {
        activeComp: ''
      }
    }
}
</script>

<!--<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>-->

<style scoped>
  button {
    padding: 5px;
    margin: 10px;
  }
  div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }
</style>