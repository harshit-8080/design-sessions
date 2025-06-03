import { Customer } from "../1-customer/Customer";
import { Address } from "../2-address/Address";
import { Cart } from "../5-cart/Cart";
import { OrderStatus, PaymentStatus } from "../utils/enum";
import { generateId } from "../utils/generateId";

export class Order {
  constructor(
    public totalAmount: number,
    public address: Address,
    public cart: Cart,
    public userId: string,
    public restaurantId: string,
    public paymentStatus: PaymentStatus = PaymentStatus.PENDING,
    public orderStatus: OrderStatus = OrderStatus.PLACED,
    public orderId: string = generateId(),
  ) {}

  updateOrderStatus(newStatus: OrderStatus) {
    this.orderStatus = newStatus;
  }

  cancelOrder() {
    this.updateOrderStatus(OrderStatus.CANCEL);
    /// logicccccc........
  }
}
