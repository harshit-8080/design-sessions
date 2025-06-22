import { DiscountStrategy } from "./Discount/discount";
import { NOTIFICATION_TYPE, PaymentStatus } from "./enums/enums";
import { NotificationObserver } from "./notification/notification";
import { PaymentStratgey } from "./Payment/PaymentStrategy";
import { Book, Show } from "./shows/show";
import { User } from "./user/user";
import { generateId } from "./utils/generateId";

export class BookingService {
  private observers: NotificationObserver[] = [];
  static instance: BookingService;

  private constructor() {}

  static getInstance(): BookingService {
    if (!this.instance) {
      this.instance = new BookingService();
    }

    return this.instance;
  }

  addObserver(observer: NotificationObserver) {
    this.observers.push(observer);
  }

  notifyAll(type: NOTIFICATION_TYPE, booking: Book) {
    this.observers.forEach((observer) => observer.notify(type, booking));
  }

  // seatLabels --> ["A1", "A3", "B12"]
  bookTicket(
    user: User,
    show: Show,
    seatLabels: string[],
    paymentStratgey: PaymentStratgey,
    discountStratgey?: DiscountStrategy,
  ) {
    const selectedSeats = show.screen.seats.filter((seat) => {
      return seatLabels.includes(seat.seatLabel);
    });

    //[1,2,3,4,5] ==> 15

    // block the seats
    selectedSeats.forEach((seats) => seats.block());

    try {
      const baseAmount = selectedSeats.reduce((sum, seat) => {
        //my seat type
        const seatType = seat.SeatType;

        let seatPrice = 0;
        show.layout_price.forEach((layout) => {
          if (layout.type == seatType) {
            seatPrice = layout.price;
          }
        });

        return (sum += seatPrice);
      }, 0);

      const amountAfterDiscount = discountStratgey
        ? discountStratgey.applyDiscount(baseAmount)
        : baseAmount;

      const newBooking = new Book(
        generateId(),
        user,
        show,
        selectedSeats,
        amountAfterDiscount,
        paymentStratgey,
        discountStratgey,
        PaymentStatus.IN_PROGRESS,
      );

      const paymentStatus = paymentStratgey.pay(amountAfterDiscount);
      if (paymentStatus === PaymentStatus.SUCCESS) {
        newBooking.confirmBooking();
        console.log("Booking Confirmed");
        this.notifyAll(NOTIFICATION_TYPE.BOOKING_SUCCESS, newBooking);
      } else {
        console.log("Booking Failed");
        // release tickets after 3 seconds
        setTimeout(() => {
          selectedSeats.forEach((seat) => seat.release());
        }, 4000);
        this.notifyAll(NOTIFICATION_TYPE.BOOKING_FAILURE, newBooking);
      }
    } catch (error) {
      // release tickets after 3 seconds
      setTimeout(() => {
        selectedSeats.forEach((seat) => seat.release());
      }, 4000);
    }
  }

  cancelTicket(booking: Book) {
    booking.cancelBooking();
    if (!booking.show.cancellable()) {
      console.log("Ticket has been cancelled, but sorry no refund");
      return;
    }

    booking.paymentStrategy.refund(booking.totalAmount);
    this.notifyAll(NOTIFICATION_TYPE.BOOKING_CANCELLATION, booking);
  }
}
