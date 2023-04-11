<template>
   <header>
      <nav>
        <NuxtLink to="/">Nuxt</NuxtLink>
        <ul>
          <li><NuxtLink  to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- outut the page content-->
    <slot/>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>