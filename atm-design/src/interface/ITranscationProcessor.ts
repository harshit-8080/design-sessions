import { IAccountStrategy } from "./IAccountStrategy";
import { ITransactionCommand } from "./ITranscationCommand";

export interface ITranscationProcessing {
  setStrategy(startegy: IAccountStrategy): void;
  setCommand(command: ITransactionCommand): void;
  execute(): void;
}
