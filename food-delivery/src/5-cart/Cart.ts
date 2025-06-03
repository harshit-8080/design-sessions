import { Menu } from "../4-menu/Menu";
import { CheeseDecorator, MenuDecoraor } from "../4-menu/MenuDecorator";
import { CartItem } from "./cartItem";

export class Cart {
  public totalAmount: number = 0;
  public cartItems: CartItem[] = [];

  public addToCart(menu: MenuDecoraor, quantity: number) {
    const cartItem = new CartItem(menu, quantity);
    this.cartItems.push(cartItem);

    this.calcualateTotal();
  }
  public calcualateTotal() {
    let sum = 0;

    for (let i = 0; i < this.cartItems.length; i++) {
      sum += this.cartItems[i].item.getPrice() * this.cartItems[i].quantity;
    }
    this.totalAmount = sum;
  }

  public removeFromCart(menu: Menu) {
    this.cartItems = this.cartItems.filter((item) => {
      return item.item.menu.itemId != menu.itemId;
    });

    this.calcualateTotal();
  }
}
