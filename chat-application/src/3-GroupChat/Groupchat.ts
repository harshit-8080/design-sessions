import { User } from "../1-user/User";
import { Message } from "../2-message/Message";
import { generateId } from "../utils/generateId";

export class GroupChat {
  constructor(
    public name: string,
    private admin: User,
    private memeber: Set<User> = new Set(),
    private groupId: string = generateId(),
  ) {
    admin.updateGroup(this);
  }

  getGroupId(): string {
    return this.groupId;
  }
  getGroupName(): string {
    return this.name;
  }

  addMember(requestedBy: User, newUser: User) {
    if (requestedBy.getUserId() != this.admin.getUserId()) {
      console.log("only admin are allowed to add memeber");
      return;
    }

    this.memeber.add(newUser);
    newUser.updateGroup(this);
  }

  removeMember(requestedBy: User, user: User) {
    if (requestedBy.getUserId() != this.admin.getUserId()) {
      console.log("only admin are allowed to remove memeber");
      return;
    }

    this.memeber.delete(user);
  }
  broadCastMessage(message: Message) {
    this.memeber.forEach((member) => {
      if (message.sender.getUserId() != member.getUserId()) {
        member.receiveMessage(message);
      }
    });
  }
}
