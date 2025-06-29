import { TicketStatus } from "../enum";

export class Ticket {
  constructor(
    private ticketId: string,
    private vehicleNumber: string,
    private spotId: string,
    private entryTime: Date = new Date(),
    private exisTime: Date = null,
    private status: TicketStatus = TicketStatus.ACTIVE,
    private amount: number = null,
  ) {}

  getTicketId(): string {
    return this.ticketId;
  }
  getSpotId(): string {
    return this.spotId;
  }

  getvehicleNumber(): string {
    return this.vehicleNumber;
  }
  setAmount(amount: number) {
    this.amount = amount;
  }
  setStatus(status: TicketStatus) {
    this.status = status;
  }
  setExitTime(exitTime: Date) {
    this.exisTime = exitTime;
  }
  getStatus() {
    return this.status;
  }

  getParkingDurationInSeconds(): number {
    const existTime = this.exisTime ?? new Date();
    this.setExitTime(existTime);

    const durationTimeInMS = this.exisTime.getTime() - this.entryTime.getTime();
    if (durationTimeInMS < 0) {
      // exit time can be less than entry time......
    }
    const durationTimeInSeconds = durationTimeInMS / 1000;

    return durationTimeInSeconds;
  }
}
