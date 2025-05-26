import { ATM } from "../core/Atm";
import { IATMState } from "../interface/IATMState";
import { TranscationSelectionState } from "./TransactionSelecionState";

export class PinVerificationState implements IATMState {
  handle(atm: ATM): void {
    console.log("Validating your pin. Moving to transcation selection options");
    atm["stateManager"].setState(new TranscationSelectionState());

    atm.start();
  }
}
