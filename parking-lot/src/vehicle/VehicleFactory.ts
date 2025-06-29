import { VehicleType } from "../enum";
import { Bike, Bus, Car } from "./Vehicle";

export class VehicleFactory {
  static createVehicle(type: VehicleType, vehicleNumber: string) {
    switch (type) {
      case VehicleType.BIKE:
        return new Bike(vehicleNumber);
      case VehicleType.CAR:
        return new Car(vehicleNumber);
      case VehicleType.BUS:
        return new Bus(vehicleNumber);
      default:
        console.log("Invalida vehicle type");
        break;
    }
  }
}
