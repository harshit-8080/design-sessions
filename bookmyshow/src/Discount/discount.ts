export interface DiscountStrategy {
  applyDiscount(baseAmount: number): number;
}

export class FlatDiscount implements DiscountStrategy {
  constructor(private flatAmount: number) {}
  applyDiscount(baseAmount: number): number {
    return baseAmount - this.flatAmount;
  }
}

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percentage: number) {}
  applyDiscount(baseAmount: number): number {
    return baseAmount - (this.percentage / 100) * baseAmount;
  }
}
