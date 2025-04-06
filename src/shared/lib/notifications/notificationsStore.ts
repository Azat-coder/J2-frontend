import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { INotificationInterface, NotificationType } from './model/types';
import { useSpeechSynthesisStore } from '@/shared/lib/speechSynthesis/speechSynthesisStore';

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<INotificationInterface[]>([]);
  const speechSynthesisStore = useSpeechSynthesisStore();

  const pushNotification = (text: string, type: NotificationType) => {
    const notification = {
      text,
      type,
      createdAt: new Date(Date.now()),
    };
    notifications.value.push(notification);
    speechSynthesisStore.play(notification.text);
  };

  return { notifications, pushNotification };
});

// TODO: consider making notifications closable by method from store in the future along with closing by timeout (when necessary)
