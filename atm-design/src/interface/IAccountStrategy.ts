import { ITransactionCommand } from "./ITranscationCommand";

export interface IAccountStrategy {
  processTransaction(command: ITransactionCommand): void;
}
