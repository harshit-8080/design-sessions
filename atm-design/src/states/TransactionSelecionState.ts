import { ATM } from "../core/Atm";
import { IATMState } from "../interface/IATMState";
import { TranscationExecutionState } from "./transcationExecutionState";

export class TranscationSelectionState implements IATMState {
  handle(atm: ATM): void {
    console.log("Transaction selected. Moving to transcation execution state");
    atm["stateManager"].setState(new TranscationExecutionState());

    atm.start();
  }
}
