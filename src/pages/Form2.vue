<script setup lang="ts">
import { defaultCategory, type Category } from '@/interfaces/Category';
import axios from 'axios';
import { ref } from 'vue';

let post = ref<Category>(defaultCategory);

function handleSubmit() {
    // console.log(post.value.name);
    // console.log(post.value.is_inactive);
    const is_inactive = post.value.is_inactive ? 0 : 1;

    let formData = new FormData();
    formData.append('name', post.value.name);
    formData.append('is_inactive', is_inactive.toString());

    formData.forEach((value, key) => {
        console.log(key + ' : ' + value);
    });

    axios.post('http://127.0.0.1:8000/api/categories', formData)
    .then(response => {
        console.log(response.status);
        // if(response.status === 201) {
        //     post.value.name = '';
        //     post.value.is_inactive = false;
        //     alert('Category created successfully');
        // }
    })
    .catch(error => {
        console.log(error);
    })
}
</script>

<template>
    <h3>Create New Category</h3>
    <form @submit.prevent=handleSubmit>
        <div class="mb-3">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="post.name">            
        </div>
        <div class="mb-3">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="post.is_inactive" id="chkActive">
                <label class="form-check-label" for="chkActive">
                    Active
                </label>
            </div>
        </div>
        <div class="mb-3">
            <button class="btn btn-success">Save</button>
        </div>
    </form>
</template>

<style scoped>

</style>