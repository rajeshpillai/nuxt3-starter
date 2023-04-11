<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam perspiciatis fuga deleniti! Incidunt quod eum voluptates eveniet. Quas, ea?</p>

    <div>
      {{  data  }}
    </div>
  </div>
</template>

<script setup>
  const {data} = await useFetch('/api/store');
</script>

<style scoped>

</style>