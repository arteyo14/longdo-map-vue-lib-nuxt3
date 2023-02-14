<script setup lang="ts">
import { roadDataTable as data, roadData } from "../../public/ts/roadtable";
import { useDataTableStore } from "~~/store/datatable/datatableStore";

const store = useDataTableStore();

const watchPosChanging = store.$subscribe(() => {
  store.positionsChanged(store.positions);
});

onUnmounted(() => {
  store.$dispose();
  store.$reset();
});
</script>

<template>
  <div class="w-[95%] mx-auto my-8 flex justify-center gap-8">
    <div class="w-[60%]">
      <table class="table .table-hover">
        <thead class="thead-dark">
          <tr class="text-center">
            <th>ID</th>
            <th>KM Start</th>
            <th>KM End</th>
            <th>Lat</th>
            <th>Lon</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item of data"
            :key="item.id"
            class="text-center hover hover:bg-green-600"
            :class="{ active: store.dataSelected === item.id }"
            @click="
              () => {
                store.toggleDataSelected(item);
              }
            "
            style="cursor: pointer"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.kmStart }}</td>
            <td>{{ item.kmEnd }}</td>
            <td>{{ item.lat }}</td>
            <td>{{ item.lon }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <longdo-map class="w-[100%] h-[80vh]" @load="store.getMap" />
  </div>
</template>
