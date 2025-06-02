import { arrayBuffer } from "stream/consumers";
import { Menu } from "../4-menu/Menu";
import { generateId } from "../utils/generateId";
import { Restaurant } from "./Resturant";

export class RestaurantAdmin {
  constructor(
    public name: string,
    public restaurant: Restaurant,
    public RestaurantAdminId: string = generateId(),
  ) {}

  addMenuItem(menu: Menu) {
    this.restaurant.menuList.push(menu);
  }
  removeMenuItem(menu: Menu) {
    this.restaurant.menuList = this.restaurant.menuList.filter((item) => {
      return item.itemId != menu.itemId;
    });
  }

  toggleAvailableRestro() {
    this.restaurant.toggleAvailable();
  }
}
