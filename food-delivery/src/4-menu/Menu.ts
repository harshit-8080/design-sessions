import { RestaurantAdmin } from "../3-restaurant/RestaurantAdmin";
import { generateId } from "../utils/generateId";

export class Menu {
  constructor(
    public name: string,
    public price: number,
    public rating: number,
    public isAvailable: boolean,
    public description: string,
    public category: string,
    public restaurantId: string,
    public deliveryTime: number,
    public itemId: string = generateId(),
  ) {}

  updatePrice(newPrice: number) {
    this.price = newPrice;
  }

  toggleAvailable(newPrice: number) {
    this.isAvailable != this.isAvailable;
  }

  getPrice(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }
}
