<script setup lang="ts">
import { useClusterStore } from "~~/store/cluster/clusterStore";

const store = useClusterStore();

onMounted(() => {
  setTimeout(() => {
    store.initialCluster();
  }, 300);
});

onUnmounted(() => store.$dispose);
</script>
<template>
  <div class="flex justify-center my-8 w-[95%] h-[80vh] mx-auto">
    <longdo-map class="h-full w-full" @load="store.getMap" />
  </div>
</template>
