import { IATMState } from "../interface/IATMState";
import { IATMStateManager } from "../interface/IATMStateManager";
import { IdleState } from "../states/IdleState";

export class AtmStateManager implements IATMStateManager {
  state: IATMState;
  constructor() {
    this.state = new IdleState();
  }
  setState(newState: IATMState): void {
    this.state = newState;
  }
  handleState(atm: any): void {
    this.state.handle(atm);
  }
}
