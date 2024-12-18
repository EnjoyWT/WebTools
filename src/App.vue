

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main class="flex justify-center">
    <RouterView />
  </main>
  <Button
        @click="addBFriend()"
        severity="contrast"
      >企业微信被动加好友</button>
</template>

<script setup>
import { Button } from 'primevue'

</script>

<style scoped>
</style>