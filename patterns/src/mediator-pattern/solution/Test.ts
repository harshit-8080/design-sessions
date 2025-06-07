interface IGroupMediator {
  broadCastMessage(messgae: string, sender: User): void;
}

class GroupMediator implements IGroupMediator {
  private users: User[] = [];
  constructor(private name: string) {}

  addUser(newUser: User): void {
    this.users.push(newUser);
  }

  broadCastMessage(messgae: string, sender: User): void {
    // here i need to broadcast the message to all users.....
    this.users.forEach((user) => {
      if (user != sender) {
        user.receiveMessage(messgae, sender);
      }
    });
  }
}

class User {
  constructor(
    private name: string,
    private groupMediator: GroupMediator,
  ) {}

  sendMessage(message: string) {
    this.groupMediator.broadCastMessage(message, this);
  }

  receiveMessage(message: string, sender: User) {
    console.log(
      `${this.name} Received Message:  from ${sender.name} and message is - ${message}`,
    );
  }
}

const college_group_mediator = new GroupMediator("College_Group");

const harshit = new User("Harshit", college_group_mediator);
const Ayus = new User("Ayush", college_group_mediator);
const Rahul = new User("Rahul", college_group_mediator);
const Atif = new User("Atif", college_group_mediator);

college_group_mediator.addUser(harshit);
college_group_mediator.addUser(Ayus);
college_group_mediator.addUser(Rahul);
college_group_mediator.addUser(Atif);

// sending message
harshit.sendMessage("hello");

Rahul.sendMessage("Hey Guys....");
