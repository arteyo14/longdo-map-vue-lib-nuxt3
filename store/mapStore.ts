import { defineStore } from "pinia";
import { roadData } from "~/public/ts/roadtable";
import { Line } from "~~/public/ts/road";

export type Coordinator = {
  lon: number;
  lat: number;
};

export const useMapStore = defineStore("mapStore", {
  state: () => ({
    map: null as any,
  }),
  actions: {
    getMap(map: any) {
      this.$patch((state) => {
        state.map = map;
        state.map.zoom(10);
      });
      this.addRoute();
      this.addShoppingTags();
      this.createMapUi();
    },
    addRoute() {
      const longdo = window.longdo;

      const lineArray = Line.map((item) => {
        return longdo.Util.overlayFromWkt(item);
      });

      const addRoad = lineArray.map((item: any) => {
        return this.map.Overlays.add(item[0]);
      });

      return addRoad;
    },
    addShoppingTags() {
      this.map.Tags.add("hotel", {
        area: 10,
      });
    },
    createMapUi() {
      const longdo = window.longdo;

      const menu = new longdo.MenuBar({
        dropdown: [{ label: "WMS" }, { label: "TMS" }, { label: "Clear" }],
        dropdownLabel: "Data",
        change: this.createWMS,
      });

      this.map.Ui.add(menu);
    },
    changeMenu(item1: any) {
      console.log("item1 is:", item1.value);
    },
    createWMS(item1: any) {
      const longdo = window.longdo;

      const WMS = new longdo.Layer("bluemarble_terrain", {
        type: longdo.LayerType.WMS,
        url: "https://ms.longdo.com/mapproxy/service",
        // zoomRange: { min: 1, max: 9 },
        refresh: 180,
        opacity: 0.5,
        weight: 10,
      });

      const TMS = new longdo.Layer("", {
        type: longdo.LayerType.TMS,
        url: "https://ms.longdo.com/mapproxy/tms/1.0.0/bluemarble_terrain/EPSG3857",
      });

      if (item1.value === "WMS") {
        this.map.Layers.remove(TMS);
        this.map.Layers.add(WMS);
      } else if (item1.value === "TMS") {
        this.map.Layers.remove(WMS);
        this.map.Layers.add(TMS);
      } else if (item1.value === "Clear") {
        this.map.Layers.clear();
      } else {
        return;
      }
    },
  },
});
