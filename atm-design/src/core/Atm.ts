import { IATMStateManager } from "../interface/IATMStateManager";
import { INotificationService } from "../interface/INotificationService";
import { ITranscationProcessing } from "../interface/ITranscationProcessor";

export class ATM {
  constructor(
    private stateManager: IATMStateManager,
    private transctionProcessor: ITranscationProcessing,
    private notifier: INotificationService,
  ) {}

  start(): void {
    this.stateManager.handleState(this);
  }

  performTransaction() {
    this.transctionProcessor.execute();
    this.notifier.notify("Transaction completed.");
  }
}
