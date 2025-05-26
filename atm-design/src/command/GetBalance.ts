import { Account } from "../core/Account";
import { ITransactionCommand } from "../interface/ITranscationCommand";

export class GetBalanceCommand implements ITransactionCommand {
  constructor(private account: Account) {}

  execute(): void {
    this.account.getBalance();
  }
}
