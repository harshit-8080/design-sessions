import { User } from "./src/1-user/User";
import { Message } from "./src/2-message/Message";
import { ChatServer } from "./src/4-ChatServer/ChatServer";
import { ReactionDecorator } from "./src/5-message-decorator/MessageDecorator";
import { OnlineStatusService } from "./src/6-onlineStatusService/OnlineStatusService";
import { MessageType } from "./src/utils/enum";

const chatInstance = ChatServer.getInstance();

const harshit = new User("Harshit");
const rahul = new User("Rahul");
const ayush = new User("Ayush");

chatInstance.registerUser(harshit);
chatInstance.registerUser(rahul);
chatInstance.registerUser(ayush);

const m1 = new Message("Hello", harshit, rahul, MessageType.TEXT);
const m2 = new Message("bye", rahul, ayush, MessageType.TEXT);
chatInstance.sendMessage(m1);
chatInstance.sendMessage(m2);

const collegeGroup = chatInstance.createGroup("CollegeGroup", harshit);
const schoolGroup = chatInstance.createGroup("SchoolGroup", harshit);
collegeGroup.addMember(harshit, ayush);
collegeGroup.addMember(harshit, rahul);

const m3 = new Message(
  "Hey Guys how are you..",
  harshit,
  collegeGroup,
  MessageType.TEXT,
);

chatInstance.sendMessage(m3);

console.log(harshit.getMyGroups());

const reactionDecorator = new ReactionDecorator(m3);
reactionDecorator.addReaction(harshit.getUserId(), "👍");
reactionDecorator.addReaction(ayush.getUserId(), "❤️");
reactionDecorator.addReaction(ayush.getUserId(), "🤡");
reactionDecorator.addReaction(harshit.getUserId(), "❤️");

console.log(reactionDecorator.getContent());

OnlineStatusService.getInstance().addObserver(rahul);
OnlineStatusService.getInstance().addObserver(ayush);

harshit.goOffline();
harshit.goOnline();
