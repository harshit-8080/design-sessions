import { Menu } from "../4-menu/Menu";
import { MenuDecoraor } from "../4-menu/MenuDecorator";

export class CartItem {
  constructor(
    public item: MenuDecoraor,
    public quantity: number,
  ) {}
}
