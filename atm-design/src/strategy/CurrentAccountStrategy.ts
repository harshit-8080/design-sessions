import { IAccountStrategy } from "../interface/IAccountStrategy";
import { ITransactionCommand } from "../interface/ITranscationCommand";

export class CurrentAccountStrategy implements IAccountStrategy {
  processTransaction(command: ITransactionCommand): void {
    console.log("Transaction performed via current account");
    command.execute();
  }
}
