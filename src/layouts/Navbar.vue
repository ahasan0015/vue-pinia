<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
    <div class="container">

      <!-- Brand -->
      <a class="navbar-brand fw-bold" href="#">
        MyApp
      </a>

      <!-- Toggler (only for small screens) -->
      <button
        class="navbar-toggler d-md-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <RouterLink to="/" class="nav-item">
            <a class="nav-link active">Home</a>
          </RouterLink>
          <RouterLink  to="/from" >
            <a class="nav-link">Form</a>
          </RouterLink>
          <RouterLink to="/fromo" class="nav-item">
            <a class="nav-link">FromObject</a>
          </RouterLink>
          <li class="nav-item">
            <RouterLink to="/formtoken" class="nav-link" href="#">TokenFrom</RouterLink>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {};
</script>
