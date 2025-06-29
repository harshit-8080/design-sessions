import { PaymentStatus, TicketStatus } from "../../enum";
import { ParkingLot } from "../../parkingLot/ParkingLot";
import { PaymentStratgey } from "../../Payment/PaymentStrategy";
import { PricingStrategy } from "../../pricingStratgey/price";
import { Gate } from "../Gate";

export class ExitGate extends Gate {
  constructor(gateId: string, parkingLot: ParkingLot) {
    super(gateId, parkingLot);
  }

  proccessVehicleExit(ticketId: string, payementStratgy: PaymentStratgey) {
    const ticket = this.parkingLot.tickets.get(ticketId);

    console.log(ticket);
    if (!(ticket.getStatus() == TicketStatus.ACTIVE)) {
      console.log("Invalid ticket");
    }

    ticket.setExitTime(new Date());
    const vehcile = this.parkingLot.getVehicleByTicket(ticket);

    const durationInSeconds = ticket.getParkingDurationInSeconds();
    const amount = PricingStrategy.calculatePrice(
      vehcile.getType(),
      durationInSeconds,
    );

    const paymentStatus: PaymentStatus = payementStratgy.pay(amount);
    if (!paymentStatus) {
      console.log("payment failed");
    }

    const spot = this.parkingLot.spots.get(ticket.getSpotId());
    spot.vacateSpot();
    ticket.setStatus(TicketStatus.PAID);

    this.parkingLot.notifyAdmin(vehcile, spot.getSpotId(), "EXITED");
    return true;
  }
}
