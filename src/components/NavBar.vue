<script setup>
import { ref } from "vue";

const mainItems = ref([
  { itemName: "Home", itemURL: "/" },
  { itemName: "Database", itemURL: "/database" },
  { itemName: "About", itemURL: "/about" },
]);
</script>

<template>
  <div class="md:flex md:flex-row md:box-content md:p-4 border-4 rounded-xl shadow-xl items-center flex flex-col my-auto mx-auto">
    <div class="md:flex md:flex-row md:justify-center">
      <div class="flex">
        <img src="../assets/vue.svg" class="img_vue flex md:my-auto mx-auto my-2" />
      </div>
      <div class="flex ms-4 my-auto">
        <p class="font-sans text-xl font-bold mx-auto">Rhine Lab</p>
      </div>
    </div>
    <div class="md:flex md:flex-row md:inset-y-0 md:ml-auto md:mr-4 flex flex-row">
      <div class="md:mx-4 md:my-auto mx-2 my-4" v-for="item in mainItems">
        <router-link
          class="border-4 p-2 border-gray-300 rounded-2xl drop-shadow-md hover:drop-shadow-2xl"
          :to="{ path: item.itemURL }"
          >{{ item.itemName }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.img_vue {
  height: 48px;
}

.img_vue:hover {
  filter: drop-shadow(0 0 0.75rem #00ffaa);
}
</style>
