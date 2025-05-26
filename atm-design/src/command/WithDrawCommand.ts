import { Account } from "../core/Account";
import { ITransactionCommand } from "../interface/ITranscationCommand";

export class WithDrawCommand implements ITransactionCommand {
  constructor(
    private account: Account,
    private amount: number,
  ) {}

  execute(): void {
    this.account.withDraw(this.amount);
  }
}
