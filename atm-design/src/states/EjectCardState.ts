import { ATM } from "../core/Atm";
import { IATMState } from "../interface/IATMState";
import { IdleState } from "./IdleState";

export class EjectCardState implements IATMState {
  handle(atm: ATM): void {
    console.log("Thank you, Move to idle state");
    atm["stateManager"].setState(new IdleState());
  }
}
