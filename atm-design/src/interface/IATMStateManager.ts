import { IATMState } from "./IATMState";

export interface IATMStateManager {
  setState(state: IATMState): void;
  handleState(context: any): void;
}
