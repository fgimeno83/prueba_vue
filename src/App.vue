<template>
  <div>
    <router-link :to="{ name: 'personal' }" >Personal</router-link>
     - 
    <router-link :to="{ name: 'video' }" >Videos</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
