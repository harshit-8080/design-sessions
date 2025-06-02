export abstract class PaymentTemplate {
  public processPayment(amount: number): void {
    this.validate(amount);
    this.authenticate();
    this.deduct(amount);
    this.notifyUser();
  }

  protected abstract validate(amount: number): void;
  protected abstract authenticate(): void;
  protected abstract deduct(amount: number): void;

  protected notifyUser(): void {
    console.log("Payment successful");
  }
}
