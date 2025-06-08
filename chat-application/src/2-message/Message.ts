import { User } from "../1-user/User";
import { GroupChat } from "../3-GroupChat/Groupchat";
import { IMessageDecorator } from "../5-message-decorator/MessageDecorator";
import { MessageStatus, MessageType } from "../utils/enum";
import { generateId } from "../utils/generateId";

export class Message implements IMessageDecorator {
  constructor(
    private content: string,
    public sender: User,
    public receiver: User | GroupChat,
    private messageType: MessageType,
    private timeStamp: Date = new Date(),
    public messageStatus: MessageStatus = MessageStatus.DRAFT,
    private messageId: string = generateId(),
  ) {}

  public getContent(): string {
    return this.content;
  }
  public getMessageId(): string {
    return this.messageId;
  }
}
