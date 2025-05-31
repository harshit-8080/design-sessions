import {
  EmailNotification,
  PushNotification,
  SlackNotification,
  SMSNotification,
} from "./problem";

export class NotificationFactory {
  static createNotification(type: string) {
    switch (type) {
      case "sms":
        return new SMSNotification();
      case "email":
        return new EmailNotification();
      case "push":
        return new PushNotification();
      case "slack":
        return new SlackNotification();
      default:
        break;
    }
  }
}
