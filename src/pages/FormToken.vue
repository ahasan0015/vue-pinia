<script setup lang="ts">
import { ref } from "vue";

const token = ref(localStorage.getItem('token') || '');

const login = () => {
  // pretend API call
  token.value = 'abc123';
  localStorage.setItem('token', token.value);
};

const logout = () => {
  token.value = '';
  localStorage.removeItem('token');
};
</script>

<template>
  <div>
    <p>Token: {{ token }}</p>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>
