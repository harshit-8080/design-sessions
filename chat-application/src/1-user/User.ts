import { Message } from "../2-message/Message";
import { GroupChat } from "../3-GroupChat/Groupchat";
import { OnlineStatusService } from "../6-onlineStatusService/OnlineStatusService";
import { MessageStatus } from "../utils/enum";
import { generateId } from "../utils/generateId";

export class User {
  private groups: Set<GroupChat> = new Set();
  constructor(
    private name: string,
    private isOnline: boolean = false,
    private userId: string = generateId(),
  ) {}

  public getUserId(): string {
    return this.userId;
  }
  public getUserName(): string {
    return this.name;
  }

  public goOffline() {
    this.isOnline = false;
    OnlineStatusService.getInstance().notifyOnStatusChage(this);
  }

  public goOnline() {
    this.isOnline = true;
    OnlineStatusService.getInstance().notifyOnStatusChage(this);
  }

  public isAvailable(): boolean {
    return this.isOnline;
  }

  public receiveMessage(messge: Message) {
    messge.messageStatus = MessageStatus.SENT;
    console.log(
      `${this.name} Received: ${messge.getContent()} from ${messge.sender.getUserName()}`,
    );
    messge.messageStatus = MessageStatus.SEEN;
  }

  updateGroup(newgroup: GroupChat) {
    this.groups.add(newgroup);
  }

  getMyGroups(): string[] {
    let groupNames = [];

    this.groups.forEach((group) => {
      groupNames.push(group.getGroupName());
    });

    return groupNames;
  }

  getStatusChangeNotification(messagee: string) {
    console.log(messagee);
  }
}
