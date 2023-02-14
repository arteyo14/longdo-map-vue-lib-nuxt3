<script setup lang="ts">
import { useSearchStore } from "~~/store/search/searchStore";

const store = useSearchStore();

onUnmounted(() => store.$dispose());
</script>

<template>
  <div class="flex justify-center mx-auto w-[95%] my-8 gap-4">
    <div class="w-[60%]">
      <form class="flex flex-col mb-10" @submit.prevent="store.createSearch">
        <h1 class="text-5xl mb-7">ค้นหาสถานที่</h1>
        <label class="mb-6 text-2xl">Keyword</label>
        <input
          id="search"
          type="text"
          class="input input-bordered w-3/4 mb-4"
          placeholder="ค้นหาสถานที่ เช่น สยาม โรงเรียน ตลาด ..."
        />
        <button type="submit" class="btn btn-accent w-1/4">ค้นหา</button>
      </form>
      <h2>ผลการค้นหา</h2>
      <div id="result" class="h-[50vh] overflow-auto"></div>
    </div>

    <longdo-map class="w-[40%] h-[80vh]" @load="store.getMap" />
  </div>
</template>

<style scoped></style>
