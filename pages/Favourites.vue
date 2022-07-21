<template>
    <div class="flex flex-col justify-center font-medium items-center">
        <div class="w-full sm:5/6 lg:w-4/6 py-4">
            <template v-if="userStore.favlist.length">
                <ul role="list" class="grid px-5 pb-20 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <GridList v-for="user in userStore.favlist" :key="user.id" :user="user" is-favorite />
                </ul>
            </template>
            <template v-else>
                <div class="flex flex-col items-center">
                    <h1>Please click on <span class="text-3xl" aria-hidden="true">♡</span> to add your favorite user
                    </h1>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { DocumentSearchIcon, HeartIcon } from "@heroicons/vue/solid"
import { useUser } from '~/stores/users';
const userStore = useUser();
</script>