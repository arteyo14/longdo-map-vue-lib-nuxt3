import { defineStore } from "pinia";

export const useRainStore = defineStore("rainViewer", {
  state: () => ({
    map: null as any,
  }),
  actions: {
    getMap(map: any) {
      this.$patch((state) => {
        state.map = map;
      });
    },
    initialRainViewer() {
      const script = document.createElement("script");
      script.src = "/js/rainradar.js";
      script.id = "rainViewer";
      document.head.appendChild(script);

      script.onload = () => {
        const longdo = window.longdo;
        this.map.location(longdo.LocationMode.Geolocation);
        const rainRadar = new RainRadar(this.map, {
          opacity: 0.5,
          color: 2,
          tileSize: 256,
          speed: 500,
          timeDisplay: "timeradar",
        });
      };
    },
  },
});
