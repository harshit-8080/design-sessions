import { ParkingLot } from "../parkingLot/ParkingLot";

export abstract class Gate {
  constructor(
    protected gateId: string,
    protected parkingLot: ParkingLot,
    protected operational: boolean = true,
  ) {}

  getGateId(): string {
    return this.gateId;
  }

  toggleOperational() {
    this.operational = !this.operational;
  }

  isOperational(): boolean {
    return this.operational;
  }
}
