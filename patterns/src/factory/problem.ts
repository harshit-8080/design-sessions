export interface INotification {
  send(message: string): void;
}

export class EmailNotification implements INotification {
  public send(message: string) {
    console.log("EMAIL: ", message);
  }
}

export class SMSNotification implements INotification {
  public send(message: string) {
    console.log("SMS: ", message);
  }
}

export class PushNotification implements INotification {
  public send(message: string) {
    console.log("PUSH: ", message);
  }
}

export class SlackNotification implements INotification {
  public send(message: string) {
    console.log("SLACK: ", message);
  }
}
