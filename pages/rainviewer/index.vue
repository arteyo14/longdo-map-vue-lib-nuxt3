<script setup lang="ts">
import { useRainStore } from "~~/store/rainviewer/rainStore";

const store = useRainStore();

onMounted(() => {
  setTimeout(() => {
    store.initialRainViewer();
  }, 300);
});

onUnmounted(() => {
  store.$dispose();
});
</script>
<template>
  <div class="flex justify-center mx-auto w-[95%] my-8">
    <longdo-map class="w-full h-[80vh]" @load="store.getMap" />
  </div>
</template>
