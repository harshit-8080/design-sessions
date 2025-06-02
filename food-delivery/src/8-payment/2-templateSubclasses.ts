import { PaymentTemplate } from "./1-paymentTemplate";

export class CreditCardPayment extends PaymentTemplate {
  protected validate(amount: number): void {
    console.log(`Validating credit card payment of ₹${amount}`);
  }

  protected authenticate(): void {
    console.log("Authenticating using OTP for credit card");
  }

  protected deduct(amount: number): void {
    console.log(`Charging ₹${amount} to credit card`);
  }
}

export class UpiPayment extends PaymentTemplate {
  protected validate(amount: number): void {
    console.log(`Validating UPI payment of ₹${amount}`);
  }

  protected authenticate(): void {
    console.log("Authenticating with UPI PIN");
  }

  protected deduct(amount: number): void {
    console.log(`Deducting ₹${amount} via UPI`);
  }
}
