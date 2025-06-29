import { SpotSize, VehicleType } from "./src/enum";
import { EntranceGate } from "./src/gates/entrance-gate/Entrance";
import { ExitGate } from "./src/gates/exit-gate/ExitGate";
import { ParkingSpot } from "./src/parking-spot/ParkingSpot";
import { ParkingLot } from "./src/parkingLot/ParkingLot";
import { UPI } from "./src/Payment/PaymentStrategy";
import { generateId } from "./src/utils/generateKey";
import { VehicleFactory } from "./src/vehicle/VehicleFactory";

const parkingLot = ParkingLot.getInstance();

parkingLot.addSpot(new ParkingSpot(generateId(), SpotSize.SMALL));
parkingLot.addSpot(new ParkingSpot(generateId(), SpotSize.MEDIUM));
parkingLot.addSpot(new ParkingSpot(generateId(), SpotSize.MEDIUM));
parkingLot.addSpot(new ParkingSpot(generateId(), SpotSize.LARGE));

const en1 = new EntranceGate(generateId(), parkingLot);
const en2 = new EntranceGate(generateId(), parkingLot);
const en3 = new EntranceGate(generateId(), parkingLot);

const ex1 = new ExitGate(generateId(), parkingLot);
const ex2 = new ExitGate(generateId(), parkingLot);
const ex3 = new ExitGate(generateId(), parkingLot);

parkingLot.addEntranceGate(en1);
parkingLot.addEntranceGate(en2);
parkingLot.addEntranceGate(en3);

parkingLot.addExitGate(ex1);
parkingLot.addExitGate(ex2);
parkingLot.addExitGate(ex3);

// console.log(parkingLot.spots);

const car = VehicleFactory.createVehicle(VehicleType.CAR, generateId());
const bike1 = VehicleFactory.createVehicle(VehicleType.BIKE, generateId());

const ticket1 = en1.processVehicleEntry(car);
const ticket2 = en1.processVehicleEntry(bike1);

parkingLot.addTicket(ticket1);
parkingLot.addTicket(ticket2);

//after
console.log(parkingLot.spots);

setTimeout(() => {
  ex1.proccessVehicleExit(ticket1.getTicketId(), new UPI());
}, 6000);

//before
console.log(parkingLot.spots);
