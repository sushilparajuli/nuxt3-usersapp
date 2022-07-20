<template>
  <div v-if="userStore.pending">Loading...</div>
  <div v-else>
    <code>{{ userStore.users }}</code>
  </div>

</template>

<script setup lang="ts">
import { useUser } from '~/stores/users';
const userStore = useUser();
userStore.fetchUsers();
</script>

