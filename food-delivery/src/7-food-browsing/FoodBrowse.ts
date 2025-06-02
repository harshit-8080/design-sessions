import { Menu } from "../4-menu/Menu";
import { ISortStrategy } from "./SortStrategy";

export class FoodBrowse {
  constructor(private sortStrategy: ISortStrategy) {}

  browse(menuList: Menu[]): Menu[] {
    return this.sortStrategy.sort(menuList);
  }
}
