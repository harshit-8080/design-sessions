import { Theatre } from "../threatre/threatre";

export class City {
  public threatre: Theatre[];
  constructor(
    public id: string,
    public name: string,
    public state: string,
  ) {}

  addThreatre(newThreatre: Theatre) {
    this.threatre.push(newThreatre);
  }

  getAllThreatre(): Theatre[] {
    return this.threatre;
  }
}
