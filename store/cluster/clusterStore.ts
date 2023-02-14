import { defineStore } from "pinia";

export const useClusterStore = defineStore("clusterStore", {
  state: () => ({
    map: null as any,
  }),
  actions: {
    getMap(map: any) {
      this.$patch((state) => {
        state.map = map;
      });
    },
    initialCluster() {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/assets/css/MarkerCluster.Default.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "/js/longdomap.markercluster-src.js";
      script.id = "markercluster";
      document.head.appendChild(script);

      script.onload = () => {
        const longdo = window.longdo;
        let markercluster;
        let limit = 4000;
        markercluster = new lmc.MarkerCluster(this.map, {});
        var loc = this.map.location();
        while (limit--) {
          var lat = 13.689128 + (Math.random() - 0.5) * 10,
            lon = 100.491781 + (Math.random() - 0.5) * 10;
          markercluster.addMarkers(
            new longdo.Marker({ lat: lat, lon: lon }, {})
          );
        }
        markercluster.render();
      };
    },
  },
});
