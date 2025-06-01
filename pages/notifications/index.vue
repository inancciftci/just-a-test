<!-- pages/notifications/index.vue -->
<template>
  <div class="p-4"> 
    <main class="max-w-[1280px] bg-gray-100 flex flex-col gap-6 p-6 mx-auto rounded-lg">
      <BreadcrumbNav :items="breadcrumbItems" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatisticCard
          title="Total Notifications"
          value="74"
          description="Toplam oluşturulan bildirim sayısı"
          image-url="/assets/total.png"
        />
        <StatisticCard
          title="Active Notifications"
          value="21"
          description="Şu anda yayında olan bildirimler"
          image-url="/assets/active-2.png"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-2 gap-4">
        <div>
          <label for="filter-name" class="sr-only">Notification Name</label>
          <input
            type="text"
            id="filter-name"
            name="filter-name"
            placeholder="Bildirim adında ara..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            v-model="filters.name"
          />
        </div>
        <div>
          <label for="filter-active" class="sr-only">Active Status</label>
          <select
            id="filter-active"
            name="filter-active"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            v-model="filters.active"
          >
            <option value="all">Tümü</option>
            <option value="active">Aktif</option>
            <option value="inactive">Pasif</option>
          </select>
        </div>
        <div>
          <label for="filter-method" class="sr-only">Available Methods</label>
          <select
            id="filter-method"
            name="filter-method"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            v-model="filters.method"
          >
            <option value="all">Tüm Metodlar</option>
            <option value="site">Site</option>
            <option value="popup">Popup</option>
            <option value="telegram">Telegram</option>
            <option value="discord">Discord</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="push">Push</option>
          </select>
        </div>
      </div>

      <NotificationTable :notifications="filteredNotifications" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import BreadcrumbNav from '~/components/BreadcrumbNav.vue';
import StatisticCard from '~/components/StatisticCard.vue';
import NotificationTable from '~/components/NotificationTable.vue';

useHead({
  title: 'Notification List',
});

const breadcrumbItems = [
  { text: 'Dashboard', to: '/', disabled: false },
  { text: 'Notifications', to: '/notifications', disabled: true },
];

const allNotifications = ref([
  { id: '1', name: 'Comment ban', category: 'X', type: 'comment-ban', availableMethods: ['site', 'popup', 'telegram', 'discord'], defaultMethods: 'No selection', smtpProvider: '-', smsProvider: '-', active: true },
  { id: '2', name: 'User Signup', category: 'User', type: 'user-signup', availableMethods: ['email', 'sms'], defaultMethods: 'email', smtpProvider: 'MailGun', smsProvider: 'Twilio', active: true },
  { id: '3', name: 'Password Reset', category: 'User', type: 'password-reset', availableMethods: ['email'], defaultMethods: 'email', smtpProvider: 'SendGrid', smsProvider: '-', active: true },
  { id: '4', name: 'Order Confirmation', category: 'Order', type: 'order-confirm', availableMethods: ['email', 'sms'], defaultMethods: 'sms', smtpProvider: 'Postmark', smsProvider: 'Nexmo', active: true },
  { id: '5', name: 'Weekly Digest', category: 'Newsletter', type: 'weekly-digest', availableMethods: ['email'], defaultMethods: 'email', smtpProvider: 'Amazon SES', smsProvider: '-', active: true },
  { id: '6', name: 'Security Alert', category: 'Security', type: 'security-alert', availableMethods: ['email', 'push'], defaultMethods: 'push', smtpProvider: '-', smsProvider: '-', active: true },
  { id: '7', name: 'Subscription Expired', category: 'Billing', type: 'subscription-expired', availableMethods: ['email', 'sms'], defaultMethods: 'email', smtpProvider: 'MailChimp', smsProvider: 'Plivo', active: true },
  { id: '8', name: 'Invoice Generated', category: 'Billing', type: 'invoice-generated', availableMethods: ['email'], defaultMethods: 'email', smtpProvider: 'SendinBlue', smsProvider: '-', active: true },
  { id: '9', name: 'Account Verification', category: 'User', type: 'account-verification', availableMethods: ['email', 'sms'], defaultMethods: 'sms', smtpProvider: 'SparkPost', smsProvider: 'Twilio', active: true },
  { id: '10', name: 'Feedback Received', category: 'Feedback', type: 'feedback-received', availableMethods: ['email'], defaultMethods: 'email', smtpProvider: 'Mandrill', smsProvider: '-', active: true },
  { id: '11', name: 'Maintenance Notification', category: 'System', type: 'maintenance-notice', availableMethods: ['email', 'sms', 'push'], defaultMethods: 'email', smtpProvider: 'Mailgun', smsProvider: 'Nexmo', active: false },
]);

const filters = ref({
  name: '',
  active: 'all',
  method: 'all',
});

const filteredNotifications = computed(() => {
  return allNotifications.value.filter(notification => {
    const nameMatch = notification.name.toLowerCase().includes(filters.value.name.toLowerCase());
    const activeMatch = filters.value.active === 'all' || (filters.value.active === 'active' && notification.active) || (filters.value.active === 'inactive' && !notification.active);
    const methodMatch = filters.value.method === 'all' || notification.availableMethods.includes(filters.value.method);
    return nameMatch && activeMatch && methodMatch;
  });
});

</script>

<style scoped>
</style>