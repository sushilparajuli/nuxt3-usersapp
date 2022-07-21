import { acceptHMRUpdate, defineStore } from "pinia";
import { User } from "@/types";
export const useUser = defineStore({
  id: "user",
  state: () => ({
    users: [] as User[],
    pending: true,
  }),
  getters: {},
  actions: {
    async fetchUsers(searchName: string) {
      this.pending = true;
      let url =
        searchName === ""
          ? `https://jsonplaceholder.typicode.com/users`
          : `https://jsonplaceholder.typicode.com/users?name=${searchName}`;

      this.users = await fetch(url).then((response) => response.json());
      this.pending = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
