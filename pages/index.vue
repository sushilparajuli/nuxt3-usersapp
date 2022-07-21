<template>
  <div class="flex flex-col justify-center font-medium items-center">
    <div class="w-full sm:5/6 lg:w-4/6 py-4">
      <Search @searchInput="searchParams" />
      <div v-if="userStore.pending" class="p-4 text-center">Loading...</div>
      <template v-else>
        <template v-if="userStore.users.length">
          <ul role="list" class="grid px-5 pb-20 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GridList v-for="user in userStore.users" :key="user.id" :user="user" @fav-toggle="favToggle"
              :favList="userStore.favs" />
          </ul>
        </template>
        <template v-else>
          <div class="flex flex-col items-center">
            <DocumentSearchIcon class="w-28 h-28" aria-hidden="true" />
            <h1> User not found, Please try with other</h1>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentSearchIcon } from "@heroicons/vue/solid"
import { useUser } from '~/stores/users';
const userStore = useUser();
userStore.fetchUsers('');

// Search method based on the params
const searchParams = (e) => {
  userStore.favs.clear()
  userStore.fetchUsers(e);
};

// Favtoggle methods to toggle based on event
const favToggle = (e) => {
  if (userStore.favs.has(e)) {
    userStore.favs.delete(e)
  } else {
    userStore.favs.add(e)
  }
}
</script>

