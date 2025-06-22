import { SeatStatus, SeatType } from "../enums/enums";

export class Seat {
  constructor(
    public id: string,
    public seatLabel: string, //a1, a2, b3
    public SeatType: SeatType, // gold,
    public SeatStatus: SeatStatus,
  ) {}

  block() {
    if (this.SeatStatus == SeatStatus.AVAILABLE) {
      this.SeatStatus = SeatStatus.BLOCKED;
    } else {
      console.log("Seat not available");
    }
  }

  book() {
    if (this.SeatStatus == SeatStatus.BLOCKED) {
      this.SeatStatus = SeatStatus.BOOKED;
    } else {
      console.log("Seat must be blocked before you book");
    }
  }

  release() {
    if (this.SeatStatus == SeatStatus.BLOCKED) {
      this.SeatStatus = SeatStatus.AVAILABLE;
    }
  }
}
