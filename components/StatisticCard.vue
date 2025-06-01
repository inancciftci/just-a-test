<!-- components/StatisticCard.vue -->
<template>
  <div class="flex flex-col gap-4 bg-white rounded-lg p-4 relative overflow-hidden shadow-md">
    <h2 class="text-md font-bold">{{ title }}</h2>
    <div class="mt-2 text-4xl font-semibold text-gray-800">{{ value }}</div>
    <p class="mt-1 text-xs text-gray-400">{{ description }}</p>
    <img
      v-if="imageUrl"
      :src="imageUrl"
      class="w-32 h-32 md:w-40 md:h-40 absolute right-0 top-2"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string | number;
  description: string;
  imageUrl?: string;
}>();
</script>