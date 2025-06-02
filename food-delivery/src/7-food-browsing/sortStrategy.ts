import { Menu } from "../4-menu/Menu";

export interface ISortStrategy {
  sort(menuList: Menu[]): Menu[];
}

export class SortByPrice implements ISortStrategy {
  sort(menuList: Menu[]): Menu[] {
    return menuList.sort((a, b) => a.price - b.price);
  }
}
export class SortByRating implements ISortStrategy {
  sort(menuList: Menu[]): Menu[] {
    return menuList.sort((a, b) => b.rating - a.rating);
  }
}
export class SortByDeliveryTime implements ISortStrategy {
  sort(menuList: Menu[]): Menu[] {
    return menuList.sort((a, b) => a.deliveryTime - b.deliveryTime);
  }
}
