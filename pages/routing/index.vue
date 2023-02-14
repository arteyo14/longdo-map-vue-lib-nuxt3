<script setup lang="ts">
import { useRoutingStore } from "~~/store/routing/rountingStore";

const store = useRoutingStore();

// onMounted(() => store.createRoutingResult());
onUnmounted(() => store.$dispose());
</script>

<template>
  <div class="flex justify-center my-8 mx-auto w-[95%] gap-4">
    <div id="result" class="w-[60%] h-[50vh] overflow-auto">Result Here</div>
    <longdo-map class="w-[40%] h-[80vh]" @load="store.getMap" />
  </div>
</template>
