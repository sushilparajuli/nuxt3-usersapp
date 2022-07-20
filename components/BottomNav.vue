<template>
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 text-white z-10 bg-teal-500 shadow">
        <div id="tabs" class="flex justify-between">
            <NuxtLink class="
          w-full
          transition
          duration-500
          ease-in-out
          focus:scale-110
          hover:scale-110
          justify-center
          inline-block
          text-center
          pt-2
          pb-1
        " to="/">
                <UsersIcon class="inline-block w-5 h-5" aria-hidden="true" />
                <span class="tab tab-home block text-xs">Users</span>
            </NuxtLink>
            <NuxtLink class="
          w-full
          transition
          duration-500
          ease-in-out
          focus:scale-110
          hover:scale-110
          justify-center
          inline-block
          text-center
          pt-2
          pb-1
        " to="/favourites">
                <HeartIcon class="inline-block w-5 h-5" aria-hidden="true" />
                <span class="tab tab-home block text-xs">Fav</span>
            </NuxtLink>
        </div>
    </section>
</template>
<script setup lang="ts">
import { UsersIcon, HeartIcon } from '@heroicons/vue/solid';

</script>
