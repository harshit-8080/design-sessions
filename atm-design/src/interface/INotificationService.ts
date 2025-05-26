export interface INotificationService {
  addObserver(observer: any): void;
  notify(message: string): void;
}
