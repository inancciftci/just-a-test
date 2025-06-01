<!-- components/NotificationTable.vue -->
<template>
  <div class="overflow-x-auto">
    <table class="w-full table-auto bg-white rounded-lg shadow overflow-hidden">
      <thead class="bg-white text-sm border-b border-gray-300">
        <tr class="text-gray-600 text-center sticky top-0 z-10 bg-white">
          <th class="p-2 min-w-[140px]">Notification Name</th>
          <th class="p-2">Category</th>
          <th class="p-2 min-w-[140px]">Type</th>
          <th class="p-2 min-w-[278px]">Available Methods</th>
          <th class="p-2">Default Methods</th>
          <th class="p-2">SMTP Provider</th>
          <th class="p-2">SMS Provider</th>
          <th class="p-2">Active</th>
          <th class="p-2">Operation</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <NotificationTableRow
          v-for="notification in notifications"
          :key="notification.id"
          :notification="notification"
        />
        <tr v-if="!notifications || notifications.length === 0">
            <td colspan="9" class="text-center p-4 text-gray-500">
                No notifications found.
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import NotificationTableRow, { type Notification } from './NotificationTableRow.vue';

defineProps<{
  notifications: Notification[];
}>();
</script>