import { ATM } from "../core/Atm";
import { IATMState } from "../interface/IATMState";
import { EjectCardState } from "./EjectCardState";

export class TranscationExecutionState implements IATMState {
  handle(atm: ATM): void {
    console.log("Transaction completed, Moving to Card eject state");
    atm["stateManager"].setState(new EjectCardState());

    atm.start();
  }
}
