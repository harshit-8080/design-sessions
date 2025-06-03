import { Address } from "../2-address/Address";
import { Cart } from "../5-cart/Cart";
import { Order } from "../6-order/Order";
import { generateId } from "../utils/generateId";

export class Customer {
  public currentAddress: Address;
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public addressList: Address[] = [],
    public userId: string = generateId(),
    public cart: Cart = new Cart(),
  ) {}

  setCurrentAddress(address: Address) {
    this.currentAddress = address;
  }

  addNewAddress(newAddress: Address) {
    this.addressList.push(newAddress);
  }

  updateCustomer() {}

  placeOrder(): Order {
    const newOrder = new Order(
      this.cart.totalAmount,
      this.currentAddress,
      this.cart,
      this.userId,
      this.cart.cartItems[0].item.menu.restaurantId,
    );

    return newOrder;
  }
}
