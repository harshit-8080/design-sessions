import { IAccountStrategy } from "../interface/IAccountStrategy";
import { ITransactionCommand } from "../interface/ITranscationCommand";

export class SavingAccountStrategy implements IAccountStrategy {
  processTransaction(command: ITransactionCommand): void {
    console.log("Transaction performed via saving account");
    command.execute();
  }
}
