<template>
  <div>
    <h2>Products Layout</h2>
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt  Merch</NuxtLink>
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <ul >
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Merch</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>