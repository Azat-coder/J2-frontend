<template>
  <div
    class="notifications fixed right-0 bottom-0"
    style="z-index: 100"
  >
    <AppNotification
      v-for="(notification, i) in store.notifications"
      :key="i"
      :notification="notification"
      :delay="delay"
    />
  </div>
</template>

<script setup lang="ts">
  import { AppNotification } from '@/shared/ui/AppNotification';
  import { useNotificationsStore } from '@/shared/lib/notifications';
  import { APP_NOTIFICATIONS_DELAY as delay } from '../constants'

  const store = useNotificationsStore();
</script>
