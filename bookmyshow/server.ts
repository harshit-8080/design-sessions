import { BookingService } from "./src/bookingService";
import { City } from "./src/city/city";
import { FlatDiscount, PercentageDiscount } from "./src/Discount/discount";
import { SeatType } from "./src/enums/enums";
import { EmailNotifier, SmsNotifier } from "./src/notification/notification";
import { UPI } from "./src/Payment/PaymentStrategy";
import { Screen } from "./src/screen/screen";
import { Show } from "./src/shows/show";
import { Theatre } from "./src/threatre/threatre";
import { User } from "./src/user/user";
import { generateId } from "./src/utils/generateId";
Screen;

const hyderbad = new City(generateId(), "Hyderbad", "TS");

const pvr_threater = new Theatre(generateId(), "PVR_HYD", hyderbad);
const inox_threater = new Theatre(generateId(), "INOX_HYD", hyderbad);

const s1 = new Screen("Screen 1", generateId(), pvr_threater);

s1.configureSeatLayout([
  { type: SeatType.PLATINUM, count: 20 },
  { type: SeatType.GOLD, count: 30 },
  { type: SeatType.SILVER, count: 40 },
]);

const s2 = new Screen("Screen 2", generateId(), pvr_threater);

s2.configureSeatLayout([
  { type: SeatType.PLATINUM, count: 30 },
  { type: SeatType.GOLD, count: 50 },
  { type: SeatType.SILVER, count: 60 },
]);

const kgf = new Show(generateId(), "KGF PART 1", s1, pvr_threater, new Date(), [
  { type: SeatType.PLATINUM, price: 500 },
  { type: SeatType.GOLD, price: 400 },
  { type: SeatType.SILVER, price: 300 },
]);

const harshit_user = new User(generateId(), "HARSHIT RAJ", "harshit@gmail.com");

const bookingInstance = BookingService.getInstance();
bookingInstance.addObserver(new EmailNotifier());
bookingInstance.addObserver(new SmsNotifier());

// kgf.getSeatStatus();

bookingInstance.bookTicket(
  harshit_user,
  kgf,
  ["A1", "A2"],
  new UPI(),
  new PercentageDiscount(5),
);

// kgf.getSeatStatus();
