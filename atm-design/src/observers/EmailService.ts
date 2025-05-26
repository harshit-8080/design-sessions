import { IObserver } from "../interface/IObserver";

export class EmailService implements IObserver {
  update(message: string): void {
    console.log(`[EMAIL] Notification sent: ${message}`);
  }
}
