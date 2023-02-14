<script lang="ts" setup>
import { useMapStore } from "~~/store/mapStore.js";
import { Line } from "~~/public/ts/road";
import { roadDataTable as data } from "~~/public/ts/roadtable";

const store = useMapStore();

onUnmounted(() => store.$dispose());
</script>

<template>
  <div class="w-[90%] m-auto my-8">
    <longdo-map
      class="h-[80vh] flex justify-center w-full"
      @load="store.getMap"
    />
  </div>
</template>

<style scoped></style>
