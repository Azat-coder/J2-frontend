<script setup lang="ts">
  import { useNotificationsStore } from '@/shared/lib/notifications';
  import type { NotificationType } from '@/shared/lib/notifications/model';
  import Button from 'primevue/button';

  const notifications = useNotificationsStore();

  const sendNotification = (text: string, val: NotificationType) => {
    notifications.pushNotification(text, val);
  };
</script>

<template>
  <h2 class="text-center dark:text-slate-300">Уведомления</h2>
  <div class="flex flex-col gap-4">
    <Button
      severity="success"
      @click="() => sendNotification('Обожаю тебя, красавчик', 'success')"
      >Уведомление успех</Button
    >
    <Button
      severity="warn"
      @click="() => sendNotification('Милый, пожалуйста заполни недостающие поля формы', 'warning')"
      >Предупреждение</Button
    >
    <Button
      severity="danger"
      @click="() => sendNotification('Не удалось получить список календарей с сервера', 'error')"
      >Ошибка</Button
    >
    <Button
      severity="info"
      @click="() => sendNotification('Температура воздуха за окном - 34 градуса', 'info')"
      >Информационное сообщение</Button
    >
  </div>
</template>
