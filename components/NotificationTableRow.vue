<!-- components/NotificationTableRow.vue -->
<template>
  <tr class="bg-white odd:bg-gray-50 even:bg-white hover:bg-gray-100 border-b border-gray-200 text-center">
    <td class="p-2 whitespace-nowrap">{{ notification.name }}</td>
    <td class="p-2 whitespace-nowrap">{{ notification.category }}</td>
    <td class="p-2 whitespace-nowrap">{{ notification.type }}</td>
    <td class="p-2 whitespace-nowrap">
      <div class="flex flex-wrap items-center justify-center gap-1">
        <span
          v-for="method in notification.availableMethods"
          :key="method"
          class="bg-[#ED502F] px-2 py-1 rounded-lg text-white text-xs"
        >
          {{ method }}
        </span>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">{{ notification.defaultMethods }}</td>
    <td class="p-2 whitespace-nowrap">{{ notification.smtpProvider }}</td>
    <td class="p-2 whitespace-nowrap">{{ notification.smsProvider }}</td>
    <td class="p-2 whitespace-nowrap">
      <i
        :class="notification.active ? 'fa-solid fa-circle-check text-green-500' : 'fa-solid fa-circle-xmark text-red-500'"
      ></i>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="flex justify-center items-center gap-4">
        <button class="hover:text-amber-700" title="Copy">
          <i class="fa-solid fa-copy text-[#ED502F] text-md"></i>
        </button>
        <NuxtLink
          :to="`/notifications/${notification.id}/edit`"
          class="hover:text-green-700"
          title="Edit"
        >
          <i class="fa-solid fa-pen-to-square text-green-500 text-md"></i>
        </NuxtLink>
        <button class="hover:text-red-700" title="Delete">
          <i class="fa-solid fa-trash text-red-500 text-md"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
export interface Notification {
  id: string;
  name: string;
  category: string;
  type: string;
  availableMethods: string[];
  defaultMethods: string;
  smtpProvider: string;
  smsProvider: string;
  active: boolean;
}

defineProps<{
  notification: Notification;
}>();
</script>