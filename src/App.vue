<script setup lang="ts">
  import { RouterView } from 'vue-router';

import Home from '@/pages/Home.vue';
import Navbar from './layouts/Navbar.vue';
</script>
<template>
  <div>
  <Navbar></Navbar>
  <RouterView/>  
  </div>
  
 

</template>

<style scoped>

</style>