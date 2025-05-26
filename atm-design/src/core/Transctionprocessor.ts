import { IAccountStrategy } from "../interface/IAccountStrategy";
import { ITransactionCommand } from "../interface/ITranscationCommand";
import { ITranscationProcessing } from "../interface/ITranscationProcessor";

export class TranscationProcessor implements ITranscationProcessing {
  private startegy: IAccountStrategy;
  private command: ITransactionCommand;

  setStrategy(startegy: IAccountStrategy): void {
    this.startegy = startegy;
  }
  setCommand(command: any): void {
    this.command = command;
  }
  execute(): void {
    this.startegy.processTransaction(this.command);
  }
}
