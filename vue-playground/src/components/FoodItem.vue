<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="/img_quality.svg" v-show="isFavorite" >
        </h2>
        <p>{{ foodDesc }}</p>
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
        type:String,
        default: 'This is the default description.'
      },
      isFavorite: Boolean
    },
    data() {
        return {
            name: 'Apples',
            message: 'I like apples'
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