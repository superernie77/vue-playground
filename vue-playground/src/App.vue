<template>
  <!--<h1>Food</h1>
  <food-item food-name="Apple" food-desc="I like apples" v-bind:is-favorite="false" />
  <food-item food-name="Banana" v-bind:is-favorite="false" />
  <food-item food-name="Cherry" food-desc="Cherries are great" v-bind:is-favorite="true" @toggle-favorite="receiveEmit" />
  <teleport-example></teleport-example>
  <http-call/>-->
  <form-example/>
</template>

<script>
export default {
  methods: {
    receiveEmit(foodName) {
      alert('Hello '+ foodName);
    }
  }
};
</script>

<style>
#app>div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>