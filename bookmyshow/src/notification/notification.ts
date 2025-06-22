import { NOTIFICATION_TYPE } from "../enums/enums";
import { Book } from "../shows/show";

export interface NotificationObserver {
  notify(type: NOTIFICATION_TYPE, booking: Book): void;
}

export class EmailNotifier implements NotificationObserver {
  notify(type: NOTIFICATION_TYPE, booking: Book) {
    console.log(`Email notification for ${type} sent to ${booking.user.email}`);
  }
}

export class SmsNotifier implements NotificationObserver {
  notify(type: NOTIFICATION_TYPE, booking: Book) {
    console.log(`SMS notification for ${type} sent to ${booking.user.name}`);
  }
}
