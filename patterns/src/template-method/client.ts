import {
  PaymentGateway,
  RazorPayGateway,
  StripeGateway,
} from "./Paymentgateway";

const strip: PaymentGateway = new StripeGateway();

strip.proccessPayment(100);

const razor: PaymentGateway = new RazorPayGateway();

console.log("==");
console.log("==");
console.log("==");

razor.proccessPayment(200);
