import { User } from "../1-user/User";

export class OnlineStatusService {
  private observer: Set<User> = new Set();
  private static instance: OnlineStatusService;

  private constructor() {}

  static getInstance() {
    if (!OnlineStatusService.instance) {
      OnlineStatusService.instance = new OnlineStatusService();
    }

    return OnlineStatusService.instance;
  }

  addObserver(user: User) {
    this.observer.add(user);
  }
  removeObserver(user: User) {
    this.observer.delete(user);
  }

  notifyOnStatusChage(changedUser: User) {
    this.observer.forEach((observer) => {
      const messsage = `${observer.getUserName()} Notified: ${changedUser.getUserName()} is ${changedUser.isAvailable() ? "online" : "offline"}`;
      observer.getStatusChangeNotification(messsage);
    });
  }
}
