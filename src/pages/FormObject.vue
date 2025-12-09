<script setup lang="ts">
import { useUserStore } from '@/store/User';
import { ref } from 'vue';

 interface User {
    id:number;
    name:string;
 }
 const userData = useUserStore();
 const user = ref<User>(userData.user);

function handelSubmit(){
    console.log(user.value);
    userData.user = user.value;
    userData.setLocal();
}

</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">

        <div class="card shadow-sm border-0">
          <div class="card-header bg-primary text-white text-center">
            <h5 class="mb-0">Update User</h5>
          </div>

          <div class="card-body">
            <form @submit.prevent ="handelSubmit">
              <!-- ID -->
              <div class="mb-3">
                <label class="form-label">ID</label>
                <input type="number" class="form-control" placeholder="Enter ID" v-model="user.id">
              </div>

              <!-- Name -->
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" placeholder="Enter Name" v-model="user.name">
              </div>

              <!-- Submit -->
              <div class="mb-3 text-center">
                <input type="submit" class="btn btn-success w-50" value="Update Value">
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
}

.card-header {
  font-weight: 600;
  letter-spacing: 0.5px;
}

input:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>
