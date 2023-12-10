<script setup>
import articles from "../assets/llmdb/llmdb.json";
</script>

<template>
  <div
    v-for="item in articles"
    :key="item.title"
    class="border-2 my-2 drop-shadow-2xl hover:drop-shadow-md rounded-2xl md:w-2/3"
  >
    <div class="mx-5 my-5">
      <p class="text-bold text-2xl">{{ item.title }}</p>
      <p class="text-semibold text-lg">Developer: {{ item.developer }}</p>
      <div v-for="para in item.paras">
        <p class="text-normal text-sm my-1">{{ para }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
