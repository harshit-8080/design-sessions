import { City } from "../city/city";
import { Show } from "../shows/show";

export class Theatre {
  constructor(
    public id: string,
    public name: string,
    public city: City,
    public screens: Screen[] = [],
    public shows: Show[] = [],
  ) {}

  addScreen(newScreen: any) {
    this.screens.push(newScreen);
  }

  addShows(newShow: any) {
    this.shows.push(newShow);
  }

  //   getAllShows(): string[] {}
}
