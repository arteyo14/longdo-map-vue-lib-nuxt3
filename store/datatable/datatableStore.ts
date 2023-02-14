import { defineStore } from "pinia";
import { roadData, roadDataTable as data } from "~/public/ts/roadtable";

export const useDataTableStore = defineStore("dataTableStore", {
  state: () => ({
    map: null as any,
    positions: {
      lon: 100.51732790995302,
      lat: 13.814726244686398,
    },
  }),
  actions: {
    getMap(map: any) {
      this.$patch((state) => {
        state.map = map;
      });

      this.createLine();
    },
    positionsChanged(state: any) {
      if (this.map) {
        this.map.location({
          lon: state.lon,
          lat: state.lat,
        });
      }

      this.map.zoom(18);
    },
    getPositions(item: roadData) {
      this.$patch((state) => {
        state.positions.lon = item.lon;
        state.positions.lat = item.lat;
      });
    },
    createLine() {
      const longdo = window.longdo;

      const polyline = new longdo.Polyline(
        data.map(
          (item) => {
            return { lon: item.lon, lat: item.lat };
          },
          {
            lineWidth: 4,
            lineColor: "rgb(255,0,0)",
            pointer: true,
          }
        )
      );

      this.map.Overlays.add(polyline);
    },
  },
});
