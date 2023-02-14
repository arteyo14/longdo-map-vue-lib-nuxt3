import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    map: null as any,
  }),
  actions: {
    getMap(map: any) {
      this.$patch((state) => {
        state.map = map;
      });

      this.createSearch();
    },
    createSearch() {
      const search: any = document.getElementById("search");
      const resultSearch = document.getElementById("result");

      this.map.Search.search(search.value);
      this.map.Search.placeholder(resultSearch);
    },
  },
});
