import { WithDrawCommand } from "./src/command/withDrawCommand";
import { Account } from "./src/core/Account";
import { ATM } from "./src/core/Atm";
import { AtmStateManager } from "./src/core/ATMStateManager";
import { NotificationService } from "./src/core/NotificationService";
import { TranscationProcessor } from "./src/core/Transctionprocessor";
import { EmailService } from "./src/observers/EmailService";
import { SMSService } from "./src/observers/SmsService";
import { CurrentAccountStrategy } from "./src/strategy/CurrentAccountStrategy";
import { SavingAccountStrategy } from "./src/strategy/SavingAccountStrategy";

const account = new Account(372367, 10000);

const stateManager = new AtmStateManager();
const transctionProcess = new TranscationProcessor();

const notificationService = new NotificationService();
notificationService.addObserver(new EmailService());
notificationService.addObserver(new SMSService());

const atm = new ATM(stateManager, transctionProcess, notificationService);

transctionProcess.setStrategy(new SavingAccountStrategy());
transctionProcess.setCommand(new WithDrawCommand(account, 2000));
atm.start();
transctionProcess.execute();

console.log("==== New Transcation ====");

transctionProcess.setStrategy(new CurrentAccountStrategy());
transctionProcess.setCommand(new WithDrawCommand(account, 4000));
atm.start();
transctionProcess.execute();
