import { Book } from "../shows/show";

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private bookings: Book[] = [],
  ) {}

  viewBookings(): Book[] {
    return this.bookings;
  }

  addBooking(booking: Book) {
    this.bookings.push(booking);
  }
}
