import { acceptHMRUpdate, defineStore } from 'pinia'
import { User } from '@/types'
export const useUser = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[],
    pending: true,
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      this.users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then((response) => response.json())
      this.pending = false
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
