<script setup lang="ts">
import { useHeatMapStore } from "~~/store/heatmap/heatmapStore";

const store = useHeatMapStore();

onMounted(() => {
  setTimeout(() => {
    store.createHeatMapScript();
  }, 300);
});

onUnmounted(() => store.$dispose());
</script>

<template>
  <div class="flex justify-center w-[95%] mx-auto my-8">
    <longdo-map class="h-[80vh] w-full" @load="store.getMap" />
  </div>
</template>
