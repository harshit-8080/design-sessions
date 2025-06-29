import { ParkingSpot } from "../../parking-spot/ParkingSpot";
import { ParkingLot } from "../../parkingLot/ParkingLot";
import { Ticket } from "../../tickets/Tickets";
import { generateId } from "../../utils/generateKey";
import { IVehicle } from "../../vehicle/Vehicle";
import { Gate } from "../Gate";

export class EntranceGate extends Gate {
  constructor(gateId: string, parkingLot: ParkingLot) {
    super(gateId, parkingLot);
  }

  processVehicleEntry(vehicle: IVehicle): Ticket {
    if (!this.isOperational()) {
      console.log("This Gate is not operational");
      return;
    }

    // i need to check my if i have required spot or larger spot avaialble or not..
    const requiredVehicleSpotSize = vehicle.getRequriedSpotSize();

    // console.log("requiredVehicleSpotSize", requiredVehicleSpotSize);
    //! important........
    const spot: ParkingSpot = this.parkingLot.getAvailableSpot(
      requiredVehicleSpotSize,
    );

    spot.occupiedSpot(vehicle);
    const newTicket = new Ticket(
      generateId(),
      vehicle.getVehicleNumber(),
      spot.getSpotId(),
    );

    return newTicket;
  }
}
