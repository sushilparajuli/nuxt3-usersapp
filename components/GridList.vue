<template>
    <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                    <h3 class="text-gray-900 text-sm font-medium truncate">
                        {{ user.name }}
                    </h3>
                    <span class="
              flex-shrink-0
              inline-block
              px-2
              py-0.5
              text-green-800 text-xs
              font-medium
              bg-green-100
              rounded-full
            ">{{ user.username }}</span>
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
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid';
import { User } from '@/types';
export interface UserProps {
    user: User;
}

const props = defineProps<UserProps>();
</script>
