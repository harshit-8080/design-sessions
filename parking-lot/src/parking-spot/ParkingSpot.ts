import { SpotSize, SpotStatus } from "../enum";
import { IVehicle } from "../vehicle/Vehicle";

export class ParkingSpot {
  constructor(
    private spotId: string,
    private spotSize: SpotSize,
    private spotStatus: SpotStatus = SpotStatus.AVAILABLE,
    private parkedVehicle: IVehicle = null,
  ) {}

  getSpotId(): string {
    return this.spotId;
  }
  getSpotSize(): SpotSize {
    return this.spotSize;
  }
  getSpotStatus(): SpotStatus {
    return this.spotStatus;
  }

  isAvailable(): boolean {
    return this.spotStatus == SpotStatus.AVAILABLE ? true : false;
  }

  occupiedSpot(vehicle: IVehicle) {
    if (!this.isAvailable()) {
      throw Error("spot is not available");
    }

    this.spotStatus = SpotStatus.OCCUPIED;
    this.parkedVehicle = vehicle;
  }

  vacateSpot() {
    this.spotStatus = SpotStatus.AVAILABLE;
    this.parkedVehicle = null;
  }

  getParkedVehicle(): IVehicle {
    if (this.isAvailable()) {
      console.log("Spot is not occupied");
    }

    return this.parkedVehicle;
  }
}
