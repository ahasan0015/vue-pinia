<script setup>
import { useCounterStore } from '@/store/counter';

const counter =useCounterStore();
</script>
<template>
    <h1> Piana Test</h1>
    <h2>Counter: {{counter.count }}</h2>
    <h2>Counter: {{counter.countResult }}</h2>

</template>