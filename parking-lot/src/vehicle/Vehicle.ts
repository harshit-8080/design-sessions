import { SpotSize, VehicleType } from "../enum";

export interface IVehicle {
  getType(): VehicleType;
  getVehicleNumber(): string;
  getRequriedSpotSize(): SpotSize;
}

// class AbstractVehicle implements IVehicle {}

export class Bike implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private type: VehicleType = VehicleType.BIKE,
  ) {}
  getType(): VehicleType {
    return this.type;
  }
  getVehicleNumber(): string {
    return this.vehicleNumber;
  }
  getRequriedSpotSize(): SpotSize {
    return SpotSize.SMALL;
  }
}

export class Car implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private type: VehicleType = VehicleType.CAR,
  ) {}
  getType(): VehicleType {
    return this.type;
  }
  getVehicleNumber(): string {
    return this.vehicleNumber;
  }
  getRequriedSpotSize(): SpotSize {
    return SpotSize.MEDIUM;
  }
}

export class Bus implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private type: VehicleType = VehicleType.BUS,
  ) {}
  getType(): VehicleType {
    return this.type;
  }
  getVehicleNumber(): string {
    return this.vehicleNumber;
  }
  getRequriedSpotSize(): SpotSize {
    return SpotSize.LARGE;
  }
}
