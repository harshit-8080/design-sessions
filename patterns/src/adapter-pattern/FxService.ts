export interface IFxService {
  fetchFXRates(source: string, target: string, amount: number): number;
}

export class FxService implements IFxService {
  fetchFXRates(source: string, target: string, amount: number): number {
    console.log(
      `fetching FX rates and calulcate -> source - ${source} and Target - ${target} and amount - ${amount}`,
    );

    return amount * 2; // double
  }
}
