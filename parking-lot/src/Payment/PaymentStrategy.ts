import { PaymentStatus } from "../enum";

export interface PaymentStratgey {
  pay(amount: number): PaymentStatus;
}

export class UPI implements PaymentStratgey {
  pay(amount: number): PaymentStatus {
    console.log("UPI Payment done and amount is ", amount);
    return PaymentStatus.SUCCESS;
  }
}

export class CreditCard implements PaymentStratgey {
  pay(amount: number): PaymentStatus {
    console.log("CreditCard Payment done and amount is ", amount);
    return PaymentStatus.SUCCESS;
  }
}

export class Cash implements PaymentStratgey {
  pay(amount: number): PaymentStatus {
    console.log("Cash Payment done and amount is ", amount);
    return PaymentStatus.SUCCESS;
  }
}
