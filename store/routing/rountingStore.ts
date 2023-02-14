import { defineStore } from "pinia";

export const useRoutingStore = defineStore("routingStore", {
  state: () => ({
    map: null as any,
  }),
  actions: {
    getMap(map: any) {
      this.$patch((state) => {
        state.map = map;
      });

      this.createRoutingResult();
    },
    createRoutingResult() {
      const longDo = window.longdo;

      this.map.Route.placeholder(document.getElementById("result"));
      this.map.Route.search();
      this.map.Route.enableContextMenu();
      this.map.Route.auto(true);

      const starter = new longDo.Marker(
        { lon: 100.538316, lat: 13.764953 },
        { title: "Victory monument", detail: "You are here" }
      );

      const destination = new longDo.Marker(
        { lon: 100.5642298978206, lat: 13.808814402802708 },
        { title: "Komgrip Office", detail: "Your Destination" }
      );

      this.map.Route.add(starter);
      this.map.Route.add(destination);
      this.map.zoom(13);
    },
  },
});
