<template>
  <h1>Food</h1>
  <!--<food-item food-name="Apple" food-desc="I like apples" v-bind:is-favorite="false" />
  <food-item food-name="Banana" v-bind:is-favorite="false" />
  <food-item food-name="Cherry" food-desc="Cherries are great" v-bind:is-favorite="true" @toggle-favorite="receiveEmit" />
  <teleport-example></teleport-example>
  <http-call/>
  <form-example/>

  <message-example message="new message" v-bind:show2ndMessage="true"/>-->

  <p>Choose what part of this page you want to see:</p>
  <router-link to="/animals">Animals</router-link>
  <router-link to="/food">Food</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>



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
  a {
    display: inline-block;
    background-color: black;
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 10px;
  }
  a:hover,
  a.router-link-active {
    background-color: rgb(110, 79, 13);
  }
  div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
  }
</style>