import { publicDecrypt } from "crypto";
import { Theatre } from "../threatre/threatre";
import { PaymentStatus, SeatType } from "../enums/enums";
import { Screen } from "../screen/screen";
import { User } from "../user/user";
import { Seat } from "../seats/seat";
import { PaymentStratgey } from "../Payment/PaymentStrategy";
import { DiscountStrategy } from "../Discount/discount";

export class Show {
  constructor(
    public id: string,
    public movieTitle: string,
    public screen: Screen,
    public threatre: Theatre,
    public showTime: Date,
    public layout_price: { type: SeatType; price: number }[],
    public isCancellable: boolean = true,
  ) {
    screen.addShow(this);
  }

  getShowDetail() {
    console.log(
      "Movie ",
      this.movieTitle,
      "Screen: ",
      this.screen,
      "Threater: ",
      this.threatre,
      "Show Time: ",
      this.showTime,
    );
  }

  getSeatStatus() {
    console.log(this.screen.seats);
  }

  public cancellable(): boolean {
    return this.isCancellable;
  }
}

export class Book {
  constructor(
    public id: string,
    public user: User,
    public show: Show,
    public seats: Seat[],
    public totalAmount: number,
    public paymentStrategy: PaymentStratgey,
    public discountStrategy: DiscountStrategy,
    public paymentStatus: PaymentStatus,
  ) {}

  confirmBooking() {
    this.seats.forEach((seat) => seat.book());
    this.paymentStatus = PaymentStatus.SUCCESS;
  }

  cancelBooking() {
    this.seats.forEach((seat) => seat.release());
  }
}
