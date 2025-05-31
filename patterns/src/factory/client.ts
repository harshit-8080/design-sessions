import { NotificationFactory } from "./notificationfactory";

let choice = "slack";

let notify = NotificationFactory.createNotification(choice);
notify.send("WAKE UP");
