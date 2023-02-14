import { defineStore } from "pinia";

export const useHeatMapStore = defineStore("HeatMapStore", {
  state: () => ({
    map: null as any,
    testData: {
      max: 10,
      data: [
        { lat: 60.087195, lon: 84.767761, value: 8 },
        { lat: 41.804724, lon: -104.021301, value: 4 },
      ],
    },
    cfg: {
      radius: 25,
      maxOpacity: 0.5,
      scaleRadius: true,
      useLocalExtrema: true,
    },
  }),
  actions: {
    getMap(map: any) {
      this.$patch((state) => {
        state.map = map;
      });
    },
    createHeatMapScript() {
      const scriptHeatMap = document.createElement("script");
      scriptHeatMap.type = "text/javascript";
      scriptHeatMap.src = "/js/heatmap.js";
      scriptHeatMap.id = "heatmap";
      document.body.appendChild(scriptHeatMap);

      scriptHeatMap.onload = () => {
        this.scriptLongDoHeatMap();
      };
    },
    scriptLongDoHeatMap() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "/js/longdo-heatmap.js";
      script.id = "longdo-heatmap";
      document.body.appendChild(script);

      script.onload = () => {
        const heatmapLayer = new HeatmapOverlay(this.cfg);
        heatmapLayer.setData(this.testData);

        this.map.Layers.add(heatmapLayer);
      };
    },
  },
});
