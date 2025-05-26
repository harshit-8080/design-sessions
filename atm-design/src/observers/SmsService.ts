import { IObserver } from "../interface/IObserver";

export class SMSService implements IObserver {
  update(message: string): void {
    console.log(`[SMS] Notification sent: ${message}`);
  }
}
