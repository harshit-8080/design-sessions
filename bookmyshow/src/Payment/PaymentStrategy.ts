import { PaymentStatus } from "../enums/enums";

export interface PaymentStratgey {
  pay(amount: number): PaymentStatus;
  refund(amount: number): PaymentStatus;
}

export class UPI implements PaymentStratgey {
  pay(amount: number): PaymentStatus {
    console.log("UPI Payment done and amount is ", amount);
    return PaymentStatus.SUCCESS;
  }
  refund(amount: number): PaymentStatus {
    console.log("Refund Via UPI  amount is ", amount);
    return PaymentStatus.SUCCESS;
  }
}

export class CreditCard implements PaymentStratgey {
  pay(amount: number): PaymentStatus {
    console.log("CreditCard Payment done and amount is ", amount);
    return PaymentStatus.SUCCESS;
  }
  refund(amount: number): PaymentStatus {
    console.log("Refund Via CreditCard  amount is ", amount);
    return PaymentStatus.SUCCESS;
  }
}
