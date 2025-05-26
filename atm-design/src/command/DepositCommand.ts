import { Account } from "../core/Account";
import { ITransactionCommand } from "../interface/ITranscationCommand";

export class DepositCommand implements ITransactionCommand {
  constructor(
    private account: Account,
    private amount: number,
  ) {}

  execute(): void {
    this.account.deposit(this.amount);
  }
}
