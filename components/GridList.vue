<template>
    <li :style="isFavorite ? 'background-color: rgb(255 241 242)' : ''"
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate">
                <div class="flex items-center  justify-between  space-x-3">
                    <h3 class="text-gray-900 text-sm font-medium truncate">
                        {{ user.name }}
                    </h3>
                    <button v-if="!isFavorite" type="button" @click="favToggle"
                        class="inline-flex items-center justify-center p-2 rounded-3xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <SolidHeart v-if="user && isFav(user.id)" class="h-6 w-6 text-pink-400" aria-hidden="true" />
                        <HeartIcon v-else class="h-6 w-6 text-gray-400" aria-hidden="true" />

                    </button>

                </div>
                <p class="mt-1 text-gray-500 text-sm truncate">{{ user.website }}</p>
            </div>
        </div>
        <div>
            <div class="-mt-px flex divide-x divide-gray-200">
                <div class="w-0 flex-1 flex">
                    <a :href="`mailto:${user.email}`" class="
              relative
              -mr-px
              w-0
              flex-1
              inline-flex
              items-center
              justify-center
              py-4
              text-sm text-gray-700
              font-medium
              border border-transparent
              rounded-bl-lg
              hover:text-gray-500
            ">
                        <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                        <span class="ml-3">Email</span>
                    </a>
                </div>
                <div class="-ml-px w-0 flex-1 flex">
                    <a :href="`tel:${user.phone}`" class="
              relative
              w-0
              flex-1
              inline-flex
              items-center
              justify-center
              py-4
              text-sm text-gray-700
              font-medium
              border border-transparent
              rounded-br-lg
              hover:text-gray-500
            ">
                        <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                        <span class="ml-3">Call</span>
                    </a>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
import { MailIcon, PhoneIcon, HeartIcon as SolidHeart } from '@heroicons/vue/solid';
import { HeartIcon } from '@heroicons/vue/outline';
import { User } from '@/types';
export interface UserProps {
    user?: User;
    favList?: Set<number>;
    isFavorite?: boolean;
}
const emit = defineEmits(["favToggle"]);

const props = defineProps<UserProps>();

// emits favtoggle events
const favToggle = () => {
    emit("favToggle", props.user.id);
};

// to maintain favourite UI state for button
const isFav = (userId) => {
    if (props?.favList && props.favList.has(userId)) {
        return true
    }
    return false

}
</script>
