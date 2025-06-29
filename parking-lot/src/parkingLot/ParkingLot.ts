import { Admin } from "../admin/Admin";
import { SpotSize } from "../enum";
import { EntranceGate } from "../gates/entrance-gate/Entrance";
import { ExitGate } from "../gates/exit-gate/ExitGate";
import { ParkingSpot } from "../parking-spot/ParkingSpot";
import { Ticket } from "../tickets/Tickets";
import { IVehicle } from "../vehicle/Vehicle";

export class ParkingLot {
  static instance: ParkingLot;

  static getInstance() {
    if (!this.instance) {
      this.instance = new ParkingLot();
    }
    return this.instance;
  }

  constructor(
    public entrancegates: Map<string, EntranceGate> = new Map(),
    public exitGates: Map<string, ExitGate> = new Map(),
    public spots: Map<string, ParkingSpot> = new Map(), // it has all the spot..
    public tickets: Map<string, Ticket> = new Map(),
    public spotsBySize: Map<SpotSize, ParkingSpot[]> = new Map(), // indexing..
    public adminObserver = new Admin("admin123"),
  ) {
    spotsBySize.set(SpotSize.SMALL, new Array());
    spotsBySize.set(SpotSize.MEDIUM, new Array());
    spotsBySize.set(SpotSize.LARGE, new Array());

    // small :[]
    // medium :[]
    // LARGE :[]
  }

  addSpot(newParkingSpot: ParkingSpot) {
    this.spots.set(newParkingSpot.getSpotId(), newParkingSpot);
    //! impp......
    this.spotsBySize.get(newParkingSpot.getSpotSize()).push(newParkingSpot);
  }

  addEntranceGate(newEntranceGate: EntranceGate) {
    this.entrancegates.set(newEntranceGate.getGateId(), newEntranceGate);
  }

  addExitGate(newExitGate: ExitGate) {
    this.exitGates.set(newExitGate.getGateId(), newExitGate);
  }
  addTicket(newTicket: Ticket) {
    this.tickets.set(newTicket.getTicketId(), newTicket);
  }

  getVehicleByTicket(ticket: Ticket) {
    const spot = this.spots.get(ticket.getSpotId());
    return spot.getParkedVehicle();
  }

  getSpots() {
    return this.spots;
  }

  getAvailableSpot(requiredSize: SpotSize): ParkingSpot {
    // will get either the required lots or the larger slot if available???
    for (const key in SpotSize) {
      if (SpotSize[key] == requiredSize) {
        const spots = this.spotsBySize.get(requiredSize);

        for (let i = 0; i < spots.length; i++) {
          if (spots[i].isAvailable()) {
            return spots[i];
          }
        }
      }
    }

    console.log(requiredSize);

    if (requiredSize == SpotSize.MEDIUM) {
      const spots = this.spotsBySize.get(SpotSize.LARGE);
      for (let i = 0; i < spots.length; i++) {
        if (spots[i].isAvailable) {
          return spots[i];
        }
      }
    } else if (requiredSize == SpotSize.SMALL) {
      let spots = this.spotsBySize.get(SpotSize.MEDIUM);
      for (let i = 0; i < spots.length; i++) {
        if (spots[i].isAvailable) {
          return spots[i];
        }
      }
      spots = this.spotsBySize.get(SpotSize.LARGE);
      for (let i = 0; i < spots.length; i++) {
        if (spots[i].isAvailable) {
          return spots[i];
        }
      }
    }
  }
  notifyAdmin(vehicle: IVehicle, spotId: string, action: string) {
    this.adminObserver.notification(
      "NOTIFICATION: SPOT-ID " +
        spotId +
        "Vehicle:" +
        vehicle.getVehicleNumber() +
        "ACTION:" +
        action,
    );
  }
}
