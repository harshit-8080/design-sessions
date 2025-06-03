import { PaymentStrategy } from "./3-strategy";
import { generateId } from "../utils/generateId";
import { PaymentStatus } from "../utils/enum";

export class PaymentProcessor {
  constructor(
    private strategy: PaymentStrategy,
    public amount: number,
    public orderId: string,
    public userId: string,
    public paymentStatus: PaymentStatus = PaymentStatus.IN_PROGRESS,
    public paymentId: string = generateId(),
  ) {}

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  process(): void {
    this.strategy.pay(this.amount);
    this.paymentStatus = PaymentStatus.COMPLETED;
  }
}
