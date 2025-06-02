import { CreditCardPayment, UpiPayment } from "./2-templateSubclasses";

export interface PaymentStrategy {
  pay(amount: number): void;
}

export class CreditCardStrategy implements PaymentStrategy {
  private creditCard: CreditCardPayment = new CreditCardPayment();

  pay(amount: number): void {
    this.creditCard.processPayment(amount);
  }
}

export class UpiStrategy implements PaymentStrategy {
  private upi: UpiPayment = new UpiPayment();

  pay(amount: number): void {
    this.upi.processPayment(amount);
  }
}
