<template>
    <div>
        <h2>{{ foodName }}</h2>
        <p>{{ foodMessage }}</p>
    </div>
</template>
  
<script>
export default {
    props: [
      'foodName',
      'foodMessage'
    ],
    data() {
        return {
            name: 'Apples',
            message: 'I like apples'
        }
    }
};
</script>
  
<style></style>