export interface INotificationInterface {
  text: string;
  createdAt: Date;
  type: NotificationType;
}

export type NotificationType = 'info' | 'warning' | 'error' | 'success';
