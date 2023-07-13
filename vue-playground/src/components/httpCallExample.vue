<template>
  <h1>Example</h1>
  <p>Click the button to fetch data with an HTTP request.</p>
  <p>Each click generates an object with a random user from <a href="https://random-data-api.com/" target="_blank">https://random-data-api.com/</a>.</p>
  <p>The robot avatars are lovingly delivered by <a href="http://Robohash.org" target="_blank">RoboHash</a>.</p>
  <button @click="fetchData">Fetch data</button>
  <div v-if="data" id="dataDiv">
    <img :src="data.avatar" alt="avatar">
    <pre>{{ data.first_name + " " + data.last_name }}</pre>
    <p>"{{ data.employment.title }}"</p>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("https://random-data-api.com/api/v2/users");
      this.data = await response.json();
    }
  }
};
</script>