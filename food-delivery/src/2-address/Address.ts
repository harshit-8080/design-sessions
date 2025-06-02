import { generateId } from "../utils/generateId";

export class Address {
  constructor(
    public street: string,
    public city: string,
    public pincode: number,
    public userId: string,
    public addressId: string = generateId(),
  ) {}

  updateAddress(street: string, city: string, pincode: number) {
    this.street = street;
    this.city = city;
    this.pincode = pincode;
  }
}
