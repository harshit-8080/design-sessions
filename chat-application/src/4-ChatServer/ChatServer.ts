import { User } from "../1-user/User";
import { Message } from "../2-message/Message";
import { GroupChat } from "../3-GroupChat/Groupchat";

// interface IChatServer {

// }

export class ChatServer {
  private static instance: ChatServer;
  private users: Map<string, User> = new Map();
  private groups: Map<string, GroupChat> = new Map();

  private constructor() {}

  static getInstance() {
    if (!ChatServer.instance) {
      ChatServer.instance = new ChatServer();
    }

    return ChatServer.instance;
  }

  registerUser(newUser: User) {
    this.users.set(newUser.getUserId(), newUser);
  }

  createGroup(groupName: string, admin: User): GroupChat {
    const newGroup = new GroupChat(groupName, admin);
    this.groups.set(newGroup.getGroupId(), newGroup);

    return newGroup;
  }
  // iMPPPPPPP
  sendMessage(message: Message) {
    if (message.receiver instanceof User) {
      message.receiver.receiveMessage(message); // 1-1
    } else if (message.receiver instanceof GroupChat) {
      message.receiver.broadCastMessage(message); // groupChat
    }
  }
}
