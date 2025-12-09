<script setup lang="ts">
    import { useCounterStore } from '@/store/counter';
    const counter =useCounterStore();
</script>
<template>
<h1>Welcome to Dashboard</h1>
<h2>{{ counter.count }}</h2>


</template>

<style>

</style>