<script lang="ts" setup></script>

<template>
  <div class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/"
        >LongdoMap</NuxtLink
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/datatable">Data Table</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search">Search</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/routing">Routing</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/heatmap">HeatMap</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
