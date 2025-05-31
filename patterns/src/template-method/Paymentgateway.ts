export abstract class PaymentGateway {
  // template method
  public proccessPayment(amount: number) {
    this.validatePaymentDetails();
    this.authenticate();
    this.executeTransaction();
    this.sendResponse();
  }

  public validatePaymentDetails() {
    console.log("validating payment details....");
  }
  abstract authenticate(): void;
  abstract executeTransaction(): void;

  public sendResponse() {
    console.log("sending response....");
  }
}

export class StripeGateway extends PaymentGateway {
  authenticate(): void {
    console.log("authentication via stripe api....");
  }
  executeTransaction(): void {
    console.log("performing transacion via stripe api....");
  }
}
export class RazorPayGateway extends PaymentGateway {
  authenticate(): void {
    console.log("authentication via razor api....");
  }
  executeTransaction(): void {
    console.log("performing transacion via razor api....");
  }
}
