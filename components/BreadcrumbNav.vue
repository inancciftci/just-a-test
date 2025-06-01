<!-- components/BreadcrumbNav.vue -->
<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-2 text-sm font-thin">
      <template v-for="(item, index) in items" :key="item.to || item.text">
        <NuxtLink
          v-if="!item.disabled && item.to"
          :to="item.to"
          class="text-slate-500 hover:text-slate-700"
        >
          {{ item.text }}
        </NuxtLink>
        <span v-else :class="item.disabled ? 'font-[400]' : 'text-slate-400'">
          {{ item.text }}
        </span>
        <i
          v-if="index < items.length - 1"
          class="fa-solid fa-chevron-right text-slate-400"
        ></i>
      </template>
    </div>
    <NuxtLink
      to="/notifications/create"
      class="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#ED502F] text-white cursor-pointer text-sm hover:bg-opacity-90"
    >
      <i class="fa-solid fa-plus"></i> New Notification
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  text: string;
  to?: string;
  disabled?: boolean;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>