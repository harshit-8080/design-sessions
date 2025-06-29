import { VehicleType } from "../enum";
import { VehicleFactory } from "../vehicle/VehicleFactory";

export class PricingStrategy {
  static SECOND_RATES: Map<VehicleType, number> = new Map([
    [VehicleType.BIKE, 2],
    [VehicleType.CAR, 4],
    [VehicleType.BUS, 8],
  ]);

  static calculatePrice(vehicleType: VehicleType, seconds: number): number {
    const secondRate = this.SECOND_RATES.get(vehicleType);

    const firstThreeSecondsPrice = secondRate * 3;
    const remnaingSecondsPrice = Math.max(0, seconds - 3) * 1; // for every second after 3 seconds 1 rupee extraa.
    // console.log("--->", seconds); // fixed price

    // console.log(firstThreeSecondsPrice, remnaingSecondsPrice);
    return Math.floor(firstThreeSecondsPrice + remnaingSecondsPrice);
  }
}
