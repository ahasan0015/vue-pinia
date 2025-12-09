<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const submitForm = () => {
  console.log("Form Submitted:", form);

  // এখানে API কল করবেন
  // axios.post('/api/register', form)
};

</script>
<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">

        <div class="card shadow-sm border-0">
          <div class="card-header bg-primary text-white text-center">
            <h5 class="mb-0">User Registration</h5>
          </div>

          <div class="card-body">

            <form @submit.prevent="submitForm">

              <!-- Name -->
              <div class="mb-3">
                <label class="form-label">Full Name</label>
                <input
                  type="text"
                  v-model="form.name"
                  class="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label class="form-label">Email Address</label>
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="example@mail.com"
                />
              </div>

              <!-- Password -->
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  v-model="form.password"
                  class="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>

              <!-- Confirm Password -->
              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  v-model="form.password_confirmation"
                  class="form-control"
                  placeholder="Re-enter password"
                  required
                />
              </div>

              <!-- Submit -->
              <button class="btn btn-primary w-100">Register</button>

            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>


