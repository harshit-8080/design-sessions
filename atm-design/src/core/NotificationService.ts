import { INotificationService } from "../interface/INotificationService";
import { IObserver } from "../interface/IObserver";

export class NotificationService implements INotificationService {
  private observers: IObserver[] = [];

  addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  notify(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}
