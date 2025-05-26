import { ATM } from "../core/Atm";
import { IATMState } from "../interface/IATMState";
import { PinVerificationState } from "./pinVerificationState";

export class IdleState implements IATMState {
  handle(atm: ATM): void {
    console.log("Card inserted. Moving to pin verfication state");
    atm["stateManager"].setState(new PinVerificationState());

    atm.start();
  }
}
