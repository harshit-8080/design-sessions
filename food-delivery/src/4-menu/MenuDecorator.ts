import { Menu } from "./Menu";

export abstract class MenuDecoraor {
  constructor(public menu: Menu) {}

  abstract getPrice(): number;
  abstract getDescription(): string;
}

export class baseMenu extends MenuDecoraor {
  constructor(menu: Menu) {
    super(menu);
  }

  getPrice(): number {
    return this.menu.getPrice();
  }
  getDescription(): string {
    return this.menu.getDescription();
  }
}

export class CheeseDecorator extends MenuDecoraor {
  constructor(menu: Menu) {
    super(menu);
  }

  getPrice(): number {
    return this.menu.getPrice() + 10;
  }
  getDescription(): string {
    return this.menu.getDescription() + " , addon cheese";
  }
}

export class ExtraCheeseDecorator extends MenuDecoraor {
  constructor(menu: Menu) {
    super(menu);
  }

  getPrice(): number {
    return this.menu.getPrice() + 20;
  }
  getDescription(): string {
    return this.menu.getDescription() + " , addon extra cheese";
  }
}
