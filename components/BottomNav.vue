<template>
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 text-sky-300 z-10 py-2 bg-slate-800 shadow">
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
<style scoped>
/* home route and active route will show in bold as it matches / and /about */
.router-link-active {
    color: rgb(244 114 182/var(--tw-text-opacity));
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>