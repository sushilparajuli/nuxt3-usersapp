<template>
  <div class="flex flex-col justify-center font-medium items-center py-4" v-if="userStore.pending">Loading...</div>
  <div class="flex flex-col justify-center font-medium items-center" v-else>
    <div class="sm:5/6 lg:w-4/6">
      <Search @searchInput="searchParams" />
      <template v-if="userStore.users.length">
        <ul role="list" class="grid px-5 pb-20 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GridList v-for="user in userStore.users" :key="user.id" :user="user" />
        </ul>
      </template>
      <template v-else>
        <div class="flex flex-col items-center">
          <DocumentSearchIcon class="w-28 h-28" aria-hidden="true" />
          <h1> User not found, Please try with other</h1>
        </div>
      </template>
    </div>
  </div>

</template>

<script setup lang="ts">
import { DocumentSearchIcon } from "@heroicons/vue/solid"
import { useUser } from '~/stores/users';
const userStore = useUser();
userStore.fetchUsers('');

const searchParams = (e) => {
  userStore.fetchUsers(e);
};
</script>

