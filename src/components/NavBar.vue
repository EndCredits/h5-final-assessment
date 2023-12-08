<script setup>
import { ref } from "vue";

const count = ref(0);

const testmsg = ref("Hello World!");

var id = 0;

const mainItems = ref([
  { itemName: "Home", itemURL: "/" },
  { itemName: "About", itemURL: "/about" },
]);
</script>

<template>
  <div class="flex box-content p-4 border-4 rounded-xl shadow-xl items-center">
    <div class="flex">
      <img src="../assets/vue.svg" class="img_vue flex" />
    </div>
    <div class="flex ms-4">
      <p class="font-sans text-xl font-bold">Rhine Lab</p>
    </div>
    <div class="flex flex-row inset-y-0 ml-auto mr-4">
      <div class="mx-4" v-for="item in mainItems">
        <router-link :to="{ path: item.itemURL }">{{
          item.itemName
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.img_vue {
  height: 48px;
}

.img_vue:hover {
  filter: drop-shadow(0 0 0.75rem #00ffaa);
}

.img_vite {
  height: 96px;
}

.img_vite:hover {
  filter: drop-shadow(0 0 0.75rem #f700ff);
}
</style>
