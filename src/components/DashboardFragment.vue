<script setup>
import { ref } from "vue";

const msg = ref("Vue 3 + Vite");
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <img class="w-48 h-48 img_dash_log" src="../../public/vite.svg" />
    <div class="box-border w-128 p-4 rounded-2xl">
      <p class="text-center text-3xl font-bold">
        A Large Language Model Data Base
      </p>
    </div>
    <button class="box-border p-2 border-4 border-gray-400 rounded-2xl">
      Click to start
    </button>
  </div>
</template>

<style>
.img_dash_log:hover {
  filter: drop-shadow(0 0 0.75rem #f700ff);
}
</style>
