<template>
  <Transition name="translateX">
    <div
      v-if="isVisible"
      id="toast"
      class="relative bottom-0 right-2 flex items-center w-full min-w-80 max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-50"
      role="alert"
    >
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"
        :class="computedStyles"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            v-if="notification.type === 'success'"
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
          <path
            v-else-if="notification.type === 'error'"
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
          />
          <path
            v-else-if="notification.type === 'warning'"
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
          />
          <path
            v-else-if="notification.type === 'info'"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
          />
        </svg>
        <span class="sr-only">Icon</span>
      </div>
      <div class="flex flex-col">
        <div class="ms-3 text-sm font-normal">{{ notification.text }}</div>
        <div class="ms-3 text-xs font-normal text-green-600 dark:text-green-500">
          {{ getRelativeTimeString(notification.createdAt) }}
        </div>
      </div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
        @click="closeNotification"
      >
        <span class="sr-only">Close</span>
        <i class="pi pi-times" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import type { INotificationInterface } from '@/shared/lib/notifications';
  import { getRelativeTimeString } from '@/shared/lib/utils/relativeTimeString';

  // TODO: consider moving svg to independent files in the future
  const props = defineProps<{
    notification: INotificationInterface;
    delay: number;
  }>();

  const isVisible = ref(true);

  const computedStyles = computed<string>(() => {
    let styles;
    switch (props.notification.type) {
      case 'info':
        styles = 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200';
        break;
      case 'success':
        styles = 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200';
        break;
      case 'error':
        styles = 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200';
        break;
      case 'warning':
        styles = 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200';
        break;
      default:
        styles = 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200';
        break;
    }
    return styles;
  });

  onMounted(() => {
    setTimeout(() => {
      isVisible.value = false;
    }, 5000);
  });

  const closeNotification = () => (isVisible.value = false);
</script>

<style scoped>
  .translateX-enter-active {
    animation: translateX-in 0.5s;
  }
  .translateX-leave-active {
    animation: translateX-in 0.5s reverse;
  }
  @keyframes translateX-in {
    0% {
      transform: translateX(400px);
    }

    100% {
      transform: translateX(-40px);
    }
  }
</style>
