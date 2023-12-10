<script setup>
import articles from "../assets/llmdb/llmdb.json";
</script>

<template>
  <div
    v-for="item in articles"
    :key="item.title"
    class="mx-2 border-2 my-2 drop-shadow-2xl hover:drop-shadow-md rounded-2xl lg:w-1/2"
  >
    <p class="text-bold text-xl mt-4 mx-2">{{ item.title }}</p>
    <p class="text-semibold text-lg my-1 mx-2">
      Developer: {{ item.developer }}
    </p>
    <div v-for="para in item.paras">
      <p class="text-normal text-sm mx-2">{{ para }}</p>
    </div>
    <div class="mb-4"></div>
  </div>
</template>

<style scoped></style>
