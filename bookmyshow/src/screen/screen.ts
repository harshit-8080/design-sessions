import { SeatStatus, SeatType } from "../enums/enums";
import { Seat } from "../seats/seat";
import { Show } from "../shows/show";
import { Theatre } from "../threatre/threatre";
import { generateId } from "../utils/generateId";

export class Screen {
  public shows: Show[] = [];
  constructor(
    public name: string,
    public id: string,
    public threter: Theatre,
    public seats: Seat[] = [],
  ) {
    threter.addScreen(this);
  }

  configureSeatLayout(seatLayout: { type: SeatType; count: number }[]) {
    // let alph = "ABCDEFGHJKL....Z"

    let rowCharCode = "A".charCodeAt(0);
    let seatIndex = 0;

    for (const layout of seatLayout) {
      for (let i = 1; i <= layout.count; i++) {
        const row = String.fromCharCode(
          rowCharCode + Math.floor(seatIndex / 20),
        );

        const numberInRow = (seatIndex % 20) + 1;

        let seatLabel = row + numberInRow;

        const newSeat = new Seat(
          generateId(),
          seatLabel,
          layout.type,
          SeatStatus.AVAILABLE,
        );

        this.seats.push(newSeat);
        seatIndex++;
      }
    }
  }

  addShow(newShow: Show) {
    this.shows.push(newShow);
  }
}
