import { Menu } from "../4-menu/Menu";
import { generateId } from "../utils/generateId";

export class Restaurant {
  constructor(
    public name: string,
    public isAvailable: boolean,
    public address: string,
    public menuList: Menu[] = [],
    public restaurantId: string = generateId(),
  ) {}

  toggleAvailable(): void {
    this.isAvailable != this.isAvailable;
  }

  getAllAvailableItem(): Menu[] {
    const availableMenu = this.menuList.filter((item) => {
      return item.isAvailable;
    });
    return availableMenu;
  }

  getItemByCategory(category: string): Menu[] {
    const categoryMenu = this.menuList.filter((item) => {
      return (item.category = category);
    });
    return categoryMenu;
  }
}
