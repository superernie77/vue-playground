<template>
  <div>
    <h2>
      {{ foodName }}
      <img src="/img_quality.svg" v-show="foodIsFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
  </div>
</template>
  
<script>
export default {
  props: {
    foodName: {
      type: String,
      required: true
    },
    foodDesc: {
      type: String,
      default: 'This is the default description.'
    },
    isFavorite: Boolean
  },
  data() {
    return {
      foodIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleFavorite() {
      this.foodIsFavorite = !this.foodIsFavorite;
      this.$emit('toggle-Favorite', this.foodName);
    }
  }
};
</script>
  
<style>
img {
  height: 1.5em;
  float: right;
}
</style>